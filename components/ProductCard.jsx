import AddToCartButton from '@/app/components/AddToCartButton';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product }) => {
    const firstVariant = product?.selectedOrFirstAvailableVariant;
    const price = Number(firstVariant.price?.amount || 0);
    const compareAt = Number(firstVariant.compareAtPrice?.amount || 0);
    const currency = firstVariant.price?.currencyCode || "₹";
  
    const hasDiscount = compareAt > price && price > 0;

    const discountRate = hasDiscount ? Math.round(((compareAt - price) / compareAt) * 100) : 0;

    const formatMoney = (amount) =>
        new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency,
        maximumFractionDigits: 0,
    }).format(amount);


  return (
    <div className="max-w-sm rounded-lg shadow-lg border overflow-hidden bg-white transform transition duration-500">
      {/* Image Container with Next.js Image component */}
        <Link href={`/product/${product.handle}`} className="p-4 block">
          <div className="relative w-full">
              <Image
                src={product.featuredImage?.url}
                alt={product.featuredImage?.altText || product.title}
                width={360} height={360}
                className="object-cover transition aspect-square duration-500 ease-in-out hover:opacity-90"
              />
          </div>
         </Link>

      {/* Card Body */}
      <div className="p-5">
        <Link href={`/product/${product.handle}`} className='flex flex-col gap-2'>
          <h3 className="text-gray-900 font-bold text-xl min-h-10">{product.title}</h3>
          <div className="flex items-end gap-3">
              <div className="text-xl font-semibold text-gray-900">
                {formatMoney(price)}
              </div>
              {compareAt > price &&
                <>
                <div className="text-sm text-gray-400 line-through">
                  {formatMoney(compareAt)}
                </div>
                <span className="ml-1 inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-semibold text-red-600">
                  {discountRate}% OFF
              </span>
                </>
              }
            </div>
          <p className="text-gray-600 text-sm mb-6 line-clamp-3">{product.description}</p>
        </Link>
        <div>
          {/* <span className="text-gray-800 font-semibold text-lg">${product.price.toFixed(2)}</span> */}
           <AddToCartButton variantId={product.variants.edges[0].node.id} />
          {/* <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">
            Add to Cart
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;