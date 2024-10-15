import {
  NameType,
  normalizeName,
  Schema,
  SerializeHelperKind
} from "@azure-tools/rlc-common";
import { HttpOperationParameter } from "@typespec/http";
import { getTypeName, isArrayType, isObjectOrDictType } from "./modelUtils.js";
import { SdkContext } from "./interfaces.js";
import { reportDiagnostic } from "../lib.js";
import { NoTarget } from "@typespec/compiler";

export function getParameterSerializeInfo(
  dpgContext: SdkContext,
  parameter: HttpOperationParameter,
  valueSchema: Schema,
  operationGroup: string = "",
  operationName: string = ""
): [SerializeHelperKind, Schema] | undefined {
  const prefix = `${operationGroup}_${operationName}_${parameter.name}`;
  switch (parameter.type) {
    case "path": {
      if (parameter.allowReserved === true) {
        return [
          "buildAllowReservedValue",
          buildAllowReserved(
            normalizeName(`${prefix}_PathParam`, NameType.Interface),
            valueSchema,
            "buildAllowReservedValue"
          )
        ];
      }
      return undefined;
    }
    case "query": {
      if (!isArrayType(valueSchema) && !isObjectOrDictType(valueSchema)) {
        // if the value is a primitive type or other types, we will not generate a wrapper type
        return undefined;
      }
      const name = normalizeName(`${prefix}_QueryParam`, NameType.Interface);
      if (parameter.explode === true) {
        if (parameter.format !== undefined) {
          reportDiagnostic(dpgContext.program, {
            code: "un-supported-format-cases",
            format: {
              paramName: parameter.name,
              explode: String(parameter.explode),
              format: parameter.format
            },
            target: NoTarget
          });
        }
        const wrapperType = buildExplodeAndStyle(
          name,
          true,
          "form",
          valueSchema,
          "buildExplodedAndFormStyleValue"
        );
        return [
          "buildExplodedAndFormStyleValue",
          dpgContext.rlcOptions?.compatibilityMode
            ? buildUnionType([wrapperType, { type: "string", name: "string" }])
            : wrapperType
        ];
      }

      if (parameter.format === undefined || parameter.format === "csv") {
        const wrapperType = buildExplodeAndStyle(
          name,
          false,
          "form",
          valueSchema,
          "buildNonExplodedAndFormStyleValue"
        );
        return [
          "buildNonExplodedAndFormStyleValue",
          isArrayType(valueSchema)
            ? buildUnionType([valueSchema, wrapperType])
            : wrapperType
        ];
      } else if (parameter.format === "ssv") {
        return [
          "buildNonExplodedAndSpaceStyleValue",
          buildExplodeAndStyle(
            name,
            false,
            "spaceDelimited",
            valueSchema,
            "buildNonExplodedAndSpaceStyleValue"
          )
        ];
      } else if (parameter.format === "pipes") {
        return [
          "buildNonExplodedAndPipeStyleValue",
          buildExplodeAndStyle(
            name,
            false,
            "pipeDelimited",
            valueSchema,
            "buildNonExplodedAndPipeStyleValue"
          )
        ];
      } else {
        reportDiagnostic(dpgContext.program, {
          code: "un-supported-format-cases",
          format: {
            paramName: parameter.name,
            explode: String(parameter.explode),
            format: parameter.format
          },
          target: NoTarget
        });
      }
      return undefined;
    }
    case "header": {
      return undefined;
    }
    default:
      return undefined;
  }
}

function buildAllowReserved(
  typeName: string,
  valueSchema: Schema,
  serializeHelper: string
) {
  return {
    type: "object",
    name: typeName,
    description: `You can use the function ${serializeHelper} to help prepare this parameter.`,
    properties: {
      value: {
        ...valueSchema,
        description: valueSchema.description ?? "Value of the parameter",
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
  valueSchema: Schema,
  serializeHelper: string
) {
  return {
    type: "object",
    name: typeName,
    description: `You can use the function ${serializeHelper} to help prepare this parameter.`,
    properties: {
      value: {
        ...valueSchema,
        description: valueSchema.description ?? "Value of the parameter",
        required: true
      },
      explode: {
        type: `${explode}`,
        description: "Should we explode the value?",
        required: true
      },
      style: {
        type: `"${style}"`,
        description: "Style of the value",
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
