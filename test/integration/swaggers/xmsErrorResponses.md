# KeyVault Secrets Swagger Configuration

> see https://aka.ms/autorest

```yaml
input-file: https://raw.githubusercontent.com/Azure/autorest.testserver/09b758559197bd81787f81a6a6b03e1493492ced/swagger/xms-error-responses.json
```

## Customizations for Track 2

### Rename Basic definition

```yaml
directive:
  - from: swagger-document
    where: $.definitions.Pet
    transform: >
      $["x-ms-client-name"] = "PetDef";
```
