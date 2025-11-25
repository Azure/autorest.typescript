export const azureRlcTsps = [
  {
    outputPath: "routes",
    inputPath: "routes"
  },
  {
    outputPath: "payload/multipart",
    inputPath: "payload/multipart"
  },
  {
    outputPath: "union-body",
    inputPath: "union-body"
  },
  {
    outputPath: "azure/special-headers/client-request-id",
    inputPath: "azure/special-headers/client-request-id"
  },
  {
    outputPath: "special-headers/repeatability",
    inputPath: "special-headers/repeatability"
  },
  {
    outputPath: "parameters/body-optionality",
    inputPath: "parameters/body-optionality"
  },
  {
    outputPath: "encode/bytes",
    inputPath: "encode/bytes"
  },
  {
    outputPath: "encode/duration",
    inputPath: "encode/duration"
  },
  {
    outputPath: "encode/datetime",
    inputPath: "encode/datetime"
  },
  {
    outputPath: "shared-route",
    inputPath: "shared-route"
  },
  {
    outputPath: "media-types",
    inputPath: "media-types"
  },
  {
    outputPath: "overload",
    inputPath: "overload"
  },
  {
    outputPath: "type/array",
    inputPath: "type/array"
  },
  {
    outputPath: "authentication/api-key",
    inputPath: "authentication/api-key"
  },
  {
    outputPath: "authentication/http/custom",
    inputPath: "authentication/http/custom"
  },
  {
    outputPath: "authentication/oauth2",
    inputPath: "authentication/oauth2"
  },
  {
    outputPath: "authentication/union",
    inputPath: "authentication/union"
  },
  {
    outputPath: "type/dictionary",
    inputPath: "type/dictionary"
  },
  {
    outputPath: "type/enum/extensible",
    inputPath: "type/enum/extensible"
  },
  {
    outputPath: "type/enum/fixed",
    inputPath: "type/enum/fixed"
  },
  {
    outputPath: "azure/core/lro/standard",
    inputPath: "azure/core/lro/standard"
  },
  {
    outputPath: "azure/core/lro/rpc",
    inputPath: "azure/core/lro/rpc"
  },
  {
    outputPath: "type/model/inheritance/nested-discriminator",
    inputPath: "type/model/inheritance/nested-discriminator"
  },
  {
    outputPath: "type/model/inheritance/not-discriminated",
    inputPath: "type/model/inheritance/not-discriminated"
  },
  {
    outputPath: "type/model/inheritance/enum-discriminator",
    inputPath: "type/model/inheritance/enum-discriminator"
  },
  {
    outputPath: "type/model/inheritance/single-discriminator",
    inputPath: "type/model/inheritance/single-discriminator"
  },
  {
    outputPath: "type/model/inheritance/recursive",
    inputPath: "type/model/inheritance/recursive"
  },
  {
    outputPath: "type/property/optionality",
    inputPath: "type/property/optionality"
  },
  {
    outputPath: "type/property/nullable",
    inputPath: "type/property/nullable"
  },
  {
    outputPath: "type/property/value-types",
    inputPath: "type/property/value-types"
  },
  {
    outputPath: "type/property/additional-properties",
    inputPath: "type/property/additional-properties"
  },
  {
    outputPath: "type/model/visibility",
    inputPath: "type/model/visibility"
  },
  {
    outputPath: "type/model/usage",
    inputPath: "type/model/usage"
  },
  {
    outputPath: "type/model/empty",
    inputPath: "type/model/empty"
  },
  {
    outputPath: "resiliency/srv-driven-old",
    inputPath: "resiliency/srv-driven/old.tsp"
  },
  {
    outputPath: "resiliency/srv-driven-main",
    inputPath: "resiliency/srv-driven/main.tsp"
  },
  {
    outputPath: "special-words",
    inputPath: "special-words"
  },
  {
    outputPath: "type/union",
    inputPath: "type/union"
  },
  {
    outputPath: "parameters/collection-format",
    inputPath: "parameters/collection-format"
  },
  {
    outputPath: "parameters/spread",
    inputPath: "parameters/spread"
  },
  {
    outputPath: "server/path/single",
    inputPath: "server/path/single"
  },
  {
    outputPath: "server/path/multiple",
    inputPath: "server/path/multiple"
  },
  {
    outputPath: "azure/core/basic",
    inputPath: "azure/core/basic"
  },
  {
    outputPath: "azure/core/traits",
    inputPath: "azure/core/traits"
  },
  {
    outputPath: "client/structure/default",
    inputPath: "client/structure/default"
  },
  {
    outputPath: "client/structure/multi-client",
    inputPath: "client/structure/multi-client"
  },
  {
    outputPath: "client/structure/renamed-operation",
    inputPath: "client/structure/renamed-operation"
  },
  {
    outputPath: "client/structure/two-operation-group",
    inputPath: "client/structure/two-operation-group"
  },
  {
    outputPath: "type/scalar",
    inputPath: "type/scalar"
  },
  {
    outputPath: "azure/client-generator-core/access",
    inputPath: "azure/client-generator-core/access"
  },
  {
    outputPath: "azure/client-generator-core/usage",
    inputPath: "azure/client-generator-core/usage"
  },
  {
    outputPath: "payload/pageable",
    inputPath: "payload/pageable"
  },
  {
    outputPath: "payload/media-type",
    inputPath: "payload/media-type"
  },
  {
    outputPath: "client/naming",
    inputPath: "client/naming"
  },
  {
    outputPath: "serialization/encoded-name/json",
    inputPath: "serialization/encoded-name/json"
  },
  {
    outputPath: "azure/core/scalar",
    inputPath: "azure/core/scalar"
  },
  {
    outputPath: "server/endpoint/not-defined",
    inputPath: "server/endpoint/not-defined"
  },
  {
    outputPath: "server/versions/versioned",
    inputPath: "server/versions/versioned"
  },
  {
    outputPath: "server/versions/not-versioned",
    inputPath: "server/versions/not-versioned"
  },
  {
    outputPath: "payload/content-negotiation",
    inputPath: "payload/content-negotiation"
  },
  {
    outputPath: "parameters/basic",
    inputPath: "parameters/basic"
  },
  {
    outputPath: "versioning/added",
    inputPath: "versioning/added"
  },
  {
    outputPath: "versioning/madeOptional",
    inputPath: "versioning/madeOptional"
  },
  // disable it as https://github.com/Azure/autorest.typescript/issues/2902
  // {
  //   outputPath: "versioning/removed",
  //   inputPath: "versioning/removed"
  // },
  {
    outputPath: "versioning/renamedFrom",
    inputPath: "versioning/renamedFrom"
  },
  {
    outputPath: "versioning/returnTypeChangedFrom",
    inputPath: "versioning/returnTypeChangedFrom"
  },
  {
    outputPath: "versioning/typeChangedFrom",
    inputPath: "versioning/typeChangedFrom"
  },
  {
    outputPath: "azure/resource-manager/resources",
    inputPath: "azure/resource-manager/resources"
  },
  {
    outputPath: "azure/core/model",
    inputPath: "azure/core/model"
  },
  {
    outputPath: "azure/resource-manager/common-properties",
    inputPath: "azure/resource-manager/common-properties"
  },
  {
    outputPath: "azure/core/page",
    inputPath: "azure/core/page"
  },
  {
    outputPath: "azure/client-generator-core/flatten-property",
    inputPath: "azure/client-generator-core/flatten-property"
  },
  {
    outputPath: "client/structure/client-operation-group",
    inputPath: "client/structure/client-operation-group"
  },
  {
    outputPath: "encode/numeric",
    inputPath: "encode/numeric"
  },
  {
    outputPath: "azure/payload/pageable",
    inputPath: "azure/payload/pageable"
  },
  {
    outputPath: "azure/example/basic",
    inputPath: "azure/example/basic"
  },
  {
    outputPath: "client/namespace",
    inputPath: "client/namespace"
  },
  {
    outputPath: "azure/encode/duration",
    inputPath: "azure/encode/duration"
  },
  {
    outputPath: "azure/resource-manager/non-resource",
    inputPath: "azure/resource-manager/non-resource"
  },
  {
    outputPath: "azure/resource-manager/large-header",
    inputPath: "azure/resource-manager/large-header"
  },
  {
    outputPath: "azure/client-generator-core/client-initialization",
    inputPath: "azure/client-generator-core/client-initialization"
  },
  {
    outputPath: "azure/client-generator-core/deserialize-empty-string-as-null",
    inputPath: "azure/client-generator-core/deserialize-empty-string-as-null"
  },
  {
    outputPath: "azure/resource-manager/operation-templates",
    inputPath: "azure/resource-manager/operation-templates"
  },
  {
    outputPath: "azure/client-generator-core/client-location",
    inputPath: "azure/client-generator-core/client-location"
  },
  {
    outputPath: "client/overload",
    inputPath: "client/overload"
  },
  {
    outputPath: "azure/client-generator-core/override",
    inputPath: "azure/client-generator-core/override"
  },
  {
    outputPath: "azure/versioning/previewVersion",
    inputPath: "azure/versioning/previewVersion"
  },
  {
    outputPath: "azure/resource-manager/method-subscription-id",
    inputPath: "azure/resource-manager/method-subscription-id"
  },
  {
    outputPath: "azure/client-generator-core/next-link-verb",
    inputPath: "azure/client-generator-core/next-link-verb"
  }
];

export const rlcTsps = [
  {
    outputPath: "routes",
    inputPath: "routes"
  },
  {
    outputPath: "payload/multipart",
    inputPath: "payload/multipart"
  },
  {
    outputPath: "union-body",
    inputPath: "union-body"
  },
  {
    outputPath: "special-headers/repeatability",
    inputPath: "special-headers/repeatability"
  },
  {
    outputPath: "parameters/body-optionality",
    inputPath: "parameters/body-optionality"
  },
  {
    outputPath: "shared-route",
    inputPath: "shared-route"
  },
  {
    outputPath: "type/array",
    inputPath: "type/array"
  },
  {
    outputPath: "authentication/api-key",
    inputPath: "authentication/api-key"
  },
  {
    outputPath: "authentication/http/custom",
    inputPath: "authentication/http/custom"
  },
  {
    outputPath: "authentication/oauth2",
    inputPath: "authentication/oauth2"
  },
  {
    outputPath: "authentication/union",
    inputPath: "authentication/union"
  },
  {
    outputPath: "type/dictionary",
    inputPath: "type/dictionary"
  },
  {
    outputPath: "type/enum/extensible",
    inputPath: "type/enum/extensible"
  },
  {
    outputPath: "type/enum/fixed",
    inputPath: "type/enum/fixed"
  },
  {
    outputPath: "type/model/inheritance/nested-discriminator",
    inputPath: "type/model/inheritance/nested-discriminator"
  },
  {
    outputPath: "type/model/inheritance/not-discriminated",
    inputPath: "type/model/inheritance/not-discriminated"
  },
  {
    outputPath: "type/model/inheritance/enum-discriminator",
    inputPath: "type/model/inheritance/enum-discriminator"
  },
  {
    outputPath: "type/model/inheritance/single-discriminator",
    inputPath: "type/model/inheritance/single-discriminator"
  },
  {
    outputPath: "type/model/inheritance/recursive",
    inputPath: "type/model/inheritance/recursive"
  },
  {
    outputPath: "type/property/optionality",
    inputPath: "type/property/optionality"
  },
  {
    outputPath: "type/property/nullable",
    inputPath: "type/property/nullable"
  },
  {
    outputPath: "type/model/visibility",
    inputPath: "type/model/visibility"
  },
  {
    outputPath: "type/model/usage",
    inputPath: "type/model/usage"
  },
  {
    outputPath: "type/model/empty",
    inputPath: "type/model/empty"
  },
  {
    outputPath: "type/union",
    inputPath: "type/union"
  },
  {
    outputPath: "parameters/collection-format",
    inputPath: "parameters/collection-format"
  },
  {
    outputPath: "parameters/spread",
    inputPath: "parameters/spread"
  },
  {
    outputPath: "server/path/single",
    inputPath: "server/path/single"
  },
  {
    outputPath: "server/path/multiple",
    inputPath: "server/path/multiple"
  },
  {
    outputPath: "type/scalar",
    inputPath: "type/scalar"
  },
  {
    outputPath: "payload/media-type",
    inputPath: "payload/media-type"
  },
  {
    outputPath: "serialization/encoded-name/json",
    inputPath: "serialization/encoded-name/json"
  },
  {
    outputPath: "server/endpoint/not-defined",
    inputPath: "server/endpoint/not-defined"
  },
  {
    outputPath: "server/versions/versioned",
    inputPath: "server/versions/versioned"
  },
  {
    outputPath: "server/versions/not-versioned",
    inputPath: "server/versions/not-versioned"
  },
  {
    outputPath: "payload/content-negotiation",
    inputPath: "payload/content-negotiation"
  },
  {
    outputPath: "parameters/basic",
    inputPath: "parameters/basic"
  },
  {
    outputPath: "versioning/added",
    inputPath: "versioning/added"
  },
  {
    outputPath: "versioning/madeOptional",
    inputPath: "versioning/madeOptional"
  },
  {
    outputPath: "versioning/renamedFrom",
    inputPath: "versioning/renamedFrom"
  },
  {
    outputPath: "versioning/returnTypeChangedFrom",
    inputPath: "versioning/returnTypeChangedFrom"
  },
  {
    outputPath: "versioning/typeChangedFrom",
    inputPath: "versioning/typeChangedFrom"
  },
  {
    outputPath: "encode/numeric",
    inputPath: "encode/numeric"
  },
  {
    outputPath: "encode/datetime",
    inputPath: "encode/datetime"
  },
  {
    outputPath: "encode/bytes",
    inputPath: "encode/bytes"
  },
  {
    outputPath: "encode/duration",
    inputPath: "encode/duration"
  },
  {
    outputPath: "special-words",
    inputPath: "special-words"
  },
  {
    outputPath: "type/property/value-types",
    inputPath: "type/property/value-types"
  },
  {
    outputPath: "payload/pageable",
    inputPath: "payload/pageable"
  }
];

export const azureModularTsps = [
  {
    outputPath: "versioning/removed/v2preview",
    inputPath: "versioning/removed"
  },
  {
    outputPath: "versioning/removed/v1",
    inputPath: "versioning/removed"
  },
  {
    outputPath: "routes",
    inputPath: "routes"
  },
  {
    outputPath: "azure/client-generator-core/flatten-property",
    inputPath: "azure/client-generator-core/flatten-property"
  },
  {
    outputPath: "azure/core/model",
    inputPath: "azure/core/model"
  },
  {
    outputPath: "azure/resource-manager/resources",
    inputPath: "azure/resource-manager/resources"
  },
  { outputPath: "azure/core/lro/rpc", inputPath: "azure/core/lro/rpc" },
  {
    outputPath: "azure/core/lro/standard",
    inputPath: "azure/core/lro/standard"
  },
  {
    outputPath: "azure/client-generator-core/access",
    inputPath: "azure/client-generator-core/access"
  },
  {
    outputPath: "azure/client-generator-core/usage",
    inputPath: "azure/client-generator-core/usage"
  },
  {
    outputPath: "parameters/body-optionality",
    inputPath: "parameters/body-optionality"
  },
  {
    outputPath: "type/model/usage",
    inputPath: "type/model/usage"
  },
  {
    outputPath: "client/structure/default",
    inputPath: "client/structure/default"
  },
  {
    outputPath: "client/structure/multi-client",
    inputPath: "client/structure/multi-client"
  },
  {
    outputPath: "client/structure/renamed-operation",
    inputPath: "client/structure/renamed-operation"
  },
  {
    outputPath: "client/structure/two-operation-group",
    inputPath: "client/structure/two-operation-group"
  },
  {
    outputPath: "azure/special-headers/client-request-id",
    inputPath: "azure/special-headers/client-request-id"
  },
  {
    outputPath: "parameters/collection-format",
    inputPath: "parameters/collection-format"
  },
  {
    outputPath: "azure/core/basic",
    inputPath: "azure/core/basic"
  },
  {
    outputPath: "type/dictionary",
    inputPath: "type/dictionary"
  },
  {
    outputPath: "type/property/nullable",
    inputPath: "type/property/nullable"
  },
  {
    outputPath: "type/property/optionality",
    inputPath: "type/property/optionality"
  },
  {
    outputPath: "type/model/inheritance/nested-discriminator",
    inputPath: "type/model/inheritance/nested-discriminator"
  },
  {
    outputPath: "type/model/inheritance/not-discriminated",
    inputPath: "type/model/inheritance/not-discriminated"
  },
  {
    outputPath: "type/model/inheritance/enum-discriminator",
    inputPath: "type/model/inheritance/enum-discriminator"
  },
  {
    outputPath: "type/model/inheritance/single-discriminator",
    inputPath: "type/model/inheritance/single-discriminator"
  },
  {
    outputPath: "encode/bytes",
    inputPath: "encode/bytes"
  },
  {
    outputPath: "encode/duration",
    inputPath: "encode/duration"
  },
  {
    outputPath: "encode/datetime",
    inputPath: "encode/datetime"
  },
  {
    outputPath: "parameters/spread",
    inputPath: "parameters/spread"
  },
  {
    outputPath: "server/path/single",
    inputPath: "server/path/single"
  },
  {
    outputPath: "authentication/api-key",
    inputPath: "authentication/api-key"
  },
  {
    outputPath: "authentication/http/custom",
    inputPath: "authentication/http/custom"
  },
  {
    outputPath: "server/path/multiple",
    inputPath: "server/path/multiple"
  },
  {
    outputPath: "authentication/oauth2",
    inputPath: "authentication/oauth2"
  },
  {
    outputPath: "authentication/union",
    inputPath: "authentication/union"
  },
  {
    outputPath: "special-headers/repeatability",
    inputPath: "special-headers/repeatability"
  },
  {
    outputPath: "azure/core/traits",
    inputPath: "azure/core/traits"
  },
  {
    outputPath: "type/model/empty",
    inputPath: "type/model/empty"
  },
  {
    outputPath: "type/property/value-types",
    inputPath: "type/property/value-types"
  },
  { outputPath: "type/array", inputPath: "type/array" },
  {
    outputPath: "type/model/inheritance/recursive",
    inputPath: "type/model/inheritance/recursive"
  },
  {
    outputPath: "type/union",
    inputPath: "type/union"
  },
  {
    outputPath: "payload/media-type",
    inputPath: "payload/media-type"
  },
  {
    outputPath: "payload/multipart",
    inputPath: "payload/multipart"
  },
  {
    outputPath: "server/versions/versioned",
    inputPath: "server/versions/versioned"
  },
  {
    outputPath: "server/versions/not-versioned",
    inputPath: "server/versions/not-versioned"
  },
  {
    outputPath: "type/scalar",
    inputPath: "type/scalar"
  },
  {
    outputPath: "client/naming",
    inputPath: "client/naming"
  },
  {
    outputPath: "client/naming-enum-conflict",
    inputPath: "client/naming/enum-conflict"
  },
  {
    outputPath: "serialization/encoded-name/json",
    inputPath: "serialization/encoded-name/json"
  },
  {
    outputPath: "azure/core/scalar",
    inputPath: "azure/core/scalar"
  },
  {
    outputPath: "server/endpoint/not-defined",
    inputPath: "server/endpoint/not-defined"
  },
  {
    outputPath: "special-words",
    inputPath: "special-words"
  },
  {
    outputPath: "type/enum/extensible",
    inputPath: "type/enum/extensible"
  },
  {
    outputPath: "type/enum/fixed",
    inputPath: "type/enum/fixed"
  },
  {
    outputPath: "type/property/additional-properties",
    inputPath: "type/property/additional-properties"
  },
  {
    outputPath: "payload/content-negotiation",
    inputPath: "payload/content-negotiation"
  },
  {
    outputPath: "parameters/basic",
    inputPath: "parameters/basic"
  },
  {
    outputPath: "versioning/added",
    inputPath: "versioning/added"
  },
  {
    outputPath: "versioning/madeOptional",
    inputPath: "versioning/madeOptional"
  },
  {
    outputPath: "versioning/removed/v2",
    inputPath: "versioning/removed"
  },
  {
    outputPath: "versioning/renamedFrom",
    inputPath: "versioning/renamedFrom"
  },
  {
    outputPath: "versioning/returnTypeChangedFrom",
    inputPath: "versioning/returnTypeChangedFrom"
  },
  {
    outputPath: "versioning/typeChangedFrom",
    inputPath: "versioning/typeChangedFrom"
  },
  {
    outputPath: "resiliency/srv-driven-old",
    inputPath: "resiliency/srv-driven/old.tsp"
  },
  {
    outputPath: "resiliency/srv-driven-main",
    inputPath: "resiliency/srv-driven/main.tsp"
  },
  {
    outputPath: "azure/resource-manager/common-properties",
    inputPath: "azure/resource-manager/common-properties"
  },
  {
    outputPath: "azure/example/basic",
    inputPath: "azure/example/basic"
  },
  {
    outputPath: "azure/core/page",
    inputPath: "azure/core/page"
  },
  {
    outputPath: "client/structure/client-operation-group",
    inputPath: "client/structure/client-operation-group"
  },
  {
    outputPath: "encode/numeric",
    inputPath: "encode/numeric"
  },
  {
    outputPath: "payload/pageable",
    inputPath: "payload/pageable"
  },
  {
    outputPath: "azure/payload/pageable",
    inputPath: "azure/payload/pageable"
  },
  {
    outputPath: "client/namespace",
    inputPath: "client/namespace"
  },
  {
    outputPath: "client/enableModelNamespace",
    inputPath: "client/namespace"
  },
  {
    outputPath: "parameters/path",
    inputPath: "parameters/path"
  },
  {
    outputPath: "azure/encode/duration",
    inputPath: "azure/encode/duration"
  },
  {
    outputPath: "azure/client-generator-core/client-initialization",
    inputPath: "azure/client-generator-core/client-initialization"
  },
  {
    outputPath: "azure/resource-manager/non-resource",
    inputPath: "azure/resource-manager/non-resource"
  },
  {
    outputPath: "azure/resource-manager/large-header",
    inputPath: "azure/resource-manager/large-header"
  },
  {
    outputPath: "azure/client-generator-core/deserialize-empty-string-as-null",
    inputPath: "azure/client-generator-core/deserialize-empty-string-as-null"
  },
  {
    outputPath: "azure/resource-manager/operation-templates",
    inputPath: "azure/resource-manager/operation-templates"
  },
  {
    outputPath: "azure/client-generator-core/hierarchy-building",
    inputPath: "azure/client-generator-core/hierarchy-building"
  },
  {
    outputPath: "client/overload",
    inputPath: "client/overload"
  },
  {
    outputPath: "azure/client-generator-core/override",
    inputPath: "azure/client-generator-core/override"
  },
  {
    outputPath: "azure/versioning/previewVersion",
    inputPath: "azure/versioning/previewVersion"
  },
  {
    outputPath: "azure/client-generator-core/next-link-verb",
    inputPath: "azure/client-generator-core/next-link-verb"
  },
  {
    outputPath: "azure/client-generator-core/api-version/header",
    inputPath: "azure/client-generator-core/api-version/header"
  },
  {
    outputPath: "azure/client-generator-core/api-version/query",
    inputPath: "azure/client-generator-core/api-version/query"
  },
  {
    outputPath: "azure/client-generator-core/api-version/path",
    inputPath: "azure/client-generator-core/api-version/path"
  },
  {
    outputPath: "special-headers/conditional-request",
    inputPath: "special-headers/conditional-request"
  }
  // skip due to issue https://github.com/Azure/autorest.typescript/issues/3468
  // {
  //   outputPath: "azure/resource-manager/method-subscription-id",
  //   inputPath: "azure/resource-manager/method-subscription-id"
  // }
  // skip due to issue https://github.com/Azure/autorest.typescript/issues/3494
  // {
  //   outputPath: "azure/client-generator-core/client-location",
  //   inputPath: "azure/client-generator-core/client-location"
  // }
];

export const modularTsps = [
  {
    outputPath: "type/property/additional-properties",
    inputPath: "type/property/additional-properties"
  },
  {
    outputPath: "versioning/removed/v2preview",
    inputPath: "versioning/removed"
  },
  {
    outputPath: "versioning/removed/v1",
    inputPath: "versioning/removed"
  },
  {
    outputPath: "routes",
    inputPath: "routes"
  },
  {
    outputPath: "parameters/body-optionality",
    inputPath: "parameters/body-optionality"
  },
  {
    outputPath: "type/model/usage",
    inputPath: "type/model/usage"
  },
  {
    outputPath: "parameters/collection-format",
    inputPath: "parameters/collection-format"
  },
  {
    outputPath: "type/dictionary",
    inputPath: "type/dictionary"
  },
  {
    outputPath: "type/property/nullable",
    inputPath: "type/property/nullable"
  },
  {
    outputPath: "type/property/optionality",
    inputPath: "type/property/optionality"
  },
  {
    outputPath: "type/model/inheritance/nested-discriminator",
    inputPath: "type/model/inheritance/nested-discriminator"
  },
  {
    outputPath: "type/model/inheritance/not-discriminated",
    inputPath: "type/model/inheritance/not-discriminated"
  },
  {
    outputPath: "type/model/inheritance/enum-discriminator",
    inputPath: "type/model/inheritance/enum-discriminator"
  },
  {
    outputPath: "type/model/inheritance/single-discriminator",
    inputPath: "type/model/inheritance/single-discriminator"
  },
  {
    outputPath: "encode/bytes",
    inputPath: "encode/bytes"
  },
  {
    outputPath: "encode/duration",
    inputPath: "encode/duration"
  },
  {
    outputPath: "encode/datetime",
    inputPath: "encode/datetime"
  },
  {
    outputPath: "parameters/spread",
    inputPath: "parameters/spread"
  },
  {
    outputPath: "server/path/single",
    inputPath: "server/path/single"
  },
  {
    outputPath: "authentication/api-key",
    inputPath: "authentication/api-key"
  },
  {
    outputPath: "authentication/http/custom",
    inputPath: "authentication/http/custom"
  },
  {
    outputPath: "server/path/multiple",
    inputPath: "server/path/multiple"
  },
  {
    outputPath: "authentication/oauth2",
    inputPath: "authentication/oauth2"
  },
  {
    outputPath: "authentication/union",
    inputPath: "authentication/union"
  },
  {
    outputPath: "special-headers/repeatability",
    inputPath: "special-headers/repeatability"
  },
  {
    outputPath: "type/model/empty",
    inputPath: "type/model/empty"
  },
  {
    outputPath: "type/property/value-types",
    inputPath: "type/property/value-types"
  },
  { outputPath: "type/array", inputPath: "type/array" },
  {
    outputPath: "type/model/inheritance/recursive",
    inputPath: "type/model/inheritance/recursive"
  },
  {
    outputPath: "type/union",
    inputPath: "type/union"
  },
  {
    outputPath: "payload/media-type",
    inputPath: "payload/media-type"
  },
  {
    outputPath: "payload/multipart",
    inputPath: "payload/multipart"
  },
  {
    outputPath: "server/versions/versioned",
    inputPath: "server/versions/versioned"
  },
  {
    outputPath: "server/versions/not-versioned",
    inputPath: "server/versions/not-versioned"
  },
  {
    outputPath: "type/scalar",
    inputPath: "type/scalar"
  },
  {
    outputPath: "serialization/encoded-name/json",
    inputPath: "serialization/encoded-name/json"
  },
  {
    outputPath: "server/endpoint/not-defined",
    inputPath: "server/endpoint/not-defined"
  },
  {
    outputPath: "special-words",
    inputPath: "special-words"
  },
  {
    outputPath: "type/enum/extensible",
    inputPath: "type/enum/extensible"
  },
  {
    outputPath: "type/enum/fixed",
    inputPath: "type/enum/fixed"
  },
  {
    outputPath: "payload/content-negotiation",
    inputPath: "payload/content-negotiation"
  },
  {
    outputPath: "parameters/basic",
    inputPath: "parameters/basic"
  },
  {
    outputPath: "versioning/added",
    inputPath: "versioning/added"
  },
  {
    outputPath: "versioning/madeOptional",
    inputPath: "versioning/madeOptional"
  },
  {
    outputPath: "versioning/removed/v2",
    inputPath: "versioning/removed"
  },
  {
    outputPath: "versioning/renamedFrom",
    inputPath: "versioning/renamedFrom"
  },
  {
    outputPath: "versioning/returnTypeChangedFrom",
    inputPath: "versioning/returnTypeChangedFrom"
  },
  {
    outputPath: "versioning/typeChangedFrom",
    inputPath: "versioning/typeChangedFrom"
  },
  {
    outputPath: "encode/numeric",
    inputPath: "encode/numeric"
  },
  {
    outputPath: "payload/pageable",
    inputPath: "payload/pageable"
  }
];
