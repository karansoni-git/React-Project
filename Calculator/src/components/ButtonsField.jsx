import S from "./ButtonsField.module.css";
import Button from "./Button";
function ButtonsField({ Data, onButtonClick }) {
  return (
    <div className={S.buttonsField}>
      {Data.map((button) => (
        <Button
          key={button}
          buttonName={button}
          onButtonClick={onButtonClick}
        ></Button>
      ))}
    </div>
  );
}
export default ButtonsField;
