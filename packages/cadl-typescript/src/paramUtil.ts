import { HttpOperationParameter } from "@cadl-lang/rest/http";
export function isApiVersion(param: HttpOperationParameter) {
  return param.type === "query" && param.name.toLowerCase() === "api-version";
}
