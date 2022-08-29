```yaml
input-file:
  - https://raw.githubusercontent.com/Azure/azure-rest-api-specs/main/specification/cognitiveservices/data-plane/Language/preview/2022-07-01-preview/questionanswering.json
  - https://raw.githubusercontent.com/Azure/azure-rest-api-specs/main/specification/cognitiveservices/data-plane/Language/preview/2022-07-01-preview/questionanswering-authoring.json
tag: release_2021_10_01
clear-output-folder: false
modelerfour:
  lenient-model-deduplication: true
title: QuestionAnswering
```

```yaml
directive:
  - from: swagger-document
    where: $.parameters.Endpoint
    transform: >
      $.name = "Endpoint";
  - from: swagger-document
    where: $.parameters.AssetKindParameter
    transform: >
      $["x-ms-enum"] = {"name": "AssetKind", "modelAsString": true};
```
