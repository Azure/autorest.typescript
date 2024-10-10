import {
  NameType,
  normalizeName,
  Schema,
  SerializeHelperKind
} from "@azure-tools/rlc-common";
import { HttpOperationParameter } from "@typespec/http";
import {
  getTypeName,
  isArrayType,
  isObjectOrDictType,
  isPrimitiveType
} from "./modelUtils.js";

export function getSerializeHelperKind(
  parameter: HttpOperationParameter
): SerializeHelperKind | undefined {
  switch (parameter.type) {
    case "path": {
      if (parameter.allowReserved === true) {
        return "withAllowReserved";
      } else {
        return undefined;
      }
    }
    case "query": {
      if (parameter.explode === true) {
        return "withExplodedAndFormStyle";
      } else {
        if (parameter.format === undefined) {
          return undefined;
        } else if (parameter.format === "csv") {
          return "withNonExplodedAndFormStyle";
        } else if (parameter.format === "ssv") {
          return "withNonExplodedAndSpaceStyle";
        } else if (parameter.format === "pipes") {
          return "withNonExplodedAndPipeStyle";
        }
        return undefined;
      }
    }
    default: {
      return undefined;
    }
  }
}

export function getParameterWrapperType(
  operationGroup: string,
  operationName: string,
  parameter: HttpOperationParameter,
  valueSchema: Schema
): Schema | undefined {
  const prefix = `${operationGroup}_${operationName}_${parameter.name}`;
  switch (parameter.type) {
    case "path": {
      if (parameter.allowReserved === true) {
        return buildAllowReserved(
          normalizeName(`${prefix}_PathParam`, NameType.Interface),
          valueSchema
        );
      } else {
        return undefined;
      }
    }
    case "query": {
      if (isPrimitiveType(valueSchema)) {
        return undefined;
      } else if (isArrayType(valueSchema) || isObjectOrDictType(valueSchema)) {
        const name = normalizeName(`${prefix}_QueryParam`, NameType.Interface);
        if (parameter.explode === true) {
          if (parameter.format !== undefined) {
            // Not supported and report warnings
          }
          return buildExplodeAndStyle(name, true, "form", valueSchema);
        } else {
          if (parameter.format === undefined || parameter.format === "csv") {
            const wrapperType = buildExplodeAndStyle(
              name,
              false,
              "form",
              valueSchema
            );
            return isArrayType(valueSchema)
              ? buildUnionType([valueSchema, wrapperType])
              : wrapperType;
          } else if (parameter.format === "ssv") {
            return buildExplodeAndStyle(
              name,
              false,
              "spaceDelimited",
              valueSchema
            );
          } else if (parameter.format === "pipes") {
            return buildExplodeAndStyle(
              name,
              false,
              "pipeDelimited",
              valueSchema
            );
          } else {
            // Not supported and report warnings
          }
          return undefined;
        }
      }
      return undefined;
    }
    default: {
      return undefined;
    }
  }
}

function buildAllowReserved(typeName: string, valueSchema: Schema) {
  return {
    type: "object",
    name: typeName,
    description: "String with encoding metadata",
    properties: {
      value: {
        ...valueSchema,
        description: "Value of the parameter",
        required: true
      },
      allowReserved: {
        type: `true`,
        description: "Whether to allow reserved characters",
        required: true
      }
    }
  };
}

function buildExplodeAndStyle(
  typeName: string,
  explode: boolean,
  style: string,
  valueSchema: Schema
) {
  return {
    type: "object",
    name: typeName,
    description: "Wrapper object for query parameters",
    properties: {
      value: {
        ...valueSchema,
        description: "Value of the parameter",
        required: true
      },
      explode: {
        type: `${explode}`,
        description: "Explode the object always",
        required: true
      },
      style: {
        type: `"${style}"`,
        description: "Style of the object",
        required: true
      }
    }
  };
}

function buildUnionType(values: Schema[]) {
  return {
    name: "",
    enum: values,
    type: "union",
    typeName: `${values.map((v) => getTypeName(v)).join(" | ")}`,
    required: true,
    description: undefined
  };
}
