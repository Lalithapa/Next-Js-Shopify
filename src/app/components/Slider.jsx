"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

import Image from 'next/image';
import Link from 'next/link';


export default function Slider({config}) {
    const modules = [
        config?.features?.autoplay && Autoplay,
        config?.features?.pagination && Pagination,
        config?.features?.navigation && Navigation,
    ].filter(Boolean);
    return (
        <>
            <Swiper
                id={config.id}
                {...config.swiper}
                modules={modules}
                className={config.className}
            >
                {
                    config?.slides?.map((elem, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <Link href={elem.url} index={index}>
                                    <picture>
                                        {elem?.images?.desktop && (
                                            <source
                                            media="(min-width: 768px)"
                                            srcSet={elem.images.desktop}
                                            />
                                        )}
                                        {elem?.images?.mobile && (
                                            <source
                                            media="(max-width: 767px)"
                                            srcSet={elem.images.mobile}
                                            />
                                        )}
                                        <Image src={elem?.images?.desktop} width={1920} height={700} alt={elem?.alt} className="w-full h-auto bg-white object-cover" ></Image>
                                    </picture>
                                </Link>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    );
}
