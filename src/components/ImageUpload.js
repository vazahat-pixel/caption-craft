import React, { useState } from 'react';

function ImageUpload({ onImageSelected }) {
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      onImageSelected(file);
    }
  };

  return (
    <div className="text-center">
      <input className='file' type="file" accept="image/*" onChange={handleImageChange} />
      {preview && <img src={preview} alt="Preview" className="w-64 h-64 object-cover mx-auto mt-4 rounded-lg shadow-md" />}
    </div>
  );
}

export default ImageUpload;
