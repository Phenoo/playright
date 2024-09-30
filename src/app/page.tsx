import About from "@/components/About";
import FaqComponent from "@/components/FaqComponent";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Sponsors from "@/components/Sponsors";
import Sumnary from "@/components/Sumnary";
import Whoare from "@/components/Who";
import Why from "@/components/Why";
import Image from "next/image";
import Link from "next/link";
import Judges from "../components/Judges";

export default function Home() {
  return (
    <main>
      <Hero />
      <section id="about">
        <About />
      </section>
      <section>
        <Why />
      </section>
      <section id="who%20it's%20for">
        <Whoare />
      </section>
      <div className="bg-[#F8F8DC] flex justify-center p-4 text-center">
        <Link
          href="/contact"
          className=" font-semibold animate-pulse text-sm md:text-base"
        >
          Applications closing on 31 October
        </Link>
      </div>
      <section id="program%20outline">
        <Sumnary />
      </section>
      <div className="bg-[#F8F8DC] flex justify-center p-4 text-center">
        <Link
          href={"/contact"}
          className=" font-semibold animate-pulse  text-sm md:text-base"
        >
          Apply for the 2024 Cohort
        </Link>
      </div>
      <section id="sponsors">
        <Sponsors />
      </section>
      {/* <section>
        <Judges />
      </section>
      <section>
        <FaqComponent />
      </section> */}
    </main>
  );
}
