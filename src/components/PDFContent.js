import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { skills, projects } from '../data';

const PDFContent = () => {
  return (
    <div className="pdf-content">
      <Container fluid>
        {/* 헤더 섹션 */}
        <section className="pdf-hero-section text-center">
          <Container>
            <h1 className="display-4">사용자 피드백으로 성장하는 개발자, 권태준입니다.</h1>
            <p className="lead">Python, Node.js 기반의 안정적인 백엔드 시스템을 구축하고, 데이터 기반으로 문제를 해결하는 것을 즐깁니다.</p>
          </Container>
        </section>

        {/* About 섹션 */}
        <section className="pdf-about-section">
          <Container>
            <h2 className="text-center mb-4">About Me</h2>
            <Row>
              <Col md={12}>
                <p>안녕하세요! 사용자의 피드백과 데이터를 바탕으로 조금 더 나은 세상, 조금 더 안전한 세상을 만들어가는 개발자 권태준입니다. 사용자 긍정적인 경험을 증가시키며 성장해왔습니다. 특히 안정적인 서버 개발 및 운영에 깊은 흥미를 느끼며, 사용자 불편사항을 실시간으로 개선하는 과정에서 큰 보람을 느낍니다.</p>        
                <p>저는 <strong>데이터 기반의 문제 해결 및 성능 최적화 역량</strong>을 갖추고 있습니다. 사용자 피드백을 서비스 개선으로 연결하는 데이터 기반 백엔드 개발자로서, 실제 데이터를 분석하여 서비스의 병목점을 식별하고 이를 해결하는 데 탁월한 능력을 가지고 있습니다.</p>        
                <p>또한, <strong>견고한 시스템 아키텍처 설계 및 안정적인 운영 능력</strong>을 보유하고 있습니다. 단순히 기능을 구현하는 것을 넘어, 서비스의 안정성과 확장성을 고려한 아키텍처 설계 및 운영 경험이 풍부합니다.</p>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Skills 섹션 */}
        <section className="pdf-skills-section">
          <Container>
            <h2 className="text-center mb-4">Skills</h2>
            <Row>
              {Object.entries(skills).map(([category, list]) => (
                <Col md={6} lg={3} key={category} className="mb-3">
                  <Card className="pdf-skill-card">
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

        {/* Projects 섹션 */}
        <section className="pdf-projects-section">
          <Container>
            <h2 className="text-center mb-4">Projects</h2>
            <Row>
              {projects.map((project, index) => (
                <Col md={6} key={index} className="mb-3">
                  <Card className="pdf-project-card">
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <Card.Title className="mb-0">{project.title}</Card.Title>
                        <small className="text-muted">{project.period}</small>
                      </div>
                      <Card.Subtitle className="mb-2 text-muted">{project.techStack}</Card.Subtitle>
                      <Card.Text>{project.overview}</Card.Text>
                      <div className="project-details">
                        <h6>주요 성과:</h6>
                        <ul>
                          {project.achievements.map((achievement, idx) => (
                            <li key={idx}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Contact 섹션 */}
        <section className="pdf-contact-section">
          <Container className="text-center">
            <h2>Contact Me</h2>
            <p>Email: tjkueon0309@gmail.com</p>
            <p>GitHub: https://github.com/do-develop-space</p>
          </Container>
        </section>
      </Container>
    </div>
  );
};

export default PDFContent; 