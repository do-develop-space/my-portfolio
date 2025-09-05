import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const ProblemSolving = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/EXPERIENCE.md`) // Public 폴더에 있는 파일을 기준으로 경로를 잡습니다.
      .then(response => response.text())
      .then(text => setMarkdown(text));
  }, []);

  return (
    <section className="problem-solving-section">
      <div className="problem-solving-container">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </section>
  );
};

export default ProblemSolving;