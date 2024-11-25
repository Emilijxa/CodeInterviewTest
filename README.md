
# User Management

## Project Setup

### You need

- **Node.js** and **MySQL** installed and running

### Install Dependencies

First for backend

```bash
cd server
npm install
```

Then for frontend

```bash
cd FrontEnd
npm install
```

## Database Importing

   - Open your MySQL terminal 

   - Import the *user_database.sql* file:
```bash
     mysql -u root -p user <'Your-file-path'/Database/user_database.sql
```
   - write the path of the file where your folder is located

   - After the import, log into MySQL and check if the users database has been created

### Run the Application

First backend

```bash
cd server
node server.js
```
The backend server will run on http://localhost:3001

Then frontend

```bash
cd FrontEnd
npm start
```
The app will run on http://localhost:3000 by default.

## Plan

1. **Set Up**:
   * Set up the project structure using React for the frontend and Node.js/Express for the backend.
   * Use MySQL for the database and create a user table with fields id, username, and email.
   * Set up basic folder structures for the frontend and backend.

2. **Backend**:
   * Set up Express and MySQL connection.
   * Create routes: GET, POST , PUT, DELETE.
   * console log to test and verify each API route is working correctly.

3. **Frontend**:
   * React for frontend, render a table to display users.
   * Create button for adding and editing and deleting users.
   * Axios for making API requests to the backend.

4. **Testing**:
   * Test it full: listing users, creating, updating, and deleting.

