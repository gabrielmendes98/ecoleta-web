import React from 'react';

import { FiArrowLeft } from 'react-icons/fi';

import PointForm from '../../components/PointForm';
import Header from '../../components/Header';

import './styles.css';

const CreatePoint = () => {
  return (
    <div id="page-create-point">
      <Header path="/" navTitle="Voltar para home" navIcon={FiArrowLeft} />
      <main>
        <PointForm title="Cadastro do ponto de coleta" submitText="Cadastrar ponto de coleta" />
      </main>
    </div>
  );
};

export default CreatePoint;
