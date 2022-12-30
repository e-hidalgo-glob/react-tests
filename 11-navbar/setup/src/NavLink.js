const NavLink = ({ linkData }) => {
  const { id, url, text } = linkData;
  return (
    <li key={id}>
      <a href={url}>{text}</a>
    </li>
  );
};
export default NavLink;
