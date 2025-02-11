import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Lay from './Lay.jsx';
import Home from './Components/Routes/Main/Home.jsx';
import Project from './Components/Routes/Project/Project.jsx';
import Cert from './Components/Routes/Cert/Cert.jsx';
import Feedback from './Components/Routes/Feedback/Feedback.jsx';
import CertDesc from './Components/Routes/Cert-Desc/Cert-Desc.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Lay />,
    children: [
      { index: true, element: <Home /> },
      { path: 'projects', element: <Project /> },
      { path: 'certificats', element: <Cert /> },
      { path: 'certificats/:certId', element: <CertDesc /> },
      { path: 'feedback', element: <Feedback /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
