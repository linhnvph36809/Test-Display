import { FormattedMessage } from "react-intl";

export const columns = [
  {
    title: (
      <div>
        <p>
          <FormattedMessage id="shipping.deliveryName" />
        </p>
        <span className="shipping__column--gray">
          {" "}
          <FormattedMessage id="shipping.deliveryNumber" />
        </span>
      </div>
    ),
    key: "1",
    dataIndex: "deliveryName",
  },
  {
    title: (
      <span className="shipping__column--blue">
        {" "}
        <FormattedMessage id="shipping.created" />
      </span>
    ),
    key: "2",
    dataIndex: "created",
  },
  {
    title: (
      <span className="shipping__column--blue">
        <FormattedMessage id="shipping.lastUpdatedDate" />
      </span>
    ),
    key: "3",
    dataIndex: "lastUpdatedDate",
  },
  {
    title: <FormattedMessage id="shipping.deliveryAddress" />,
    key: "4",
    dataIndex: "deliveryAddress",
  },
  {
    title: "SKU",
    key: "5",
    dataIndex: "sku",
  },
  {
    title: (
      <div>
        <p>
          <FormattedMessage id="shipping.plannedNumberProducts" />
        </p>
        <span className="shipping__column--gray">
          <FormattedMessage id="shipping.itemDetermined" />
        </span>
      </div>
    ),
    key: "6",
    dataIndex: "plannedNumberProducts",
  },
  {
    title: "ステータス",
    key: "7",
    render: () => {
      return (
        <button className="shipping__btn--canceled">キャンセル済み</button>
      );
    },
  },
  {
    title: "次の手順",
    key: "8",
    render: () => {
      return (
        <button className="shipping__btn--confirm">納品ブランの確認</button>
      );
    },
  },
  {
    title: "納品プラン状態",
    key: "9",
    render: () => {
      return <button className="shipping__btn--empty">キャンセル</button>;
    },
  },
];

export const rows = [
  {
    key: "1",
    deliveryName: (
      <div>
        <p className="shpping__row--blue">FBA STA (2024/06/24 01:52)-NRT5</p>
        <span>FBA15DZDOMZS</span>
      </div>
    ),
    created: (
      <div>
        <p>2024年6月24日</p>
        <span className="shipping__row--gray">午前8:51</span>
      </div>
    ),

    lastUpdatedDate: (
      <div>
        <p>2024年6月24日</p>
        <span className="shipping__row--gray">午前8:51</span>
      </div>
    ),
    deliveryAddress: "NRT5",
    sku: "1",
    plannedNumberProducts: (
      <div>
        <p className="shipping__row--end">0</p>
        <p className="shipping__row--end">0</p>
      </div>
    ),
    receiptDetails: "Lorem ipsum .",
  },
];
