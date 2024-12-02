import { Document } from "mongoose";


export interface IOrder extends Document {
    shopName: string;
    accessToken: string;
  }
  