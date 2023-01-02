import { useGlobalContext } from "../context";
const DifficultyInput = () => {
  const { quiz, handleChange } = useGlobalContext();
  return (
    <div className="form-control">
      <label htmlFor="difficulty">select difficulty</label>
      <select
        name="difficulty"
        id="difficulty"
        className="form-input"
        value={quiz.difficulty}
        onChange={handleChange}
      >
        <option value="easy">easy</option>
        <option value="medium">medium</option>
        <option value="hard">hard</option>
      </select>
    </div>
  );
};
export default DifficultyInput;
