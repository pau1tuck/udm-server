import { Router, Request, Response } from "express";

const routes: Router = Router();

// Set up the "/" route to render the index.ejs file:
routes.get("/", (_req: Request, res: Response) => {
    res.render("index");
});

export default routes;
