import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { NavLink } from 'react-router-dom';
import Contentheader from '../../components/Contentheader';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

function Area() {
    return (
        <div className="wrapper">

            <Header />


            <Sidebar />

            <div className="content-wrapper">

                <Contentheader menu="Management Patrol" submenu="Area" />

                <section className="content">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Asset Map</h3>

                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                    <i className="fas fa-minus"></i>
                                </button>
                            </div>
                            </div>
                        <div className="card-body">
                            <MapContainer center={[-6.288379271781812, 107.12317583920273]} zoom={13} scrollWheelZoom={false}>
                                <TileLayer
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={[-6.288379271781812, 107.12317583920273]}>
                                    <Popup>
                                        PT. Cikarang Listrindo. <br />
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                        <div className="card-footer">
                            <NavLink to="/area/list-area" className="btn btn-sm btn-primary"><i className="fa fa-list"></i> </NavLink>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default Area;