import React, { useState } from "react";
import "./paymentPages.css";
import shaki from "../../assets/shaki.jpg";
import { ImEarth } from "react-icons/im";
import { FaCalendarAlt } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { IoPencil } from "react-icons/io5";
import { GoVerified } from "react-icons/go";
import { CiCalendar, CiGift } from "react-icons/ci";
const OrderSummary = () => (
  <div className="order-summary-card">
    <div className="tour-info-summary">
      <img
        src={shaki}
        alt="Full day Tour to Sheki"
        className="summary-tour-image"
      />
      <div className="summary-details">
        <h3 className="summary-title">
          Full day Tour to Sheki: 4 regions of Azerbaijan in 1 day
        </h3>
        <div className="summary-rating">
          <span className="rating-stars">★★★★★</span> 4.5 (53)
        </div>
      </div>
    </div>

    <ul className="summary-meta-list">
      <li>
        <ImEarth /> Language: English
      </li>
      <li>
        <FaCalendarAlt/> Tuesday, September 9, 2025 at 8:00 AM
      </li>
      <li>
        <IoPeople/> 1 adult
      </li>
      <li className="link-item">
        <IoPencil/>
        <a href="#">Change date or participants</a>
      </li>
      <li className="free-cancellation-item">
        <GoVerified/> Free cancellation
        <p className="cancellation-note">Until 8:00 AM on September 8</p>
      </li>
      <li className="link-item">
        <CiGift/>{" "}
        <a href="#">Enter promo or gift code</a>
      </li>
    </ul>

    <div className="summary-price-footer">
      <span className="summary-price-label">Price</span>
      <span className="summary-price-value">$79.00</span>
    </div>
  </div>
);

const BookingSteps = ({ currentStep }) => {
  const steps = [
    { id: 1, title: "Activity" },
    { id: 2, title: "Contact" },
    { id: 3, title: "Payment" },
  ];

  return (
    <div className="booking-steps-container">
      <h1 className="main-booking-title">Complete Your Booking</h1>
      <div className="steps-progress-bar">
        {steps.map((step) => (
          <React.Fragment key={step.id}>
            <div
              className={`step-item ${currentStep >= step.id ? "active" : ""} ${
                currentStep === step.id ? "current" : ""
              }`}
            >
              <div className="step-circle">{step.id}</div>
              <span className="step-title">{step.title}</span>
            </div>
            {step.id < 3 && (
              <div
                className={`step-line ${currentStep > step.id ? "active" : ""}`}
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const BookingSummaryScreen = ({ setStep }) => (
  <div className="booking-summary-screen screen">
    <h1 className="main-booking-title">Booking</h1>
    <div className="booking-card-wrapper">
      <OrderSummary />
    </div>

    <button className="confirm-order-button" onClick={() => setStep(1)}>
      Confirm the order
    </button>
  </div>
);

const PickupSelectionScreen = ({ setStep }) => (
  <div className="pickup-selection-screen screen">
    <BookingSteps currentStep={1} />

    <div className="step-content-layout">
      <div className="step-left-panel">
        <h2 className="step-question">
          Do you know where you want to be picked up?
        </h2>
        <div className="radio-options">
          <label className="radio-label">
            <input type="radio" name="pickup" defaultChecked />
            Yes, I can add it now
          </label>
          <label className="radio-label">
            <input type="radio" name="pickup" />I don't know yet
          </label>
        </div>

        <button className="next-button" onClick={() => setStep(2)}>
          Next
        </button>
      </div>

      <div className="step-right-panel">
        <OrderSummary />
      </div>
    </div>
  </div>
);

const ContactDetailsScreen = ({ setStep }) => (
  <div className="contact-details-screen screen">
    <BookingSteps currentStep={2} />

    <div className="step-content-layout">
      <div className="step-left-panel">
        <h2 className="step-question">Enter your personal details</h2>

        <form className="contact-form">
          <input type="text" placeholder="Full name*" required />
          <input type="email" placeholder="Email*" required />

          <div className="country-dropdown">
            <select defaultValue="Azerbaijan (+994)">
              <option>Azerbaijan (+994)</option>
              <option>Turkey (+90)</option>
            </select>
          </div>

          <input type="tel" placeholder="Phone*" required />
        </form>

        <button className="next-button" onClick={() => setStep(3)}>
          Next
        </button>
      </div>

      <div className="step-right-panel">
        <OrderSummary />
      </div>
    </div>
  </div>
);

const PaymentScreen = ({ setStep }) => (
  <div className="payment-screen screen">
    <BookingSteps currentStep={3} />

    <div className="step-content-layout">
      <div className="step-left-panel">
        <h2 className="step-question">Select a payment method</h2>

        <div className="payment-methods">
          <div className="payment-option paypal-option">
            <label>
              <input type="radio" name="payment-method" />
              PayPal
            </label>
            <img
              src="data:image/png;base64,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"
              alt="PayPal"
              className="payOptionImage"
            />
          </div>

          <div className="payment-option googlepay-option">
            <label>
              <input type="radio" name="payment-method" />
              Google Pay
            </label>
            <img
              src="data:image/png;base64,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"
              alt="Google Pay"
              className="payOptionImage"
            />
          </div>

          <div className="payment-option card-option active">
            <label>
              <input type="radio" name="payment-method" defaultChecked />
              Debit or credit card
            </label>
            <div className="card-input-group">
              <input
                type="text"
                placeholder="1234 5678 1234 5678"
                className="card-number-input"
              />
              <div className="card-logos">
                <img
                  src="data:image/png;base64,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"
                  alt="Visa"
                  className="payOptionImage"
                />
                <img
                  src="data:image/png;base64,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"
                  alt="Mastercard"
                  className="payOptionImage"
                />
              </div>
              <div className="card-bottom-row">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="expiry-input"
                />
                <input type="text" placeholder="CVV" className="cvv-input" />
              </div>
              <input type="text" placeholder="Name and surname" />
            </div>
          </div>
        </div>

        <button className="next-button" onClick={() => setStep("complete")}>
          Next
        </button>
      </div>

      <div className="step-right-panel summary-with-security">
        <span className="ssl-secured">SSL Secured</span>
        <OrderSummary />
      </div>
    </div>
  </div>
);

const BookingCompleteScreen = () => (
  <div className="booking-complete-screen screen">
    <div className="completion-box">
      <span className="success-icon">🎉</span>
      <h1 className="completion-title">Booking Complete!</h1>
      <p className="completion-message">
        Your order for 'Full day Tour to Sheki' has been confirmed. A
        confirmation email with all details has been sent to your inbox.
      </p>
      <p className="completion-thanks">Thank you for choosing SmartTour!</p>
      <button className="continue-button">Continue Exploring</button>
    </div>
  </div>
);

const PaymentPages = () => {
  const [step, setStep] = useState(0);

  const renderStep = () => {
    switch (step) {
      case 0:
        return <BookingSummaryScreen setStep={setStep} />;
      case 1:
        return <PickupSelectionScreen setStep={setStep} />;
      case 2:
        return <ContactDetailsScreen setStep={setStep} />;
      case 3:
        return <PaymentScreen setStep={setStep} />;
      case "complete":
        return <BookingCompleteScreen />;
      default:
        return <BookingSummaryScreen setStep={setStep} />;
    }
  };

  return <div className="booking-process-wrapper">{renderStep()}</div>;
};

export default PaymentPages;
