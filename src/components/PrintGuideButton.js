import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const PrintGuideButton = () => {
  const [showModal, setShowModal] = React.useState(false);

  const handlePrint = () => {
    // 인쇄 전에 스크롤을 맨 위로 이동
    window.scrollTo(0, 0);
    
    // 잠시 대기 후 인쇄 다이얼로그 열기
    setTimeout(() => {
      // 인쇄 전에 스타일 강제 적용
      const style = document.createElement('style');
      style.id = 'print-style-guide';
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
        const printStyle = document.getElementById('print-style-guide');
        if (printStyle) {
          printStyle.remove();
        }
      }, 1000);
    }, 200);
  };

  return (
    <>
      <Button variant="outline-warning" onClick={() => setShowModal(true)} size="sm">
        📋 인쇄 가이드
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>PDF 저장 방법 안내</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>브라우저 인쇄 기능 사용법:</h6>
          <ol>
            <li>아래 "인쇄 시작" 버튼을 클릭합니다.</li>
            <li>인쇄 다이얼로그에서 "대상"을 "PDF로 저장"으로 변경합니다.</li>
            <li>"저장" 버튼을 클릭하여 PDF 파일을 다운로드합니다.</li>
          </ol>
          <div className="alert alert-info">
            <strong>💡 추천 방법:</strong> 이 방법이 가장 안정적이고 깔끔한 PDF를 생성합니다.
          </div>
          <div className="alert alert-success">
            <strong>✅ 포함 내용:</strong> 프로젝트 상세 내용(기능, 성과, 배운 점)도 함께 인쇄됩니다.
          </div>
          <div className="alert alert-warning">
            <strong>⚠️ 주의사항:</strong> 다른 PDF 생성 방법들은 배경색이나 텍스트가 제대로 표시되지 않을 수 있습니다.
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            닫기
          </Button>
          <Button variant="primary" onClick={handlePrint}>
            인쇄 시작
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PrintGuideButton; 