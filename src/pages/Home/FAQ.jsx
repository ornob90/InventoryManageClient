import React from "react";
import Container from "../../components/shared/Container";

const FAQ = () => {
  const faqData = [
    {
      id: 1,
      question: "How do I add a new product to my inventory?",
      answer:
        "To add a new product, navigate to the 'Product Management' section in your dashboard. Click on the 'Add Product' button, fill in the required details such as product name, quantity, and description, and click 'Add Product.' Your new product will be added to the inventory.",
    },
    {
      id: 2,
      question: "Can I track sales history for a specific time period?",
      answer:
        "Yes, you can view the sales history in the 'Sales Summary' section. Use the filters to select a specific time period, and the system will display the sales data for that duration. This feature helps you analyze your sales performance over time.",
    },
    {
      id: 3,
      question: "Is there a limit to the number of products I can add?",
      answer:
        "Yes, each shop has a product limit. The default product limit is set to 100. If you need to increase this limit, you can explore our subscription plans in the 'Subscription & Payment' section. Choose a plan that suits your needs to expand your product capacity.",
    },
  ];

  return (
    <Container className="my-16">
      <p className="mt-4 mb-8 text-xl font-bold text-center font-clashBold md:text-2xl lg:text-3xl">
        Frequently Asked Questions
      </p>
      {faqData.map(({ id, question, answer }) => (
        <div
          data-aos={id % 2 === 0 ? "fade-left" : "fade-right"}
          key={id}
          className="mb-7 collapse collapse-plus bg-base-200"
        >
          <input type="radio" name="my-accordion-3" checked="checked" />
          <div className="text-xl font-medium collapse-title">{question}</div>
          <div className="collapse-content">
            <p>{answer}</p>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default FAQ;
