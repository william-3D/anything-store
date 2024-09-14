import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';

const MainLayout = () => {
  return (
    <div className="flex-1 flex flex-col">
        <Navbar />
        <main className='flex-1'>
            <Outlet />
        </main>
    </div>
  )
}

export default MainLayout