import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MyDatePicker = ({ onChange, selected }) => {
  return <DatePicker selected={selected} onChange={onChange} />;
};

MyDatePicker.propTypes = {
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.instanceOf(Date)
};

export default MyDatePicker;
