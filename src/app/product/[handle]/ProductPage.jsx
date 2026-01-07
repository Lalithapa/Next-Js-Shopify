"use client";

import AddToCartButton from '@/app/components/AddToCartButton';
import ProductGalleryClient from './ProductGalleryClient';
// import { AccordionRow } from '@/app/components/Accordion';
import { HeartIcon, HelpIcon, InfoIcon, PhoneIcon, ShareIcon, ShieldIcon, TruckIcon } from '@/app/components/product-icons';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from 'react';

export default function ProductPage({ product }) {
   
    const price = Number(product?.selectedOrFirstAvailableVariant?.price?.amount || 0);
    const compareAt = Number(product?.selectedOrFirstAvailableVariant?.compareAtPrice?.amount || 0);
    const currency = product?.selectedOrFirstAvailableVariant?.price?.currencyCode || "INR";
  
    const hasDiscount = compareAt > price && price > 0;

    const discountRate = hasDiscount ? Math.round(((compareAt - price) / compareAt) * 100) : 0;

    const [variantPrice, setVariantPrice] = useState(price);
    const [variantCompareAtPrice, setVariantCompareAtPrice] = useState(compareAt);
    const [discountPct, setDiscountPct] = useState(discountRate);

    const formatMoney = (amount) =>
        new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency,
        maximumFractionDigits: 0,
    }).format(amount);

    return (
         <section className="w-full bg-white">
      <div className="container mx-auto w-full max-w-7xl py-6 lg:py-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left: Gallery */}
          <div className="lg:col-span-6">
            <div className="relative flex gap-3">
              <ProductGalleryClient
                images={product.images.edges.map(({ node }) => ({
                  url: node.url,
                  altText: node.altText || product.title,
                }))}
                title={product.title}
              />
                {/* <div className="absolute right-3 top-3 flex items-center gap-2">
                  <button
                    type="button"
                    className="h-10 w-10 rounded-full bg-white shadow-sm border hover:bg-gray-50 inline-flex items-center justify-center"
                    aria-label="Wishlist"
                  >
                    <HeartIcon className="h-5 w-5 text-gray-700" />
                  </button>
                  <button
                    type="button"
                    className="h-10 w-10 rounded-full bg-white shadow-sm border hover:bg-gray-50 inline-flex items-center justify-center"
                    aria-label="Share"
                  >
                    <ShareIcon className="h-5 w-5 text-gray-700" />
                  </button>
                </div> */}
            </div>
          </div>

          {/* Right: Product details */}
          <div className="lg:col-span-6">
            <h1 className="text-[18px] leading-snug font-semibold text-gray-900 sm:text-[20px]">
              {product.title}
            </h1>
            {/* Price */}
            <div className="mt-4">
              <div className="flex items-end gap-3">
                <div className="text-[26px] font-semibold text-gray-900">
                  {formatMoney(variantPrice)}
                </div>
                {variantCompareAtPrice > variantPrice &&
                  <>
                  <div className="text-sm text-gray-400 line-through">
                    {formatMoney(variantCompareAtPrice)}
                  </div>
                  <span className="ml-1 inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-semibold text-red-600">
                    {discountPct}% OFF
                </span>
                  </>
               }
              </div>
              <div className="mt-1 text-xs text-gray-500">(Inclusive of all taxes)</div>
            </div>

            {/* CTA */}
            <div className="mt-4">
              <AddToCartButton variantId={product.variants.edges[0].node.id} />
            </div>

            {/* Feature badges */}
            {/* <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="flex items-center gap-3 rounded-2xl border bg_tri px-3 py-3">
                <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 inline-flex items-center justify-center">
                  <ShieldIcon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-900">1 Year</div>
                  <div className="text-[11px] text-gray-500">Warranty</div>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border px-3 py-3">
                <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 inline-flex items-center justify-center">
                  <PhoneIcon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-900">Call Support</div>
                  <div className="text-[11px] text-gray-500">Assistance</div>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border px-3 py-3">
                <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 inline-flex items-center justify-center">
                  <HelpIcon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-900">24/7 Help</div>
                  <div className="text-[11px] text-gray-500">Support</div>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border px-3 py-3">
                <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 inline-flex items-center justify-center">
                  <TruckIcon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-900">Free Delivery</div>
                  <div className="text-[11px] text-gray-500">Shipping</div>
                </div>
              </div>
            </div> */}


            {/* Accordions */}
            <div className="mt-4 grid grid-cols-1 ">
              
             <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
              >
                <AccordionItem value="item-1" >
                  <AccordionTrigger>Available Offers</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                      <p>Flat <b>10% OFF</b> Orders Below <b>₹699</b></p>
                      <p>Flat <b>20% OFF</b> Orders Below  <b>₹1499</b> + <b>Surprise Gift Worth ₹699</b></p>
                      <p>Flat <b>35% OFF</b> Above <b>₹1499</b> +  <b>Surprise Gift Worth ₹1200</b></p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}