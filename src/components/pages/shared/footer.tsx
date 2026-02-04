import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Separator } from "@radix-ui/react-separator";

import Logo from "./logo";
import Newsletter from "./newsletter";

const Footer = () => {
  return (
    <div className="bg-accent relative mt-20 px-5 py-10 pt-30">
      <div className="mx-auto max-w-7xl">
        <div className="absolute -top-15 right-0 left-0 mx-auto max-w-7xl">
          <Newsletter />
        </div>

        <div className="mt-30 md:mt-0">
          <div className="flex flex-col items-center justify-start gap-6 md:flex-row">
            <div className="flex w-full flex-col justify-start gap-4 md:w-[300px]">
              <Logo />
              <p className="text-xm text-card-forground/70">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
              <div className="flex gap-2">
                <Image
                  src="/images/socials/twitter.png"
                  alt="twitter"
                  width={24}
                  height={24}
                />
                <Image
                  src="/images/socials/facebook.png"
                  alt="facebook"
                  width={24}
                  height={24}
                />
                <Image
                  src="/images/socials/ig.png"
                  alt="intagram"
                  width={24}
                  height={24}
                />
                <Image
                  src="/images/socials/guthub.png"
                  alt="github"
                  width={24}
                  height={24}
                />

                {/* <div className='rounded-full size-5 bg-white border'></div>
                    <div className='rounded-full size-5 bg-foreground border'></div>
                    <div className='rounded-full size-5 bg-white border'></div>
                    <div className='rounded-full size-5 bg-white border'></div>
                    <div className='rounded-full size-5 bg-white border'></div> */}
              </div>
            </div>
            <div className="grid-col-2 grid w-full flex-1 gap-4 md:grid-cols-4">
              <div className="space-y-5">
                <p className="text-sm font-bold">COMPANY</p>
                <div className="flex flex-col gap-2">
                  <Link href="/" className="text-card-forground/70 text-sm">
                    About
                  </Link>
                  <Link href="/" className="text-card-forground/70 text-sm">
                    Features
                  </Link>
                  <Link href="/" className="text-card-forground/70 text-sm">
                    Works
                  </Link>
                  <Link href="/" className="text-card-forground/70 text-sm">
                    Careers
                  </Link>
                </div>
              </div>
              <div className="space-y-5">
                <p className="text-sm font-bold">HELP</p>
                <div className="flex flex-col gap-2">
                  <Link href="/" className="text-card-forground/70 text-sm">
                    Customer Support
                  </Link>
                  <Link href="/" className="text-card-forground/70 text-sm">
                    Delievery Details
                  </Link>
                  <Link href="/" className="text-card-forground/70 text-sm">
                    Terms & Conditions
                  </Link>
                  <Link href="/" className="text-card-forground/70 text-sm">
                    Privacy Policy
                  </Link>
                </div>
              </div>
              <div className="space-y-5">
                <p className="text-sm font-bold">FAQ</p>
                <div className="flex flex-col gap-2">
                  <Link href="/" className="text-card-forground/70 text-sm">
                    Account
                  </Link>
                  <Link href="/" className="text-card-forground/70 text-sm">
                    Manage Deliveries
                  </Link>
                  <Link href="/" className="text-card-forground/70 text-sm">
                    Orders
                  </Link>
                  <Link href="/" className="text-card-forground/70 text-sm">
                    Payments
                  </Link>
                </div>
              </div>
              <div className="space-y-5">
                <p className="text-sm font-bold">RESOURCES</p>
                <div className="flex flex-col gap-2">
                  <Link href="/" className="text-card-forground/70 text-sm">
                    Free eBooks
                  </Link>
                  <Link href="/" className="text-card-forground/70 text-sm">
                    Development Tutorial
                  </Link>
                  <Link href="/" className="text-card-forground/70 text-sm">
                    How to - Blog
                  </Link>
                  <Link href="/" className="text-card-forground/70 text-sm">
                    Youtube Playlist
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Separator className="my-10" />

        <div className="flex items-center justify-between">
          <p>Shop.co © 2000-2023, All Rights Reserved</p>
          <div className="flex">
            <Image
              src="/images/payments/visa.png"
              alt="github"
              width={40}
              height={40}
            />
            <Image
              src="/images/payments/mastercard.png"
              alt="github"
              width={40}
              height={40}
            />
            <Image
              src="/images/payments/paypal.png"
              alt="github"
              width={40}
              height={40}
            />
            <Image
              src="/images/payments/apple-pay.png"
              alt="github"
              width={40}
              height={40}
            />
            <Image
              src="/images/payments/google-pay.png"
              alt="github"
              width={40}
              height={40}
            />

            {/* <div className='h-5 w-8 bg-white rounded-[2px]'></div>
                <div className='h-5 w-8 bg-white rounded-[2px]'></div>
                <div className='h-5 w-8 bg-white rounded-[2px]'></div>
                <div className='h-5 w-8 bg-white rounded-[2px]'></div>
                <div className='h-5 w-8 bg-white rounded-[2px]'></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
