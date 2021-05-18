# TypeScript Plugin for Autorest

[Autorest](https://github.com/Azure/autorest/blob/master/docs/readme.md) is a suite of tools to automatically generate SDKs for cloud services. This project provides a backend that generates SDKs in TypeScript.

## Auto-generate your package in TypeScript using Autorest

It is easy to generate an SDK once you have a swagger specification file.

- You will need first to install Autorest

```bash
npm install -g autorest
```

- You can then generate the SDK as follows:

```bash
autorest --typescript <path to the swagger file>
```

- You will likely need to specify extra flags to control the behavior of the generation, and these flags are listed in the next section.

## Options

In addition to the [list of Autorest flags](https://github.com/Azure/autorest/blob/master/docs/generate/flags.md), you can further control the behavior of the typescript generator with the following flags:

| Flag                            | Description                                                                                                                             |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `--use-core-v2`                 | Uses azure core v2                                                                                                                      |
| `--hide-client`                 | Hides the client class from docs                                                                                                        |
| `--ignore-nullable-on-optional` | If an optional property is also marked as nullable, it will be treated as just optional                                                 |
| `--generate-metadata`           | Generates meta files such as readme, license, package.json, etc. Typically, you need to specify this flag in your first generation only |
| `--tracing-info`                | Controls specification of meta info attached to requests for tracing purposes                                                           |
| `--disable-async-iterators`     | Does not generate async iterators needed for paging operations                                                                          |

## Contributing

This project welcomes contributions and suggestions. Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.microsoft.com.

When you submit a pull request, a CLA-bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
