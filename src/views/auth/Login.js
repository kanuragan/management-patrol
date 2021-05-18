import React, { useEffect, useState } from 'react';
import axios from 'axios';
//STYLE CSS
import 'admin-lte';
import 'admin-lte/plugins/fontawesome-free/css/all.min.css';
import 'admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css';
import 'admin-lte/dist/css/adminlte.css';

import '../../assets/css/style.css';
import { Redirect } from 'react-router-dom'
//END STYLE;

function Login() {
    const [token, setToken]       = useState(false)    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        setUsername(`${username}`)
        setPassword(`${password}`)
        let payload = {
            client_id: '5',
            client_secret: 'BbCRGpPUSwiRWw5j70Hwyy6qfgrOkQgGU7X9ZCmo',
            username: username,
            password: password,
        }
        axios.post('http://localhost/baseapps-lara/api/login', payload)
        .then(function(response){
            setToken(response.data.data.access_token);
            localStorage.setItem('BASEAPPS_ACCESS_TOKEN', response.data.data.access_token);
            localStorage.setItem('BASEAPPS_REFRESH_TOKEN', response.data.data.refresh_token);
        })
        .catch(function(response){
            localStorage.removeItem('BASEAPPS_ACCESS_TOKEN');
            localStorage.removeItem('BASEAPPS_REFRESH_TOKEN');
            console.log(response)
        })
    }

    const cekToken = () => {
        const cekToken = localStorage.getItem('BASEAPPS_ACCESS_TOKEN');

        if(cekToken) {
            setToken(cekToken)
        }
    }

    useEffect(() => {
        cekToken()
    })

    return (
        
        <div>
            {

            token ? 
                <Redirect to='/dashboard'  />
            
             : null
             
            }
            <div className="hold-transition login-page">
                <div className="login-box">
                <div className="login-logo">
                    <b>Patrol Manager</b>
                </div>
                <div className="card">
                    <div className="card-body login-card-body">
                    <p className="login-box-msg">Sign in to start your session</p>
                    <form onSubmit={submitHandler}>
                        <div className="input-group mb-3">
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} id="username" name="username" className="form-control" placeholder="Email"/>
                        <div className="input-group-append">
                            <div className="input-group-text">
                            <span className="fas fa-envelope"></span>
                            </div>
                        </div>
                        </div>
                        <div className="input-group mb-3">
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" name="password" className="form-control" placeholder="Password"/>
                        <div className="input-group-append">
                            <div className="input-group-text">
                            <span className="fas fa-lock"></span>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-4">
                            <button type="submit" className="btn btn-primary btn-block">Sign In</button>
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

export default Login;