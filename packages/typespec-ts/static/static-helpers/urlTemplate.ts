// Copyright (c) Microsoft Corporation.
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
}

// ---------------------
// helpers
// ---------------------
function encodeReserved(str: any) {
    return str
        .split(/(%[0-9A-Fa-f]{2})/g)
        .map(function (part: any) {
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


export function expandUriTemplate(template: string, context: Record<string, any>): string {
    return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, (_, layer1, literal) => {
        if (!layer1) {
            return encodeReserved(literal);
        }
        const opMatch = /([+#./;?&]?)((?:\w|%[0-9A-Fa-f]{2}|[.\-~!*'();:@&=+$,/?#\[\]])+)(?::(\d+|\*))?/.exec(layer1);
        if (!opMatch) {
            return '';
        }
        const operator = opMatch[1], nonOperators = opMatch[2], layer2Values: string[] = [];
        if (!nonOperators) {
            return '';
        }
        const variables = nonOperators.split(/,/g);
        for (const layer2 of variables) {
            const varMatch = /([^:\*]*)(?::(\d+)|(\*))?/.exec(layer2);
            if (!varMatch) {
                continue;
            }
            const variable = varMatch[1];
            const modifier = varMatch[2] || varMatch[3];
            const value = context[variable!];
            const encodedValue = getVarValue({
                isFirst: layer2Values.length === 0,
                operator,
                varValue: value,
                varName: variable,
                modifier,
            });
            if (encodedValue) {
                layer2Values.push(encodedValue);
            }
        }
        return layer2Values.join("");
    });
}


function getNamed(operator: string | undefined) {
    return operator && [';', '?', '&'].includes(operator);
}

function getIfEmp(operator: string | undefined) {
    return operator && ['?', '&'].includes(operator) ? '=' : '';
}

function getFirstOrSep(operator: string | undefined, isFirst = false) {
    if (isFirst) {
        return (operator === undefined || operator === "" || operator === "+") ? "" : operator;
    }
    if (operator === undefined || operator === "" || operator === "+" || operator === "#") {
        return ",";
    } else if (operator === "?") {
        return "&";
    } else {
        return operator;
    }
}


function getEncodedValue(operator: string | undefined, value: any) {
    return operator === "+" || operator === "#" ? encodeReserved(value) : encodeUnreserved(value);
}

function getVarValue(option: GetVarValueOptions): string | undefined {
    let isFirst = option.isFirst, value = option.varValue;
    const { operator, varName, modifier } = option;
    const named = getNamed(operator), ifEmpty = getIfEmp(operator);
    if (!isDefined(value)) {
        return undefined;
    } else if (typeof value === "string" ||
        typeof value === "number" ||
        typeof value === "boolean") {
        value = value.toString();
        const vals = [];
        if (named) {
            vals.push(encodeUnreserved(varName));
            if (value === "") {
                vals.push(ifEmpty);
            } else {
                vals.push("=");
            }
        }
        if (modifier && modifier !== "*") {
            value = value.substring(0, parseInt(modifier, 10));
        }
        vals.push(getEncodedValue(operator, value));
        return `${getFirstOrSep(operator, isFirst)}${vals.join("")}`;

    } else {
        if (modifier === "*") {
            if (named) {
                const vals = [];
                if (Array.isArray(value) && varName) {
                    for (const val of value) {
                        if (!isDefined(val)) {
                            continue;
                        }
                        vals.push(`${getFirstOrSep(operator, isFirst)}${encodeURIComponent(varName)}`);
                        if (val === "") {
                            vals.push(ifEmpty);
                        } else {
                            vals.push("=");
                            vals.push(getEncodedValue(operator, val));
                        }
                        isFirst = false;
                    }
                } else if (typeof value === 'object') {
                    for (const key of Object.keys(value)) {
                        if (!isDefined(value[key])) {
                            continue;
                        }
                        vals.push(`${getFirstOrSep(operator, isFirst)}${encodeURIComponent(key)}`);
                        if (value[key] === "") {
                            vals.push(ifEmpty);
                        } else {
                            vals.push("=");
                            vals.push(getEncodedValue(operator, value[key]));
                        }
                        isFirst = false;
                    }
                }
                return vals.join("");
            } else {
                const vals = [];
                if (Array.isArray(value) && varName) {
                    for (const val of value) {
                        if (isDefined(val) && val !== "") {
                            vals.push(`${getFirstOrSep(operator, isFirst)}${encodeURIComponent(val)}`);
                            isFirst = false;
                        }

                    }
                } else if (typeof value === 'object') {
                    for (const key of Object.keys(value)) {
                        if (!isDefined(value[key])) {
                            continue;
                        }
                        vals.push(`${getFirstOrSep(operator, isFirst)}`);
                        if (key) {
                            vals.push(`${encodeURIComponent(key)}=`);
                        }

                        vals.push(getEncodedValue(operator, value[key]));
                        isFirst = false;
                    }
                }
                return vals.join("");
            }
        } else {
            const vals = [];
            const sep = getFirstOrSep(operator, isFirst);
            if (named) {
                vals.push(getEncodedValue(operator, varName));
                if (value === "") {
                    if (!ifEmpty) {
                        vals.push(ifEmpty);
                    }
                    return !vals.join("") ? undefined : `${sep}${vals.join("")}`;
                }
                vals.push("=");
            }

            const tmp = []
            if (Array.isArray(value)) {
                value.filter(isDefined).forEach(val => tmp.push(getEncodedValue(operator, val)));
            } else if (typeof value === 'object') {
                for (const key of Object.keys(value)) {
                    if (!isDefined(value[key])) {
                        continue;
                    }
                    tmp.push(encodeUnreserved(key));
                    tmp.push(getEncodedValue(operator, value[key]));
                }
            }
            vals.push(tmp.join(","));
            return !vals.join(",") ? undefined : `${sep}${vals.join("")}`;
        }
    }
}
