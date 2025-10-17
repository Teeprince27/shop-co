import { HEADER_FONT } from '@/lib/font'
import React from 'react'
import Merchandise, { MerchandiseType } from '../shared/merchandise'
import { Button } from '@/components/ui/button'


const items: MerchandiseType[] = [
  {
      productId: '1',
      imageUrl: "/images/merchandise/image 7 (15).png",
      productName:'T-shirt with tape Details ',
      noOfStars: 4,
      currentPrice: 120,
      // discount: 20
  },
  {
      productId: '2',
      imageUrl: "/images/merchandise/bluejean.png",
      productName:'Skinny Fit Jeans',
      noOfStars: 3,
      currentPrice: 240,
      discount: 20
  },
  {
      productId: '3',
      imageUrl: "/images/merchandise/checkedshirt.png",
      productName:'Checkered Shirt',
      noOfStars: 4,
      currentPrice: 180,
      // discount: 20
  },
  {
      productId: '4',
      imageUrl: "/images/merchandise/stripedshirt.png",
      productName:'Sleeve Striped T-Shirt',
      noOfStars: 4,
      currentPrice: 130,
      discount: 30
  }
]

const NewArrivals = () => {
  return (
    <div className='max-w-7xl mx-auto py-10 px-5 flex flex-col items-center '>
      <h2 className={`${HEADER_FONT.className} text-3xl font-bold text-center`}>
          NEW ARRIVALS
      </h2>

      <div className='py-10 flex justify-start items-center gap-4 flex-wrap'>
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

        ) )}
          
         
           
      </div>

      <div className=' flex justify-center items-center'>
        
        <Button className=' max-md:w-full ' variant="outline"> View All </Button>

      </div>


    </div>
  )
}

export default NewArrivals