import React from "react";
import Answers from "@/components/Answers";

function faq() {
  return (
    <>
      <Answers
        content={[
          {
            question: "PRICES",
            answer: `Cancellation four weeks prior = 100% refund 
          Cancellation two weeks prior = 50% refund
          Cancellation later than two weeks = full payment`,
          },
          { question: "THE WALK UP TO GLASS HUT", answer: "" },
          { question: "CAPACITY", answer: "" },
          { question: "PETS", answer: "" },
          { question: "CHECK-IN / CHECK-OUT", answer: "" },
        ]}
      />
    </>
  );
}

export default faq;
