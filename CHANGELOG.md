## 6.0.0-rc.1 (2022-06-24)

- [Feature] Support security definitions in swagger. Please refer to [#1336](https://github.com/Azure/autorest.typescript/issues/1385) for further details.
- [Feature] Add isUnexpected helper for RLC. Please refer to [#1418](https://github.com/Azure/autorest.typescript/pull/1418) for further details.
- [BugFix] A few bugfixes. Please refer to [#1423](https://github.com/Azure/autorest.typescript/pull/1423) [#1424](https://github.com/Azure/autorest.typescript/pull/1424) [#1410](https://github.com/Azure/autorest.typescript/pull/1410) for further details.

## 6.0.0-beta.20 (2022-04-08)

- [BugFix] Fixed the issue with support of CAE Bearer Token Authentication Policy. Please refer to [#1336](https://github.com/Azure/autorest.typescript/pull/1336#discussion_r868700986) for further details.

## 6.0.0-beta.19 (2022-04-07)

- [Feature] Support CAE Bearer Token Authentication Policy. Please refer to [#1336](https://github.com/Azure/autorest.typescript/pull/1336) for further details.

- [Feature] Support updated version of `@azure/core-http-compat` package.

## 6.0.0-beta.18 (2022-03-28)

- [BugFix] fix mapper and parameter path for renamed parameter. Please refer to [#1342](https://github.com/Azure/autorest.typescript/issues/1342) for more details.
- [BugFix] rename client class name for rest level client. Please refer to [#1349](https://github.com/Azure/autorest.typescript/pull/1349) for more details.

## 6.0.0-beta.17 (2022-03-17)

- [BugFix] Include the `@azure/core-http-compat` package correctly in the client file. Please refer [#1344](https://github.com/Azure/autorest.typescript/issues/1344) for further details.

## 6.0.0-beta.16 (2022-03-01)

- [Feature] Bumped @autorest/extension-base version to 3.4.1 and fix breaking changes. [#1253](https://github.com/Azure/autorest.typescript/pull/1253)
- [Feature] Introduced new flag `core-http-compat-mode` and supported generation of SDKs with the new compatability package.

## 6.0.0-beta.15 (2021-11-10)

- [Feature] Bumped the modeler m4 version to 4.21.4

## 6.0.0-beta.14 (2021-11-01)

- [BugFix] Several name conflicts with operation group names, parameter names, ordering of mappers have been fixed. Please refer [#1227](https://github.com/Azure/autorest.typescript/pull/1227) for further details.

## 6.0.0-beta.13 (2021-09-14)

- [BugFix] The word `Operations` has been removed from parameters and interface names. Please refer [#1181](https://github.com/Azure/autorest.typescript/pull/1181) for further details.
- [Feature] A pagination helper is generated and exported if the rest client operation has `x-ms-pageable`. Please refer [#1169](https://github.com/Azure/autorest.typescript/pull/1169) for further details.
- [Feature] Test generation framework has been added to the management SDK. Please refer [#1162](https://github.com/Azure/autorest.typescript/pull/1162) for further details.
- [BugFix] The value of property `clientName` has been fixed relating to the discriminators. Please refer [#1184](https://github.com/Azure/autorest.typescript/pull/1184) for further details.
- [Feature] LROHelpers have been added to the REST client generation. Please refer [#1190](https://github.com/Azure/autorest.typescript/pull/1190) for further details.
- [BugFix] Code has been added to normalize only the required properties. Please refer [#1193](https://github.com/Azure/autorest.typescript/pull/1193) for further details.

## 6.0.0-beta.12 (2021-08-27)

- [BugFix] The `fs-extra` package has been moved from `devDependencies` to `dependencies`. Please refer [1179](https://github.com/Azure/autorest.typescript/issues/1179) for further details.

## 6.0.0-beta.11 (2021-08-27)

- [Feature] `src` folder is always cleared before generating an SDK. Please refer [#1166](https://github.com/Azure/autorest.typescript/issues/1166) for further details.
- [BugFix] The code snippet, related to identity, in the `readme.md` has been fixed. Please refer [#1137](https://github.com/Azure/autorest.typescript/issues/1137) for further details.

## 6.0.0-beta.10 (2021-08-19)

- [BugFix] Added `types` folder to the `files` property in `package.json` file. Please refer [#1165](https://github.com/Azure/autorest.typescript/pull/1165) for further details.

## 6.0.0-beta.9 (2021-08-17)

- [BugFix] Fixed the handling of non-string based sealed choices. Please refer [#1159](https://github.com/Azure/autorest.typescript/issues/1159) for more details.
- [Feature] Comments for the operation groups have been updated. Please refer [#291](https://github.com/Azure/autorest.typescript/issues/291) for more details.
- [BugFix] The `defaultValue` of the parameters has been fixed. Please refer [#1120](https://github.com/Azure/autorest.typescript/issues/1120) for more details.
- [BugFix] Generated header interfaces. Please refer [#1145](https://github.com/Azure/autorest.typescript/pull/1145) for more details.

## 6.0.0-beta.8 (2021-07-19)

- [BugFix] Added `SchemaType.SealedChoice` handling of the `valueType`. Please refer [#1103](https://github.com/Azure/autorest.typescript/pull/1103) for more details.
- [Feature] LRO files are moved to `core-lro` package. Please refer [#1099](https://github.com/Azure/autorest.typescript/pull/1099) for more details.

## 6.0.0-beta.7 (2021-07-13)

- [BugFix] Fixed the issue with the `HEAD` HTTP Requests and provided support for the `head-as-boolean` option. Please refer [#1037](https://github.com/Azure/autorest.typescript/issues/1037) for more details.

## 6.0.0-beta.6 (2021-07-12)

- [BugFix] Changed `sdk-type` property in `package.json` file from `management` to `mgmt`. Please refer [#1090](https://github.com/Azure/autorest.typescript/pull/1090) for further details.
- [Feature] Refactored LRO operations. Please refer [#1043](https://github.com/Azure/autorest.typescript/pull/1043) for further details.
- [BugFix] Changed the file name `LICENSE.txt` to `LICENSE`. Please refer [#1095](https://github.com/Azure/autorest.typescript/pull/1095) for further details.
- [Feature] Created the `CONTRIBUTING.md` file. Please refer [#1096](https://github.com/Azure/autorest.typescript/pull/1096) for further details.
- [BugFix] Changed the `const enum` declarations to `enum` declaration. Please refer [#1097](https://github.com/Azure/autorest.typescript/pull/1097) for further details.
- [BugFix] Fixed the samples URL in the readme file for the management SDKs. Please refer [#1098](https://github.com/Azure/autorest.typescript/pull/1098) for further details.

## 6.0.0-beta.5 (2021-06-29)

- [Feature] `CHANGELOG.md` file is added to the published package. Please refer [#1052](https://github.com/Azure/autorest.typescript/pull/1052) and [#1028](https://github.com/Azure/autorest.typescript/issues/1028) for further details.
- [Feature] Added ability to generate Rest level clients with the option `--rest-level-client`. Please refer [#1055](https://github.com/Azure/autorest.typescript/pull/1055) for further details.
- [Feature] Added `sdk-type` and other default scripts to the generated `package.json` file. Please refer [#1074](https://github.com/Azure/autorest.typescript/pull/1074) and [#1049](https://github.com/Azure/autorest.typescript/issues/1049) for further details.
- [BugFix] Added `@azure/core-auth` and `@azure/abort-controller` packages to the appropriate `package.json` file. Please refer [#1082](https://github.com/Azure/autorest.typescript/pull/1082) and [#1066](https://github.com/Azure/autorest.typescript/issues/1066) for further details.

## 6.0.0-beta.4 (2021-06-22)

- [BugFix] Update LRO's `intervalInMs` from the `Retry-After` header. Please refer [#1036](https://github.com/Azure/autorest.typescript/pull/1036) and [#1034](https://github.com/Azure/autorest.typescript/issues/1034) for further details.
- [BugFix] Stop mutating options bag in the client context constructor. Please refer [#1042](https://github.com/Azure/autorest.typescript/pull/1042) and [#1039](https://github.com/Azure/autorest.typescript/issues/1039) for further details.

## 1.0.0-beta.3 (2021-06-14)

- [BugFix] Changed the target of the generated SDKs from `es5` to `es6`. Please refer [#1004](https://github.com/Azure/autorest.typescript/issues/1004) and [#1027](https://github.com/Azure/autorest.typescript/pull/1027) for further details.
- [BugFix] Changed the default user agent of the generated SDKs to align with the SDK guidelines. Please refer [#1005](https://github.com/Azure/autorest.typescript/issues/1005) and [#1033](https://github.com/Azure/autorest.typescript/pull/1033) for further details. **Note**: The default-user agent will follow the format of `azsdk-js-<package-name>/<package-version> core-<package-name>/<core-package-version> ....`. If the user/custom code adds `azsdk-js-<package-name>/<package-version>` as custom user agent string, then it should be removed with this version update.

## 1.0.0-beta.2 (2021-06-07)

- [BugFix] Removed the erroneous `@azure/core-util` package dependency and added the `delay` function inline in LRO methods. Please refer [#993](https://github.com/Azure/autorest.typescript/issues/993) and [#1007](https://github.com/Azure/autorest.typescript/pull/1007) for further details.
- [Feature] Added the `review/*` files, generated by api-extractor, to the published packages. Please refer [#1003](https://github.com/Azure/autorest.typescript/issues/1003) and [#1007](https://github.com/Azure/autorest.typescript/pull/1007) for further details.
- [BugFix] Added the `headerCollectionPrefix` value correctly to the `mappers` and `parameters` file. Please refer [#902](https://github.com/Azure/autorest.typescript/issues/902) and [#1007](https://github.com/Azure/autorest.typescript/pull/1007) for further details.
- [BugFix] Fixed the incorrect handling of parameters with default constants. Please refer [#1012](https://github.com/Azure/autorest.typescript/issues/1012) and [#1010](https://github.com/Azure/autorest.typescript/pull/1010) for further details.

## 1.0.0-beta.1 (2021-05-28)

- Initial preview release of the Autorest Typescript/Javascript SDK Generator. This package replaces the older [@microsoft.azure/autorest.typescript](https://www.npmjs.com/package/@microsoft.azure/autorest.typescript) package.
- This first preview includes:
  - Core v2 packages are supported by default.
  - Several new options such as `licenseHeader`, `generateMetadata`, `useCoreV2`, `hideClients`, etc are supported.
  - New and updated methods for Long Running operations.
