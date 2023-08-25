import React, { useState } from 'react';
import Modal from '../../modal/modal';
import SkillEditForm from '../skillEditForm';
import './modskillbuton.scss';

const ModSkillButton = ({ skillData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsModalOpen(true)} className='button-modSkill'>Modifier</button>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <SkillEditForm skillData={skillData} onClose={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </>
  );
};

export default ModSkillButton;
