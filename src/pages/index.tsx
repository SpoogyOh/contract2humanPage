import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Mail from "../components/Mail";
import HowItWorks from "../components/HowItWorks";
import Contact from "../components/Contact";


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
      <Mail />
      <Contact />

    </div>
  );
}
