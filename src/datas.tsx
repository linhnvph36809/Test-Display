import { Button, Upload } from "antd";
import { FormattedMessage } from "react-intl";

export const columns = [
  {
    title: "ID",
    key: "ID",
    dataIndex: "id",
  },
  {
    title: "tracking-number",
    key: "tracking-number",
    dataIndex: "trackingNumber",
  },
  {
    title: <FormattedMessage id="table.productName" />,
    key: "SKU/商品名/商品のURL",
    dataIndex: "name",
  },
  {
    title: <FormattedMessage id="table.quantity" />,
    key: "数量",
    dataIndex: "quantity",
  },
  {
    title: <FormattedMessage id="table.photoShoot" />,
    key: "写真撮影",
    dataIndex: "takePhoto",
  },
  {
    title: <FormattedMessage id="table.productImage" />,
    key: "商品画像",
    dataIndex: "imageProducts",
    render: (_: any, { imageProducts }: any) => {
      return (
        <div>
          <Upload>
            <Button className="content__btn--upload">
              <FormattedMessage id="table.buttonUpload" />
            </Button>
          </Upload>
          {imageProducts.map((imageProduct: string, i: number) => (
            <svg
              key={i}
              width={62}
              height={76}
              viewBox="0 0 62 76"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect x="0.5" y="8.5" width={55} height={67} fill="white" />
              <rect x="0.5" y="8.5" width={55} height={67} stroke="#C7C7C7" />
              <rect x={46} width={16} height={16} rx={8} fill="white" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M49.5288 3.52925C49.7891 3.2689 50.2112 3.2689 50.4716 3.52925L54.0002 7.05784L57.5288 3.52925C57.7891 3.2689 58.2112 3.2689 58.4716 3.52925C58.7319 3.7896 58.7319 4.21171 58.4716 4.47206L54.943 8.00065L58.4716 11.5292C58.7319 11.7896 58.7319 12.2117 58.4716 12.4721C58.2112 12.7324 57.7891 12.7324 57.5288 12.4721L54.0002 8.94346L50.4716 12.4721C50.2112 12.7324 49.7891 12.7324 49.5288 12.4721C49.2684 12.2117 49.2684 11.7896 49.5288 11.5292L53.0574 8.00065L49.5288 4.47206C49.2684 4.21171 49.2684 3.7896 49.5288 3.52925Z"
                fill="#EB2725"
              />
              <rect
                width={54}
                height={54}
                transform="translate(1 15)"
                fill="url(#pattern0_4708_2920)"
              />
              <rect x={46} width={16} height={16} rx={8} fill="white" />
              <path
                d="M58 4L50 12M50 4L58 12"
                stroke="#EB2725"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <pattern
                  id="pattern0_4708_2920"
                  patternContentUnits="objectBoundingBox"
                  width={1}
                  height={1}
                >
                  <use
                    xlinkHref="#image0_4708_2920"
                    transform="matrix(0.0162037 0 0 0.015625 -0.0185185 0)"
                  />
                </pattern>
                <image
                  id="image0_4708_2920"
                  width={64}
                  height={64}
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAONJREFUeF7t20EOhEAIRFG4/6F7DvEnYeFzryQIv6pBd2behOu9dPvsbog+k+NLgArQAqmJcw9iAAhSgZKB3IJkkAySQTJ4CiE+gA8oBeg0mH3Ai084P89HhqwEqIA209ICsQdjAeaZIgaAYKxBDMCAYy8fXwAIgiAIcoJpJEYGI4VjB3YrbC9gL2AvkCB43cM5PgZgAAZgQFnNZAhdGykQBEEQBEEQDBmgAm2glM/z+QUYisYUGoldO7kY32IEAzCg6RgIRgjFAsw+AgRBMNYgBmCAT2TCYfoPPz/HCqQCX1eBHzHnv7C7WhBSAAAAAElFTkSuQmCC"
                />
              </defs>
            </svg>
          ))}
        </div>
      );
    },
  },
  {
    title: <FormattedMessage id="table.requestDetails" />,
    key: "検品依頼内容",
    dataIndex: "requestDetails",
  },
  {
    title: <FormattedMessage id="table.receiptDetails" />,
    key: "検品依収内容",
    dataIndex: "receiptDetails",
  },
  {
    title: <FormattedMessage id="table.invoiceNumber" />,
    key: "請求書番号",
    dataIndex: "invoiceNumber",
  },
  {
    title: <FormattedMessage id="table.receptionNumber" />,
    key: "受付番号",
    dataIndex: "receptionNumber",
  },
  {
    title: <FormattedMessage id="table.status" />,
    key: "ステータス",
    dataIndex: "status",
  },
  {
    title: <FormattedMessage id="table.statusProduct" />,
    key: "商品状態",
    dataIndex: "statusProduct",
  },
  {
    title: <FormattedMessage id="table.results" />,
    key: "検品結果",
    dataIndex: "testResults",
  },
  {
    title: <FormattedMessage id="table.shipping" />,
    key: "発送詳細",
    dataIndex: "shippingDetails",
  },
  {
    title: <FormattedMessage id="table.nameOfBranch" />,
    key: "支店名",
    dataIndex: "NameOfBranch",
  },
  {
    title: <FormattedMessage id="table.paymentMethods" />,
    key: "その他支払い方法",
    dataIndex: "paymentMethods",
  },
];

export const rows = [
  {
    key: "1",
    id: "34355",
    trackingNumber: "Lorem ipsum dolor sit amet .",
    name: "Lorem ipsum dolor sit amet .",
    quantity: "1",
    takePhoto: <FormattedMessage id="table.rowPhotoShoot" />,
    imageProducts: ["12", "1231"],
    requestDetails: <FormattedMessage id="table.rowRequestDetails" />,
    receiptDetails: "Lorem ipsum .",
    invoiceNumber: "243545366",
    receptionNumber: "463546653",
    status: <FormattedMessage id="table.rowStatus" />,
    statusProduct: <FormattedMessage id="table.rowStatusProduct" />,
    testResults: "Lorem ipsum",
    shippingDetails: "Lorem ipsum",
    NameOfBranch: "Admin",
    paymentMethods: "Lorem ipsum .",
  },
  {
    key: "2",
    id: "34355",
    trackingNumber: "Lorem ipsum dolor sit amet .",
    name: "Lorem ipsum dolor sit amet .",
    quantity: "1",
    takePhoto: <FormattedMessage id="table.rowPhotoShoot" />,
    imageProducts: ["12", "1231"],
    requestDetails: <FormattedMessage id="table.rowRequestDetails" />,
    receiptDetails: "Lorem ipsum .",
    invoiceNumber: "243545366",
    receptionNumber: "463546653",
    status: <FormattedMessage id="table.rowStatus" />,
    statusProduct: <FormattedMessage id="table.rowStatusProduct" />,
    testResults: "Lorem ipsum",
    shippingDetails: "Lorem ipsum",
    NameOfBranch: "Admin",
    paymentMethods: "Lorem ipsum .",
  },
  {
    key: "3",
    id: "34355",
    trackingNumber: "Lorem ipsum dolor sit amet .",
    name: "Lorem ipsum dolor sit amet .",
    quantity: "1",
    takePhoto: <FormattedMessage id="table.rowPhotoShoot" />,
    imageProducts: ["12", "1231"],
    requestDetails: <FormattedMessage id="table.rowRequestDetails" />,
    receiptDetails: "Lorem ipsum .",
    invoiceNumber: "243545366",
    receptionNumber: "463546653",
    status: <FormattedMessage id="table.rowStatus" />,
    statusProduct: <FormattedMessage id="table.rowStatusProduct" />,
    testResults: "Lorem ipsum",
    shippingDetails: "Lorem ipsum",
    NameOfBranch: "Admin",
    paymentMethods: "Lorem ipsum .",
  },
];
