import { Document } from "mongoose";


export interface IShop extends Document {
    shopName: string;
    accessToken: string;
    
  }
  