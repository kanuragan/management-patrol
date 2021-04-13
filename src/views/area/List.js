import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Contentheader from '../../components/Contentheader';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

require('es6-promise').polyfill()
require('isomorphic-fetch');

function List() {
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
                        <div className="card-body">

                        </div>
                        <div className="card-footer">
                            <NavLink to="/area" className="btn btn-sm btn-primary"><i className="fa fa-arrow-left"></i>
                            </NavLink>
                        </div>
                    </div>

                </section>
            </div>
            <Footer />
        </div>
    );
}

export default List;