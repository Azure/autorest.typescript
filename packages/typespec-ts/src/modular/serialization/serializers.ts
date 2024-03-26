import { isDefined } from "@azure/core-util";
import { UsageFlags } from "@typespec/compiler";
import _ from "lodash";
import { isSpecialHandledUnion } from "../buildSerializeUtils.js";
import { Property, Type } from "../modularCodeModel.js";
import {
  Imports,
  SerializerMap,
  SerializerOutput,
  getAllNamedAncestors,
  getEncodingFormat,
  getModularTypeId,
  getParameterTypePropertyName,
  getRLCTypeId,
  getReturnTypePropertyName,
  hasSerializeFunction,
  isNormalUnion
} from "./util.js";

export function serializeType(
  functionType: UsageFlags,
  serializerMap: SerializerMap,
  type: Type,
  valueExpr: string
): SerializerOutput {
  if (hasSerializeFunction(type)) {
    const modularTypeName = getModularTypeId(type) ?? "FIXMYNAME";
    const serializerMetadata = serializerMap[modularTypeName];

    const functionName =
      functionType === UsageFlags.Input
        ? serializerMetadata?.serializerFunctionName
        : serializerMetadata?.deserializerFunctionName;
    return {
      expr: `${
        functionName ?? functionType === UsageFlags.Input
          ? "MISSING_SERIALIZER"
          : "MISSING_DESERIALIZER"
      }((${valueExpr}))`,
      imports: functionName
        ? [{ importType: "serializers", name: functionName }]
        : undefined
    };
  }

  switch (type.type) {
    case "string":
    case "constant":
    case "float":
    case "integer":
    case "boolean":
    case "any":
      return { expr: valueExpr };
    case "model": {
      if (type.name) {
        // has serialize function, should be unreachable
        break;
      }
      return serializeModelInline(functionType, serializerMap, type, valueExpr);
    }
    case "datetime":
      return { expr: serializeDatetime(functionType, type, valueExpr) };
    case "list": {
      return serializeList(functionType, serializerMap, type, valueExpr);
    }
    case "byte-array": {
      return serializeByteArray(functionType, type, valueExpr);
    }
    case "combined":
      if (isSpecialHandledUnion(type)) {
        // has serialize function, should be unreachable
        break;
      }
      return {
        expr: isNormalUnion(type) ? valueExpr : `(${valueExpr}) as any`
      };
    case "enum":
      // TODO: encodedName
      return { expr: valueExpr };
  }
  return {
    expr: "FIXME"
  };
}

export function serializeByteArray(
  functionType: UsageFlags,
  type: Type,
  valueExpr: string
): SerializerOutput {
  if (type.format === "binary") {
    return { expr: valueExpr };
  }
  const functionName =
    functionType === UsageFlags.Input
      ? "uint8ArrayToString"
      : "stringToUint8Array";
  const format =
    functionType === UsageFlags.Input ? getEncodingFormat(type) : type.format;
  const functionCall = `${functionName}(${valueExpr}, "${format ?? "base64"}")`;
  const expr =
    functionType === UsageFlags.Input
      ? functionCall
      : `(typeof (${valueExpr}) === 'string')
            ? (${functionCall})
            : (${valueExpr})`;
  const imports: Imports = [{ importType: "coreUtil", name: functionName }];
  return { expr, imports };
}

export function serializeDatetime(
  functionType: UsageFlags,
  type: Type,
  valueExpr: string
): string {
  if (functionType === UsageFlags.Input) {
    switch (type.format) {
      case "date":
        return `(${valueExpr}).toDateString()`;
      case "time":
        return `(${valueExpr}).toTimeString()`;
      case "rfc7231":
      case "headerDefault":
        return `(${valueExpr}).toUTCString()`;
      case "unixTimestamp":
        return `(${valueExpr}).getTime()`;
      case "rfc3339":
      default:
        return `(${valueExpr}).toISOString()`;
    }
  } else {
    return `new Date(${valueExpr})`;
  }
}

export function serializeList(
  functionType: UsageFlags,
  serializerMap: SerializerMap,
  type: Type,
  valueExpr: string
): SerializerOutput {
  const elementType = type.elementType;
  if (!elementType) {
    throw Error("List has no element type");
  }
  const mapArgId = "e";
  const elementTypeName =
    elementType.name &&
    (functionType === UsageFlags.Input
      ? getModularTypeId(elementType)
      : getRLCTypeId(elementType));
  const { expr: child, imports } = serializeType(
    functionType,
    serializerMap,
    elementType,
    mapArgId
  );

  if (child === mapArgId) {
    // mapping over identity function, so map is unnecessary
    return { expr: valueExpr, imports };
  }

  const childAsFunctionCall = child.match(
    /(?<functionName>\w+)\((?<childArg>\w+)\)/
  )?.groups;
  const mapArg =
    elementTypeName && serializerMap[elementTypeName]
      ? mapArgId
      : `${mapArgId}: ${elementTypeName}`;
  const mapFunction =
    childAsFunctionCall && childAsFunctionCall["childArg"] === mapArgId
      ? childAsFunctionCall["functionName"]
      : `(${mapArg})=>(${child})`;

  return { expr: `${valueExpr}.map(${mapFunction})`, imports };
}

export function serializeModelInline(
  functionType: UsageFlags,
  serializerMap: SerializerMap,
  type: Type,
  valueExpr: string
) {
  const ancestors = getAllNamedAncestors(type);
  const props = _(ancestors)
    .flatMap((t: Type) => {
      return t.properties;
    })
    .filter(isDefined)
    .reverse()
    .uniqBy((p) => getReturnTypePropertyName(functionType, p));
  const [propAssignments, imports] = props
    .filter((p: Property) => !p.readonly)
    .reduce<[string[], Imports]>(
      ([propAssignments, imports], p: Property) => {
        const { expr: initializer, imports: propertyImports } =
          serializeProperty(
            functionType,
            serializerMap,
            p,
            `${valueExpr}["${getParameterTypePropertyName(functionType, p)}"]`
          );
        const propAssignment = `"${getReturnTypePropertyName(
          functionType,
          p
        )}": (${initializer})`;
        propAssignments.push(propAssignment);
        imports.push(...(propertyImports ?? []));
        return [propAssignments, imports];
      },
      [[], []]
    );
  return {
    expr: `{
                ${propAssignments.join(",\n")}
              }`,
    imports
  };
}

export function serializeProperty(
  functionType: UsageFlags,
  serializerMap: SerializerMap,
  p: Property,
  valueExpr: string
): SerializerOutput {
  const child = serializeType(functionType, serializerMap, p.type, valueExpr);
  if ((!p.optional && !p.type.nullable) || child.expr === valueExpr) {
    return child;
  }

  const condition = `(${[
    p.type.nullable ? "null" : undefined,
    p.optional ? "undefined" : undefined
  ]
    .filter(isDefined)
    .map((literal) => `((${valueExpr}) === (${literal}))`)
    .join(" || ")})`;

  return {
    ...child,
    expr: `(${condition}) ? (${valueExpr}) : (${child.expr})`
  };
}
