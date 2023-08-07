import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createSkill } from '../../../../api/api';

function SkillForm({ onClose }) {
  const [imgSrc, setImgSrc] = useState(null);
  const { register, handleSubmit, setValue } = useForm(); // Ajoutez setValue ici

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('level', data.level);
      formData.append('achievements', data.achievements);
      formData.append('file', data.file[0]); // Utilisez data.file[0] pour récupérer le fichier

      const response = await createSkill(formData);
      console.log(response);

      onClose(); // Fermer le formulaire après avoir ajouté la compétence
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="skillform">
      <div>
        <label htmlFor="title">
          <p>Titre:</p>
          <input type="text" id="title" {...register('title')} />
        </label>
      </div>
      <div>
        <label htmlFor="level">
          <p>Niveau:</p>
          <input type="text" id="level" {...register('level')} />
        </label>
      </div>
      <div>
        <label htmlFor="achievements">
          <p>Réalisations (séparées par des virgules):</p>
          <input type="text" id="achievements" {...register('achievements')} />
        </label>
      </div>
      <div>
        <label htmlFor="file"> {/* Utilisez htmlFor="file" ici */}
          <p>Image:</p>
          <input {...register('file')} type="file" id="file" /> {/* Utilisez {...register('file')} */}
        </label>
      </div>
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default SkillForm;
