import React from 'react';
import './Sidebar.css';
import tools from './tools.png';

const Sidebar = () => (
  <div className="sidebar">
    <h1 className="sidebar-heading">Bs</h1>
    <img className="sidebar-tools" src={tools} alt="sidebar-tools" />
  </div>
);
export default Sidebar;
