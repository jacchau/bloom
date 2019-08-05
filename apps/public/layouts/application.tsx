import * as React from "react";
import SiteHeader from "@dahlia/ui-components/src/headers/site_header";

const Layout = props => (
  <>
    <SiteHeader />
    <main className="flex">
      {props.children}
    </main>
    <hr/>
    <footer>footer</footer>
  </>
);

export default Layout;
