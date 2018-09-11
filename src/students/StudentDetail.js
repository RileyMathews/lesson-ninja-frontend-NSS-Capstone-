import React, { Component } from 'react'
import { Button } from 'bloomer/lib/elements/Button';
import StudentAssignment from './StudentAssignment';

/*  
    module: student detail component
    author: riley mathews
    purpose: to be the component that shows details about a student
*/


class StudentDetail extends Component {

    state = {
        assignments: []
    }

    componentDidMount() {
        this.setState({assignments: this.props.getStudentsAssignments(this.props.student.url)})
    }


    render() {
        return (
            <React.Fragment>
                <Button onClick={this.props.setListView}>Return To Students</Button>
                <h1>Student</h1>
                <p>name: {this.props.student.user.first_name} {this.props.student.user.last_name}</p>
                <p>username: {this.props.student.user.username}</p>
                <p>email: {this.props.student.user.email}</p>
                <p>Assignments: </p>
                {this.state.assignments.map(assignment => (
                    <StudentAssignment key={assignment.id} assignment={assignment}/>
                ))}
            </React.Fragment>
        )
    }
}

export default StudentDetail
