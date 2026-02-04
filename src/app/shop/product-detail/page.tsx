import React from "react";

import OtherOPtions from "@/components/pages/product-detail/other-option";
import ProductDetailHero from "@/components/pages/product-detail/product-detail-hero";
import ProductInfo from "@/components/pages/product-detail/product-info";

const ProductDetailPage = () => {
  return (
    <div className="mx-auto max-w-7xl py-5">
      <ProductDetailHero />
      <ProductInfo />
      <OtherOPtions />
    </div>
  );
};

export default ProductDetailPage;
