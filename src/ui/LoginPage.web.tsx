import { useQuery } from '@tanstack/react-query';
import { useDataProvider } from 'react-admin';
import { Navigate } from 'react-router-dom';
import { CrmDataProvider } from '../types';
import { LoginForm } from './LoginForm.web';
import { LoginSkeleton } from './LoginSkeleton.web';

export const LoginPage = () => {
    const dataProvider = useDataProvider<CrmDataProvider>();
    const {
        data: isInitialized,
        error,
        isPending,
    } = useQuery({
        queryKey: ['init'],
        queryFn: async () => {
            return dataProvider.isInitialized();
        },
    });

    if (isPending) return <LoginSkeleton />;
    if (error) return <LoginForm />;
    if (isInitialized) return <LoginForm />;

    return <Navigate to="/sign-up" />;
};

// import * as React from 'react';
// import type { ReactNode } from 'react';
// import { Provider } from '@supabase/supabase-js';
// import { Divider, Stack } from '@mui/material';

// import {
//     AppleButton,
//     AzureButton,
//     BitbucketButton,
//     DiscordButton,
//     FacebookButton,
//     GithubButton,
//     GitlabButton,
//     GoogleButton,
//     KeycloakButton,
//     LinkedInButton,
//     NotionButton,
//     SlackButton,
//     SpotifyButton,
//     TwitchButton,
//     TwitterButton,
//     WorkosButton,
// } from './SocialAuthButton';
// import { AuthLayout } from '../layout/AuthLayout';
// import { LoginForm } from './LoginForm';

// /**
//  * A component that renders a login page to login to the application through Supabase. It renders a LoginForm by default. It support social login providers.
//  * @param props
//  * @param props.children The content of the login page. If not set, it will render a LoginForm.
//  * @param props.disableEmailPassword If true, the email/password login form will not be rendered.
//  * @param props.providers The list of social login providers to render. Defaults to no providers.
//  * @example
//  * import { LoginPage } from 'ra-supabase-ui-materialui';
//  * import { Admin } from 'react-admin';
//  *
//  * const App = () => (
//  *    <Admin dataProvider={dataProvider} loginPage={LoginPage}>
//  *       ...
//  *   </Admin>
//  * );
//  *
//  * @example With social login providers
//  * import { LoginPage } from 'ra-supabase-ui-materialui';
//  * import { Admin } from 'react-admin';
//  *
//  * const App = () => (
//  *    <Admin dataProvider={dataProvider} loginPage={<LoginPage providers={['github', 'twitter']} />}>
//  *       ...
//  *   </Admin>
//  * );
//  *
//  * @example With social login providers
//  * import { LoginPage } from 'ra-supabase-ui-materialui';
//  * import { Admin } from 'react-admin';
//  *
//  * const App = () => (
//  *    <Admin dataProvider={dataProvider} loginPage={<LoginPage providers={['github', 'twitter']} />}>
//  *       ...
//  *   </Admin>
//  * );
//  *
//  * @example With social login providers and no email/password login form
//  * import { LoginPage } from 'ra-supabase-ui-materialui';
//  * import { Admin } from 'react-admin';
//  *
//  * const App = () => (
//  *    <Admin dataProvider={dataProvider} loginPage={<LoginPage disableEmailPassword providers={['github', 'twitter']} />}>
//  *       ...
//  *   </Admin>
//  * );
//  */
// export const LoginPage = (props: LoginPageProps) => {
//     const {
//         children,
//         disableEmailPassword = false,
//         disableForgotPassword = false,
//         providers = [],
//     } = props;

//     console.log('LoginPage Web')

//     return (
//         <AuthLayout>
//             {children ?? (
//                 <>
//                     {disableEmailPassword ? null : (
//                         <LoginForm
//                             disableForgotPassword={disableForgotPassword}
//                         />
//                     )}
//                     {disableEmailPassword || providers.length === 0 ? null : (
//                         <Divider />
//                     )}
//                     {providers && providers.length > 0 ? (
//                         <>
//                             <Stack gap={1} padding={1}>
//                                 {providers.includes('apple') ? (
//                                     <AppleButton />
//                                 ) : null}
//                                 {providers.includes('azure') ? (
//                                     <AzureButton />
//                                 ) : null}
//                                 {providers.includes('bitbucket') ? (
//                                     <BitbucketButton />
//                                 ) : null}
//                                 {providers.includes('discord') ? (
//                                     <DiscordButton />
//                                 ) : null}
//                                 {providers.includes('facebook') ? (
//                                     <FacebookButton />
//                                 ) : null}
//                                 {providers.includes('gitlab') ? (
//                                     <GitlabButton />
//                                 ) : null}
//                                 {providers.includes('github') ? (
//                                     <GithubButton />
//                                 ) : null}
//                                 {providers.includes('google') ? (
//                                     <GoogleButton />
//                                 ) : null}
//                                 {providers.includes('keycloak') ? (
//                                     <KeycloakButton />
//                                 ) : null}
//                                 {providers.includes('linkedin') ? (
//                                     <LinkedInButton />
//                                 ) : null}
//                                 {providers.includes('notion') ? (
//                                     <NotionButton />
//                                 ) : null}
//                                 {providers.includes('slack') ? (
//                                     <SlackButton />
//                                 ) : null}
//                                 {providers.includes('spotify') ? (
//                                     <SpotifyButton />
//                                 ) : null}
//                                 {providers.includes('twitch') ? (
//                                     <TwitchButton />
//                                 ) : null}
//                                 {providers.includes('twitter') ? (
//                                     <TwitterButton />
//                                 ) : null}
//                                 {providers.includes('workos') ? (
//                                     <WorkosButton />
//                                 ) : null}
//                             </Stack>
//                         </>
//                     ) : null}
//                 </>
//             )}
//         </AuthLayout>
//     );
// };

// export type LoginPageProps = {
//     children?: ReactNode;
//     disableEmailPassword?: boolean;
//     disableForgotPassword?: boolean;
//     providers?: Provider[];
// };
