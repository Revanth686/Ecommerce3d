import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import Layout from "../components/Layout";
import React from "react";

if (typeof document === "undefined") {
  React.useLayoutEffect = React.useEffect;
}
function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default MyApp;
