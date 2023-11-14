## 6.0.12 (2023-11-01)

- [Feature] Upgrade TypeSpec compiler version to v0.49.0. Please refer to pr [#2061](https://github.com/Azure/autorest.typescript/pull/2061).
- [Feature] Upgrade TypeScript to 5.2.0. Please refer to pr [#2070](https://github.com/Azure/autorest.typescript/pull/2070).
- [Feature] Upgrade Node version to v18. Please refer to pr [#2085](https://github.com/Azure/autorest.typescript/pull/2085).
- [Feature] Anonymous models inline support in RLC and Modular. Please refer to pr [#2072](https://github.com/Azure/autorest.typescript/pull/2072).
- [Feature] Support enum member in Modular. Please refer to pr [#2092](https://github.com/Azure/autorest.typescript/pull/2092).
- [Feature] Replace dev dependency nyc with c8. Please refer to pr [#2079](https://github.com/Azure/autorest.typescript/pull/2079).
- [Bugfix] Fix nullable property generation in Modular. Please refer to pr [#2076](https://github.com/Azure/autorest.typescript/pull/2076).
- [Bugfix] Fix default byte as binary payload in Modular. Please refer to pr [#2088](https://github.com/Azure/autorest.typescript/pull/2088).
- [Bugfix] Fix binary in multipart form data in Modular. Please refer to pr [#2056](https://github.com/Azure/autorest.typescript/pull/2056).
- [Bugfix] Fix empty credential scopes and optional header issues. Please refer to pr [#2090](https://github.com/Azure/autorest.typescript/pull/2090).

## 6.0.11 (2023-10-17)

- [Feature] Support mock sample generation from TypeSpec in RLC. Please refer to pr [#2002](https://github.com/Azure/autorest.typescript/pull/2002).
- [Feature] Support additional properties in RLC. Please refer to pr [#2054](https://github.com/Azure/autorest.typescript/pull/2054).
- [Feature] Support custom http auth in Modular. Please refer to pr [#2041](https://github.com/Azure/autorest.typescript/pull/2041).
- [Feature] Do not flatten payload in Modular. Please refer to pr [#2020](https://github.com/Azure/autorest.typescript/pull/2020).
- [Feature] Support parameterized host parameters in Modular. Please refer to pr [#2032](https://github.com/Azure/autorest.typescript/pull/2032).
- [Bugfix] Fix literal type in Modular. Please refer to pr [#2054](https://github.com/Azure/autorest.typescript/pull/2054).
- [Bugfix] Fix error response type missing, non-azure scope package name missing issue. Please refer to pr [#2041](https://github.com/Azure/autorest.typescript/pull/2041).
- [Others] Bump dependencies version, for @azure/identity and mocha. Please refer to pr [#2057](https://github.com/Azure/autorest.typescript/pull/2057) and [#2053](https://github.com/Azure/autorest.typescript/pull/2053).
- [Others] Use Node 16 in both codegen and generated code. Please refer to [#2039](https://github.com/Azure/autorest.typescript/pull/2039) and [#2052](https://github.com/Azure/autorest.typescript/pull/2052).

## 6.0.10 (2023-09-26)

- [Feature] Upgrade TypeSpec compiler version to v0.48.0. Please refer to pr [#2029](https://github.com/Azure/autorest.typescript/pull/2029).
- [Feature] Take the typespec offsetDateTime as string in Modular and RLC. Please refer to pr [#2019](https://github.com/Azure/autorest.typescript/pull/2019) and [#2031](https://github.com/Azure/autorest.typescript/pull/2031).
- [Bugfix] Fix the parent properties missing issue. Please refer to pr [#2017](https://github.com/Azure/autorest.typescript/pull/2017).

## 6.0.9 (2023-09-11)

- [Feature] Upgrade TypeSpec compiler version to v0.47.0. Please refer to pr [#1968](https://github.com/Azure/autorest.typescript/pull/1968).
- [Feature] Support bytes, datetime, duration encoding in Modular. Please refer to pr [#2006](https://github.com/Azure/autorest.typescript/pull/2006).
- [Feature] Support client request id in Modular. Please refer to pr [#1985](https://github.com/Azure/autorest.typescript/pull/1985).
- [Feature] Support collection format in Modular. Please refer to pr [#1983](https://github.com/Azure/autorest.typescript/pull/1983).
- [Feature] Remove client side default value in Modular. Please refer to pr [#1977](https://github.com/Azure/autorest.typescript/pull/2006).
- [Bugfix] Fix credential issue in high level client. Please refer to pr [#1956](https://github.com/Azure/autorest.typescript/pull/1956).
- [Bugfix] Fix some issues found in content safety Modular. Please refer to pr [#1975](https://github.com/Azure/autorest.typescript/pull/1975).

## 6.0.8 (2023-08-15)

- [Feature] Support custom http authentication in RLC, Please refer to pr [#1959](https://github.com/Azure/autorest.typescript/pull/1959).
- [Feature] Add ts-node to dev dependencies, Please refer to pr [#1953](https://github.com/Azure/autorest.typescript/pull/1953).
- [Feature] Allow to generate code under sources folder for typespec input, Please refer to pr [#1960](https://github.com/Azure/autorest.typescript/pull/1960).
- [Feature] Generate metadata and testing files if relevant files are absent for typespec input, Please refer to pr [#1967](https://github.com/Azure/autorest.typescript/pull/1967).
- [Bugfix] Fix some issues found in latest OpenAI typespec, Please refer to issue [#1941](https://github.com/Azure/autorest.typescript/issues/1941).

## 6.0.7 (2023-07-26)

- [Feature] Uprage M4 to v4.26.2, Please refer to pr [#1930](https://github.com/Azure/autorest.typescript/pull/1930).
- [Feature] Support multi-client in Modular, Please refer to pr [#1830](https://github.com/Azure/autorest.typescript/pull/1830).
- [Feature] Upgrade typespec compiler to v0.46.0, Please refer to pr [#1927](https://github.com/Azure/autorest.typescript/pull/1927).
- [Feature] Support enum as discriminator property, Please refer to pr [#1924](https://github.com/Azure/autorest.typescript/pull/1924).
- [Feature] Add `models` subpath for Modular package, Please refer to pr [#1915](https://github.com/Azure/autorest.typescript/pull/1915).
- [Feature] Enable a flag to take interface name as operation group, Please refer to pr [#1911](https://github.com/Azure/autorest.typescript/pull/1911).
- [Bugfix] Fix the generation failure when the request and response body is union type, Please refer to pr [#1935](https://github.com/Azure/autorest.typescript/pull/1935).

## 6.0.6 (2023-06-30)

- [Feature] Ignore client.tsp in RLC generation. Please refer to pr [#1896](https://github.com/Azure/autorest.typescript/pull/1896).
- [Feature] Add collection format helper for number array. Please refer to pr [#1907](https://github.com/Azure/autorest.typescript/pull/1907).
- [Bugfix] Fix core error model generation failure during deserialization in Modular generation. Please refer to pr [#1904](https://github.com/Azure/autorest.typescript/pull/1904).

## 6.0.5 (2023-06-14)

- [Bugfix] Fix isUnexpected helper function in health insights case. Please refer to pr [#1889](https://github.com/Azure/autorest.typescript/pull/1889).

## 6.0.4 (2023-06-13)

- [Feature] Support typespec compiler 0.45.0, Please refer to pr [#1881](https://github.com/Azure/autorest.typescript/pull/1881).
- [Bugfix] Fix series of issues in RLC. Please refer to pr [#1885](https://github.com/Azure/autorest.typescript/pull/1885), [#1884](https://github.com/Azure/autorest.typescript/pull/1884) and [#1879](https://github.com/Azure/autorest.typescript/pull/1879).
- [Bugfix] Fix header collectionFormat issue in RLC. Please refer to pr [#1878](https://github.com/Azure/autorest.typescript/pull/1878)

## 6.0.3 (2023-06-02)

- [Feature] Support overload and sharedRoute in TypeSpec TS emitter. Please refer to pr [#1848](https://github.com/Azure/autorest.typescript/pull/1848).
- [Feature] Make subscriptionId optional if there are tenant level operations. Please refer to pr [#1869](https://github.com/Azure/autorest.typescript/pull/1869).
- [Feature] Respect client decorator when generate RLC client. Please refer to pr [#1876](https://github.com/Azure/autorest.typescript/pull/1876).
- [Bugfix] Improve the Modular generation with a bunch of issue fixes. Please refer to pr [#1836](https://github.com/Azure/autorest.typescript/pull/1836) and [#1861](https://github.com/Azure/autorest.typescript/pull/1861).
- [Bugfix] Fix issue in encode decorator support and doc in param tag. Please refer to pr [#1875](https://github.com/Azure/autorest.typescript/pull/1875) and [#1846](https://github.com/Azure/autorest.typescript/pull/1846).

## 6.0.2 (2023-05-15)

- [Feature] Support typespec compiler 0.44.0 and support @encode feature, Please refer to pr [#1829](https://github.com/Azure/autorest.typescript/pull/1829).
- [Feature] Support logger option, Please refer to pr [#1827](https://github.com/Azure/autorest.typescript/pull/1827).
- [Feature] Upgrade core-lro to v2.5.3, Please refer to pr [#1831](https://github.com/Azure/autorest.typescript/pull/1831).
- [Bugfix] Fix paging model issue. Please refer to pr [#1844](https://github.com/Azure/autorest.typescript/pull/1844).

## 6.0.1 (2023-04-20)

- [Feature] Support typespec compiler 0.43.0, Please refer to pr [#1813](https://github.com/Azure/autorest.typescript/pull/1813).

## 6.0.0 (2023-04-10)

- Next generation TypeScript/JavaScript code generator GA.

## 6.0.0-rc.10 (2023-03-16)

- [Feature] Rename to typespec-ts. Please refer to pr [#1782](https://github.com/Azure/autorest.typescript/pull/1782).
- [Feature] Add support for null type. Please refer to pr [#1767](https://github.com/Azure/autorest.typescript/pull/1767).
- [Feature] Support named unions. Please refer to pr [#1765](https://github.com/Azure/autorest.typescript/pull/1765).
- [Bugfix] Fix api-version parameter in query. Please refer to pr [#1766](https://github.com/Azure/autorest.typescript/pull/1766).

## 6.0.0-rc.9 (2023-02-14)

- [Feature] Import cadl-azure-core models from core libraries instead of generating it. Please refer to pr [#1665](https://github.com/Azure/autorest.typescript/pull/1665).
- [Feature] Support cadl compiler 0.40.0, Please refer to pr [#1750](https://github.com/Azure/autorest.typescript/pull/1750).
- [Bugfix] Fix path separator issue in Windows system. Please refer to pr [#1745](https://github.com/Azure/autorest.typescript/pull/1745).
- [Bugfix] Fix special charactor in property comment. Please refer to pr [#1726](https://github.com/Azure/autorest.typescript/pull/1726).

## 6.0.0-rc.8 (2023-02-06)

- [Feature] Upgrade core-lro to 2.5.x, Please refer to pr [#1586](https://github.com/Azure/autorest.typescript/pull/1586).
- [Feature] Upgrade prettier version in the package.json, Please refer to pr [#1741](https://github.com/Azure/autorest.typescript/pull/1741).
- [Feature] Upgrade dotenv version in the package.json, Please refer to pr [#1730](https://github.com/Azure/autorest.typescript/pull/1730).

## 6.0.0-rc.7 (2023-01-09)

- [Feature] Normalize parameter in host template and path uri, Please refer to pr [#1714](https://github.com/Azure/autorest.typescript/pull/1714).
- [BugFix] Fix a few minor issues. Please refer to pr [#1717](https://github.com/Azure/autorest.typescript/pull/1717) for more details.

## 6.0.0-rc.6 (2022-12-21)

- [Feature] Support cadl compiler 0.38.0, Please refer to issue [#1704](https://github.com/Azure/autorest.typescript/pull/1704).
- [BugFix] Fix a few minor issues. Please refer to issue [#1700](https://github.com/Azure/autorest.typescript/pull/1700) for more details.

## 6.0.0-rc.5 (2022-12-14)

- [Feature] Support ArmId schema. Please refer to issue [#1697](https://github.com/Azure/autorest.typescript/pull/1697) and issue [#1695](https://github.com/Azure/autorest.typescript/pull/1695).
- [Feature] Support multiple type union in cadl. Please refer to issue [#1694](https://github.com/Azure/autorest.typescript/pull/1694).
- [Feature] Enhance never and unknown and enum array type generation in cadl emitter. Please refer to issue [#1685](https://github.com/Azure/autorest.typescript/pull/1685) and issue [#1683](https://github.com/Azure/autorest.typescript/pull/1683).
- [Feature] Support custom wrapper in cadl emitter. Please refer to issue [#1690](https://github.com/Azure/autorest.typescript/pull/1690).
- [Feature] Sample generation enhancement. Please refer to pr [#1696](https://github.com/Azure/autorest.typescript/pull/1696).

## 6.0.0-rc.4 (2022-11-30)

- [Feature] Support optional parameter for parametrized host in RLC. Please refer to issue [#1635](https://github.com/Azure/autorest.typescript/issues/1635) and issue [#1667](https://github.com/Azure/autorest.typescript/issues/1667).
- [Feature] Paging enhancements for allowing consumers to participate in continuation in HLC. Please refer to pr [#1639](https://github.com/Azure/autorest.typescript/pull/1639).
- [BugFix] Improve generated paging methods when next operation is not specified in HLC. Please refer to pr [#1661](https://github.com/Azure/autorest.typescript/pull/1661).

## 6.0.0-rc.3 (2022-10-19)

- [BugFix] Fix missing peer dependencies. Please refer to [#1612](https://github.com/Azure/autorest.typescript/pull/1612) and [#1610](https://github.com/Azure/autorest.typescript/pull/1610) for further details.
- [Feature] Support sdk-folder in cadl emitter for automation script. Please refer to [#1613](https://github.com/Azure/autorest.typescript/pull/1613) for further details.

## 6.0.0-rc.2 (2022-10-13)

- First release after rlc cadl support refactor

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
