// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PackageDetails,
  DependencyInfo,
  ServiceInfo,
  PackageFlavor
} from "@azure-tools/rlc-common";
import {
  createTypeSpecLibrary,
  JSONSchemaType,
  paramMessage
} from "@typespec/compiler";
import { Options } from "prettier";

export interface EmitterOptions {
  "include-shortcuts"?: boolean;
  "multi-client"?: boolean;
  batch?: any[];
  "package-details"?: PackageDetails;
  "add-credentials"?: boolean;
  /** Three possiblie values:
   * - undefined, no credentialScopes and relevant settings would be generated
   * - [], which means we would generate TokenCredential but no credentialScopes and relevant settings
   * - ["..."], which means we would generate credentialScopes and relevant settings with the given values
   */
  "credential-scopes"?: string[];
  "credential-key-header-name"?: string;
  "custom-http-auth-header-name"?: string;
  "custom-http-auth-shared-key-prefix"?: string;
  /**
   * Three possible values:
   * - undefined, the default behavior which means we would generate metadata if the package.json file is absent
   * - true, which means we would always generate new files or override existing files
   * - false, which means we would not generate any files no matter there exists or not
   */
  "generate-metadata"?: boolean;
  /**
   * Three possible values:
   * - undefined, the default behavior which means we would generate test if there is no `test` folder
   * - true, which means we would always generate new files or override existing files
   * - false, which means we would not generate any files no matter there exists or not
   */
  "generate-test"?: boolean;
  "generate-sample"?: boolean;
  "azure-sdk-for-js"?: boolean;
  "azure-output-directory"?: string;
  "is-typespec-test"?: boolean;
  title?: string;
  "dependency-info"?: DependencyInfo;
  "product-doc-link"?: string;
  "service-info"?: ServiceInfo;
  "azure-arm"?: boolean;
  "source-from"?: "TypeSpec" | "Swagger";
  "is-modular-library"?: boolean;
  "module-kind"?: "esm" | "cjs";
  "enable-operation-group"?: boolean;
  flavor?: PackageFlavor;
  "enable-model-namespace"?: boolean;
  "hierarchy-client"?: boolean;
  "compatibility-mode"?: boolean;
  "experimental-extensible-enums"?: boolean;
  "clear-output-folder"?: boolean;
  "ignore-property-name-normalize"?: boolean;
  "compatibility-query-multi-format"?: boolean;
  branded?: boolean;
  "typespec-title-map"?: Record<string, string>;
  "ignore-enum-member-name-normalize"?: boolean;
  "default-value-object"?: boolean;
  //TODO should remove this after finish the release tool test
  "should-use-pnpm-dep"?: boolean;
}

export const RLCOptionsSchema: JSONSchemaType<EmitterOptions> = {
  type: "object",
  additionalProperties: true,
  properties: {
    "include-shortcuts": { type: "boolean", nullable: true },
    "multi-client": { type: "boolean", nullable: true },
    batch: {
      type: "array",
      nullable: true,
      items: {
        type: "string"
      }
    },
    "package-details": {
      type: "object",
      additionalProperties: true,
      properties: {
        name: { type: "string", nullable: false },
        scopeName: { type: "string", nullable: true },
        nameWithoutScope: { type: "string", nullable: true },
        description: { type: "string", nullable: true },
        version: { type: "string", nullable: true }
      },
      required: ["name"],
      nullable: true
    },
    "add-credentials": { type: "boolean", nullable: true },
    "credential-scopes": {
      type: "array",
      nullable: true,
      items: { type: "string" }
    },
    "credential-key-header-name": { type: "string", nullable: true },
    "custom-http-auth-header-name": { type: "string", nullable: true },
    "custom-http-auth-shared-key-prefix": { type: "string", nullable: true },
    "generate-metadata": { type: "boolean", nullable: true },
    "generate-test": { type: "boolean", nullable: true },
    "generate-sample": { type: "boolean", nullable: true },
    "azure-sdk-for-js": { type: "boolean", nullable: true },
    "azure-output-directory": { type: "string", nullable: true },
    "is-typespec-test": { type: "boolean", nullable: true },
    title: { type: "string", nullable: true },
    "dependency-info": {
      type: "object",
      additionalProperties: true,
      properties: {
        link: { type: "string", nullable: false },
        description: { type: "string", nullable: false }
      },
      required: [],
      nullable: true
    },
    "product-doc-link": { type: "string", nullable: true },
    "service-info": {
      type: "object",
      additionalProperties: true,
      properties: {
        title: { type: "string", nullable: true },
        description: { type: "string", nullable: true }
      },
      nullable: true
    },
    "azure-arm": { type: "boolean", nullable: true },
    "source-from": { type: "string", nullable: true },
    "is-modular-library": { type: "boolean", nullable: true, default: false },
    "enable-operation-group": { type: "boolean", nullable: true },
    "enable-model-namespace": { type: "boolean", nullable: true },
    "hierarchy-client": { type: "boolean", nullable: true },
    branded: { type: "boolean", nullable: true },
    flavor: { type: "string", nullable: true },
    "module-kind": {
      type: "string",
      nullable: true,
      enum: ["esm", "cjs"],
      default: "esm"
    },
    "compatibility-mode": { type: "boolean", nullable: true },
    "experimental-extensible-enums": { type: "boolean", nullable: true },
    "clear-output-folder": { type: "boolean", nullable: true },
    "ignore-property-name-normalize": { type: "boolean", nullable: true },
    "ignore-enum-member-name-normalize": { type: "boolean", nullable: true },
    "compatibility-query-multi-format": { type: "boolean", nullable: true },
    "default-value-object": { type: "boolean", nullable: true },
    "typespec-title-map": {
      type: "object",
      additionalProperties: {
        type: "string"
      },
      required: [],
      nullable: true
    },
    "should-use-pnpm-dep": { type: "boolean", nullable: true }
  },
  required: []
};

const libDef = {
  name: "@azure-tools/typespec-ts",
  diagnostics: {
    "security-service-namespace": {
      severity: "error",
      messages: {
        default:
          "Cannot add security details to a namespace other than the service namespace."
      }
    },
    "more-than-one-service": {
      severity: "error",
      messages: {
        default:
          "Only support one service and more than one services are not allowed."
      }
    },
    "no-service-defined": {
      severity: "warning",
      messages: {
        default:
          "No service defined and must have one and only one service defined."
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
        default: paramMessage`Couldn't get schema for type ${"type"} with property ${"property"}`
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
    "no-credential-scopes": {
      severity: "warning",
      messages: {
        default:
          "Please provide credential scopes to ensure the token credential signature can be generated."
      }
    },
    "nullable-required-header": {
      severity: "warning",
      messages: {
        default:
          "Required header cannot be nullable. Please remove the nullable modifier."
      }
    },
    "no-paging-items-defined": {
      severity: "warning",
      messages: {
        default: paramMessage`Please specify @items property for the paging operation - ${"operationName"}.`
      }
    },
    "decimal-to-number": {
      severity: "warning",
      messages: {
        default: paramMessage`Please note the decimal type will be converted to number. If you strongly care about precision you can use @encode to encode it as a string for the property - ${"propertyName"}.`
      }
    },
    "unable-serialized-type": {
      severity: "warning",
      messages: {
        default: paramMessage`Please note the header ${"type"} is not serializable.`
      }
    },
    "default-response-body-type": {
      severity: "warning",
      messages: {
        default: paramMessage`Please note the body type of default response for operation - ${"operationName"} is not a model type.`
      }
    },
    "un-supported-credential": {
      severity: "warning",
      messages: {
        default: paramMessage`Authentication type ${"credentialType"} is not supported.`
      }
    },
    "un-supported-finalStateVia": {
      severity: "warning",
      messages: {
        default: paramMessage`The LRO final-state-via ${"finalStateVia"} is not supported.`
      }
    },
    "required-sample-parameter": {
      severity: "warning",
      messages: {
        default: paramMessage`The parameter ${"paramName"} in ${"exampleName"} is required but no value provided.`
      }
    },
    "property-name-normalized": {
      severity: "warning",
      messages: {
        default: paramMessage`Property name ${"propertyName"} is normalized to ${"normalizedName"}.`
      }
    },
    "un-supported-format-cases": {
      severity: "warning",
      messages: {
        default: paramMessage`The parameter ${"paramName"} with explode: ${"explode"} and format: ${"format"} is not supported.`
      }
    },
    "parameter-type-not-supported": {
      severity: "warning",
      messages: {
        default: paramMessage`Parameter '${"paramName"}' with type '${"paramType"}' is not supported and we would ignore this parameter.`
      }
    },
    "prefix-adding-in-enum-member": {
      severity: "warning",
      messages: {
        default: paramMessage`Enum member name ${"memberName"} is normalized to ${"normalizedName"} with "_" prefix.`
      }
    },
    "default-value-object": {
      severity: "warning",
      messages: {
        default: paramMessage`Please note the default value is an object type.`
      }
    },
    "property-name-conflict": {
      severity: "warning",
      messages: {
        default: paramMessage`The property name ${"propertyName"} has conflicts with others and please use @clientName to rename it.`
      }
    },
    "parameter-name-conflict": {
      severity: "warning",
      messages: {
        default: paramMessage`The parameter name ${"parameterName"} has conflicts with others and please use @clientName to rename it.`
      }
    }
  },
  emitter: {
    options: RLCOptionsSchema
  }
} as const;

export const $lib = createTypeSpecLibrary(libDef);
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
