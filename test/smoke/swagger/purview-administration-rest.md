# Azure Purview Catalog TypeScript Protocol Layer

> see https://aka.ms/autorest

## Configuration

```yaml $(purview-account) == true
title: PurviewAccount
description: Purview Account Client
output-folder: ../generated/purview-administration-rest
source-code-folder-path: ./src/account
input-file: https://raw.githubusercontent.com/Azure/azure-rest-api-specs/main/specification/purview/data-plane/Azure.Analytics.Purview.Account/preview/2019-11-01-preview/account.json
security: AADToken
security-scopes: "https://purview.azure.net/.default"
```

```yaml $(purview-metadata) == true
title: PurviewMetadataPolicies
description: Purview Metadata Policies Client
output-folder: ../generated/purview-administration-rest
source-code-folder-path: ./src/metadataPolicies
input-file:  https://raw.githubusercontent.com/Azure/azure-rest-api-specs/main/specification/purview/data-plane/Azure.Analytics.Purview.MetadataPolicies/preview/2021-07-01-preview/purviewMetadataPolicy.json
security: AzureKey
security-header-name: CustomAuth
```


```yaml $(multi-client)
product-doc-link: https://azure.microsoft.com/en-us/services/purview/
modelerfour.lenient-model-deduplication: true
package-name: "@azure-rest/purview-administration"
generate-metadata: true
license-header: MICROSOFT_MIT_NO_VERSION
package-version: 1.0.0-beta.2
rest-level-client: true
openapi-type: data-plane
add-credentials: true

dependency-info: 
  link: "https://docs.microsoft.com/azure/purview/create-catalog-portal#add-a-security-principal-to-a-data-plane-role"
  description: "enable AAD authentication on your Purview resource"
batch:
  - purview-metadata: true
  - purview-account: true
```
