"use client"; 

import React, { useState, useEffect } from 'react';
import BannerImageComp from './components/BannerImageComp';
import EditBannerTemplateBs from './components/EditBannerTemplateBs';

interface Banner {
  id: string;
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
}

const Home: React.FC = () => {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [editingBanner, setEditingBanner] = useState<Banner | null>(null);

  useEffect(() => {
  
    const fetchBanners = async () => {
      const response = await fetch('/banners.json');
      const data: Banner[] = await response.json();
      setBanners(data);
    };

    fetchBanners();
  }, []);

  const handleEditClick = (banner: Banner) => {
    setEditingBanner(banner);
  };

  const handleSave = (updatedBanner: Banner) => {
    setBanners(prevBanners =>
      prevBanners.map(banner => banner.id === updatedBanner.id ? updatedBanner : banner)
    );
    setEditingBanner(null);
  };

  const handleClose = () => {
    setEditingBanner(null);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Ad Banners</h1>
      {banners.map(banner => (
        <BannerImageComp
          key={banner.id}
          title={banner.title}
          description={banner.description}
          cta={banner.cta}
          image={banner.image}
          background={banner.background}
          onEdit={() => handleEditClick(banner)}
        />
      ))}
      {editingBanner && (
        <EditBannerTemplateBs
          banner={editingBanner}
          onSave={handleSave}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default Home;
