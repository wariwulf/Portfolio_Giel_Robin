import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createSkill } from '../../../../api/api';
import "./formskills.scss";

function SkillForm({ onClose }) {
  const [imgSrc, setImgSrc] = useState(null);
  const { register, handleSubmit } = useForm(); 

  const onSubmit = async (data) => {
    console.log('Title:', data.title);
    console.log('Level:', data.level);
    console.log('Achievements:', data.achievements);
    console.log('Image File:', data.image[0]);
    try {
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('level', data.level);
        formData.append('achievements', data.achievements);
        formData.append('image', data.image[0]);
        formData.append('description', data.description);
        formData.append('tags', JSON.stringify(data.tags));
    
        console.log('FormData:', formData);
  
      const response = await createSkill(formData);
      console.log(response);
  
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="skillform" encType="multipart/form-data">
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
        <label htmlFor="image">
          <p>Image:</p>
          <input {...register('image')} type="file" id="image" accept="image/jpg, image/jpeg, image/png, image/gif, image/webp"/>
        </label>
      </div>
      <div>
        <label htmlFor="description">
          <p>Description:</p>
          <textarea id="description" {...register('description')} />
        </label>
      </div>
      <div>
        <p>Tags:</p>
        <div>
          {Array.from({ length: 3 }).map((_, index) => ( // Vous pouvez ajuster le nombre de tags ici
            <div key={index}>
              <label>
                Nom du Tag:
                <input
                  type="text"
                  {...register(`tags[${index}].name`)}
                />
              </label>
              <label>
                Lien du Tag:
                <input
                  type="text"
                  {...register(`tags[${index}].link`)}
                />
              </label>
            </div>
          ))}
        </div>
      </div>
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default SkillForm;
