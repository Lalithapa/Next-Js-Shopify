"use client";

import { useState } from "react";
import { checkoutAction } from "@/app/actions/cart";

export function CheckoutButton() {
  const [loading, setLoading] = useState(false);

  async function goCheckout() {
    try {
      setLoading(true);
      const url = await checkoutAction();
      window.location.href = url;
    } finally {
      setLoading(false);
    }
  }

  return (
    <button onClick={goCheckout} disabled={loading}>
      {loading ? "Redirecting..." : "Checkout"}
    </button>
  );
}