# Azure Synapse Artifacts Readme for RLC

> see https://aka.ms/autorest

## Configuration

```yaml
package-name: "@msinternal/widget-service"
title: WidgetService
product-doc-link: https://azure.microsoft.com
generate-metadata: false
license-header: MICROSOFT_MIT_NO_VERSION
output-folder: ../
source-code-folder-path: ./src
input-file: 
- ./widget.json
package-version: 1.0.0-beta.1
rest-level-client: true
openapi-type: data-plane
add-credentials: true
security: AADToken
security-scopes: "https://example.net/.default"
rlc-shortcut: true
modelerfour:
  lenient-model-deduplication: true
```