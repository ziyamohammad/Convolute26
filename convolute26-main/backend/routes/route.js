import { Router } from "express";
import { slow } from "../middleware/express-slowDown.js";

// import { limiter } from "./middleware/rateLimiter.js";
import { resisterStudent, resendOTP,  verifyStudentRegistration, verifyCaptcha } from "../controller/resistration.js";
import { paymentcontroller,carddetail, mail } from "../controller/payment.controller.js";


const router=Router();

router.route("/register").post(slow,resisterStudent);

router.route("/verify").post( slow,verifyStudentRegistration);

router.route("/sendmail").post(mail);

router.route("/resendotp").get(resendOTP);
router.route("/verifyCaptcha").post(verifyCaptcha);
router.route("/create").post(paymentcontroller);
router.get("/order/:order_id", carddetail);

export default router