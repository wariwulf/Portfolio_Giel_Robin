import React, { useState } from 'react';
import Modal from '../../modal/modal';
import SkillEditForm from '../skillEditForm';

const ModSkillButton = ({ skillData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>Modifier</button>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <SkillEditForm skillData={skillData} onClose={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </>
  );
};

export default ModSkillButton;
