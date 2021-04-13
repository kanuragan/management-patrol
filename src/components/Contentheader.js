import React from 'react';

const Contentheader = (props) => {
    return (
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">{props.menu}</a></li>
                                <li className="breadcrumb-item active">{props.submenu}</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Contentheader;