import React from 'react';
import { Button } from 'react-bootstrap';

const PrintButton = () => {
  const handlePrint = () => {
    // 현재 페이지를 인쇄 모드로 열기
    window.print();
  };

  return (
    <Button variant="outline-secondary" onClick={handlePrint}>
      🖨️ 인쇄/PDF
    </Button>
  );
};

export default PrintButton; 