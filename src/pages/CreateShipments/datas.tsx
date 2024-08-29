import SelectComponent from "../../components/Form/SelectComponent";
import InputText from "../../components/Form/InputText";
import { DatePicker } from "antd";
import All from "./Tags/All";
import ReadyToShip from "./Tags/ReadyToShip";
import FormattedTranslations from "../../components/FormattedMessage";

export const listMenus = [
  {
    label: <FormattedTranslations id={"createShipments.allFBASKUs"} />,
    key: "0",
  },
  {
    label: <FormattedTranslations id={"createShipments.readyToShip"} />,
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

export const ICON_UPLOAD = (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1933_417)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.99998 0.833984C8.07217 0.833939 8.14352 0.849527 8.20912 0.879679C8.27472 0.90983 8.333 0.953829 8.37998 1.00865L10.38 3.34198C10.4663 3.44277 10.509 3.5737 10.4987 3.70597C10.4885 3.83825 10.4261 3.96103 10.3253 4.04732C10.2245 4.1336 10.0936 4.17632 9.96132 4.16606C9.82905 4.15581 9.70626 4.09343 9.61998 3.99265L8.49998 2.68598V10.0007C8.49998 10.1333 8.4473 10.2604 8.35353 10.3542C8.25976 10.448 8.13259 10.5007 7.99998 10.5007C7.86737 10.5007 7.74019 10.448 7.64643 10.3542C7.55266 10.2604 7.49998 10.1333 7.49998 10.0007V2.68532L6.37998 3.99265C6.33726 4.04255 6.28512 4.08355 6.22655 4.11331C6.16799 4.14306 6.10413 4.16099 6.03863 4.16606C5.97314 4.17114 5.90728 4.16327 5.84483 4.14289C5.78238 4.12252 5.72455 4.09004 5.67465 4.04732C5.62474 4.00459 5.58375 3.95246 5.55399 3.89389C5.52424 3.83532 5.50631 3.77147 5.50123 3.70597C5.49616 3.64048 5.50403 3.57462 5.52441 3.51217C5.54478 3.44972 5.57726 3.39189 5.61998 3.34198L7.61998 1.00865C7.66695 0.953829 7.72524 0.90983 7.79084 0.879679C7.85644 0.849527 7.92778 0.833939 7.99998 0.833984ZM4.66398 5.50198C4.79659 5.50128 4.92405 5.55328 5.01831 5.64654C5.11258 5.73981 5.16594 5.86671 5.16665 5.99932C5.16735 6.13193 5.11535 6.25938 5.02208 6.35365C4.92882 6.44792 4.80192 6.50128 4.66931 6.50198C3.94065 6.50598 3.42398 6.52465 3.03131 6.59665C2.65398 6.66665 2.43465 6.77798 2.27265 6.93998C2.08798 7.12465 1.96798 7.38398 1.90198 7.87332C1.83465 8.37665 1.83331 9.04398 1.83331 10.0007V10.6673C1.83331 11.6247 1.83465 12.292 1.90198 12.7953C1.96798 13.2846 2.08865 13.5433 2.27265 13.7287C2.45731 13.9126 2.71598 14.0326 3.20598 14.0986C3.70865 14.1666 4.37665 14.1673 5.33331 14.1673H10.6666C11.6233 14.1673 12.2906 14.1666 12.7946 14.0986C13.284 14.0326 13.5426 13.9127 13.7273 13.728C13.912 13.5433 14.032 13.2846 14.098 12.7953C14.1653 12.292 14.1666 11.6247 14.1666 10.6673V10.0007C14.1666 9.04398 14.1653 8.37665 14.098 7.87265C14.032 7.38398 13.9113 7.12465 13.7273 6.93998C13.5646 6.77798 13.346 6.66665 12.9686 6.59665C12.576 6.52465 12.0593 6.50598 11.3306 6.50198C11.265 6.50163 11.2 6.48835 11.1395 6.4629C11.079 6.43745 11.0241 6.40033 10.9779 6.35365C10.9317 6.30697 10.8952 6.25166 10.8704 6.19086C10.8455 6.13007 10.833 6.06498 10.8333 5.99932C10.8337 5.93366 10.8469 5.86871 10.8724 5.80818C10.8978 5.74765 10.935 5.69273 10.9816 5.64654C11.0283 5.60036 11.0836 5.56383 11.1444 5.53902C11.2052 5.51422 11.2703 5.50163 11.336 5.50198C12.0573 5.50598 12.658 5.52332 13.1493 5.61332C13.6546 5.70665 14.0846 5.88332 14.4346 6.23332C14.836 6.63398 15.008 7.13998 15.0893 7.73998C15.1666 8.31732 15.1666 9.05265 15.1666 9.96398V10.704C15.1666 11.616 15.1666 12.3507 15.0893 12.9287C15.008 13.5287 14.836 14.034 14.4346 14.4353C14.0333 14.8367 13.528 15.0087 12.928 15.09C12.35 15.1673 11.6146 15.1673 10.7033 15.1673H5.29665C4.38531 15.1673 3.64998 15.1673 3.07198 15.09C2.47198 15.0093 1.96665 14.8367 1.56531 14.4353C1.16398 14.034 0.99198 13.5287 0.911313 12.9287C0.833313 12.3507 0.833313 11.6153 0.833313 10.704V9.96398C0.833313 9.05265 0.833313 8.31732 0.911313 7.73932C0.991313 7.13932 1.16465 6.63398 1.56531 6.23265C1.91531 5.88332 2.34531 5.70598 2.85065 5.61332C3.34198 5.52332 3.94265 5.50598 4.66398 5.50198Z"
        fill="#3B82F6"
      />
    </g>
    <defs>
      <clipPath id="clip0_1933_417">
        <rect width={16} height={16} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const allColumns = [
  {
    title: (
      <div>
        <p className="table__text--sm table__text--black">
          <FormattedTranslations id="createShipments.skuDetail" />
        </p>
        <p className="table__text--sm table__text--blue">
          <FormattedTranslations id="createShipments.displaySettings" />
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
    title: <FormattedTranslations id="createShipments.packingDetails" />,
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
    title: <FormattedTranslations id="createShipments.informationAction" />,
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
    title: <FormattedTranslations id="createShipments.quantityToShip" />,
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
          <FormattedTranslations id="createShipments.skuDetail" />
        </p>
        <p className="table__text--sm table__text--blue">
          <FormattedTranslations id="createShipments.displaySettings" />
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
    title: <FormattedTranslations id="createShipments.packingDetails" />,
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
    title: <FormattedTranslations id="createShipments.informationAction" />,
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
    title: <FormattedTranslations id="createShipments.quantityToShip" />,
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

export const trackingInformationColumn = [
  {
    title: <FormattedTranslations id="createShipments.shippingBoxNumber" />,
    key: "1",
    dataIndex: "shippingBoxNumber",
  },
  {
    title: <FormattedTranslations id="createShipments.FBABoxLabelNumber" />,
    key: "2",
    dataIndex: "FBABoxLabelNumber",
  },
  {
    title: (
      <FormattedTranslations id="createShipments.trackingInformationURL" />
    ),
    key: "3",
    dataIndex: "trackingInformationURL",
    render: () => {
      return (
        <InputText placeholder="URL" className="tracking-information__input" />
      );
    },
  },
  {
    title: <FormattedTranslations id="table.status" />,
    key: "4",
    dataIndex: "status",
  },
  {
    title: <FormattedTranslations id="createShipments.weight" />,
    key: "5",
    dataIndex: "weight",
  },
  {
    title: <FormattedTranslations id="createShipments.dimensions" />,
    key: "6",
    dataIndex: "dimensions",
  },
];

export const trackingInformationRows = [
  {
    shippingBoxNumber: "1",
    FBABoxLabelNumber: "TWD09AQ34VGR",
    status: "✓ 確認済み",
    weight: "18 ",
    dimensions: "6 x 8 x 17",
  },
];
