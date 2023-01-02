const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};
const setLocalTheme = (theme) => localStorage.setItem("theme", theme);
export { getStorageTheme, setLocalTheme };
