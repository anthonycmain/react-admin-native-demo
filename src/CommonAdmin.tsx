import { CoreAdminContext, CoreAdminUI, Resource } from "ra-core";

import { dataProvider } from "./providers/dataProvider";
import { i18nProvider } from "./providers/i18nProvider";
import { authProvider } from "./providers/authProvider";

import { Layout } from "./ui/Layout";
import { Dashboard } from "./Dashboard";
import { products } from "./products";
import { categories } from "./categories";
import { companies } from "./companies";
import { custom } from "./custom";
import LoginPage from "./ui/LoginPage"

export const Admin = () => {
  return (
    <CoreAdminContext dataProvider={dataProvider} i18nProvider={i18nProvider} authProvider={authProvider} >
      <CoreAdminUI dashboard={Dashboard} layout={Layout} title="React Admin" loginPage={LoginPage}>
        <Resource {...companies} />
        <Resource {...products} />
        <Resource {...categories} />
        <Resource {...custom} />
      </CoreAdminUI>
    </CoreAdminContext>
  );
};
