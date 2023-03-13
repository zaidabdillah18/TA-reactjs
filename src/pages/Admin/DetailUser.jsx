import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import styles from "./TampilWajah.module.css";
import DashboardLayout from "../../layouts/dashboard-layout/DashboardLayout";
import { Typography, Breadcrumbs } from "@mui/material";
import Table from 'react-bootstrap/Table';
import axios from "axios";
import { format } from 'date-fns';
function DetailUser() {
  const token = localStorage.getItem("token");
  const [data, setData] = useState("");
//   useEffect(() => {
//     axios.get(`http://localhost:3000/admin/tampilwajah`, {
//       headers: {
//         'Authorization': `Bearer ${localStorage.getItem('token')}`,
//       }
//     })
//       .then((res) => {
//         console.log(res.data.data)
//         setData(res.data.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
  if (!token) {
    return <Navigate to={"/login"} />;
  }
  return (
    <DashboardLayout>
      <div className={styles.wrapper}>
        <div className={styles.topWrapper}>
          <h2 className={styles.pageTitle}>Detail User</h2>
          <Breadcrumbs aria-label="breadcrumb" className={styles.breadcumbs}>
          <Link className={styles.breadActive} underline="hover" color="inherit" to="/dashboard">
                Home
              </Link>
            <Typography className={styles.breadUnactive}>Detail User</Typography>
          </Breadcrumbs>
        </div>
      
        <div className="container mt-4">
                        <div className="row profile">
                            {/* <div className="col-md-4">
                                <div className="profile-sidebar">
                               
                                   
                                </div>
                            </div> */}
                            <div className="col-md-12">
                                <div className="profile-content">
                                   
                                    <div className="row g-3">
                                        <h3 className="d-flex align-items-center mb-3">
                                           Data User
                                        </h3>
                                        <div>
                                            <div className="col-md-6" > </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>      

      </div>
    </DashboardLayout>
  );
}

export default DetailUser;
