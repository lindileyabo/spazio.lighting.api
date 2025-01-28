import { Document } from "mongoose";


export interface IProduct extends Document {
    shopName: string;
    accessToken: string;
  }
  