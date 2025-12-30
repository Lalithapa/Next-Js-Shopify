// lib/cart-cookie.js
import { cookies } from "next/headers";

const CART_COOKIE = "cartId";

export function getCartId() {
  return cookies().get(CART_COOKIE)?.value || null;
}

export function setCartId(cartId) {
  cookies().set(CART_COOKIE, cartId, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });
}
