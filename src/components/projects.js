import React, { Component } from 'react';
import ProjectList from './projectList';

class Projects extends Component {
    render() {
        let projectItems;
        if(this.props.projects){
            projectItems = this.props.projects.map(project => <ProjectList key={project.title} item={project}></ProjectList>)
        }
        return (
            <div className="projects">
                <h5>Projects</h5>
                {projectItems}
            </div>
        );
    }
}

export default Projects;

