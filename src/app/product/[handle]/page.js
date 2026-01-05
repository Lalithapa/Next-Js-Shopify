// app/product/[handle]/page.js
import { shopifyFetch } from '@/../lib/shopify';
import AddToCartButton from '@/app/components/AddToCartButton';
import ProductGalleryClient from './ProductGalleryClient';

async function getProductByHandle(handle) {
  const query = `
    query ProductByHandle($handle: String!) {
      product(handle: $handle) {
        id
        handle
        title
        descriptionHtml
        vendor
        productType

        images(first: 6) {
          edges {
            node {
              id
              url
              altText
            }
          }
        }

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
  `;
  const variables = { handle };
  const data = await shopifyFetch({ query, variables });
  return data.product;
}

export default async function ProductPage(props) {
  const params = await props.params; // ✅ unwrap params
  const handle = params.handle;

  const product = await getProductByHandle(handle);
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
          <ProductGalleryClient
            images={product.images.edges.map(({ node }) => ({
              url: node.url,
              altText: node.altText || product.title,
            }))}
            title={product.title}
          />
        <div className="p-5">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
          <AddToCartButton variantId={product.variants.edges[0].node.id} />
        </div>
      </div>
      {/* Render variants with Add to Cart buttons */}
    </div>
  );
}
