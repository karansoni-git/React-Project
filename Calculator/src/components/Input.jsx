import S from "./Input.module.css";
function Input({ inputVal, onButtonClick }) {
  return (
    <>
      <input type="text" className={S.inputField} value={inputVal} readOnly />
    </>
  );
}

export default Input;
