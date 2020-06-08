import React from 'react';

import { FiTrash2, FiEdit } from 'react-icons/fi';

import './styles.css';

interface Props {
  image: string;
  name: string;
  items: string[];
  uf: string;
  city: string;
  latitude: number;
  longitude: number;
  whatsapp: string;
  email: string;
}

const PointCard: React.FC<Props> = ({ image, name, items, uf, city, whatsapp, email, latitude, longitude }) => {
  return (
    <div id="point-card">
      <img src={image} alt="" />
      <div className="container">
        <h1>{name}</h1>
        <p>{items.join(', ')}</p>
        <span>
          {city}, {uf} <br />
          {whatsapp} <br />
          {email} <br />
        </span>
        <strong>Visualizar no mapa</strong>
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
