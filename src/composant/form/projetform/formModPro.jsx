import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { updateExperience, getOneExperience } from '../../../api/api';

function ExperienceEditForm({ experienceId, onClose }) {
  const { register, handleSubmit, setValue } = useForm();
  const [experienceData, setExperienceData] = useState(null);

  const authToken = localStorage.getItem('token');

  useEffect(() => {
    const fetchExperienceData = async () => {
      try {
        const data = await getOneExperience(experienceId);
        setExperienceData(data);

        setValue('title', data.title);
        setValue('company', data.company);
        setValue('startDate', data.startDate);
        setValue('endDate', data.endDate);
        setValue('description', data.description);
        setValue('achievements', data.achievements.join('\n'));
        setValue('link', data.link);
      } catch (error) {
        console.error('Error fetching experience data:', error);
      }
    };

    fetchExperienceData();
  }, [experienceId, setValue]);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append('experience', JSON.stringify({
        title: data.title,
        company: data.company,
        startDate: data.startDate,
        endDate: data.endDate,
        description: data.description,
        achievements: data.achievements,
        link: data.link,
      }));
      if (data.image[0]) {
        formData.append('image', data.image[0]);
      }

      const response = await updateExperience(experienceId, formData, authToken);
      console.log(response);

      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="experience-form" encType="multipart/form-data">
      <div>
        <label htmlFor="title">Titre:</label>
        <input type="text" id="title" {...register('title')} />
      </div>
      <div>
        <label htmlFor='company'>Entreprise:</label>
        <input type="text" id='company' {...register('company')} />
      </div>
      <div>
        <label htmlFor='startDate'>Date de début:</label>
        <input type="date" id="startDate" {...register('startDate')} />
      </div>
      <div>
        <label htmlFor='endDate'>Date de fin:</label>
        <input type="date" id="endDate" {...register('endDate')} />
      </div>
      <div>
        <label htmlFor='link'>Lien du projet:</label>
        <input type='url' placeholder="Lien du Projet" {...register('link')} />
      </div>
      <div>
        <label htmlFor='description'>Description:</label>
        <textarea placeholder="Description" {...register('description')} />
      </div>
      <div>
        <label htmlFor='image'>Image:</label>
        {experienceData && <img src={experienceData.image} alt="Experience" />}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            setValue('image', e.target.files[0]);
            // Mettre à jour l'aperçu de l'image avec la nouvelle image sélectionnée
            const newImage = URL.createObjectURL(e.target.files[0]);
            const imgElement = document.querySelector('img');
            if (imgElement) {
                imgElement.src = newImage;
            }
            }}
          {...register('image')}
        />
      </div>
      <div>
        <label htmlFor='achievements'>Réalisations:</label>
        <textarea placeholder="Réalisations" {...register('achievements')} />
      </div>
      <div>
        <button type="submit">Modifier</button>
      </div>
    </form>
  );
}

export default ExperienceEditForm;
