import AddToCartButton from '@/app/components/AddToCartButton';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-sm rounded-lg shadow-lg overflow-hidden bg-white transform transition duration-500">
      {/* Image Container with Next.js Image component */}
      <div className="relative h-48 w-full">
        <Link href={`/product/${product.handle}`} className="p-4 block">
          <Image
            src={product.featuredImage?.url}
            alt={product.featuredImage?.altText || product.title}
            fill
            className="object-cover transition duration-500 ease-in-out hover:opacity-90"
          />
         </Link>
      </div>

      {/* Card Body */}
      <div className="p-5">
        <Link href={`/product/${product.handle}`}>
          <h3 className="text-gray-900 font-bold text-xl mb-2">{product.title}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-5">{product.description}</p>
        </Link>
        <div className="flex items-center justify-between">
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