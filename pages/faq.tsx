import React from "react";
import Answers from "@/components/Answers";
import Map from "@/components/Map";

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
          { question: "THE WALK UP TO GLASS HUT", answer: "Cancellation later than two weeks = full payment`" },
          { question: "CAPACITY", answer: "Cancellation later than two weeks = full payment`" },
          { question: "PETS", answer: "Cancellation later than two weeks = full payment`" },
          { question: "CHECK-IN / CHECK-OUT", answer: "Cancellation later than two weeks = full payment`" },
        ]}
      />
    </>
  );
}

export default faq;
