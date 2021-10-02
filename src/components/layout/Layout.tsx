import React from 'react';
import { LayoutProps } from '../../interfaces';
import './Layout.css';

const Layout = ({
  children,
  SidebarComponent,
}: LayoutProps) => {
  return <div className="layout-container">
    <SidebarComponent />
    {children}
  </div>
}

export default Layout;