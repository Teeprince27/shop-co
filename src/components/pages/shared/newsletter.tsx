import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HEADER_FONT } from "@/lib/font";

const newsletter = () => {
  return (
    <div className="bg-foreground flex items-center justify-between gap-5 rounded-[10px] px-10 py-5">
      <div
        className={`text-background max-w-[400px] text-2xl font-black ${HEADER_FONT.className}`}
      >
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
      </div>
      <div className="max-w-[300px] flex-1 space-y-2">
        <Input
          className="bg-background text-foreground"
          placeholder="Enter your email address"
        />
        <Button variant="secondary" className="w-full font-bold">
          Subscribe to Newsletter
        </Button>
      </div>
    </div>
  );
};

export default newsletter;
