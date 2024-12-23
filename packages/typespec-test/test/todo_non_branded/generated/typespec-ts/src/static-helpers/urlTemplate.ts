// Licensed under the MIT License.

//---------------------
// interfaces
//---------------------
interface GetVarValueOptions {
  isFirst: boolean;
  operator?: string;
  varValue?: any;
  varName?: string;
  modifier?: string;
  allowReserved: boolean;
}

export interface ExpandUrlTemplateOptions {
  allowReserved?: boolean;
}

// ---------------------
// helpers
// ---------------------
function encodeReserved(str: string) {
  return str
    .split(/(%[0-9A-Fa-f]{2})/g)
    .map(function (part: string) {
      if (!/%[0-9A-Fa-f]/.test(part)) {
        part = encodeURI(part).replace(/%5B/g, "[").replace(/%5D/g, "]");
      }
      return part;
    })
    .join("");
}

function encodeUnreserved(str: any) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
    return "%" + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

function isDefined(value: any) {
  return value !== undefined && value !== null;
}

function isEmptyString(value: any) {
  return value === "";
}

function getIsNamed(operator: string | undefined) {
  return operator && [";", "?", "&"].includes(operator);
}

function getIfEmpty(operator: string | undefined) {
  return operator && ["?", "&"].includes(operator) ? "=" : "";
}

function getFirstOrSeparator(operator: string | undefined, isFirst = false) {
  if (isFirst) {
    return !operator || operator === "+" ? "" : operator;
  }
  if (!operator || operator === "+" || operator === "#") {
    return ",";
  } else if (operator === "?") {
    return "&";
  } else {
    return operator;
  }
}

function encodeValueWithOperator(
  operator: string | undefined,
  value: any,
  allowReserved: boolean,
) {
  return allowReserved === true || operator === "+" || operator === "#"
    ? encodeReserved(value)
    : encodeUnreserved(value);
}

function getVarValue(option: GetVarValueOptions): string | undefined {
  let isFirst = option.isFirst,
    value = option.varValue;
  const { operator, varName, modifier } = option;
  const named = getIsNamed(operator),
    ifEmpty = getIfEmpty(operator),
    vals: string[] = [];
  if (!isDefined(value)) {
    return undefined;
  } else if (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
  ) {
    value = value.toString();
    vals.push(getFirstOrSeparator(operator, isFirst));
    if (named) {
      vals.push(encodeUnreserved(varName));
      isEmptyString(value) ? vals.push(ifEmpty) : vals.push("=");
    }
    if (modifier && modifier !== "*") {
      value = value.substring(0, parseInt(modifier, 10));
    }
    vals.push(encodeValueWithOperator(operator, value, option.allowReserved));
    return vals.join("");
  } else {
    if (modifier === "*") {
      if (named) {
        if (Array.isArray(value) && varName) {
          for (const val of value.filter(isDefined)) {
            vals.push(
              `${getFirstOrSeparator(operator, isFirst)}${encodeURIComponent(varName)}`,
            );
            if (isEmptyString(val)) {
              vals.push(ifEmpty);
            } else {
              vals.push("=");
              vals.push(
                encodeValueWithOperator(operator, val, option.allowReserved),
              );
            }
            isFirst = false;
          }
        } else if (typeof value === "object") {
          for (const key of Object.keys(value)) {
            if (!isDefined(value[key])) {
              continue;
            }
            vals.push(
              `${getFirstOrSeparator(operator, isFirst)}${encodeURIComponent(key)}`,
            );
            if (isEmptyString(value[key])) {
              vals.push(ifEmpty);
            } else {
              vals.push("=");
              vals.push(
                encodeValueWithOperator(
                  operator,
                  value[key],
                  option.allowReserved,
                ),
              );
            }
            isFirst = false;
          }
        }
        return vals.join("");
      } else {
        if (Array.isArray(value) && varName) {
          for (const val of value.filter(
            (val) => isDefined(val) && !isEmptyString(val),
          )) {
            vals.push(
              `${getFirstOrSeparator(operator, isFirst)}${encodeURIComponent(val)}`,
            );
            isFirst = false;
          }
        } else if (typeof value === "object") {
          for (const key of Object.keys(value)) {
            if (!isDefined(value[key])) {
              continue;
            }
            vals.push(`${getFirstOrSeparator(operator, isFirst)}`);
            if (key) {
              vals.push(`${encodeURIComponent(key)}=`);
            }
            vals.push(
              encodeValueWithOperator(
                operator,
                value[key],
                option.allowReserved,
              ),
            );
            isFirst = false;
          }
        }
        return vals.join("");
      }
    } else {
      const first = getFirstOrSeparator(operator, isFirst);
      if (named) {
        vals.push(
          encodeValueWithOperator(operator, varName, option.allowReserved),
        );
        if (isEmptyString(value)) {
          if (!ifEmpty) {
            vals.push(ifEmpty);
          }
          return !vals.join("") ? undefined : `${first}${vals.join("")}`;
        }
        vals.push("=");
      }

      const items = [];
      if (Array.isArray(value)) {
        value
          .filter(isDefined)
          .forEach((val) =>
            items.push(
              encodeValueWithOperator(operator, val, option.allowReserved),
            ),
          );
      } else if (typeof value === "object") {
        for (const key of Object.keys(value)) {
          if (!isDefined(value[key])) {
            continue;
          }
          items.push(encodeUnreserved(key));
          items.push(
            encodeValueWithOperator(operator, value[key], option.allowReserved),
          );
        }
      }
      vals.push(items.join(","));
      return !vals.join(",") ? undefined : `${first}${vals.join("")}`;
    }
  }
}

export function expandUrlTemplate(
  template: string,
  context: Record<string, any>,
  option?: ExpandUrlTemplateOptions,
): string {
  const allowReserved = option?.allowReserved ?? false;
  return template.replace(
    /\{([^\{\}]+)\}|([^\{\}]+)/g,
    (_, expression, literal) => {
      if (!expression) {
        return encodeReserved(literal);
      }
      const opMatch =
        /([+#./;?&]?)((?:\w|%[0-9A-Fa-f]{2}|[.\-~!*'();:@&=+$,/?#\[\]])+)(?::(\d+|\*))?/.exec(
          expression,
        );
      if (!opMatch) {
        return "";
      }
      const operator = opMatch[1],
        rest = opMatch[2],
        result: string[] = [];
      if (!rest) {
        return "";
      }
      const varList = rest.split(/,/g);
      for (const varSpec of varList) {
        const varMatch = /([^:\*]*)(?::(\d+)|(\*))?/.exec(varSpec);
        if (!varMatch) {
          continue;
        }
        const variable = varMatch[1];
        const varValue = getVarValue({
          isFirst: result.length === 0,
          operator,
          varValue: context[variable!],
          varName: variable,
          modifier: varMatch[2] || varMatch[3],
          allowReserved,
        });
        if (varValue) {
          result.push(varValue);
        }
      }
      return result.join("");
    },
  );
}
