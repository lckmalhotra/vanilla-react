import React, { Component } from 'react';

class ProjectsList extends Component {
    render() {
        return (
           <li>{this.props.item.title} : {this.props.item.category}</li>
        );
    }
}

export default ProjectsList;

