"use client";

import React, { useState } from 'react'
import Image from "next/image";
import { HEADER_FONT } from '@/lib/font';
import { Minus, Plus, Star } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const ProductDetailHero = () => {

const [quantity, setQuantity] = useState<number>(1);

const increase = () => {
  setQuantity(prev => prev + 1);
};

const decrease = () => {
  setQuantity(prev => (prev > 1 ? prev - 1 : 1));
};

  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 py-5 h-full'>
        <div className='flex flex-col md:flex-row justify-between items-center w-full gap-2 min-h-[500px]'>

            <div className='relative flex-1 h-full w-full md:hidden'>
                 <Image
                           className="object-cover rounded-[10px]"
                           src="/images/merchandise/image 1 (7).png"
                           alt="Next.js logo"
                           fill 
                  />
            </div>


           <div className='flex md:flex-col max-md:h-[25%] gap-2 h-full max-md:w-full w-[150px]'>
              <div className='relative flex-1'>
                 <Image
                           className="object-cover rounded-[10px]"
                           src="/images/merchandise/image 1 (7).png"
                           alt="Next.js logo"
                           fill
                  />
              </div>

              <div className='relative flex-1'>
                 <Image
                           className="object-cover rounded-[10px]"
                           src="/images/merchandise/image 5 (1).png"
                           alt="Next.js logo"
                           fill
                  />
              </div>
              <div className='relative flex-1'>
                 <Image
                           className="object-cover rounded-[10px]"
                           src="/images/merchandise/image 6.png"
                           alt="Next.js logo"
                           fill
                  />
              </div>
         
              
            
           </div>
            <div className='relative flex-1 h-full w-full max-md:hidden'>
                 <Image
                           className="object-cover rounded-[10px]"
                           src="/images/merchandise/image 1 (7).png"
                           alt="Next.js logo"
                           fill 
                  />
            </div>
        </div>
        <div>
           <div>
                <h2 className={`${HEADER_FONT.className} text-3xl font-bold text-center py-5`}>
                    One Life Graphic T-Shirt
                </h2>
                <div className='flex items-center justify-start gap-3'>
                  {Array.from({length: 5}, (_, i) => (
                    <Star key={i} className='fill-amber-300 stroke-0 size-3'/>
                  ))}
                
                </div>

                <div className='mt-1 flex items-center justify-start gap-2'>

                  <p className="text-lg font-black">
                    $260
                  </p>

                  <p className="text-lg font-black line-through text-muted-foreground"> 
                    $300
                  </p>
                  
                  <Badge className="bg-destructive/30 text-destructive px-1.5 py-D text-[10px]" >
                      -40%
                  </Badge>

                  <p> 
                    The graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable
                  </p>
                  
                
                </div>

               
           </div>
            <Separator className='my-4'/>

           <div >
              <p className='text-muted-foreground text-sm'>Select Colors</p>
              <div className='flex items-center justify-start gap-2 py-2'>
                <div className='w-[20px] h-[20px] rounded-full bg-[#000]'></div>
                <div className='w-[20px] h-[20px] rounded-full bg-[#fff]'></div>
                <div className='w-[20px] h-[20px] rounded-full bg-[#FF0000]'></div>

              </div>
           </div>
            <Separator className='my-4'/>
           <div>
             <p className='text-muted-foreground text-sm'>Choose Size</p>
             <div className='py-2'>
                  <Button size="sm" className='text-sm h-7' variant="secondary">Small </Button>
                  <Button size="sm" className='text-sm h-7' variant="secondary">Medium </Button>
                  <Button size="sm" className='text-sm h-7' >Large </Button>
                  <Button size="sm" className='text-sm h-7' variant="secondary">X-Large </Button>
                  
             </div>
           </div>
           <Separator className='my-4'/>
           <div className='flex items-center justify-start gap-2'>
              <div  className='bg-accent rounded-full flex items-center justify-start gap-2'>
                  <Button size= "icon" variant="ghost" onClick={decrease}>
                     <Minus />
                  </Button>

                  <p className='px-2'>{quantity}</p>

                  <Button size= "icon" variant="ghost" onClick={increase}>
                     <Plus />
                  </Button>
              </div>
              <Button className='flex-1'>Add to cart</Button>
           </div>

        </div>
    </div>
  )
}

export default ProductDetailHero

