"use client";

export default function QuantitySelector({
  value = 1,
  onChange,
  min = 1,
}) {
  const decrease = () => {
    if (value > min) onChange(value - 1);
  };

  const increase = () => {
    onChange(value + 1);
  };

  const handleInput = (e) => {
    const next = Math.max(min, Number(e.target.value) || min);
    onChange(next);
  };

  return (
    <div className="inline-flex items-center border rounded-md overflow-hidden h-11">
      <button
        type="button"
        onClick={decrease}
        disabled={value <= min}
        aria-label="Decrease quantity"
        className={`w-6
      h-full
      flex
      items-center
      justify-center
      text-lg
      font-medium
      text-neutral-700
      transition
      hover:bg-neutral-100
      active:bg-neutral-200
      disabled:opacity-40
      disabled:cursor-not-allowed
      disabled:active:bg-transparent
 ${value <= min ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100"
          }`}
      >
        −
      </button>

      <input
        type="text"
        min={min}
        value={value}
        readOnly={true}
        onChange={handleInput}
        name="quantity"
        aria-label="Quantity"
        className="w-12
      h-full
      text-center
      text-sm
      font-medium
      text-neutral-900
      border-x
      border-neutral-300
      outline-none
      bg-white
      select-none"
      />

      <button
        type="button"
        onClick={increase}
        aria-label="Increase quantity"
        className="w-6
      h-full
      flex
      items-center
      justify-center
      text-lg
      font-medium
      text-neutral-700
      transition
      hover:bg-neutral-100
      active:bg-neutral-200"
      >
        +
      </button>
    </div>
  );
}
