import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Card } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import IMAGE from '../images/login banner.jpg';

const Register = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    navigate('/dashboard');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#ADD8E6', position: 'relative' }}>
      {/* Left side (form) */}
      <div style={{ width: '50%', display: 'flex', justifyContent: 'center' }}>
        <Card style={{ width: 400, padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <Form
            name="register"
            className="register-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Register</h1>
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
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your Email!',
                },
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
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

            <Form.Item
              name="confirm"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The two passwords do not match!'));
                  },
                }),
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Confirm Password"
              />
            </Form.Item>

            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="#">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}>
                Register
              </Button>
              <br />
              Or <Link to="/login">log in now!</Link>
            </Form.Item>
          </Form>
        </Card>
      </div>

      {/* Right side (image) - You can optionally add an image on the right side if needed */} */}
      <div style={{ width: '50%', textAlign: 'center' }}>
        <img src={IMAGE} style={{ maxWidth: '90%', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
      </div>

      {/* Top left logo - You can add your logo here as in the Login component */}
      /* <div style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 999, width: '60px', height: '60px' }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-cXFuavrc6SQ1s7DJvs55FQ-BF0bqYSM-iw&s"
          alt="logo"
          style={{ width: '100%', height: '100%', borderRadius: '50%' }}
        />
      </div>
    </div>
  );
};

export default Register;
