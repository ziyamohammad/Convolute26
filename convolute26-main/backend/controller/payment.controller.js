import { asyncHandler } from "../utils/asyncHandler.js";
import axios from "axios";

const paymentcontroller = asyncHandler(async (req, res) => {
  try {
    const {  customer_email, customer_phone } = req.body;

      const order_id = "order_" + Date.now();
        const amount = 100; // ya DB se
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

    return res.status(200).json({
      success: true,
      data: response.data
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