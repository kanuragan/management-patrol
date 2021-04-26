import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Contentheader from '../../components/Contentheader';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

function AddMarkerToClick() {

    const [markers, setMarkers] = useState([])
    const [lat, setLat] = useState(null)
    const [lng, setLng] = useState(null)
    const map = useMapEvents({
      click(e) {
        const newMarker = e.latlng
        setMarkers([...markers, newMarker])
        setLat(newMarker.lat)
        setLng(newMarker.lng)
      },
    })
  
    return (
      <>
        {markers.map(marker => 
          <Marker position={marker}>
            <Popup>Marker is at lat : {lat} and long : {lng}</Popup>
          </Marker>
        )}
      </>
    )
  }

function Area() {

    useEffect(() =>  {
        document.body.className = 'hold-transition sidebar-mini layout-fixed';
    });

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
                                <AddMarkerToClick />
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