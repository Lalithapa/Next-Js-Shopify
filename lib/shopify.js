// lib/shopify.js
export async function shopifyFetch({ query, variables = {}, buyerIp } = {}) {
  const domain = process.env.SHOPIFY_STORE_DOMAIN;
  const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

  if (!domain) throw new Error("Missing env: SHOPIFY_STORE_DOMAIN");
  if (!token) throw new Error("Missing env: SHOPIFY_STOREFRONT_ACCESS_TOKEN");

  const apiVersion = process.env.SHOPIFY_API_VERSION || "2025-10";
  const endpoint = `https://${domain}/api/${apiVersion}/graphql.json`;

  const headers = {
    "Content-Type": "application/json",
    "X-Shopify-Storefront-Access-Token": token,
  };

  // Optional: preserves logged-in checkout experience for server-side requests
  // when customer access token is set on the cart. 
  if (buyerIp) headers["Shopify-Storefront-Buyer-IP"] = buyerIp;

  const res = await fetch(endpoint, {
    method: "POST",
    headers,
    body: JSON.stringify({ query, variables }),
    cache: "no-store",
  });

  const text = await res.text();
  let json;
  try {
    json = JSON.parse(text);
  } catch {
    throw new Error(`Shopify non-JSON (${res.status}): ${text}`);
  }

  if (!res.ok) throw new Error(`HTTP ${res.status}: ${JSON.stringify(json)}`);
  if (json.errors?.length) throw new Error(JSON.stringify(json.errors));

  return json.data;
}

export async function getAllProducts() {
  const query = `
    {
      products(first: 4, sortKey: TITLE) {
        edges {
          node {
            id
            handle
            title 
            description
            featuredImage {
              url
              altText
            }
          }
        }
      }
    }
  `;

  return shopifyFetch({ query });
}

export async function cartCreate() {
  const query = `
    mutation CartCreate {
      cartCreate {
        cart { id totalQuantity }
        userErrors { field message }
      }
    }
  `;
  return shopifyFetch({ query });
}

export async function cartGet({ cartId, buyerIp } = {}) {
  const query = `
    query CartGet($cartId: ID!) {
      cart(id: $cartId) {
        id
        totalQuantity
        checkoutUrl
        cost {
          subtotalAmount { amount currencyCode }
          totalAmount { amount currencyCode }
        }
        lines(first: 50) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  product { title handle }
                  image { url altText }
                  price { amount currencyCode }
                }
              }
            }
          }
        }
      }
    }
  `;
  return shopifyFetch({ query, variables: { cartId }, buyerIp });
}


export async function cartLinesAdd({ cartId, lines }) {
  const query = `
    mutation CartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart { id totalQuantity }
        userErrors { field message }
      }
    }
  `;
  return shopifyFetch({ query, variables: { cartId, lines } });
}

export async function cartCheckoutUrl({ cartId, buyerIp } = {}) {
  // Shopify: query Cart.checkoutUrl by cart id 
  const query = `
    query CheckoutURL($cartId: ID!) {
      cart(id: $cartId) {
        checkoutUrl
      }
    }
  `;
  return shopifyFetch({ query, variables: { cartId }, buyerIp });
}
