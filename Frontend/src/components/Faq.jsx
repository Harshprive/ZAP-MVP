import React, { useState } from 'react';
import './faq.css';

const FAQSection = () => {
  return (
    <div className="faq-card">
      <div className="faq-card-header">
        <h2 className="faq-card-title">Frequently Asked Questions</h2>
      </div>
      <div className="faq-card-content">
        <FaqItem question="What is Zap?" answer="Porter is a tech-enabled logistics company offering a variety of intracity and intercity delivery services. Just download and register yourself on the app, choose the service that best fits your logistic needs and make your booking! With Porter, you will get a verified driver and vehicle right at your doorstep." />
        <FaqItem question="How can I book a repair service?" answer="To book a repair service, contact our customer support team. They'll help you schedule an appointment and provide details on the repair process." />
        <FaqItem question="What types of items do you repair?" answer="We can repair a wide range of items, including electronics, appliances, furniture, and more. Contact us with details about your item and we'll let you know if we can assist." />
        <FaqItem question="How do I know if my item can be repaired?" answer="The best way to find out is to contact our team with information about your item. They can assess the damage and let you know if repair is possible." />
        <FaqItem question="Do you offer on-site repair services?" answer="Yes, we provide on-site repair services for eligible items. Our technicians can come to your location to assess and repair your item." />
        <FaqItem question="What if I need to reschedule or cancel my appointment?" answer="No problem, just let our customer support team know as soon as possible, and they'll help you reschedule or cancel your appointment." />
        <FaqItem question="Can I get same-day repair service?" answer="In some cases, we may be able to provide same-day repair service. Contact us to inquire about availability for your specific item and location." />
        <FaqItem question="How much does a repair cost?" answer="Repair costs can vary depending on the item, the extent of the damage, and the parts required. Our team will provide a quote after assessing your item." />
        <FaqItem question="Do you provide a warranty on repairs?" answer="Yes, we offer a warranty on all our repair services. The length of the warranty may vary, so please check with our team for the details." />
      </div>
    </div>
  );
};

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={toggleOpen}>
      <h3 className="faq-question">{question}</h3>
      {isOpen && <p className="faq-answer">{answer}</p>}
    </div>
  );
};

export default FAQSection;
