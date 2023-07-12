import Head from "next/head";
import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface Props {
  children: ReactNode;
  title: string;
}

export default function Layout({ children, title }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="My portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="gradient pointer-events-none fixed bottom-0 left-0 right-0 top-0" />
      <div className="mx-auto max-w-4xl p-4">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}
