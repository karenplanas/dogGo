import express from "express";
import Sitter from "../models/sitter";

const find = () => {
  throw new Error("Function not implemented.");
};

export const getSitters = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const sitters = await find();
    res.json(sitters);
    res.status(201);
  } catch (e) {
    console.error(e);
    res.status(400);
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
    res.json(sitter);
    res.status(201);
  } catch (e) {
    res.status(400);
    console.log(e);
  }
};
