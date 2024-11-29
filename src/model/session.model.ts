import mongoose, { Schema} from 'mongoose';
import { IShop } from "../types/shop";

const sessionSchema: Schema = new Schema({
  shopName: { type: String, required: true, unique: true },
  accessToken: { type: String, required: true },
});

export const Session = mongoose.model<IShop>('Session', sessionSchema);
