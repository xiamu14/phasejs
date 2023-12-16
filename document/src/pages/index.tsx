// pages/index.js

import Head from "next/head";
import { RecoilRoot } from "recoil";
import AppContainer from "../components/app_container";
import Content from "../components/content";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

export default function Home() {
  return (
    <RecoilRoot>
      <Head>
        <title>PhaseJS</title>
      </Head>
      <AppContainer>
        <Navbar />
        <Sidebar />
        <Content />
      </AppContainer>
    </RecoilRoot>
  );
}
