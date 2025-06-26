import S from "./Button.module.css";
function Button({ buttonName, onButtonClick }) {
  return (
    <button className={S.btn} onClick={() => onButtonClick(buttonName)}>
      {buttonName}
    </button>
  );
}

export default Button;
