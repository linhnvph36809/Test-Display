import { useState } from "react";
import { Col, Flex, Menu, Row, Typography } from "antd";
import "./detail-shipments.sass";
const { Title } = Typography;

import Heading from "../../components/Heading";
import { listItems, TAGS } from "./datas";

const DetailShipments = () => {
  const [tags, setTags] = useState<number>(0);

  return (
    <>
      <div className="detail-shipments">
        <Heading translations="shipping.heading_large" />
        <Flex gap={"16px"} align="center">
          <Title level={4} className="detail-shipments__text--bold">
            納品先:
          </Title>
          <p className="detail-shipments__text--blue">
            FBA STA (2023/11/28 01:51) TYO2
          </p>
          <div className="detail-ship__line"></div>
          <p className="detail-shipments__text">ステータス:</p>
          <button className="detail-shipments__btn">完了</button>
          <div className="detail-ship__line"></div>
          <p className="detail-shipments__text">最終更新日: 2023年12月7日</p>
        </Flex>
        <Row className="detail-ship__infor" justify={"space-between"}>
          <Col className="detail-ship__item">
            <Title
              level={5}
              className="detail-ship__title detail-ship__title--large"
            >
              発送
            </Title>
            <p className="detail-ship__title detail-ship__title--sm">
              作成日 :{" "}
              <span className="detail-ship__text"> 2023年11月28日</span>
            </p>
            <p className="detail-ship__title detail-ship__title--sm">
              納品番号 :{" "}
              <span className="detail-ship__text"> FBA15DMXL41T</span>
            </p>
            <p className="detail-ship__title detail-ship__title--sm">
              作成に使用した機能やサービス :{" "}
              <span className="detail-ship__text"> Amazonへ納品 (表示)</span>
            </p>
          </Col>
          <Col className="detail-ship__item">
            <Title
              level={5}
              className="detail-ship__title detail-ship__title--large"
            >
              納品元
            </Title>
            <p className="detail-ship__text">2520303</p>
            <p className="detail-ship__text">神奈川県</p>
            <p className="detail-ship__text">相模原市南区相模大野3-13-15</p>
            <p className="detail-ship__text">第三タカビル6階</p>
            <p className="detail-ship__text">THE WORLD DOOR </p>
            <p className="detail-ship__text">JP</p>
            <p className="detail-ship__text">+818041177012</p>
          </Col>
          <Col className="detail-ship__item">
            <Title
              level={5}
              className="detail-ship__title detail-ship__title--large"
            >
              納品元
            </Title>
            <p className="detail-ship__text">TYO2</p>
            <p className="detail-ship__text">上清久桟敷 1000番1 -13-15</p>
            <p className="detail-ship__text">久喜市, 埼玉県 346-8511 </p>
            <p className="detail-ship__text">+818041177012</p>
          </Col>
          <Col className="detail-ship__item">
            <Title
              level={5}
              className="detail-ship__title detail-ship__title--large"
            >
              納品元
            </Title>
            <p className="detail-ship__text">12 SKU </p>
            <p className="detail-ship__text">14点 </p>
          </Col>
          <Col className="detail-ship__item">
            <Title
              level={5}
              className="detail-ship__title detail-ship__title--large"
            >
              手数料 (見積り)
            </Title>
            <p className="detail-ship__title detail-ship__title--sm">
              FBAパートナーキャリアの費用 :{" "}
              <span className="detail-ship__text"> ¥546.00</span>
            </p>
          </Col>
        </Row>
        <div>
          <Menu
            mode="horizontal"
            className="detail-ship__tabs"
            items={listItems}
            defaultSelectedKeys={[String(tags)]}
            onClick={({ key: [key] }) => setTags(+key)}
          />
          <div>{TAGS[tags]}</div>
        </div>
      </div>
    </>
  );
};

export default DetailShipments;
