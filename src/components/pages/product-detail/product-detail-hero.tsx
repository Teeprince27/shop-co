"use client";

import Image from "next/image";
import React, { useState } from "react";

import { Check, Minus, Plus, Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { HEADER_FONT } from "@/lib/font";

const ProductDetailHero = () => {
  const [quantity, setQuantity] = useState<number>(1);

  const increase = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="grid h-full w-full grid-cols-1 gap-4 py-5 md:grid-cols-2">
      <div className="flex min-h-[500px] w-full flex-col items-center justify-between gap-2 md:flex-row">
        <div className="relative h-full w-full flex-1 md:hidden">
          <Image
            className="rounded-[10px] object-cover"
            src="/images/merchandise/image 1 (7).png"
            alt="Next.js logo"
            fill
          />
        </div>

        <div className="flex h-full w-[150px] gap-2 max-md:h-[25%] max-md:w-full md:flex-col">
          <div className="relative flex-1">
            <Image
              className="rounded-[10px] object-cover"
              src="/images/merchandise/image 1 (7).png"
              alt="Next.js logo"
              fill
            />
          </div>

          <div className="relative flex-1">
            <Image
              className="rounded-[10px] object-cover"
              src="/images/merchandise/image 5 (1).png"
              alt="Next.js logo"
              fill
            />
          </div>
          <div className="relative flex-1">
            <Image
              className="rounded-[10px] object-cover"
              src="/images/merchandise/image 6.png"
              alt="Next.js logo"
              fill
            />
          </div>
        </div>
        <div className="relative h-full w-full flex-1 max-md:hidden">
          <Image
            className="rounded-[10px] object-cover"
            src="/images/merchandise/image 1 (7).png"
            alt="Next.js logo"
            fill
          />
        </div>
      </div>
      <div>
        <div>
          <h2
            className={`${HEADER_FONT.className} py-5 text-center text-3xl font-bold`}
          >
            One Life Graphic T-Shirt
          </h2>
          <div className="flex items-center justify-start gap-3">
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} className="size-3 fill-amber-300 stroke-0" />
            ))}
          </div>

          <div className="mt-1 flex items-center justify-start gap-2">
            <p className="text-lg font-black">$260</p>

            <p className="text-muted-foreground text-lg font-black line-through">
              $300
            </p>

            <Badge className="bg-destructive/30 text-destructive py-D px-1.5 text-[10px]">
              -40%
            </Badge>

            <p>
              The graphic t-shirt which is perfect for any occasion. Crafted
              from a soft and breathable
            </p>
          </div>
        </div>
        <Separator className="my-4" />

        <div>
          <p className="text-muted-foreground text-sm">Select Colors</p>
          <div className="flex items-center justify-start gap-2 py-2">
            <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#4F4631]">
              <Check className="test-white size-4" />
            </div>
            <div className="h-[30px] w-[30px] rounded-full bg-[#314F4A]"></div>
            <div className="h-[30px] w-[30px] rounded-full bg-[#31344F]"></div>
          </div>
        </div>
        <Separator className="my-4" />
        <div>
          <p className="text-muted-foreground text-sm">Choose Size</p>
          <div className="py-2">
            <Button size="sm" className="h-7 text-sm" variant="secondary">
              Small{" "}
            </Button>
            <Button size="sm" className="h-7 text-sm" variant="secondary">
              Medium{" "}
            </Button>
            <Button size="sm" className="h-7 text-sm">
              Large{" "}
            </Button>
            <Button size="sm" className="h-7 text-sm" variant="secondary">
              X-Large{" "}
            </Button>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="flex items-center justify-start gap-2">
          <div className="bg-accent flex items-center justify-start gap-2 rounded-full">
            <Button size="icon" variant="ghost" onClick={decrease}>
              <Minus />
            </Button>

            <p className="px-2">{quantity}</p>

            <Button size="icon" variant="ghost" onClick={increase}>
              <Plus />
            </Button>
          </div>
          <Button className="flex-1">Add to cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailHero;
