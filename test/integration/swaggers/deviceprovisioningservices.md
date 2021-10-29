# Device Provisioning Services

> see https://aka.ms/autorest

This is the AutoRest configuration file for Device Provisioning Services.

---

## Getting Started

To build the SDK for DeviceProvisioningServices, simply [Install AutoRest](https://aka.ms/autorest/install) and in this folder, run:

> `autorest`

To see additional help and options, run:

> `autorest --help`

---

## Configuration

### Basic Information

These are the global settings for the API.

```yaml
openapi-type: arm
tag: package-2020-03
```

### Tag: package-2020-03

These settings apply only when `--tag=package-2020-03` is specified on the command line.

```yaml $(tag) == 'package-2020-03'
input-file:
  - https://raw.githubusercontent.com/Azure/azure-rest-api-specs/7ecd888eb76735567e1ff46e548c357e9d6c175f/specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/stable/2020-03-01/iotdps.json
```
