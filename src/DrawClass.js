import React from "react";

// Componente DrawClass que representa una clase en un diagrama de clases
const DrawClass = ({ classData }) => {
  // Desestructura los datos de la clase pasados como prop
  const { name, attributes, methods, borderColor, headColor, textColor } = classData;

  // Crea una lista de elementos <tr> para los atributos de la clase
  const resultadoBody = classData.attributes.map((attribute, index) => (
    <tr key={index}><td>{attribute}</td></tr>
  ));

  // Crea una lista de elementos <tr> para los métodos de la clase
  const resultadoFoot = classData.methods.map((method, index) => (
    <tr key={index}><td>{method}</td></tr>
  ));
  // Calcula la altura del rectángulo de clase en función del número de atributos y métodos
  const classHeight = 60 + (attributes.length + methods.length) * 20;

  return (
    <svg width="300" height={classHeight}>
    {/* Contorno de la clase */}
    <rect width="300" height={classHeight} fill="none" stroke="#FF69B4" strokeWidth="2" />
  
    {/* Título de la clase (Header) */}
    <rect x="0" y="0" width="300" height="30" fill="#FF69B4" />
    <text x="10" y="20" fill={textColor} fontSize="14">{name}</text>
  
    {/* Atributos */}
    {attributes.map((attribute, index) => (
      <text key={index} x="10" y={40 + index * 20} fill={textColor} fontSize="12">{attribute}</text>
    ))}
  
    {/* Línea divisoria */}
    <line x1="0" y1={attributes.length * 20 + 30} x2="300" y2={attributes.length * 20 + 30} stroke="#FF69B4" strokeWidth="2" />
  
    {/* Métodos */}
    {methods.map((method, index) => (
      <text key={index} x="10" y={attributes.length * 20 + 50 + index * 20} fill={textColor} fontSize="12">{method}</text>
    ))}
  </svg>  
  );
};

export default DrawClass;
