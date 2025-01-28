// Define the expected shape of the response from the Shopify query
export interface ShopDetails {
    name: string;
    myshopifyDomain: string;
    email: string;
  }
  
  export interface ShopifyQueryResponse {
    shop: ShopDetails;
  }
  