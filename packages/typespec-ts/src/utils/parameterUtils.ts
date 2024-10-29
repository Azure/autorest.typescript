import {
  NameType,
  normalizeName,
  Schema
} from "@azure-tools/rlc-common";
import { HttpOperationParameter } from "@typespec/http";
import { getTypeName, isArrayType, isObjectOrDictType } from "./modelUtils.js";
import { SdkContext } from "./interfaces.js";
import { reportDiagnostic } from "../lib.js";
import { NoTarget } from "@typespec/compiler";

export function getParameterWrapperInfo(
  dpgContext: SdkContext,
  parameter: HttpOperationParameter,
  valueSchema: Schema,
  operationGroup: string = "",
  operationName: string = ""
): Schema | undefined {
  const prefix = `${operationGroup}_${operationName}_${parameter.name}`;
  switch (parameter.type) {
    case "path": {
      if (parameter.allowReserved === true) {
        return buildAllowReserved(
          normalizeName(`${prefix}_PathParam`, NameType.Interface),
          valueSchema,
          parameter.name
        );
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
        if (parameter.format !== undefined && parameter.format !== "multi") {
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
          parameter.name
        );
        return dpgContext.rlcOptions?.compatibilityMode
          ? buildUnionType([wrapperType, { type: "string", name: "string" }])
          : wrapperType;
      }

      if (parameter.format === undefined || parameter.format === "csv") {
        const wrapperType = buildExplodeAndStyle(
          name,
          false,
          "form",
          valueSchema,
          parameter.name
        );
        return isArrayType(valueSchema)
          ? buildUnionType([valueSchema, wrapperType])
          : wrapperType;
      } else if (parameter.format === "ssv") {
        return buildExplodeAndStyle(
          name,
          false,
          "spaceDelimited",
          valueSchema,
          parameter.name
        );
      } else if (parameter.format === "pipes") {
        return buildExplodeAndStyle(
          name,
          false,
          "pipeDelimited",
          valueSchema,
          parameter.name
        );
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
    case "header":
    default:
      return undefined;
  }
}

function buildAllowReserved(
  typeName: string,
  valueSchema: Schema,
  parameterName: string
) {
  return {
    type: "object",
    name: typeName,
    description: `This is the wrapper object for the parameter ${parameterName} with allowReserved set to true.`,
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
  parameterName: string
) {
  return {
    type: "object",
    name: typeName,
    description: `This is the wrapper object for the parameter ${parameterName} with explode set to ${explode} and style set to ${style}.`,
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
