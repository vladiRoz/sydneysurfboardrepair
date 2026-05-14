import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhatWeFix from "@/components/WhatWeFix";
import BeforeAfter from "@/components/BeforeAfter";
import Turnaround from "@/components/Turnaround";
import Recommendation from "@/components/Recommendation";
import Prices from "@/components/Prices";
import Team from "@/components/Team";
import DropOff from "@/components/DropOff";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhatWeFix />
        <div className={styles.compareRow}>
          <BeforeAfter />
          <Turnaround />
        </div>
        <Recommendation />
        <Prices />
        <Team />
        <DropOff />
      </main>
      <Footer />
    </>
  );
}
