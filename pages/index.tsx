import type { NextPage } from "next";
import Link from "next/link";
import {
  useRouter
} from "next/router";
import Hero from "components/Landing/Hero";
import Faq from "components/Landing/Faq";
import Revolutionary from "components/Landing/Revolutionary";
import ToBeChanged from "components/Landing/ToBeChanged";
import RealResult from "components/Landing/RealResult";
import WhatdoWedo from "components/Landing/WhatdoWedo";
import PrepareForLaunch from "components/Landing/PrepareForLaunch";

const Home = () => {
  const router = useRouter();
  return (
    <div className="w-full mt-20">
      <Hero />
      <Faq />
      <Revolutionary />
      <ToBeChanged />
      <RealResult />
      <WhatdoWedo />
      <PrepareForLaunch />
    </div >
  );
};

export default Home;
