// src/app/actions/cart.js
"use server";

import { cartCreate, cartLinesAdd } from "@/../lib/shopify";
import { getCartId, setCartId } from "../actions/cart-cookie";

export async function addToCartAction({ variantId, quantity = 1 }) {
  if (!variantId) throw new Error("Missing variantId");

  let cartId = await getCartId();

  // Create cart if missing
  if (!cartId) {
    const created = await cartCreate();
    cartId = created?.cartCreate?.cart?.id;

    const userErrors = created?.cartCreate?.userErrors;
    if (!cartId || (userErrors && userErrors.length)) {
      throw new Error(JSON.stringify(userErrors || "cartCreate failed"));
    }

    await setCartId(cartId);
  }

  const lines = [{ merchandiseId: variantId, quantity: Number(quantity) }];

  const updated = await cartLinesAdd({ cartId, lines });
  const cart = updated?.cartLinesAdd?.cart;
  const userErrors = updated?.cartLinesAdd?.userErrors;

  if (!cart || (userErrors && userErrors.length)) {
    throw new Error(JSON.stringify(userErrors || "cartLinesAdd failed"));
  }

  return cart;
}

/**
 * Fetch full cart for cart drawer (lines, totals, qty, etc.)
 * Returns null if no cart cookie.
 */
export async function getCartAction() {
  const cartId = await getCartId();
  if (!cartId) return null;

  const data = await cartGet({ cartId });
  return data?.cart || null;
}

/**
 * Optional: get checkout url for "Buy Now" / "Go to checkout"
 */
export async function getCheckoutUrlAction() {
  const cartId = await getCartId();
  if (!cartId) return null;

  const data = await cartCheckoutUrl({ cartId });
  return data?.cart?.checkoutUrl || null;
}