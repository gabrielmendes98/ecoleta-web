import React, { useState, useEffect, useCallback } from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import PointCard from './PointCard';
import api from '../../services/api';
import './styles.css';

interface Point {
  id: number;
  city: string;
  email: string;
  image_url: string;
  latitude: number;
  longitude: number;
  name: string;
  uf: string;
  whatsapp: string;
}

const ListPoints: React.FC<RouteComponentProps> = ({ location }) => {
  const [points, setPoints] = useState<Point[]>([]);

  const loadPoints = useCallback(() => {
    const query = location.search;

    api.get(`points${query}`, { params: { items: '1,2,3,4,5,6' } }).then((response) => {
      setPoints(response.data);
    });
  }, [location.search]);

  useEffect(() => {
    loadPoints();
  }, [loadPoints]);

  function handleDelete(id: number) {
    api.delete(`points/${id}`).then((response) => {
      loadPoints();
    });
  }

  return (
    <div id="page-list-points">
      <header>
        <img src={logo} alt="Ecoleta" />

        <Link to="/">
          <FiArrowLeft />
          Voltar para home
        </Link>
      </header>{' '}
      <main>
        <p>
          <strong>{points.length} pontos</strong> encontrados
        </p>
        <div className="points">
          {points !== [] &&
            points.map((point) => (
              <PointCard
                key={String(point.id)}
                id={point.id}
                image={point.image_url}
                name={point.name}
                uf={point.uf}
                city={point.city}
                whatsapp={point.whatsapp}
                email={point.email}
                latitude={point.latitude}
                longitude={point.longitude}
                handleDelete={handleDelete}
              />
            ))}
        </div>
      </main>
    </div>
  );
};

export default withRouter(ListPoints);
