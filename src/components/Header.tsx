"use client";

import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronRight, Instagram } from "lucide-react";

export const AnimatedTextCharacter = ({ text, className }: any) => {
  const letters: string[] = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ display: "flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

const navData = ["About", "Who it's for", "Program outline", "Sponsors"];

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <nav className="bg-black text-white navbar">
      <header className="top-0 w-full z-50 relative mx-auto right-0 left-0   max-w-7xl ">
        <div className="flex items-center justify-between p-4">
          <div className="flex gap-3 items-center">
            <div className="opacity-1 md:opacity-0">
              <MwnuSheet setMenuOpen={setMenuOpen} open={menuOpen} />
            </div>

            <Link href="/" className="flex select-none">
              <h4 className="text-lg md:text-xl lg:text-2xl">
                <span className="font-bold">ProStylist</span> Academy
              </h4>
            </Link>
          </div>

          {pathname === "/" ? (
            <>
              <ul
                // variants={container}
                // initial="hidden"
                // animate="visible"
                className="  text-white text-sm desk items-center gap-6 cursor-pointer "
              >
                {navData.map((e, i) => (
                  <a
                    key={i}
                    className=" text-white"
                    href={`#${e.toLocaleLowerCase()}`}
                  >
                    <li className="text-white! uppercase"> {e} </li>
                  </a>
                ))}
                <Link
                  href="/contact"
                  className="p-2 px-6 rounded-md low  bg-white text-sm text-black"
                >
                  Sign me up!
                </Link>
              </ul>
              <div className="md:hidden">
                <Link
                  href="/contact"
                  className="p-2 px-6 rounded-md low  bg-white text-xs text-black"
                >
                  Sign me up!
                </Link>
              </div>
            </>
          ) : (
            <ul>
              <Link
                href="/"
                className="p-2 px-6 rounded-md low  bg-white text-sm text-black"
              >
                Home
              </Link>
            </ul>
          )}
        </div>
        {/* {menuOpen && (
          <div className="md:hidden absolute top-0 left-0 w-full bg-[#111] text-white flex flex-col p-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="flex select-none">
                <h4 className="text-lg md:text-xl lg:text-2xl">
                  <span className="font-bold">ProStylist</span> Academy
                </h4>
              </Link>
              <div>
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="text-white bg-transparent"
                >
                  {menuOpen ? "Close" : "Menu"}
                </button>
              </div>
            </div>
            <br />
            <motion.ul
              variants={container}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-4"
            >
              {navData.map((e, i) => (
                <motion.a
                  key={i}
                  variants={child}
                  className="block"
                  href={`#${e.toLocaleLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                >
                  <li className="py-2"> {e} </li>
                </motion.a>
              ))}
              <Link
                href="/contact"
                className="py-2 px-4 rounded-md bg-white text-sm  text-black"
              >
                Sign me up!
              </Link>
            </motion.ul>
          </div>
        )} */}
      </header>
    </nav>
  );
};

const MwnuSheet = ({ setMenuOpen, open }: any) => (
  <Sheet defaultOpen={open} open={open} onOpenChange={() => setMenuOpen(!open)}>
    <SheetTrigger>
      <Image src={"/Menu.svg"} alt="menu" width={40} height={40} className="" />
    </SheetTrigger>
    <SheetContent>
      <div className="text-white h-full">
        <Link href="/" className="flex select-none">
          <h4 className="text-base text-white">
            <span className="font-bold">ProStylist</span> Academy
          </h4>
        </Link>
        <div className="flex flex-col justify-between h-full max-h-[92vh] gap-1">
          <div>
            <ul className="  text-white text-sm flex-col flex pt-6 gap-6 cursor-pointer ">
              {navData.map((e, i) => (
                <a
                  key={i}
                  className=" text-white"
                  href={`#${e.toLocaleLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                >
                  <li className="text-white! uppercase flex justify-between items-center gap-4">
                    <span>{e}</span>
                    <span>
                      <ChevronRight className="h-4 w-4" />
                    </span>
                  </li>
                </a>
              ))}
            </ul>
            <br />
            <hr />

            <div className="flex justify-center items-center w-full mx-auto mt-4">
              <Image
                src={"/pagant.jpg"}
                alt="fashion-image"
                width={169}
                height={153}
                className="h-[153px] w-full"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="https://www.instagram.com/prostylistacademy.au?igsh=MXcxb3ltOW9weG15dQ=="
              target="_blank"
              className="flex gap-1 items-center text-sm"
            >
              <Instagram className="fill-white text-black" />
              Follow the journey
            </a>
            <Link
              href="/contact"
              className="p-2 px-6 rounded-md low text-center  bg-white text-sm text-black"
            >
              Sign me up!
            </Link>
          </div>
        </div>
      </div>
    </SheetContent>
  </Sheet>
);
