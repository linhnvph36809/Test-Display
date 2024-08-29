import "./label.sass";
const Label = ({
  isBorder,
  children,
  text
}: {
  isBorder: boolean;
  children: any;
  text?: any
}) => {
  return (
    <>
      <div
        className={`label flex justify-between items-center color color-black m-b-3 ${
          isBorder && "label-border"
        }`}
      >
        <h3 className="text-base font-normal">{children}</h3>
        {text && <p className="text-sm color-primary">{text}</p>}
      </div>
    </>
  );
};

export default Label;
