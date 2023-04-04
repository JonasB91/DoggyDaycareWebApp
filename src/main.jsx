import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './Navbar.css'
import { HashRouter as Router } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <Router>
    <App />
    </Router>
  //</React.StrictMode>,
)
