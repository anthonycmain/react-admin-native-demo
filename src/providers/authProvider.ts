import { supabaseAuthProvider } from "ra-supabase";
import { supabase } from "./supabase";

export const authProvider = supabaseAuthProvider(supabase, {
  getIdentity: async (user) => {
    const { data, error } = await supabase
      .from("sales")
      .select("id, first_name, last_name, td_role")
      .ilike("email", user.email as string)
      .single();

    if (!data || error) {
      throw new Error();
    }
    return {
      id: data.id,
      fullName: `${data.first_name} ${data.last_name}`,
    };
  },
});

export const loginWithTokens = async ({ email, password }) => {
  const { data: session, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error("Login failed");
  }

  return session;
};
