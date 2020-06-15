import React from 'react';

import { FiCheckCircle } from 'react-icons/fi';

import './styles.css';

interface Props {
  show: boolean;
  title: string;
}

const PointAddedModal: React.FC<Props> = ({ show, title }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div id="register-done" className={showHideClassName}>
      <div className="modal-content">
        <FiCheckCircle />
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default PointAddedModal;
