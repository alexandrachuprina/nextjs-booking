import "@/styles/globals.scss";

import type { AppProps } from "next/app";
import { Open_Sans } from "next/font/google";
import Layout from "@/components/Layout";

const opensans = Open_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={opensans.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
