import "@assets/css/plugins.css";
import "@assets/css/style.css";
import "@assets/css/responsive.css";
import "../styles/globals.css";
// import type { AppProps } from "next/app";
import Header from "@components/Layout/Header/Header";
import Footer from "@components/Layout/Footer/Footer";
import { Provider } from "react-redux";
import store from "@redux/store/store";

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Header />
            <div id="page-content">
                <Component {...pageProps} />
            </div>
            <Footer />
        </Provider>
    );
}
export default MyApp;
