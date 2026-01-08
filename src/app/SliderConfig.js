// import required modules
export const heroSliderConfig = {
    id: "hero-banner",
    className: "mySwiper",

    swiper: {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 25000,
            disableOnInteraction: false,
        },
        pagination: { clickable: true },
        navigation: true,
    },
    features: {
        autoplay: true,
        pagination: true,
        navigation: true,
        autoplayProgress: true, // controls onAutoplayTimeLeft
    },

    slides: [
        {
            url: "https://hokmakeup.com/collections/product-without-clearance",
            images: {
                desktop:
                    "https://hokmakeup.com/cdn/shop/files/1920x735_a8bcd344-27c3-450a-8322-ffe4aa6e81de.jpg?v=1766231780&width=1920",
                mobile:
                    "https://hokmakeup.com/cdn/shop/files/780x1200_fa5f69a1-ebb7-4a22-97d2-748484a8c1cf.jpg?v=1766231779&width=550",
            },
            alt: "Hero banner 1",
        },
        {
            url: "https://hokmakeup.com/collections/product-without-clearance",
            images: {
                desktop:
                    "https://hokmakeup.com/cdn/shop/files/Artboard_1_8_cc7f8dae-9f83-42da-b2eb-a29e8627be78.jpg?v=1753080812&width=1500",
                mobile:
                    "https://hokmakeup.com/cdn/shop/files/Artboard_2_62e09036-b2ad-44bf-8d5d-f627606f4181.png?v=1753080814&width=550",
            },
            alt: "Hero banner 2",
        },
        {
            url: "https://hokmakeup.com/collections/product-without-clearance",
            images: {
                desktop:
                    "https://hokmakeup.com/cdn/shop/files/Artboard_1_8_d8c1cf01-6192-4be4-ab9e-d5ad02b93842.jpg?v=1752905843&width=1500",
                mobile:
                    "https://hokmakeup.com/cdn/shop/files/Artboard_2_fb06c3c2-195e-481b-8951-d9b1664cc00a.png?v=1752905845&width=550",
            },
            alt: "Hero banner 3",
        },
    ]
};

export const categoriesSlideConfig = {
    id: "categories-sliders",
    className: "categoriesSlideConfig",
    swiper: {
        slidesPerView: 2.5,
        spaceBetween: 12,
        breakpoints: {
            640: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4.5,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 6.5,
                spaceBetween: 50,
            },
        },
    },
    features: {
        autoplay: false,
        pagination: false,
        navigation: false,
    },
    slides: [
        {
            url: "https://hokmakeup.com/collections/product-without-clearance",
            images: {
                desktop:
                    "https://hokmakeup.com/cdn/shop/files/1_dd8c52f8-9305-42c5-a606-37f1bd2fa3ff.png?v=1766232036&width=1920",
                mobile:
                    "",
            },
            alt: "Sweetons Banner",
        },
        {
            url: "https://hokmakeup.com/collections/product-without-clearance",
            images: {
                desktop:
                    "https://hokmakeup.com/cdn/shop/files/2_227d061c-34e6-43b1-8cb7-506b02ba5344.png?v=1766232040&width=1920",
                mobile: "",
            },
            alt: "Best Sellers",
        },
        {
            url: "https://hokmakeup.com/collections/product-without-clearance",
            images: {

                desktop:
                    "https://hokmakeup.com/cdn/shop/files/3_2cf79f67-cbdb-4f54-9597-da4ffadb560e.png?v=1766232039&width=1920",
                mobile:
                    "",
            },
            alt: "Makeup",
        },
        {
            url: "https://hokmakeup.com/collections/product-without-clearance",
            images: {

                desktop:
                    "https://hokmakeup.com/cdn/shop/files/8_0a885c55-96e4-4ab5-afc8-c98628ec9b7a.png?v=1766232040&width=1920",
                mobile:
                    "",
            },
            alt: "Combos & Kits",
        },
        {
            url: "https://hokmakeup.com/collections/product-without-clearance",
            images: {

                desktop:
                    "https://hokmakeup.com/cdn/shop/files/4_39e06218-1a6e-40f9-8636-cb428f81fc79.png?v=1766232040&width=1920",
                mobile:
                    "",
            },
            alt: "Skin",
        },
        {
            url: "https://hokmakeup.com/collections/product-without-clearance",
            images: {

                desktop:
                    "https://hokmakeup.com/cdn/shop/files/6_8d325fc2-0848-4754-950d-c36b45275699.png?v=1766232040&width=1920",
                mobile:
                    "",
            },
            alt: "Bath & Body",
        },
        {
            url: "https://hokmakeup.com/collections/product-without-clearance",
            images: {

                desktop:
                    "https://hokmakeup.com/cdn/shop/files/5_1efd959c-f39d-4bf5-a044-23817e1281e7.png?v=1766232040&width=1920",
                mobile:
                    "",
            },
            alt: "Hair",
        },
        {
            url: "https://hokmakeup.com/collections/product-without-clearance",
            images: {

                desktop:
                    "https://hokmakeup.com/cdn/shop/files/7_dd1db9d5-8365-4483-a8e0-ec624ac124b1.png?v=1766232040&width=1920",
                mobile:
                    "",
            },
            alt: "Fragrance",
        },
        {
            url: "https://hokmakeup.com/collections/product-without-clearance",
            images: {

                desktop:
                    "https://hokmakeup.com/cdn/shop/files/9_70bf75e0-8d36-4aad-892f-f3db8552c4b4.png?v=1766232040&width=1920",
                mobile:
                    "",
            },
            alt: "Organizers",
        },
    ]
}

export const topPicksSlideConfig = {
    id: "topPicks-sliders",
    className: "topPicksSlideConfig",
    swiper: {
        slidesPerView: 2.1,
        spaceBetween: 12,
        breakpoints: {
            640: {
                slidesPerView: 2.1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween:20,
            },
        },
    },
    features: {
        autoplay: false,
        pagination: false,
        navigation: false,
    },
    slides: [
        {
            url: "https://hokmakeup.com/collections/product-without-clearance",
            images: {
                desktop:
                    "https://hokmakeup.com/cdn/shop/files/Flawless_Foundations.jpg?v=1766232361",
                mobile:
                    "",
            },
            alt: "Sweetons Banner",
        },
        {
            url: "https://hokmakeup.com/collections/product-without-clearance",
            images: {
                desktop:
                    "https://hokmakeup.com/cdn/shop/files/Tinted_Lips.jpg?v=1766232362",
                mobile: "",
            },
            alt: "Best Sellers",
        },
        {
            url: "https://hokmakeup.com/collections/product-without-clearance",
            images: {

                desktop:
                    "https://hokmakeup.com/cdn/shop/files/Shimmer_Eyeshadows.jpg?v=1766232362",
                mobile:
                    "",
            },
            alt: "Makeup",
        },
        {
            url: "https://hokmakeup.com/collections/product-without-clearance",
            images: {

                desktop:
                    "https://hokmakeup.com/cdn/shop/files/Rosy_Blush.jpg?v=1766232362",
                mobile:
                    "",
            },
            alt: "Combos & Kits",
        },
        {
            url: "https://hokmakeup.com/collections/product-without-clearance",
            images: {

                desktop:
                    "https://hokmakeup.com/cdn/shop/files/Stay-Fresh_Setting_Sprays.jpg?v=1766232362",
                mobile:
                    "",
            },
            alt: "Skin",
        },
        {
            url: "https://hokmakeup.com/collections/product-without-clearance",
            images: {

                desktop:
                    "https://hokmakeup.com/cdn/shop/files/Festive_Lipsticks.jpg?v=1766232360",
                mobile:
                    "",
            },
            alt: "Bath & Body",
        },
        {
            url: "https://hokmakeup.com/collections/product-without-clearance",
            images: {

                desktop:
                    "https://hokmakeup.com/cdn/shop/files/Volumizing_Mascaras.jpg?v=1766232362",
                mobile:
                    "",
            },
            alt: "Hair",
        },
        {
            url: "https://hokmakeup.com/collections/product-without-clearance",
            images: {

                desktop:
                    "https://hokmakeup.com/cdn/shop/files/Long-lasting_Kajal_Eyeliners.jpg?v=1766232361",
                mobile:
                    "",
            },
            alt: "Fragrance",
        }
    ]
}