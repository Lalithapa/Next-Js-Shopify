"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import QuantitySelector from "./QuantitySelector";
import { useCart } from "@/app/components/CartProvider";
import { updateCartLineQtyAction } from "@/app/actions/cart";
import  emptyCart from "@/../public/empty_cart.webp";

export default function CartDrawerModal({
  open,
  onClose,
  cart,
  loading,
}) {

  const { setCart } = useCart();
  const [updatingLineId, setUpdatingLineId] = useState(null);
  // ESC close
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;
  console.log(open, "Cart is Open");
  const lines = cart?.lines?.edges || [];
  const totalQty = cart?.totalQuantity ?? 0;
  const checkoutUrl = cart?.checkoutUrl;

  const handleQtyChange = async (lineId, newQty) => {
    try {
      setUpdatingLineId(lineId);
      const qty = Number(newQty);
      const updatedCart = await updateCartLineQtyAction({
        lineId,
        quantity: qty,
      });

      // ✅ Updates drawer + header count immediately
      setCart(updatedCart);
    } catch (e) {
      console.error("Qty update error:", e);
      // optional: toast here
    } finally {
      setUpdatingLineId(null);
    }
  };

  return (
    <div className="fixed inset-0 z-9999">
      {/* Overlay */}
      <button
        aria-label="Close cart"
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* Drawer */}
      <aside
        className="absolute right-0 top-0 h-full w-full max-w-105 bg-white shadow-xl flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-label="Cart Drawer"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <div className="flex flex-col">
            <span className="text-[16px] font-semibold">Your Cart</span>
            <span className="text-[12px] text-gray-500">{totalQty} item(s)</span>
          </div>

          <button
            onClick={onClose}
            className="h-9 w-9 rounded-full hover:bg-gray-100 inline-flex items-center justify-center"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-4">
          {loading ? (
            <div className="text-sm text-gray-600">Loading cart...</div>
          ) : lines.length === 0 ? (
            <div className="text-sm text-gray-600 h-full">
              <div className="flex h-full flex-col items-center justify-center text-center px-6">
                  <Image
                    src={emptyCart}
                    alt="Empty cart"
                    height={300}
                    width={300}
                    className="object-cover opacity-80"
                  />
                  <p className="mt-4 text-sm font-medium text-gray-900">
                    Your cart is empty
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Start shopping to add items
                  </p>
                </div>
            </div>
          ) : (
            <div className="space-y-4">
              {lines.map(({ node }) => {
                const merch = node?.merchandise;
                const productTitle = merch?.product?.title || "Product";
                const variantTitle = merch?.title || "";
                const img = merch?.image?.url;
                const alt = merch?.image?.altText || productTitle;
                const price = merch?.price?.amount;
                const currency = merch?.price?.currencyCode;
                const isUpdating = updatingLineId === node.id;

                return (
                  <div key={node.id} className="flex gap-3 border rounded-xl p-3">
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                      {img ? (
                        // Use <img> inside modal is ok, or swap to next/image if you want
                        <Image src={img} alt={alt} width={64} height={64} className="h-full w-full object-cover" />
                      ) : null}
                    </div>
                    {/* Content */}
                      <div className="min-w-0 flex-1">
                        {/* Top row: title + remove */}
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <div className="text-sm font-medium text-gray-900 line-clamp-2">
                              {productTitle}
                            </div>
                            {variantTitle ? (
                              <div className="mt-0.5 text-xs text-gray-500 line-clamp-1">
                                {variantTitle}
                              </div>
                            ) : null}
                          </div>

                          {/* Remove / Close */}
                          <button
                            type="button"
                            onClick={() => handleQtyChange(node.id, 0)}
                            className="shrink-0 rounded-full p-1.5 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                            aria-label="Remove item"
                          >
                            ✕
                          </button>

                        </div>

                        {/* Bottom row: qty + price */}
                        <div className="mt-3 flex items-center justify-between gap-3">
                          <QuantitySelector
                              value={node.quantity}
                              disabled={isUpdating}
                              onChange={(newQty) => handleQtyChange(node.id, newQty)}
                            />
                          {/* <div className="shrink-0 text-sm font-semibold text-gray-900 whitespace-nowrap">
                            {currency} {Number(price).toFixed(2)}
                          </div> */}
                           {price ? (
                          <div className="shrink-0 text-sm font-semibold text-gray-900 whitespace-nowrap">
                            {currency} {Number(price).toFixed(2)}
                          </div>
                        ) : null}
                        {isUpdating ? (
                        <div className="text-xs text-gray-400 mt-1">Updating…</div>
                      ) : null}
                        </div>
                      </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t p-4 space-y-3">
          <button
            onClick={onClose}
            className="w-full rounded-full border px-4 py-3 text-sm font-medium hover:bg-gray-50"
          >
            Continue shopping
          </button>
          {
            totalQty > 0 && (
            <a
            href={checkoutUrl || "#"}
            className={`w-full rounded-full px-4 py-3 text-sm font-semibold text-white inline-flex items-center justify-center ${
              checkoutUrl ? "bg-black hover:opacity-90" : "bg-gray-300 cursor-not-allowed"
            }`}
            aria-disabled={!checkoutUrl}
            onClick={(e) => {
              if (!checkoutUrl) e.preventDefault();
            }}
          >
            Go to Checkout
          </a>
            )
          }
          
        </div>
      </aside>
    </div>
  );
}
