import { createNewUser, getUser, signin } from "./handlers/user";
import express from "express";
import morgan from "morgan";
import { protect } from "./modules/auth";
import router from "./router";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", protect, router);

app.post("/user", createNewUser);
app.post("/signin", signin);

app.use((err: any, req: any, res: any, next: any) => {
  if (err.type === "auth") {
    res.status(401).json({ message: "unauthorized" });
  } else if (err.type === "input") {
    res.status(400).json({ message: "invalid input" });
  } else {
    res.status(500).json({ message: "nas erorr server" });
  }
});

export default app;
