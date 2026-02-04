import React from "react";

import { Button } from "@/components/ui/button";
import { HEADER_FONT } from "@/lib/font";

import Merchandise, { MerchandiseType } from "../shared/merchandise";

const items: MerchandiseType[] = [
  {
    productId: "1",
    imageUrl: "/images/merchandise/verticalstrippedshirt.png",
    productName: "Vertical Stripped Shirt",
    noOfStars: 5,
    currentPrice: 100,
    discount: 20,
  },
  {
    productId: "2",
    imageUrl: "/images/merchandise/couragegraphicsshirt.png",
    productName: "Courage Graphics Shirt",
    noOfStars: 5,
    currentPrice: 100,
    discount: 20,
  },
  {
    productId: "3",
    imageUrl: "/images/merchandise/looseshort.png",
    productName: "Loose Short",
    noOfStars: 5,
    currentPrice: 100,
    discount: 20,
  },
  {
    productId: "4",
    imageUrl: "/images/merchandise/folderskinnyjeans.png",
    productName: "Folder Skinny Jeans",
    noOfStars: 5,
    currentPrice: 100,
    discount: 20,
  },
];

const TopSelling = () => {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center px-5 py-10">
      <h2 className={`${HEADER_FONT.className} text-center text-3xl font-bold`}>
        TOP SELLING
      </h2>

      <div className="grid w-full grid-cols-2 gap-4 py-10 lg:grid-cols-4">
        {items.map((item) => (
          <Merchandise
            key={item.productId}
            productId={item.productId}
            imageUrl={item.imageUrl}
            productName={item.productName}
            noOfStars={item.noOfStars}
            currentPrice={item.currentPrice}
            discount={item.discount}
          />
        ))}
      </div>

      <div className="flex items-center justify-center">
        <Button className="max-md:w-full" variant="outline">
          View All
        </Button>
      </div>
    </div>
  );
};

{
  /* 45:17 */
}
{
  /* </div> */
}

export default TopSelling;
