// src/app/actions/cart.js
"use server";

import { cartCreate, cartLinesAdd, cartCheckoutUrl } from "@/../lib/shopify";
import { getCartId, setCartId } from "@/../lib/cart-cookie";
import { headers } from "next/headers";

export async function ensureCart() {
  let cartId = getCartId();
  if (cartId) return cartId;

  const data = await cartCreate();
  cartId = data.cartCreate.cart.id;
  setCartId(cartId);
  return cartId;
}

export async function addToCartAction({ merchandiseId, quantity = 1 }) {
  const cartId = await ensureCart();
 console.log(merchandiseId, "merchandiseId");
  const data = await cartLinesAdd({
    cartId,
    lines: [{ merchandiseId, quantity }],
  });

  const errs = data.cartLinesAdd.userErrors;
  if (errs?.length) throw new Error(JSON.stringify(errs));

  return data.cartLinesAdd.cart; // { id, totalQuantity }
}

export async function checkoutAction() {
  const cartId = await ensureCart();

  // Optional buyer IP: best effort. (May be undefined in some setups)
  const buyerIp =
    headers().get("x-forwarded-for")?.split(",")[0]?.trim() || undefined;

  const data = await cartCheckoutUrl({ cartId, buyerIp });
  const url = data.cart.checkoutUrl;

  // Shopify notes checkoutUrl should be requested when buyer is ready to checkout
  // and may be re-requested if stale. 
  return url;
}