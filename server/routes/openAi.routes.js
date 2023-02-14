import { Router } from "express";
import { createAiImage } from "../controllers/openAi.controller.js";

export const openAiRoutes = Router();

openAiRoutes.post("/", createAiImage);
