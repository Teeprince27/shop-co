import OtherOPtions from '@/components/pages/product-detail/other-option'
import ProductDetailHero from '@/components/pages/product-detail/product-detail-hero'
import ProductInfo from '@/components/pages/product-detail/product-info'
import React from 'react'

const ProductDetailPage = () => {
  return (
    <div className='max-w-7xl mx-auto py-5'>
        <ProductDetailHero />
        <ProductInfo />
        <OtherOPtions />

    </div>
  )
}

export default ProductDetailPage