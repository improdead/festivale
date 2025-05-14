import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Album route with Get method");
});

export default router;