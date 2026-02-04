import React from "react";

import { Button } from "@/components/ui/button";
import { HEADER_FONT } from "@/lib/font";

import Merchandise, { MerchandiseType } from "../shared/merchandise";

const items: MerchandiseType[] = [
  {
    productId: "1",
    imageUrl: "/images/merchandise/image 7 (15).png",
    productName: "T-shirt with tape Details ",
    noOfStars: 4,
    currentPrice: 120,
    // discount: 20
  },
  {
    productId: "2",
    imageUrl: "/images/merchandise/bluejean.png",
    productName: "Skinny Fit Jeans",
    noOfStars: 3,
    currentPrice: 240,
    discount: 20,
  },
  {
    productId: "3",
    imageUrl: "/images/merchandise/checkedshirt.png",
    productName: "Checkered Shirt",
    noOfStars: 4,
    currentPrice: 180,
    // discount: 20
  },
  {
    productId: "4",
    imageUrl: "/images/merchandise/stripedshirt.png",
    productName: "Sleeve Striped T-Shirt",
    noOfStars: 4,
    currentPrice: 130,
    discount: 30,
  },
];

const NewArrivals = () => {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center px-5 py-10">
      <h2 className={`${HEADER_FONT.className} text-center text-3xl font-bold`}>
        NEW ARRIVALS
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
          {" "}
          View All{" "}
        </Button>
      </div>
    </div>
  );
};

export default NewArrivals;
