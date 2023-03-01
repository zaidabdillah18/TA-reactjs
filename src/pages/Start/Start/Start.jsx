import React from "react";
import { Link } from "react-router-dom";
import styles from "./Start.module.css";
import DashboardLayout from "../../../layouts/dashboard-layout/DashboardLayout";
import { Typography, Breadcrumbs } from "@mui/material";
import { Space, Table, Tag } from 'antd';

const columns = [
    {
        title: 'Datatime',
        dataIndex: 'Datatime',
        key: 'Datatime',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Name',
        dataIndex: 'Name',
        key: 'Name',
    },
    {
        title: 'Photo',
        dataIndex: 'Photo',
        key: 'Photo',
    },
    {
        title: 'Temperature',
        dataIndex: 'Temperature',
        key: 'Temperature',
    },
    {
        title: 'Status Temp',
        dataIndex: 'StatusTemp',
        key: 'StatusTemp',
    },
];
const data = [
    {
        key: '1',
        Datatime: 0,
        Name: 0,
        Photo: 0,
        Temperature: 0,
        StatusTemp: 0,
    },
];

function Start() {

    return (
        <DashboardLayout>
            <div className={styles.wrapper}>
                <div className={styles.topWrapper}>
                    <h2 className={styles.pageTitle}>Start</h2>
                    <Breadcrumbs aria-label="breadcrumb" className={styles.breadcumbs}>
                        <Link className={styles.breadActive} underline="hover" color="inherit" to="/dashboard">
                            Home
                        </Link>
                        <Typography className={styles.breadUnactive}>Start</Typography>
                    </Breadcrumbs>
                </div>
                <div className={styles.main}>
                    <div className={styles.mainTitle}>
                        <h1 className={styles.mainTitleText}>Selamat Datang</h1>
                        <h1 className={styles.mainTitleText}>Silahkan Masuk</h1>
                    </div>
                    <div className={styles.mainCamera}>Taruh Kamera disini</div>
                    <div className={styles.mainDescription}>
                        <div className={styles.mainDescLeft}>36 C</div>
                        <div className={styles.mainDescRight}>
                            <p className={styles.descTop}>Suhu Tubuh Anda</p>
                            <p className={styles.descBottom}>NORMAL</p>
                        </div>
                    </div>
                    <div className={styles.mainTable}>
                        <Table columns={columns} dataSource={data} />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

export default Start;
