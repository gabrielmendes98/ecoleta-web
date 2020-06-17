import React, { useState } from 'react';

import { FiLogIn, FiSearch } from 'react-icons/fi';

import SearchModal from './SearchModal';
import Header from '../../components/Header';

import './styles.css';

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  function handleShowModal() {
    setShowModal(true);
  }

  function handleHideModal() {
    setShowModal(false);
  }

  return (
    <div id="page-home">
      <div className="content">
        <Header path="/create-point" navTitle="Cadastre um ponto de coleta" navIcon={FiLogIn} />

        <main>
          <h1>Seu marketplace de coleta de resíduos.</h1>
          <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>

          <button onClick={handleShowModal}>
            <span>
              <FiSearch />
            </span>
            <strong>Pesquisar pontos de coleta</strong>
          </button>
        </main>

        {showModal && <SearchModal show={showModal} handleClose={handleHideModal} />}
      </div>
    </div>
  );
};

export default Home;
