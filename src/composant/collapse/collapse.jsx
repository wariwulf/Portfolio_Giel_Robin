import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import '../collapse/collapse.scss';

const Collapse = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`collapse ${isExpanded ? 'expanded' : ''}`}>
      <h2 className="collapse-title" onClick={handleToggle}>
        <span>{title}</span>
        <span className={`collapse-icon ${isExpanded ? 'expanded' : ''}`}>
          <FaChevronDown />
        </span>
      </h2>
      <div
        className={`collapse-content ${isExpanded ? '' : 'collapsed'}`}
      >
        {isExpanded && <div>{content}</div>}
      </div>
    </div>
  );
};

export default Collapse;
