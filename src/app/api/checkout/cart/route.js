import { NextResponse } from "next/server";
import { cartGet } from "@/../lib/shopify";
import { cookies } from "next/headers";

export async function GET() {
  const store = await cookies();
  const cartId = store.get("cartId")?.value;

  if (!cartId) return NextResponse.json({ cart: null });

  const data = await cartGet({ cartId });
  return NextResponse.json({ cart: data?.cart || null });
}
