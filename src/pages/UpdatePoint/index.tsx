import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import PointForm from '../../components/PointForm';
import Header from '../../components/Header';

import './styles.css';

interface MatchParams {
  id: string;
}

const UpdatePoint: React.FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const id = match.params.id;

  return (
    <div id="page-edit-point">
      <Header path="/" navTitle="Voltar para home" navIcon={FiArrowLeft} />
      <main>
        <PointForm title="Atualizar ponto de coleta" submitText="Atualizar ponto de coleta" id={Number(id)} />
      </main>
    </div>
  );
};

export default UpdatePoint;
