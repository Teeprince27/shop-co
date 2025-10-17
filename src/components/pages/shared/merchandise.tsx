import React from 'react'
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

export type MerchandiseType = {
  productId: string
  imageUrl: string;
  productName: string;
  noOfStars: number;
  currentPrice: number;
  discount?: number
}


const Merchandise = ({productId, imageUrl, productName, noOfStars, currentPrice, discount }: MerchandiseType) => {
  return (
    <div>
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
          <Image 
            src= {imageUrl}
            alt={productName} 
            width={500}
            height={500}
            className='w-[270px] h-[270px] object-cover rounded-[10px]'
          />

          <div className='mt-4'>
            <p className='font-black text-sm'>
                {productName}
            </p>
            <div className='flex items-center justify-start gap-3'>
                  {Array.from({length: noOfStars}, (_, i) => (
                    <Star key={i} className='fill-amber-300 stroke-0 size-3'/>
                  ))}
                <span>{noOfStars}.0/5</span>
            </div>
            <div className='mt-1 flex items-center justify-start gap-2'>

              {
                discount && (
                <p className="text-lg font-black">
                ${currentPrice * (1 - discount / 100)}
                </p>
              )}

              <p className="text-lg font-black line-through text-muted-foreground"> 
                ${currentPrice}
              </p>
              {
                discount && ( 
                  <Badge className="bg-destructive/30 text-destructive" >
                    -{discount}%
                </Badge>)
              }
            
            </div>
          </div>
    </div>
  )
}


export default Merchandise