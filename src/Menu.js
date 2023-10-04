import React, { useState } from 'react';
import './css/Menu.css';

const MenuItem = ({ item }) => {
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <div className={`menu-item ${item.isFolder ? 'has-submenu' : ''} ${isSubMenuOpen ? 'open-submenu' : ''}`}>
      <div onClick={toggleSubMenu} className="menu-item-content">
        <span>{item.name}</span>
        {item.isFolder && (
          <svg aria-hidden="true" width="16" height="16" className="arrow-icon">
            <use xlinkHref="#arrow" />
          </svg>
        )}
      </div>
      {item.isFolder && (
        <div className={`sub-menu ${isSubMenuOpen ? 'open-submenu' : ''}`}>
          {item.subItems.map((subItem, index) => (
            <MenuItem key={index} item={subItem} />
          ))}
        </div>
      )}
    </div>
  );
};

const Menu = ({ data }) => {
  const { menuItems } = data;

  const handleMenuItemClick = (item) => {
    // Lógica para manejar la acción cuando se hace clic en un elemento del menú
    console.log(`Hiciste clic en: ${item.name}`);
  };

  return (
    <div className="menu-container">
      <div className="menu-items">
        {menuItems.map((menuItem, index) => (
          <MenuItem key={index} item={menuItem} onItemClick={handleMenuItemClick} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
