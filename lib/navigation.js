import { shopifyFetch } from "./shopify";

export async function getNavItems(menuItem) {
  const query = `
    query MyNavItems {
      menu(handle: "${menuItem}") {
        id
        itemsCount
        items {
          id
          title
          url
          items {
            id
            title
            url
            items {
              id
              title
              url
            }
          }
        }
      }
    }
  `;
  return shopifyFetch({ query });
}