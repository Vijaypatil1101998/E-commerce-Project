import React, { useState } from "react";
function CheckoutPage() {
  const [shippingInfo, setShippingInfo] = useState({
    fullName: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
    email: "",
    phone: "",
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleShippingInfoChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  const handlePaymentInfoChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="checkout-container">
      <div className="shipping-info">
        <h2>Shipping Information</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={shippingInfo.fullName}
            onChange={handleShippingInfoChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={shippingInfo.address}
            onChange={handleShippingInfoChange}
            required
          />
          <div className="city-zip">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={shippingInfo.city}
              onChange={handleShippingInfoChange}
              required
            />
            <input
              type="text"
              name="zipCode"
              placeholder="Zip Code"
              value={shippingInfo.zipCode}
              onChange={handleShippingInfoChange}
              required
            />
          </div>
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={shippingInfo.country}
            onChange={handleShippingInfoChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={shippingInfo.email}
            onChange={handleShippingInfoChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={shippingInfo.phone}
            onChange={handleShippingInfoChange}
            required
          />
          <button type="submit">Proceed to Payment</button>
        </form>
      </div>

      <div className="payment-info">
        <h2>Payment Information</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={paymentInfo.cardNumber}
            onChange={handlePaymentInfoChange}
            required
          />
          <div className="expiry-cvv">
            <input
              type="text"
              name="expiryDate"
              placeholder="Expiry Date"
              value={paymentInfo.expiryDate}
              onChange={handlePaymentInfoChange}
              required
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              value={paymentInfo.cvv}
              onChange={handlePaymentInfoChange}
              required
            />
          </div>
          <button type="submit">Place Order</button>
        </form>
      </div>
    </div>
  );
}

export default CheckoutPage;
