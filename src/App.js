import React, { Component } from 'react';
import Projects from './components/projects';
import AddProject from './components/AddProject';
import './App.css';

class App extends Component {
   constructor(){
       super();
        this.state = {
            projects : []
        }
   }

    componentWillMount(){
        this.setState({projects : [
            {
                title : 'Project 1',
                category : 'Web Design'
            },
            {
                title : 'Project 2',
                category : 'App Development'
            },
            {
                title : 'Project 3',
                category : 'Web Development'
            }
        ]})
    }

    handleSubmitProject(project){
        let  projects = this.state.projects;
            projects.push(project);
        this.setState({projects : projects});
    }

  render() {
    return (
      <div>
          <h2>Welcome to My Project App</h2>
            <AddProject addProject={this.handleSubmitProject.bind(this)}></AddProject>
            <Projects projects={this.state.projects}></Projects>
      </div>
    );
  }
}

export default App;
