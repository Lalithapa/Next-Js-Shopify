import ProductCard from '../../components/ProductCard';
import { getAllProducts } from '../../lib/shopify';

export default async function HomePage() {
  const { products } = await getAllProducts();
  
  return (
    <div className='container mx-auto w-full max-w-7xl py-6 lg:py-8'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.edges.map(({ node }) => (
            <ProductCard key={node.id} product={node} />
        ))}
      </div>
    </div>
  );
}