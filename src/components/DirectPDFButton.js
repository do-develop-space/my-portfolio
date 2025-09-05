import React from 'react';
import { Button } from 'react-bootstrap';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const DirectPDFButton = () => {
  const generatePDF = async () => {
    try {
      // PDF로 변환할 요소 선택
      const element = document.querySelector('.main-container');
      if (!element) {
        alert('PDF로 변환할 내용을 찾을 수 없습니다.');
        return;
      }

      // 스크롤을 맨 위로 이동
      window.scrollTo(0, 0);

      // 잠시 대기하여 스크롤이 완료되도록 함
      await new Promise(resolve => setTimeout(resolve, 100));

             // html2canvas로 캡처
       const canvas = await html2canvas(element, {
         scale: 2, // 더 높은 해상도
         useCORS: true,
         allowTaint: true,
         backgroundColor: '#ffffff',
         logging: false,
         removeContainer: true,
         foreignObjectRendering: false,
         imageTimeout: 0,
         onclone: (clonedDoc) => {
           // 복제된 문서에서 스타일 수정
           const clonedElement = clonedDoc.querySelector('.main-container');
           if (clonedElement) {
             // 전체 컨테이너 스타일 강제 적용
             clonedElement.style.cssText = `
               background-color: white !important;
               color: black !important;
               font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif !important;
               line-height: 1.4 !important;
               padding: 20px !important;
               margin: 0 !important;
               box-sizing: border-box !important;
             `;
             
             // 모든 하위 요소의 스타일 강제 적용
             const allElements = clonedElement.querySelectorAll('*');
             allElements.forEach(el => {
               // 배경색 강제 적용
               if (getComputedStyle(el).backgroundColor !== 'rgba(0, 0, 0, 0)' && 
                   getComputedStyle(el).backgroundColor !== 'transparent') {
                 el.style.backgroundColor = 'white';
               }
               
               // 텍스트 색상 강제 적용
               if (getComputedStyle(el).color !== 'rgba(0, 0, 0, 0)' && 
                   getComputedStyle(el).color !== 'transparent') {
                 el.style.color = 'black';
               }
             });
             
             // 특정 요소들의 색상 조정
             const titles = clonedElement.querySelectorAll('h1, h2, h3, .card-title');
             titles.forEach(title => {
               title.style.color = '#007bff';
             });
             
             const cards = clonedElement.querySelectorAll('.card');
             cards.forEach(card => {
               card.style.backgroundColor = 'white';
               card.style.border = '1px solid #dee2e6';
               card.style.color = 'black';
             });
             
             const strongElements = clonedElement.querySelectorAll('strong');
             strongElements.forEach(strong => {
               strong.style.color = '#007bff';
             });
           }
         }
       });

      // 캔버스를 이미지로 변환
      const imgData = canvas.toDataURL('image/jpeg', 0.95);

      // PDF 생성
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 190; // 여백을 위해 약간 작게
      const pageHeight = 277; // 여백을 위해 약간 작게
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      // 첫 페이지 추가
      pdf.addImage(imgData, 'JPEG', 10, 10, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // 추가 페이지가 필요한 경우
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 10, position + 10, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      // PDF 다운로드
      pdf.save('권태준_포트폴리오.pdf');
    } catch (error) {
      console.error('PDF 생성 중 오류:', error);
      alert('PDF 생성 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <Button variant="outline-success" onClick={generatePDF} size="sm">
      📄 직접 PDF 생성
    </Button>
  );
};

export default DirectPDFButton; 