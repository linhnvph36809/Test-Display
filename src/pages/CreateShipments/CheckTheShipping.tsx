import InputText from "../../components/Form/InputText";
import SelectComponent from "../../components/Form/SelectComponent";
import FormattedTranslations from "../../components/FormattedMessage";
import Heading from "../../components/Heading";
import InforPay from "./components/InforPay";
import Label from "./components/Label";

const CheckTheShipping = () => {
  return (
    <>
      <div className="create-shipments">
        <Heading translations="createShip.deliveryToAmazon" />
        <div className="create-shipments__top">
          <Label isBorder={true} text="詳細はこちら">
            <FormattedTranslations id="createShipments.labelCheckShipping" />
          </Label>
        </div>
        <div className="create-shipments__main">
          <Label isBorder={false}>
            <FormattedTranslations id="createShipments.checkShippingBoxLabel" />
          </Label>
          <div className="p-x-3 m-t-4">
            <div>
              <p className="color-gray text-sm font-normal">
                <FormattedTranslations id="createShipments.shippingSource" /> :{" "}
                <span className="color-black font-bold">
                  Interline Corporation C/O Ryota, Mari, Manee, 2203 E. Carson
                  St., Unit A-3、 Carson、CA、 90810, US
                </span>
              </p>
              <p className="color-gray text-sm font-normal m-t-2">
                <FormattedTranslations id="createShipments.shippingDate" /> :{" "}
                <span className="color-black font-bold">
                  <FormattedTranslations id="createShipments.shippingDateValue" />{" "}
                  :{" "}
                  <span className="color-primary font-bold">
                    <FormattedTranslations id="createShipments.changeShippingDate" />
                  </span>
                </span>
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold color-text m-t-4">
                3:{" "}
                <FormattedTranslations id="createShipments.confirmedShipments" />
              </h4>
              <p className="color-gray text-sm font-normal m-t-3">
                <FormattedTranslations id="createShipments.afterYouPrint" />
              </p>
            </div>
            <div className="confirmed-shipments m-y-4">
              <div className="flex justify-between items-center confirmed-shipments__head p-3">
                <h4 className="text-sm font-bold color-text">
                  <FormattedTranslations id="createShipments.deliveryOfMaterials" />
                </h4>
                <div className="flex gap-2 items-center text-sm font-normal color-primary">
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 16V13.48L13.18 0.288015C13.2833 0.196682 13.3967 0.126015 13.52 0.0760154C13.6433 0.0260154 13.7723 0.000681818 13.907 1.51514e-05C14.0417 -0.000651515 14.1717 0.020682 14.297 0.0640153C14.4237 0.106015 14.5403 0.182015 14.647 0.292015L15.714 1.36602C15.824 1.47202 15.8993 1.58868 15.94 1.71602C15.98 1.84268 16 1.96935 16 2.09602C16 2.23202 15.9773 2.36202 15.932 2.48602C15.886 2.60935 15.8133 2.72235 15.714 2.82502L2.519 16H0ZM13.504 3.58902L15 2.11102L13.889 1.00002L12.412 2.49602L13.504 3.58902Z"
                      fill="#3B82F6"
                    />
                  </svg>
                  <FormattedTranslations id="createShipments.viewOrEditContent" />
                </div>
              </div>
              <div className="p-3">
                <p className="color-gray text-xs font-normal m-t-2">
                  <FormattedTranslations id="createShipments.deliveryName" /> :{" "}
                  <span className="color-black font-bold">
                    FBA STA (05/28/2024 08:12) - RDU2
                  </span>
                </p>
                <p className="color-gray text-xs font-normal m-t-2">
                  <FormattedTranslations id="createShipments.deliveryNumber" />{" "}
                  : <span className="color-black font-bold">TWD09AQ34VGR</span>
                </p>
                <p className="color-gray text-xs font-normal m-t-2">
                  <FormattedTranslations id="createShipments.shippingSource" />{" "}
                  :{" "}
                  <span className="color-black font-bold">
                    Interline Corporation C/O Ryota, Mari, Manee, 2203 E. Carson
                    St., Unit A-3, Cars on, CA, 90810, US変更
                  </span>
                </p>
                <p className="color-gray text-xs font-normal m-t-2">
                  <FormattedTranslations id="createShipments.deliveryDestination" />{" "}
                  : :{" "}
                  <span className="color-black font-bold">
                    RDU2 - 27577 United States NCSMITHFIELD 2150 US HWY 70
                    Business West
                  </span>
                </p>
              </div>
              <div className="confirmed-shipments__center">
                <div className="flex justify-between items-center p-3">
                  <h4 className="text-sm font-bold color-text">
                    <FormattedTranslations id="createShipments.shippingProducts" />{" "}
                    : : 輸送箱: 3, SKU: 1, ユニット: 15
                  </h4>
                  <svg
                    width={8}
                    height={12}
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.36924 11.8046L6.98313 6.99395C7.07357 6.91641 7.14617 6.82022 7.19594 6.71199C7.24571 6.60375 7.27148 6.48603 7.27148 6.3669C7.27148 6.24777 7.24571 6.13004 7.19594 6.02181C7.14617 5.91357 7.07357 5.81738 6.98313 5.73984L1.36924 0.929211C0.833385 0.470105 0.00568676 0.850743 0.00568676 1.55627L0.00568676 11.1789C0.00568676 11.8844 0.833385 12.2651 1.36924 11.8046Z"
                      fill="#646464"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-3">
                <h4 className="text-sm font-bold color-text m-b-2">
                  <FormattedTranslations id="createShipments.printBoxLabels" />{" "}
                </h4>
                <div className="flex items-center gap-3 m-b-4">
                  <SelectComponent
                    className="confirmed-shipments__select"
                    defaultValue="8.5° X 5.5US レターサイズ"
                  />
                  <button className="confirmed-shipments__confirm">
                    <FormattedTranslations id="createShipments.confirmation" />{" "}
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <InputText
                    className="confirmed-shipments__input"
                    placeholder="この納品のステータス:"
                  />
                  <button className="confirmed-shipments__progress">
                    <FormattedTranslations id="createShipments.inProgress" />{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <InforPay />
        <div className="m-t-4">
          <Label isBorder={true} text="詳細はこちら">
            <FormattedTranslations id="createShipments.trackingInformation" />{" "}
          </Label>
        </div>
      </div>
    </>
  );
};

export default CheckTheShipping;
