import Image from 'next/image';

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-sm rounded-lg shadow-lg overflow-hidden bg-white transform transition duration-500 hover:scale-105">
      {/* Image Container with Next.js Image component */}
      <div className="relative h-48 w-full">
        <Image
          src={product.featuredImage?.url}
          alt={product.featuredImage?.altText || product.title}
          layout="fill"
          objectFit="cover"
          className="transition duration-500 ease-in-out hover:opacity-90"
        />
      </div>

      {/* Card Body */}
      <div className="p-5">
        <h3 className="text-gray-900 font-bold text-xl mb-2">{product.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        
        <div className="flex items-center justify-between">
          {/* <span className="text-gray-800 font-semibold text-lg">${product.price.toFixed(2)}</span> */}
          
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;