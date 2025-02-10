

import React from 'react';
import Home from './components/Home';
import About from './components/about';
import { HashRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./components/App.css"
import Navebar from './components/Navebar';
import Layout from './layout';
import Contact from './components/contact';
import Portfolio from './components/portfolio';

function App() {

  const routrer= createBrowserRouter([
{path:"",element: <Layout/>, children:[
  {path:"Home",element:<Home/>},
{path:"About",element:<About/>},
{path:"Contact",element:<Contact/>},
{path:"Portfolio",element:<Portfolio/>}
]}


  ])
  return (
    <>

<RouterProvider router={routrer} ></RouterProvider>

</>
  );
}

export default App;