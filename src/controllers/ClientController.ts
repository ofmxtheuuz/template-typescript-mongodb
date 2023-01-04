import express, {Request, Response, NextFunction } from "express" 

export async function Index(req: Request, res: Response) {
    res.render("client/index", { title: "Home" })
}