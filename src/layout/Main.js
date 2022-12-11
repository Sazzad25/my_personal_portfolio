import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../component/Home/Navbar';
import Footer from '../component/Home/Footer'

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;