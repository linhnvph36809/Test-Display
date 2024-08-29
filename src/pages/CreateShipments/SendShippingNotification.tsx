import { Button, DatePicker, Radio, Upload } from "antd";
import FormattedTranslations from "../../components/FormattedMessage";
import Label from "./components/Label";
import InputRadio from "../../components/Form/InputRadio";
import { ICON_UPLOAD } from "./datas";
import InputText from "../../components/Form/InputText";
import SelectComponent from "../../components/Form/SelectComponent";

const SendShippingNotification = () => {
  return (
    <>
      <div className="create-shipments">
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
          <div>
            <div className="send-shipping p-x-3">
              <div className="m-y-2">
                <label htmlFor="" className="text-sm color-text font-semibold">
                  出荷日
                </label>
                <DatePicker className="create-shipments__date m-y-2" />
              </div>
              <div className="m-y-4">
                <h4 className="text-sm color-text font-semibold m-b-2">
                  納品分散サービスを選択
                </h4>
                <p className="text-xs send-shipping__text">
                  より多くの場所に在庫を納品することで、納品分散サービスの手数料を最小限に抑え、購入者への配送時間を短縮します。
                  Amazonが最適化した納品先の分割または部分的な納品先の分割の手数料を削減するには、すべての納品を完了し、
                  いかなる納品先の分割であっても
                  <span className="color-primary">
                    削除したり、放棄したり、 間違った経路で配送したり
                  </span>{" "}
                  しないでください。
                  <span className="color-primary">詳細はこちら</span>{" "}
                  配送会社の配送料は別途発生し、納品分散サービス手数料には含まれません。
                </p>
                <div className="m-y-4">
                  <InputRadio
                    className={"send-shipping__radio"}
                    listRadios={[
                      {
                        defaultValue: "日本",
                        translationId: "modal.essential",
                        className: "send-shipping__radio",
                      },
                      {
                        defaultValue: "アメリカ",
                        translationId: "modal.unnecessary",
                        className: "send-shipping__radio",
                      },
                    ]}
                  />
                </div>
                <div className="m-y-4">
                  <h4 className="text-sm color-text font-semibold m-b-2">
                    支払い方法
                  </h4>
                  <InputRadio
                    className={"send-shipping__radio"}
                    listRadios={[
                      {
                        defaultValue: "日本",
                        translationId: "modal.essential",
                        className: "send-shipping__radio",
                      },
                      {
                        defaultValue: "アメリカ",
                        translationId: "modal.unnecessary",
                        className: "send-shipping__radio",
                      },
                    ]}
                  />
                </div>
                <div className="m-y-4">
                  <h4 className="text-sm color-text font-semibold m-b-2">
                    UGXの保険の有無
                  </h4>
                  <InputRadio
                    className={"send-shipping__radio"}
                    listRadios={[
                      {
                        defaultValue: "日本",
                        translationId: "modal.essential",
                        className: "send-shipping__radio",
                      },
                      {
                        defaultValue: "アメリカ",
                        translationId: "modal.unnecessary",
                        className: "send-shipping__radio",
                      },
                    ]}
                  />
                </div>
                <div className="send-shipping__info">
                  <h4 className="text-sm color-text font-semibold send-shipping__heading">
                    納品#1
                  </h4>
                  <div className="p-4">
                    <p className="text-xs send-shipping__text--gray">
                      発送元 :{" "}
                      <span className="font-bold color-text">
                        Interline Corporation C/O Ryota, Mari, Manee, 2203 E.
                        Carson St., Unit A-3, Cars on, CA, 90810, US変更
                      </span>
                    </p>
                    <p className="text-xs m-t-3 send-shipping__text--gray">
                      納品先 :{" "}
                      <span className="font-bold color-text">
                        〒134-0086 東京都江戸川区臨海町３丁目６−４
                        ヒューリック葛西臨海ビル5階
                      </span>
                    </p>
                  </div>
                  <div className="p-4 send-shipping__content">
                    <div className="flex justify-between items-center">
                      <h4 className="text-sm color-text font-semibold">
                        納品#1
                      </h4>
                      <svg
                        width={12}
                        height={8}
                        viewBox="0 0 12 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.201276 2.09775L5.01191 7.71165C5.08945 7.80209 5.18564 7.87469 5.29387 7.92446C5.40211 7.97423 5.51983 8 5.63896 8C5.75809 8 5.87582 7.97423 5.98405 7.92446C6.09229 7.87469 6.18847 7.80209 6.26602 7.71165L11.0766 2.09775C11.5358 1.5619 11.1551 0.734202 10.4496 0.734202L0.826954 0.734202C0.121431 0.734202 -0.259207 1.5619 0.201276 2.09775Z"
                          fill="#343434"
                        />
                      </svg>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs m-t-3">
                          輸送 : <span className="font-bold color-text">3</span>
                        </p>
                        <p className="text-xs m-t-3">
                          SKU : <span className="font-bold color-text">1</span>
                        </p>
                        <p className="text-xs m-t-3">
                          ユニット : :{" "}
                          <span className="font-bold color-text">15</span>
                        </p>
                        <p className="text-xs m-t-3">
                          Weight :{" "}
                          <span className="font-bold color-text">
                            54 ポンド
                          </span>
                        </p>
                        <p className="text-xs m-t-3">
                          出品者が梱包を行う必要のあるSKU :{" "}
                          <span className="font-bold color-text">1</span> (15点)
                        </p>
                      </div>
                      <div>
                        <div className="send-shipping__image">
                          <img src="" alt="" />
                        </div>
                        <p className="color-primary m-t-4">内容を表示</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="m-y-4">
                  <h4 className="text-sm color-text font-semibold">
                    バーコードラベルの貼付依頼
                  </h4>
                  <Radio.Group className="m-y-4">
                    <Radio value={"依頼する"}>依頼する</Radio>
                    <Upload className="send-shipping__upload">
                      <Button icon={ICON_UPLOAD}>ファイルアップロード</Button>
                    </Upload>
                    <Radio value={"依頼しない"}>依頼しない</Radio>
                  </Radio.Group>
                </div>
                <div className="m-y-4">
                  <h4 className="text-sm color-text font-semibold">
                    食品の有無
                  </h4>
                  <InputRadio
                    className={"send-shipping__radio"}
                    listRadios={[
                      {
                        defaultValue: "日本",
                        translationId: "modal.essential",
                        className: "send-shipping__radio",
                      },
                      {
                        defaultValue: "アメリカ",
                        translationId: "modal.unnecessary",
                        className: "send-shipping__radio",
                      },
                    ]}
                  />
                </div>
                <div className="m-y-4">
                  <h4 className="text-sm color-text font-semibold">
                    食品の有無
                  </h4>
                  <InputRadio
                    className={"send-shipping__radio"}
                    listRadios={[
                      {
                        defaultValue: "日本",
                        translationId: "modal.essential",
                        className: "send-shipping__radio",
                      },
                      {
                        defaultValue: "アメリカ",
                        translationId: "modal.unnecessary",
                        className: "send-shipping__radio",
                      },
                    ]}
                  />
                  <InputText
                    className="send-shipping__input"
                    placeholder="FDA"
                  />
                </div>
                <div className="m-y-4">
                  <h4 className="text-sm color-text font-semibold">
                    化粧品の有無
                  </h4>
                  <Radio.Group className="m-y-4">
                    <div>
                      <Radio value={"依頼する"}>依頼する</Radio>
                    </div>
                    <div>
                      <Radio value={"依頼しない"}>依頼しない</Radio>
                    </div>
                    <Upload className="send-shipping__upload">
                      <Button icon={ICON_UPLOAD}>ファイルアップロード</Button>
                    </Upload>
                  </Radio.Group>
                </div>
                <div className="m-y-4">
                  <h4 className="text-sm color-text font-semibold">
                    食品の有無
                  </h4>
                  <Radio.Group className="m-y-4">
                    <Radio value={"依頼する"}>依頼する</Radio>
                    <SelectComponent
                      defaultValue={"配送業者を選択"}
                      className={"send-shipping__select"}
                      options={[
                        {
                          value: "電池の種類を選択してください",
                          label: "電池の種類を選択してください",
                        },
                        {
                          value: "組込/記載不要(組電池2個単電池4個以下)",
                          label: "組込/記載不要(組電池2個単電池4個以下)",
                        },
                        {
                          value: "組込/リチウムイオン(組電池2個単電池4個超)",
                          label: "組込/リチウムイオン(組電池2個単電池4個超)",
                        },
                        {
                          value: "組込/リチウム金属(組電池2個単電池4個超)",
                          label: "組込/リチウム金属(組電池2個単電池4個超)",
                        },
                        {
                          value: "同梱/リチウムイオン",
                          label: "同梱/リチウムイオン",
                        },
                        {
                          value: "同梱/リチウム金属",
                          label: "同梱/リチウム金属",
                        },
                      ]}
                    />
                    <Radio value={"依頼しない"}>依頼しない</Radio>
                  </Radio.Group>
                </div>
              </div>
            </div>
            <div className="flex justify-between send-shipping__end p-3">
              <div>
                <h4 className="text-sm font-semibold">続行しますか?</h4>
                <p className="xs color-black">
                  Amazonが出品者に代わって配送ラベルを作成する前に、
                  詳細を表示してすべてが正しいことを確認して ください。
                </p>
              </div>
              <div className="send-shipping__pay">
                <p className="text-xs color-gray flex justify-between items-center">
                  梱包手数料とラベル貼付手数料の合計:{" "}
                  <span className="color-black font-semibold">$0.00</span>
                </p>
                <p className="text-xs color-gray flex justify-between items-center m-y-1">
                  総金額:{" "}
                  <span className="color-black font-semibold">$11.50</span>
                </p>
                <p className="text-xs color-gray flex justify-between items-center">
                  配送料の合計見積り額::{" "}
                  <span className="color-black font-semibold">$142.10</span>
                </p>
                <div className="flex justify-between items-end">
                  <h4 className="text-xs color-gray  m-t-3 send-shipping__total">
                    梱包準備、 ラベルの貼付、 納品先集約の手数料、および
                    配送料の合計見積り額 (その他の手数料が発生する場合
                    があります):{" "}
                  </h4>
                  <span className="text-xs color-black font-semibold">
                    $153.60
                  </span>
                </div>

                <button className="m-y-3 send-shipping__btn--order">
                  請求額を承認して出荷通知を送信
                </button>
                <p className="text-xs color-black">
                  Amazonのパートナーキャリアを利用する場合、 24時間以内は
                  配送業者の配送料を取り消すことができます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SendShippingNotification;
