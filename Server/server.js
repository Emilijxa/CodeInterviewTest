const mysql = require('mysql2');
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;


app.use(cors()); 
app.use(express.json()); 

// MySQL SETUP
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Emilija@123',
    database: 'user'
});

// CONNECT MySQL
db.connect(err => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL');
});

// GET request
app.get('/users', (req, res) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// post request
app.post('/users', (req, res) => {
    const { username, email } = req.body; 
    const sql = 'INSERT INTO users (username, email) VALUES (?, ?)'; 
    db.query(sql, [username, email], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'User added successfully', userId: result.insertId });
    });
});

// delete request 
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM users WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User deleted successfully' });
    });
});

app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { username, email } = req.body; 
    const sql = 'UPDATE users SET username = ?, email = ? WHERE id = ?';
    
    db.query(sql, [username, email, id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User updated successfully' });
    });
});

// START SERVER 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
