import React from "react";
import { Link, Navigate } from "react-router-dom";
import styles from "./DashboardNav.module.css";
import { NavDropdown } from "react-bootstrap";
import { Tooltip } from "antd";
import { FaUserCircle } from "../../../assets/assets";
import { MdNotifications } from "react-icons/md";
function DashboardNav() {
  const token = localStorage.getItem("token");
  const nama = localStorage.getItem("Nama");
  const keluar = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("Email");
    localStorage.removeItem("Nama");
  };
  if (!token) {
    return <Navigate to={"/login"} />;
  }
  return (
    <div className={styles.wrapper}>

      <div className={styles.container}>
        <div className={styles.left}>
          <h4 className={styles.leftTitle}>FARE DOOR</h4>
        </div>
        <div className={styles.right}>
          <Link className={styles.iconUserBox} to={{ pathname: "/profile", search: "?type=notifikasi" }}>
            <Tooltip placement="bottom" title={"Notifikasi"}>
              <MdNotifications className={styles.iconUser} />
            </Tooltip>
          </Link>
          <div className={styles.user}>
            <FaUserCircle className={styles.navbarAvatar} />
            <NavDropdown className={styles.dropdownContainer} title={<span className={styles.userName}>{nama}</span>}>
              <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/" onClick={keluar}>Keluar</NavDropdown.Item>
            </NavDropdown>
          </div>
        </div>
      </div>

    </div>
  );
}

export default DashboardNav;
