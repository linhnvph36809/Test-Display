import { Radio } from "antd";
import { FormattedMessage } from "react-intl";

const InputRadio = ({className}:{className:string}) => {
  return (
    <>
      <Radio.Group>
        <Radio className={className} value={"要"}>
          <FormattedMessage id="modal.essential" />
        </Radio>
        <Radio className={className} value={"不要"}>
          <FormattedMessage id="modal.unnecessary" />
        </Radio>
      </Radio.Group>
    </>
  );
};

export default InputRadio;
