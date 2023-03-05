import React from "react";
import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Skeleton } from "antd";
import Dashboard from "./pages/Dashboard/Dashboard";
import FaceTrain from "./pages/FaceTrain/FaceTrain";
import Report from "./pages/Report/Report";
import Device from "./pages/UserList/UserList";
import Start from "./pages/Start/Start/Start";
import Login from "./pages/Auth/Signin";
import Register from "./pages/Auth/Signup";
import Profile from "./pages/Profile/Profile";
import AddProfile from "./pages/Profile/AddProfile";
import ForgotPassword from "./pages/Auth/ForgotPassword";
const App = () => {
  return (
    <Suspense fallback={<Skeleton />}>
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/login" element={<Login />}> </Route>
          <Route path="/register" element={<Register />} ></Route>
          <Route path="/forgot-password" element={<ForgotPassword />} ></Route>
          <Route path="/face-train" element={<FaceTrain />} ></Route>
          <Route path="/report" element={<Report />} ></Route>
          <Route path="/start" element={<Start />} ></Route>
          <Route path="/device" element={<Device />} ></Route>
          <Route path="/profile" element={<Profile />} ></Route>
          <Route path="/addprofile" element={<AddProfile />} ></Route>
        </Routes>
      </Router>
    </Suspense>
  );
};

export default App;
