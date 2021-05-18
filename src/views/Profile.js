import React, { useEffect } from 'react';
import Contentheader from '../components/Contentheader';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import fProfile from 'admin-lte/dist/img/user4-128x128.jpg';
import Timelinecard from '../components/Timelinecard';

function Profile(props) {
    
    useEffect(() =>  {
        document.body.className = 'sidebar-mini layout-fixed';
    });

    return (
        <div className="wrapper">

                <Header />


                <Sidebar />

                <div className="content-wrapper">

                    <Contentheader
                        menu      ="Management Patrol"
                        submenu   ="Profile"   
                    />
                    
                        <section className="content">

                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="card card-primary card-outline">
                                            <div className="card-body box-profile">
                                                <div className="text-center">
                                                    <img className="profile-user-img img-fluid img-circle" src={fProfile}
                                                        alt="User profile picture"/>
                                                </div>

                                                <h3 className="profile-username text-center">Nina Mcintire</h3>

                                                <p className="text-muted text-center">Officer Secure</p>
                                            </div>
                                        </div>
                                        <div className="card card-primary">
                                            <div className="card-header">
                                                <h3 className="card-title">About Me</h3>
                                            </div>
                                            <div className="card-body">
                                                <strong><i className="fas fa-book mr-1"></i> Departement</strong>

                                                <p className="text-muted">
                                                    Security
                                                </p>

                                                <hr/>

                                                <strong><i className="fas fa-map-marker-alt mr-1"></i> Location</strong>

                                                <p className="text-muted">Malibu, California</p>

                                                <hr/>

                                                <strong><i className="fas fa-pencil-alt mr-1"></i> Date Of Birth</strong>

                                                <p className="text-muted">
                                                    16 April 1985
                                                </p>

                                                <hr/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card">
                                            <div className="card-header p-2">
                                                <ul className="nav nav-pills">
                                                    <li className="nav-item"><a className="nav-link active" href="#activity" data-toggle="tab">Activity</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="#settings" data-toggle="tab">Settings</a></li>
                                                </ul>
                                            </div>
                                            <div className="card-body">
                                                <div className="tab-content">
                                                    <div className="active tab-pane" id="activity">
                                                        <div className="timeline timeline-inverse">

                                                            <Timelinecard
                                                                bgDate = "bg-danger"
                                                                valDate = "26, Januari 2021"
                                                                icon    = "fas fa-edit bg-info"
                                                                valTime = "17:05"
                                                                valBody = "You have successfully edited your profile"

                                                            />
                                                            <Timelinecard
                                                                bgDate = "bg-success"
                                                                valDate = "26, Januari 2021"
                                                                icon    = "fas fa-sign-in-alt bg-success"
                                                                valTime = "17:05"
                                                                valBody = "you are logged in on the mobile device"

                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="tab-pane" id="settings">
                                                        <form className="form-horizontal">
                                                            <div className="form-group row">
                                                                <label for="inputName" className="col-sm-2 col-form-label">Name</label>
                                                                <div className="col-sm-10">
                                                                    <input type="name" className="form-control" id="inputName" placeholder="Name"/>
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <label for="inputEmail" className="col-sm-2 col-form-label">Email</label>
                                                                <div className="col-sm-10">
                                                                    <input type="email" className="form-control" id="inputEmail" placeholder="Email"/>
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <label for="inputUsername" className="col-sm-2 col-form-label">Username</label>
                                                                <div className="col-sm-10">
                                                                    <input type="text" className="form-control" id="inputUsername" placeholder="Username"/>
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <label for="inputDateOfBirth" className="col-sm-2 col-form-label">DateOfBirth</label>
                                                                <div className="col-sm-10">
                                                                    <input type="date" className="form-control" id="inputDateOfBirth" placeholder="DateOfBirth"/>
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <label for="inputGender" className="col-sm-2 col-form-label">Gender</label>
                                                                <div className="col-sm-10">
                                                                    <select name="gender" id="inputGender" className="form-control">
                                                                        <option>Male</option>
                                                                        <option>Female</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <label for="inputAddress" className="col-sm-2 col-form-label">Address</label>
                                                                <div className="col-sm-10">
                                                                    <textarea className="form-control" id="inputAddress"
                                                                        placeholder="Address"></textarea>
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <label for="inputPhone" className="col-sm-2 col-form-label">Phone</label>
                                                                <div className="col-sm-10">
                                                                    <input type="number" className="form-control" id="inputPhone" placeholder="Phone"/>
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <label for="inputPhoto" className="col-sm-2 col-form-label">Photo</label>
                                                                <div className="col-sm-10">
                                                                    <input type="file" className="form-control" id="inputPhoto" placeholder="Photo"/>
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="offset-sm-2 col-sm-10">
                                                                    <button type="submit" className="btn btn-sm btn-danger">Submit</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
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

export default Profile;