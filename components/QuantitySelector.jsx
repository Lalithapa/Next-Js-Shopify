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
    <div className="inline-flex items-center border rounded-full overflow-hidden h-9">
      <button
        type="button"
        onClick={decrease}
        disabled={value <= min}
        aria-label="Decrease quantity"
        className={`w-9 h-9 text-lg flex items-center justify-center transition ${
          value <= min ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100"
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
        className="w-10 text-center text-sm outline-none border-x"
      />

      <button
        type="button"
        onClick={increase}
        aria-label="Increase quantity"
        className="w-9 h-9 text-lg flex items-center justify-center hover:bg-gray-100 transition"
      >
        +
      </button>
    </div>
  );
}
