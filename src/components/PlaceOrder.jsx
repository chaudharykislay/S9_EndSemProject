import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PlaceOrder.css";

function PlaceOrder() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  const [step, setStep] = useState(1); // 1 = Address, 2 = Payment, 3 = Success
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    payment: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    upiId: "",
    bankAccount: "",
    ifsc: ""
  });

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  const totalAmount = cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  const validateStep1 = () => {
    if (!formData.name || !formData.address || !formData.phone.match(/^[0-9]{10}$/)) {
      alert("Please enter valid details");
      return false;
    }
    return true;
  };

  const validatePayment = () => {
    if (!formData.payment) return false;

    if (formData.payment === "Card") {
      return (
        formData.cardNumber.length === 16 &&
        formData.expiry &&
        formData.cvv.length === 3
      );
    }

    if (formData.payment === "UPI") {
      return formData.upiId.includes("@");
    }

    if (formData.payment === "Bank") {
      return formData.bankAccount && formData.ifsc;
    }

    return false;
  };

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    if (validateStep1()) setStep(2);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    if (!validatePayment()) {
      alert("Enter valid payment details");
      return;
    }

    setStep(3);
    localStorage.removeItem("cart");

    setTimeout(() => navigate("/"), 4000);
  };

  if (cartItems.length === 0 && step !== 3)
    return <h2 className="empty-order">Cart is empty</h2>;

  return (
    <div className="checkout-page">

      {/* STEP 1 - Address */}
      {step === 1 && (
        <div className="checkout-card">
          <h2>Shipping Details</h2>
          <h3>Total: ₹ {totalAmount}</h3>

          <form onSubmit={handleAddressSubmit} className="checkout-form">
            <input
              placeholder="Full Name"
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <textarea
              placeholder="Address"
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
            <input
              placeholder="Phone Number"
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            <button type="submit">Continue to Payment</button>
          </form>
        </div>
      )}

      {/* STEP 2 - Payment */}
      {step === 2 && (
        <div className="checkout-card">
          <h2>Select Payment Method</h2>

          <div className="payment-options">
            {["Card", "UPI", "Bank"].map(mode => (
              <label key={mode}>
                <input
                  type="radio"
                  value={mode}
                  checked={formData.payment === mode}
                  onChange={(e) =>
                    setFormData({ ...formData, payment: e.target.value })
                  }
                />
                {mode}
              </label>
            ))}
          </div>

          <form onSubmit={handlePaymentSubmit} className="checkout-form">

            {formData.payment === "Card" && (
              <>
                <input
                  placeholder="Card Number (16 digits)"
                  onChange={(e) =>
                    setFormData({ ...formData, cardNumber: e.target.value })
                  }
                />
                <input
                  placeholder="Expiry (MM/YY)"
                  onChange={(e) =>
                    setFormData({ ...formData, expiry: e.target.value })
                  }
                />
                <input
                  placeholder="CVV"
                  onChange={(e) =>
                    setFormData({ ...formData, cvv: e.target.value })
                  }
                />
              </>
            )}

            {formData.payment === "UPI" && (
              <input
                placeholder="Enter UPI ID"
                onChange={(e) =>
                  setFormData({ ...formData, upiId: e.target.value })
                }
              />
            )}

            {formData.payment === "Bank" && (
              <>
                <input
                  placeholder="Bank Account Number"
                  onChange={(e) =>
                    setFormData({ ...formData, bankAccount: e.target.value })
                  }
                />
                <input
                  placeholder="IFSC Code"
                  onChange={(e) =>
                    setFormData({ ...formData, ifsc: e.target.value })
                  }
                />
              </>
            )}

            <button type="submit">Confirm Payment</button>
          </form>
        </div>
      )}

      {/* STEP 3 - Success */}
      {step === 3 && (
        <div className="success-popup">
          <h1>🎉 Order Placed Successfully!</h1>
          <h3>Total Paid: ₹ {totalAmount}</h3>
          <p>Thank you for shopping with us.</p>
        </div>
      )}
    </div>
  );
}

export default PlaceOrder;