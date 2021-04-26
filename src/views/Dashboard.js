import React, { useEffect } from 'react';
import Contentheader from '../components/Contentheader';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Cardinfo from '../components/Cardinfo';

function Dashboard(props) {

    useEffect(() =>  {
        document.body.className = 'hold-transition sidebar-mini layout-fixed';
    });


    return (
            <div className="wrapper">

                <Header />


                <Sidebar />

                <div className="content-wrapper">

                    <Contentheader
                        menu      ="Management Patrol"
                        submenu   ="dashboard"   
                    />
                    
                    <section className="content">

                        <div className="row">
                            <Cardinfo
                                cardStyle  ="small-box bg-info"
                                nilai      ="150"
                                text       ="Employee"
                                iconStyle  ="fa fa-users"
                                linkUri    = "/employee"
                            />

                            <Cardinfo
                                cardStyle  ="small-box bg-success"
                                nilai      ="3.500"
                                text       ="Asset Area"
                                iconStyle  ="fa fa-map"
                                linkUri    = "/employee"
                            />

                            <Cardinfo
                                cardStyle  ="small-box bg-warning"
                                nilai      ="20"
                                text       ="Employee Online"
                                iconStyle  ="fa fa-user"
                                linkUri    = "/employee"
                            />
                            <Cardinfo
                                cardStyle  ="small-box bg-danger"
                                nilai      ="300"
                                text       ="Assignment"
                                iconStyle  ="fa fa-tasks"
                                linkUri    = "/employee"
                            />
                        </div>

                        <div className="row">
                            <div className="col-lg-7 col-6">
                                
                            </div>
                            <div className="col-lg-5 col-6">
                                
                            </div>
                        </div>

                    </section>
                </div>
                <Footer/>
            </div>
    );
}


export default Dashboard;