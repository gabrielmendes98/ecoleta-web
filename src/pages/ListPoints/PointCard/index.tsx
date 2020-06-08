import React from 'react';

import { FiTrash2, FiEdit } from 'react-icons/fi';

import './styles.css';

const PointCard = () => {
  return (
    <div id="point-card">
      <img
        src="https://images.unsplash.com/photo-1525212746907-ff35fbdef9ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60"
        alt=""
      />
      <div className="container">
        <h1>Colectoria</h1>
        <p>Resíduos Eletrônicos, Lâmpadas</p>
        <span>
          Uberlândia, MG <br /> Av. Belarmino Cotta Pacheco, Santa Mônica <br /> N° 260{' '}
        </span>
      </div>
      <div className="action-buttons">
        <div className="icon">
          <FiTrash2 />
        </div>
        <div className="icon">
          <FiEdit />
        </div>
      </div>
    </div>
  );
};

export default PointCard;
