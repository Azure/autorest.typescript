import { Parameter } from "../modularCodeModel.js";

export function getParameterType(param: Parameter): string {
  switch (param.type.type) {
    case "Key":
      return "AzureKeyCredential";
    case "OAuth2":
      return "TokenCredential";
    default:
      return param.type.type;
  }
}
