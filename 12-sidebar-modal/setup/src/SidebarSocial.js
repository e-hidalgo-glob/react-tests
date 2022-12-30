const SidebarSocial = ({ link }) => {
  const { id, url, icon } = link;
  return (
    <li key={id}>
      <a href={url}>
        {icon}
      </a>
    </li>
  );
};

export default SidebarSocial;