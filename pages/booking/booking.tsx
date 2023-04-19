import React from "react";
import HeaderImage from "@/components/HeaderImage";

import header from "../../assets/images/booking.png";
import icon from "../../assets/icons/location.svg";
import BookingReminder from "@/components/Booknig/BookingReminder";
import BookingWrapper from "@/components/Booknig/BookungWrapper";
import BookingCard from "@/components/Booknig/BookingCard";
import Services from "@/components/AdditionalServices/Services";

function booking() {
  return (
    <>
      <HeaderImage
        header="Booking"
        image={header}
        text="Vesterborg, Denmark"
        icon={icon}
      />
      <BookingWrapper>
        <Services/>
        <BookingCard/>
        <BookingReminder
          header="Hut rules"
          list={[
            "Check-in:  2:00 PM - 11:00 PM",
            "Checkout: 11:00 AM",
            "Not suitable for children and infants",
            "No smoking",
            "No pets",
          ]}
        />
        <BookingReminder
          header="Cancellation policy"
          description="Free cancellation until 1:00 PM on Mar 27
      After that, cancel before 2:00 PM on Apr 1 and get a 50% refund, minus the first night and service fee."
        />
        <BookingReminder
          header="Important Information"
          description="You need to hike a steep hill to arrive at the treehouses, it takes approx 
      20-30 minutes on a trail with stairs and uneven ground."
        />
      </BookingWrapper>
    </>
  );
}

export default booking;
