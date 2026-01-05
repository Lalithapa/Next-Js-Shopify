"use client";

import { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function ProductGalleryClient({ images, title }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    // // ✅ Prevent Swiper thumbs crash when swiper is not ready / destroyed
    // const thumbsConfig =
    //     thumbsSwiper && !thumbsSwiper.destroyed ? { swiper: thumbsSwiper } : undefined;

    return (
        <div className="min-w-0">
            {/* MAIN */}
            <div className="min-w-0 w-full overflow-hidden">
                <Swiper
                    spaceBetween={10}
                    navigation
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index} className="min-w-0">
                            <div className="relative w-full aspect-square">
                                <Image
                                    src={img.url}
                                    alt={img.altText || title}
                                    fill
                                    sizes="(min-width: 768px) 50vw, 100vw"
                                    className="object-contain"
                                    priority={index === 0}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* THUMBS */}
            <div className="min-w-0 w-full overflow-hidden mt-3">
                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index} className="min-w-0">
                            <div className="relative w-full aspect-square">
                                <Image
                                    src={img.url}
                                    alt={img.altText || title}
                                    fill
                                    sizes="(min-width: 768px) 24vw, 50vw"
                                    className="object-contain"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
