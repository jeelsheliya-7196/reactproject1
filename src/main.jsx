import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
// import Logo from './component/Logo/Logo';
import Header from './component/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from "./component/Banner/Banner"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Logo /> */}
    <Header/>
  
  </React.StrictMode>,
)
