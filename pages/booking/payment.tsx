import React from 'react';
import Link from 'next/link';
import BookingWrapper from '@/components/Booknig/BookungWrapper';
import LinkBack from '@/components/Payment/LinkBack';
import PaymentCard from '@/components/Payment/PaymentCard';
import PersonalForm from '@/components/Payment/PersonalForm';
import PayForm from '@/components/Payment/PayForm';

function payment() {
  return (
    <>
    <BookingWrapper>
      <LinkBack/>
      <PaymentCard/>
      <PersonalForm/>
      <PayForm/>
    </BookingWrapper>
    </>
  )
}

export default payment