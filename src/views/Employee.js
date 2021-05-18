import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Contentheader from '../components/Contentheader';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function Employee() {
    const token                   = localStorage.getItem('BASEAPPS_ACCESS_TOKEN')
    const [employee, setEmployee] = useState({})
    const [url, setUrl]           = useState('http://localhost/baseapps-lara/api/users')

    const getEmployee = async () => {
        try {
            const header = {
                headers: { Authorization: `Bearer ${token}` }
            };
            let response = await axios.get(url, header)
            setEmployee(response.data.data)
        } catch(e) {
            localStorage.removeItem('BASEAPPS_ACCESS_TOKEN')
            localStorage.removeItem('BASEAPPS_REFRESH_TOKEN')
            window.location.href = 'http://localhost:3000'
            console.log('error: ')
        }
    }

    useEffect(() =>  {
        document.body.className = 'sidebar-mini layout-fixed';
        getEmployee();
    },[url]);

    return (
            <div className="wrapper">
                {

                    !token ? 
                        <Redirect to='/'  />

                    : null

                }

                <Header />


                <Sidebar 
                    
                />

                <div className="content-wrapper">

                    <Contentheader
                        menu      ="Management Patrol"
                        submenu   ="karyawan"   
                    />
                    
                    <section className="content">


                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Employee Data</h3>

                                <div className="card-tools">
                                    <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                        <i className="fas fa-minus"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <table id="employee" className="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th width="10%">NIK</th>
                                            <th width="30%">NAMA</th>
                                            <th width="30%">EMAIL</th>
                                            <th width="10%">STATUS</th>
                                            <th width="12%">ACTION</th>
                                        </tr>
                                        <tr>
                                            <th width="10%"><input className="form-control" placeholder="search"/></th>
                                            <th width="30%"><input className="form-control" placeholder="search"/></th>
                                            <th width="30%"><input className="form-control" placeholder="search"/></th>
                                            <th width="10%"><input className="form-control" placeholder="search"/></th>
                                            <th width="12%">--</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            employee.data?.map((emp, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{emp.idcard}</td>
                                                        <td>{emp.name}</td>
                                                        <td>{emp.email}</td>
                                                        <td>{emp.status}</td>
                                                        <td>
                                                            <button className="btn btn-sm btn-warning"><span className="fa fa-edit"></span></button>
                                                            <button className="btn btn-sm btn-danger"><span className="fa fa-trash"></span></button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }                                        
                                    </tbody>
                                </table>

                                <ul className="pagination">
                                        {
                                            employee.links?.map((emp, index) => {
                                                return (
                                                    <div key={index}>
                                                        <li className="page-item"><button className="page-link" onClick={() => setUrl(emp.url)}>{emp.label}</button></li>
                                                    </div>
                                                )
                                            })
                                        } 
                                </ul>
                            </div>
                            <div className="card-footer">

                            </div>
                        </div>

                    </section>
                </div>
                <Footer/>
            </div>
    );
}


export default Employee;