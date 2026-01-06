// src/app/components/AddToCartButton.jsx
"use client";

import { useState, useTransition } from "react";
import { addToCartAction } from "@/app/actions/cart";
import QuantitySelector from "../../../components/QuantitySelector";
import { useCart } from "./CartProvider";
import { toast } from "sonner";

export default function AddToCartButton({ variantId, quantity = 1 }) {
  const [pending, startTransition] = useTransition();
  const [qty, setQty] = useState(quantity);
  const { setCart } = useCart();
  const handleAdd = () => {
    startTransition(async () => {
      try {
        const cart = await addToCartAction({ variantId, quantity: qty });
        setCart(cart); 
        toast.success(`Added ✅ Cart qty: ${cart.totalQuantity}`);
        // Replace with your toast/cart drawer logic
        // alert(`Added ✅ Cart qty: ${cart.totalQuantity}`);
      } catch (e) {
        console.error(e);
        toast.error("Add to cart failed");
      }
    });
  };

  return (
   <>
      <QuantitySelector
        value={qty}
        onChange={(newQty) => {
          setQty(newQty);
        }}
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
