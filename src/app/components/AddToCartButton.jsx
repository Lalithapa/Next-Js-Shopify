// src/components/AddToCartButton.jsx
"use client";

import { useState } from "react";
import { addToCartAction } from "@/app/actions/cart";

export default function AddToCartButton({ merchandiseId }) {
  const [loading, setLoading] = useState(false);
  const [qty, setQty] = useState(1);

  async function onAdd() {
    try {
      setLoading(true);
      await addToCartAction({ merchandiseId, quantity: Number(qty) });
      alert("Added to cart ✅");
    } catch (e) {
      console.error(e);
      alert("Add to cart failed ❌");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <input
        type="number"
        min="1"
        value={qty}
        onChange={(e) => setQty(e.target.value)}
        style={{ width: 70 }}
      />
      <button onClick={onAdd} disabled={loading} className="border border-black py-2 px-4">
        {loading ? "Adding..." : "Add to Cart"}
      </button>
    </div>
  );
}
