import React, { useState } from 'react';
import './css/Menu.css';

// Componente MenuItem que representa un elemento de menú
const MenuItem = ({ item }) => {
  // Estado para controlar si el submenú está abierto o cerrado
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  // Función para alternar la apertura y cierre del submenú
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
          {/* Renderiza elementos MenuItem recursivamente para los subelementos */}
          {item.subItems.map((subItem, index) => (
            <MenuItem key={index} item={subItem} />
          ))}
        </div>
      )}
    </div>
  );
};

// Componente principal Menu que muestra la lista de elementos de menú
const Menu = ({ data }) => {
  const { menuItems } = data;

  // Función para manejar el clic en un elemento de menú
  const handleMenuItemClick = (item) => {
    // Lógica para manejar la acción cuando se hace clic en un elemento del menú
    console.log(`Hiciste clic en: ${item.name}`);
  };

  return (
    <div className="menu-container">
      <div className="menu-items">
        {/* Renderiza elementos MenuItem para los elementos principales del menú */}
        {menuItems.map((menuItem, index) => (
          <MenuItem key={index} item={menuItem} onItemClick={handleMenuItemClick} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
