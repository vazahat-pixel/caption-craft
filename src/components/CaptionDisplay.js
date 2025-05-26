import React from 'react';

function CaptionDisplay({ caption, onGenerateCaption }) {
  return (
    <div className="text-center mt-6">
      <button onClick={onGenerateCaption} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Generate Caption
      </button>
      {caption && <p className="mt-4 text-xl font-semibold italic">"{caption}"</p>}
    </div>
  );
}

export default CaptionDisplay;
