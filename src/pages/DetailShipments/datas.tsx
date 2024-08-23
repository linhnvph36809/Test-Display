import { FormattedMessage } from "react-intl";
import CheckDeliveryStatus from "./Tags/CheckDeliveryStatus";
import ContentsOfDelivery from "./Tags/ContentsOfDelivery";
import Problem from "./Tags/Problem";
import TrackShipment from "./Tags/TrackShipment";
import InputText from "../../components/Form/InputText";

export const listItems = [
  {
    label: "納品の追跡",
    key: "0",
  },
  {
    label: "配送状況の確認",
    key: "1",
  },
  {
    label: "納品プランの内容",
    key: "2",
  },
  {
    label: "問題",
    key: "3",
  },
];

export const TAGS = [
  <TrackShipment />,
  <CheckDeliveryStatus />,
  <ContentsOfDelivery />,
  <Problem />,
];

export const columns = [
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
    title: <FormattedMessage id="checkDelivery.dimensions" /> ,
    key: "6",
    dataIndex: "dimensions",
  },
];

export const rows = [
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
    dimensions: "30 x 40 x 40"
  },
];
