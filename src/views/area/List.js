import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Contentheader from '../../components/Contentheader';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

function List() {
    const token                   = localStorage.getItem('BASEAPPS_ACCESS_TOKEN')
    const [location, setLocation] = useState({})
    const [url, setUrl]           = useState('http://localhost/baseapps-lara/api/locations')
    //DATA
    const [locationCode, setLocationCode] = useState(0)
    const [locationName, setLocationName] = useState(0)
    const [latitude, setLatitude]         = useState(0)
    const [longitude, setLongitude]       = useState(0)
    // MODAL
    const [show, setShow] = useState(false);
    const handleClose     = () => setShow(false);
    const handleShow      = () => setShow(true);
    //API GET LOCATION
    const getLocation = async () => {
        try {
            const header = {
                headers: { Authorization: `Bearer ${token}` }
            };
            let response = await axios.get(url, header)
            setLocation(response.data.data)
        } catch(e) {
            localStorage.removeItem('BASEAPPS_ACCESS_TOKEN')
            localStorage.removeItem('BASEAPPS_REFRESH_TOKEN')
            window.location.href = 'http://localhost:3000'
            console.log('error: ')
        }
    }
    //API POST DATA
    const submitHandler = (e) => {
        e.preventDefault()
        try {
            const header = {
                headers: { Authorization: `Bearer ${token}` }
            };
            const body = {
                location_code: locationCode,
                location_name: locationName,
                lat: latitude,
                lng: longitude,
            }
            axios.post("http://localhost/baseapps-lara/api/addlocation", body , header)
            setShow(false)
            getLocation()
        } catch(e) {
            localStorage.removeItem('BASEAPPS_ACCESS_TOKEN')
            localStorage.removeItem('BASEAPPS_REFRESH_TOKEN')
            window.location.href = 'http://localhost:3000'
            console.log('error: ')
        }
    }

    useEffect(() =>  {
        document.body.className = 'sidebar-mini layout-fixed'
        getLocation()

        navigator.geolocation.getCurrentPosition(function(position) {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        });
        
    },[url]);

    return (
        <div className="wrapper">

            <Header />


            <Sidebar />

            <div className="content-wrapper">

                <Contentheader menu="Area" submenu="List Area" />

                <section className="content">


                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">List Area</h3>

                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                    <i className="fas fa-minus"></i>
                                </button>
                            </div>
                        </div>
                        <button className="btn btn-sm btn-primary" onClick={handleShow}>
                                <span className="fa fa-plus"></span>
                        </button>
                        <div className="card-body">
                            <table id="employee" className="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th width="10%">LOCATION_CODE</th>
                                        <th width="30%">LOCATION_NAME</th>
                                        <th width="15%">LAT</th>
                                        <th width="15%">LNG</th>
                                        <th width="12%">ACTION</th>
                                    </tr>
                                    <tr>
                                        <th width="10%"><input className="form-control" placeholder="search"/></th>
                                        <th width="30%"><input className="form-control" placeholder="search"/></th>
                                        <th width="15%"><input className="form-control" placeholder="search"/></th>
                                        <th width="15%"><input className="form-control" placeholder="search"/></th>
                                        <th width="12%">--</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        location.data?.map((lct, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{lct.location_code}</td>
                                                    <td>{lct.location_name}</td>
                                                    <td>{lct.lat}</td>
                                                    <td>{lct.lng}</td>
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
                                        location.links?.map((lct, index) => {
                                            return (
                                                <div key={index}>
                                                    <li className="page-item"><button className="page-link" onClick={() => setUrl(lct.url)}>{lct.label}</button></li>
                                                </div>
                                            )
                                        })
                                    } 
                            </ul>
                        </div>
                        <div className="card-footer">
                            <NavLink to="/area" className="btn btn-sm btn-primary"><i className="fa fa-arrow-left"></i>
                            </NavLink>
                        </div>
                    </div>

                </section>
            </div>
            <Footer />


            {/* MODAL */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Add Area</Modal.Title>
                </Modal.Header>
                <form onSubmit={submitHandler}>
                    <Modal.Body>
                        <input value={locationCode} onChange={(e) => setLocationCode(e.target.value)} id="locationCode" name="locationCode" className="form-control mb-3" placeholder="Enter Location Code"/>
                        <input value={locationName} onChange={(e) => setLocationName(e.target.value)} id="locationName" name="locationName" className="form-control mb-3" placeholder="Enter Location Name" />
                        <input value={latitude} onChange={(e) => setLatitude(e.target.value)} id="latitude" name="latitude" className="form-control mb-3" placeholder="Enter Latitude" value={latitude}/>
                        <input value={longitude} onChange={(e) => setLongitude(e.target.value)} id="longitude" name="longitude" className="form-control mb-3" placeholder="Enter Longitude" value={longitude}/>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <button className="btn btn-primary">Save Change</button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div>
    );
}

export default List;