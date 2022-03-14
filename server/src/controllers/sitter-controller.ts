import express from "express";
import { isYieldExpression } from "typescript";
import {Sitter, findSitters} from "../models/sitter";

export const getSitters = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const sitters = await findSitters();
    res.status(200);
    res.json({ data: sitters });
  } catch (e) {
    res.status(500);
    res.json({ error: "Internal server error" });
  }
};

export const addSitter = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const sitter = new Sitter({
      name: req.body.name,
      quote: req.body.quote,
      avatar: req.body.avatar,
    });
    await sitter.save();
    res.status(201);
    res.json({ data: sitter });
  } catch (e) {
    res.status(500);
    res.json({ error: "Internal server error" });
  }
};
