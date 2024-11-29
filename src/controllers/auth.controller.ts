import { Request, Response } from 'express';
import { Shop } from '../model/shop.model';

export const installApp = async (req: Request, res: Response): Promise<void> => {
  const shopDomain = req.query.shop as string;
  if (!shopDomain) {
    res.status(400).json({ error: 'Shop parameter is required' });
    return;
  }
  
  try {
    const existingShop = await Shop.findOne({ shopName: shopDomain });
    if (!existingShop) {
      const newShop = new Shop({ shopName: shopDomain, accessToken: 'some-access-token' });
      await newShop.save();
      res.status(201).json({ message: 'Shop installed successfully' });
    } else {
      res.status(200).json({ message: 'Shop already installed' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to install app' });
  }
};
