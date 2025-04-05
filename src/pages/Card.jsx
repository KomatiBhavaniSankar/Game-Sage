import React from 'react';
import './Card.css';

const Card = ({ title, description, imageUrl, fileUrl, fileName }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName || "downloaded-file";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="card">
      {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        {fileUrl && (
          <button className="card-button" onClick={handleDownload}>
            Download File
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
