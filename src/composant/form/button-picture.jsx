import React, { useState } from 'react';
import Modal from '../modal/modal';
import AddPicturesForm from './form/formpictures';

const PictureButton = ({ skillData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>Modifier</button>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <AddPicturesForm skillData={skillData} onClose={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </>
  );
};

export default PictureButton;
