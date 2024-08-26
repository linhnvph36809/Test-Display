import { Button } from "antd";
import InputText from "../../../components/Form/InputText";
import ModalComponent from "../../../components/Modal/Modal";
import Pagination from "../../../components/Pagination";
import TablePrimary from "../../../components/TablePrimary";
import { allRows, readyToShipColumns } from "../datas";
import { useEffect, useState } from "react";

const ReadyToShip = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  useEffect(() => {
    const iconTable = document.querySelector(".table__icon");
    iconTable?.addEventListener("click", () => setIsOpenModal(true));
  }, []);

  const hiddenModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <div>
        <TablePrimary
          columns={readyToShipColumns}
          dataSource={allRows}
          rowSelection={{
            type: "checkbox",
          }}
        />
        <Pagination />
        <div className="create-shipments__end flex justify-between p-y-4">
          <p className="text-xs p-x-4">発送準備ができているSKU: 0 (0点)</p>
          <div className="p-x-4">
            <p className="text-xs">梱包手数料とラベル貼付手数料の合計: $0.00</p>
            <button className="create-shipments__btn">確定して続ける</button>
          </div>
        </div>
        <ModalComponent
          width={"1232px"}
          isSelected={isOpenModal}
          hiddenModal={hiddenModal}
          title={"梱包の詳細"}
          height={"auto"}
          footer={[
            <Button
              className="modal__btn--close color-gray"
              key="submit"
              type="primary"
            >
              閉じる
            </Button>,
          ]}
        >
          <div className="packing-details">
            <div className="modal__body">
              <div className="flex gap-3">
                <div className="modal__image">
                  <img src="" alt="" />
                </div>
                <div>
                  <p className="color-primary text-base font-normal">
                    Aki Beauty Collection Premium Fish Collagen Peptide 13000mg
                    | Protein 14.5g Zinc Royal Jelly Power | Supports Healthy
                    Hair Skin Nail Immune System - Set of 10 Bottles
                  </p>
                  <p className="text-base color-gray">
                    SKU: <span>COLLAGENATE-1300</span>
                  </p>
                  <p className="text-base color-gray">
                    ASIN: <span>B0C9D1RSZ3</span>
                  </p>
                </div>
              </div>
              <div className="modal__form">
                <form action="">
                  <div className="form__item m-y-4">
                    <label htmlFor="" className="text-sm font-semibold">
                      梱包テンプレート名
                    </label>
                    <InputText
                      className="modal__body__input--lg"
                      placeholder="5箱入"
                    />
                  </div>
                  <div className="form__item m-y-1">
                    <label htmlFor="" className="text-sm font-semibold">
                      梱包テンプレート名
                    </label>
                    <InputText
                      className="modal__body__input--base"
                      placeholder="5箱入"
                    />
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="form__item m-y-1">
                      <label htmlFor="" className="text-sm font-semibold">
                        輸送箱ごとの商品数
                      </label>
                      <InputText
                        className="modal__body__input--base"
                        placeholder="5箱入"
                      />
                    </div>
                    <div className="form__item m-y-1">
                      <label htmlFor="" className="text-sm font-semibold">
                        輸送箱の寸法（インチ）
                      </label>
                      <div className="flex gap-2 items-center">
                        <InputText
                          className="modal__body__input--sm"
                          placeholder="5箱入"
                        />
                        X
                        <InputText
                          className="modal__body__input--sm"
                          placeholder="5箱入"
                        />
                        X
                        <InputText
                          className="modal__body__input--sm"
                          placeholder="5箱入"
                        />
                      </div>
                    </div>
                    <div className="form__item m-y-1">
                      <label htmlFor="" className="text-sm font-semibold">
                        輸送箱の重量（ポンド）
                      </label>
                      <InputText
                        className="modal__body__input--base"
                        placeholder="5箱入"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </ModalComponent>
      </div>
    </>
  );
};

export default ReadyToShip;
