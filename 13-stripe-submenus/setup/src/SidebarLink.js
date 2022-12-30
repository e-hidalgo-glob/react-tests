const SidebarLink = ({ link, index }) => {
  const { url, icon, label } = link;
  return (
    <a key={index} href={url}>
      {icon}
      {label}
    </a>
  );
};
export default SidebarLink;
