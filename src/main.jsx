import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import Logo from './component/Logo/Logo';
import Header from './component/Header/Header';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Logo /> */}
    <Header/>
  </React.StrictMode>,
)
