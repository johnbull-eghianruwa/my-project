import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5173/Login', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(values)
      });
      if (response.ok) {
        console.log('The response is successful', 200);
        navigate('/home'); // Redirect to the home page
      } else {
        console.log('response error', response.status);
      }
    } catch (error) {
      console.log('Fetch error', error);
    }
  };

  useEffect(() => {
    const emailInput = document.querySelector('input[name="email"]');
    const passwordInput = document.querySelector('input[name="password"]');

    const handleInput = (event ) => {
      handleChange(event);
    };

    if (emailInput && passwordInput) {
      emailInput.addEventListener('input', handleInput);
      passwordInput.addEventListener('input', handleInput);

      return () => {
        emailInput.removeEventListener('input', handleInput);
        passwordInput.removeEventListener('input', handleInput);
      };
    }
  }, []);

  return (
    <div className="main-login">
      <div className="main-page">
        <div className="main-head">
          <h1>Login</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="loginPage">
            <div className="login-input">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                placeholder="Enter email"
                required
                onChange={handleChange}
              />
            </div>
            <div className="login-input">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                required
                onChange={handleChange}
              />
            </div>
            <div className="loginBtn">
              <button type="submit" className="btn-n">
                Login
              </button>
              <p>You agree to our terms and policies</p>
              <Link to="/signup" className="btn-ac">
                Create Account
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;