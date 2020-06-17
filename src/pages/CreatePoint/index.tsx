import React from 'react';
import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import PointForm from '../../components/PointForm';
import Header from '../../components/Header';

import './styles.css';

const CreatePoint = () => {
  return (
    <div id="page-create-point">
      <Header>
        <Link to="/">
          <FiArrowLeft />
          Voltar para home
        </Link>
      </Header>
      <main>
        <PointForm title="Cadastro do ponto de coleta" submitText="Cadastrar ponto de coleta" />
      </main>
    </div>
  );
};

export default CreatePoint;
