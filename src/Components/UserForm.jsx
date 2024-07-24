// src/components/UserForm.js
import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const UserForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const addUser = () => {
        axios.post('https://jsonplaceholder.typicode.com/users', {
            name,
            email,
            phone,
        })
            .then(response => {
                console.log('User added:', response.data);
                // Reset form fields after adding
                setName('');
                setEmail('');
                setPhone('');
            })
            .catch(error => console.error('Error adding user:', error));
    };

    return (
        <div>
            <h2 className="mb-3">Add User</h2>
            <Form onSubmit={e => {
                e.preventDefault();
                addUser();
            }}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter phone number"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit">Add User</Button>
            </Form>
        </div>
    );
};

export default UserForm;
