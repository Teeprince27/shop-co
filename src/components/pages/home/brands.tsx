import Image from "next/image";
import React from "react";

const Brands = () => {
  return (
    <div className="bg-foreground p-5">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 md:justify-between">
        <div className="">
          <Image
            src="/images/brands/versace.png"
            alt="versace"
            width={100}
            height={100}
            className="h-[20px] w-auto"
          />
        </div>
        <div className="">
          <Image
            src="/images/brands/zara.png"
            alt="zara"
            width={100}
            height={100}
            className="h-[20px] w-auto"
          />
        </div>
        <div className="">
          <Image
            src="/images/brands/gucci.png"
            alt="gucci"
            width={100}
            height={100}
            className="h-[20px] w-auto"
          />
        </div>
        <div className="">
          <Image
            src="/images/brands/prada.png"
            alt="prada"
            width={100}
            height={100}
            className="h-[20px] w-auto"
          />
        </div>
        <div className="">
          <Image
            src="/images/brands/calvin.png"
            alt="calvin"
            width={100}
            height={100}
            className="h-[20px] w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Brands;
