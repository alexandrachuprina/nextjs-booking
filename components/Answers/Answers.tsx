import React from "react";
import { Row, Col, Collapse } from "antd";
import styles from "../../styles/components/Answers.module.scss";

interface content {
  question: string;
  answer: string;
}

interface Props {
  content: content[];
}

const { Panel } = Collapse;

function Answers(props: Props) {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <Row justify={"center"}>
      <Col span={22}>
        <div className={styles.component}>
          <Collapse onChange={onChange} expandIconPosition={"end"}>
            {props.content.map((elem: any, i: number) => (
              <Panel header={elem.question} key={i}>
                <p>{elem.answer}</p>
              </Panel>
            ))}
          </Collapse>
        </div>
      </Col>
    </Row>
  );
}

export default Answers;
