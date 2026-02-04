import React from "react";

import { ArrowLeft, ArrowRight, Check, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { HEADER_FONT } from "@/lib/font";

import ReviewCard from "./review-card";

const Reviews = () => {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center px-5 py-10">
      <div className="flex w-full items-center justify-between">
        <h2
          className={`${HEADER_FONT.className} text-center text-3xl font-bold`}
        >
          NEW ARRIVALS
        </h2>

        <div>
          <Button variant="ghost" size="icon">
            <ArrowLeft />
          </Button>
          <Button variant="ghost" size="icon">
            <ArrowRight />
          </Button>
        </div>
      </div>

      <div className="items-between mt-15 flex justify-start gap-5">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
};

export default Reviews;
