import "../styles/globals.css";// Global styles
import { NavBar, Footer } from "../Components"; // Ensure correct path

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
