export function capitalize(str) {
  if (typeof str !== "string") {
    return "Link";
  }
  return `${str[0].toUpperCase()}${[...str].slice(1).join("")}`;
}
