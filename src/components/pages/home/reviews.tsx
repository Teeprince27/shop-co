import { Button } from '@/components/ui/button'
import { HEADER_FONT } from '@/lib/font'
import { ArrowLeft, ArrowRight, Check, Circle, CircleCheck, Star } from 'lucide-react'
import React from 'react'

const Reviews = () => {
  return (
     <div className='max-w-7xl mx-auto py-10 px-5 flex flex-col items-center '>
       <div className='flex justify-between items-center w-full'>
          <h2 className={`${HEADER_FONT.className} text-3xl font-bold text-center`}>
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
          
       <div className='mt-15 flex justify-start items-between gap-5'>
        <ReviewCard/> 
        <ReviewCard/> 
        <ReviewCard/>
        <ReviewCard/> 

       </div>
     </div>
  )
}

export default Reviews



const ReviewCard = ({}) => {
  return <div className='w-[350px] min-h-[150px] p-4 border border-text-muted-foreground rounded-[10px] space-y-4'>
                <div className='flex items-center justify-start'>
                     {Array.from({length: 5}, (_, i) => (
                       <Star key={i} className='fill-amber-300 stroke-0 size-4'/>
                     ))}
                       
                </div>
                <div className='flex items-center gap-2 justify-start'>
                  <h2 className='font-bold'>Customer Name</h2>
                  <Check className='size-4 bg-green-500 p-0.5 rounded-full stroke-white '/>

                </div>
                <p className='text-muted-foreground text-sm'>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
          </div>
}