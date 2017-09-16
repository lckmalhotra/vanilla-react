import React, { Component } from 'react';

class AddProject extends Component {

    constructor(){
        super();
        this.state = {
            newProject : { }
        }
    }

    handleSubmit(e){
        this.setState({
            newProject:{title : this.refs.title.value,
            category : this.refs.category.value
            }},function(){
            this.props.addProject(this.state.newProject);
        });
        e.preventDefault();
    }

    static defaultProps = {
        options : ['Web Design', 'App Development', 'Web Development']
    };
    render() {

        let options = this.props.options.map(option => <option key={option} label={option} value={option}></option>);

        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label>Name</label>
                        <input type="text" ref="title" placeholder="Title" />
                    </div>
                    <div>
                        <label>Category</label>
                        <select ref="category">{options}</select>
                    </div>
                    <div>
                        <input type="submit" value="Submit"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddProject;


