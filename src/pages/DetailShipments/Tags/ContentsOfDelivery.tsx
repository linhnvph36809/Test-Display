import { Checkbox } from "antd";
import { contentDeliveryColumns, contentDeliveryRows } from "../datas";
import { FormattedMessage } from "react-intl";
import Pagination from "../../../components/Pagination";
import TablePrimary from "../../../components/TablePrimary";

const ContentsOfDelivery = () => {
  return (
    <>
      <div className="content-delivery">
        <div>
            <Checkbox className="content-delivery__checkbox"><FormattedMessage id="contentDelivery.showOnly" /></Checkbox>
        </div>
        <TablePrimary columns={contentDeliveryColumns as any} dataSource={contentDeliveryRows} />
        <Pagination />
        
      </div>
    </>
  );
};

export default ContentsOfDelivery;
