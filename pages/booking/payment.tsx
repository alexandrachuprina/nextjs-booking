import React from "react";

import LinkBack from "@/components/Payment/LinkBack";
import PaymentCard from "@/components/Payment/PaymentCard";
import PersonalForm from "@/components/Payment/PersonalForm";
import PayForm from "@/components/Payment/PayForm";
import AdditionalInfo from "@/components/Payment/AdditionalInfo";
import TermsAndConditions from "@/components/Payment/TermsAndConditions";
import ConfirmButton from "@/components/Payment/ConfirmButton";
import PaymentWrapper from "@/components/Payment/PaymentWrapper";

function payment() {
  return (
    <>
      <PaymentWrapper>
        <div>
          <LinkBack />
          <PersonalForm />
        </div>
        <PaymentCard />
        <div>
          <PayForm />
          <AdditionalInfo />
          <TermsAndConditions />
          <ConfirmButton />
        </div>
      </PaymentWrapper>
    </>
  );
}

export default payment;
