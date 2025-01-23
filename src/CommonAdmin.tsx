import { CoreAdminContext, CoreAdminUI, Resource } from "ra-core";

import {
  dataProvider,
  getIdentity,
  getPermissions,
  redirectTo,
  supabaseClient,
} from "./providers/dataProvider";
import { i18nProvider } from "./providers/i18nProvider";
import { authProvider } from "./providers/authProvider";

import { Layout } from "./ui/Layout";
import { Dashboard } from "./Dashboard";
import { deals } from "./deals";
import { companies } from "./companies";
import { custom } from "./custom";
import LoginPage from "./ui/LoginPage";
import { supabaseAuthProvider } from "./providers/authProvider.ref";

export const Admin = () => {
  return (
    <CoreAdminContext
      dataProvider={dataProvider}
      i18nProvider={i18nProvider}
      authProvider={supabaseAuthProvider(supabaseClient, {
        getIdentity: getIdentity,
        getPermissions: getPermissions,
        redirectTo: redirectTo,
      })}
    >
      <CoreAdminUI
        dashboard={Dashboard}
        layout={Layout}
        title="React Admin"
        loginPage={LoginPage}
      >
        <Resource {...companies} />
        {/* <Resource {...deals} /> */}
        <Resource {...custom} />
      </CoreAdminUI>
    </CoreAdminContext>
  );
};
