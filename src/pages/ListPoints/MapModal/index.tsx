import React from 'react';

import './styles.css';
import { useClickOutsideListenerRef } from '../../../utils/useClickOutsideListenerRef';

import { Map, TileLayer, Marker } from 'react-leaflet';

interface Props {
  show: boolean;
  latitude: number;
  longitude: number;
  handleClose: () => void;
}

const MapModal: React.FC<Props> = ({ show, latitude, longitude, handleClose }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  const ref = useClickOutsideListenerRef(handleClose);

  return (
    <div id="map-modal" className={showHideClassName}>
      <div className="modal-content" ref={ref}>
        <Map center={[latitude, longitude]} zoom={15}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={[latitude, longitude]} />
        </Map>
      </div>
    </div>
  );
};

export default MapModal;
