import React, { useState } from 'react';
import Modal from '../../../modal/modal';
import SkillForm from './formskills';

const AddSkillButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>Ajouter un skill</button>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <SkillForm onClose={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </>
  );
};

export default AddSkillButton;
