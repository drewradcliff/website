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
      <div className="max-w-4xl mx-auto p-4">
        <div className="gradient fixed top-0 left-0 right-0 bottom-0" />
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}
