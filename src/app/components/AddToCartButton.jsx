// src/app/components/AddToCartButton.jsx
"use client";

import { useState, useTransition } from "react";
import { addToCartAction } from "@/app/actions/cart";

export default function AddToCartButton({ variantId, quantity = 1 }) {
  const [pending, startTransition] = useTransition();
  const [qty, setQty] = useState(quantity);

  const handleAdd = () => {
    startTransition(async () => {
      try {
        const cart = await addToCartAction({ variantId, quantity: qty });
        // Replace with your toast/cart drawer logic
        alert(`Added ✅ Cart qty: ${cart.totalQuantity}`);
      } catch (e) {
        console.error(e);
        alert("Add to cart failed");
      }
    });
  };

  return (
   <>
    <input
        type="number"
        min="1"
        value={qty}
        onChange={(e) => setQty(e.target.value)}
        style={{ width: 70 }}
      />
    <button
      onClick={handleAdd}
      disabled={pending}
      className="rounded-full px-4 py-2 border"
    >
      {pending ? "Adding..." : "Add to Cart"}
    </button>
   </>
  );
}
