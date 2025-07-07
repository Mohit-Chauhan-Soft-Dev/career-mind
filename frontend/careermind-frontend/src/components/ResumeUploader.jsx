import { useState } from 'react';
import axios from 'axios';

function ResumeUploader() {
  const [file, setFile] = useState(null);
  const [feedback, setFeedback] = useState('');

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('resume', file);

    const res = await axios.post('/api/resume/analyze', formData);
    setFeedback(res.data.feedback);
  };

  return (
    <div className="p-4">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload} className="btn btn-primary mt-2">Upload</button>
      {feedback && <div className="mt-4">{feedback}</div>}
    </div>
  );
}

export default ResumeUploader;