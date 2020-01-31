export enum IndentationType {
  None,
  JSDocParam
}

export interface WrapStringOptions {
  indentationType?: IndentationType;
  paramNameLength?: number;
  width?: number;
}

export const wrapString = (
  string: string,
  {
    width = 100,
    indentationType = IndentationType.None,
    paramNameLength = 0
  }: WrapStringOptions = {}
) => {
  const indentation = getIndentation(indentationType, paramNameLength);
  return string.replace(
    new RegExp(`(?![^\\n]{1,${width}}$)([^\\n]{1,${width}})\\s`, "g"),
    `$1\n${indentation}`
  );
};

const getIndentation = (
  indentationType: IndentationType,
  paramNameLength: number
) => {
  switch (indentationType) {
    case IndentationType.JSDocParam:
      return " ".repeat(" @param ".length + paramNameLength);
    default:
      return "";
  }
};
