import "../styles/globals.css";// Global styles
import { NavBar, Footer } from "../Components"; // Ensure correct path
import {CrowdFundingProvider} from '../Context/CrowdFunding'
export default function App({ Component, pageProps }) {
  return (
    <>
    <CrowdFundingProvider>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
      </CrowdFundingProvider>
    </>
  );
}
