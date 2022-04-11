# KeyVault Secrets Swagger Configuration

> see https://aka.ms/autorest

```yaml
input-file: https://raw.githubusercontent.com/Azure/autorest.testserver/main/swagger/azure-special-properties.json
```

## Customizations for Track 2

### Rename Basic definition

```yaml
security: AADToken
security-scopes:
- https://microsoft.com/.default
- http://microsoft.com/.default
```
