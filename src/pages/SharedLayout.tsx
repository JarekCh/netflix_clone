import Navbar from '../components/navbar/Navbar';

import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default SharedLayout;
