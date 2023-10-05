import React from 'react';
import './App.css';
import DrawClass from './DrawClass';
import Menu from './Menu';

function App() {
  // Datos de la clase que se pasan como prop (herencia) a DrawClass
  const classData = {
    name: 'Person', // Nombre de la clase
    attributes: ['+nombre:str', '+numero-celular:str', '+patente:str', '+email:str'], // Atributos de la clase
    methods: ['+ticket-estacionamiento()'], // Métodos de la clase
    borderColor: 'solid pink', // Color del borde del rectángulo
    headColor: 'solid pink', // Color del encabezado (header)
    textColor: '#333333' // Color del texto
  }

  // Configuración del menú que se pasa como prop (herencia) a Menu
  const configMenu = {
    menuItems: [
      { name: 'Home', isFolder: false }, // Elemento de menú "Home"
      {
        name: 'Servicio',
        isFolder: true,
        subItems: [
          { name: 'Estacionamiento', isFolder: false }, // Subelemento de menú "Estacionamiento"
          { name: 'Guardar Casco', isFolder: false }, // Subelemento de menú "Guardar Casco"
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
              { name: 'Ford', isFolder: false }, // Subelemento de menú "Ford"
              { name: 'Toyota', isFolder: false }, // Subelemento de menú "Toyota"
              { name: 'Fiat', isFolder: false }, // Subelemento de menú "Fiat"
            ],
          },
          {
            name: 'Moto',
            isFolder: true,
            isOpen: false, // Estado inicial cerrado
            subItems: [
              { name: 'Yamaha', isFolder: false }, // Subelemento de menú "Yamaha"
              { name: 'Honda', isFolder: false }, // Subelemento de menú "Honda"
              { name: 'Kawasaki', isFolder: false }, // Subelemento de menú "Kawasaki"
            ],
          },
        ],
      },
      { name: 'Contacto', isFolder: false }, // Elemento de menú "Contacto"
    ],
  };
  

  return (
    <div className="App">
      {/* Renderiza el componente Menu con la configuración de menú */}
      <Menu data={configMenu} />

      {/* Título de la aplicación */}
      <h1>Estacionamiento Las Muchachas</h1>

      {/* Renderiza el componente DrawClass con los datos de la clase */}
      <DrawClass classData={classData} />
    </div>
  );
}

export default App;
