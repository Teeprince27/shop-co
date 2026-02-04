import React from "react";

import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

import CustomPagination from "@/components/pages/shared/custom-pagination";
import Merchandise, {
  MerchandiseType,
} from "@/components/pages/shared/merchandise";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";

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
  {
    productId: "5",
    imageUrl: "/images/merchandise/image 7 (15).png",
    productName: "T-shirt with tape Details ",
    noOfStars: 4,
    currentPrice: 120,
    // discount: 20
  },
  {
    productId: "6",
    imageUrl: "/images/merchandise/bluejean.png",
    productName: "Skinny Fit Jeans",
    noOfStars: 3,
    currentPrice: 240,
    discount: 20,
  },
  {
    productId: "7",
    imageUrl: "/images/merchandise/checkedshirt.png",
    productName: "Checkered Shirt",
    noOfStars: 4,
    currentPrice: 180,
    discount: 20,
  },
  {
    productId: "8",
    imageUrl: "/images/merchandise/stripedshirt.png",
    productName: "Sleeve Striped T-Shirt",
    noOfStars: 4,
    currentPrice: 130,
    discount: 30,
  },
  {
    productId: "9",
    imageUrl: "/images/merchandise/stripedshirt.png",
    productName: "Sleeve Striped T-Shirt",
    noOfStars: 4,
    currentPrice: 130,
    discount: 30,
  },
];

const ShopPage = () => {
  return (
    <div className="mx-auto flex max-w-7xl gap-4 px-5">
      {/* Filter */}
      <div className="hidden min-h-screen w-64 rounded-[15px] border p-5 md:block">
        {/* Header  */}

        <div className="flex items-center justify-between p-2">
          <h2 className="text-xl font-black">Filters</h2>
        </div>

        <Separator className="my-4" />

        {/* Groups */}

        <div className="space-y-4 py-2">
          <div className="flex items-center justify-between">
            <p>T-Shirts</p>
            <ArrowRight className="size-4" />
          </div>
          <div className="flex items-center justify-between">
            <p>Short</p>
            <ArrowRight className="size-4" />
          </div>
          <div className="flex items-center justify-between">
            <p>T-Shirts</p>
            <ArrowRight className="size-4" />
          </div>
          <div className="flex items-center justify-between">
            <p>Hoodies</p>
            <ArrowRight className="size-4" />
          </div>
          <div className="flex items-center justify-between">
            <p>Jeans</p>
            <ArrowRight className="size-4" />
          </div>
        </div>

        <Separator className="my-4" />

        {/* Price Range */}

        <div className="space-y-4 py-2">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black">Price Range</h2>
            <ChevronUp className="size-4" />
          </div>

          <div>
            <Slider defaultValue={[50]} max={100} step={1} />
          </div>
        </div>

        <Separator className="my-4" />

        {/* Colors */}

        <div className="space-y-4 py-2">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black">Colors </h2>
            <ChevronUp className="size-4" />
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="size-8 rounded-full border border-gray-700 bg-green-500"></div>
              <div className="size-8 rounded-full border border-gray-700 bg-red-500"></div>
              <div className="size-8 rounded-full border border-gray-700 bg-yellow-500"></div>
              <div className="size-8 rounded-full border border-gray-700 bg-blue-500"></div>
              <div className="size-8 rounded-full border border-gray-700 bg-purple-500"></div>
            </div>

            <div className="flex items-center justify-between">
              <div className="size-8 rounded-full border border-gray-700 bg-green-500"></div>
              <div className="size-8 rounded-full border border-gray-700 bg-red-500"></div>
              <div className="size-8 rounded-full border border-gray-700 bg-yellow-500"></div>
              <div className="size-8 rounded-full border border-gray-700 bg-blue-500"></div>
              <div className="size-8 rounded-full border border-gray-700 bg-purple-500"></div>
            </div>
          </div>
        </div>

        <Separator className="my-4" />

        {/* Size */}

        <div className="space-y-4 py-2">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black">Size </h2>
            <ChevronUp className="size-4" />
          </div>

          <div className="flex flex-wrap gap-2">
            <Button variant="secondary" size="sm">
              XX-Small
            </Button>
            <Button variant="secondary" size="sm">
              X-Small
            </Button>
            <Button variant="secondary" size="sm">
              Small
            </Button>
            <Button variant="secondary" size="sm">
              Medium
            </Button>
            <Button size="sm">Large</Button>
            <Button variant="secondary" size="sm">
              X-Large
            </Button>
            <Button variant="secondary" size="sm">
              XX-Large
            </Button>
            <Button variant="secondary" size="sm">
              3X-Large
            </Button>
            <Button variant="secondary" size="sm">
              4X-Large
            </Button>
            <Button variant="secondary" size="sm">
              XX-Small
            </Button>
            <Button variant="secondary" size="sm">
              XX-Small
            </Button>
          </div>
        </div>

        <Separator className="my-4" />

        {/* Dress Style */}

        <div className="space-y-4 py-2">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black">Price Range</h2>
            <ChevronUp className="size-4" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p>T-Shirts</p>
              <ArrowRight className="size-4" />
            </div>
            <div className="flex items-center justify-between">
              <p>Short</p>
              <ArrowRight className="size-4" />
            </div>
            <div className="flex items-center justify-between">
              <p>T-Shirts</p>
              <ArrowRight className="size-4" />
            </div>
            <div className="flex items-center justify-between">
              <p>Hoodies</p>
              <ArrowRight className="size-4" />
            </div>
            <div className="flex items-center justify-between">
              <p>Jeans</p>
              <ArrowRight className="size-4" />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden min-h-screen flex-1 md:block">
        <div className="flex items-center justify-between">
          <h2 className="text-center text-3xl font-black">Casual</h2>
          <p>Showing 1 - 10 of 100 Products</p>
        </div>

        <div className="grid w-full grid-cols-2 gap-x-4 gap-y-10 py-10 lg:grid-cols-3">
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

        <Separator className="my-6" />

        <div className="my-6">
          <CustomPagination />
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
