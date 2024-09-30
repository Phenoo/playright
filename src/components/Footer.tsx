"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className="bg-black pt-16 pb-4 text-white ">
      <div className="flex justify-center flex-col text-center gap-8">
        <div>
          <h4 className="text-xl md:text-2xl lg:text-4xl uppercase mb-4">
            Our partners
          </h4>
          <p>Connect and find out more about our sponsors</p>
          <div className="grid grid-cols-3 gap-0 md:gap-4 place-items-center justify-center items-center max-w-4xl mx-auto">
            <a href=" https://www.instagram.com/african.ya/" target="_blank">
              <img
                src={"/aya.png"}
                className="w-48 h-16 md:h-24 object-contain"
                width={150}
                height={100}
                alt="aya"
              />
            </a>
            <a
              href=" https://www.instagram.com/organicsuku/"
              target="_blank"
              className="desk"
            >
              <img
                src={"/OrganicSUKU_LOGO_UPDATED_Horizontal-White.png"}
                // width={200}
                // height={100}
                alt="organic-suku-logo"
                className="object-contain desk"
              />
            </a>
            <a
              href=" https://www.instagram.com/organicsuku/"
              target="_blank"
              className="mobile"
            >
              <img
                src={"/OrganicSUKU_LOGO_UPDATED_Horizontal-White.png"}
                // width={200}
                // height={100}
                alt="organic-suku-logo"
                className=" object-contain mobile"
              />
            </a>
            <a href=" https://www.instagram.com/lumela.co/" target="_blank">
              <Image
                src={"/lumela.png"}
                className="w-48 h-14 scale-125 md:h-24 object-contain"
                width={150}
                height={100}
                alt="aya"
              />
            </a>
          </div>
        </div>
        <h4 className="text-xl md:text-3xl lg:text-4xl">
          <span className="font-bold">ProStylist</span> Academy
        </h4>
        <div className="flex gap-4 items-center text-sm justify-center">
          {pathname === "/contact" ? (
            <>
              <a href="#contact">Signup</a>
              <a href="#contact">Contacts</a>
              <a href="#contact">Privacy Policy</a>
            </>
          ) : (
            <>
              <Link href="/contact">Signup</Link>
              <Link href="/contact">Contacts</Link>
              <Link href="/contact">Privacy Policy</Link>
            </>
          )}
        </div>
        <div className="bg-white h-[1px] w-full" />
        <p className="text-sm pb-2">Copyright © 2024- All rights reserved</p>
      </div>
    </footer>
  );
};
export default Footer;
