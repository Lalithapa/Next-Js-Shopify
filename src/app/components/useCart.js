"use client";
import { useCallback, useEffect, useState } from "react";

export function useCart() {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(false);

  const refreshCart = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/cart", { cache: "no-store" });
      const data = await res.json();
      setCart(data.cart);
    } finally {
      setLoading(false);
    }
  }, []);

  // initial fetch (optional)
  useEffect(() => {
    const handler = () => refreshCart();
    window.addEventListener("cart:refresh", handler);
    return () => window.removeEventListener("cart:refresh", handler);
  }, [refreshCart]);

  return {
    cart,
    cartCount: cart?.totalQuantity ?? 0,
    loading,
    refreshCart,
    setCart,
  };
}
