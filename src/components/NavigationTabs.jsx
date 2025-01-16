import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NavigationTabs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('Beli e-Materai');

  const tabs = [
    { name: 'Beli e-Materai', path: '/admin/beli-materai' },
    { name: 'Riwayat Pembelian', path: '/admin/riwayat-pembelian' },
    { name: 'Bubuhkan Dokumen', path: '/admin/bubuh-dokumen' },
    { name: 'Riwayat Pembubuhan', path: '/admin/riwayat-pembubuhan' },
  ];

  useEffect(() => {
    const currentTab = tabs.find(tab => tab.path === location.pathname);
    if (currentTab) {
      setActiveTab(currentTab.name);
    }
  }, [location.pathname]);

  const handleTabClick = (tab) => {
    setActiveTab(tab.name);
    navigate(tab.path);
  };

  return (
    <div>
      <div className="flex gap-5 mb-6 w-full h-[99px] p-[25px_601px_24px_20px] bg-[#E8EBEE] border-b-[0.8px] border-[#6C808C] rounded-[4px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => handleTabClick(tab)}
            className={`flex-1 min-w-[80px] px-2 py-2 text-center text-sm sm:text-base font-semibold ${
              activeTab === tab.name
                ? 'bg-[#845FF1] text-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[263px] h-[50px] rounded-[8px]'
                : 'bg-white text-gray-500 hover:text-purple-500 border-[1px] border-[#5B59E8] w-[263px] h-[50px] rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavigationTabs;