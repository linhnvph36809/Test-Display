import { useState } from "react";
import { Checkbox, Col, Menu, Row, Typography } from "antd";
import { FormattedMessage } from "react-intl";
import "./style/index.sass";

import Heading from "../../components/Heading";
import { listMenus, Tags } from "./datas";
import SelectComponent from "../../components/Form/SelectComponent";
import InputText from "../../components/Form/InputText";
import ModalComponent from "../../components/Modal/Modal";
const { Title } = Typography;

const CreateShipments = () => {
  const [selectedTag, setSelectedTag] = useState<number>(0);

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const hiddenModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <div className="create-shipments">
        <Heading translations="createShip.deliveryToAmazon" />
        <div className="create-shipments__main">
          <div className="create-shipments__top">
            <Title level={4} className="create-shipments__heading--base">
              <FormattedMessage id="createShip.selectInventory" />
            </Title>
            <Menu
              mode="horizontal"
              items={listMenus}
              onClick={({ key: [key] }) => setSelectedTag(+key)}
              className="create-shipments__menu"
              defaultSelectedKeys={["0"]}
            />
          </div>
          <div className="create-shipments__shiping">
            <div className="create-shipments__item">
              <div className="create-shipments__content">
                <h5 className="create-shipments__title">発送元</h5>
                <p className="create-shipments__text">
                  Interline Corporation C/O Ryota, Mari, Manee, 2203 E. Carson
                  St., Unit A-3、 Carson. CA. 90810, US
                </p>
                <p
                  className="text-sm create-shipments__open"
                  onClick={() => setIsOpenModal(true)}
                >
                  別の住所から発送
                </p>
              </div>
              <div>
                <h5 className="create-shipments__title">発送元</h5>
                <SelectComponent
                  dropdownStyle={{ borderRadius: 0 }}
                  options={[
                    {
                      value: "日本",
                      label: "日本",
                    },
                    {
                      value: "アメリカ",
                      label: "アメリカ",
                    },
                  ]}
                  className="create-shipments__select"
                  defaultValue="日本"
                />
              </div>
            </div>
            <div>
              <div className="create-shipments__form">
                <InputText
                  className="create-shipments__input"
                  placeholder="SKU、商品名、ISBN, A"
                />
                <button className="create-shipments__btn--search">
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.63633 1.5C6.42268 1.5 5.23628 1.85989 4.22717 2.53416C3.21806 3.20843 2.43155 4.16679 1.9671 5.28806C1.50266 6.40932 1.38114 7.64314 1.61791 8.83347C1.85468 10.0238 2.43911 11.1172 3.29729 11.9754C4.15547 12.8335 5.24886 13.418 6.43919 13.6547C7.62952 13.8915 8.86334 13.77 9.9846 13.3056C11.1059 12.8411 12.0642 12.0546 12.7385 11.0455C13.4128 10.0364 13.7727 8.84998 13.7727 7.63633C13.7726 6.0089 13.126 4.44817 11.9753 3.2974C10.8245 2.14664 9.26375 1.5001 7.63633 1.5Z"
                      stroke="#3B82F6"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                    />
                    <path
                      d="M12.2145 12.2148L16.5 16.5004"
                      stroke="#3B82F6"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div>{Tags[selectedTag]}</div>
        </div>
        <ModalComponent
          isSelected={isOpenModal}
          title={"発送元を選択"}
          width={"750px"}
          hiddenModal={hiddenModal}
        >
          <div className="shipping-source">
            <div className="modal__body">
              <Row justify={"space-between"}>
                <Col className="modal__item">
                  <h3 className="create-shipments__title">商品発送元住所</h3>
                  <p className="create-shipments__title--base flex gap-4">
                    Interline Corporation C/O Ryota, Mari, Manee
                    <Checkbox className="modal__checkbox" />
                  </p>
                  <p className="create-shipments__text">2203 E. Carson St.</p>
                  <p>Unit A-3</p>
                  <p>Carson, California 90810 </p>
                  <p>米国</p>
                  <div className="flex justify-between items-center modal__row">
                    <p className="flex gap-2 color-primary">
                      編集 <p>|</p> 削除
                    </p>
                    <button className="modal__btn">次に進む</button>
                  </div>
                </Col>
                <Col className="modal__item">
                  <h3 className="create-shipments__title">商品発送元住所</h3>
                  <p className="create-shipments__title--base flex gap-4">
                    Interline Corporation C/O Ryota, Mari, Manee
                    <Checkbox className="modal__checkbox" />
                  </p>
                  <p className="create-shipments__text">2203 E. Carson St.</p>
                  <p>Unit A-3</p>
                  <p>Carson, California 90810 </p>
                  <p>米国</p>
                  <div className="flex justify-between items-center modal__row">
                    <p className="flex gap-2 color-primary">
                      編集 <p>|</p> 削除
                    </p>
                    <button className="modal__btn">次に進む</button>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </ModalComponent>
      </div>
    </>
  );
};

export default CreateShipments;
