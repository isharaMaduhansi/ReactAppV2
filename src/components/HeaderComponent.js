import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import 'antd/dist/antd.css';
import { DribbbleOutlined } from '@ant-design/icons';

const HeaderComponent = () => {
    return (
        <div>
            <div class="header">
                <div class="header-left"> 
                <a className='logo'><DribbbleOutlined /> iAcademy</a>              
                </div>
               
                <div class="header-right">
                    <div className='d-flex justify-content-end'>
                        <Box
                            sx={{display: 'flex', flexDirection: 'column', alignItems: 'center',
                                '& > *': {
                                    m: 1,
                                },
                            }}
                        >
                            <ButtonGroup variant="text" aria-label="text button group" className='buttongroup'>
                                <Button><Link to="/" className='Buttton'> Home </Link> </Button>
                                <Button>Courses</Button>

                            </ButtonGroup>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderComponent