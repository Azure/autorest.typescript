// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { paramMessage, createCadlLibrary } from "@cadl-lang/compiler";
import { Options } from "prettier";

const libDef = {
  name: "@cadl-lang/ts-rlc",
  diagnostics: {
    "security-service-namespace": {
      severity: "error",
      messages: {
        default:
          "Cannot add security details to a namespace other than the service namespace."
      }
    },
    "resource-namespace": {
      severity: "error",
      messages: {
        default: "Resource goes on namespace"
      }
    },
    "missing-path-param": {
      severity: "error",
      messages: {
        default: paramMessage`Path contains parameter ${"param"} but wasn't found in given parameters`
      }
    },
    "duplicate-body-types": {
      severity: "error",
      messages: {
        default: "Request has multiple body types"
      }
    },
    "duplicate-header": {
      severity: "error",
      messages: {
        default: paramMessage`The header ${"header"} is defined across multiple content types`
      }
    },
    "duplicate-example": {
      severity: "error",
      messages: {
        default: "Duplicate @example declarations on operation"
      }
    },
    "invalid-schema": {
      severity: "error",
      messages: {
        default: paramMessage`Couldn't get schema for type ${"type"}`
      }
    },
    "union-null": {
      severity: "error",
      messages: {
        default: "Cannot have a union containing only null types."
      }
    },
    "union-unsupported": {
      severity: "error",
      messages: {
        default:
          "Unions cannot be emitted to OpenAPI v2 unless all options are literals of the same type.",
        null: "Unions containing multiple model types cannot be emitted to OpenAPI v2 unless the union is between one model type and 'null'."
      }
    },
    discriminator: {
      severity: "error",
      messages: {
        duplicate: paramMessage`Discriminator value "${"val"}" defined in two different variants: ${"model1"} and ${"model2"}`,
        missing:
          "The discriminator property is not defined in a variant of a discriminated union.",
        required: "the discriminator property must be a required property.",
        type: "the discriminator property must be type 'string'."
      }
    },
    "discriminator-value": {
      severity: "warning",
      messages: {
        literal:
          "Each variant of a discriminated union should define the discriminator property with a string literal value."
      }
    },
    "invalid-default": {
      severity: "error",
      messages: {
        default: paramMessage`Invalid type '${"type"}' for a default value`
      }
    },
    "missing-namespace": {
      severity: "error",
      messages: {
        required: paramMessage`Missing namespace for route '${"path"}'`
      }
    }
  }
} as const;

export const $lib = createCadlLibrary(libDef);
export const { reportDiagnostic } = $lib;

export const prettierTypeScriptOptions: Options = {
  parser: "typescript",
  arrowParens: "always",
  bracketSpacing: true,
  endOfLine: "lf",
  printWidth: 80,
  semi: true,
  singleQuote: false,
  tabWidth: 2
};

export const prettierJSONOptions: Options = {
  parser: "json",
  tabWidth: 2,
  semi: false,
  singleQuote: false
};
