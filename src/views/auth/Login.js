import React from 'react';
import 'admin-lte';

//STYLE CSS
import 'admin-lte/plugins/fontawesome-free/css/all.min.css';
import 'admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css';
import 'admin-lte/dist/css/adminlte.css';

import '../../assets/css/style.css';
//END STYLE;

function login() {
    return (
        <div>
            <div className="hold-transition login-page">
                <div className="login-box">
                <div class="login-logo">
                    <b>Patrol Manager</b>
                </div>
                <div class="card">
                    <div class="card-body login-card-body">
                    <p class="login-box-msg">Sign in to start your session</p>
                    <form>
                        <div class="input-group mb-3">
                        <input type="email" class="form-control" placeholder="Email"/>
                        <div class="input-group-append">
                            <div class="input-group-text">
                            <span class="fas fa-envelope"></span>
                            </div>
                        </div>
                        </div>
                        <div class="input-group mb-3">
                        <input type="password" class="form-control" placeholder="Password"/>
                        <div class="input-group-append">
                            <div class="input-group-text">
                            <span class="fas fa-lock"></span>
                            </div>
                        </div>
                        </div>
                        <div class="row">
                        <div class="col-4">
                            <button type="submit" class="btn btn-primary btn-block">Sign In</button>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default login;