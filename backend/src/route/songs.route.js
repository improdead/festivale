import router from "express";

const router = Router();

get("/", (req, res) => {
  res.send("Songs route with Get method");
});



export default router;