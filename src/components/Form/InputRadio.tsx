import { Radio } from "antd";
import { FormattedMessage } from "react-intl";

const InputRadio = ({ className, listRadios, ...props }: any) => {
  return (
    <>
      <Radio.Group className={className}>
        {listRadios?.map((radios: any, i: number) => (
          <Radio
            {...props}
            key={i}
            className={radios.className}
            value={radios.defaultValue}
          >
            <FormattedMessage id={radios.translationId} />
          </Radio>
        ))}
      </Radio.Group>
    </>
  );
};

export default InputRadio;
