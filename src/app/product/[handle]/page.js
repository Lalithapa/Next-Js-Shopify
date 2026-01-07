// app/product/[handle]/page.js
import { shopifyFetch } from '@/../lib/shopify';
import ProductPage from './ProductPage';

async function getProductByHandle(handle) {
  const query = `
    query ProductByHandle($handle: String!) {
      product(handle: $handle) {
        id
        handle
        title
        vendor
        productType
        priceRange {
          maxVariantPrice {
            amount
            currencyCode
          }
          minVariantPrice {
            amount
            currencyCode
          }
        }
        descriptionHtml
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
        images(first: 20) {
          edges {
            node {
              id
              url
              altText
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


export default async function ProductData(props) {
  const params = await props.params; // ✅ unwrap params
  const handle = params.handle;
  
  const product = await getProductByHandle(handle);
  return (
    <>
     <ProductPage product={product} />
    </>
  );
}
