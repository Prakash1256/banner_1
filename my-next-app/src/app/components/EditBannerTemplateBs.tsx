"use client"; 

import React, { useState, useEffect } from 'react';


interface EditBannerProps {
  banner: {
    title: string;
    description: string;
    cta: string;
    image: string;
    background: string;
  };
  onSave: (updatedBanner: any) => void;
  onClose: () => void;
}

const EditBannerTemplateBs: React.FC<EditBannerProps> = ({ banner, onSave, onClose }) => {
  const [updatedBanner, setUpdatedBanner] = useState(banner);

  useEffect(() => {
    setUpdatedBanner(banner);
  }, [banner]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUpdatedBanner(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSave = () => {
    onSave(updatedBanner);
  };

  return (
    <div className="edit-banner-container">
      <input
        name="title"
        value={updatedBanner.title}
        onChange={handleChange}
        placeholder="Title"
        className="edit-banner-input"
      />
      <textarea
        name="description"
        value={updatedBanner.description}
        onChange={handleChange}
        placeholder="Description"
        className="edit-banner-textarea"
      />
      <input
        name="cta"
        value={updatedBanner.cta}
        onChange={handleChange}
        placeholder="CTA"
        className="edit-banner-input"
      />
      <input
        name="image"
        value={updatedBanner.image}
        onChange={handleChange}
        placeholder="Image URL"
        className="edit-banner-input"
      />
      <input
        name="background"
        value={updatedBanner.background}
        onChange={handleChange}
        placeholder="Background Color"
        className="edit-banner-input"
      />
      <div className="edit-banner-button-container">
        <button onClick={handleSave} className="edit-banner-button edit-banner-save-button">Save</button>
        <button onClick={onClose} className="edit-banner-button edit-banner-close-button">Close</button>
      </div>
    </div>
  );
};

export default EditBannerTemplateBs;
