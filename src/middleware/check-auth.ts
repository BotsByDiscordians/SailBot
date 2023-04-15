// this can be changed to support stormworks auth / new sailbot auth later, as this is just basic bot auth for now
import { RequestHandler } from "express";

export function checkAuth(token: string): RequestHandler {
  return (req, res, next) => {
    if (req.headers.authorization !== token) {
      res.sendStatus(401);
      return;
    }
    next();
  };
}
