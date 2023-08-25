import React, { useState } from 'react';
import Modal from '../../../composant/modal/modal';
import ExperienceEditForm from './formModPro';
import './modProButton.scss';

const ModProButton = ({ experienceId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsModalOpen(true)} className='button-modPro'>Modifier le Projet</button>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
           <ExperienceEditForm experienceId={experienceId} onClose={() => setIsModalOpen(false)}/>
        </Modal>
      )}
    </>
  );
};

export default ModProButton;
