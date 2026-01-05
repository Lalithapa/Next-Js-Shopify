// src/app/actions/cart_cookie.js
import { cookies } from "next/headers";

const CART_COOKIE = "cartId";

async function cookieStore() {
  // Next.js newer versions: cookies() can be async
  const store = await cookies();
  return store;
}

export async function getCartId() {
  const store = await cookieStore();
  return store.get(CART_COOKIE)?.value || null;
}

export async function setCartId(cartId) {
  const store = await cookieStore();
  store.set(CART_COOKIE, cartId, {
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });
}

export async function clearCartId() {
  const store = await cookieStore();
  store.delete(CART_COOKIE);
}
