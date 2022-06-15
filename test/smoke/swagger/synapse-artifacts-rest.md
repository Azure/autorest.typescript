# Azure Synapse Artifacts Readme for RLC

> see https://aka.ms/autorest

## Configuration

```yaml
package-name: "@msinternal/synapse-artifacts"
title: SynapseArtifacts
product-doc-link: https://azure.microsoft.com/en-us/services/synapse-analytics/
generate-metadata: false
license-header: MICROSOFT_MIT_NO_VERSION
output-folder: ../
source-code-folder-path: ./src
require: https://raw.githubusercontent.com/Azure/azure-rest-api-specs/949388b9dfddc435859fda2850c5bb5019aa217b/specification/synapse/data-plane/readme.md
package-version: 1.0.0-beta.1
rest-level-client: true
openapi-type: data-plane
add-credentials: true
security: AADToken
security-scopes: "https://dev.azuresynapse.net/.default"
tag: package-artifacts-composite-v3
rlc-shortcut: true
modelerfour:
  lenient-model-deduplication: true
```

```yaml
directive:
  - from: swagger-document
    where: $.info
    transform: >
      $.version = "2021-11-01-preview"
  - from: swagger-document
    where: $.definitions.CompressionLevel
    transform: >
      delete $.type
  - from: swagger-document
    where: $.definitions
    transform: >
      let visited = new Set();
      function makeAnyType(definition) {
        if (definition["type"] === "object") {
          delete definition["type"];
        }
      }
      function makeAny(definitions) {
        const keys = Object.keys(definitions);
        if (!keys.length) {
          return;
        }
        for (const key of keys) {
          if(!visited.has(definitions[key])) {
            visited.add(definitions[key])
            makeAnyType(definitions[key]);
            makeAny(definitions[key]);
          }
        }
      }
      const keys = Object.keys($);
      for(const key of keys) {
        makeAny($[key])
      }
```
