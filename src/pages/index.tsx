import Head from "next/head";

// Components
import Header from "@/sections/header/header";
import Hero from "@/sections/hero/hero";
import Footer from "@/sections/footer/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Water Monster</title>
        <meta name="description" content="Keep the Water Flow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}
