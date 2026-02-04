import Image from "next/image";
import React from "react";

import { Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export type MerchandiseType = {
  productId: string;
  imageUrl: string;
  productName: string;
  noOfStars: number;
  currentPrice: number;
  discount?: number;
};

const Merchandise = ({
  imageUrl,
  productName,
  noOfStars,
  currentPrice,
  discount,
}: MerchandiseType) => {
  return (
    <div className="flex h-[350px] flex-col">
      {/* <div
            style={{
              background: imageUrl,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "200px",
              height: "200px",
              borderRadius: "10px"
            }}
          /> */}
      {/* <Image 
            src= {imageUrl}
            alt={productName} 
            width={500}
            height={500}
            className='w-[270px] h-[270px] object-cover rounded-[10px]'
          /> */}
      <div className="relative h-full flex-1">
        <Image
          src={imageUrl}
          alt={productName}
          fill
          className="flex-1 rounded-[10px] object-cover"
        />
      </div>

      <div className="mt-4">
        <p className="font-black">{productName}</p>
        <div className="flex items-center justify-start gap-3">
          {Array.from({ length: noOfStars }, (_, i) => (
            <Star key={i} className="size-3 fill-amber-300 stroke-0" />
          ))}
          <span>{noOfStars}.0/5</span>
        </div>
        <div className="mt-1 flex items-center justify-start gap-2">
          {discount && (
            <p className="text-lg font-black">
              ${currentPrice * (1 - discount / 100)}
            </p>
          )}

          <p className="text-muted-foreground text-lg font-black line-through">
            ${currentPrice}
          </p>
          {discount && (
            <Badge className="bg-destructive/30 text-destructive">
              -{discount}%
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
};

export default Merchandise;
