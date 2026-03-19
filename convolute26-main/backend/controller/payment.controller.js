import { asyncHandler } from "../utils/asyncHandler.js";
import axios from "axios";
import nodemailer from "nodemailer";

const paymentcontroller = asyncHandler(async (req, res) => {
  try {
    const {  customer_email, customer_phone } = req.body;

      const order_id = "order_" + Date.now();
        const amount = 100; // 
        const customer_id = "cust_" + customer_phone;
      
    const response = await axios.post(
      `${process.env.CASHFREE_BASE_URL}/orders`,
      {
        order_id: order_id,
        order_amount: amount,
        order_currency: "INR",
        customer_details: {
          customer_id,
          customer_email,
          customer_phone
        }
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-version": "2022-09-01",
          "x-client-id": process.env.CASHFREE_APP_ID,
          "x-client-secret": process.env.CASHFREE_SECRET_KEY
        }
      }
    );

    return res.status(200).json({
      success: true,
      data: response.data
    });

  } catch (error) {
    console.error(error.response?.data || error.message);
    return res.status(500).json({
      success: false,
      message: "Error creating order"
    });
  }
});

const carddetail = asyncHandler(async (req, res) => {
  try {
    const { order_id } = req.params;

    if (!order_id) {
        return res.status(400).json({
            success: false,
            message: "order_id is required"
        });
    }

    const response = await axios.get(
      `${process.env.CASHFREE_BASE_URL}/orders/${order_id}`,
      {
        headers: {
          "x-api-version": "2022-09-01",
          "x-client-id": process.env.CASHFREE_APP_ID,
          "x-client-secret": process.env.CASHFREE_SECRET_KEY
        }
      }
    );
    const orderData = response.data;

     if (orderData.order_status === "PAID") {

      const email = orderData.customer_details.customer_email;

      const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

      await transporter.sendMail({
    from: `"Registration Team" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Welcome to Convolute '26",
    text: `Hello ${name}, your registration for Convolute '26 has been successfully confirmed`,
    html: `<div style="background:#000;padding:40px 10px;font-family:Arial,sans-serif">

  <div style="max-width:620px;margin:auto;background:#0a0a0a;border-radius:12px;overflow:hidden;border:1px solid #1f1f1f">

    <!-- Header / Logo -->
    <div style="text-align:center;padding:35px 20px;border-bottom:1px solid #1a1a1a">

      <h1 style="
      color:#d946ef;
      font-size:32px;
      letter-spacing:2px;
      margin:0;
      text-shadow:0 0 10px rgba(217,70,239,0.8)">
      CONVOLUTE '26
      </h1>

      <p style="color:#aaa;margin-top:8px;font-size:14px">
      Machine Learning Centre of Excellence
      </p>

    </div>

    <!-- Registration Success -->
    <div style="padding:30px;color:#ddd;text-align:center">

      <h2 style="color:#fff;margin-top:0">
      Registration Successful
      </h2>

      <p style="font-size:15px;line-height:1.6">
      Hello <b>${name}</b>, your registration for 
      <span style="color:#d946ef;font-weight:bold">Convolute '26</span> 
      has been successfully confirmed.
      </p>

    </div>

    <!-- Event Info -->
    <div style="padding:25px">

      <div style="
      background:#111;
      border:1px solid #222;
      border-radius:10px;
      padding:20px;
      text-align:center">

        <p style="margin:8px 0;font-size:15px;color:#ccc">
        <b style="color:#fff">Date:</b> 20 April 2026
        </p>

        <p style="margin:8px 0;font-size:15px;color:#ccc">
         <b style="color:#fff">Venue:</b> CSIT Seminar Hall
        </p>

      </div>

    </div>

    <!-- PDF Guide Section -->
    <div style="padding:25px;text-align:center">

      <p style="color:#bbb;font-size:14px;margin-bottom:50px">
      Please review the prerequisite guide before attending the event.
      </p>

      <a href="https://drive.google.com/uc?export=download&id=1hzdU5-aNb3olt8I9Nu5FXqh1Q8bFTevK"
      style="
      background:#d946ef;
      color:white;
      padding:12px 28px;
      border-radius:6px;
      text-decoration:none;
      font-weight:bold;
      box-shadow:0 0 15px rgba(217,70,239,0.8)">
      View Prerequisite Guide
      </a>

    </div>

    <!-- Footer -->
    <div style="
    text-align:center;
    padding:20px;
    border-top:1px solid #1a1a1a;
    color:#666;
    font-size:13px">

      <p style="margin:5px 0">Convolute '26</p>
      <p style="margin:5px 0">Machine Learning Centre of Excellence</p>
      <p style="margin:5px 0">Ajay Kumar Garg Engineering College</p>

    </div>

  </div>

</div>`,
     });
    }
  return res.status(200).json({
      success: true,
      data: orderData
    });

  } catch (error) {
    console.error(error.response?.data || error.message);
    return res.status(500).json({
      success: false,
      message: "Error fetching order details"
    });
  }
});

export {paymentcontroller,carddetail}