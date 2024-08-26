import { FormattedMessage } from "react-intl";
import SelectComponent from "../../components/Form/SelectComponent";
import InputText from "../../components/Form/InputText";
import { DatePicker } from "antd";
import All from "./Tags/All";
import ReadyToShip from "./Tags/ReadyToShip";

export const listMenus = [
  {
    label: "FBAのSKUすべて",
    key: "0",
  },
  {
    label: "発送準備ができているSKU (0)",
    key: "1",
  },
];

const ICON_IMAGE = (
  <svg
    width={52}
    height={52}
    viewBox="0 0 52 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <rect width={52} height={52} fill="url(#pattern0_1420_70)" />
    <defs>
      <pattern
        id="pattern0_1420_70"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#image0_1420_70" transform="scale(0.015625)" />
      </pattern>
      <image
        id="image0_1420_70"
        width={64}
        height={64}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAONJREFUeF7t20EOhEAIRFG4/6F7DvEnYeFzryQIv6pBd2behOu9dPvsbog+k+NLgArQAqmJcw9iAAhSgZKB3IJkkAySQTJ4CiE+gA8oBeg0mH3Ai084P89HhqwEqIA209ICsQdjAeaZIgaAYKxBDMCAYy8fXwAIgiAIcoJpJEYGI4VjB3YrbC9gL2AvkCB43cM5PgZgAAZgQFnNZAhdGykQBEEQBEEQDBmgAm2glM/z+QUYisYUGoldO7kY32IEAzCg6RgIRgjFAsw+AgRBMNYgBmCAT2TCYfoPPz/HCqQCX1eBHzHnv7C7WhBSAAAAAElFTkSuQmCC"
      />
    </defs>
  </svg>
);

export const Tags = [<All />, <ReadyToShip />];

export const allColumns = [
  {
    title: (
      <div>
        <p className="table__text--sm table__text--black">
          <FormattedMessage id="createShipments.skuDetail" />
        </p>
        <p className="table__text--sm table__text--blue">
          <FormattedMessage id="createShipments.displaySettings" />
        </p>
      </div>
    ),
    key: "1",
    dataIndex: "displaySettings",
    render: () => {
      return (
        <div className="flex gap-3">
          {ICON_IMAGE}
          <div className="table__text--sm table__text--blue">
            Aki Beauty Collection Premium Fish Collagen Peptide 13000mg |
            Protein 14.5g Zinc Royal Jelly Power Supports Healthy Hair Skin Nail
            Immune System - Set of 10 Bottles
            <p className="table__text--sm table__text--gray">
              SKU: COLLAGENATE-1300
            </p>
            <p className="table__text--sm table__text--gray">
              ASIN: B0C9D1RS23
            </p>
          </div>
        </div>
      );
    },
  },
  {
    title: <FormattedMessage id="createShipments.packingDetails" />,
    key: "2",
    dataIndex: "packingDetails",
    render: () => {
      return (
        <div className="create-shipments__packing">
          <SelectComponent
            className="create-shipments__select"
            defaultValue="5箱入"
            options={[
              {
                label: "5箱入",
                value: "5箱入",
              },
              {
                label: "新品の梱包テンプレートを作成",
                value: "新品の梱包テンプレートを作成",
              },
            ]}
          />
          <div className="table__icon">
            <svg
              width={20}
              height={20}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 16V13.48L13.18 0.288015C13.2833 0.196682 13.3967 0.126015 13.52 0.0760154C13.6433 0.0260154 13.7723 0.000681818 13.907 1.51514e-05C14.0417 -0.000651515 14.1717 0.020682 14.297 0.0640153C14.4237 0.106015 14.5403 0.182015 14.647 0.292015L15.714 1.36602C15.824 1.47202 15.8993 1.58868 15.94 1.71602C15.98 1.84268 16 1.96935 16 2.09602C16 2.23202 15.9773 2.36202 15.932 2.48602C15.886 2.60935 15.8133 2.72235 15.714 2.82502L2.519 16H0ZM13.504 3.58902L15 2.11102L13.889 1.00002L12.412 2.49602L13.504 3.58902Z"
                fill="#3B82F6"
              />
            </svg>
          </div>
        </div>
      );
    },
  },
  {
    title: <FormattedMessage id="createShipments.informationAction" />,
    key: "3",
    dataIndex: "informationAction",
    render: () => {
      return (
        <div>
          <p className="table__text--sm table__text--black">
            輸送箱ごとの商品数: 5
          </p>
          <p className="table__text--sm table__text--black">
            メーカーのバーコード
          </p>
          <p className="table__text--sm table__text--blue">
            入力の表示を増やす{" "}
            <svg
              width={9}
              height={6}
              viewBox="0 0 9 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.19919 1.24193L4.9921 4.98452C4.94041 5.04482 4.87628 5.09321 4.80413 5.1264C4.73197 5.15958 4.65349 5.17676 4.57407 5.17676C4.49465 5.17676 4.41616 5.15958 4.34401 5.1264C4.27185 5.09321 4.20772 5.04482 4.15603 4.98452L0.948942 1.24193C0.642871 0.884692 0.89663 0.332893 1.36698 0.332893H7.78207C8.25242 0.332893 8.50618 0.884692 8.19919 1.24193Z"
                fill="#646464"
              />
            </svg>
          </p>
          <label htmlFor="" className="table__text--sm">
            製造ロットコード:
            <InputText
              className="create-shipments__input create-shipments__input--sm"
              placeholder=""
            />
          </label>
          <p className="table__text--sm table__text--blue">梱包の行を追加</p>
        </div>
      );
    },
  },
  {
    title: <FormattedMessage id="createShipments.quantityToShip" />,
    key: "4",
    dataIndex: "quantityToShip",
    render: () => {
      return (
        <div>
          <div className="flex items-center gap-4">
            <label
              htmlFor=""
              className="table__text--sm create-shipments__label"
            >
              輸送箱:
              <InputText
                className="create-shipments__input create-shipments__input--xs"
                placeholder="5"
              />
            </label>
            <label
              htmlFor=""
              className="table__text--sm create-shipments__label"
            >
              商品数:
              <InputText
                className="create-shipments__input create-shipments__input--xs"
                placeholder="25"
              />
            </label>
          </div>
          <label htmlFor="" className="table__text--sm">
            貫味/消费期限
          </label>
          <DatePicker className="create-shipments__date m-y-2" />
          <button className="create-shipments__btn">確定して続ける</button>
        </div>
      );
    },
  },
];

export const allRows = [
  {
    displaySettings: "",
    packingDetails: "",
    informationAction: "",
    quantityToShip: "",
  },
  {
    displaySettings: "",
    packingDetails: "",
    informationAction: "",
    quantityToShip: "",
  },
];

export const readyToShipColumns = [
  {
    title: (
      <div>
        <p className="table__text--sm table__text--black">
          <FormattedMessage id="createShipments.skuDetail" />
        </p>
        <p className="table__text--sm table__text--blue">
          <FormattedMessage id="createShipments.displaySettings" />
        </p>
      </div>
    ),
    key: "1",
    dataIndex: "displaySettings",
    render: () => {
      return (
        <div className="flex gap-3">
          {ICON_IMAGE}
          <div className="table__text--sm table__text--blue">
            Aki Beauty Collection Premium Fish Collagen Peptide 13000mg |
            Protein 14.5g Zinc Royal Jelly Power Supports Healthy Hair Skin Nail
            Immune System - Set of 10 Bottles
            <p className="table__text--sm table__text--gray">
              SKU: COLLAGENATE-1300
            </p>
            <p className="table__text--sm table__text--gray">
              ASIN: B0C9D1RS23
            </p>
          </div>
        </div>
      );
    },
  },
  {
    title: <FormattedMessage id="createShipments.packingDetails" />,
    key: "2",
    dataIndex: "packingDetails",
    render: () => {
      return (
        <div className="create-shipments__packing">
          <SelectComponent
            className="create-shipments__select"
            defaultValue="5箱入"
            options={[
              {
                label: "5箱入",
                value: "5箱入",
              },
              {
                label: "新品の梱包テンプレートを作成",
                value: "新品の梱包テンプレートを作成",
              },
            ]}
          />
          <div className="table__icon">
          <svg
            width={22}
            height={16}
            viewBox="0 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 5C10.2044 5 9.44129 5.31607 8.87868 5.87868C8.31607 6.44129 8 7.20435 8 8C8 8.79565 8.31607 9.55871 8.87868 10.1213C9.44129 10.6839 10.2044 11 11 11C11.7956 11 12.5587 10.6839 13.1213 10.1213C13.6839 9.55871 14 8.79565 14 8C14 7.20435 13.6839 6.44129 13.1213 5.87868C12.5587 5.31607 11.7956 5 11 5ZM11 13C9.67392 13 8.40215 12.4732 7.46447 11.5355C6.52678 10.5979 6 9.32608 6 8C6 6.67392 6.52678 5.40215 7.46447 4.46447C8.40215 3.52678 9.67392 3 11 3C12.3261 3 13.5979 3.52678 14.5355 4.46447C15.4732 5.40215 16 6.67392 16 8C16 9.32608 15.4732 10.5979 14.5355 11.5355C13.5979 12.4732 12.3261 13 11 13ZM11 0.5C6 0.5 1.73 3.61 0 8C1.73 12.39 6 15.5 11 15.5C16 15.5 20.27 12.39 22 8C20.27 3.61 16 0.5 11 0.5Z"
              fill="#3B82F6"
            />
          </svg>
          </div>
        </div>
      );
    },
  },
  {
    title: <FormattedMessage id="createShipments.informationAction" />,
    key: "3",
    dataIndex: "informationAction",
    render: () => {
      return (
        <div>
          <p className="table__text--sm table__text--black">
            輸送箱ごとの商品数: 5
          </p>
          <p className="table__text--sm table__text--black">
            メーカーのバーコード
          </p>
          <p className="table__text--sm table__text--blue">
            入力の表示を増やす{" "}
            <svg
              width={9}
              height={6}
              viewBox="0 0 9 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.19919 1.24193L4.9921 4.98452C4.94041 5.04482 4.87628 5.09321 4.80413 5.1264C4.73197 5.15958 4.65349 5.17676 4.57407 5.17676C4.49465 5.17676 4.41616 5.15958 4.34401 5.1264C4.27185 5.09321 4.20772 5.04482 4.15603 4.98452L0.948942 1.24193C0.642871 0.884692 0.89663 0.332893 1.36698 0.332893H7.78207C8.25242 0.332893 8.50618 0.884692 8.19919 1.24193Z"
                fill="#646464"
              />
            </svg>
          </p>
          <p className="table__text--sm">製造ロットコード:-</p>
        </div>
      );
    },
  },
  {
    title: <FormattedMessage id="createShipments.quantityToShip" />,
    key: "4",
    dataIndex: "quantityToShip",
    render: () => {
      return (
        <div>
          <p className="table__text--xs table__text--gray">
            発送準備完了 (<span className="color-primary">変更または削除</span>)
          </p>
          <p className="table__text--gray table__text--xs"> 輸送箱の数:4</p>
          <p className="table__text--gray table__text--xs"> 商品数: 20</p>
          <p className="table__text--gray table__text--xs">
            {" "}
            有効期限: 2024年11月7日
          </p>
        </div>
      );
    },
  },
];
