export const wrapString = (string: string, width: number = 100) =>
  string.replace(
    new RegExp(`(?![^\\n]{1,${width}}$)([^\\n]{1,${width}})\\s`, "g"),
    "$1\n"
  );
