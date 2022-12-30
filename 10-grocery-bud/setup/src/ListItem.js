import { FaEdit, FaTrash } from "react-icons/fa";
const ListItem = ({ item, editItem, removeItem }) => {
  const { id, title } = item;
  return (
    <article className="grocery-item" key={id}>
      <p className="title">{title}</p>
      <div className="btn-container">
        <button type="button" className="edit-btn" onClick={() => editItem(id)}>
          <FaEdit />
        </button>
        <button
          type="button"
          className="delete-btn"
          onClick={() => removeItem(id)}
        >
          <FaTrash />
        </button>
      </div>
    </article>
  );
};

export default ListItem;
