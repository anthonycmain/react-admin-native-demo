import { Provider, SupabaseClient, User } from "@supabase/supabase-js";
import { AuthProvider, UserIdentity } from "ra-core";
import { Linking } from "react-native";
import MMKVStorage from "react-native-mmkv";

//TODO: Get Login Working and the uncomment the rest
export const supabaseAuthProvider = (
  client: SupabaseClient,
  { getIdentity, getPermissions, redirectTo }: SupabaseAuthProviderOptions
): SupabaseAuthProvider => {
  const authProvider: SupabaseAuthProvider = {
    async login(params) {
      const emailPasswordParams = params as LoginWithEmailPasswordParams;
      if (emailPasswordParams.email && emailPasswordParams.password) {
        const { error } = await client.auth.signInWithPassword(
          emailPasswordParams
        );

        if (error) {
          throw error;
        }
        return;
      }

      const oauthParams = params as LoginWithOAuthParams;
      if (oauthParams.provider) {
        const redirectUrl = Linking.canOpenURL(redirectTo || "/auth/callback"); // Deep link URL
        await client.auth.signInWithOAuth({
          provider: oauthParams.provider,
          options: { redirectTo: redirectUrl },
        });
        // OAuth flow redirects user, no immediate success
        return Promise.reject();
      }

      return Promise.reject(new Error("Invalid login parameters"));
    },
    // async setPassword({
    //   access_token,
    //   refresh_token,
    //   password,
    // }: SetPasswordParams) {
    //   const { error: sessionError } = await client.auth.setSession({
    //     access_token,
    //     refresh_token,
    //   });

    //   if (sessionError) {
    //     throw sessionError;
    //   }
    //   const { error } = await client.auth.updateUser({ password });

    //   if (error) {
    //     throw error;
    //   }
    // },
    // async resetPassword(params: ResetPasswordParams) {
    //   const { email, ...options } = params;
    //   const { error } = await client.auth.resetPasswordForEmail(email, options);

    //   if (error) {
    //     throw error;
    //   }
    // },
    // async logout() {
    //   const { error } = await client.auth.signOut();
    //   if (error) {
    //     throw error;
    //   }
    //   MMKVStorage.clearAll(); // Clear tokens securely
    // },
    // async checkError(error) {
    //   if (
    //     error.status === 401 ||
    //     error.status === 403 ||
    //     (error.status === 400 && error.name === "AuthSessionMissingError")
    //   ) {
    //     return Promise.reject();
    //   }

    //   return Promise.resolve();
    // },
    // async handleCallback() {
    //   const { access_token, refresh_token, type } = getUrlParams();

    //   if (type === "recovery" || type === "invite") {
    //     if (access_token && refresh_token) {
    //       return {
    //         redirectTo: () => ({
    //           pathname: redirectTo || "/set-password",
    //           params: { access_token, refresh_token, type },
    //         }),
    //       };
    //     }

    //     if (__DEV__) {
    //       console.error(
    //         "Missing access_token or refresh_token for invite or recovery"
    //       );
    //     }
    //   }
    // },
    // async checkAuth() {
    //   const storedSession = MMKVStorage.getString("supabase_session");
    //   if (!storedSession) {
    //     return Promise.reject();
    //   }

    //   const { data } = await client.auth.getSession();
    //   if (data.session == null) {
    //     return Promise.reject();
    //   }

    //   return Promise.resolve();
    // },
    // async getPermissions() {
    //   if (typeof getPermissions !== "function") {
    //     return;
    //   }

    //   const { data } = await client.auth.getUser();
    //   if (!data.user) {
    //     return;
    //   }

    //   return await getPermissions(data.user);
    // },
  };

  if (typeof getIdentity === "function") {
    authProvider.getIdentity = async () => {
      const { data } = await client.auth.getUser();
      if (!data.user) {
        throw new Error();
      }

      return await getIdentity(data.user);
    };
  }

  return authProvider;
};

const getUrlParams = () => {
  // Handle deep linking or navigation-based params
  const url = Linking.getInitialURL();
  if (!url) return {};

  const urlSearchParams = new URLSearchParams(url.split("?")[1]);
  const access_token = urlSearchParams.get("access_token");
  const refresh_token = urlSearchParams.get("refresh_token");
  const type = urlSearchParams.get("type");

  return { access_token, refresh_token, type };
};

export type GetIdentity = (user: User) => Promise<UserIdentity>;
export type GetPermissions = (user: User) => Promise<any>;
export type SupabaseAuthProviderOptions = {
  getIdentity?: GetIdentity;
  getPermissions?: GetPermissions;
  redirectTo?: string;
};

type LoginWithEmailPasswordParams = {
  email: string;
  password: string;
};

type LoginWithOAuthParams = {
  provider: Provider;
};

type LoginWithMagicLink = {
  email: string;
};

export interface SupabaseAuthProvider extends AuthProvider {
  login: (
    params:
      | LoginWithEmailPasswordParams
      | LoginWithMagicLink
      | LoginWithOAuthParams
  ) => ReturnType<AuthProvider["login"]>;
  setPassword: (params: SetPasswordParams) => Promise<void>;
  resetPassword: (params: ResetPasswordParams) => Promise<void>;
}

export type SetPasswordParams = {
  access_token: string;
  refresh_token: string;
  password: string;
};

export type ResetPasswordParams = {
  email: string;
  redirectTo?: string;
  captchaToken?: string;
};
