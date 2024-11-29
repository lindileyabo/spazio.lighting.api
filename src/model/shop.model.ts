import mongoose, { Schema} from 'mongoose';
import { IShop } from "../types/shop";

const shopSchema: Schema = new Schema({
  shopName: { type: String, required: true, unique: true },
  accessToken: { type: String, required: true },
});

export const Shop = mongoose.model<IShop>('Shop', shopSchema);
