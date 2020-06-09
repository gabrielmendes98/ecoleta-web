import React from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import logo from '../../assets/logo.svg';
import PointForm from '../../components/PointForm';

interface MatchParams {
  id: string;
}

const UpdatePoint: React.FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const id = match.params.id;

  return (
    <div id="page-edit-point">
      <header>
        <img src={logo} alt="Ecoleta" />

        <Link to="/">
          <FiArrowLeft />
          Voltar para home
        </Link>
      </header>
      <main>
        <PointForm title="Atualizar ponto de coleta" submitText="Atualizar ponto de coleta" id={Number(id)} />
      </main>
    </div>
  );
};

export default withRouter(UpdatePoint);
