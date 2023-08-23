import React from 'react';
import { useForm } from 'react-hook-form';
import { updateSkill } from '../../../api/api'; // Importez correctement votre fonction

function AddPicturesForm({ skillId, onSuccess }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    for (let i = 0; i < data.images.length; i++) {
      formData.append('pictures', data.images[i]); // Utilisez le nom de champ approprié ('pictures')
    }

    try {
      await updateSkill(skillId, formData); // Appelez la fonction updateSkill
      onSuccess(); // Appeler onSuccess pour mettre à jour l'affichage des images
    } catch (error) {
      console.error('Error uploading pictures:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="file" {...register('pictures', { multiple: true })} />
      <button type="submit">Télécharger les Images</button>
    </form>
  );
}

export default AddPicturesForm;