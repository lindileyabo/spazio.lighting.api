import '@shopify/shopify-api/adapters/node';
import { shopifyApi,ApiVersion } from "@shopify/shopify-api";
import dotenv  from "dotenv";
dotenv.config()
export const shopify = shopifyApi({
  apiKey: process.env.SHOPIFY_API_KEY || "",
  apiSecretKey: process.env.SHOPIFY_API_SECRET || "",
  scopes: (process.env.SHOPIFY_SCOPES || "").split(","),
  hostName: process.env.SHOPIFY_HOST_NAME || "",
  apiVersion: ApiVersion.January25,
  isEmbeddedApp: true,
});



