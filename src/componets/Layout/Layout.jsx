import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../Home/Home';
import Header from '../Header/Header';

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;