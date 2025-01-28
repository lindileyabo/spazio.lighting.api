import express ,{ Request, Response } from 'express';
import { Shop } from '../model/shop.model';
import {shopify} from "../config"; // Adjust path as per your structure


export const authController = async (req: Request, res: Response) => {
  const { shop, host , hmac, code  } = req.query;
  if (!shop || !hmac || !code) {
    res.status(400).json({message:"Missing required parameters"});
  }
  try {
    const session = await shopify.auth.callback({
      rawRequest: req,
      rawResponse: res,
    });

    console.log("Session authenticated:", session);
    res.redirect(`/?shop=${shop}&host=${host}`);
  } catch (error) {
    console.error("Error during authentication:", error);
    res.status(500).send("Authentication failed");
  }
};



// export const installApp = async (req: Request, res: Response): Promise<void> => {
//   const shopDomain = req.query.shop as string;
//   console.log(shopDomain);
  
//   if (!shopDomain) {
//     res.status(400).json({ error: 'Shop parameter is required' });
//     return;
//   }
  
//   try {
//     const existingShop = await Shop.findOne({ shopName: shopDomain });
//     if (!existingShop) {
//       const newShop = new Shop({ shopName: shopDomain, accessToken: 'some-access-token' });
//       await newShop.save();
//       res.status(201).json({ message: 'Shop installed successfully' });
//     } else {
//       res.status(200).json({ message: 'Shop already installed' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to install app' });
//   }
// };
