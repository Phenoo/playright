import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="">
      <section id="contact"></section>
      <div className="contact relative"></div>
      <div className="grid grid-cols-1 gap-8">
        <div className="p-4 md:p-8 lg:p-12 max-w-6xl w-full mx-auto space-y-4">
          <h4 className="uppercase font-bold text-xl md:text-2xl text-center ">
            Are you ready to elevate your hairstyling career to the next level?
          </h4>
          <p>
            ProStylist Academy is the first program of its kind in Australia,
            designed to elevate the careers of young Black hair stylists. This
            program spans four months, from November 2024 to March 2025, and
            includes eight intensive workshops. Participants will receive
            mentorship, training, and the opportunity to work at the Melbourne
            Fashion Festival in 2025.
          </p>
          <div className="space-y-4">
            <h4>
              <strong>Commitment and Criteria:</strong>
            </h4>
            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Identity:</strong>
                Must identify as Black, African, or of African descent
                (including African-American, Afro-descendant, or any other
                African heritage), Aboriginal, Torres Strait Islander,
                Indigenous Australian, or First Nations.
              </li>
              <li>
                <strong>Age:{"  "}</strong>Must be over 18 years of age.
              </li>
              <li>
                <strong>Experience:{"  "}</strong>Must have experience working
                as a hairstylist. A qualification is NOT required.
              </li>
              <li>
                <strong>Employment Status:{"  "}</strong>
                Must be an active hair stylist [part-time or full-time], which
                can include working from home.
              </li>
              <li>
                <strong>Commitment:{"  "}</strong>
                Must be able to attend all workshops over the four months (both
                virtual and physical workshops in Melbourne).
              </li>
              <li>
                <strong>Passion and Drive:{"  "}</strong>
                Must demonstrate a strong passion for hair styling and a
                commitment to professional growth.
              </li>

              <li>
                <strong>Submission:{"  "}</strong>
                <ul className="space-y-2">
                  <li>
                    <span className="underline">Submit Your Portfolio:</span>{" "}
                    You must submit 3 images of your best work.
                  </li>
                  <li>
                    <span className="underline">Show Us Your Work Area:</span>{" "}
                    You must submit an image of where you do your work.
                  </li>
                  <li>
                    <span className="underline">Show Us Who You Are:</span>{" "}
                    Share a 30- 60 second clip of your journey into the hair
                    business.
                  </li>
                  <li>
                    <span className="underline">
                      Send us Your Website & Socials:
                    </span>{" "}
                    Send a link to your social platform or website
                  </li>
                </ul>
              </li>

              <li>
                <strong>References:</strong> Must provide at least two
                references who can attest to the applicant&apos;s skills and
                dedication. [e.g. Could be a long-standing client or product
                supplier]
              </li>
            </ul>

            <ContactForm />
          </div>
        </div>
      </div>

      <div className="bg-[#F8F8DC] flex justify-center p-4">
        <h4 className="uppercase font-semibold text-xs md:text-sm">
          on a mission to empower black stylists
        </h4>
      </div>
    </div>
  );
};

export default Page;
