import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './Home'

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div>
     <Home/>
    </div>
  );
}

export default App;
