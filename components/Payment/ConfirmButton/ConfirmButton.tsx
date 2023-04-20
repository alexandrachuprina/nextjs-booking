import React from 'react';

import button from '../../../styles/buttons/BookingButton.module.scss';

function ConfirmButton() {
  return (
    <button className={button.confirm}>
      <p>Confirm and pay</p>
    </button>
  )
}

export default ConfirmButton