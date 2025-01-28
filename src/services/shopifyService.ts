import '@shopify/shopify-api/adapters/node';
import {shopify} from "../config/index";
import { Session } from "@shopify/shopify-api";
import { ShopDetails,ShopifyQueryResponse } from "../types/shopifyTypes";



export const createShopifyClient = (shop: string, accessToken: string, query: string) => {
    // Create a new session for the shop
    const session = new Session({
      id: `offline_${shop}`,
      shop,
      accessToken,
      state: "",
      isOnline: false,
    });
  
    const client = new shopify.clients.Graphql({ session });
  
        return client.query({ data: query })
       //@ts-expect-error

        .then((response) => response?.body?.data.shop as ShopifyQueryResponse)
      .catch((error) => {
        console.error("Error fetching data from Shopify:", error);
        throw new Error("Error fetching data from Shopify API");
      });
  };