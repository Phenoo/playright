"use client";

import React, { useState } from "react";

import { motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

const FaqComponent = () => {
  const [sindex, setSindex] = useState<any>(null);

  const handleClick = (index: number) => {
    setSindex(index);
    if (sindex === index) {
      setSindex(null);
    }
  };
  const faqItems = [
    {
      Question: "What courses does the fashion academy offer?",
      Answer:
        "Our fashion academy offers a range of courses including Fashion Design, Pattern Making, Textile Science, Fashion Marketing, and Styling. We also offer short workshops and masterclasses in specialized areas.",
    },
    {
      Question: "What are the prerequisites for enrolling in the courses?",
      Answer:
        "Most of our courses require a high school diploma or equivalent. Some advanced courses may have additional prerequisites such as prior coursework in design or experience in the fashion industry.",
    },
    {
      Question: "Do you offer any scholarships or financial aid?",
      Answer:
        "Yes, we offer several scholarships based on merit and financial need. We also have partnerships with organizations that provide financial aid for eligible students. Please visit our Scholarships and Financial Aid page for more information.",
    },
    {
      Question: "How long does it take to complete a course?",
      Answer:
        "The duration of our courses varies depending on the program. Full-time diploma programs typically take 1 to 2 years to complete, while short courses and workshops can range from a few days to several weeks.",
    },
    {
      Question:
        "What are the career opportunities after completing a course at the fashion academy?",
      Answer:
        "Graduates from our academy have gone on to pursue successful careers in fashion design, fashion marketing, styling, and fashion entrepreneurship. We also provide career services to help students with job placements and internships.",
    },
  ];

  return (
    <div>
      <motion.section
        className="h-full py-16"
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
        <div className="flex items-center gap-4 flex-col justify-center">
          {/* <Tophead title='frequently asked questions' /> */}
          <h4 className="text-2xl uppercase text-center font-bold">
            frequently asked questions{" "}
          </h4>
          <p></p>
        </div>

        <div className="text-black max-w-5xl mx-auto p-4">
          {faqItems.map((item, index) => (
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
                  <span className="font-bold mr-4">0{index + 1}</span>
                  {item.Question}
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
                  <motion.p
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
                    {item.Answer}
                  </motion.p>
                )}
              </div>
            </article>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default FaqComponent;
