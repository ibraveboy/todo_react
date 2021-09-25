import React from 'react';
import './Layout.css';

const Layout = ({
  children,
  SidebarComponent,
}) => {
  return <div className="layout-container">
    <SidebarComponent />
    {children}
  </div>
}

export default Layout;