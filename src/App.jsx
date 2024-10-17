
import './index.css';
import Home from './webpages/otherpagrs/Home/Home';
import Courses from './webpages/otherpagrs/cources/Courses';

import { Route, Routes } from 'react-router-dom';
import Login from './webpages/Auth/Logincompnant/Login';
import Signup from './webpages/Auth/SignUp/Signup';
import { UserProvider } from './webpages/Context/Usercontext';
import CourseDetalis from './webpages/otherpagrs/cources/CourseDetalis';
// import RequierAuth from './webpages/Auth/RequierAuth';
import Instructor from './webpages/otherpagrs/Instructor/Instructor/Instructor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import  Profileclient from "./webpages/otherpagrs/Instructor/Client/profileclient"
import Myprofile from './components/Myprofile';
import { Navigate } from 'react-router-dom';
import Homeprofile from "./components/Homeprofile"
import Mycourses from './components/Mycourses';

export default function App() {
    return (
        <UserProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<><Courses /><Footer /></>} />
                
                <Route path="/details/:id" element={<CourseDetalis />} />
              
                <Route path="/instructor" element={<><Navbar /><Instructor /></>} />
                <Route path='/Auth'>
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                </Route>
           
            
                <Route path='/Profileclient' element={<Profileclient />}>
                    <Route index element={<Navigate to="profilehome" />} />
                    <Route path='profilehome' element={<Homeprofile />} />
                    <Route path='myaccount' element={<Myprofile />} />
                    <Route path='mycourses' element={<Mycourses/>} />
                </Route>
            </Routes>
        </UserProvider>
    );
}

