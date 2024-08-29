import { Typography } from "antd";
import { FormattedMessage } from "react-intl";
const { Title } = Typography;

const Heading = ({translations}:{translations: string}) => {
  return (
    <>
      <Title className="heading"><FormattedMessage id={translations} /></Title>
    </>
  );
};

export default Heading;
