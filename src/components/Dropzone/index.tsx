import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';

import './styles.css';

interface Props {
  onFileUploaded: (file: File) => void;
  imageUrl?: string;
}

const Dropzone: React.FC<Props> = ({ onFileUploaded, imageUrl }) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState('');

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      const fileUrl = URL.createObjectURL(file);

      setSelectedFileUrl(fileUrl);
      onFileUploaded(file);
    },
    [onFileUploaded]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: 'image/*' });

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />

      {selectedFileUrl || imageUrl ? (
        <img src={selectedFileUrl || imageUrl} alt="Sua imagem" />
      ) : isDragActive ? (
        <p>
          <FiUpload />
          Solte a imagem aqui ...
        </p>
      ) : (
        <p>
          <FiUpload />
          Arraste imagens aqui, ou clique para selecionar o arquivo.
        </p>
      )}
    </div>
  );
};

export default Dropzone;
