import Image from "next/image";
import React from "react";

const Why = () => {
  return (
    <div className="max-w-7xl w-full mx-auto p-4 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-1 ">
          <div className="order-2 md:order-1 lg:col-span-7 desk">
            <Image
              src={"/salons.jpeg"}
              width={350}
              height={300}
              alt="fashion"
              className="h-[324px] min-w-[370px] md:min-w-[320px] md:w-[320px] w-full  object-cover object-top  "
            />
          </div>
          <div className="order-1 md:order-2 lg:col-span-5 space-y-4">
            <div>
              <h4 className="uppercase font-bold text-xl desk md:text-2xl items-center gap-2">
                <span>Why</span>
                <span className="nanum-pen-script-regular text-3xl md:text-4xl">
                  Prostylist
                </span>
              </h4>
              <h4 className="uppercase font-bold text-xl desk md:text-2xl">
                Academy
              </h4>
              <h4 className="uppercase font-bold text-xl mobile md:text-2xl">
                <span>Why</span>
                <span className="nanum-pen-script-regular text-3xl md:text-5xl mx-2">
                  {" "}
                  Prostylist
                </span>
                Academy
              </h4>
            </div>
            <div className="mobile justify-center items-center">
              <Image
                src={
                  "/Global Indigenour runway photos by Lucas Dawson (19).jpg"
                }
                width={370}
                height={340}
                alt="fashion"
                className="h-[365px] w-[370px]  object-cover object-top  "
              />
            </div>
            <p className="">
              The Prostylist Academy exists to invest in the careers of young
              Black hair stylists because we recognise the immense talent and
              potential within this community. Our goal is simple: to help you
              grow professionally and give you the tools you need to succeed in
              the beauty industry.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8">
          <div className="desk space-y-2 flex-col">
            <Image
              src={"/lupita.png"}
              width={600}
              height={400}
              alt="fashion"
              className="h-[300px] max-w-[700px]  object-cover  w-full"
            />
            <p className="text-black/50 text-xs">
              <em>(Credit: PayPal Melbourne Fashion Festival)</em>
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl md:text-2xl uppercase  font-bold">
              WE{" "}
              <span className="nanum-pen-script-regular text-3xl md:text-5xl">
                {" "}
                BELIEVE...
              </span>
            </h4>
            <div className="mobile gap-2  flex-col">
              <Image
                src={"/lupita.png"}
                width={600}
                height={400}
                alt="fashion"
                className="h-[300px] max-w-[700px]  object-cover w-full"
              />
              <p className="text-black/50 text-xs block">
                <em>(Credit: PayPal Melbourne Fashion Festival)</em>
              </p>
            </div>

            <div className="md:ml-10 leading-tight">
              <p>
                We believe that industry inclusivity is essential, not only for
                enriching the beauty industry but also for representing and
                empowering Black professionals. In Australia, there&apos;s a
                true lack of texture inclusivity in professional spaces.
                <br />
                <br />
                We&apos;re here to change that. By creating opportunities for
                mentorship, skill development, and high-profile exposure, we aim
                to break down these barriers. Our mission is to empower and
                develop Black stylists, giving them a clear pathway to grow and
                ensuring that the beauty industry truly reflects the diversity
                of the society it serves.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
