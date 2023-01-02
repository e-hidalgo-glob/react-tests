import { useGlobalContext } from "../context";
const AmountInput = () => {
  const { quiz, handleChange } = useGlobalContext();
  return (
    <div className="form-control">
      <label htmlFor="amount">number of questions</label>
      <input
        type="number"
        name="amount"
        id="amount"
        value={quiz.amount}
        onChange={handleChange}
        className="form-input"
        min={1}
        max={50}
      />
    </div>
  );
};
export default AmountInput;
