import { Outlet } from 'react-router-dom'; // Corrected import
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import React from 'react'

function Lay() {
    console.log('Layout');
    return (
        <>
            <Header />
            <main>
                <Outlet /> 
            </main>
            <Footer />
        </>
    );
}

export default Lay;
