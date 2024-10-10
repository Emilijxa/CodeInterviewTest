import React, { useEffect, useState, useSyncExternalStore } from "react";
import axios from 'axios'
import Modal from 'react-modal'
import './Home.css'
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa'

    // manages states
   
function Home() { 

    const [ShowModal, setShowModal] = useState(false)
    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState([]);
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [editUserId, setEditUserId] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    // get request that fetches users

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:3001/users');
            setUsers(response.data);
            console.log(response.data)
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

     // delete request 

    const handleDelete = async (id) => {
        try {
            await axios.delete('http://localhost:3001/users/' + id);
            fetchUsers();

        } catch (error) {
            console.error('Error Deleting users:', error);
        }
    };

     // handles edit 

    const handleEdit = (user) => {
        setUserId(user.id);
        setUserName(user.username);
        setEmail(user.email);
        setEditUserId(user.id);
        openModal();
    };

    // reset form fields when submitting or canceling

    const resetForm = () => {
        setUserName('');
        setEmail('');
        setEditUserId(null);
    };

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        resetForm();
        setShowModal(false);
    };

    // put request

    const handleUpdate = async () => {
        axios.put(`http://localhost:3001/users/${userId}`, {
          username: userName,
          email: email
        })
        .then(response => {
          console.log(response.data);
          closeModal();
          resetForm();
          fetchUsers(); 
          setEditUserId(false); 
        })
        .catch(error => {
          console.error('Error updating user:', error.response ? error.response.data : error.message);
        });
      };

      // handles submit to create or update user

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        if (editUserId) {
            handleUpdate();
          } else {
            axios.post('http://localhost:3001/users', {
              username: userName,
              email: email
            })
            .then(response => {
              console.log(response.data);
              closeModal();
              resetForm();
              fetchUsers(); 
            })
            .catch(error => {
              console.error('Error creating user:', error.response ? error.response.data : error.message);
            });
          }
    };


    return (
        <div className="user-management">
            <h1>User Management</h1>
            <button className="create-button" onClick={() => setShowModal(true)}>Create User</button>
            <Modal isOpen={ShowModal} onRequestClose={closeModal} ariaHideApp={false} className="modal">
                <h2>{editUserId ? 'Edit User' : 'Create User'}</h2>
                <form onSubmit={handleSubmit} className="user-form">
                    <input
                        type="text"
                        placeholder="Username"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                    />
                    <input type="email" placeholder="Email" value={email}
                        onChange={(e) => setEmail(e.target.value)} required /> 
                    <button type="submit">{editUserId ? 'Update User' : 'Add User'}</button>
                    <button type="button" onClick={closeModal}>Cancel</button>
                </form>
            </Modal>

            <table className="user-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button className="action-buttons" onClick={() => handleEdit(user)}><FaPencilAlt/></button>
                                    <button className="action-buttons" onClick={() => handleDelete(user.id)}><FaTrashAlt /></button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default Home