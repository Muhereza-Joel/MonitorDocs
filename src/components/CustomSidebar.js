import React, { useState } from 'react';
import { SidebarItem } from '@docusaurus/theme-common'; // Ensure you're using the correct import path

const CustomSidebar = ({ items }) => {
  const [openCategoryIndex, setOpenCategoryIndex] = useState(null);

  const handleToggleCategory = (index) => {
    setOpenCategoryIndex(openCategoryIndex === index ? null : index);
  };

  return (
    <div className="custom-sidebar">
      {items.map((item, index) => (
        <div key={index}>
          {item.type === 'category' ? (
            <div>
              <div onClick={() => handleToggleCategory(index)} style={{ cursor: 'pointer' }}>
                {item.label}
              </div>
              {openCategoryIndex === index && (
                <div>
                  {item.items.map((subItem, subIndex) => (
                    <SidebarItem key={subIndex} item={subItem} />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <SidebarItem item={item} />
          )}
        </div>
      ))}
    </div>
  );
};

export default CustomSidebar;
