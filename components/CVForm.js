import React from 'react';

function CVForm({ cvData, setCvData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCvData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form>
      <h2>Información Personal</h2>
      <input name="name" placeholder="Nombre" value={cvData.name} onChange={handleChange} required />
      <input name="email" placeholder="Correo electrónico" value={cvData.email} onChange={handleChange} required />
      <input name="phone" placeholder="Teléfono" value={cvData.phone} onChange={handleChange} required />
      <input name="address" placeholder="Dirección" value={cvData.address} onChange={handleChange} />
    </form>
  );
}

export default CVForm;
