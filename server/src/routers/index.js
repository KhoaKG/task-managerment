import { Router } from "express";
import authRouter from "./authRouter.js";
import projectRouter from "./projectRouter.js";

const router = Router();

router.get('/', (req, res) => {
  res.send('✅ Root route is working!');
});
router.use("/api", authRouter);
router.use("/api", projectRouter);

export default router;

