import React from 'react';
import './css/DrawClass.css'; // Importa el archivo CSS

const DrawClass = ({ data }) => {
  const { name, attributes, methods } = data;

  return (
    <div className="class-diagram">
      <div className="class-header">
        <span className="class-name">{name}</span>
      </div>
      <div className="class-body">
        <ul className="attributes">
          {attributes.map((attribute, index) => (
            <li key={index}>{attribute}</li>
          ))}
        </ul>
        <ul className="methods">
          {methods.map((method, index) => (
            <li key={index}>{method}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DrawClass;
