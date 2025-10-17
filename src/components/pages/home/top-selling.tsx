import { HEADER_FONT } from '@/lib/font'
import React from 'react'
import Merchandise, { MerchandiseType } from '../shared/merchandise'
import { Button } from '@/components/ui/button'



const items: MerchandiseType[] = [
  {
      productId: '1',
      imageUrl: "/images/merchandise/verticalstrippedshirt.png",
      productName:'Vertical Stripped Shirt',
      noOfStars: 5,
      currentPrice: 100,
      discount: 20
  },
  {
      productId: '2',
      imageUrl: "/images/merchandise/couragegraphicsshirt.png",
      productName:'Courage Graphics Shirt',
      noOfStars: 5,
      currentPrice: 100,
      discount: 20
  },
  {
      productId: '3',
      imageUrl: "/images/merchandise/looseshort.png",
      productName:'Loose Short',
      noOfStars: 5,
      currentPrice: 100,
      discount: 20
  },
  {
      productId: '4',
      imageUrl: "/images/merchandise/folderskinnyjeans.png",
      productName:'Folder Skinny Jeans',
      noOfStars: 5,
      currentPrice: 100,
      discount: 20
  }
]

const TopSelling = () => {
  return (
     <div className='max-w-7xl mx-auto py-10 px-5 flex flex-col items-center'>
      <h2 className={`${HEADER_FONT.className} text-3xl font-bold text-center`}>
          TOP SELLING
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

        <Button className=" max-md:w-full" variant="outline">
          View All
        </Button>
      </div>


    </div>
  )
}


{/* 45:17 */}
    {/* </div> */}


export default TopSelling