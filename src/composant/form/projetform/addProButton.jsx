import React, { useState } from 'react';
import Modal from '../../../composant/modal/modal';
import AddExperienceForm from './form-pro';
import './addProButton.scss';

const AddProButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsModalOpen(true)} className='button-pro'>Ajouter un Projet</button>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
           <AddExperienceForm/>
        </Modal>
      )}
    </>
  );
};

export default AddProButton;
