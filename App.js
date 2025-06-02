import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CVForm from './components/CVForm';
import CVPreview from './components/CVPreview';
import './App.css';

function App() {
  const [cvData, setCvData] = useState(() => {
    const storedData = localStorage.getItem('cvData');
    return storedData
      ? JSON.parse(storedData)
      : {
          name: '',
          email: '',
          phone: '',
          address: '',
        };
  });

  useEffect(() => {
    localStorage.setItem('cvData', JSON.stringify(cvData));
  }, [cvData]);

  const handleReset = () => {
    const emptyData = {
      name: '',
      email: '',
      phone: '',
      address: '',
    };
    setCvData(emptyData);
    localStorage.removeItem('cvData');
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="form-section">
          <CVForm cvData={cvData} setCvData={setCvData} />
          <button onClick={handleReset}>Resetear</button>
        </div>
        <div className="preview-section">
          <CVPreview cvData={cvData} />
        </div>
      </div>
    </div>
  );
}

export default App;
