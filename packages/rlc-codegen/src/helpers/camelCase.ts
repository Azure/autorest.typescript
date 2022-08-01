import { camelCase as _camelCase } from "lodash";
export function camelCase(str: string) {
  if (!/^(?<![A-Z])[A-Z]{1,4}(?![A-Z])/.test(str)) {
    return str;
  }

  return _camelCase(str);
}
