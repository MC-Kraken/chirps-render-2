import React, { Component } from 'react';
import Users from './components/Users'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:8000/users')
        
            .then(response => response.json())
            .then(users => (this.setState({ users }))
            )
    }

    render() {

        const users = this.state.users

        return (
            <>
                {users.map((name, id) => <Users key={id} users={name} />)}
            </>
        )
    }
}

export default App