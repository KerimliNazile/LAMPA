import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, onSave, data }) => {
  const [editedData, setEditedData] = useState({ ...data });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSave = () => {
    onSave(editedData);
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Edit Data</h2>
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" value={editedData.title} onChange={handleInputChange} />
        <label htmlFor="category">Category:</label>
        <input type="text" name="category" value={editedData.category} onChange={handleInputChange} />
        <label htmlFor="price">Price:</label>
        <input type="number" name="price" value={editedData.price} onChange={handleInputChange} />
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default Modal;
