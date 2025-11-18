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
  /** Three possible values:
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
  "compatibility-lro"?: boolean;
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
    "include-shortcuts": {
      type: "boolean",
      nullable: true,
      description: "Deprecated option for RLC legacy generation."
    },
    "multi-client": {
      type: "boolean",
      nullable: true,
      description: "Deprecated option for RLC legacy generation."
    },
    batch: {
      type: "array",
      nullable: true,
      items: {
        type: "string"
      },
      description: "Deprecated option for RLC legacy generation."
    },
    "package-details": {
      type: "object",
      additionalProperties: true,
      properties: {
        name: { type: "string", nullable: false },
        scopeName: { type: "string", nullable: true },
        nameWithoutScope: { type: "string", nullable: true },
        description: { type: "string", nullable: true },
        version: { type: "string", nullable: true },
        isVersionUserProvided: { type: "boolean", nullable: true }
      },
      required: ["name"],
      nullable: true,
      description:
        "This is to indicate the package information such as package name, package description etc."
    },
    "add-credentials": {
      type: "boolean",
      nullable: true,
      description: `
      We support two types of authentication: Azure Key Credential(AzureKey) and Token credential(AADToken), any other will need to be handled manually.

      There are two ways to set up our credential details

      - To use \`@useAuth\` decorator in TypeSpec
      - To config in yaml file

      Please notice defining in TypeSpec is recommended and also has higher priority than second one.

      To enable credential in \`tspconfig.yaml\` and we need to provide more details to let codegen know types.
      `
    },
    "credential-scopes": {
      type: "array",
      nullable: true,
      items: { type: "string" },
      description:
        "If we enable the option `add-credentials` and specify `credential-scopes` the details we would enable the AADToken authentication."
    },
    "credential-key-header-name": {
      type: "string",
      nullable: true,
      description:
        "If we enable the option `add-credentials` and specify `credential-key-header-name` the details we would enable the AzureKey authentication."
    },
    "custom-http-auth-header-name": {
      type: "string",
      nullable: true,
      description:
        "This option is used for special Key Auth, when the key has a shared prefix and this header is to set the header name"
    },
    "custom-http-auth-shared-key-prefix": {
      type: "string",
      nullable: true,
      description:
        "This option is used for special Key Auth, when the key has a shared prefix and this header is to pass the rest of the header key."
    },
    "generate-metadata": {
      type: "boolean",
      nullable: true,
      description: `
      Whether to generate metadata files which includes package.json, README.md and tsconfig.json etc. Defaults to \`undefined\`. If there's not a package.json under package-dir, defaults to \`true\`. but if you'd like to disable this feature you could set it as \`false\`.
      `
    },
    "generate-test": {
      type: "boolean",
      nullable: true,
      description: `
      Whether to generate test files, for basic testing of your generated sdks. Defaults to \`undefined\`.
      other cases:
      - If azure-sdk-for-js is \`false\`. Defaults to \`false\`.
      - If azure-sdk-for-js is \`true\` but there's a test folder under package-dir. Defaults to \`false\`.
      - If azure-sdk-for-js is \`true\` but there's not a test folder under package-dir. Defaults to \`true\`.
      `
    },
    "generate-sample": {
      type: "boolean",
      nullable: true,
      description:
        "Whether to generate sample files, for basic samples of your generated sdks. Defaults to `undefined`. Management packages' default to `true`."
    },
    "azure-sdk-for-js": {
      type: "boolean",
      nullable: true,
      description:
        "This is used to indicate your project is generated in [azure-sdk-for-js](https://github.com/Azure/azure-sdk-for-js) repo or not. If your package is located in that repo we'll leverage `dev-tool` to accelerate our building and testing, however if not we'll remove the dependency for that tool. Defaults to `undefined`. Services with Flavor equal to 'Azure' default to 'true'. "
    },
    "azure-output-directory": {
      type: "string",
      nullable: true,
      description: "Deprecated option for RLC legacy generation"
    },
    "is-typespec-test": {
      type: "boolean",
      nullable: true,
      description: "Internal option for test"
    },
    title: {
      type: "string",
      nullable: true,
      description: "Deprecated option for RLC legacy generation."
    },
    "dependency-info": {
      type: "object",
      additionalProperties: true,
      properties: {
        link: { type: "string", nullable: false },
        description: { type: "string", nullable: false }
      },
      required: [],
      nullable: true,
      description: "Deprecated option for RLC legacy generation."
    },
    "product-doc-link": {
      type: "string",
      nullable: true,
      description: "Deprecated option for RLC legacy generation."
    },
    "service-info": {
      type: "object",
      additionalProperties: true,
      properties: {
        title: { type: "string", nullable: true },
        description: { type: "string", nullable: true }
      },
      nullable: true,
      description: "Deprecated option for RLC legacy generation."
    },
    "azure-arm": {
      type: "boolean",
      nullable: true,
      description: "Whether the package is an arm package."
    },
    "source-from": {
      type: "string",
      nullable: true,
      description:
        "Internal option, the value is default for TypeSpec generation"
    },
    "is-modular-library": {
      type: "boolean",
      nullable: true,
      default: false,
      description:
        "Whether to generate a Modular library. Defaults to `false`. Arm packages default to `true`."
    },
    "enable-operation-group": {
      type: "boolean",
      nullable: true,
      description:
        "An option to treat interface as operation group. This is not recommended unless specifically told so"
    },
    "enable-model-namespace": {
      type: "boolean",
      nullable: true,
      description:
        "Provides an option to add the model namespace to model names in case of conflicts across different namespaces. This approach is generally discouraged unless explicitly required."
    },
    "hierarchy-client": {
      type: "boolean",
      nullable: true,
      description:
        "An option to organize the client in a hierarchical way as defined by `@clientInitialization`. This is true by default."
    },
    branded: {
      type: "boolean",
      nullable: true,
      description: "A section of flavor"
    },
    flavor: {
      type: "string",
      nullable: true,
      description: "The flavor of the SDK."
    },
    "module-kind": {
      type: "string",
      nullable: true,
      enum: ["esm", "cjs"],
      default: "esm",
      description: "Internal option for test."
    },
    "compatibility-mode": {
      type: "boolean",
      nullable: true,
      description:
        "Whether to affect the generation of the additional property feature for the Modular client. Defaults to `false`."
    },
    "compatibility-lro": {
      type: "boolean",
      nullable: true,
      description:
        "[deprecated] Whether to generate the legacy LRO interface. When `true`, we will generate legacy beginXXX and beginXXXAndWait LRO methods."
    },
    "experimental-extensible-enums": {
      type: "boolean",
      nullable: true,
      description: "Whether to transform union type enums to extensible enums"
    },
    "clear-output-folder": {
      type: "boolean",
      nullable: true,
      description:
        "Determine whether to clear the entire output folder. By default, only the 'sources' folder is cleared, so metadata files at the project root remain untouched. This option can be useful in pipeline scenarios."
    },
    "ignore-property-name-normalize": {
      type: "boolean",
      nullable: true,
      description:
        "The emitter will use camel case to normalize the property name, to ignore this normalization, you can set this option to true "
    },
    "ignore-enum-member-name-normalize": {
      type: "boolean",
      nullable: true,
      description:
        "The emitter has a normalization logic for enum member key, to ignore this normalization, you can set this option to true"
    },
    "compatibility-query-multi-format": {
      type: "boolean",
      nullable: true,
      description:
        "Whether to generate the backward-compatible code for query parameter serialization for array types in RLC. Defaults to `false`"
    },
    "default-value-object": {
      type: "boolean",
      nullable: true,
      description: "Deprecated option for RLC legacy generation."
    },
    "typespec-title-map": {
      type: "object",
      additionalProperties: {
        type: "string"
      },
      required: [],
      nullable: true,
      description: `Only for Modular generation
      By default, code generation uses the titles specified in the \`@client\` and \`@service\` decorators in TypeSpec to name modular clients. If you need to override these names, you can configure the \`typespec-title-map\`. The map's keys represent the original client names from TypeSpec, and the values are the desired client names. This configuration supports renaming multiple clients.

      \`\`\`yaml
      typespec-title-map: 
        AnomalyDetectorClient: AnomalyDetectorRest
        AnomalyDetectorClient2: AnomalyDetectorRest2
      \`\`\`
      `
    },
    "should-use-pnpm-dep": {
      type: "boolean",
      nullable: true,
      description: "Internal option for test."
    }
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
        default: paramMessage`Operation '${"operationName"}' is marked with @list but does not have @pageItems defined.`
      }
    },
    "un-supported-paging-cases": {
      severity: "warning",
      messages: {
        default: paramMessage`Nested paging items in ${"operationName"} are not supported and will be ignored.`
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
    },
    "unsupported-parameter-type": {
      severity: "error",
      messages: {
        default: paramMessage`Parameter '${"paramName"}' with kind '${"paramKind"}' is not supported.`
      }
    },
    "unknown-sdk-method-kind": {
      severity: "error",
      messages: {
        default: paramMessage`Unknown SDK method kind: '${"methodKind"}'.`
      }
    },
    "client-file-not-found": {
      severity: "error",
      messages: {
        default: paramMessage`Client file not found: '${"filePath"}'.`
      }
    },
    "anonymous-type-serialization": {
      severity: "error",
      messages: {
        default: "Serialization of anonymous types is not yet implemented."
      }
    },
    "anonymous-type-deserialization": {
      severity: "error",
      messages: {
        default: "Deserialization of anonymous types is not yet implemented."
      }
    },
    "lro-polling-config-error": {
      severity: "error",
      messages: {
        default: paramMessage`LRO polling configuration error: ${"message"}.`
      }
    },
    "file-formatting-error": {
      severity: "error",
      messages: {
        default: paramMessage`Failed to format file: ${"filePath"}. Error: ${"error"}.`
      }
    },
    "directory-traversal-error": {
      severity: "error",
      messages: {
        default: paramMessage`Error traversing directory ${"directory"}: ${"error"}`
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
