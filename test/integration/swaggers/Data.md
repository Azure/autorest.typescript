# Azure Cognitive Search TypeScript Protocol Layer

> see https://aka.ms/autorest

## Configuration

```yaml
package-name: "@azure/search-documents"
generate-metadata: true
license-header: MICROSOFT_MIT_NO_VERSION
input-file: ./searchindex.json
add-credentials: false
title: SearchClient
```

## Customizations for Track 2 Generator

See the [AutoRest samples](https://github.com/Azure/autorest/tree/master/Samples/3b-custom-transformations)
for more about how we're customizing things.

### Remove duplicate header parameter

```yaml
directive:
  - from: swagger-document
    where: $.paths..post
    transform: >
      const newParameters = [];
      for (let param of $.parameters) {
        if (param["$ref"] !== "#/parameters/ClientRequestIdParameter") {
          newParameters.push(param);
        }
      }
      $.parameters = newParameters;
  - from: swagger-document
    where: $.paths..get
    transform: >
      const newParameters = [];
      for (let param of $.parameters) {
        if (param["$ref"] !== "#/parameters/ClientRequestIdParameter") {
          newParameters.push(param);
        }
      }
      $.parameters = newParameters;
```

### Give a less-common name for actionType

```yaml
directive:
  - from: swagger-document
    where: $.definitions.IndexAction
    transform: >
      $.required = ['@search.action'];
```

```yaml
directive:
  - from: swagger-document
    where: $.definitions.AutocompleteItem.properties
    transform: >
      $["text"]["x-ms-client-name"] = "SDKCustomT^e^x^t";
      $["queryPlusText"]["x-ms-client-name"] = "SDKCustomq^u^e^r^y^P^l^u^s^T^e^x^t";
  - from: swagger-document
    where: $.definitions.AutocompleteRequest.properties
    transform: >
      $["search"]["x-ms-client-name"] = "SDKCustomS^e^a^r^c^h^T^e^x^t";
  - from: swagger-document
    where: $.definitions.SearchRequest.properties
    transform: >
      $["search"]["x-ms-client-name"] = "SDKCustomS^e^a^r^c^h^T^e^x^t";
  - from: swagger-document
    where: $.definitions.SuggestRequest.properties
    transform: >
      $["search"]["x-ms-client-name"] = "SDKCustomS^e^a^r^c^h^T^e^x^t";
  - from: swagger-document
    where: $.paths["/docs"].get.parameters[0]
    transform: >
      $["x-ms-client-name"] = "SDKCustomS^e^a^r^c^h^T^e^x^t";

modelerfour:
  naming:
    override:
      SDKCustomT^e^x^t: text
      SDKCustomq^u^e^r^y^P^l^u^s^T^e^x^t: queryPlusText
      SDKCustomS^e^a^r^c^h^T^e^x^t: searchText
```

```yaml
modelerfour:
  naming:
    override:
      ActionType: $DO_NOT_NORMALIZE$__actionType
```

```yaml
modelerfour:
  naming:
    override:
      text: $DO_NOT_NORMALIZE$_text
```

### Change score to \_score & highlights to \_highlights in SuggestResult

```yaml
modelerfour:
  naming:
    override:
      Score: $DO_NOT_NORMALIZE$_score
      Highlights: $DO_NOT_NORMALIZE$_highlights
```
