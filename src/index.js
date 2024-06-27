import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './Containers/Header';
import Home from './Containers/Home';
import About from './Containers/AboutMe';
import FaqComponent from './Containers/Faq';
import GlobalStyle from './GlobalStyles';
import Footer from './Containers/Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    <GlobalStyle/>
    
    

    
    <Header/>
    <Home/>
    <About/>
    <FaqComponent/>
    <Footer/>
    
  </React.StrictMode>
);


