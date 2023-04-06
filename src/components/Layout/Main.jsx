import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Toaster toastOptions={{
                      className: '',
                        style: {
                          border: '1px solid #7132',
                          color: 'gray',
                         },
                    }} />
        </div>
    );
};

export default Main;