// app/product/[handle]/page.js
import { shopifyFetch } from '@/../lib/shopify';
import ProductPage from '@/app/product/[handle]/ProductPage';
import ProductCard from '../../../../components/ProductCard';

async function getCollectionByHandle(handle) {
    const query = `
  query CollectionByHandle($handle: String!, $productsFirst: Int = 20) {
    collectionByHandle(handle: $handle) {
      id
      handle
      title
      description

      image {
        url
        altText
      }

      products(first: $productsFirst) {
        nodes {
          id
          handle
          title
          vendor
          productType

          featuredImage {
            url
            altText
          }
          selectedOrFirstAvailableVariant {
          price {
            amount
            currencyCode
          }
          compareAtPrice {
            amount
            currencyCode
          }
        }
          priceRange {
            minVariantPrice { amount currencyCode }
            maxVariantPrice { amount currencyCode }
          }

          # Handy for ProductCard (quick ATC + pricing)
          variants(first: 10) {
          edges {
            node {
              id
              title
              availableForSale
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
              selectedOptions {
                name
                value
              }
            }
          }
        }
        }
      }
    }
  }
`;
  const variables = { handle };
  const data = await shopifyFetch({ query, variables });
  return data;
}


export default async function CollectionData(props) {
  const params = await props.params; // ✅ unwrap params
  const handle = params.handle;

  const collection = await getCollectionByHandle(handle);

  return (
    <div className='container mx-auto w-full py-6 lg:py-8'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {collection.collectionByHandle.products.nodes.map((node) =>
            <ProductCard key={node.id} product={node} />
        )} 
      </div>
    </div>
  );
}
