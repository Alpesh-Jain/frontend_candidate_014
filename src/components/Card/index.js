import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Modal from '../Modal'
import './styles.scss';


const Card = (props) => (
  <div className="card">
    <div className="card-title">
    {props.data.title}
    </div>
    <div className="card-body">
    {props.data.text}
    </div>
    <div className="card-footer">
    <Modal 
    Modaltext={props.data.title}
    TimeoutTime="2000"
    />
    </div>
  </div>
);

export default Card;

Card.propTypes = {
  title:PropTypes.string,
  text:PropTypes.string
};
