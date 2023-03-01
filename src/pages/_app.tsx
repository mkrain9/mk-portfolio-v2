import Navbar from "@/components/navbar/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) {
  const Layout = Component.Layout || EmptyLayout;
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

const EmptyLayout = ({ children }: { children: any }) => <>{children}</>;
