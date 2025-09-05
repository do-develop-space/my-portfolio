import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ProjectModal = ({ show, handleClose, project }) => {
  if (!project) {
    return null;
  }

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton className="bg-dark text-white">
        <Modal.Title>{project.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark text-white">
        <h5>주요 역할: {project.role}</h5>
        <p className="text-white">{project.period}</p>
        <p className="text-white">{project.techStack}</p>
        <hr />
        <h6>주요 기능 및 구현 상세:</h6>
        <ul>
          {project.details && project.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
        <hr />
        <h6>성과 및 배운 점:</h6>
        <ul>
          {project.achievements && project.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </Modal.Body>
      <Modal.Footer className="bg-dark">
        <Button variant="secondary" onClick={handleClose}>
          닫기
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectModal;