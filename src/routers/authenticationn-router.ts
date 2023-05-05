import { Router } from "express";
import { signUpController } from "../controllers/authentication-controller";
import { validateUser } from "../middlewares/authentication-middleware";

const authenticationRouter = Router();

authenticationRouter.post("/sign-up", validateUser, signUpController);

export default authenticationRouter;
