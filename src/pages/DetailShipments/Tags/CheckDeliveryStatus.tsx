import { Table } from "antd";
import { checkDeliveryColumns, checkDeliveryRows } from "../datas";

const CheckDeliveryStatus = () => {
  return (
    <>
      <div className="check-delivery">
        <Table
          columns={checkDeliveryColumns}
          dataSource={checkDeliveryRows}
        />
      </div>
    </>
  );
};

export default CheckDeliveryStatus;
