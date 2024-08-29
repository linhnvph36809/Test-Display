import FormattedTranslations from "../../components/FormattedMessage";
import Heading from "../../components/Heading";
import TablePrimary from "../../components/TablePrimary";
import InforPay from "./components/InforPay";
import Label from "./components/Label";
import { trackingInformationColumn, trackingInformationRows } from "./datas";

const TrackingInformation = () => {
  return (
    <div className="create-shipments">
      <Heading translations="createShip.deliveryToAmazon" />
      <div className="create-shipments__top">
        <Label isBorder={true} text="詳細はこちら">
          <FormattedTranslations id="createShipments.labelTracking" />
        </Label>
      </div>
      <div
        className="create-shipments__main tracking-information"
        style={{ border: "1px solid #C7C7C7" }}
      >
        <Label isBorder={false}>
          <FormattedTranslations id="createShipments.labelTrackingInformation" />
        </Label>
        <div className="p-x-3 m-t-4">
          <div className="tracking-information__delivery">
            <h4 className="flex gap-2 items-center text-sm color-gray">
              納品番号 1 - 2024年5月30日{" "}
              <svg
                width={15}
                height={11}
                viewBox="0 0 15 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.9322 1.63294C14.1037 1.44887 14.1971 1.20542 14.1926 0.953863C14.1882 0.70231 14.0863 0.4623 13.9084 0.284398C13.7305 0.106495 13.4905 0.00458963 13.2389 0.000151275C12.9874 -0.00428708 12.7439 0.0890885 12.5598 0.260604L4.83074 7.9897L1.63294 4.7919C1.44887 4.62038 1.20542 4.52701 0.953862 4.53145C0.702309 4.53588 0.462299 4.63779 0.284397 4.81569C0.106494 4.99359 0.00458963 5.2336 0.000151277 5.48516C-0.00428708 5.73671 0.0890872 5.98016 0.260603 6.16423L4.14457 10.0482C4.32663 10.23 4.57342 10.3322 4.83074 10.3322C5.08805 10.3322 5.33484 10.23 5.5169 10.0482L13.9322 1.63294Z"
                  fill="#646464"
                />
              </svg>
            </h4>
            <p className="text-sm font-nomal color-gray">
              納品番号: <span className="font-semibold">TWD09AQ34VGR</span>
            </p>
          </div>
          <p className="text-sm font-normal p-y-2 color-black">
            <FormattedTranslations id="createShipments.inquirySlipNumber" />
          </p>
          <p className="text-sm font-normal p-y-2 color-black">
            <FormattedTranslations id="createShipments.deliveryCompany" />
          </p>
          <div className="m-b-4">
            <TablePrimary
              columns={trackingInformationColumn}
              dataSource={trackingInformationRows}
            />
          </div>
          <InforPay />
          <div className="flex items-center justify-end gap-4 m-y-4">
            <button className="tracking-information__btn">
              <FormattedTranslations id="createShipments.cancelDeliverySettings" />
            </button>
            <button className="tracking-information__btn">
              <FormattedTranslations id="createShipments.createNewDelivery" />
            </button>

            <button className="tracking-information__btn">
              <FormattedTranslations id="createShipments.openDeliveryProcedureDetails" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackingInformation;
