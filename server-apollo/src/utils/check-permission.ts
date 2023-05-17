// @/utils/check-permission.ts

import { NextFunction } from "express";
import { IContext } from "../types/context.interface";

export const isAuthenticated = (context: IContext, next: NextFunction) => {
  if (!context.req.session.userId) {
    throw new Error("User not authenticated");
  }
  return next();
};