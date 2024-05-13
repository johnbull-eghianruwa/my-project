import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import './Signup.css';

const Signup = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  })
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement;
    setValues({ ...values, [name]: value });
  };
   const handleSubmit =  async(event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    try {
      const response = await fetch('', {
      method:  'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(values)
      });
      if (response.ok){
        console.log('The response is succefull', 200);
      }
      else{
        console.log('response error', response.status)
      }
    }catch (error){
      console.log('Fetch error', error)
    }
   };
   
   useEffect(() =>{

   }, []);
  return (
    <div className="main-signup">
    <div className="main-page">
    <div className="main-head">
        <h1>Sign up</h1>
    </div>
    <form onSubmit={handleSubmit}>
      <div className="signupPage">
        <div className="signup-input">
            <label htmlFor="email">Name</label>
            <input type="text" name="name" placeholder="Enter name" required onChange={handleChange}/>
        </div>
        <div className="signup-input">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" placeholder="Enter email" required onChange={handleChange} />
        </div>
        <div className="signup-input">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="Enter password" required onChange={handleChange}/>
        </div>
        <div className="signupBtn">
          <button className="btn-m">Sign up</button>
            <p>You are agree to our terms and policies</p>
            <button className="btn-acc">You are already have an account<Link to='/login'> Sign in</Link></button>
        </div>
      </div>
    </form>
    </div>
  </div>
  )
}

export default Signup
