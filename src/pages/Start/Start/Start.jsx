import React, { useCallback, useRef, useState, useEffect } from "react";
import { Navigate, Link } from "react-router-dom";
import styles from "./Start.module.css";
import DashboardLayout from "../../../layouts/dashboard-layout/DashboardLayout";
import { Typography, Breadcrumbs } from "@mui/material";
import { Space, Table, Tag } from 'antd';
import Button from '@mui/material/Button'; 
import Webcam from "react-webcam";
import axios from "axios";
const baseURL = "http://localhost:3000/datawajah/hasilpredict";
// const columns = [
//     {
//         title: 'Datatime',
//         dataIndex: 'Datatime',
//         key: 'Datatime',
//         render: (text) => <a>{text}</a>,
//     },
//     {
//         title: 'Name',
//         dataIndex: 'Name',
//         key: 'Name',
//     },
//     {
//         title: 'Photo',
//         dataIndex: 'Photo',
//         key: 'Photo',
//     },
//     {
//         title: 'Temperature',
//         dataIndex: 'Temperature',
//         key: 'Temperature',
//     },
//     {
//         title: 'Status Temp',
//         dataIndex: 'StatusTemp',
//         key: 'StatusTemp',
//     },
// ];
// const data = [
//     {
//         key: '1',
//         Datatime: 0,
//         Name: 0,
//         Photo: 0,
//         Temperature: 0,
//         StatusTemp: 0,
//     },
// ];

function Start() {
    const token = localStorage.getItem("token");

    const [base64, setBase64] = useState(null);
    const [data, setData] = useState("");
    const [nama, setNama] = useState("");
    const [suhu, setSuhu] = useState("");
    const [status, setStatus] = useState("");
    const webcamRef = useRef(null);
    
    const videoConstraints = {
      width: 420,
      height: 420,
      facingMode: "user",
    };
   
    useEffect(() => {
        const intervalId = setInterval(() => {
          capture();
        }, 5000);
    
        return () => {
          clearInterval(intervalId);
        };
      }, []);
    const capture = useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      const encodedString = imageSrc.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');
      setBase64(imageSrc);
      console.log(encodedString)
      axios.post(baseURL, { base64: encodedString }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
      }).then((responce)=>{
        console.warn(responce.data)
        setNama(responce.data.newface.nama)
        setSuhu(responce.data.newface.suhu)
        setStatus(responce.data.newface.statusSuhu)
      })
    }, [webcamRef]);
    
    if (!token) {
      return <Navigate to={"/login"} />;
    }
    return (
        <DashboardLayout>
            <div className={styles.wrapper}>
                <div className={styles.topWrapper}>
                    <h2 className={styles.pageTitle}>Pengenalan Wajah</h2>
                    <Breadcrumbs aria-label="breadcrumb" className={styles.breadcumbs}>
                        <Link className={styles.breadActive} underline="hover" color="inherit" to="/dashboard">
                            Home
                        </Link>
                        <Typography className={styles.breadUnactive}>Pengenalan Wajah</Typography>
                    </Breadcrumbs>
                </div>
                <div className={styles.main}>
                    <div className={styles.mainTitle}>
                        <h1 className={styles.mainTitleText}>Selamat Datang</h1>
                        <h1 className={styles.mainTitleText}>Silahkan Masuk</h1>
                    </div>
                    <div className={styles.mainCamera}>
            {base64 === null ? (
              <>
                <Webcam className={styles.mainwebcam}
                  audio={false}
                  mirrored={true}
                  height={300}
                  width={300}
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  videoConstraints={videoConstraints}
                /> <br />
                <Button className={styles.button} onClick={capture} variant="contained" component="label">
                  Ambil Gambar
                </Button>
              </>
            ) : (
              <>
                <img src={base64} alt="screenshot" /> <br />
                <Button className={styles.button} onClick={() => setBase64(null)}  variant="danger" component="label">Ambil Ulang</Button>
              </>
            )}
          </div>
                    <div className={styles.mainDescription}>
                        <div className={styles.mainDescLeft}>30 <span>&#8451;</span></div>
                        <div className={styles.mainDescRight}>
                            <p className={styles.descTop}>Suhu Tubuh Anda</p>
                            <p className={styles.descBottom}>Normal</p>
                        </div>
                    </div>
                    <div className={styles.mainDescription}>
                        <div className={styles.mainDescLeft}>zaid</div>
                    </div>
                    {/* <div className={styles.mainTable}>
                        <Table columns={columns} dataSource={data} />
                    </div> */}
                </div>
            </div>
        </DashboardLayout>
    );
}

export default Start;
