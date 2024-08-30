// server logic?
import { getCurrentWeather } from "./weather.js";
import express from "express";
import * as path from "path";
import bodyParser from "body-parser";
import fetch from "node-fetch";

export const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../build")));

app.post("/api/weather", async (req, res) => {
  const { lat, lon } = req.body;
  const { city, icon, description, currentTemp, minTemp, maxTemp } =
    await getCurrentWeather(lat, lon);
  return res.json({ city, icon, description, currentTemp, minTemp, maxTemp });
});
