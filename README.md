<div align="center">

# 🔐 User Management System
### A full-stack application for managing users with basic CRUD operations

</div>

---

## ✨ Features
📊 User data visualization in tabular format  
✏️ Create, read, update, and delete user records  
📱 Responsive interface with real-time updates

## 🛠️ Prerequisites
- **Node.js**
- **MySQL**

## 🚀 Installation

<details>
<summary><b>Backend Setup</b></summary>

``` bash
cd server
npm install
```
</details>
<details>
<summary><b>Frontend Setup</b></summary>

``` bash
cd FrontEnd
npm install
```
</details>

## 💾 Database Configuration

Import schema:

```bash
mysql -u root -p user < 'path/to/Database/user_database.sql'

```
📝 Verify database creation in MySQL

## 🏃‍♂️ Running the Application

#### Start Backend Server

``` bash
cd server
node server.js
```
Server runs at: http://localhost:3001

#### Start Frontend Application

```bash
cd FrontEnd
npm start
``` 
Application runs at: http://localhost:3000

### Technical Architecture

Backend =>

- Node.js/Express server
- MySQL database
- RESTful API endpoints (GET, POST, PUT, DELETE)

Frontend =>

- React.js
- Axios for API integration
- Responsive data table
- User management interface

## 📋 Development Phases

| Phase | Components | Details |
|-------|------------|---------|
| 🔨 **Infrastructure** | Project Structure | - Structure configuration<br>- Database schema design<br>- Environment setup |
| ⚡ **Backend** | Server & Database | - Express configuration<br>- Database integration<br>- API implementation |
| 🎯 **Frontend** | UI & Integration | - React architecture<br>- Interface implementation<br>- API integration |
| ✅ **QA** | Testing & Optimization | - End-to-end testing<br>- CRUD validation<br>- Performance optimization |
