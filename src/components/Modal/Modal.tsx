import { Form, Input, Modal, Radio, Select, Typography } from "antd";
const { Title } = Typography;
import "./modal.sass";
import { FormattedMessage } from "react-intl";

const ModalComponent = ({
  isModalOpen: { keySelected },
  setIsModalOpen,
}: any) => {
  const hiddenModal = () => {
    setIsModalOpen({ keySelected: null, datas: null });
  };

  return (
    <>
      <Modal
        title={<FormattedMessage id="modal.title" />}
        open={!!keySelected}
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
            <Radio.Group>
              <Radio className="modal__radio" value={"要"}>
                <FormattedMessage id="modal.essential" />
              </Radio>
              <Radio className="modal__radio" value={"不要"}>
                <FormattedMessage id="modal.unnecessary" />
              </Radio>
            </Radio.Group>
          </div>
          <div>
            <Title className="modal__title">
              <FormattedMessage id="modal.requestDetails" />
            </Title>
            <Radio.Group>
              <Radio className="modal__radio" value={"要"}>
                <FormattedMessage id="modal.essential" />
              </Radio>
              <Radio className="modal__radio" value={"不要"}>
                <FormattedMessage id="modal.unnecessary" />
              </Radio>
            </Radio.Group>
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
                    <Input
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
                    <Select
                      defaultValue="商品未到着"
                      dropdownStyle={{ borderRadius: "unset" }}
                      className="modal__select"
                      options={[
                        {
                          value: "商品未到着",
                          label: <FormattedMessage id="table.rowStatus" />,
                        },
                        {
                          value: "在庫保管中",
                          label: <FormattedMessage id="modal.inStock" />,
                        },
                        {
                          value: "写真アップ要求中",
                          label: <FormattedMessage id="modal.photoUpload" />,
                        },
                        {
                          value: "写真アップ済",
                          label: <FormattedMessage id="modal.photoUpload" />,
                        },
                        {
                          value: "検品オーダー受信",
                          label: <FormattedMessage id="modal.orderReceived" />,
                        },
                        {
                          value: "検品完了",
                          label: (
                            <FormattedMessage id="modal.inspectionCompleted" />
                          ),
                        },
                        {
                          value: "作業オーダー送信済",
                          label: <FormattedMessage id="modal.orderSubmitted" />,
                        },
                        {
                          value: "処理済",
                          label: <FormattedMessage id="modal.processed" />,
                        },
                      ]}
                    />
                  </Form.Item>
                </div>
                <div className="modal__item">
                  <Form.Item
                    name="商品状態"
                    label={<FormattedMessage id="table.statusProduct" />}
                    className="modal__label"
                  >
                    <Select
                      defaultValue="ほぼ新品"
                      className="modal__select"
                      dropdownStyle={{ borderRadius: "unset" }}
                      options={[
                        {
                          value: "新品",
                          label: <FormattedMessage id="modal.new" />,
                        },
                        {
                          value: "ほぼ新品",
                          label: <FormattedMessage id="modal.almostNew" />,
                        },
                        {
                          value: "普通",
                          label: <FormattedMessage id="modal.usually" />,
                        },
                        {
                          value: "中古",
                          label: <FormattedMessage id="modal.secondHand" />,
                        },
                        {
                          value: "NG",
                          label: "NG",
                        },
                      ]}
                    />
                  </Form.Item>
                </div>
                <div className="modal__item">
                  <Form.Item
                    name="その他支払い方法"
                    label={<FormattedMessage id="table.paymentMethods" />}
                    className="modal__label"
                  >
                    <Input
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
};

export default ModalComponent;
