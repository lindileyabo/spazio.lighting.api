import { Document } from "mongoose";


export interface ICustomer extends Document {
    shopName: string;
    accessToken: string;
  }
  