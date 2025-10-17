import localFont from 'next/font/local'
export const BODY_FONT = localFont(
   {
        src: [
            {
                path: '../../public/font/Satoshi-Regular.otf',
                weight: '400',
                style: 'normal',
            },
            {
                path: '../../public/font/Satoshi-Medium.otf',
                weight: '700',
                style: 'normal',
            },
            {
                path: '../../public/font/Satoshi-Bold.otf',
                weight: '900',
                style: 'normal',
            },
        ]
   } 
)


export const HEADER_FONT = localFont(
   {
        src: [
            {
                path: '../../public/font/IntegralCF-Bold.otf',
                weight: '400',
                style: 'normal',
            },
            {
                path: '../../public/font/IntegralCF-Medium.otf',
                weight: '700',
                style: 'normal',
            },
            {
                path: '../../public/font/IntegralCF-Bold.otf',
                weight: '900',
                style: 'normal',
            },
        ]
   } 
)