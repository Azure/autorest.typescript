## 0.31.0 (2024-07-23)

- [Feature] Set user agent prefix at different layer for modular. Please refer to [#2616](https://github.com/Azure/autorest.typescript/pull/2616).
- [Feature] Spread is spread support. Please refer to [#2653](https://github.com/Azure/autorest.typescript/pull/2653).
- [Feature] Upgrade TypeSpec compiler version to 0.58.x. Please refer to [#2679](https://github.com/Azure/autorest.typescript/pull/2679).
- [Feature] Support Modular readme.md generation. Please refer to [#2655](https://github.com/Azure/autorest.typescript/pull/2655). 
- [Feature] Engineering system related improvements.
    - Bump typescript version to ~5.5.3, please refer to [#2646](https://github.com/Azure/autorest.typescript/pull/2646); 
    - vitest timeout config, please refer to [#2632](https://github.com/Azure/autorest.typescript/pull/2632); 
    - recorded client for esm package improve, please refer to [#2632](https://github.com/Azure/autorest.typescript/pull/2632);
    - skip sample validation if generateSample is false, please refer to [#2650](https://github.com/Azure/autorest.typescript/pull/2650); 
    - remove unused configuration files, please refer to [#2655](https://github.com/Azure/autorest.typescript/pull/2655); 
    - add and refine document for generated code, please refer to [#2661](https://github.com/Azure/autorest.typescript/pull/2661) and [#2621](https://github.com/Azure/autorest.typescript/pull/2621).
- [Bugfix] Fix the isUnexpected narrowing issue in Modular. Please refer to [#2654](https://github.com/Azure/autorest.typescript/pull/2654).
- [Bugfix] Fix the extensible enum with null union generation failure in RLC. Please refer to [#2682](https://github.com/Azure/autorest.typescript/pull/2682).
- [Bugfix] Remove hard code for lro in patch operation. Please refer to [#2583](https://github.com/Azure/autorest.typescript/pull/2583).
- [Bugfix] Fix client option interface name inconsistent issue. Please refer to [#2671](https://github.com/Azure/autorest.typescript/pull/2671).
- [Bugfix] Fix nullable dictionaries and array element nullable serialization issues. Please refer to [#2631](https://github.com/Azure/autorest.typescript/pull/2631) and [#2643](https://github.com/Azure/autorest.typescript/pull/2643).

## 0.30.1 (2024-06-29)

- [Bugfix] Remove runtime references to @azure/core-util devDependency. Please refer to [#2634](https://github.com/Azure/autorest.typescript/pull/2634/files).

## 0.30.0 (2024-06-28)

- [Feature] Support non-exhaustive enum. Please refer to [#2584](https://github.com/Azure/autorest.typescript/pull/2584).
- [Feature] Add api version in ClientOptions and policy insight generated client. Please refer to [#2561](https://github.com/Azure/autorest.typescript/pull/2561).
- [Feature] Upgrade TypeSpec compiler version to 0.57.x. Please refer to [#2606](https://github.com/Azure/autorest.typescript/pull/2606).
- [Feature] Add fixed client level subscriptionId for ARM. Please refer to [#2615](https://github.com/Azure/autorest.typescript/pull/2615).
- [Feature] Support model based serializer. Please refer to [#2613](https://github.com/Azure/autorest.typescript/pull/2613).
- [Feature] Skip export of paged result models. Please refer to [#2620](https://github.com/Azure/autorest.typescript/pull/2620).
- [Feature] Remove env.ts and env.browser.ts file to support test recorder both v3 and v4. Please refer to [#2534](https://github.com/Azure/autorest.typescript/pull/2534) and [#2528](https://github.com/Azure/autorest.typescript/pull/2528).
- [Feature] remove api layer restore poller support. Please refer to [#2614](https://github.com/Azure/autorest.typescript/pull/2614).
- [Feature] Upgrade core related dependencies. Please refer to [identity upgrade pr](https://github.com/Azure/autorest.typescript/pull/2570) and [abort controller pr](https://github.com/Azure/autorest.typescript/pull/2555) and [core lro pr](https://github.com/Azure/autorest.typescript/pull/2626) and [core client rest pr](https://github.com/Azure/autorest.typescript/pull/2627).
- [Bugfix] Fix cast in bear auth. Please refer to [#2576](https://github.com/Azure/autorest.typescript/pull/2576).
- [Bugfix] Fix duplicate response headers. Please refer to [#2550](https://github.com/Azure/autorest.typescript/pull/2550).
- [Bugfix] Fix lint error in pollingHelper. Please refer to [#2582](https://github.com/Azure/autorest.typescript/pull/2582).

## 0.29.0 (2024-05-30)

- [Feature] Treat typespec unknown as any in Modular. Please refer to [#2546](https://github.com/Azure/autorest.typescript/pull/2546).
- [Feature] Support void type in request and response body. Please refer to [#2521](https://github.com/Azure/autorest.typescript/pull/2521).
- [Feature] Upgrade typespec compiler version to 0.56.x. Please refer to [#2503](https://github.com/Azure/autorest.typescript/pull/2503)
- [Feature] Additional properties for Modular legacy client support. Please refer to [#2469](https://github.com/Azure/autorest.typescript/pull/2469).
- [Feature] Support new long running operation generation in Modular. Please refer to [#2473](https://github.com/Azure/autorest.typescript/pull/2473).
- [Feature] Upgrade test-recorder dependency verison to support DefaultAzureCredential. Please refer to [#2518](https://github.com/Azure/autorest.typescript/pull/2518).
- [Feature] log warning if client level apiVersion is not supported. Please refer to [#2549](ttps://github.com/Azure/autorest.typescript/pull/2549).
- [Bugfix] Fix uber parent for multiple parents inheritance issue. Please refer to [#2527](https://github.com/Azure/autorest.typescript/pull/2527).
- [Bugfix] Fix empty named model generation issue. Please refer to [#2536](https://github.com/Azure/autorest.typescript/pull/2536).

## 0.28.0 (2024-04-30)

- [Feature] Generate types for new multipart/form-data design in RLC. Please refer to [#2455](https://github.com/Azure/autorest.typescript/pull/2455).
- [Feature] Remove orphan model detection. Please refer to [#2478](https://github.com/Azure/autorest.typescript/pull/2478).
- [Feature] Support projected version in modular and RLC. Please refer to [#2472](https://github.com/Azure/autorest.typescript/pull/2472).
- [Feature] Normalize enum name in RLC and modular. Please refer to [#2483](https://github.com/Azure/autorest.typescript/pull/2483).
- [Feature] Replace `esm` dev dependency with `tsx`. Please refer to [#2459](https://github.com/Azure/autorest.typescript/pull/2459).
- [Feature] Use `dev-tool run extract-api`. Please refer to [#2462](https://github.com/Azure/autorest.typescript/pull/2462).
- [Feature] Replace c8 with nyc for coverage. Please refer to [#2446](https://github.com/Azure/autorest.typescript/pull/2446).
- [Bugfix] Fix named union as path parameter and isUnexpected overloading issue in RLC. Please refer to [#2484](https://github.com/Azure/autorest.typescript/pull/2484).

## 0.27.0 (2024-04-18)

- [Feature] Support server parameter in modular. Please refer to [#2424](https://github.com/Azure/autorest.typescript/pull/2424).
- [Feature] Support special words. Please refer to [#2387](https://github.com/Azure/autorest.typescript/pull/2387).
- [Feature] Support additional properties full cases in RLC. Please refer to [#2445](https://github.com/Azure/autorest.typescript/pull/2445).
- [Feature] Support the change for union and enums in modular and RLC. Please refer to [#2380](https://github.com/Azure/autorest.typescript/pull/2380).
- [Feature] Upgrade typespec compiler to 0.55.0. Please refer to [#2380](https://github.com/Azure/autorest.typescript/pull/2380).
- [Feature] Bump typescript version to typescript@~5.4.5. Please refer to [#2442](https://github.com/Azure/autorest.typescript/pull/2442).
- [Feature] Update @azure-rest/core-client to 1.4.0.. Please refer to [#2441](https://github.com/Azure/autorest.typescript/pull/2441).
- [Feature] Upgrade mkdirp to ^3.0.1. Please refer to [#2436](https://github.com/Azure/autorest.typescript/pull/2436).
- [Bugfix] Fix missing `pack` scripts in package.json. Please refer to [#2426](https://github.com/Azure/autorest.typescript/pull/2426).

## 0.26.1 (2024-04-04)

- [Bugfix] Fix missing scripts in package.json file. Please refer to [#2402](https://github.com/Azure/autorest.typescript/pull/2402).

## 0.26.0 (2024-04-03)

- [Feature] Enable esm for RLC generation from TypeSpec. Please refer to [#2338](https://github.com/Azure/autorest.typescript/pull/2338).
- [Feature] Support usage and access. Please refer to [#2356](https://github.com/Azure/autorest.typescript/pull/2356).
- [Feature] Support server versions in modular. Please refer to [#2261](https://github.com/Azure/autorest.typescript/pull/2261).
- [Feature] Deprecate baseurl in favor of endpoint in RLC. Please refer to [#2246](https://github.com/Azure/autorest.typescript/pull/2246).
- [Bugfix] Fix error model rename issue. Please refer to [#2379](https://github.com/Azure/autorest.typescript/pull/2379).
- [Bugfix] Fix issues: anonymous array model import and sample mock value for credential. Please refer to [#2342](https://github.com/Azure/autorest.typescript/pull/2342).

## 0.25.0 (2024-03-08)

- [Feature] Upgrade @azure-tools/typespec-client-generator-core to 0.40.0. Please refer to [#2341](https://github.com/Azure/autorest.typescript/pull/2341).

## 0.24.0 (2024-03-07)

- [Feature] Upgrade TypeSpec compiler to 0.54.0. Please refer to [#2334](https://github.com/Azure/autorest.typescript/pull/2334).
- [Feature] Support clientName and encodedName. Please refer to [#2297](https://github.com/Azure/autorest.typescript/pull/2297).
- [Feature] Change branded to flavor. Please refer to [#2332](https://github.com/Azure/autorest.typescript/pull/2332).
- [Feature] Upgrade non-branded core version. Please refer to [#2306](https://github.com/Azure/autorest.typescript/pull/2306).
- [Feature] Support body optionality in Modular. Please refer to [#2238](https://github.com/Azure/autorest.typescript/pull/2238).
- [Feature] Enable readonly when the visibility is only read in modular. Please refer to [#2333](https://github.com/Azure/autorest.typescript/pull/2333).
- [BugFix] Only adopt getEffectiveModelType for anonymous model for modular and RLC. Please refer to [#2333](https://github.com/Azure/autorest.typescript/pull/2333).

## 0.23.0 (2024-02-27)

- [Feature] Upgrade TypeSpec compiler to 0.53.0. Please refer to [#2286](https://github.com/Azure/autorest.typescript/pull/2286).
- [Feature] Support File in multipart form data in RLC. Please refer to [#2258](https://github.com/Azure/autorest.typescript/pull/2258).
- [Feature] Upgrade unbranded core dependency version. Please refer to [#2306](https://github.com/Azure/autorest.typescript/pull/2306).
- [BugFix] Fix ModelProperty being used in body in RLC. Please refer to [#2288](https://github.com/Azure/autorest.typescript/issues/2288).
- [BugFix] Fix unbranded core dependency update for RLC. Please refer to [#2288](https://github.com/Azure/autorest.typescript/issues/2288).
- [BugFix] Fix maxium call stack size in error handling. Please refer to [#2288](https://github.com/Azure/autorest.typescript/issues/2288).
- [BugFix] Fix json merge patch model name in anonymous models. Please refer to [#2288](https://github.com/Azure/autorest.typescript/issues/2288).
- [BugFix] Lint error fix for return type missing in generated code. Please refer to [#2302](https://github.com/Azure/autorest.typescript/issues/2302).

## 0.22.0 (2024-02-06)

- [Feature] Upgrade TypeSpec compiler to 0.52.0. Please refer to [#2262](https://github.com/Azure/autorest.typescript/pull/2262).
- [Feature] Add serialize util for polymorphic base and named union. Please refer to [#2169](https://github.com/Azure/autorest.typescript/pull/2169).
- [Feature] Support scalar type being used in body type. Please refer to [#2275](https://github.com/Azure/autorest.typescript/pull/2275).
- [Feature] Dependencies update. Please refer to [#2282](https://github.com/Azure/autorest.typescript/pull/2282) and [#2174](https://github.com/Azure/autorest.typescript/pull/2174) and [#2248](https://github.com/Azure/autorest.typescript/pull/2248).
- [BugFix] Fix reserved parameter name being used as mapper identifier in Autorest codegen. Please refer to [#2205](https://github.com/Azure/autorest.typescript/pull/2205).
- [BugFix] Fix union of KeyCredential and TokenCredential in RLC client. Please refer to [#2195](https://github.com/Azure/autorest.typescript/pull/2195).
- [BugFix] Fix optional or nullable property being used in serialize utils. Please refer to [#2283](https://github.com/Azure/autorest.typescript/pull/2283).

## 0.21.0 (2024-01-26)

- [Feature] Upgrade TypeSpec compiler to 0.51.0。 Please refer to pr [#2203](https://github.com/Azure/autorest.typescript/pull/2203).
- [Feature] Support decimal type in Modular. Please refer to pr [#2233](https://github.com/Azure/autorest.typescript/pull/2233).
- [Feature] Support never type in Modular. Please refer to pr [#2233](https://github.com/Azure/autorest.typescript/pull/2233).
- [BugFix] Fix empty model generation failure in Modular. Please refer to pr [#2117](https://github.com/Azure/autorest.typescript/pull/2117).
- [BugFix] Fix circular reference generation failure in Modular. Please refer to pr [#2228](https://github.com/Azure/autorest.typescript/pull/2228).
- [BugFix] Fix array item type optional issue. Please refer to pr [#2103](https://github.com/Azure/autorest.typescript/pull/2103).

## 0.20.0 (2024-01-16)

- [Feature] Support decimal type in RLC. Please refer to pr [#2170](https://github.com/Azure/autorest.typescript/pull/2170).
- [Feature] Support named union in Modular. Please refer to pr [#2189](https://github.com/Azure/autorest.typescript/pull/2189).
- [Feature] Support primitive variant type union and enum being used in headers, union and enum for RLC and union for Modular. Please refer to pr [#2189](https://github.com/Azure/autorest.typescript/pull/2189).
- [Feature] Upgrade TypeSpec compiler to 0.50.0, please refer to pr [#2140](https://github.com/Azure/autorest.typescript/pull/2140).
- [Feature] Dependencies update, please refer to pr [#2168](https://github.com/Azure/autorest.typescript/pull/2168), [#2184](https://github.com/Azure/autorest.typescript/pull/2184). License update, please refer to pr [#2183](https://github.com/Azure/autorest.typescript/pull/2183).
- [Bugfix] Fix duplicate query api version parameter issue, please refer to pr [#2191](https://github.com/Azure/autorest.typescript/pull/2191).
- [Bugfix] Fix named union in RLC, please refer to pr [#2154](https://github.com/Azure/autorest.typescript/pull/2154).
- [Bugfix] Fix effective payload type issue, please refer to pr [#2162](https://github.com/Azure/autorest.typescript/pull/2162).

## 0.19.0 (2023-11-15)

- [Feature] Support hierarchy client. Please refer to pr [#2080](https://github.com/Azure/autorest.typescript/pull/2080).
- [Feature] Support unbrand core ts-http-runtime. Please refer to pr [#2083](https://github.com/Azure/autorest.typescript/pull/2083)
- [Bugfix] Fix sample generation with special properties. Please refer to pr [#2099](https://github.com/Azure/autorest.typescript/pull/2099).
- [Bugfix] Fix missing isUnexpected missing in overload. Please refer to pr [#2097](https://github.com/Azure/autorest.typescript/pull/2097).
- [Bugfix] Fix the empty default value issue for array in body model. Please refer to pr [#2111](https://github.com/Azure/autorest.typescript/pull/2111).

## 0.18.0 (2023-11-01)

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

## 0.17.1 (2023-10-17)

- [Feature] Support mock sample generation from TypeSpec in RLC. Please refer to pr [#2002](https://github.com/Azure/autorest.typescript/pull/2002).
- [Feature] Support additional properties in RLC. Please refer to pr [#2054](https://github.com/Azure/autorest.typescript/pull/2054).
- [Feature] Support custom http auth in Modular. Please refer to pr [#2041](https://github.com/Azure/autorest.typescript/pull/2041).
- [Feature] Do not flatten payload in Modular. Please refer to pr [#2020](https://github.com/Azure/autorest.typescript/pull/2020).
- [Feature] Support parameterized host parameters in Modular. Please refer to pr [#2032](https://github.com/Azure/autorest.typescript/pull/2032).
- [Bugfix] Fix literal type in Modular. Please refer to pr [#2054](https://github.com/Azure/autorest.typescript/pull/2054).
- [Bugfix] Fix error response type missing, non-azure scope package name missing issue. Please refer to pr [#2041](https://github.com/Azure/autorest.typescript/pull/2041).
- [Others] Bump dependencies version, for @azure/identity and mocha. Please refer to pr [#2057](https://github.com/Azure/autorest.typescript/pull/2057) and [#2053](https://github.com/Azure/autorest.typescript/pull/2053).
- [Others] Use Node 16 in both codegen and generated code. Please refer to [#2039](https://github.com/Azure/autorest.typescript/pull/2039) and [#2052](https://github.com/Azure/autorest.typescript/pull/2052).

## 0.17.0 (2023-09-26)

- [Feature] Upgrade TypeSpec compiler version to v0.48.0. Please refer to pr [#2029](https://github.com/Azure/autorest.typescript/pull/2029).
- [Feature] Take the typespec offsetDateTime as string in Modular and RLC. Please refer to pr [#2019](https://github.com/Azure/autorest.typescript/pull/2019) and [#2031](https://github.com/Azure/autorest.typescript/pull/2031).
- [Bugfix] Fix the parent properties missing issue. Please refer to pr [#2017](https://github.com/Azure/autorest.typescript/pull/2017).

## 0.16.0 (2023-09-11)

- [Feature] Upgrade TypeSpec compiler version to v0.47.0. Please refer to pr [#1968](https://github.com/Azure/autorest.typescript/pull/1968).
- [Feature] Support bytes, datetime, duration encoding in Modular. Please refer to pr [#2006](https://github.com/Azure/autorest.typescript/pull/2006).
- [Feature] Support client request id in Modular. Please refer to pr [#1985](https://github.com/Azure/autorest.typescript/pull/1985).
- [Feature] Support collection format in Modular. Please refer to pr [#1983](https://github.com/Azure/autorest.typescript/pull/1983).
- [Feature] Remove client side default value in Modular. Please refer to pr [#1977](https://github.com/Azure/autorest.typescript/pull/2006).
- [Bugfix] Fix credential issue in high level client. Please refer to pr [#1956](https://github.com/Azure/autorest.typescript/pull/1956).
- [Bugfix] Fix some issues found in content safety Modular. Please refer to pr [#1975](https://github.com/Azure/autorest.typescript/pull/1975).

## 0.15.0 (2023-08-15)

- [Feature] Support custom http authentication in RLC, Please refer to pr [#1959](https://github.com/Azure/autorest.typescript/pull/1959).
- [Feature] Add ts-node to dev dependencies, Please refer to pr [#1953](https://github.com/Azure/autorest.typescript/pull/1953).
- [Feature] Allow to generate code under sources folder for typespec input, Please refer to pr [#1960](https://github.com/Azure/autorest.typescript/pull/1960).
- [Feature] Generate metadata and testing files if relevant files are absent for typespec input, Please refer to pr [#1967](https://github.com/Azure/autorest.typescript/pull/1967).
- [Feature] Add converter for uint8array map to string in modular, Please refer to pr [#1934](https://github.com/Azure/autorest.typescript/pull/1934).
- [Bugfix] Fix some issues found in latest OpenAI typespec, Please refer to issue [#1941](https://github.com/Azure/autorest.typescript/issues/1941).

## 0.14.0 (2023-07-26)

- [Feature] Support multi-client in Modular, Please refer to pr [#1830](https://github.com/Azure/autorest.typescript/pull/1830).
- [Feature] Upgrade typespec compiler to v0.46.0, Please refer to pr [#1927](https://github.com/Azure/autorest.typescript/pull/1927).
- [Feature] Support enum as discriminator property, Please refer to pr [#1924](https://github.com/Azure/autorest.typescript/pull/1924).
- [Feature] Add `models` subpath for Modular package, Please refer to pr [#1915](https://github.com/Azure/autorest.typescript/pull/1915).
- [Feature] Enable a flag to take interface name as operation group, Please refer to pr [#1911](https://github.com/Azure/autorest.typescript/pull/1911).
- [Bugfix] Fix the generation failure when the request and response body is union type, Please refer to pr [#1935](https://github.com/Azure/autorest.typescript/pull/1935).

## 0.13.4 (2023-06-30)

- [Feature] Ignore client.tsp in RLC generation. Please refer to pr [#1896](https://github.com/Azure/autorest.typescript/pull/1896).
- [Feature] Add collection format helper for number array. Please refer to pr [#1907](https://github.com/Azure/autorest.typescript/pull/1907).
- [Bugfix] Fix core error model generation failure during deserialization in Modular generation. Please refer to pr [#1904](https://github.com/Azure/autorest.typescript/pull/1904).

## 0.13.3 (2023-06-14)

- [Bugfix] Fix isUnexpected helper function in health insights case. Please refer to pr [#1889](https://github.com/Azure/autorest.typescript/pull/1889).

## 0.13.2 (2023-06-13)

- [Feature] Support typespec compiler 0.45.0, Please refer to pr [#1881](https://github.com/Azure/autorest.typescript/pull/1881).
- [Bugfix] Fix series of issues in RLC. Please refer to pr [#1885](https://github.com/Azure/autorest.typescript/pull/1885), [#1884](https://github.com/Azure/autorest.typescript/pull/1884) and [#1879](https://github.com/Azure/autorest.typescript/pull/1879).
- [Bugfix] Fix header collectionFormat issue in RLC. Please refer to pr [#1878](https://github.com/Azure/autorest.typescript/pull/1878)

## 0.13.1 (2023-06-02)

- [Feature] Support overload and sharedRoute in TypeSpec TS emitter. Please refer to pr [#1848](https://github.com/Azure/autorest.typescript/pull/1848).
- [Feature] Make subscriptionId optional if there are tenant level operations. Please refer to pr [#1869](https://github.com/Azure/autorest.typescript/pull/1869).
- [Feature] Respect client decorator when generate RLC client. Please refer to pr [#1876](https://github.com/Azure/autorest.typescript/pull/1876).
- [Bugfix] Improve the Modular generation with a bunch of issue fixes. Please refer to pr [#1836](https://github.com/Azure/autorest.typescript/pull/1836) and [#1861](https://github.com/Azure/autorest.typescript/pull/1861).
- [Bugfix] Fix issue in encode decorator support and doc in param tag. Please refer to pr [#1875](https://github.com/Azure/autorest.typescript/pull/1875) and [#1846](https://github.com/Azure/autorest.typescript/pull/1846).

## 0.13.0 (2023-05-15)

- [Feature] Support typespec compiler 0.44.0 and support @encode feature, Please refer to pr [#1829](https://github.com/Azure/autorest.typescript/pull/1829).
- [Feature] Support logger option, Please refer to pr [#1827](https://github.com/Azure/autorest.typescript/pull/1827).
- [Feature] Upgrade core-lro to v2.5.3, Please refer to pr [#1831](https://github.com/Azure/autorest.typescript/pull/1831).
- [Bugfix] Fix paging model issue. Please refer to pr [#1844](https://github.com/Azure/autorest.typescript/pull/1844).

## 0.12.0 (2023-04-20)

- [Feature] Support typespec compiler 0.43.0, Please refer to pr [#1813](https://github.com/Azure/autorest.typescript/pull/1813).

## 0.11.0 (2023-03-16)

- [Feature] Rename to typespec-ts. Please refer to pr [#1782](https://github.com/Azure/autorest.typescript/pull/1782).
- [Feature] Add support for null type. Please refer to pr [#1767](https://github.com/Azure/autorest.typescript/pull/1767).
- [Feature] Support named unions. Please refer to pr [#1765](https://github.com/Azure/autorest.typescript/pull/1765).
- [Bugfix] Fix api-version parameter in query. Please refer to pr [#1766](https://github.com/Azure/autorest.typescript/pull/1766).

## 1.0.0-beta.10 (2023-02-14)

- [Feature] Import cadl-azure-core models from core libraries instead of generating it. Please refer to pr [#1665](https://github.com/Azure/autorest.typescript/pull/1665).
- [Feature] Support cadl compiler 0.40.0, Please refer to pr [#1750](https://github.com/Azure/autorest.typescript/pull/1750).
- [Bugfix] Fix path separator issue in Windows system. Please refer to pr [#1745](https://github.com/Azure/autorest.typescript/pull/1745).
- [Bugfix] Fix special charactor in property comment. Please refer to pr [#1726](https://github.com/Azure/autorest.typescript/pull/1726).

## 1.0.0-beta.9 (2023-02-06)

- [Feature] Upgrade core-lro to 2.5.x, Please refer to pr [#1586](https://github.com/Azure/autorest.typescript/pull/1586).
- [Feature] Support collection format, Please refer to pr [#1740](https://github.com/Azure/autorest.typescript/pull/1740).
- [Feature] Support cadl compiler 0.39.0, Please refer to pr [#1732](https://github.com/Azure/autorest.typescript/pull/1732).
- [Feature] Upgrade prettier version in the package.json, Please refer to pr [#1741](https://github.com/Azure/autorest.typescript/pull/1741).

## 1.0.0-beta.8 (2023-01-09)

- [Feature] Normalize parameter in host template and path uri, Please refer to pr [#1714](https://github.com/Azure/autorest.typescript/pull/1714).
- [BugFix] Fix a few minor issues. Please refer to pr [#1715](https://github.com/Azure/autorest.typescript/pull/1715) for more details.

## 1.0.0-beta.7 (2022-12-21)

- [Feature] Support cadl compiler 0.38.0, Please refer to issue [#1704](https://github.com/Azure/autorest.typescript/pull/1704).
- [BugFix] Fix a few minor issues. Please refer to issue [#1700](https://github.com/Azure/autorest.typescript/pull/1700) for more details.

## 1.0.0-beta.6 (2022-12-14)

- [Feature] Support ArmId schema. Please refer to issue [#1697](https://github.com/Azure/autorest.typescript/pull/1697) and issue [#1695](https://github.com/Azure/autorest.typescript/pull/1695).
- [Feature] Support multiple type union in cadl. Please refer to issue [#1694](https://github.com/Azure/autorest.typescript/pull/1694).
- [Feature] Enhance never and unknown and enum array type generation in cadl emitter. Please refer to issue [#1685](https://github.com/Azure/autorest.typescript/pull/1685) and issue [#1683](https://github.com/Azure/autorest.typescript/pull/1683).
- [Feature] Support custom wrapper in cadl emitter. Please refer to issue [#1690](https://github.com/Azure/autorest.typescript/pull/1690).
- [Feature] Sample generation enhancement. Please refer to pr [#1696](https://github.com/Azure/autorest.typescript/pull/1696).
-

## 1.0.0-beta.5 (2022-11-30)

- [Feature] Support multiple clients from Cadl. Please refer to issue [#1593](https://github.com/Azure/autorest.typescript/issues/1593).
- [Feature] Support optional parameter for parametrized host. Please refer to issue [#1635](https://github.com/Azure/autorest.typescript/issues/1635) and issue [#1667](https://github.com/Azure/autorest.typescript/issues/1667).

## 1.0.0-beta.4 (2022-11-16)

- [BugFix] Add the license header and please refer the [pr](https://github.com/Azure/autorest.typescript/pull/1663).

## 1.0.0-beta.3 (2022-11-15)

- [BugFix] Fix browser testing issue. Please refer to pr [#1656](https://github.com/Azure/autorest.typescript/pull/1656) for details.
- [BugFix] Fix the option azureSdkForJs issue. Please refer to pr [#1638](https://github.com/Azure/autorest.typescript/pull/1638) for details.
- [BugFix] Fix modle name in merge and patch issue. Please refer to pr [#1647](https://github.com/Azure/autorest.typescript/pull/1647) for details.
- [Feature] Update the contributing and readme document. Please refer to pr [#1627](https://github.com/Azure/autorest.typescript/pull/1627) for details.
- [Feature] Support multiple parameters for parametrized host. Please refer to pr [#1635](https://github.com/Azure/autorest.typescript/issues/1635)

## 1.0.0-beta.2 (2022-10-19)

- [BugFix] Fix missing peer dependencies. Please refer to [#1612](https://github.com/Azure/autorest.typescript/pull/1612) and [#1610](https://github.com/Azure/autorest.typescript/pull/1610) for further details.
- [Feature] Support sdk-folder in cadl emitter for automation script. Please refer to [#1613](https://github.com/Azure/autorest.typescript/pull/1613) for further details.

## 1.0.0-beta.1 (2022-10-13)

- Initial preview release of the Autorest Typescript/Javascript Cadl RLC Emitter.
