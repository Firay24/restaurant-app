/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

function Button({ style, text }) {
  return (
    <button className={`${style} px-4 py-1`}>
      {text}
    </button>
  );
}

Button.propTypes = {
  style: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
