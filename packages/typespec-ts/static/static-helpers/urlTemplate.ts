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
    return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, (_, expression, literal) => {
        if (!expression) {
            return encodeReserved(literal);
        }
        const opMatch = /([+#./;?&]?)((?:\w|%[0-9A-Fa-f]{2}|[.\-~!*'();:@&=+$,/?#\[\]])+)(?::(\d+|\*))?/.exec(expression);
        if (!opMatch) {
            return '';
        }
        const operator = opMatch[1], nonOperators = opMatch[2], values: string[] = [];
        if (!nonOperators) {
            return '';
        }
        const variables = nonOperators.split(/,/g);
        for (const entry of variables) {
            const varMatch = /([^:\*]*)(?::(\d+)|(\*))?/.exec(entry);
            if (!varMatch) {
                continue;
            }
            const variable = varMatch[1], modifier = varMatch[2] || varMatch[3];
            let value = context[variable!];
            if (!isDefined(value)) {
                continue;
            }
            if (modifier) {
                if (modifier === '*') {
                    if (Array.isArray(value)) {
                        value = value.join(operator === '/' ? '/' : ',');
                    } else if (typeof value === 'object') {
                        value = Object.keys(value).map(k => `${k}=${value[k]}`).join('&');
                    }
                } else {
                    value = value.toString().substring(0, parseInt(modifier, 10));
                }
            }

            switch (operator) {
                case '+':
                    values.push(encodeReserved(value));
                    break;
                case '#': {
                    const prefix = values.length === 0 ? '#' : '';
                    values.push(`${prefix}${encodeReserved(value)}`);
                    break;
                }
                case '.':
                    values.push(`.${encodeURIComponent(value)}`);
                    break;
                case '/':
                    values.push(`/${encodeReserved(value)}`);
                    break;
                case ';': {
                    const ret = encodeURIComponent(value);
                    const suffix = !ret ? '' : `=${ret}`;
                    values.push(`;${variable}${suffix}`);
                    break;
                }
                case '?': {
                    const prefix = values.length === 0 ? '?' : '';
                    values.push(`${prefix}${variable}=${encodeURIComponent(value)}`);
                    break;
                }
                case '&':
                    values.push(`&${variable}=${encodeURIComponent(value)}`);
                    break;
                default:
                    values.push(encodeURIComponent(value));
            }
        }
        let separator = ',';
        if (operator === "?") {
            separator = "&";
        } else if (operator === "#" || operator === "+") {
            separator = ",";
        } else if (operator) {
            separator = "";
        }
        return values.join(separator);
    });
}