import logo from './logo.svg';
import './App.css';
import {Route,Routes} from "react-router-dom"
import Home from "./Components/common/Home"
import Header from './Components/common/Header';
import NavBar from './Components/common/Navbar';
import Login from './Pages/Login';
import ProductsPage from './Components/Core/products/ProductPage';
import EnrolledCourses from './Components/Core/Dashboard/EnrolledCourses';
import AddCourse from './Components/Core/Dashboard/AddCourse/index';
import CourseDetails from './Pages/CourseDetails';
import MyProfile from './Components/Core/Dashboard/MyProfile';
import SignInForm from './Components/Core/auth/SignInForm';
import VerifyOtp from './Pages/VerifyOtp';




function App() {
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {};
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
            <Header/>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/signin" element={<SignInForm />}/>

              {/* <Route path="/products" element={<ProductsPage />} /> */}
              <Route path="/healthPlan" element={<ProductsPage />}  />
              <Route path="/verify-email" element={<VerifyOtp />} />

              <Route
                path="/dashboard/enrolled-courses"
                element={<EnrolledCourses />}
              />
                      <Route path="dashboard/add-course" element={<AddCourse />} />
                      <Route path="/courses/:courseId" element={<CourseDetails />} />
                      <Route path="dashboard/my-profile" element={<MyProfile />} />


            </Routes>


      
    </div>
  );
}

export default App;
