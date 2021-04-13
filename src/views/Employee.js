import React, { useEffect } from 'react';
import Contentheader from '../components/Contentheader';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function Employee(props) {

    useEffect(() =>  {
        document.body.className = 'sidebar-closed sidebar-collapse';
    });

    return (
            <div className="wrapper">

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
                                            <th>NIK</th>
                                            <th>NAMA</th>
                                            <th>JABATAN</th>
                                            <th>DEPARTEMENT</th>
                                            <th>ACTION</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>2012535</td>
                                            <td>HUDA</td>
                                            <td>OFFICER</td>
                                            <td>SECURITY</td>
                                            <th>DELETE | EDIT</th>
                                        </tr>
                                        <tr>
                                            <td>2012535</td>
                                            <td>HUDA</td>
                                            <td>OFFICER</td>
                                            <td>SECURITY</td>
                                            <th>DELETE | EDIT</th>
                                        </tr>
                                        <tr>
                                            <td>2012535</td>
                                            <td>HUDA</td>
                                            <td>OFFICER</td>
                                            <td>SECURITY</td>
                                            <th>DELETE | EDIT</th>
                                        </tr>
                                        <tr>
                                            <td>2012535</td>
                                            <td>HUDA</td>
                                            <td>OFFICER</td>
                                            <td>SECURITY</td>
                                            <th>DELETE | EDIT</th>
                                        </tr>
                                        <tr>
                                            <td>2012535</td>
                                            <td>HUDA</td>
                                            <td>OFFICER</td>
                                            <td>SECURITY</td>
                                            <th>DELETE | EDIT</th>
                                        </tr>
                                        <tr>
                                            <td>2012535</td>
                                            <td>HUDA</td>
                                            <td>OFFICER</td>
                                            <td>SECURITY</td>
                                            <th>DELETE | EDIT</th>
                                        </tr>
                                        <tr>
                                            <td>2012535</td>
                                            <td>HUDA</td>
                                            <td>OFFICER</td>
                                            <td>SECURITY</td>
                                            <th>DELETE | EDIT</th>
                                        </tr>
                                        <tr>
                                            <td>2012535</td>
                                            <td>HUDA</td>
                                            <td>OFFICER</td>
                                            <td>SECURITY</td>
                                            <th>DELETE | EDIT</th>
                                        </tr>
                                        <tr>
                                            <td>2012535</td>
                                            <td>HUDA</td>
                                            <td>OFFICER</td>
                                            <td>SECURITY</td>
                                            <th>DELETE | EDIT</th>
                                        </tr>
                                        <tr>
                                            <td>2012535</td>
                                            <td>HUDA</td>
                                            <td>OFFICER</td>
                                            <td>SECURITY</td>
                                            <th>DELETE | EDIT</th>
                                        </tr>
                                        <tr>
                                            <td>2012535</td>
                                            <td>HUDA</td>
                                            <td>OFFICER</td>
                                            <td>SECURITY</td>
                                            <th>DELETE | EDIT</th>
                                        </tr>
                                        <tr>
                                            <td>2012535</td>
                                            <td>HUDA</td>
                                            <td>OFFICER</td>
                                            <td>SECURITY</td>
                                            <th>DELETE | EDIT</th>
                                        </tr>
                                        <tr>
                                            <td>2012535</td>
                                            <td>HUDA</td>
                                            <td>OFFICER</td>
                                            <td>SECURITY</td>
                                            <th>DELETE | EDIT</th>
                                        </tr>
                                        <tr>
                                            <td>2012535</td>
                                            <td>HUDA</td>
                                            <td>OFFICER</td>
                                            <td>SECURITY</td>
                                            <th>DELETE | EDIT</th>
                                        </tr>
                                        <tr>
                                            <td>2012535</td>
                                            <td>HUDA</td>
                                            <td>OFFICER</td>
                                            <td>SECURITY</td>
                                            <th>DELETE | EDIT</th>
                                        </tr>
                                        <tr>
                                            <td>2012535</td>
                                            <td>HUDA</td>
                                            <td>OFFICER</td>
                                            <td>SECURITY</td>
                                            <th>DELETE | EDIT</th>
                                        </tr>
                                        <tr>
                                            <td>2012535</td>
                                            <td>HUDA</td>
                                            <td>OFFICER</td>
                                            <td>SECURITY</td>
                                            <th>DELETE | EDIT</th>
                                        </tr>
                                        <tr>
                                            <td>2012535</td>
                                            <td>HUDA</td>
                                            <td>OFFICER</td>
                                            <td>SECURITY</td>
                                            <th>DELETE | EDIT</th>
                                        </tr>
                                        <tr>
                                            <td>2012535</td>
                                            <td>HUDA</td>
                                            <td>OFFICER</td>
                                            <td>SECURITY</td>
                                            <th>DELETE | EDIT</th>
                                        </tr>
                                        <tr>
                                            <td>2012535</td>
                                            <td>HUDA</td>
                                            <td>OFFICER</td>
                                            <td>SECURITY</td>
                                            <th>DELETE | EDIT</th>
                                        </tr>
                                        <tr>
                                            <td>2012535</td>
                                            <td>HUDA</td>
                                            <td>OFFICER</td>
                                            <td>SECURITY</td>
                                            <th>DELETE | EDIT</th>
                                        </tr>
                                        <tr>
                                            <td>2012535</td>
                                            <td>HUDA</td>
                                            <td>OFFICER</td>
                                            <td>SECURITY</td>
                                            <th>DELETE | EDIT</th>
                                        </tr>
                                    </tbody>
                                </table>
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