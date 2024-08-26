import { Alert } from "antd";
import { IMAGE_ERROR } from "../datas";
import { FormattedMessage } from "react-intl";

const Problem = () => {
  return (
    <>
      <div className="problem">
        <Alert
          style={{ color: "#538000" }}
          className="problem__alert problem__alert--success"
          message={<FormattedMessage id="problem.message"/>}
          type="success"
        />
        <div>
          <Alert
            style={{ color: "#EB2725" }}
            className="problem__alert problem__alert--error"
            message={<FormattedMessage id="problem.message"/>}
            type="error"
            showIcon
            icon={
              <svg
                width={10}
                height={10}
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 1L1 9M1 1L9 9"
                  stroke="#EB2725"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
          <div className="problem__row">
            {IMAGE_ERROR}
            <p>Tôi muốn hủy đơn hàng này</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Problem;
