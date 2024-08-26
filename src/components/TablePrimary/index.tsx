import { Table } from "antd";
import "./table.sass"
const TablePrimary = ({columns,dataSource,...props}:any) => {
  return (
    <>
      <Table
        columns={columns}
        dataSource={dataSource}
        {...props}
        id="table-primary"
      />
    </>
  );
};

export default TablePrimary;
