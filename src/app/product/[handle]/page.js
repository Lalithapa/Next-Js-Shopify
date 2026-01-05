// app/product/[handle]/page.js
import { shopifyFetch } from '@/../lib/shopify';
import AddToCartButton from '@/app/components/AddToCartButton';
import Image from 'next/image';

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
               <div className="grid grid-cols-2 gap-4">
                    {product.images.edges.map(({ node }, index ) => (
                        <Image
                            key={index}
                            src={node.url}
                            alt={node.altText || product.title}
                            width={400}
                            height={400}
                            objectFit="contain"
                            className={`transition duration-500 ease-in-out hover:opacity-90 object-contain ${
                            index === 0 ? 'col-span-full w-full' : ''
                            }`}
                        />
                    ))}
               </div>
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
  