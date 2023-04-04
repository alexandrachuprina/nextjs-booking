import React, { useState, useEffect } from "react";
import { Row, Col, Button, Drawer, Divider } from "antd";
import styles from "../../styles/components/Navbar.module.scss";

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

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      {phone ? (
        <div className={styles.component}>
          <Row justify={"center"}>
            <Col span={22}>
              <button onClick={showDrawer}>Open</button>

              <Drawer
                title="Menu"
                placement="right"
                onClose={onClose}
                open={open}
                width={150}
              >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </Drawer>
            </Col>
          </Row>
        </div>
      ) : <p>no phone</p>}
    </>
  );
}

export default Navbar;
