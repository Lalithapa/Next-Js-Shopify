"use client";

import Image from "next/image";
import Link from "next/link";
import { CartIcon, CloseIcon, HeartIcon, MenuIcon, UserIcon } from "./icons";
import logo from "@/../public/hok_logo.webp"
import { useEffect, useState } from "react";
import CartDrawerModal from "../CartDrawerModal";
import { useCart } from "@/app/components/CartProvider";

export default function Header() {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleOpenCartModal = () => setIsCartOpen(true);
  const handleCloseCartModal = () => setIsCartOpen(false);
  // const { handleCartClick, cartCount, totalPrice } = useCart();
  // const wishlistCount = useAppSelector((state) => state.wishlistReducer).items
  //   ?.length;
  const { cart, cartCount, loading, refreshCart } = useCart();

  const onOpen = async () => {
    await refreshCart(); // fetch latest cart before opening drawer
    handleOpenCartModal();
  };

  // // Sticky menu
  // const handleStickyMenu = () => {
  //   if (window.scrollY >= 80) {
  //     setStickyMenu(true);
  //   } else {
  //     setStickyMenu(false);
  //   }
  // };

  useEffect(() => {
    refreshCart();
    // window.addEventListener("scroll", handleStickyMenu);
    // return () => {
    //   window.removeEventListener("scroll", handleStickyMenu);
    // };
  }, [refreshCart]);

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setNavigationOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header
        className={`relative left-0 top-0 w-full z-50 bg-white transition-all  ease-in-out duration-300 shadow-sm ${stickyMenu && "shadow-sm"
          }`}
      >
        {/* Topbar */}
        <div className="bg-white py-2.5">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 xl:px-0">
            <div className="flex justify-between">
              <div className="hidden lg:block">
                <p className="text-sm font-medium text-dark">
                    Get free delivery on orders over $100
                </p>
              </div>
              <div className="flex divide-x divide-dark/20">
                <Link
                  href="/signup"
                  className="pr-3 text-sm font-medium text-dark transition hover:text-blue-300"
                >
                  Create an account
                </Link>
                <Link
                  href="#"
                  className="pl-3 text-sm font-medium text-dark transition hover:text-blue-300"
                >
                  {"Sign In"}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="px-4 mx-auto max-w-7xl sm:px-6 xl:px-0">
          <div className="flex items-center justify-between py-4 xl:py-0">
            {/* Logo */}
            <div>
              <Link className="block py-2 shrink-0" href="/">
                <div className="flex items-center gap-1">
                  <Image
                    src={logo}
                    alt="Logo"
                    width={148}
                    height={36}
                    priority
                  />
                  {/* <span className="ml-2 px-3 py-1 rounded-tl-lg rounded-tr-lg rounded-br-lg bg-[#02AAA4] text-white text-sm font-medium">
                    Demo
                  </span> */}
                </div>
              </Link>
            </div>

            {/* Desktop Menu - Hidden on mobile */}
            <div className="hidden xl:block">
              {/* <DesktopMenu menuData={menuData} stickyMenu={stickyMenu} /> */}
            </div>
            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <button
                className="transition hover:text-blue focus:outline-none"
                onClick={() => setSearchModalOpen(true)}
                aria-label="Search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>

              </button>

              <Link
                href="#"
                className="transition hover:text-blue focus:outline-none"
                aria-label="Account"
              >
                <UserIcon />
              </Link>

              {/* <Link
                href="/wishlist"
                className="relative text-gray-700 transition hover:text-blue focus:outline-none"
                aria-label="Wishlist"
              >
                <HeartIcon />
                <span className="absolute -top-1.5 -right-1.5 w-[18px] h-[18px] text-white bg-red-600 text-[10px] font-normal rounded-full inline-flex items-center justify-center">
                  {wishlistCount || 0}
                </span>
              </Link> */}

              <button
                className="relative text-gray-700 transition hover:text-blue focus:outline-none"
                onClick={onOpen}
                aria-label="Cart"
              >
                <CartIcon />
                <span className="absolute -top-1.5 -right-1.5 w-[18px] h-[18px] text-white bg-red-600 text-[10px] font-normal rounded-full inline-flex items-center justify-center">
                  { cartCount || 0} 
                </span>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                className="transition xl:hidden focus:outline-none"
                onClick={() => setNavigationOpen(!navigationOpen)}
                aria-label={navigationOpen ? "Close menu" : "Open menu"}
              >
                {navigationOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
              <CartDrawerModal
                open={isCartOpen}
                onClose={handleCloseCartModal}
                cart={cart}
                loading={loading}
              />
            </div>
          </div>
        </div>
      </header>
  );
}