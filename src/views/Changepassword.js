import React, { useEffect } from 'react';
import Contentheader from '../components/Contentheader';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function Changepassword() {
    
    useEffect(() =>  {
        document.body.className = 'sidebar-closed sidebar-collapse';
    });

    return (
            <div className="wrapper">

            <Header />


            <Sidebar />

            <div className="content-wrapper">

                <Contentheader
                    menu      ="Management Patrol"
                    submenu   ="change password"   
                />
                
                <section className="content">


                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Change Password</h3>

                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                    <i className="fas fa-minus"></i>
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            <form className="form-horizontal">
                                <div className="form-group row">
                                    <label for="inputOldPassword" className="col-sm-2 col-form-label">Old Password</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="inputOldPassword" placeholder="Old Password"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="inputNewPassword" className="col-sm-2 col-form-label">New Password</label>
                                    <div className="col-sm-10">
                                        <input type="password" className="form-control" id="inputNewPassword" placeholder="New Password"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="inputConfirmPassword" className="col-sm-2 col-form-label">Confirm Password</label>
                                    <div className="col-sm-10">
                                        <input type="password" className="form-control" id="inputConfirmPassword" placeholder="Confirm Password"/>
                                    </div>
                                </div>
                                <button className="btn btn-sm btn-primary"> simpan</button>
                            </form>
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

export default Changepassword;