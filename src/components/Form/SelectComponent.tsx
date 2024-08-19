import { Select } from "antd";
import { ReactNode } from "react";

type TypeOptions = {
  value: string;
  label: ReactNode;
};

const SelectComponent = ({
  options,
  className,
  ...props
}: {
  options: TypeOptions[];
  className: string;
  defaultValue: string;
}) => {

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
