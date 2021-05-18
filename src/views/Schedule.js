import React, { useEffect, useState } from 'react';
import Contentheader from '../components/Contentheader';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Cardinfo from '../components/Cardinfo';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

function Schedule() {
    const token                   = localStorage.getItem('BASEAPPS_ACCESS_TOKEN')
    const [schedule, setSchedule] = useState({})
    const [url, setUrl]           = useState('http://localhost/baseapps-lara/api/schedule')

    const getSchedule = async () => {
        try {
            const header = {
                headers: { Authorization: `Bearer ${token}` }
            };
            let response = await axios.get(url, header)
            setSchedule(response.data.data)
        } catch(e) {
            localStorage.removeItem('BASEAPPS_ACCESS_TOKEN')
            localStorage.removeItem('BASEAPPS_REFRESH_TOKEN')
            window.location.href = 'http://localhost:3000'
            console.log('error: ')
        }
    }

    useEffect(() =>  {
        document.body.className = 'sidebar-mini layout-fixed'
        getSchedule()
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
                        submenu   ="Schedule"   
                    />
                    
                    <section className="content">

                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Schedule Data</h3>

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
                                                <th width="15%">LOCATION_CODE</th>
                                                <th width="12%">STATUS</th>
                                                <th width="10%">ACTION</th>
                                            </tr>
                                            <tr>
                                                <th width="20%"><input className="form-control" placeholder="search"/></th>
                                                <th width="15%"><input className="form-control" placeholder="search"/></th>
                                                <th width="12%"><input className="form-control" placeholder="search"/></th>
                                                <th width="10%">--</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                schedule.data?.map((asg, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{asg.day}</td>
                                                            <td>{asg.location_id}</td>
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
                                                schedule.links?.map((asg, index) => {
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


export default Schedule;