import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Checkbox } from 'antd';
import '../styles/LoginForm.css';


const LoginForm = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return (
        <div style={{textAlign:'center'}}>
        <div className='loginForm'>
           <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item className='label'
        label={<label style={{ color: "Lightgray" }}>Username</label>}
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item 
         label={<label style={{ color: "Lightgray" }}>Password</label>}
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox style={{ color: "Lightgray" }}>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button ghost style={{marginRight:'10px'}}><Link className='linkText'> Submit </Link> </Button> 
        <Button ghost><Link to="/" className='linkText'> Cancel </Link> </Button> 
      </Form.Item>
    </Form>
        </div>
        </div>
    )
}

export default LoginForm