import { Page } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

import LayoutComponent from "../../components/Layout/Layout";

export default function Homepage() {
  return (
    <Page>
      <TitleBar title="Fileupload admin"></TitleBar>
      <LayoutComponent />
    </Page>
  );
}
