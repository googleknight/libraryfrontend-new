import React, { Component } from 'react';
import './ErrorModal.css';

const ErrorModal = props => (
  <div className="ErrorModal">
    <p className="ErrorModal-text">Oops ! No books found!</p>
    <p className="ErrorModal-text">Import them now?</p>
    <div className="ErrorModal-reload-button-container">
      <button className="ErrorModal-reload-button" onClick={props.callbackFromApp} />
    </div>
  </div>
);

export default ErrorModal;

