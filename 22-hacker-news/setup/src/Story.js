import { useGlobalContext } from "./context";
const Story = ({ story }) => {
  const { objectID, title, num_comments, url, points, author } = story;
  const { removeStory } = useGlobalContext();
  const handleClick = () => removeStory(objectID);
  return (
    <article key={objectID} className="story">
      <h4 className="title">{title}</h4>
      <p className="info">
        {points} points by <span>{author} | </span> {num_comments} comments
      </p>
      <div>
        <a
          href={url}
          className="read-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          read more
        </a>
        <button className="remove-btn" onClick={handleClick}>
          remove
        </button>
      </div>
    </article>
  );
};

export default Story;
