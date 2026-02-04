import Image from "next/image";
import React from "react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { HEADER_FONT } from "@/lib/font";

const Hero = () => {
  return (
    <div className="bg-[#F2F0F1]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center justify-center gap-4 overflow-hidden px-5 py-10 md:grid-cols-2">
        {/* Hero Text  */}
        <div>
          <h1 className={`${HEADER_FONT.className} text-5xl font-black`}>
            Find clothes <br /> that matches <br /> your style
          </h1>
          <p className="my-5">
            Browse through our range of meticulously crafted garments, designed
            to bring out your individuality and cater to your sense of style
          </p>

          <Button className="max-md:w-full"> Shop Now </Button>

          <div className="mt-10 flex h-20 flex-wrap">
            <div>
              <p className="text-3xl font-black">200+</p>
              <p className="text-sm">International Brand</p>
            </div>

            <Separator orientation="vertical" className="mx-4" />

            <div>
              <p className="text-3xl font-black">2,000+</p>
              <p className="text-sm">High-Quality Products</p>
            </div>

            <Separator orientation="vertical" className="mx-4" />

            <div>
              <p className="text-3xl font-black">30,000+</p>
              <p className="text-sm">Happy Customers</p>
            </div>
          </div>
        </div>
        {/* Hero Image */}
        <div className="relative h-[550px] w-full">
          <Image
            src="/images/Vector.png"
            alt="Vector image"
            width={50}
            height={50}
            className="absolute top-[50%] left-5"
          />
          <Image
            src="/images/hero.jpg"
            alt="Hero image"
            width={800}
            height={800}
          />
          <Image
            src="/images/Vector.png"
            alt="Vector image"
            width={100}
            height={100}
            className="absolute top-[20%] right-5"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
