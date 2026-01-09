import ProductCard from '../../../components/ProductCard';
import { getAllProducts } from '../../../lib/shopify';

export default async function Card() {
  const { products } = await getAllProducts();

  return (
    <div className='container mx-auto w-full'>
      <div>
        <p className="text-[#212529] text-left font-extrabold text-[22px] mb-6 whitespace-nowrap uppercase md:text-[32px] md:leading-9">
         New Arrivals
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.edges.map(({ node }) => (
          <ProductCard key={node.id} product={node} />
        ))}
      </div>
    </div>
  );
}