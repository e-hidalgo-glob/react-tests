const SidebarLink = ({ link }) => {
  const { id, url, text, icon } = link;
  return (
    <li key={id}>
      <a href={url}>
        {icon}
        {text}
      </a>
    </li>
  );
};

export default SidebarLink;