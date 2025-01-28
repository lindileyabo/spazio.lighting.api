import express,{Request,Response} from "express";
import routes from "./routes";
import {errorHandler} from "./middlewares/errorHandler.middleware";

export const app = express();

app.use(express.urlencoded({extended:false}));

app.use(errorHandler);

app.use('/api',routes);
