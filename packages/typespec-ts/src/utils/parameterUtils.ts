import {
  NameType,
  normalizeName,
  Schema,
  SchemaContext
} from "@azure-tools/rlc-common";
import { HttpOperationParameter } from "@typespec/http";
import { getTypeName, isArrayType, isObjectOrDictType } from "./modelUtils.js";
import { SdkContext } from "./interfaces.js";
import { reportDiagnostic } from "../lib.js";
import { getEncode, NoTarget, Program } from "@typespec/compiler";

export interface ParameterSerializationInfo {
  typeName: string;
  wrapperType?: Schema;
}

export function getParameterSerializationInfo(
  dpgContext: SdkContext,
  parameter: HttpOperationParameter,
  valueSchema: Schema,
  operationGroup: string = "",
  operationName: string = ""
): ParameterSerializationInfo {
  const schemaContext = [SchemaContext.Input];
  const retVal: ParameterSerializationInfo = buildSerializationInfo(
    getTypeName(valueSchema, schemaContext)
  );
  const prefix = `${operationGroup}_${operationName}_${parameter.name}`;
  switch (parameter.type) {
    case "path": {
      if (parameter.allowReserved === true) {
        const wrapperType = buildAllowReserved(
          normalizeName(`${prefix}_PathParam`, NameType.Interface),
          valueSchema,
          parameter.name
        );
        return buildSerializationInfo(wrapperType);
      }
      return retVal;
    }
    case "query": {
      if (!isArrayType(valueSchema) && !isObjectOrDictType(valueSchema)) {
        // if the value is a primitive type or other types, we will not generate a wrapper type
        return retVal;
      }
      const name = normalizeName(`${prefix}_QueryParam`, NameType.Interface);
      const encode = getEncode(dpgContext.program, parameter.param);
      const format =
        encode?.encoding === "ArrayFormat.pipeDelimited" ||
        encode?.encoding === "ArrayFormat.spaceDelimited"
          ? encode.encoding.replace("ArrayFormat.", "")
          : undefined;
      let wrapperType: Schema = buildExplodeAndStyle(
        name,
        parameter.explode,
        format ?? "form",
        valueSchema,
        parameter.name
      );
      if (parameter.explode === true) {
        if (format !== undefined) {
          reportDiagnostic(dpgContext.program, {
            code: "un-supported-format-cases",
            format: {
              paramName: parameter.name,
              explode: String(parameter.explode),
              format: format
            },
            target: NoTarget
          });
        }

        if (dpgContext.rlcOptions?.compatibilityQueryMultiFormat) {
          wrapperType = buildUnionType([
            wrapperType,
            { type: "string", name: "string" }
          ]);
        }
        return buildSerializationInfo(wrapperType);
      }

      if (format === undefined) {
        if (isArrayType(valueSchema)) {
          wrapperType = buildUnionType([valueSchema, wrapperType]);
        }
        return buildSerializationInfo(wrapperType);
      }
      return buildSerializationInfo(wrapperType);
    }
    case "header": {
      return buildSerializationInfo(
        getHeaderSerializeTypeName(
          dpgContext.program,
          valueSchema,
          schemaContext
        )
      );
    }
    default:
      return retVal;
  }
}

function buildSerializationInfo(
  typeOrSchema: string | Schema
): ParameterSerializationInfo {
  if (typeof typeOrSchema === "string") {
    return {
      typeName: typeOrSchema
    };
  }
  return {
    typeName: getTypeName(typeOrSchema),
    wrapperType: typeOrSchema
  };
}

function getHeaderSerializeTypeName(
  program: Program,
  schema: Schema,
  usage?: SchemaContext[]
): string {
  const typeName = getTypeName(schema, usage);
  const formattedName = (schema.alias ?? typeName).replace(
    "Date | string",
    "string"
  );
  const canSerialize = isSerializable(schema);
  if (canSerialize) {
    return schema.alias ? typeName : formattedName;
  }
  reportDiagnostic(program, {
    code: "unable-serialized-type",
    format: { type: typeName },
    target: NoTarget
  });
  return "string";
  function isSerializable(type: any) {
    if (type.enum) {
      return type.enum.every((i: any) => {
        return isSerializable(i) || i.type === "null";
      });
    }
    return (
      ["string", "number", "boolean"].includes(type.type) || type.isConstant
    );
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
    description: `This is the wrapper object for the parameter \`${parameterName}\` with allowReserved set to true.`,
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
    description: `This is the wrapper object for the parameter \`${parameterName}\` with explode set to ${explode} and style set to ${style}.`,
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
