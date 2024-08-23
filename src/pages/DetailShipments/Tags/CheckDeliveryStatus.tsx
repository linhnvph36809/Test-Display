import { Table } from "antd";
import { columns, rows } from "../datas";

const CheckDeliveryStatus = () => {
  return (
    <>
      <div className="check-delivery">
        <Table
          columns={columns as any}
          dataSource={rows}
        />
      </div>
    </>
  );
};

export default CheckDeliveryStatus;
