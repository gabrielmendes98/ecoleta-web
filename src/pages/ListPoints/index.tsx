import React, { useState, useEffect, useCallback } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import PointCard from './PointCard';
import Snackbar from './Snackbar';
import api from '../../services/api';
import Header from '../../components/Header';

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
  const [showSnackbar, setShowSnackbar] = useState(false);

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
    api.delete(`points/${id}`).then(async (response) => {
      loadPoints();
      setShowSnackbar(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setShowSnackbar(false);
    });
  }

  return (
    <div id="page-list-points">
      <Header path="/" navTitle="Voltar para home" navIcon={FiArrowLeft} />

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
        {showSnackbar && <Snackbar />}
      </main>
    </div>
  );
};

export default withRouter(ListPoints);
