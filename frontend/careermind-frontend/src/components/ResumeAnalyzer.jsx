import React, { useState } from 'react';
import ResumeUpload from './ResumeUpload';
import ResumeResult from './ResumeResult';

const ResumeAnalyzerPage = () => {
  const [parsedData, setParsedData] = useState(null);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <ResumeUpload onUploadSuccess={setParsedData} />
      <ResumeResult parsedData={parsedData} />
    </div>
  );
};

export default ResumeAnalyzerPage;