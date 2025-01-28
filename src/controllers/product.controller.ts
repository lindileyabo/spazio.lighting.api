import { Request,Response } from "express";
import { Shop } from "../model/shop.model";
import { LATEST_API_VERSION, Session, SessionParams } from "@shopify/shopify-api";
import {shopify} from "../config/index";

export const getProducts = async (req: Request, res: Response): Promise<void> => {

   // Requests to /my-endpoint must be made with authenticatedFetch from App Bridge for embedded apps
  const sessionId =  await shopify.session.getCurrentId({
      isOnline:true,
      rawRequest:req,
      rawResponse:res
    });

  // use sessionId to retrieve session from app's session storage
  // getSessionFromStorage() must be provided by application

  // const session = await sessionStorage.getItem(`${sessionId}`);
console.log("latest version",LATEST_API_VERSION);

  // const client = new shopify.clients.Graphql({
  //   session,
  //   apiVersion: LATEST_API_VERSION
  // })
  };

export const getProduct = async (req: Request, res: Response): Promise<void> => {
    
  };

export const createProduct = async (req: Request, res: Response): Promise<void> => {
    
  };

export const updateProduct = async (req: Request, res: Response): Promise<void> => {
    
  };
export const deleteProduct = async (req: Request, res: Response): Promise<void> => {
    
  };