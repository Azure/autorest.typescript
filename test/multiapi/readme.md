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
  - "2018-02-01"
  - "2017-10-01"
batch:
  - tag: package-2017-10
    api-version: "2017-10-01"
    output-folder: ./generated-2017-10-01
  - tag: package-2018-02
    api-version: "2018-02-01"
    output-folder: ./generated-2018-02-01
  - multiapi-latest: true
    output-folder: ./generated
```

```yaml $(tag) == 'package-2017-10'
input-file:
  - $(testserver-dir)/custom-baseUrl.json
```

```yaml $(tag) == 'package-2018-02'
input-file:
  - $(testserver-dir)/custom-baseUrl-more-options.json
```
