import React from 'react';
import { Button } from 'react-bootstrap';

const SimplePDFButton = () => {
  const handlePrint = () => {
    // 인쇄 전에 스크롤을 맨 위로 이동
    window.scrollTo(0, 0);
    
    // 잠시 대기 후 인쇄 다이얼로그 열기
    setTimeout(() => {
      // 인쇄 전에 스타일 강제 적용
      const style = document.createElement('style');
      style.id = 'print-style';
             style.textContent = `
         @media print {
           body { background: white !important; color: black !important; }
           .main-container { display: block !important; background: white !important; color: black !important; }
           .navbar { display: none !important; }
           .hero-section { background: white !important; color: black !important; }
           .card { background: white !important; color: black !important; border: 1px solid #ccc !important; }
           .btn { display: none !important; }
           .print-only-project-details { display: block !important; }
           .print-project-detail { background: white !important; color: black !important; border: 1px solid #ccc !important; }
         }
       `;
      document.head.appendChild(style);
      
      window.print();
      
      // 인쇄 후 스타일 제거
      setTimeout(() => {
        const printStyle = document.getElementById('print-style');
        if (printStyle) {
          printStyle.remove();
        }
      }, 1000);
    }, 200);
  };

  return (
    <Button variant="outline-info" onClick={handlePrint} size="sm">
      🖨️ 브라우저 인쇄/PDF
    </Button>
  );
};

export default SimplePDFButton; 