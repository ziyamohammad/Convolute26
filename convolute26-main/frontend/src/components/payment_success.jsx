import { useEffect,useState } from "react";
import axios from "axios";

function PaymentSuccess() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true);
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
      } finally{
        setLoading(false)
      }
    };

    verify();
  }, []);

  return (
    <>
      <style>{`
        .payment-status-wrap {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          gap: 14px;
          font-size: clamp(28px, 4vw, 42px);
          padding: 24px;
          box-sizing: border-box;
        }

        .bouncing-dots {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .bouncing-dots span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #111827;
          animation: bounce 0.9s infinite ease-in-out;
        }

        .bouncing-dots span:nth-child(2) {
          animation-delay: 0.15s;
        }

        .bouncing-dots span:nth-child(3) {
          animation-delay: 0.3s;
        }

        .success-circle {
          width: clamp(72px, 10vw, 96px);
          height: clamp(72px, 10vw, 96px);
          border-radius: 50%;
          background: #16a34a;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 10px 25px rgba(22, 163, 74, 0.35);
        }

        .success-tick {
          color: #ffffff;
          font-size: clamp(32px, 5vw, 44px);
          line-height: 1;
        }

        .payment-status-wrap h1 {
          margin: 0;
          line-height: 1.2;
          max-width: 90vw;
        }

        @media (max-width: 768px) {
          .payment-status-wrap {
            gap: 10px;
            padding: 20px;
          }

          .bouncing-dots {
            gap: 5px;
          }

          .bouncing-dots span {
            width: 7px;
            height: 7px;
          }
        }

        @media (max-width: 480px) {
          .payment-status-wrap {
            font-size: 30px;
            padding: 16px;
          }

          .payment-status-wrap h1 {
            max-width: 95vw;
          }
        }

        @keyframes bounce {
          0%,
          80%,
          100% {
            transform: translateY(0);
            opacity: 0.65;
          }
          40% {
            transform: translateY(-8px);
            opacity: 1;
          }
        }
      `}</style>

      {loading ? (
        <div className="payment-status-wrap">
          <h1>Verifying your payment</h1>
          <div className="bouncing-dots" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      ) : (
        <div className="payment-status-wrap">
          <div className="success-circle">
            <span className="success-tick">✓</span>
          </div>
          <h1>Registration Successful.</h1>
        </div>
      )}
    </>
)
}

export default PaymentSuccess;