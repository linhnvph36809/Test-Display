import { memo } from "react";
import { Modal } from "antd";
import "./modal.sass";

const ModalComponent = memo(
  ({ isSelected, hiddenModal, children, ...props }: any) => {
    return (
      <>
        <Modal
          open={isSelected}
          onOk={hiddenModal}
          onCancel={hiddenModal}
          className="modal"
          {...props}
          closeIcon={
            <svg
              width={14}
              height={14}
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 1L1 13M1 1L13 13"
                stroke="#646464"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        >
          {children}
        </Modal>
      </>
    );
  }
);

export default ModalComponent;
