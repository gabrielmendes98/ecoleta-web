import React from 'react';

import { FiCheckCircle } from 'react-icons/fi';

import './styles.css';

interface Props {
  show: boolean;
}

const PointAddedModal: React.FC<Props> = ({ show }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div id="page-search-points" className={showHideClassName}>
      <div className="modal-content">
        <FiCheckCircle />
        <h1>Cadastro concluído!</h1>
      </div>
    </div>
  );
};

export default PointAddedModal;
