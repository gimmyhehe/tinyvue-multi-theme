const formatContent = (theme) => {
  const { data } = theme;
  if (!data) {
    return "";
  }

  const rootVars = Object.entries(data).filter(([key]) =>
    key.startsWith("ti-common")
  );
  const buttonVars = Object.entries(data).filter(([key]) =>
    key.startsWith("ti-button")
  );
  const alertVars = Object.entries(data).filter(([key]) =>
    key.startsWith("ti-alert")
  );
  return (
    `html:root{
    ${rootVars.map(([key, value]) => `--${key}: ${value}`).join(";\n")}
  }` +
    `
      .tiny-button[class*=tiny] {
    ${buttonVars.map(([key, value]) => `--${key}: ${value}`).join(";\n")}
      }
      .tiny-alert[class*=tiny] {
    ${alertVars.map(([key, value]) => `--${key}: ${value}`).join(";\n")}
      }
  `
  );
};

class ThemeTool {
  constructor() {
    this.contentElement = document.createElement("style");
    this.contentElement.id = "theme-tool";
    document.head.appendChild(this.contentElement);
  }
  changeTheme(theme) {
    this.contentElement.textContent = formatContent(theme);
  }
}

export default ThemeTool;
