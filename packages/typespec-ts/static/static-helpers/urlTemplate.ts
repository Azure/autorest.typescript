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
    return Boolean(operator && [';', '?', '&'].includes(operator));
}

function getIfEmpty(operator: string | undefined) {
    return operator && ['?', '&'].includes(operator) ? '=' : '';
}

function getFirstOrSeparator(operator: string | undefined, isFirst = false) {
    if (isFirst) {
        return (!operator || operator === "+") ? "" : operator;
    }
    if (!operator || operator === "+" || operator === "#") {
        return ",";
    } else if (operator === "?") {
        return "&";
    } else {
        return operator;
    }
}

function encodeValueWithOperator(operator: string | undefined, value: any, allowReserved: boolean) {
    return allowReserved === true || operator === "+" || operator === "#" ? encodeReserved(value) : encodeUnreserved(value);
}

function getExpandedValue(named: boolean, ifEmpty: string, option: GetVarValueOptions) {
    const { operator, varName, varValue: value } = option, vals: string[] = [];
    let isFirst = option.isFirst;
    if (Array.isArray(value)) {
        for (const val of value.filter(isDefined)) {
            // prepare the following parts: separator, varName, value
            vals.push(`${getFirstOrSeparator(operator, isFirst)}`);
            if (named && varName) {
                vals.push(`${encodeURIComponent(varName)}`);
                isEmptyString(val) ? vals.push(ifEmpty) : vals.push("=");
            }
            if (!isEmptyString(val)) {
                vals.push(encodeValueWithOperator(operator, val, option.allowReserved));
            }
            isFirst = false;
        }
    } else if (typeof value === "object") {
        for (const key of Object.keys(value)) {
            if (!isDefined(value[key])) {
                continue;
            }
            // prepare the following parts: separator, key, value
            vals.push(`${getFirstOrSeparator(operator, isFirst)}`);
            if (key) {
                vals.push(`${encodeURIComponent(key)}`);
                (named && isEmptyString(value[key])) ? vals.push(ifEmpty) : vals.push("=");
            }
            vals.push(encodeValueWithOperator(operator, value[key], option.allowReserved));
            isFirst = false;
        }
    }
    return vals.join("");
}

function getNonExpandedValue(named: boolean, ifEmpty: string, option: GetVarValueOptions) {
    const { operator, varName, varValue: value, isFirst } = option, vals: string[] = [], first = getFirstOrSeparator(operator, isFirst);
    if (named) {
        vals.push(encodeValueWithOperator(operator, varName, option.allowReserved));
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
        value.filter(isDefined).forEach(val => items.push(encodeValueWithOperator(operator, val, option.allowReserved)));
    } else if (typeof value === "object") {
        for (const key of Object.keys(value)) {
            if (!isDefined(value[key])) {
                continue;
            }
            items.push(encodeUnreserved(key));
            items.push(encodeValueWithOperator(operator, value[key], option.allowReserved));
        }
    }
    vals.push(items.join(","));
    return !vals.join(",") ? undefined : `${first}${vals.join("")}`;
}

function getVarValue(option: GetVarValueOptions): string | undefined {
    let value = option.varValue;
    const { operator, varName, modifier, isFirst } = option;
    const named = getIsNamed(operator), ifEmpty = getIfEmpty(operator);
    if (!isDefined(value)) {
        return undefined;
    } else if (typeof value === "string" ||
        typeof value === "number" ||
        typeof value === "boolean") {
        value = value.toString();
        // prepare the following parts: separator, varName(if required), value
        const vals: string[] = [getFirstOrSeparator(operator, isFirst)];
        if (named) {
            vals.push(encodeUnreserved(varName));
            isEmptyString(value) ? vals.push(ifEmpty) : vals.push("=");
        }
        if (modifier && modifier !== "*") {
            value = value.substring(0, parseInt(modifier, 10));
        }
        vals.push(encodeValueWithOperator(operator, value, option.allowReserved));
        return vals.join("");
    } else if (modifier === "*") {
        return getExpandedValue(named, ifEmpty, option);
    } else {
        return getNonExpandedValue(named, ifEmpty, option);
    }
}

// -----------------------------------------------------------------------------------------------------------------------
// This is an implementation of RFC 6570 URI Template: https://datatracker.ietf.org/doc/html/rfc6570. 
// And the internal implementation is suggested by the RFC hints: https://datatracker.ietf.org/doc/html/rfc6570#appendix-A.
// -----------------------------------------------------------------------------------------------------------------------
export function expandUrlTemplate(template: string, context: Record<string, any>, option?: ExpandUrlTemplateOptions): string {
    const allowReserved = option?.allowReserved ?? false;
    return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, (_, expression, literal) => {
        if (!expression) {
            return encodeReserved(literal);
        }
        const knownOperators = ["+", "#", ".", "/", ";", "?", "&"];
        const operator: string | undefined = knownOperators.includes(expression[0]) ? expression[0] : undefined;
        expression = operator ? expression.slice(1) : expression;
        if (!expression) {
            return '';
        }
        const varList = expression.split(/,/g), result: string[] = [];
        for (const varSpec of varList) {
            const varMatch = /([^:\*]*)(?::(\d+)|(\*))?/.exec(varSpec);
            if (!varMatch) {
                continue;
            }
            const varName = varMatch[1], varValue = getVarValue({
                isFirst: result.length === 0,
                operator,
                varValue: context[varName!],
                varName,
                modifier: varMatch[2] || varMatch[3],
                allowReserved,
            });
            if (varValue) {
                result.push(varValue);
            }
        }
        return result.join("");
    });
}
