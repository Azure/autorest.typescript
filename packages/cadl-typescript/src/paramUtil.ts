import { ModelProperty } from "@cadl-lang/compiler";
import { HttpOperationParameter } from "@cadl-lang/rest/http";
export function isApiVersion(param?: HttpOperationParameter): boolean;
export function isApiVersion(param?: ModelProperty): boolean;
export function isApiVersion(param?: HttpOperationParameter | ModelProperty) {
  return (
    param &&
    param.name &&
    (param.name.toLowerCase() === "api-version" ||
      param.name.toLowerCase() === "apiversion")
  );
}
