import React from 'react';

import { RouteComponentProps } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import PointForm from '../../components/PointForm';
import Header from '../../components/Header';

import './styles.css';

interface MatchParams {
  id: string;
}

const UpdatePoint: React.FC<RouteComponentProps<MatchParams>> = ({ match, history }) => {
  const id = match.params.id;

  function handleGoBack() {
    history.goBack();
  }

  return (
    <div id="page-edit-point">
      <Header>
        <p onClick={handleGoBack}>
          <FiArrowLeft />
          Voltar para lista de pontos
        </p>
      </Header>
      <main>
        <PointForm title="Atualizar ponto de coleta" submitText="Atualizar ponto de coleta" id={Number(id)} />
      </main>
    </div>
  );
};

export default UpdatePoint;
