import React from 'react'
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ProjectModal = (props) => (
  <Modal
    isOpen={props.projectSelected}
    onRequestClose={props.handleCloseProject}
    contentLabel="Forecast"
    closeTimeoutMS={200}
    className="project-modal"
    overlayClassName="project-modal-overlay"
  >
    <div className="project-modal-header">
      <div className="project-modal-header-left"></div>
      <h1>{props.title}</h1>
      <button className="project-modal-close" onClick={props.handleCloseProject}>X</button>
    </div>
    <div className="project-modal-body">
      {props.image}
      {props.body}
      <div className="links">
        {props.button1 && <a className="link" href={props.button1Link} target="_blank" rel="noopener noreferrer">{props.button1}</a>}
        {props.button2 && <a className="link" href={props.button2Link} target="_blank" rel="noopener noreferrer">{props.button2}</a>}
      </div>  
    </div>
  </Modal>
)

export default ProjectModal