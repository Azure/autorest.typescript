# DomainServices

> see https://aka.ms/autorest

This is the AutoRest configuration file for DomainServices.

---

## Getting Started

To build the SDK for DomainServices, simply [Install AutoRest](https://aka.ms/autorest/install) and in this folder, run:

> `autorest`

To see additional help and options, run:

> `autorest --help`

---

## Configuration

### Basic Information

These are the global settings for the DomainServices API.

```yaml
openapi-type: arm
tag: package-2021-05
```

### Tag: package-2021-05

These settings apply only when `--tag=package-2021-05` is specified on the command line.

```yaml $(tag) == 'package-2021-05'
input-file:
  - https://raw.githubusercontent.com/Azure/azure-rest-api-specs/7ecd888eb76735567e1ff46e548c357e9d6c175f/specification/domainservices/resource-manager/Microsoft.AAD/stable/2021-05-01/domainservices.json
  - https://raw.githubusercontent.com/Azure/azure-rest-api-specs/7ecd888eb76735567e1ff46e548c357e9d6c175f/specification/domainservices/resource-manager/Microsoft.AAD/stable/2021-05-01/oucontainer.json
```
