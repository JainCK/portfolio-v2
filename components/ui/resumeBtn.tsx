import React from 'react';

const ResumeButton = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/utils/Your_Resume.pdf'; // Update with the actual path to your resume
    link.download = 'Resume.pdf'; // Update with the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button 
      onClick={handleDownload} 
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
    >
      Download My Resume
    </button>
  );
};

export default ResumeButton;
