import { FormattedMessage } from "react-intl";

const FormattedTranslations = ({ id }: { id: string }) => {
  return (
    <>
      <FormattedMessage id={id} />
    </>
  );
};

export default FormattedTranslations;
