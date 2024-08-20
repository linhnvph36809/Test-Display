import { memo } from "react";
import { Form, Modal, Select, Typography } from "antd";
const { Title } = Typography;
import "./modal.sass";
import { FormattedMessage } from "react-intl";

import { optionStatus, optionStatusProducts } from "../../datas";
import InputComponent from "../Form/InputText";
import InputRadio from "../Form/InputRadio";
import SelectComponent from "../Form/SelectComponent";

const ModalComponent = memo(
  ({ isModalOpen: { isSelected }, setIsModalOpen }: any) => {
    const hiddenModal = () => {
      setIsModalOpen({ isSelected: false, keySelected: null, datas: null });
    };

    return (
      <>
        <Modal
          title={<FormattedMessage id="modal.title" />}
          open={isSelected}
          onOk={hiddenModal}
          onCancel={hiddenModal}
          okText={<FormattedMessage id="modal.buttonSubmit" />}
          className="modal"
          width={"750px"}
          closeIcon={
            <svg
              width={14}
              height={14}
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 1L1 13M1 1L13 13"
                stroke="#646464"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        >
          <div className="modal__body">
            <div>
              <Title className="modal__title">
                <FormattedMessage id="modal.photoShoot" />
              </Title>
              <InputRadio className="modal__radio" />
            </div>
            <div>
              <Title className="modal__title">
                <FormattedMessage id="modal.requestDetails" />
              </Title>
              <InputRadio className="modal__radio" />
            </div>
            <div>
              <Form layout="vertical">
                <div className="modal__form">
                  <div className="modal__item">
                    <Form.Item
                      name="検品依収内容"
                      label={<FormattedMessage id="modal.requestDetails" />}
                      className="modal__label"
                    >
                      <InputComponent
                        placeholder="Lorem ipsum ."
                        className="modal__input"
                      />
                    </Form.Item>
                  </div>
                  <div className="modal__item">
                    <Form.Item
                      name="ステータス"
                      label={<FormattedMessage id="table.status" />}
                      className="modal__label"
                    >
                      <SelectComponent
                        defaultValue="商品未到着"
                        className="modal__select"
                        options={optionStatus}
                      />
                    </Form.Item>
                  </div>
                  <div className="modal__item">
                    <Form.Item
                      name="商品状態"
                      label={<FormattedMessage id="table.statusProduct" />}
                      className="modal__label"
                    >
                      <SelectComponent
                        defaultValue="ほぼ新品"
                        className="modal__select"
                        options={optionStatusProducts}
                      />
                    </Form.Item>
                  </div>
                  <div className="modal__item">
                    <Form.Item
                      name="その他支払い方法"
                      label={<FormattedMessage id="table.paymentMethods" />}
                      className="modal__label"
                    >
                      <InputComponent
                        placeholder="Lorem ipsum ."
                        className="modal__input"
                      />
                    </Form.Item>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </Modal>
      </>
    );
  }
);

export default ModalComponent;
