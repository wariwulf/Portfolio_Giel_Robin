import React, { useState } from 'react';
import Modal from '../../../composant/modal/modal';
import AddExperienceForm from './form-pro';

const AddProButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>Ajouter un Projet</button>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
           <AddExperienceForm/>
        </Modal>
      )}
    </>
  );
};

export default AddProButton;
