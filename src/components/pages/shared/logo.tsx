import { Button } from '@/components/ui/button'
import { HEADER_FONT } from '@/lib/font'
import Link from 'next/link'
import React from 'react'

const logo = () => {
  return (
        <div>
             <Link href='/' className={`${HEADER_FONT.className} text-xl font-black`}>
                SHOP.CO 
              </Link>
        </div>

  )
}

export default logo