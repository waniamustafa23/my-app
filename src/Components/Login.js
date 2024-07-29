import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Card } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import IMAGE from '../images/login_banner-removebg-preview.png';

const Login = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    navigate('/dashboard');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', position: 'relative' }}>
      {/* Left side (form) */}
      <div style={{ width: '50%', display: 'flex', justifyContent: 'center' }}>
        <Card style={{ width: 400, padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Login</h1>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}>
                Log in
              </Button>
              <br />
              
              <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item> Or <Link to="/register">register now!</Link>
            </Form.Item>
            
          </Form>
        </Card>
      </div>

      {/* Right side (image) */}
      <div style={{ width: '50%', textAlign: 'center' }}>
        {/* Replace the URL with your image */}
        <img src={IMAGE} style={{ maxWidth: '90%',  }} />
      </div>

      {/* Top left logo */}
      <div style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 999, width: '60px', height: '60px' }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-cXFuavrc6SQ1s7DJvs55FQ-BF0bqYSM-iw&s"
          alt="logo"
          style={{ width: '100%', height: '100%', borderRadius: '50%' }}
        />
      </div>
    </div>
  );
};

export default Login;
