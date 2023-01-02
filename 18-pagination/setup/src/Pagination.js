import { useGlobalContext } from "./context";

const Pagination = () => {
  const { prevPage, nextPage, page, setPage, data } = useGlobalContext();
  const handlePage = (index) => setPage(index);
  const paginationButtons = data.map((_, index) => (
    <button
      key={index}
      className={`page-btn ${index === page ? "active-btn" : null}`}
      onClick={() => handlePage(index)}
    >
      {index + 1}
    </button>
  ));
  return (
    <div className="btn-container">
      <button className="prev-btn" onClick={prevPage}>
        prev
      </button>
      {paginationButtons}
      <button className="next-btn" onClick={nextPage}>
        next
      </button>
    </div>
  );
};
export default Pagination;
