const InforPay = () => {
  return (
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
          総金額: <span className="color-black font-semibold">$11.50</span>
        </p>
        <p className="text-xs color-gray flex justify-between items-center">
          配送料の合計見積り額::{" "}
          <span className="color-black font-semibold">$142.10</span>
        </p>
        <div className="flex justify-between items-end">
          <h4 className="text-xs color-gray  m-t-3 send-shipping__total">
            梱包準備、 ラベルの貼付、 納品先集約の手数料、および
            配送料の合計見積り額 (その他の手数料が発生する場合 があります):{" "}
          </h4>
          <span className="text-xs color-black font-semibold">$153.60</span>
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
  );
};

export default InforPay;
