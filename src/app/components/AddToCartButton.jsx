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
        setQty(1);
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
   <div className="flex items-center gap-3 w-full" >
     <div className="shrink-0">
        <QuantitySelector
          value={qty}
          onChange={(newQty) => {
            setQty(newQty);
          }}
        />
      </div>
      <button
        onClick={handleAdd}
        disabled={pending}
        className="flex-1
        h-11
        rounded-md
        bg-black
        text-white
        text-sm
        font-semibold
        tracking-wide
        transition-all
        duration-200
        hover:bg-neutral-800
        active:scale-[0.98]
        disabled:opacity-50
        disabled:cursor-not-allowed
        disabled:active:scale-100"
      >
        {pending ? "Adding..." : "Add to Cart"}
      </button>
    </div>
   </>
  );
}
