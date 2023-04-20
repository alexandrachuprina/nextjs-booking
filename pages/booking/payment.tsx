import React from 'react';
import Link from 'next/link';
import BookingWrapper from '@/components/Booknig/BookungWrapper';
import LinkBack from '@/components/Payment/LinkBack';
import PaymentCard from '@/components/Payment/PaymentCard';
import PersonalForm from '@/components/Payment/PersonalForm';
import PayForm from '@/components/Payment/PayForm';
import AdditionalInfo from '@/components/Payment/AdditionalInfo';
import TermsAndConditions from '@/components/Payment/TermsAndConditions';
import ConfirmButton from '@/components/Payment/ConfirmButton';

function payment() {
  return (
    <>
    <BookingWrapper>
      <LinkBack/>
      <PaymentCard/>
      <PersonalForm/>
      <PayForm/>
      <AdditionalInfo/>
      <TermsAndConditions/>
      <ConfirmButton/>
    </BookingWrapper>
    </>
  )
}

export default payment