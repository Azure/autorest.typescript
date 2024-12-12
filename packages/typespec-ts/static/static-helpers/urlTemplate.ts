// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
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

function encodeValue(operator: any, value: any, key?: any | null) {
    value =
        operator === "+" || operator === "#"
            ? encodeReserved(value)
            : encodeUnreserved(value);

    if (key) {
        return encodeUnreserved(key) + "=" + value;
    } else {
        return value;
    }
}

function isDefined(value: any) {
    return value !== undefined && value !== null;
}

function isKeyOperator(operator: string): boolean {
    return operator === ";" || operator === "&" || operator === "?";
}

function getValues(
    context: any,
    operator: any,
    key: any | null,
    modifier: any | null,
) {
    var value = context[key],
        result: any[] = [];

    if (isDefined(value) && value !== "") {
        if (
            typeof value === "string" ||
            typeof value === "number" ||
            typeof value === "boolean"
        ) {
            value = value.toString();

            if (modifier && modifier !== "*") {
                value = value.substring(0, parseInt(modifier, 10));
            }
            result.push(
                encodeValue(operator, value, isKeyOperator(operator) ? key : null),
            );
        } else {
            if (modifier === "*") {
                if (Array.isArray(value)) {
                    value.filter(isDefined).forEach(function (value) {
                        result.push(
                            encodeValue(
                                operator,
                                value,
                                isKeyOperator(operator) ? key : null,
                            ),
                        );
                    });
                } else {
                    Object.keys(value).forEach(function (k) {
                        if (isDefined(value[k])) {
                            result.push(encodeValue(operator, value[k], k));
                        }
                    });
                }
            } else {
                var tmp: any[] = [];

                if (Array.isArray(value)) {
                    value.filter(isDefined).forEach(function (value) {
                        tmp.push(encodeValue(operator, value));
                    });
                } else {
                    Object.keys(value).forEach(function (k) {
                        if (isDefined(value[k])) {
                            tmp.push(encodeUnreserved(k));
                            tmp.push(encodeValue(operator, value[k].toString()));
                        }
                    });
                }

                if (isKeyOperator(operator)) {
                    result.push(encodeUnreserved(key) + "=" + tmp.join(","));
                } else if (tmp.length !== 0) {
                    result.push(tmp.join(","));
                }
            }
        }
    } else {
        if (operator === ";") {
            if (isDefined(value)) {
                result.push(encodeUnreserved(key));
            }
        } else if (value === "" && (operator === "&" || operator === "?")) {
            result.push(encodeUnreserved(key) + "=");
        } else if (value === "") {
            result.push("");
        }
    }
    return result;
}

export function parseTemplate(template: any) {
    var operators = ["+", "#", ".", "/", ";", "?", "&"];

    return {
        expand: function (context: any) {
            return template.replace(
                /\{([^\{\}]+)\}|([^\{\}]+)/g,
                function (_: any, expression: any, literal: any) {
                    if (expression) {
                        var operator: any = null,
                            values: any[] = [];

                        if (operators.indexOf(expression.charAt(0)) !== -1) {
                            operator = expression.charAt(0);
                            expression = expression.substr(1);
                        }

                        expression.split(/,/g).forEach(function (variable: any) {
                            var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
                            if (!!tmp) {
                                values.push.apply(
                                    values,
                                    getValues(context, operator, tmp[1], tmp[2] || tmp[3]),
                                );
                            }
                        });

                        if (operator && operator !== "+") {
                            var separator = ",";

                            if (operator === "?") {
                                separator = "&";
                            } else if (operator !== "#") {
                                separator = operator;
                            }
                            return (
                                (values.length !== 0 ? operator : "") + values.join(separator)
                            );
                        } else {
                            return values.join(",");
                        }
                    } else {
                        return encodeReserved(literal);
                    }
                },
            );
        },
    };
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
            if (!isDefined(value) || !variable) {
                continue;
            }
            const layer3Values: string[] = [];
            if (
                typeof value === "string" ||
                typeof value === "number" ||
                typeof value === "boolean"
            ) {
                getValueEntry(operator, value, variable, layer2Values, layer3Values);
            } else if (Array.isArray(value)) {
                const array = value.filter(isDefined);
                if (modifier === "*") {
                    for (const val of array) {
                        getValueEntry(operator, val, variable, layer2Values, layer3Values);
                    }
                } else {
                    layer3Values.push(array.map(val => encodeValue(operator, val)).join(","));
                }

            } else if (typeof value === 'object') {
                for (const key of Object.keys(value)) {
                    getValueEntry(operator, value[key], key, layer2Values, layer3Values);
                }
                if (modifier === "*") {
                    Object.keys(value).forEach(function (k) {
                        if (isDefined(value[k])) {
                            getValueEntry(operator, value[k], k, layer2Values, layer3Values);
                        }
                    });
                } else {
                    Object.keys(value).forEach(function (k) {
                        if (isDefined(value[k])) {
                            layer3Values.push(encodeUnreserved(k));
                            layer3Values.push(encodeValue(operator, value[k].toString()));
                        }
                    });
                }
            }
            // concatenate values in layer 3
            const separator = operator === "?" ? '&' : ",";
            layer2Values.push(layer3Values.join(separator));
        }
        // concatenate values in layer 2
        let separator = ',';
        if (operator === "?") {
            separator = "&";
        } else if (operator === "#" || operator === "+") {
            separator = ",";
        } else if (operator) {
            separator = "";
        }
        return layer2Values.join(separator);
    });
}

function getValueEntry(operator: string | undefined, value: string | number | boolean, variable: string, layer2Values: string[], layer3Values: string[]) {
    switch (operator) {
        case '+':
            layer3Values.push(encodeReserved(value));
            break;
        case '#': {
            const prefix = layer2Values.length === 0 && layer3Values.length === 0 ? '#' : '';
            layer3Values.push(`${prefix}${encodeReserved(value)}`);
            break;
        }
        case '.':
            layer3Values.push(`.${encodeURIComponent(value)}`);
            break;
        case '/': {
            layer3Values.push(`/${encodeReserved(value)}`);
            break;
        }
        case ';': {
            const ret = encodeURIComponent(value);
            const suffix = !ret ? '' : `=${ret}`;
            layer3Values.push(`;${variable}${suffix}`);
            break;
        }
        case '?': {
            const prefix = layer2Values.length === 0 && layer3Values.length === 0 ? '?' : '';
            layer3Values.push(`${prefix}${variable}=${encodeURIComponent(value)}`);
            break;
        }
        case '&':
            layer3Values.push(`&${variable}=${encodeURIComponent(value)}`);
            break;
        default:
            layer3Values.push(encodeURIComponent(value));
    }
}
