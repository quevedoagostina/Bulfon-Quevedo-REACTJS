import React from 'react';
import './App.css';
import DrawClass from './DrawClass';
import Menu from './Menu';

function App() {
  const CLASS_UML = {
    name: 'Persona',
    attributes: ['+nombre:str', '+numeroCelular:str', '+patente:str'],
    methods: ['+comprarPaseEstacionamiento()'],
    borderColor: '#DC2DDE',
    headColor: '#DC2DDE',
    textColor: '#333333',
  };

  const configMenu = {
    menuItems: [
      { name: 'Home', isFolder: false },
      {
        name: 'Servicio',
        isFolder: true,
        subItems: [
          { name: 'Estacionamiento', isFolder: false },
          { name: 'Guardar Casco', isFolder: false },
        ],
      },
      {
        name: 'Vehículos',
        isFolder: true,
        subItems: [
          {
            name: 'Auto',
            isFolder: true,
            isOpen: false, // Estado inicial cerrado
            subItems: [
              { name: 'Ford', isFolder: false },
              { name: 'Toyota', isFolder: false },
              { name: 'Fiat', isFolder: false },
            ],
          },
          {
            name: 'Moto',
            isFolder: true,
            isOpen: false, // Estado inicial cerrado
            subItems: [
              { name: 'Yamaha', isFolder: false },
              { name: 'Honda', isFolder: false },
              { name: 'Kawasaki', isFolder: false },
            ],
          },
        ],
      },
      { name: 'Contacto', isFolder: false },
    ],
  };
  

  return (
    <div className="App">
      <h1>Estacionamiento Quevedo</h1>
      <DrawClass data={CLASS_UML} />
      <Menu data={configMenu} />
    </div>
  );
}

export default App;
