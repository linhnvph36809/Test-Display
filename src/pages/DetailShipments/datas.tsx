import { FormattedMessage } from "react-intl";
import CheckDeliveryStatus from "./Tags/CheckDeliveryStatus";
import ContentsOfDelivery from "./Tags/ContentsOfDelivery";
import Problem from "./Tags/Problem";
import TrackShipment from "./Tags/TrackShipment";
import InputText from "../../components/Form/InputText";

export const listItems = [
  {
    label: <FormattedMessage id="detailShip.trackYourShipment" />,
    key: "0",
  },
  {
    label: <FormattedMessage id="detailShip.checkDeliveryDtatus" />,
    key: "1",
  },
  {
    label: <FormattedMessage id="detailShip.contentsOfDeliveryPlan" />,
    key: "2",
  },
  {
    label: <FormattedMessage id="detailShip.problem" />,
    key: "3",
  },
];

export const TAGS = [
  <TrackShipment />,
  <CheckDeliveryStatus />,
  <ContentsOfDelivery />,
  <Problem />,
];

export const checkDeliveryColumns = [
  {
    title: <FormattedMessage id="checkDelivery.trackYourShipment" />,
    key: "1",
    dataIndex: "trackYourShipment",
  },
  {
    title: <FormattedMessage id="checkDelivery.amazon" />,
    key: "2",
    dataIndex: "amazon",
  },
  {
    title: <FormattedMessage id="checkDelivery.contactNumber" />,
    key: "3",
    render: () => {
      return (
        <InputText
          className="check-delivery__input"
          placeholder="397503966786"
        />
      );
    },
  },
  {
    title: <FormattedMessage id="checkDelivery.deliveryStatus" />,
    key: "4",
    dataIndex: "deliveryStatus",
  },
  {
    title: <FormattedMessage id="checkDelivery.weight" />,
    key: "5",
    dataIndex: "weight",
  },
  {
    title: <FormattedMessage id="checkDelivery.dimensions" />,
    key: "6",
    dataIndex: "dimensions",
  },
];

export const checkDeliveryRows = [
  {
    key: "1",
    trackYourShipment: "1",
    amazon: "FBA15DMXL41TU000001",
    lastUpdatedDate: (
      <div>
        <p>2024年6月24日</p>
        <span className="shipping__row--gray">午前8:51</span>
      </div>
    ),
    deliveryStatus: "発送済み",
    weight: "3",
    dimensions: "30 x 40 x 40",
  },
];

export const contentDeliveryColumns = [
  {
    title: (
      <div className="content-delivery__row">
        <span>SKU</span>
        <svg
          width={12}
          height={14}
          viewBox="0 0 12 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.16706 12.832L5.16706 2.9487L1.53373 5.9737C1.36355 6.11515 1.14414 6.1832 0.923789 6.16288C0.703434 6.14257 0.500175 6.03555 0.358726 5.86536C0.217277 5.69518 0.149225 5.47578 0.169542 5.25543C0.189858 5.03507 0.296879 4.83181 0.467059 4.69036L5.46706 0.523698C5.50683 0.495665 5.54861 0.470597 5.59206 0.448698C5.63373 0.448698 5.65873 0.448698 5.70039 0.390365C5.79594 0.352593 5.89765 0.332816 6.00039 0.332031C6.10313 0.332816 6.20484 0.352593 6.30039 0.390365C6.34206 0.390365 6.36706 0.390364 6.40873 0.448698C6.45218 0.470597 6.49396 0.495665 6.53373 0.523698L11.5337 4.69036C11.6278 4.76872 11.7034 4.86683 11.7553 4.97774C11.8071 5.08864 11.8339 5.20961 11.8337 5.33203C11.8341 5.52674 11.7663 5.71544 11.6421 5.86536C11.5721 5.94975 11.4862 6.0195 11.3892 6.07062C11.2923 6.12175 11.1862 6.15325 11.077 6.16331C10.9679 6.17337 10.8578 6.16181 10.7532 6.12927C10.6485 6.09673 10.5513 6.04387 10.4671 5.9737L6.83373 2.9487L6.83373 12.832C6.83373 13.053 6.74593 13.265 6.58965 13.4213C6.43337 13.5776 6.22141 13.6654 6.00039 13.6654C5.77938 13.6654 5.56742 13.5776 5.41114 13.4213C5.25486 13.265 5.16706 13.053 5.16706 12.832Z"
            fill="#3B82F6"
          />
        </svg>
      </div>
    ),
    key: "1",
    dataIndex: "sku",
  },
  {
    title: (
      <div>
        <p>
          <FormattedMessage id="contentDelivery.productName" />
        </p>
        <span className="content-delivery__text">
          <FormattedMessage id="contentDelivery.condition" />
        </span>
      </div>
    ),
    key: "2",
    dataIndex: "productNames",
    render: (_: any, { productNames }: { productNames: string[] }) => {
      return productNames.map((productName, i) => <p key={i}>{productName}</p>);
    },
  },
  {
    title: <FormattedMessage id="contentDelivery.additionalInformation" />,
    key: "3",
    dataIndex: "additionalInformations",
    render: (
      _: any,
      { additionalInformations }: { additionalInformations: string[] }
    ) => {
      return additionalInformations.map((additionalInformation, i) => (
        <p key={i}>{additionalInformation}</p>
      ));
    },
  },
  {
    title: (
      <div>
        <p>
          <FormattedMessage id="contentDelivery.plannedNumberOfProducts" />
        </p>
        <span className="content-delivery__text">
          <FormattedMessage id="contentDelivery.plannedNumberOfProducts" />
        </span>
      </div>
    ),
    key: "4",
    dataIndex: "plannedNumberOfProducts",
    render: (
      _: any,
      { plannedNumberOfProducts }: { plannedNumberOfProducts: string[] }
    ) => {
      return plannedNumberOfProducts.map((plannedNumberOfProduct, i) => (
        <p key={i} className="content-delivery__blue">
          {plannedNumberOfProduct}
        </p>
      ));
    },
  },
  {
    title: <FormattedMessage id="checkDelivery.mismatch" />,
    key: "5",
    dataIndex: "mismatch",
  },
  {
    title: <FormattedMessage id="table.status" />,
    key: "6",
    dataIndex: "status",
    render: (_: any, { status }: { status: string[] }) => {
      return status.map((status, i) => <p key={i}>{status}</p>);
    },
  },
];

export const contentDeliveryRows = [
  {
    key: "1",
    sku: "1Y-QFJY-22CM",
    productNames: [
      "[マイケルコース] 6連キーケース JET SET CHARM 小銭入れ付き 6連キーケース",
      "32S1GT9NOB 0005 149 [並行輸入品]",
      "新品",
    ],
    additionalInformations: [
      "サイズ: 標準サイズ",
      " ASIN: BOC239X62N",
      "FNSKU: X0014IIKI1",
    ],
    plannedNumberOfProducts: ["3", "3"],
    mismatch: "0",
    status: ["商品の所在が特定されました。", "必要なアクションはあり ません。"],
  },
];

export const IMAGE_ERROR = (
  <svg
    width={110}
    height={110}
    viewBox="0 0 110 110"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <rect width={110} height={110} fill="url(#pattern0_4355_848)" />
    <defs>
      <pattern
        id="pattern0_4355_848"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#image0_4355_848" transform="scale(0.00390625)" />
      </pattern>
      <image
        id="image0_4355_848"
        width={256}
        height={256}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);
