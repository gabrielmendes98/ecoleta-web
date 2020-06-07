import React from 'react';

import './styles.css';

interface Props {
  show: boolean;
  handleClose: () => void;
}

const SearchModal: React.FC<Props> = ({ show, handleClose }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div id="myModal" className={showHideClassName}>
      <div className="modal-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  );
};

export default SearchModal;
