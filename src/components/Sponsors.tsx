import Image from "next/image";
import React from "react";

const Sponsors = () => {
  return (
    <div className="py-10 max-w-6xl w-full mx-auto p-4 flex flex-col gap-10">
      <h4 className="text-xl md:text-2xl uppercase md:text-center font-bold">
        Get to know your sponsors
      </h4>

      <div className="flex flex-col gap-6 md:gap-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="relative desk">
            <Image
              src={"/ayasponsor.svg"}
              width={400}
              height={400}
              alt="lumea=spomsot"
              className="w-full max-w-[600px] object-cover object-top h-[323px] rounded-md"
            />
          </div>
          <div className="space-y-4">
            <h4 className="text-2xl uppercase font-bold">AYA</h4>
            <div className="mobile ">
              <Image
                src={"/AYA High Quality.jpeg"}
                width={380}
                height={264}
                alt="aya sponsor"
                className="min-w-[370px] w-full object-cover  h-[264px]"
              />
            </div>
            <div className="space-y-4">
              <a
                href=" https://www.instagram.com/african.ya/"
                target="_blank"
                className=" p-4 font-italic text-xs md:text-sm bg-[#F8F8DC] mobile w-fit"
              >
                <em>Learn more about Aya</em>
              </a>
              <p className=" text-base md:text-xl">
                AYA is dedicated to empowering African youth by providing
                opportunities for skill development, leadership training, and
                community engagement. Their mission is to uplift and support
                young Africans in achieving their full potential and
                contributing positively to their communities.
              </p>
              <a
                href=" https://www.instagram.com/african.ya/"
                target="_blank"
                className=" p-4 font-italic text-xs md:text-sm bg-[#F8F8DC] desk w-fit"
              >
                <em>Learn more about AYA</em>
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-2xl uppercase font-bold">Organic Suku</h4>

            <div className="mobile justify-center items-center ">
              <img
                src={"/organicsponsor.JPG"}
                // width={380}
                // height={264}
                alt="organic=sponsor"
                className="min-w-[380px]  object-cover object-top h-[250px]"
              />
            </div>

            <div className="space-y-4">
              <a
                href="https://www.instagram.com/organicsuku/"
                className=" p-4 font-italic text-xs md:text-sm bg-[#F8F8DC] mobile w-fit"
              >
                <em>Learn more about Organic Suku</em>
              </a>
              <p className=" text-base md:text-xl">
                At organic SUKU, we deeply value and celebrate the beauty and
                versatility of textured hair. Our mission is to promote
                inclusivity by creating access to high-quality products & salon
                services, and texture education, while redefining the standard
                of luxury experiences for individuals with textured hair in the
                Australian hair care industry.
              </p>
              <a
                href="https://www.instagram.com/organicsuku/"
                className=" p-4 font-italic text-xs md:text-sm bg-[#F8F8DC] desk w-fit"
              >
                <em>Learn more about Organic Suku</em>
              </a>
            </div>
          </div>

          <div className="relative desk">
            <Image
              src={"/organicsponsor.svg"}
              width={500}
              height={400}
              alt="organic=spomsot"
              className="w-full  object-cover object-top h-[250px]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative desk">
            <Image
              src={"/tatenda.svg"}
              width={400}
              height={400}
              alt="lumela sponsor"
              className="w-full max-w-[600px] object-cover object-center h-[360px]"
            />
          </div>
          <div className="space-y-4">
            <h4 className="text-2xl uppercase font-bold">Lumela</h4>

            <div className="mobile justify-center items-center ">
              <img
                src={"/240415 SheaMoisture Shea Changemakers 274 High.jpg"}
                // width={370}
                // height={264}
                alt="lumela sponsor"
                className="w-[370px]   h-[304px] object-cover object-top"
              />
            </div>
            <div className="space-y-4">
              <a
                href=" https://www.instagram.com/lumela.co/"
                target="_blank"
                className=" p-4 font-italic text-xs md:text-sm bg-[#F8F8DC] mobile w-fit"
              >
                <em>Learn more about Lumela</em>
              </a>
              <p className="text-base md:text-xl">
                Lumela was founded to bridge the accessibility gap in AU & NZ,
                ensuring BIPOC communities have true access to beauty, hair, and
                treatment services. With a solid foundation in tech, marketing,
                and digital content curation, our team is dedicated to
                democratizing access to these services and connecting
                individuals to the right specialists. Lumela is committed to
                empowering a diverse range of beauty, hair, and treatment
                specialists to start, build, and grow scalable businesses, all
                while ensuring no one feels like an afterthought in our
                community.
              </p>
              <a
                href=" https://www.instagram.com/lumela.co/"
                target="_blank"
                className=" p-4 font-italic text-xs md:text-sm bg-[#F8F8DC] desk w-fit"
              >
                <em>Learn more about Lumela</em>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
