import ProductCard from '../../components/ProductCard';
import { getAllProducts } from '../../lib/shopify';

export default async function HomePage() {
  const { products } = await getAllProducts();
  
  return (
    <div className="grid grid-cols-2 gap-4">
      {products.edges.map(({ node }) => (
        <a key={node.id} href={`/product/${node.handle}`} className="p-4 block">
          <ProductCard product={node} />
        </a>
      ))}
    </div>
  );
}