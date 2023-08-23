import React, { useState } from 'react';
import Modal from '../../../composant/modal/modal';
import ExperienceEditForm from './formModPro';

const ModProButton = ({ experienceId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>Modifier le Projet</button>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
           <ExperienceEditForm experienceId={experienceId}/>
        </Modal>
      )}
    </>
  );
};

export default ModProButton;
