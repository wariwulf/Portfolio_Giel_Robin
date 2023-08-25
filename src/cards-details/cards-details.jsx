import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Collapse from '../composant/collapse/collapse';
import "../cards-details/cards-details.scss";
import Slideshow from '../composant/slideshow/slideshow';
import { deleteSkill, getOneSkill } from '../api/api';
import SkillEditForm from '../composant/form/skillEditForm';
import ModSkillButton from '../composant/form/form/modskillbuton';

const CardDetails = () => {
const { _id } = useParams();
const [skillData, setSkillData] = useState(null);
const [isEditing, setIsEditing] = useState(false);



useEffect(() => {
    const fetchSkillData = async () => {
    try {
        const data = await getOneSkill(_id);
        setSkillData(data);
    } catch (error) {
        console.error('Error fetching skill data:', error);
    }
    };

    fetchSkillData();
}, [_id]);

if (!skillData) {
    return <p>Loading...</p>; // Ou tout autre indicateur de chargement
}

const isUserLoggedIn = !!localStorage.getItem('token');

return (
<div className='cards-details'>
    <div className='caroussel'>        
        <Slideshow
            images={[skillData.image]}
            imageClassName="slideshow-image"
            prevArrowClassName="slideshow-arrow prev-arrow"
            nextArrowClassName="slideshow-arrow next-arrow"
        />
    </div>
    <div className='button-skill'>
        {isUserLoggedIn && <ModSkillButton skillData={skillData}/>}
        {skillData && isUserLoggedIn && (
            <button onClick={() => deleteSkill(skillData._id)} className='button-delSkill'>Supprimer</button>
        )}
    </div>
    <div className='header-cd'>
        <div className='loc'>
            <h2>{skillData.title}</h2>
        </div>
        
        <div className='tag'>
            {skillData.tags
                .filter(tag => tag.link) // Filtrez les tags qui ont une valeur pour le champ "link"
                .map((tag, index) => (
                <a href={tag.link} key={index} className='tag-link' target='_blank'>
                    {tag.name}
                </a>
            ))}
        </div>
    </div>
    <div className='coll'>
        <div className='coll-1'>
            <Collapse 
                title="Description"     
                content={skillData.description} 
                titleClassName="collapse-title"
                contentClassName="collapse-content"
            />
        </div>
        <div className='coll-2'>
            <Collapse 
                title="Réalisations" 
                content={
                    <ul>
                        {skillData.achievements.map(achievements => (
                        <li key={achievements}>{achievements}</li>
                        ))}
                    </ul>
                } 
                titleClassName="collapse-title"
                contentClassName="collapse-content"
            />
        </div>
    </div>
    {isEditing && (
        <div className="modal">
          <SkillEditForm skillData={skillData} onClose={() => setIsEditing(false)} />
        </div>
      )}
</div>
);
};

export default CardDetails;
