import { useGlobalContext } from "./context";
import PersonCardButtons from "./PersonCardButtons";
const Person = () => {
  const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";
  const { loading, title, userValue, person, getPerson } = useGlobalContext();

  return (
    <main>
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          <img
            src={(person && person.image) || defaultImage}
            alt="random user"
            className="user-img"
          />
          <p className="user-title">My {title} is</p>
          <p className="user-value">{userValue}</p>
          <PersonCardButtons />
          <button className="btn" type="button" onClick={getPerson}>
            {loading ? "loading..." : "random user"}
          </button>
        </div>
      </div>
    </main>
  );
};

export default Person;
