import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import logo from '../../assets/logo.svg';

import { FiLogIn, FiSearch } from 'react-icons/fi';

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="Ecoleta" />
          <Link to="/create-point">
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastre um ponto de coleta</strong>
          </Link>
        </header>

        <main>
          <h1>Seu marketplace de coleta de resíduos.</h1>
          <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>

          <Link to="/search-point">
            <span>
              <FiSearch />
            </span>
            <strong>Pesquisar pontos de coleta</strong>
          </Link>
        </main>
      </div>
    </div>
  );
};

export default Home;
