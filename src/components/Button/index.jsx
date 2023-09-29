/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Button({
  style, text, detailButton, id, onClick,
}) {
  return (
    <button type="submit" onClick={onClick} className={`${style} px-4 py-1`}>
      {detailButton ? (
        <Link to={`/${id}`}>{text}</Link>
      ) : (
        // Jangan menggunakan {text} dalam objek, cukup tampilkan teks langsung
        <span>{text}</span>
      )}
    </button>
  );
}

Button.propTypes = {
  style: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  detailButton: PropTypes.bool,
};

Button.defaultProps = {
  detailButton: false,
};

export default Button;
