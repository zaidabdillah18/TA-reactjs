import React from "react";
import { Link } from "react-router-dom";
import styles from "./DashboardNav.module.css";
import { NavDropdown } from "react-bootstrap";
import { Tooltip } from "antd";
import { FaUserCircle } from "../../../assets/assets";
import { MdNotifications } from "react-icons/md";
function DashboardNav() {

  return (
    <div className={styles.wrapper}>

      <div className={styles.container}>
        <div className={styles.left}>
          <h4 className={styles.leftTitle}>Super Administrator</h4>
        </div>
        <div className={styles.right}>
          <Link className={styles.iconUserBox} to={{ pathname: "/profile", search: "?type=notifikasi" }}>
            <Tooltip placement="bottom" title={"Notifikasi"}>
              <MdNotifications className={styles.iconUser} />
            </Tooltip>
          </Link>
          <div className={styles.user}>
            <FaUserCircle className={styles.navbarAvatar} />
            <NavDropdown className={styles.dropdownContainer} title={<span className={styles.userName}>Zaid</span>}>
              <NavDropdown.Item href="/">Lihat akun</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Keluar</NavDropdown.Item>
            </NavDropdown>
          </div>
        </div>
      </div>

    </div>
  );
}

export default DashboardNav;
