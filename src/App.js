import React from "react";
import { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Skeleton } from "antd";
import Dashboard from "./pages/Dashboard/Dashboard";
import FaceTrain from "./pages/FaceTrain/FaceTrain";
import Report from "./pages/Report/Report";
import UserList from "./pages/UserList/UserList";
import Start from "./pages/Start/Start/Start";
import Login from "./pages/Auth/Signin";
import Register from "./pages/Auth/Signup";
const App = () => {
  return (
    <Suspense fallback={<Skeleton />}>
      <Router>
        <Switch>
          <Route exact path="/face-train">
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
          <Route path="/">
            <Dashboard />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;
