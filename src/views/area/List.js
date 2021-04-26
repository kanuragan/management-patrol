import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Contentheader from '../../components/Contentheader';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

//jquery
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'

function List() {
    useEffect(() =>  {
        //init nav
        document.body.className = 'hold-transition sidebar-mini layout-fixed';
        $('#list-area').DataTable( {
            "processing": true,
            "serverSide": true,
            "ajax":{
                url :"http://localhost/api/data.php",
                type: "post",
                error: function(){
                    $("#list-area").append('<tbody class="dataku-error"><tr><th colspan="3">Tidak ada data untuk ditampilkan</th></tr></tbody>');
                    $("#list-area").css("display","none");
                    
                }
            }
        });
    });

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
                            <div className="table-responsive">
                                <table id="list-area" className="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>userId</th>
                                            <th>id</th>
                                            <th>Title</th>
                                            <th>action</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
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