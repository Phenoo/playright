"use client";

import React, { useState } from "react";

import { motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

export const SummaryAccordion = () => {
  const [sindex, setSindex] = useState<any>(null);

  const handleClick = (index: number) => {
    setSindex(index);
    if (sindex === index) {
      setSindex(null);
    }
  };
  const accordionData = [
    {
      title: "Identity",
      content:
        "Must identify as Black, African, or of African descent (including African-American, Afro-descendant, or any other African heritage), Aboriginal, Torres Strait Islander, Indigenous Australian, or First Nations.",
    },
    {
      title: "Age",
      content: "Must be over 18 years of age.",
    },
    {
      title: "Experience",
      content:
        "Must have experience working as a hairstylist. A qualification is NOT required.",
    },
    {
      title: "Employment Status",
      content:
        "Must be an active hair stylist [part-time or full-time], which can include working from home.",
    },
    {
      title: "Commitment",
      content:
        "Must be able to attend all workshops over the four months (both virtual and physical workshops in Melbourne).",
    },
    {
      title: "Passion and Drive",
      content:
        "Must demonstrate a strong passion for hair styling and a commitment to professional growth.",
    },
    {
      title: "Submissions",
      content: (
        <>
          <strong>Submit your portfolio:</strong> You must submit 3 images of
          your best work. <br />
          <strong>Show Us Your Work Area:</strong> You must submit an image of
          where you do your work.
          <br />
          <strong>Show Us Who You Are:</strong> Share a 30-60 second clip of
          your journey into the hair business.
          <br />
          <strong>Send us Your Website & Socials:</strong> Send a link to your
          social platform or website.
        </>
      ),
    },
    {
      title: "References",
      content:
        " Must provide at least two references who can attest to the applicant's skills and dedication. [e.g. Could be a long-standing client or product supplier]",
    },
  ];
  return (
    <div className=" md:hidden">
      <motion.section
        className="h-full "
        initial={{
          x: -100,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.4 },
        }}
      >
        <div className="text-black max-w-5xl mx-auto p-4">
          {accordionData.map((item, index) => (
            <article
              key={index}
              className="py-6 overflow-hidden border-b border-b-[#111] text-black cursor-pointer "
              onClick={() => handleClick(index)}
            >
              <div
                className="flex justify-between items-center"
                onClick={() => handleClick(index)}
              >
                <h4
                  className={`text-md md:text-lg capitalize font-[500] ${
                    sindex === index ? " font-bold" : ""
                  }`}
                >
                  {/* <span className="font-bold mr-4">0{index + 1}</span> */}
                  {item.title}
                </h4>
                <div>
                  <button
                    onClick={() => handleClick(index)}
                    aria-expanded="true"
                  >
                    {sindex === index ? <Minus color="#054FB3" /> : <Plus />}
                  </button>
                </div>
              </div>

              <div>
                {sindex === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{
                      height: "auto",
                      transition: { duration: 0.2 },
                    }}
                    exit={{
                      height: 0,
                      transition: { duration: 0.2, delay: 0.3 },
                    }}
                    className="mt-4"
                  >
                    {item.content}
                  </motion.div>
                )}
              </div>
            </article>
          ))}
        </div>
      </motion.section>
    </div>
  );
};
