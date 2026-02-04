import React from "react";

import { ArrowDown, ListFilterPlus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import ReviewCard from "../home/review-card";

const ProductInfo = () => {
  return (
    <div className="my-5">
      <Tabs defaultValue="rating-review">
        <TabsList className="w-full rounded-none border-b bg-transparent p-0">
          <TabsTrigger
            value="product-details"
            className="text-muted-foreground data-[state=active]:border-b-black data-[state=active]:font-semibold data-[state=active]:text-black"
          >
            Product Details
          </TabsTrigger>
          <TabsTrigger
            value="rating-review"
            className="text-muted-foreground data-[state=active]:border-b-black data-[state=active]:font-semibold data-[state=active]:text-black"
          >
            Rating & Review
          </TabsTrigger>
          <TabsTrigger
            value="faqs"
            className="text-muted-foreground data-[state=active]:border-b-black data-[state=active]:font-semibold data-[state=active]:text-black"
          >
            FAQs
          </TabsTrigger>
        </TabsList>
        <TabsContent value="product-details">Account</TabsContent>
        <TabsContent value="rating-review">
          <div>
            <div className="my-4 flex items-center justify-between">
              <p>
                <span className="text-xl font-black">All Reviews (451)</span>
              </p>
              <div className="flex gap-2">
                <Button size="icon" variant="secondary">
                  <ListFilterPlus />
                </Button>

                <Button variant="secondary" className="hidden md:flex">
                  {" "}
                  Latest
                  <ArrowDown />
                </Button>
                <Button>Write a review</Button>
              </div>
            </div>

            <div>
              <div className="my-4 grid gap-4 md:grid-cols-3">
                <ReviewCard showDate />
                <ReviewCard showDate />
                <ReviewCard showDate />
                <ReviewCard showDate />
                <ReviewCard showDate />
                <ReviewCard showDate />
              </div>
              <div className="mt-4 flex w-full justify-center">
                <Button variant="outline">Load More Review</Button>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="faqs">Settings</TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductInfo;
