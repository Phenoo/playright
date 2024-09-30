import Image from "next/image";
import React from "react";
import { SummaryAccordion } from "./SummaryAccordion";

export const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const Whoare = () => {
  const toBase64 = (str: string) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);
  return (
    <div className="max max-w-7xl w-full mx-auto p-4  md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="desk">
          <Image
            src={"/salonhair.svg"}
            placeholder={`data:image/svg+xml;base64,${toBase64(
              shimmer(700, 475)
            )}`}
            width={592}
            height={818}
            alt="fashion"
            className="object-contain "
          />
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-2xl uppercase md:text-center font-bold">
            Who is this for?
          </h4>
          <div className="mobile justify-center items-center w-full ">
            <img
              src={"/whoispro.png"}
              width={370}
              height={365}
              alt="fashion"
              className="w-[380px]  "
            />
          </div>
          <p className="">
            Please note that this program is not a paid course, and applicants
            will be accepted into the cohort based on the criteria below.
            <br />
            <br />
            To apply for the Prostylist Academy program, applicants must meet
            the following criteria:
          </p>
          <div className="desk">
            <ul className="list-disc space-y-4">
              <li>
                <strong>Identity:</strong> Must identify as Black, African, or
                of African descent (including African-American, Afro-descendant,
                or any other African heritage), Aboriginal, Torres Strait
                Islander, Indigenous Australian, or First Nations.
              </li>
              <li>
                <strong>Age:</strong> Must be over 18 years of age.
              </li>
              <li>
                <strong> Experience:</strong> Must have experience working as a
                hairstylist. A qualification is NOT required.
              </li>
              <li>
                <strong> Employment Status:</strong> Must be an active hair
                stylist [part-time or full-time], which can include working from
                home.
              </li>
              <li>
                <strong>Commitment:</strong> Must be able to attend all
                workshops over the four months (both virtual and physical
                workshops in Melbourne).
              </li>
              <li>
                <strong> Passion and Drive:</strong> Must demonstrate a strong
                passion for hair styling and a commitment to professional
                growth.
              </li>

              <li>
                <strong>Submission:</strong>
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
                <span></span>
              </li>
              <li>
                <strong>References:</strong> Must provide at least two
                references who can attest to the applicant&apos;s skills and
                dedication. [e.g. Could be a long-standing client or product
                supplier]
              </li>
            </ul>
          </div>
          <SummaryAccordion />
        </div>
      </div>
    </div>
  );
};

export default Whoare;
