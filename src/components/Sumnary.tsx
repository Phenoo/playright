import Image from "next/image";
import React from "react";

const Sumnary = () => {
  return (
    <div className="max max-w-7xl w-full mx-auto p-4 py-8 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="desk">
          <Image
            src={"/Image (1).svg"}
            alt="who"
            width={699}
            className="h-[527px] object-cover object-top"
            height={527}
          />
        </div>

        <div className="space-y-4">
          <h4 className="text-2xl font-bold uppercase">
            About
            <span className="nanum-pen-script-regular text-3xl md:text-4xl mr-4">
              {" "}
              prostylist
            </span>
            Academy
          </h4>
          <div className="mobile">
            <Image
              src={"/summary.jpg"}
              alt="who"
              width={380}
              className="h-[370px] object-cover "
              height={380}
            />
          </div>
          <p className="desk">
            The ProStylist Academy is the first of its kind in Australia,
            designed specifically for Black stylists who want to turn their
            talent into a professional career. Spanning four months, from
            November 2024 until March 2025, this program offers eight workshops
            where you&apos;ll receive mentorship and training from industry
            experts.
            <br />
            <br />
            The program&apos;s highlight is the chance for the top stylist to
            work at the Melbourne Fashion Festival in 2025. This isn&apos;t just
            training; it&apos;s a catalyst for your career, helping you gain the
            qualifications that open doors to professional salon and editorial
            opportunities.
          </p>
          <p className="mobile leading-tight">
            The ProStylist Academy is the first of its kind in Australia,
            designed specifically for Black stylists who want to turn their
            talent into a professional career. Spanning four months, from
            November 2024 until March 2025, this program offers eight workshops
            where you&apos;ll receive mentorship and training from industry
            experts.
            <br />
            <br />
            The program&apos;s highlight is the chance for the top stylist to
            work at the Melbourne Fashion Festival in 2025. This isn&apos;t just
            training; it&apos;s a catalyst for your career, helping you gain the
            qualifications that open doors to professional salon and editorial
            opportunities.
          </p>
        </div>
      </div>
      <br />
      <div className="desk">
        <br />
        <br />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h4 className="uppercase font-bold text-2xl">
            <span className="nanum-pen-script-regular text-2xl md:text-4xl mr-3">
              Prostylist
            </span>
            Academy OUTLINE
          </h4>
          <div className="mobile ">
            <Image
              src={"/runaway.png"}
              width={600}
              height={300}
              alt="fashion"
              className="h-[365px] max-w-[600px] object-cover w-full"
            />
          </div>
          <div>
            <p>
              The program will be a combination of intensive workshops,
              mentorship and masterclasses delivered by industry experts to
              upskill you and provide exposure to professionalising your hair
              business.
            </p>
            <br />
            <ul className="list-disc space-y-1 ml-4">
              <li>Vision & goal setting</li>
              <li>
                Mentorship opportunities from successful black business owners
                in the Australian beauty landscape Connections and networking
                with black models in the professional fashion landscape 
              </li>

              <li>Physical training in black hair care & styling</li>
              <li>
                Support in setting up tools & systems to operate a functioning
                business (I.e. client booking systems)
              </li>
              <li>Branding, marketing & content capture training</li>
            </ul>
             
            <br />
            <p>
              Post your training & masterclass attendance you will be graded by
              the Prostylist Academy judging panel on the following:  
            </p>
            <br />
            <ul className="list-disc space-y-1 mt-4 ml-4">
              <li>Your physical skills in hair styling</li>
              <li> Business management </li>
              <li>
                Professional portfolio & brand presence over the four-month
                period
              </li>
            </ul>
            <br />
            <p>
              The winner of The ProStylist Academy will have the incredible
              opportunity to join the SUKU Hair Team at the Melbourne Fashion
              Festival Runway in March 2025. Beyond the top-tier professional
              training, this program offers you invaluable connections and
              networking opportunities with like-minded individuals who share
              your passion.
            </p>
          </div>
        </div>
        <div className="desk justify-end">
          <Image
            src={"/runaway.png"}
            width={600}
            height={300}
            alt="fashion"
            className="h-[700px] w-[525px] "
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Sumnary;
