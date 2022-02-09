import React from 'react'
import NavBarComponent from '../components/NavBarComponent';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import CountChartComponent from '../components/CountChartComponent';
import AttendenceChartComponent from '../components/AttendenceChartComponent';
import StudentGenderChart from '../components/StudentGenderChart';
import NetProfitChart from '../components/NetProfitChart';
import ExpenseChart from '../components/ExpenseChart';
import NotificationBar from '../components/NotificationBar';
import '../styles/Dashboard.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PersonIcon from '@mui/icons-material/Person';
import {  grey} from '@mui/material/colors';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import GroupIcon from '@mui/icons-material/Group';


const Dashboard = () => {

  const studentAttendence = [43, 58, 74, 81, 85]
  const category = ["2020 Sep", "2020 Oct", "2020 Nov", "2020 Dec", "2021 Jan"]  // simple letters
  const teacherAttendence = [73, 88, 94, 61, 75]

  return (
    <div >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={2} md={2}>
            <div className='sideBar'>
              <NavBarComponent />
            </div>
          </Grid>
          <Grid item xs={12} sm={10} md={10}>
            <div className='content'>
              <h3 className='m-3 topic'>Admin Dashboard</h3>
              <BreadcrumbComponent page="Dashboard" />
              <br />
              <div className='m-3'>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} md={3}>
                  <CountChartComponent title='Students' count='20000' icon={<PersonIcon sx={{ fontSize: 40, color: grey[500]  }} />}/>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                  <CountChartComponent title='Teachers' count='500' icon={<AccountCircleIcon sx={{ fontSize: 40, color: grey[700]  }} />}/>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                  <CountChartComponent title='Parents' count='15000' icon={<AssignmentIndIcon sx={{ fontSize: 40, color: grey[600]  }} />}/>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                  <CountChartComponent title='Total Users' count='35500' icon={<GroupIcon sx={{ fontSize: 40, color: grey[700]  }} />}/>
                  </Grid>
                </Grid>
              </div>

              <br />
              <div className='m-3'>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} md={8} >
                    <AttendenceChartComponent student = { studentAttendence } teacher={ teacherAttendence } categories= {category}/>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                  <StudentGenderChart/>
                  </Grid>
                </Grid>
              </div>

              <br />
              <div className='m-3'>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={4}>
                  <NetProfitChart/>
                  </Grid>
                  <Grid item xs={12} sm={12} md={4}>
                  <ExpenseChart/>
                  </Grid>
                  <Grid item xs={12} sm={12} md={4}>
                  <NotificationBar/>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>

    </div>
  )
}

export default Dashboard