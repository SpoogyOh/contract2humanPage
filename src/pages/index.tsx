import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Mail from "../components/Mail";
import HowItWorks from "../components/HowItWorks";

import Footer from "../components/Footer";
import Contact2 from "../components/Contact2";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Contract to Human</title>
        <meta name="description" content="Veträge analysieren" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar />
      <Main />
      <HowItWorks />
      <div className="py-80"></div>
      <Mail />
      <div className="py-2"></div>

      <Contact2 />
      <Footer />
    </div>
  );
}
