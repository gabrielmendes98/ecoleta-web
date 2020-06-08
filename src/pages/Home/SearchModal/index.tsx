import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';

import './styles.css';
import api from '../../../services/api';
import { useClickOutsideListenerRef } from '../../../utils/useClickOutsideListenerRef';

interface Props {
  show: boolean;
  handleClose: () => void;
}

interface IBGEUFResponse {
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
}

const SearchModal: React.FC<Props> = ({ show, handleClose }) => {
  const [ufs, setUfs] = useState<string[]>([]);
  const [selectedUf, setSelectedUf] = useState('0');
  const [cities, setCities] = useState<string[]>([]);
  const [selectedCity, setSelectedCity] = useState('0');

  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  const history = useHistory();

  const ref = useClickOutsideListenerRef(handleClose);

  useEffect(() => {
    axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then((response) => {
      const ufInitials = response.data.map((uf) => uf.sigla);

      setUfs(ufInitials);
    });
  }, []);

  useEffect(() => {
    if (selectedUf === '0') return;

    axios
      .get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
      .then((response) => {
        const cities = response.data.map((city) => city.nome);

        setCities(cities);
      });
  }, [selectedUf]);

  function handleSelectedUf(event: ChangeEvent<HTMLSelectElement>) {
    const uf = event.target.value;

    setSelectedUf(uf);
  }

  function handleSelectedCity(event: ChangeEvent<HTMLSelectElement>) {
    const city = event.target.value;

    setSelectedCity(city);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const uf = selectedUf;
    const city = encodeURI(selectedCity);

    // const response = await api.get('/points', { params: { uf, city, items: '1,2,3,4,5,6' } });

    // console.log(response);

    history.push(`/points?uf=${uf}&city=${city}`);
  }

  return (
    <div id="page-search-points" className={showHideClassName}>
      <div className="modal-content" ref={ref}>
        <form onSubmit={handleSubmit}>
          <h1>Pontos de coleta</h1>

          <div className="field">
            <select name="uf" id="uf" value={selectedUf} onChange={handleSelectedUf}>
              <option value="0">Selecione uma UF</option>
              {ufs.map((uf) => (
                <option key={uf} value={uf}>
                  {uf}
                </option>
              ))}
            </select>
          </div>

          <div className="field">
            <select name="city" id="city" value={selectedCity} onChange={handleSelectedCity}>
              <option value="0">Selecione uma cidade</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <button type="submit">
            <strong>Buscar</strong>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchModal;
