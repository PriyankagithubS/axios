
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => setUsers(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const deleteUser = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(() => setUsers(users.filter(user => user.id !== id)))
            .catch(error => console.error('Error deleting user:', error));
    };

    return (
        <div>
            <h2 className="mb-3">Users List</h2>
            <ListGroup>
                {users.map(user => (
                    <ListGroup.Item key={user.id} className="d-flex justify-content-between align-items-center">
                        {user.name} ({user.email})
                        <Button variant="danger" onClick={() => deleteUser(user.id)}>Delete</Button>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
};

export default UserList;
