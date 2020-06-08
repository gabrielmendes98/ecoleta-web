import React, { useState, useEffect } from 'react';

import { FiTrash2, FiEdit } from 'react-icons/fi';

import './styles.css';
import api from '../../../services/api';
import MapModal from '../MapModal';

interface Props {
  id: number;
  image: string;
  name: string;
  uf: string;
  city: string;
  latitude: number;
  longitude: number;
  whatsapp: string;
  email: string;
}

interface Item {
  title: string;
}

const PointCard: React.FC<Props> = ({ id, image, name, uf, city, whatsapp, email, latitude, longitude }) => {
  const [items, setItems] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    api.get(`points/${id}`).then((response) => {
      const _items: Item[] = response.data.items;
      const serializedItems = _items.map((item) => item.title);
      setItems(serializedItems.join(', '));
    });
  }, [id]);

  function handleShowModal() {
    setShowModal(true);
  }

  function handleHideModal() {
    setShowModal(false);
  }

  return (
    <div id="point-card">
      <img src={image} alt="" />
      <div className="container">
        <h1>{name}</h1>
        <p>{items}</p>
        <span>
          {city}, {uf} <br />
          {whatsapp} <br />
          {email} <br />
        </span>
        <strong onClick={handleShowModal}>Visualizar no mapa</strong>
      </div>
      <div className="action-buttons">
        <div className="icon">
          <FiTrash2 />
        </div>
        <div className="icon">
          <FiEdit />
        </div>
      </div>
      {showModal && (
        <MapModal show={showModal} handleClose={handleHideModal} latitude={latitude} longitude={longitude} />
      )}
    </div>
  );
};

export default PointCard;
