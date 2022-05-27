import "@assets/css/plugins.css";
import "@assets/css/style.css";
import "@assets/css/responsive.css";
import "../styles/globals.css";
// import type { AppProps } from "next/app";
import Header from "@components/Layout/Header/Header";
import Footer from "@components/Layout/Footer/Footer";
import { Provider } from "react-redux";
import store from "@redux/store/store";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Toaster
                position="bottom-left"
                toastOptions={{
                    style: { fontSize: "20px", fontWeight: "bold" },
                }}
            />
            <Header />
            <div id="page-content">
                <Component {...pageProps} />
            </div>
            <Footer />
        </Provider>
    );
}
export default MyApp;
