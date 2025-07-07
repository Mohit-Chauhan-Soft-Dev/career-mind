import React from 'react';

const ResumeResult = ({ parsedData }) => {
  if (!parsedData) return null;

  const { name, email, skills, experience, education, feedback, score } = parsedData;

  return (
    <div className="mt-6 p-6 border rounded-lg bg-white shadow-md">
      <h2 className="text-xl font-bold mb-4">📄 Parsed Resume Summary</h2>

      <div className="mb-4">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold">🛠 Skills</h3>
        <ul className="list-disc list-inside">
          {skills?.map((skill, idx) => <li key={idx}>{skill}</li>)}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold">💼 Experience</h3>
        {experience?.map((exp, idx) => (
          <div key={idx} className="mb-2">
            <p className="font-medium">{exp.role} at {exp.company}</p>
            <p className="text-sm text-gray-600">{exp.duration}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold">🎓 Education</h3>
        {education?.map((edu, idx) => (
          <div key={idx} className="mb-2">
            <p className="font-medium">{edu.degree} – {edu.institution}</p>
            <p className="text-sm text-gray-600">{edu.year}</p>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold">📝 Feedback</h3>
        <ul className="list-disc list-inside text-red-600">
          {feedback?.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">📊 Compatibility Score</h3>
        <div className="text-2xl font-bold text-blue-600">{score}%</div>
      </div>
    </div>
  );
};

export default ResumeResult;