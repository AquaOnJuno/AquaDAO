import { ReactNode } from "react";
import Head from "next/head";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-base-100 text-base-content bg-black "
      style={{ fontFamily: "Inter" }}
    >
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITE_TITLE}</title>
        <meta name="description" content="Bringing clean water to every person
on the planet." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <div className="flex flex-col items-center justify-center w-full">
        {children}
      </div>
      {/* <footer className="flex items-center justify-center w-full h-24">
        Powered by{" "}
        <a
          className="pl-1 link link-primary link-hover"
          href="https://github.com/cosmos/cosmjs"
        >
          CosmJS
        </a>
        <span className="pl-1"> and</span>
        <a
          className="pl-1 link link-primary link-hover"
          href="https://keplr.app/"
        >
          Keplr
        </a>
      </footer> */}
    </div>
  );
}
