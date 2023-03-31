import { Parameter } from "../modularCodeModel.js";

const parameterTypeMap: Record<string, string> = {
  Key: "AzureKeyCredential",
  OAuth2: "TokenCredential"
};

export function getParameterType(param: Parameter): string {
  switch (param.type.type) {
    case "combined":
      if (!param.type.types) throw new Error("Combined type without types");
      return param.type.types.map((p) => parameterTypeMap[p.type]).join(" | ");

    default:
      return parameterTypeMap[param.type.type] ?? param.type.type;
  }
}
