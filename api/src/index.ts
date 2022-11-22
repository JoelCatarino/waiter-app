import express from "express";
import path from "node:path";
import mongoose from "mongoose";
import { router } from "./router";

mongoose
  .connect(
    "mongodb+srv://catarinorz:J%40el683515@cluster0.pvhlsty.mongodb.net/test"
  )
  .then(() => {
    const app = express();
    const port = 3001;
    app.use(
      "/uploads",
      express.static(path.resolve(__dirname, "..", "uploads"))
    );
    app.use(express.json());
    app.use(router);
    app.listen(port, () => {
      console.log(`server is running on http://localhost:${port}`);
    });
  })
  .catch(() => console.log("Erro ao se conectar no mongodb"));
