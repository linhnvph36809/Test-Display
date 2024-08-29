import { Select } from "antd";

const SelectComponent = ({ options, className, ...props }: any) => {
  return (
    <>
      <Select
        {...props}
        dropdownStyle={{ borderRadius: "unset" }}
        className={className}
        options={options}
      />
    </>
  );
};

export default SelectComponent;
