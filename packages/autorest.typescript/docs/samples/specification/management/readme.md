# Sample Management Generation

Use the flag `--azure-arm` to specify you want to generate [management plane][mgmt] code. For more information, see our [flag index][flag_index]

### Settings

``` yaml
input-file: ../../../../node_modules/@microsoft.azure/autorest.testserver/swagger/head.json
package-name: @azure/mgmt-sample
license-header: MICROSOFT_MIT_NO_VERSION
azure-arm: true
```

<!-- LINKS -->
[mgmt]: https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/control-plane-and-data-plane#control-plane
[flag_index]: https://github.com/Azure/autorest/tree/main/packages/autorest.typescript/docs/generate/flags.md