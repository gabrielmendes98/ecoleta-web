import React from 'react';
import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import PointCard from './PointCard';
import './styles.css';

const ListPoints = () => {
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
          <strong>2 pontos</strong> encontrados
        </p>
        <PointCard />
      </main>
    </div>
  );
};

export default ListPoints;
