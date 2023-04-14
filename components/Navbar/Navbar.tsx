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

function Navbar() {
  const [phone, setPhone] = useState<any>();
  const [open, setOpen] = useState<any>(false);

  useEffect(() => {
    const width = window.innerWidth;
    if (width < 768) {
      setPhone(true);
    } else {
      setPhone(false);
    }
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
                <Link href="/">
                  <p>Home</p>
                </Link>
                <Link href="/hut">
                  <p>the hut</p>
                </Link>
                <Link href="/area">
                  <p>The area</p>
                </Link>
                <Link href="/booking/booking">
                  <p>booking</p>
                </Link>
                <Link href="/about">
                  <p>about us</p>
                </Link>
                <Link href="/faq">
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
            <Col span={22}>
              <div className={styles.component}>
                <div className={styles.logo}>
                  <Image src={logo} alt="logo" fill={true} />
                </div>

                <div className={styles.nav}>
                  <Link href="/">
                    <p>Home</p>
                  </Link>
                  <Link href="/hut">
                    <p>the hut</p>
                  </Link>
                  <Link href="/area">
                    <p>The area</p>
                  </Link>
                  <Link href="/booking/booking">
                    <p>booking</p>
                  </Link>
                  <Link href="/about">
                    <p>about us</p>
                  </Link>
                  <Link href="/faq">
                    <p>faq</p>
                  </Link>
                  <div className={styles.smalllogonav}>
                    <Image src={denmark} alt="logo" fill={true} />
                  </div>
                </div>

                <button className={booknow.component}>
                  <p>book now</p>
                </button>
              </div>
            </Col>
          </Row>
        </>
      )}
    </>
  );
}

export default Navbar;
