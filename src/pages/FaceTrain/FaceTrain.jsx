import React from "react";
import { Link } from "react-router-dom";
import styles from "./FaceTrain.module.css";
import DashboardLayout from "../../layouts/dashboard-layout/DashboardLayout";
import { Typography, Breadcrumbs } from "@mui/material";

function FaceTrain() {

  return (
    <DashboardLayout>
      <div className={styles.wrapper}>
        <div className={styles.topWrapper}>
          <h2 className={styles.pageTitle}>Face Train</h2>
          <Breadcrumbs aria-label="breadcrumb" className={styles.breadcumbs}>
            <Link className={styles.breadActive} underline="hover" color="inherit" to="/">
              Home
            </Link>
            <Typography className={styles.breadUnactive}>Face Train</Typography>
          </Breadcrumbs>
        </div>

      </div>
    </DashboardLayout>
  );
}

export default FaceTrain;
