import { useEffect } from "react";
import axios from "axios";

function PaymentSuccess() {

  useEffect(() => {
    const verify = async () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const order_id = params.get("order_id");

        if (!order_id) return;

        
        await axios.post("/api/v1/student/finalize", {
          order_id,
        },{withCredentials:true});

      } catch (err) {
        console.error(err);
      }
    };

    verify();
  }, []);

  return <h1>Processing your payment...</h1>;
}

export default PaymentSuccess;