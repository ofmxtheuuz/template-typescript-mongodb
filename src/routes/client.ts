import express, {Request, Response, NextFunction } from "express" 
import * as controller from "../controllers/ClientController";
const router = express.Router();

router.get("/", controller.Index)

export default router;