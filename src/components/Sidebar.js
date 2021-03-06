import React from 'react';
import { NavLink } from 'react-router-dom';

//IMAGE CONST
import imgLogo from '../assets/img/AdminLTELogo.png';


const Sidebar = () => {

    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">

                <NavLink eventKey="1" as={NavLink} to="/dashboard" className="brand-link">
                    <img src={imgLogo} className="brand-image img-circle elevation-3"/>
                    <span className="brand-text font-weight-light">Management Patrol</span>
                </NavLink>
                <div className="sidebar">
                    
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                            data-accordion="false">
                            <li className="nav-header">MAIN</li>
                            <li className="nav-item">
                                <NavLink eventKey="2" as={NavLink} to="/dashboard" className="nav-link">
                                    <i className="nav-icon fas fa-home"></i>
                                    <p>
                                        Home
                                    </p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink eventKey="3" as={NavLink} to="/employee" className="nav-link">
                                    <i className="nav-icon fas fa-users"></i>
                                    <p>
                                        Employee
                                    </p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink eventKey="4" as={NavLink} to="/area" className="nav-link">
                                    <i className="nav-icon fas fa-map"></i>
                                    <p>
                                        Asset Area
                                    </p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink eventKey="5" to="/assignment" className="nav-link">
                                    <i className="nav-icon fas fa-tasks"></i>
                                    <p>
                                        Assignment
                                    </p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink eventKey="5" to="/schedule" className="nav-link">
                                    <i className="nav-icon fas fa-calendar"></i>
                                    <p>
                                        Schedule
                                    </p>
                                </NavLink>
                            </li>
                            <li className="nav-header">ACCOUNT</li>
                            <li className="nav-item">
                                <NavLink eventKey="6" as={NavLink} to="/profile" className="nav-link">
                                    <i className="nav-icon fas fa-user"></i>
                                    <p>
                                        Profile
                                    </p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink eventKey="7" as={NavLink} to="/change_password" className="nav-link">
                                    <i className="nav-icon fas fa-lock"></i>
                                    <p>
                                        Change Password
                                    </p>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>

        </aside>
    );
};

export default Sidebar;