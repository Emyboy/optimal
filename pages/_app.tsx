import "@assets/css/plugins.css";
import "@assets/css/style.css";
import "@assets/css/responsive.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@components/Layout/Header/Header";
import Footer from "@components/Layout/Footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div id="page-content">
        <Component {...pageProps} />;
      </div>
      <Footer />
    </>
  );
}
export default MyApp;
