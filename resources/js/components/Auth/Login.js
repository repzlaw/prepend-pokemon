import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import BASE_URL from '../../Constant'
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [errors,setErrors] = useState('');
    const navigate = useNavigate();

    const emailHandler = (e)=>{
        setEmail(e.target.value)
        setErrors('');
    }
    const passwordHandler = (e)=>{
        setPassword(e.target.value)
        setErrors('');

    }

    const LoginHandler = (e)=>{
        e.preventDefault()
        const data = {
            email,password
        }
        axios
        .post(`${BASE_URL}/login`,data)
        .then(res=>{
            console.log(res.data.token)
            localStorage.setItem('token',res.data.token)
            navigate("/");
        })
        .catch(err=>{
            setErrors(err.response.data.message)
        })
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Login</div>

                        <div className="card-body">
                            <div className='text-danger mb-2'>
                                
                                 <li className='list'>{errors}</li>
                            </div>
                            <form onSubmit={LoginHandler}>
                                <div className="form-group">
                                    <div className="input-group mb-2" >
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> email</span>
                                        </div>
                                        <input type="email" value={email} className="form-control"  onChange={emailHandler} required />
                                    </div>
                                    <div className="input-group mb-2" >
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> password</span>
                                        </div>
                                        <input type="password" value={password} className="form-control"  onChange={passwordHandler} required />
                                    </div>
                            
                                </div>
                                <button type="submit" className="btn btn-success float-end" >Login  </button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

