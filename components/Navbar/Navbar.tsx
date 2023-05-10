import React, { useState, useEffect } from "react";
import { Row, Col, Drawer, Divider } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import styles from "../..//styles/components/Navbar.module.scss";
import button from "../..//styles/buttons/MenuButton.module.scss";
import booknow from "../../styles/buttons/BookingButton.module.scss";

import logo from "/assets/icons/logo.svg";
import denmark from "/assets/icons/denmark.svg";

import axios from "axios";


function Navbar() {
  const [phone, setPhone] = useState<any>();
  const [open, setOpen] = useState<any>(false);

  const [data, setData] = useState<any>([]);

  function fetchData() {
    axios.get('http://localhost:1337/api/layout-navbar?populate=*')
    .then((res) => setData(res.data.data.attributes))
  }

  useEffect(() => {
    const width = window.innerWidth;
    if (width < 768) {
      setPhone(true);
    } else {
      setPhone(false);
    };

    // fetchData()
  }, []);

  // The Drawer
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      {phone ? (
        <Row justify={"center"}>
          <Col span={22}>
            <div className={styles.componentphone}>
              <div className={styles.logo}>
                <Image src={logo} alt="logo" fill={true} />
              </div>
              <button className={button.component} onClick={showDrawer}>
                <MenuOutlined style={{ color: "white" }} />
              </button>
            </div>
            <Drawer
              title="Menu"
              placement="right"
              onClose={onClose}
              open={open}
              width={150}
            >
              <div className={styles.navphone}>
                <Link href="/" className={styles.link}>
                  <p>Home</p>
                </Link>
                <Link href="/hut" className={styles.link}>
                  <p>the hut</p>
                </Link>
                <Link href="/area" className={styles.link}>
                  <p>The area</p>
                </Link>
                <Link href="/booking/booking" className={styles.link}>
                  <p>booking</p>
                </Link>
                <Link href="/about" className={styles.link}>
                  <p>about us</p>
                </Link>
                <Link href="/faq" className={styles.link}>
                  <p>faq</p>
                </Link>
              </div>
              <div className={styles.smalllogo}>
                <Image src={denmark} alt="logo" fill={true} />
              </div>
            </Drawer>
          </Col>
        </Row>
      ) : (
        <>
          <Row justify={"center"}>
            <Col xs={22} xl={20} xxl={18} flex={"1400px"}>
              <div className={styles.component}>
                <div className={styles.logo}>
                  <Image src={logo} alt="logo" fill={true} />
                </div>

                <div className={styles.nav}>
                  <Link href="/" className={styles.link}>
                    <p>Home</p>
                  </Link>
                  <Link href="/hut" className={styles.link}>
                    <p>the hut</p>
                  </Link>
                  <Link href="/area" className={styles.link}>
                    <p>The area</p>
                  </Link>
                  <Link href="/booking/booking" className={styles.link}>
                    <p>booking</p>
                  </Link>
                  <Link href="/about" className={styles.link}>
                    <p>about us</p>
                  </Link>
                  <Link href="/faq" className={styles.link}>
                    <p>faq</p>
                  </Link>
                  <div className={styles.smalllogonav}>
                    <Image src={denmark} alt="logo" fill={true} />
                  </div>
                </div>

                <Link href={"/booking/booking"}>
                  <button className={booknow.component}>
                    <p>book now</p>
                  </button>
                </Link>
              </div>
            </Col>
          </Row>
        </>
      )}
    </>
  );
}

export default Navbar;
