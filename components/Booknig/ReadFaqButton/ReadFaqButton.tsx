import React from 'react';
import Link from 'next/link';

import button from '../../../styles/buttons/BookingButton.module.scss';

function ReadFaqButton() {
  return (
    <Link href={'/faq'}>
    <button className={button.read_button}>
      <p>Read faq</p>
    </button>
    </Link>
  )
}

export default ReadFaqButton