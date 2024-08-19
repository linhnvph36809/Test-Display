import { Input } from "antd";

const InputText = ({
  className,
  placeholder = "Lorem ipsum .",
}: {
  className: string;
  placeholder?: string;
}) => {
  return (
    <>
      <Input placeholder={placeholder} className={className} />
    </>
  );
};

export default InputText;
