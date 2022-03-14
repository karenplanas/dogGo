import express from "express";
import { isYieldExpression } from "typescript";
import {Sitter, findSitters} from "../models/sitter";

export const getSitters = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const sitters = await findSitters();
    res.json({ data: sitters });
    res.status(200);
  } catch (e) {
    res.status(500);
    res.json({ error: "unknown message" });
    // res.json({ error: e.message });
    // res.send();
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
    res.json(sitter);
  } catch (e) {
    res.status(500);
    res.send();
  }
};
