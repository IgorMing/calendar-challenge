import React from 'react';
import PropTypes from 'prop-types';
import Button from './styles';

const MyButton = ({ onClick, title, type }) => {
  return (
    <Button type={type} onClick={onClick}>
      {title}
    </Button>
  );
};

MyButton.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
  type: PropTypes.string
};

MyButton.defaultProps = {
  onClick: () => {},
  type: 'button'
};

export default MyButton;
