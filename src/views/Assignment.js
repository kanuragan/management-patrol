import React, { useEffect, useState } from 'react';
import Contentheader from '../components/Contentheader';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Cardinfo from '../components/Cardinfo';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

function Assignment(props) {
    const token                       = localStorage.getItem('BASEAPPS_ACCESS_TOKEN')
    const [assignment, setAssignment] = useState({})
    const [url, setUrl]               = useState('http://localhost/baseapps-lara/api/assignment')

    const getAssignment = async () => {
        try {
            const header = {
                headers: { Authorization: `Bearer ${token}` }
            };
            let response = await axios.get(url, header)
            setAssignment(response.data.data)
        } catch(e) {
            localStorage.removeItem('BASEAPPS_ACCESS_TOKEN')
            localStorage.removeItem('BASEAPPS_REFRESH_TOKEN')
            window.location.href = 'http://localhost:3000'
            console.log('error: ')
        }
    }

    useEffect(() =>  {
        document.body.className = 'sidebar-mini layout-fixed'
        getAssignment()
    },[url]);


    return (
            <div className="wrapper">

            {

            !token ? 
                <Redirect to='/'  />

            : null
            
            }

                <Header />


                <Sidebar />

                <div className="content-wrapper">

                    <Contentheader
                        menu      ="Management Patrol"
                        submenu   ="Assignment"   
                    />
                    
                    <section className="content">

                        <div className="row">
                            <Cardinfo
                                cardStyle  ="small-box bg-info"
                                nilai      ="150"
                                text       ="TODAY"
                                iconStyle  ="fa fa-list"
                                linkUri    = "/employee"
                            />

                            <Cardinfo
                                cardStyle  ="small-box bg-success"
                                nilai      ="3.500"
                                text       ="CLOSED"
                                iconStyle  ="fa fa-check"
                                linkUri    = "/employee"
                            />

                            <Cardinfo
                                cardStyle  ="small-box bg-warning"
                                nilai      ="20"
                                text       ="PENDING"
                                iconStyle  ="fa fa-clock"
                                linkUri    = "/employee"
                            />
                            <Cardinfo
                                cardStyle  ="small-box bg-danger"
                                nilai      ="300"
                                text       ="CANCEL"
                                iconStyle  ="fa fa-trash"
                                linkUri    = "/employee"
                            />
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Assignment Data</h3>

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
                                                <th width="20%">DAY</th>
                                                <th width="15%">USER_ID</th>
                                                <th width="15%">LOCATION_CODE</th>
                                                <th width="30%">DESC</th>
                                                <th width="12%">STATUS</th>
                                                <th width="15%">ACTION</th>
                                            </tr>
                                            <tr>
                                                <th width="20%"><input className="form-control" placeholder="search"/></th>
                                                <th width="15%"><input className="form-control" placeholder="search"/></th>
                                                <th width="15%"><input className="form-control" placeholder="search"/></th>
                                                <th width="12%"><input className="form-control" placeholder="search"/></th>
                                                <th width="10%"><input className="form-control" placeholder="search"/></th>
                                                <th width="15%">--</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                assignment.data?.map((asg, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{asg.day}</td>
                                                            <td>{asg.user_id}</td>
                                                            <td>{asg.location_id}</td>
                                                            <td>{asg.assignment_name}</td>
                                                            <td>{asg.status}</td>
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
                                                assignment.links?.map((asg, index) => {
                                                    return (
                                                        <div key={index}>
                                                            <li className="page-item"><button className="page-link" onClick={() => setUrl(asg.url)}>{asg.label}</button></li>
                                                        </div>
                                                    )
                                                })
                                            } 
                                    </ul>
                                </div>
                                <div className="card-footer">

                                </div>
                            </div>
                            </div>
                        </div>

                    </section>
                </div>
                <Footer/>
            </div>
    );
}


export default Assignment;