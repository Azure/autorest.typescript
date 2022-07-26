# HealthcareApis

> see https://aka.ms/autorest

This is the AutoRest configuration file for HealthcareApis.

---

## Getting Started

To build the SDK for HealthcareApis, simply [Install AutoRest](https://aka.ms/autorest/install) and in this folder, run:

> `autorest`

To see additional help and options, run:

> `autorest --help`

---

## Configuration

### Basic Information

These are the global settings for HealthcareApis service.

```yaml
title: HealthcareApisManagementClient
description: Azure Healthcare APIs Client
openapi-type: arm
tag: package-preview-2021-06
azure-arm: true
```

### Tag: package-preview-2021-06

These settings apply only when `--tag=package-preview-2021-06` is specified on the command line.

```yaml $(tag) == 'package-preview-2021-06'
input-file:
  - https://raw.githubusercontent.com/Azure/azure-rest-api-specs/7ecd888eb76735567e1ff46e548c357e9d6c175f/specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/preview/2021-06-01-preview/healthcare-apis.json
```
