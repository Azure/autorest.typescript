# Multi-api

> see https://aka.ms/autorest

This is the autorest.typescript test fixture for multiapi support.

``` yaml
  typescript: true
  azure-arm: true
  package-name: "@azure/multiapi-test"
  generate-metadata: true
  multiapi: true
  tag: package-2018-02
  api-versions:
    - "2017-10-01"
    - "2018-02-01"
  batch:
    - tag: package-2017-10
    - tag: package-2018-02
    - default-api-version: "2018-02-01"
```

```yaml $(default-api-version) == '2018-02-01'
output-folder: ./generated/lib
```

```yaml $(tag) == 'package-2017-10'
input-file:
  - $(testserver-dir)/custom-baseUrl.json
output-folder: ./generated/2017-10-01/lib
```

```yaml $(tag) == 'package-2018-02'
input-file:
  - $(testserver-dir)/custom-baseUrl-more-options.json
output-folder: ./generated/2018-02-01/lib
```
