import { useState } from "react";
import { Button, Flex, Form, Input, Layout, Typography } from "antd";
import { FormattedMessage } from "react-intl";
const { Paragraph, Title } = Typography;

import message_en from "../../translations/en.json";
import message_ja from "../../translations/ja.json";

import { columns, optionStatus, optionStatusProducts, rows } from "../../datas";
import ModalComponent from "../../components/Modal/Modal";
import Heading from "../../components/Heading";
import Pagination from "../../components/Pagination";
import TablePrimary from "../../components/TablePrimary";
import SelectComponent from "../../components/Form/SelectComponent";
import InputRadio from "../../components/Form/InputRadio";
import InputText from "../../components/Form/InputText";

type ModalType = {
  isSelected: boolean;
  keySelected: null | string | number;
  datas: any;
};

const initState = {
  isSelected: false,
  keySelected: null,
  datas: null,
};

const Return = () => {
  const [isModalOpen, setIsModalOpen] = useState<ModalType>(initState);

  const hiddenModal = () => {
    setIsModalOpen({ isSelected: false, keySelected: null, datas: null });
  };

  return (
    <>
      <Layout>
        <Layout className="content">
          <Heading translations="content.heading_large" />
          <Title level={3} className="content__heading-base">
            <FormattedMessage id="content.heading_base" />
          </Title>
          <Flex gap={"8px"} align="center" className="content__infor">
            <Paragraph className="content__label">
              <FormattedMessage id="content.labelFullName" />
            </Paragraph>
            <Paragraph className="content__description">
              : <FormattedMessage id="content.fullName" />
            </Paragraph>
          </Flex>
          <Flex gap={"8px"} align="center" className="content__infor">
            <Paragraph className="content__label">
              <FormattedMessage id="content.labelEmail" />
            </Paragraph>
            <Paragraph className="content__description">
              : Nguyenvana@gmail.com
            </Paragraph>
          </Flex>
          <Form
            className="content__form"
            onFinish={() =>
              setIsModalOpen((state: any) => ({
                ...state,
                isSelected: state.keySelected ? true : false,
              }))
            }
          >
            <Flex gap={"16px"}>
              <Input
                className="content__input"
                placeholder={
                  "en" == "en"
                    ? message_en["content.labelEmail"]
                    : message_ja["content.labelEmail"]
                }
              />
              {isModalOpen.keySelected && (
                <Button className="content__btn" htmlType="submit">
                  <FormattedMessage id="content.searchButton" />
                </Button>
              )}
            </Flex>
          </Form>
          <div className="content__table">
            <TablePrimary
              columns={columns}
              dataSource={rows}
              scroll={{
                x: 2550,
              }}
              rowSelection={{
                type: "radio",
                selectedRowKeys: isModalOpen.keySelected
                  ? [isModalOpen.keySelected]
                  : [],
                onChange: ([key]: string, [selectedRows]: any) => {
                  setIsModalOpen((state: any) => ({
                    ...state,
                    keySelected: key,
                    datas: selectedRows,
                  }));
                },
              }}
            />
            <Pagination />
          </div>
        </Layout>
      </Layout>
      <ModalComponent
        width={"750px"}
        okText={<FormattedMessage id="modal.buttonSubmit" />}
        isSelected={isModalOpen.isSelected}
        hiddenModal={hiddenModal}
        title={<FormattedMessage id="modal.title" />}
      >
        <div className="modal__body">
          <div>
            <Title className="modal__title">
              <FormattedMessage id="modal.photoShoot" />
            </Title>
            <InputRadio
              listRadios={[
                {
                  defaultValue: "要",
                  translationId: "modal.essential",
                  className: "modal__radio",
                },
                {
                  defaultValue: "不要",
                  translationId: "modal.unnecessary",
                  className: "modal__radio",
                },
              ]}
            />
          </div>
          <div>
            <Title className="modal__title">
              <FormattedMessage id="modal.requestDetails" />
            </Title>
            <InputRadio
              listRadios={[
                {
                  defaultValue: "要",
                  translationId: "modal.essential",
                  className: "modal__radio",
                },
                {
                  defaultValue: "不要",
                  translationId: "modal.unnecessary",
                  className: "modal__radio",
                },
              ]}
            />
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
                    <InputText
                      placeholder="Lorem ipsum ."
                      className="modal__input"
                    />
                  </Form.Item>
                </div>
                <div className="modal__item modal__item--sm">
                  <Form.Item
                    name="請求書番号"
                    label={<FormattedMessage id="table.invoiceNumber" />}
                    className="modal__label"
                  >
                    <InputText
                      placeholder="243545366"
                      className="modal__input"
                    />
                  </Form.Item>
                </div>
                <div className="modal__item modal__item--sm">
                  <Form.Item
                    name="受付番号"
                    label={<FormattedMessage id="table.receptionNumber" />}
                    className="modal__label"
                  >
                    <InputText
                      placeholder="243545366"
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
                <div className="modal__item modal__item--sm">
                  <Form.Item
                    name="検品結果"
                    label={<FormattedMessage id="table.results" />}
                    className="modal__label"
                  >
                    <InputText
                      placeholder="Lorem ipsum ."
                      className="modal__input"
                    />
                  </Form.Item>
                </div>
                <div className="modal__item modal__item--sm">
                  <Form.Item
                    name="発送詳細"
                    label={<FormattedMessage id="table.shipping" />}
                    className="modal__label"
                  >
                    <InputText
                      placeholder="Lorem ipsum ."
                      className="modal__input"
                    />
                  </Form.Item>
                </div>
                <div className="modal__item">
                  <Form.Item
                    name="その他支払い方法"
                    label={<FormattedMessage id="table.paymentMethods" />}
                    className="modal__label"
                  >
                    <InputText
                      placeholder="Lorem ipsum ."
                      className="modal__input"
                    />
                  </Form.Item>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </ModalComponent>
    </>
  );
};

export default Return;
