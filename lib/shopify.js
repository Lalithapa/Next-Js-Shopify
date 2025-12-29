export async function shopifyFetch({ query, variables = {} }) {
  const domain = process.env.SHOPIFY_STORE_DOMAIN;
  const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

  if (!domain) throw new Error("Missing env: SHOPIFY_STORE_DOMAIN");
  if (!token) throw new Error("Missing env: SHOPIFY_STOREFRONT_ACCESS_TOKEN");

  const apiVersion = "2025-10";
  const endpoint = `https://${domain}/api/${apiVersion}/graphql.json`;

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": token,
    },
    body: JSON.stringify({ query, variables }),
    cache: "no-store",
  });

  const json = await res.json();
  console.log(json, "json");

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}: ${JSON.stringify(json)}`);
  }

  if (json.errors?.length) {
    throw new Error(JSON.stringify(json.errors));
  }

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