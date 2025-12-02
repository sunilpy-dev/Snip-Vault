import { useState, useEffect, lazy, Suspense } from "react";
import 'animate.css';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loggedInContext } from './context/context';
import { ToastContainer } from 'react-toastify';
import { Navigate } from "react-router-dom";
// LAZY LOADING EVERYTHING
const LandingLayout = lazy(() => import("./components/LandingLayout"));
const RootLayout = lazy(() => import("./components/RootLayout"));
const LandingPage = lazy(() => import("./components/LandingPage"));
const About_Landing = lazy(() => import("./components/About_Landing"));
const Login = lazy(() => import("./components/Login"));
const Register = lazy(() => import("./components/Register"));
const ProtectOTP = lazy(() => import("./components/ProtectOTP"));
const OTPreciver = lazy(() => import("./components/OTPreciver"));
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const User_guide = lazy(() => import("./components/User_guide"));
const Notfound = lazy(() => import("./components/Notfound"));


function App() {

  const [loggedIn, setloggedIn] = useState(false)
  const [registerd, setregisterd] = useState(false)
  const [email, setemail] = useState("")
  const [name, setname] = useState("")
  const [username, setusername] = useState("")
  const [tempemail, settempemail] = useState("")
  const [loading, setLoading] = useState(true);   //FIX

  //GLOBAL AUTH CHECK (runs only on refresh or first load)
  useEffect(() => {
    async function verify() {
      try {
        const res = await fetch("http://localhost:3000/verifyUser", {
          method: "GET",
          credentials: "include"
        });

        const data = await res.json();

        if (data.loggedIn) {
          setloggedIn(true);
          setemail(data.user.email);
          setname(data.user.username);
        } else {
          setloggedIn(false);
          setemail("");
          setname("");
        }
      } catch (err) {
        console.log("Verification error:", err);
        setloggedIn(false);
      }

      // setLoading(false);  //Unlock router only after check
    }

    verify();
  }, []);


  const router = createBrowserRouter([
    {
      path: "/",
      element: loggedIn ? <Navigate to="/home" /> : <LandingLayout />,
      children: [
        { path: "/", element: <LandingPage /> },
        { path: "/about_landing", element: <About_Landing /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        {
          path: "/otp",
          element: (
            <ProtectOTP>
              <OTPreciver />
            </ProtectOTP>
          ),
        },
      ],
    },
    {
      element: loggedIn ? <RootLayout /> : <Navigate to="/" />,
      children: [
        { path: "/home", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/user_guide", element: <User_guide /> },

      ],
    },
    { path: "*", element: <Notfound /> },
  ]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        draggable
        pauseOnHover
        theme="dark"
      />

      <loggedInContext.Provider
        value={{
          loggedIn,
          setloggedIn,
          email,
          setemail,
          tempemail,
          settempemail,
          username,
          setusername,
          registerd,
          setregisterd,
          name,
          setname
        }}
      >
        <Suspense fallback={<div style={{padding: 20}}>Loading...</div>}>
          <RouterProvider router={router} />
        </Suspense>
      </loggedInContext.Provider>
    </>
  )
}

export default App
