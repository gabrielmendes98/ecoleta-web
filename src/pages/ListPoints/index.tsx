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
        <PointCard
          image="https://images.unsplash.com/photo-1525212746907-ff35fbdef9ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=350&q=60"
          name="Colectoria"
          items={['Resíduos Eletrônicos', 'Lâmpadas']}
          uf="MG"
          city="Uberlândia"
          whatsapp={34996863662}
          email="gabriel@gmail.com"
          latitude={-18.8920255}
          longitude={-48.2095057}
        />
      </main>
    </div>
  );
};

export default ListPoints;
