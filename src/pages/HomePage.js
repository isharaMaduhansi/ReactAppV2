import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/HomePage.css';
import FooterComponent from '../components/FooterComponent';
import 'antd/dist/antd.css';
import { Button } from 'antd';


const HomePage = () => {
    return (
        <div>
            <div className='bg'>
                <div className='container'>

                    <div className="site-card-border-less-wrapper">
                        <h1 className='m-3'>We Ensure Better Education for a <br/> Better World</h1>
                        <p>An integrated set of interactive online services that provides the teachers, <br/>
                            learners, parents information, tools, and resources to support and enhance educational delivery and management. </p>
                        <Button ghost className='m-4'><Link to="/dashboard" className='linkText'> Get Started </Link> </Button> 
                        <Button ghost className='m-4'><Link to="/login" className='linkText'> Login </Link> </Button> 
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>


    )
}

export default HomePage