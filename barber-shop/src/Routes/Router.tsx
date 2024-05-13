import Home from '../Pages/Home/Home';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import About from "../Pages/About";
import Services from '../Pages/Services';
import Styles from '../Pages/Styles';
import BookVisit from '../Pages/BookVisit';
import Blogs from '../Pages/Blogs';
import Review from '../Pages/Review';

import { Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <div>
         
        <Routes>
            <Route path="/" Component={Home}/>
            <Route path="/login" Component={Login}/>
            <Route path="/signup" Component={Signup}/>
            <Route path="/about" Component={About} />
            <Route path='/services' Component={Services} />
            <Route path='/styles' Component={Styles} />
            <Route path='/blogs' Component={Blogs} />
            <Route path='/bookVisit' Component={BookVisit} />
            <Route path='review' Component={Review} />
        </Routes>
    </div>
  )
}

export default Router
