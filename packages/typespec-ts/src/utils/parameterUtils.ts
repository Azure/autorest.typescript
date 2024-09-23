import { Schema, SerializeHelperKind } from "@azure-tools/rlc-common";
import { HttpOperationParameter } from "@typespec/http";

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
  parameter: HttpOperationParameter
): Schema | undefined {
  switch (parameter.type) {
    case "path": {
      if (parameter.allowReserved === true) {
        return buildAllowReserved();
      } else {
        return undefined;
      }
    }
    case "query": {
      if (parameter.explode === true) {
        if (parameter.format !== undefined) {
          // Not supported and report warnings
        }
        return buildExplodeAndStyle(true, "form");
      } else {
        if (parameter.format === undefined) {
          return undefined;
        } else if (parameter.format === "csv") {
          return buildExplodeAndStyle(false, "form");
        } else if (parameter.format === "ssv") {
          return buildExplodeAndStyle(false, "spaceDelimited");
        } else if (parameter.format === "pipes") {
          return buildExplodeAndStyle(false, "pipeDelimited");
        } else {
          // Not supported and report warnings
        }
        return undefined;
      }
    }
    default: {
      return undefined;
    }
  }
}

function buildAllowReserved() {
  return {
    type: "string",
    name: "StringWithEncodingMetadata",
    description: "String with encoding metadata",
    properties: {
      value: {
        type: "string",
        description: "The string value"
      },
      allowReserved: {
        type: "boolean",
        description: "Whether to allow reserved characters"
      }
    }
  };
}

function buildExplodeAndStyle(explode: boolean, style: string) {
  return {
    type: "object",
    name: "StringWithExplodedStyleMetadata",
    description: "Object with encoding metadata",
    properties: {
      value: {
        type: "string",
        description: "The string value"
      },
      explode: {
        type: `${explode}`,
        description: "Explode the object always"
      },
      style: {
        type: `"${style}"`,
        description: "Style of the object"
      }
    }
  };
}
