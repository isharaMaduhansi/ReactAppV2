import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/HomePage.css';
import FooterComponent from '../components/FooterComponent';
import LoginForm from '../components/LoginForm';
import 'antd/dist/antd.css';
import { Button } from 'antd';


const LoginPage = () => {
    return (
        <div>
            <div className='bg'>
                <div className='container'>

                    <div className="site-card-border-less-wrapper" style={{height:'350px'}}>
                        <h1 className='m-3'>Login Here</h1>
                        <div><LoginForm/></div>
                        
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>


    )
}

export default LoginPage