import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Container } from './styles';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

const Reminder = ({ city, date, title }) => {
  return (
    <Container>
      <div className="title">
        <h3>{title}</h3>
      </div>
      <div className="info">
        <div className="left-box">
          <span className="date">{moment(date).calendar()}</span>
          <span className="city">{city}</span>
        </div>
        <div className="right-box">
          <div className="button">
            <FiEdit onClick={null} />
          </div>
          <div className="button">
            <FiTrash2 onClick={null} />
          </div>
        </div>
      </div>
    </Container>
  );
};

Reminder.propTypes = {
  city: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  title: PropTypes.string
};

export default Reminder;
