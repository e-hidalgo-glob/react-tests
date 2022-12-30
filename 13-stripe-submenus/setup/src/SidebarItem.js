import SidebarLink from "./SidebarLink";

const SidebarItem = ({ item }) => {
  const { links, page } = item;
  const linksList = links.map((link, index) => (
    <SidebarLink link={link} index={index} />
  ));
  return (
    <article>
      <h4>{page}</h4>
      <div className="sidebar-sublinks">{linksList}</div>
    </article>
  );
};

export default SidebarItem;
