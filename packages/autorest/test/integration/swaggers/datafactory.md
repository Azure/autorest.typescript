# Data Factory V2

> see https://aka.ms/autorest

This is the AutoRest configuration file for Data Factory V2.

---

## Getting Started

To build the SDK for Data Factory V2, simply [Install AutoRest](https://aka.ms/autorest/install) and in this folder, run:

> `autorest`

To see additional help and options, run:

> `autorest --help`

---

## Configuration

### Basic Information

These are the global settings for the Data Factory V2 API.

```yaml
title: DataFactoryManagementClient
description: The Azure Data Factory V2 management API provides a RESTful set of web services that interact with Azure Data Factory V2 services.
openapi-type: arm
tag: package-2018-06
modelerfour:
  lenient-model-deduplication: true
```

### Tag: package-2018-06

These settings apply only when `--tag=package-2018-06` is specified on the command line.

```yaml $(tag) == 'package-2018-06'
input-file:
  - https://raw.githubusercontent.com/Azure/azure-rest-api-specs/7ecd888eb76735567e1ff46e548c357e9d6c175f/specification/datafactory/resource-manager/Microsoft.DataFactory/stable/2018-06-01/datafactory.json
  - https://raw.githubusercontent.com/Azure/azure-rest-api-specs/7ecd888eb76735567e1ff46e548c357e9d6c175f/specification/datafactory/resource-manager/Microsoft.DataFactory/stable/2018-06-01/entityTypes/DataFlow.json
  - https://raw.githubusercontent.com/Azure/azure-rest-api-specs/7ecd888eb76735567e1ff46e548c357e9d6c175f/specification/datafactory/resource-manager/Microsoft.DataFactory/stable/2018-06-01/entityTypes/Dataset.json
  - https://raw.githubusercontent.com/Azure/azure-rest-api-specs/7ecd888eb76735567e1ff46e548c357e9d6c175f/specification/datafactory/resource-manager/Microsoft.DataFactory/stable/2018-06-01/entityTypes/IntegrationRuntime.json
  - https://raw.githubusercontent.com/Azure/azure-rest-api-specs/7ecd888eb76735567e1ff46e548c357e9d6c175f/specification/datafactory/resource-manager/Microsoft.DataFactory/stable/2018-06-01/entityTypes/LinkedService.json
  - https://raw.githubusercontent.com/Azure/azure-rest-api-specs/7ecd888eb76735567e1ff46e548c357e9d6c175f/specification/datafactory/resource-manager/Microsoft.DataFactory/stable/2018-06-01/entityTypes/ManagedPrivateEndpoint.json
  - https://raw.githubusercontent.com/Azure/azure-rest-api-specs/7ecd888eb76735567e1ff46e548c357e9d6c175f/specification/datafactory/resource-manager/Microsoft.DataFactory/stable/2018-06-01/entityTypes/Pipeline.json
  - https://raw.githubusercontent.com/Azure/azure-rest-api-specs/7ecd888eb76735567e1ff46e548c357e9d6c175f/specification/datafactory/resource-manager/Microsoft.DataFactory/stable/2018-06-01/entityTypes/Trigger.json
```

## Suppression

```yaml
directive:
  - from: swagger-document
    where: $.definitions.DataFlow
    transform: >
      $.required = ['type'];

  - from: swagger-document
    where: $.definitions.ManagedPrivateEndpoint
    transform: >
      $.required = ['type'];

  - from: swagger-document
    where: $.definitions.ManagedVirtualNetwork
    transform: >
      $.required = ['type'];
```
