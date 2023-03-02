import React from "react";
import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Skeleton } from "antd";
import Dashboard from "./pages/Dashboard/Dashboard";
import FaceTrain from "./pages/FaceTrain/FaceTrain";
import Report from "./pages/Report/Report";
import UserList from "./pages/UserList/UserList";
import Start from "./pages/Start/Start/Start";
import Login from "./pages/Auth/Signin";
import Register from "./pages/Auth/Signup";
import ForgotPassword from "./pages/Auth/ForgotPassword";
const App = () => {
  return (
    <Suspense fallback={<Skeleton />}>
      <Router>
        {/* <Route exact path="/face-train">
            <FaceTrain />
          </Route>
          <Route path="/report">
            <Report />
          </Route>
          <Route path="/user-list">
            <UserList />
          </Route>
          <Route path="/start">
            <Start />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/forgot-password">
            <ForgotPassword />
          </Route> */}
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/login" element={<Login />}> </Route>
          <Route path="/register" element={<Register />} ></Route>
          <Route path="/forgot-password" element={<ForgotPassword />} ></Route>
          <Route path="/face-train" element={<FaceTrain />} ></Route>
          <Route path="/report" element={<Report />} ></Route>
          <Route path="/start" element={<Start />} ></Route>
        </Routes>
      </Router>
    </Suspense>
  );
};

export default App;
