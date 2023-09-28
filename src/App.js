import React from 'react';
import './App.css';
import DrawClass from './DrawClass';
import Menu from './Menu';

function App() {
  const CLASS_UML = {
    name: 'Person',
    attributes: ['+name:str', '+phoneNumber:str', '+emailAddress:str'],
    methods: ['+purchaseParkingPass()'],
    borderColor: '#DC2DDE',
    headColor: '#DC2DDE',
    textColor: '#333333',
  };

  const configMenu = {

    menuItems: [
      { name: 'Home', isFolder: false },
      {
        name: 'Services',
        isFolder: true,
        subItems: [
          { name: 'Service 1', isFolder: false },
          { name: 'Service 2', isFolder: false },
        ],
      },
      {
        name: 'Products',
        isFolder: true,
        subItems: [
          { name: 'Product 1', isFolder: false },
          { name: 'Product 2', isFolder: false },
        ],
      },
      { name: 'Contact', isFolder: false },
    ],
  };

  return (
    <div className="App">
      <h1>My React App</h1>
      <DrawClass data={CLASS_UML} />
      <Menu data={configMenu} />
    </div>
  );
}

export default App;
