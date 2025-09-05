import React, { useState, useRef } from 'react';
import {
  Container, Row, Col, Navbar, Nav, Button, Card
} from 'react-bootstrap';
import { usePDF } from 'react-to-pdf';
import './App.css';
import { skills, projects } from './data';
import ProblemSolving from './components/ProblemSolving';
import ProjectModal from './components/ProjectModal';
import PDFContent from './components/PDFContent';
import SimplePDFButton from './components/SimplePDFButton';
import DirectPDFButton from './components/DirectPDFButton';
import PrintGuideButton from './components/PrintGuideButton';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showPDFContent, setShowPDFContent] = useState(false);

  const { toPDF, targetRef } = usePDF({
    filename: '권태준_포트폴리오.pdf',
    page: {
      margin: 10,
      format: 'a4',
      orientation: 'portrait',
    },
    html2canvas: {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false,
      removeContainer: true,
      foreignObjectRendering: false,
      imageTimeout: 0,
    },
    jsPDF: {
      unit: 'mm',
      format: 'a4',
      orientation: 'portrait',
      compress: true,
      precision: 16,
    },
  });

  const handleShowModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  const downloadPDF = async () => {
    setShowPDFContent(true);
    // PDF 컴포넌트가 완전히 렌더링될 시간을 주기 위해 더 긴 지연
    setTimeout(() => {
      try {
        // 스크롤을 맨 위로 이동
        window.scrollTo(0, 0);
        toPDF();
      } catch (error) {
        console.error('PDF 생성 중 오류:', error);
        alert('PDF 생성 중 오류가 발생했습니다. 다시 시도해주세요.');
      } finally {
        setTimeout(() => {
          setShowPDFContent(false);
        }, 1000);
      }
    }, 500);
  };

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home" onClick={() => scrollTo(homeRef)}>권태준's Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#about" onClick={() => scrollTo(aboutRef)}>About</Nav.Link>
              <Nav.Link href="#skills" onClick={() => scrollTo(skillsRef)}>Skills</Nav.Link>
              <Nav.Link href="#projects" onClick={() => scrollTo(projectsRef)}>Projects</Nav.Link>
              <Nav.Link href="#contact" onClick={() => scrollTo(contactRef)}>Contact</Nav.Link>
            </Nav>
            <div className="d-flex gap-2">
              {/* <PrintGuideButton /> */}
              <SimplePDFButton />
              {/* <DirectPDFButton /> */}
              {/* <Button variant="outline-light" onClick={downloadPDF} size="sm">
                📄 react-to-pdf
              </Button> */}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid className="main-container">
        <section id="home" ref={homeRef} className="hero-section text-center">
          <Container>
            <h1 className="display-4">사용자 피드백으로 성장하는 개발자, 권태준입니다.</h1>
            <p className="lead">Python, Node.js 기반의 안정적인 백엔드 시스템을 구축하고, 데이터 기반으로 문제를 해결하는 것을 즐깁니다.</p>
            <Button variant="primary" size="lg" onClick={() => scrollTo(projectsRef)}>
              프로젝트 보기
            </Button>
          </Container>
        </section>

        <section id="about" ref={aboutRef} className="py-5">
          <Container>
            <h2 className="text-center mb-4">About Me</h2>
            <Row>
              <Col md={8} className="mx-auto">
                <p>안녕하세요! 사용자의 피드백과 데이터를 바탕으로 조금 더 나은 세상, 조금 더 안전한 세상을 만들어가는 개발자 권태준입니다. 사용자 긍정적인 경험을 증가시키며 성장해왔습니다. 특히 안정적인 서버 개발 및 운영에 깊은 흥미를 느끼며, 사용자 불편사항을 실시간으로 개선하는 과정에서 큰 보람을 느낍니다.</p>        
                <p>저는 <strong>데이터 기반의 문제 해결 및 성능 최적화 역량</strong>을 갖추고 있습니다. 사용자 피드백을 서비스 개선으로 연결하는 데이터 기반 백엔드 개발자로서, 실제 데이터를 분석하여 서비스의 병목점을 식별하고 이를 해결하는 데 탁월한 능력을 가지고 있습니다. 학원 관리 서비스에서 관리 업무 처리 시간 40% 단축, 학부모 만족도 25% 향상, 검색 엔진 최적화로 사이트 노출과 트래픽 증가와 같은 정량적인 성과를 달성했으며, 슈어모빌리티에서는 API 응답 속도 70% 단축, Celery + RabbitMQ 도입으로 작업 큐 처리량 300% 증가, Redis 캐싱으로 반복 조회 요청 40% 감소 등 다양한 성능 개선 경험을 보유하고 있습니다. 이는 실제 서비스의 효율성과 사용자 경험을 직접적으로 향상시키는 데 기여할 수 있는 핵심 역량입니다.</p>        
                <p>또한, <strong>견고한 시스템 아키텍처 설계 및 안정적인 운영 능력</strong>을 보유하고 있습니다. 단순히 기능을 구현하는 것을 넘어, 서비스의 안정성과 확장성을 고려한 아키텍처 설계 및 운영 경험이 풍부합니다. 시스템 아키텍처 개선 및 서버 최적화, Docker 멀티 컨테이너 환경 구축, AWS 클라우드 인프라 설계·운영, Docker/ECS 활용 CI/CD 자동화, End-to-End 부하 테스트 및 Auto Scaling 적용으로 99% 가용성 달성 등의 경험은 대규모 트래픽을 처리하고 안정적인 서비스를 제공하는 데 필요한 깊이 있는 이해와 실무 역량을 보여줍니다. 체계적인 문서화를 통해 팀의 개발 생산성을 향상시키고, 기술 의사결정 과정을 투명하게 공유하는 문화를 만들어왔습니다.</p>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="skills" ref={skillsRef} className="py-5 bg-light">
          <Container>
            <h2 className="text-center mb-5">Skills</h2>
            <Row>
              {Object.entries(skills).map(([category, list]) => (
                <Col md={4} lg={3} key={category} className="mb-4">
                  <Card>
                    <Card.Body>
                      <Card.Title>{category.charAt(0).toUpperCase() + category.slice(1)}</Card.Title>
                      <Card.Text as="ul" className="list-unstyled">
                        {list.map(skill => <li key={skill}>{skill}</li>)}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <ProblemSolving />

        <section id="projects" ref={projectsRef} className="py-5">
          <Container>
            <h2 className="text-center mb-5">Projects</h2>
            <Row>
              {projects.map((project, index) => (
                <Col md={6} lg={4} key={index} className="mb-4">
                  <Card className="h-100 d-flex flex-column">
                    <Card.Body className="flex-grow-1">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <Card.Title className="mb-0">{project.title}</Card.Title>
                        <small className="text-muted">{project.period}</small>
                      </div>
                      <Card.Subtitle className="mb-2 text-muted">{project.techStack}</Card.Subtitle>
                      <Card.Text>{project.overview}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Button variant="primary" onClick={() => handleShowModal(project)}>자세히 보기</Button>
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
            </Row>
            
            {/* 인쇄용 프로젝트 상세 내용 (숨겨진 상태) */}
            <div className="print-only-project-details d-none">
              {projects.map((project, index) => (
                <div key={`print-${index}`} className="print-project-detail mb-4">
                  <h3>{project.title}</h3>
                  <p><strong>기간:</strong> {project.period}</p>
                  <p><strong>기술 스택:</strong> {project.techStack}</p>
                  <p><strong>주요 역할:</strong> {project.role}</p>
                  <p><strong>프로젝트 개요:</strong> {project.overview}</p>
                  
                  <h5>주요 기능 및 구현 상세:</h5>
                  <ul>
                    {project.details && project.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                  
                  <h5>성과 및 배운 점:</h5>
                  <ul>
                    {project.achievements && project.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                  <hr />
                </div>
              ))}
            </div>
          </Container>
        </section>

        <footer id="contact" ref={contactRef} className="py-5 bg-dark text-white">
          <Container className="text-center">
            <h2>Contact Me</h2>
            <p>아래 링크를 통해 편하게 연락주세요.</p>
            <Button variant="outline-light" href="mailto:tjkueon0309@gmail.com" className="me-2">Email</Button>
            <Button variant="outline-light" href="https://github.com/do-develop-space" target="_blank">GitHub</Button>
          </Container>
        </footer>
      </Container>

      <ProjectModal show={showModal} handleClose={handleCloseModal} project={selectedProject} />
      
      {/* PDF 전용 컴포넌트 */}
      <div style={{ display: showPDFContent ? 'block' : 'none' }} ref={targetRef}>
        <PDFContent />
      </div>

      {/* 인쇄(PDF)용 고정 하단 링크 */}
      <div className="print-footer">
        <a
          href="https://do-develop-space.github.io/my-portfolio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://do-develop-space.github.io/my-portfolio/
        </a>
      </div>
    </div>
  );
}

export default App;
