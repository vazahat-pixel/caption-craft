import React, { useState } from 'react';
import ImageUpload from './components/ImageUpload';
import CaptionDisplay from './components/CaptionDisplay';
import './App.css';
function App() {
  const [imageFile, setImageFile] = useState(null);
  const [caption, setCaption] = useState('');

  const handleImageSelected = (file) => {
    setImageFile(file);
    setCaption(''); // reset caption
  };

   const handleGenerateCaption = () => {
    // Mocked logic (or you can add API call here)
    const captions = [
      "When you're too cool for school 😎",
      "Life’s too short to be normal 🐾",
      "Cuteness overload alert 🚨",
      "That Friday feeling 🌟",
    ];
    const randomCaption = captions[Math.floor(Math.random() * captions.length)];
    setCaption(randomCaption);
  };

  return (
    <div   className="min-h-screen bg-gray-100 p-4 text-center">
      <h1 className="text-3xl font-bold mb-6">📸 CaptionCraft</h1>
      <ImageUpload onImageSelected={handleImageSelected} />
      {imageFile && (
        <CaptionDisplay caption={caption} onGenerateCaption={handleGenerateCaption} />
      )}
    </div>
  );
}

export default App;
