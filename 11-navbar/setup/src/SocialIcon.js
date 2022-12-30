const SocialIcon = ({ socialIcon }) => {
  const { id, url, icon } = socialIcon;
  return (
    <li key={id}>
      <a href={url}>{icon}</a>
    </li>
  );
};

export default SocialIcon;
