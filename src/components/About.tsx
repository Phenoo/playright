import React from "react";

const About = () => {
  return (
    <div className="flex flex-col gap-4 text-center max-w-3xl w-full mx-auto p-4 space-y-4 md:space-y-10 py-8 md:py-16">
      <h4 className="uppercase font-bold text-2xl">
        Welcome to The{" "}
        <span className="nanum-pen-script-regular text-3xl lg:text-5xl">
          {" "}
          Prostylist
        </span>{" "}
        Academy
        <br />
        Australia&apos;s First of Its Kind !
      </h4>

      <p className="text-base md:text-xl text-center">
        Are you ready to take the next step in your styling career? The
        Prostylist Academy is here to guide you. Spanning four months from
        November 2024 to February 2025, this program is tailored specifically
        for Black, African, Aboriginal, Torres Strait Islander, Indigenous
        Australian, and First Nations stylists who aspire to excel in salon or
        editorial work.
        <br />
        <br />
        Over the course of eight immersive workshops, you&apos;ll receive
        mentorship and hands-on training from industry leaders. And here&apos;s
        the exciting part - the top stylists will get the incredible opportunity
        to work at the Melbourne Fashion Festival in 2025.
        <br />
        This isn&apos;t just a program; it&apos;s a launchpad for your career.
        We&apos;re here to help you gain the qualifications that open doors to
        professional salon and editorial opportunities.
      </p>
    </div>
  );
};

export default About;
