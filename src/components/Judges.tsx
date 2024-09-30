import Image from "next/image";
import React from "react";

const Judges = () => {
  return (
    <div className="md:pl-16  py-16">
      <h4 className="text-2xl uppercase text-center font-bold">
        MEET OUR JUDGES
      </h4>
      <br />
      <div className="flex gap-4">
        <div className="flex-1 w-full  max-w-5xl mx-auto p-4 gap-8 md:gap-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[0, 1].map((_: any, i: number) => (
              <div className="grid grid-cols-2 gap-4" key={i}>
                <div className="w-full">
                  <Image
                    src={"/judge.svg"}
                    alt="yellow"
                    height={220}
                    width={147}
                    className="w-[147px] h-[220px]"
                  />
                </div>
                <div className="space-y-2">
                  <h4 className="nanum-pen-script-regular text-3xl">NAME</h4>
                  <h6 className="font-italic">Title</h6>
                  <p className="text-xs">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            ))}
          </div>

          <br />
          <br />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[0, 1].map((_: any, i: number) => (
              <div className="grid grid-cols-2 gap-4" key={i}>
                <div className="w-full">
                  <Image
                    src={"/judge.svg"}
                    alt="yellow"
                    height={220}
                    width={147}
                    className="w-[147px] h-[220px]"
                  />
                </div>
                <div className="space-y-2">
                  <h4 className="nanum-pen-script-regular text-3xl">NAME</h4>
                  <h6 className="font-italic">Title</h6>
                  <p className="text-xs">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-full desk">
          <Image
            src={"/yellow.png"}
            alt="yellow"
            height={600}
            width={200}
            className="h-full min-h-[550px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Judges;
