# Azure TextTranslation client library for JavaScript

This package contains an isomorphic SDK (runs both in Node.js and in browsers) for Azure TextTranslation client.

Text translation is a cloud-based REST API feature of the Translator service that uses neural
machine translation technology to enable quick and accurate source-to-target text translation
in real time across all supported languages.

The following methods are supported by the Text Translation feature:

Languages. Returns a list of languages supported by Translate, Transliterate, and Dictionary Lookup operations.

Translate. Renders single source-language text to multiple target-language texts with a single request.

Transliterate. Converts characters or letters of a source language to the corresponding characters or letters of a target language.

Detect. Returns the source code language code and a boolean variable denoting whether the detected language is supported for text translation and transliteration.

Dictionary lookup. Returns equivalent words for the source term in the target language.

Dictionary example Returns grammatical structure and context examples for the source term and target term pair.

Key links:

- [Package (NPM)](https://www.npmjs.com/package/@azure-rest/ai-translation-text)
- [API reference documentation](https://learn.microsoft.com/javascript/api/@azure-rest/ai-translation-text?view=azure-node-preview)

## Getting started

### Currently supported environments

- [LTS versions of Node.js](https://github.com/nodejs/release#release-schedule)
- Latest versions of Safari, Chrome, Edge and Firefox.

See our [support policy](https://github.com/Azure/azure-sdk-for-js/blob/main/SUPPORT.md) for more details.

### Prerequisites

- An [Azure subscription][azure_sub].

### Install the `@azure-rest/ai-translation-text` package

Install the Azure TextTranslation client library for JavaScript with `npm`:

```bash
npm install @azure-rest/ai-translation-text
```



### JavaScript Bundle
To use this client library in the browser, first you need to use a bundler. For details on how to do this, please refer to our [bundling documentation](https://aka.ms/AzureSDKBundling).

## Key concepts

### TextTranslationClient

`TextTranslationClient` is the primary interface for developers using the Azure TextTranslation client library. Explore the methods on this client object to understand the different features of the Azure TextTranslation service that you can access.

## Troubleshooting

### Logging

Enabling logging may help uncover useful information about failures. In order to see a log of HTTP requests and responses, set the `AZURE_LOG_LEVEL` environment variable to `info`. Alternatively, logging can be enabled at runtime by calling `setLogLevel` in the `@azure/logger`:

```ts 
import { setLogLevel } from "@azure/logger";

setLogLevel("info");
```

For more detailed instructions on how to enable logs, you can look at the [@azure/logger package docs](https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/core/logger).


## Contributing

If you'd like to contribute to this library, please read the [contributing guide](https://github.com/Azure/azure-sdk-for-js/blob/main/CONTRIBUTING.md) to learn more about how to build and test the code.

## Related projects

- [Microsoft Azure SDK for JavaScript](https://github.com/Azure/azure-sdk-for-js)

[azure_sub]: https://azure.microsoft.com/free/
[azure_portal]: https://portal.azure.com
[azure_identity]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/identity/identity
[defaultazurecredential]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/identity/identity#defaultazurecredential
