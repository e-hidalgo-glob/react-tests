import { useGlobalContext } from "../context";
const CategoryInput = () => {
  const { quiz, handleChange } = useGlobalContext();
  return (
    <div className="form-control">
      <label htmlFor="category">category</label>
      <select
        name="category"
        id="category"
        className="form-input"
        value={quiz.category}
        onChange={handleChange}
      >
        <option value="sports">sports</option>
        <option value="history">history</option>
        <option value="politics">politics</option>
      </select>
    </div>
  );
};
export default CategoryInput;
