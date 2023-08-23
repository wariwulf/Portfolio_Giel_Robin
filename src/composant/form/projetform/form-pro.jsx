import React, { useState } from 'react';
import { createExperience } from '../../../api/api'; // Assurez-vous d'importer la fonction de création d'expérience


const AddExperienceForm = () => {
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null); // Utilisez null comme valeur initiale
  const [achievements, setAchievements] = useState('');
  const [link, setLink] = useState('');

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('company', company);
      formData.append('startDate', startDate);
      formData.append('endDate', endDate);
      formData.append('description', description);
      formData.append('image', image); // Ajoutez l'image au FormData
      formData.append('achievements', achievements);
      formData.append('link', link);

      await createExperience(formData); // Utilisez la fonction pour créer une expérience avec le FormData
      // Réinitialisez les champs du formulaire après la création réussie
      setTitle('');
      setCompany('');
      setStartDate('');
      setEndDate('');
      setDescription('');
      setImage(null);
      setAchievements('');
      setLink('');
      console.log('Expérience ajoutée avec succès !');
    } catch (error) {
      console.error('Erreur lors de l\'ajout de l\'expérience:', error);
    }
  };

  return (
    <div className="add-experience-form">
      <h2>Ajouter un Projet</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Titre" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Entreprise" value={company} onChange={(e) => setCompany(e.target.value)} required />
        <input type="date" placeholder="Date de début" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
        <input type="date" placeholder="Date de fin" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        <input type='url' placeholder="Lien du Projet" value={link} onChange={(e) => setLink(e.target.value)} />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <input type="file" accept="image/*" onChange={handleImageChange} required />
        <textarea placeholder="Réalisations" value={achievements} onChange={(e) => setAchievements(e.target.value)} required />
        <button type="submit">Ajouter le Projet</button>
      </form>
    </div>
  );
};

export default AddExperienceForm;