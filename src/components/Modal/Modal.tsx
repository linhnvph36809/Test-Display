import { Button, Modal } from "antd";
import "./modal.sass";

const ModalComponent = ({ isModalOpen, setIsModalOpen }: any) => {
  const showModal = (data: any) => {
    setIsModalOpen((state: any) => ({ ...state, isSelected: true, data }));
  };
  const hiddenModal = () => {
    setIsModalOpen({ isSelected: false, datas: null });
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="トラッキング一覧"
        open={isModalOpen.isSelected}
        onOk={hiddenModal}
        onCancel={hiddenModal}
        okText={<div>送信</div>}
        className="modal"
        width={"750px"}
        closeIcon={
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 1L1 13M1 1L13 13"
              stroke="#646464"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        }
        
      ></Modal>
    </>
  );
};

export default ModalComponent;
