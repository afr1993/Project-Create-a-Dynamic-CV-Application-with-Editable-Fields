import React from 'react';

function CVPreview({ cvData }) {
  return (
    <div>
      <h2>Vista Previa del CV</h2>
      <p><strong>Nombre:</strong> {cvData.name}</p>
      <p><strong>Email:</strong> {cvData.email}</p>
      <p><strong>Teléfono:</strong> {cvData.phone}</p>
      <p><strong>Dirección:</strong> {cvData.address}</p>
    </div>
  );
}

export default CVPreview;
