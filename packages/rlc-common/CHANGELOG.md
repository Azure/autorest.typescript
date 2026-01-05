## 0.48.0 (2026-01-05)

- [Feature] Implement array encoding for model properties. Please refer to [#3659](https://github.com/Azure/autorest.typescript/pull/3659)
- [Feature] Add code owner. Please refer to [#3667](https://github.com/Azure/autorest.typescript/pull/3667)
- [Feature] Upgrade tcgc for multiple service. Please refer to [#3658](https://github.com/Azure/autorest.typescript/pull/3658)
- [Bugfix] Fix compile issues if upgrade tcgc to 0.63.1. Please refer to [#3662](https://github.com/Azure/autorest.typescript/pull/3662)
- [Bugfix] Normalization in-consistancy for discriminated union during Serializer/DeSerializer. Please refer to [#3652](https://github.com/Azure/autorest.typescript/pull/3652)
- [Bugfix] Fix flatten inconsistency between src and sample gen. Please refer to [#3657](https://github.com/Azure/autorest.typescript/pull/3657)

## 0.47.1 (2025-12-15)

- [Feature] Prevent flatten property decorator from being applied to non-model types. Please refer to [#3643](https://github.com/Azure/autorest.typescript/pull/3643)
- [Feature] Bump TypeSpec dependencies to latest stable (1.7.0 / 0.77.0 / 0.63.0). Please refer to [#3638](https://github.com/Azure/autorest.typescript/pull/3638)
- [Feature] Update documentation to use pnpm commands instead of rush. Please refer to [#3629](https://github.com/Azure/autorest.typescript/pull/3629)
- [Feature] Remove review/ and changelogmd in package.json's files config. Please refer to [#3310](https://github.com/Azure/autorest.typescript/pull/3310)
- [Bugfix] Fix query parameter missing issue if using @clientInitialization. Please refer to [#3555](https://github.com/Azure/autorest.typescript/pull/3555)
- [Feature] Pnpm migration. Please refer to [#3366](https://github.com/Azure/autorest.typescript/pull/3366)

## 0.47.0 (2025-12-04)

- [Bugfix] Fix inconsistent Serializer Function Names in Discriminated Unions cross namesapce. Please refer to [#3589](https://github.com/Azure/autorest.typescript/pull/3589)
- [Bugfix] Fix inherited property mapping by recursively processing base class properties in sample generation. Please refer to [#3620](https://github.com/Azure/autorest.typescript/pull/3620)
- [Feature] Support client constructor overloads for optional subscriptionId. Please refer to [#3590](https://github.com/Azure/autorest.typescript/pull/3590)
- [Feature] [Breaking mitigation] Property flatten support in Modular. Please refer to [#3586](https://github.com/Azure/autorest.typescript/pull/3586)
- [Feature] Convert emitter throw statements to diagnostic reports to prevent crashes. Please refer to [#3482](https://github.com/Azure/autorest.typescript/pull/3482)
- [Feature] Add Dictionary Deserialization Support and Improve Test Coverage for Edge Cases. Please refer to [#3613](https://github.com/Azure/autorest.typescript/pull/3613)
- [Feature] Pnpm migration. Please refer to [#3366](https://github.com/Azure/autorest.typescript/pull/3366)
- [Bugfix] Fix formatting inconsistency. Please refer to [#3603](https://github.com/Azure/autorest.typescript/pull/3603)
- [Feature] Support the legacy LRO methods with feature flag. Please refer to [#3593](https://github.com/Azure/autorest.typescript/pull/3593)

## 0.46.1 (2025-11-17)

- [Feature] Implement README file updates and enhance package file export options [#3568](https://github.com/Azure/autorest.typescript/pull/3568)
- [Feature] Bump TypeSpec dependencies to latest stable versions [#3597](https://github.com/Azure/autorest.typescript/pull/3597)
- [Feature] Update codegen default behavior for is-modular-library true [#3369](https://github.com/Azure/autorest.typescript/pull/3369)
- [Bugfix] Fix URI template variable name decoding for better service compatibility [#3583](https://github.com/Azure/autorest.typescript/pull/3583)
- [Feature] Disable the naming-convention eslint rule for models [#3584](https://github.com/Azure/autorest.typescript/pull/3584)
- [Feature] Support POST method for paging next link operations [#3578](https://github.com/Azure/autorest.typescript/pull/3578)

## 0.46.0 (2025-11-06)

- [Feature] Add status code `201` into lro expected status code. Please refer to [#3579](https://github.com/Azure/autorest.typescript/pull/3579)
- [Bugfix] Fix binary response handling when response body is not valid UTF-8. Please refer to [#3572](https://github.com/Azure/autorest.typescript/pull/3572)
- [Bugfix] Fix apiVersion parameter missing in DPG modular generation. Please refer to [#3437](https://github.com/Azure/autorest.typescript/pull/3437)
- [Feature] Update vitest to v4 in generated packages. Please refer to [#3571](https://github.com/Azure/autorest.typescript/pull/3571)
- [Bugfix] Fix the non-any type argument error. Please refer to [#3576](https://github.com/Azure/autorest.typescript/pull/3576)
- [Bugfix] Fix serializeRecord to handle null/undefined additionalProperties. Please refer to [#3575](https://github.com/Azure/autorest.typescript/pull/3575)
- [Feature] Simplify building samples. Please refer to [#3453](https://github.com/Azure/autorest.typescript/pull/3453)
- [Bugfix] Add ut for placeholder generated for ErrorResponse. Please refer to [#3520](https://github.com/Azure/autorest.typescript/pull/3520)
- [Bugfix] Fix the Function type lint error. Please refer to [#3569](https://github.com/Azure/autorest.typescript/pull/3569)
- [Feature] Fix missing client-level parameters in generated samples. Please refer to [#3544](https://github.com/Azure/autorest.typescript/pull/3544)
- [Feature] Enable no-console ESLint rule in emitter packages. Please refer to [#3554](https://github.com/Azure/autorest.typescript/pull/3554)
- [Bugfix] Fix sample method parameter order. Please refer to [#3546](https://github.com/Azure/autorest.typescript/pull/3546)
- [Feature] add ut for `additionalProperties:{}`. Please refer to [#3554](https://github.com/Azure/autorest.typescript/pull/3554)
- [Feature] Implement selective directory clearing function to preserve TempTypeSpecFiles. Please refer to [#3552](https://github.com/Azure/autorest.typescript/pull/3552)
- [Feature] Add override spector cases. Please refer to [#3518](https://github.com/Azure/autorest.typescript/pull/3518)
- [Feature] Remove `mkdirp` from dev deps of generated package.json. Please refer to [#3536](https://github.com/Azure/autorest.typescript/pull/3536)
- [Feature] Update recorder start case in sample.spec.ts. Please refer to [#3543](https://github.com/Azure/autorest.typescript/pull/3543)
- [Feature] Upgrade specs version to latest dev. Please refer to [#3547](https://github.com/Azure/autorest.typescript/pull/3547)
- [Feature] Generate tsconfig.test.node.json. Please refer to [#3535](https://github.com/Azure/autorest.typescript/pull/3535)
- [Bugfix] Don't use workspace version specifier for runtime dependencies yet. Please refer to [#3537](https://github.com/Azure/autorest.typescript/pull/3537)
- [Bugfix] [modular] Use "workspace:^" for devDependencies. Please refer to [#3534](https://github.com/Azure/autorest.typescript/pull/3534)

## 0.45.1 (2025-10-11)

- [Bugfix] Upgrade the @azure-tools/typespec-azure-core to v0.61.0. Please refer to [#3532](https://github.com/Azure/autorest.typescript/pull/3532)

## 0.45.0 (2025-10-11)

- [Feature] Bump TypeSpec version to v1.5.0 and TCGC to v0.61.0. Please refer to [#3526](https://github.com/Azure/autorest.typescript/pull/3526)
- [Feature] Add dev tool dependencies back to individual packages. Please refer to [#3523](https://github.com/Azure/autorest.typescript/pull/3523)
- [Bugfix] Fix LRO operation status model not generation issue. Please refer to [#3434](https://github.com/Azure/autorest.typescript/pull/3434)
- [Feature] Update the dependency to pnpm style when `azureSdkForJs` is true. Please refer to [#3210](https://github.com/Azure/autorest.typescript/pull/3210)
- [Bugfix] Fix the bytes and additional properties issues in sample generation. Please refer to [#3527](https://github.com/Azure/autorest.typescript/pull/3527)
- [Bugfix] Convert emitter throw statements to diagnostic reports to prevent crashes. Please refer to [#3482](https://github.com/Azure/autorest.typescript/pull/3482)
- [Feature] Upgrade tcgc and fix nightly ci error. Please refer to [#3510](https://github.com/Azure/autorest.typescript/pull/3510)

## 0.44.1 (2025-09-26)

- [Feature] Multi-level inheritance support. Please refer to [#3514](https://github.com/Azure/autorest.typescript/pull/3514)
- [Bugfix] Fix the missing parameters in operation options. Please refer to [#3502](https://github.com/Azure/autorest.typescript/pull/3502)
- [Feature] Add default documentation for enum members without explicit docs. Please refer to [#3505](https://github.com/Azure/autorest.typescript/pull/3505)
- [Feature] Add initial version of cross language api id support for modular generator. Please refer to [#3497](https://github.com/Azure/autorest.typescript/pull/3497)
- [Feature] Update tsconfig.browser.config.json. Please refer to [#3461](https://github.com/Azure/autorest.typescript/pull/3461)

## 0.44.0 (2025-09-11)

- [Bugfix] Improve sourcesRoot calculation for typespec-ts. Please refer to [#3484](https://github.com/Azure/autorest.typescript/pull/3484)
- [Feature] Update License Headers. Please refer to [#3462](https://github.com/Azure/autorest.typescript/pull/3462)
- [Bugfix] Fix discriminated property accessto use camelCase property names. Please refer to [#3447](https://github.com/Azure/autorest.typescript/pull/3447)
- [Bugfix] Fix partial lint errors in codegen side. Please refer to [#3481](https://github.com/Azure/autorest.typescript/pull/3481)
- [Feature] Improve TSDoc documentation for Azure Cloud helpers. Please refer to [#3474](https://github.com/Azure/autorest.typescript/pull/3474)
- [Bugfix] Remove unwanted serializer/deserializer function exports from index.ts files. Please refer to [#3463](https://github.com/Azure/autorest.typescript/pull/3463)
- [Feature] Upgrade dependencies
  - Bump TypeSpec dependencies to latest stable versions. Please refer to [#3465](https://github.com/Azure/autorest.typescript/pull/3465)
  - Bump TypeSpec version to latest stable with comprehensive integration testing. Please refer to [#3451](https://github.com/Azure/autorest.typescript/pull/3451)
  - Bump TypeSpec version to latest stable and skip failure cases for RLC. Please refer to [#3445](https://github.com/Azure/autorest.typescript/pull/3445)
- [Feature] Remove dev-tool run vendored commands. Please refer to [#3455](https://github.com/Azure/autorest.typescript/pull/3455)
- [Feature] Simpler vitest configs. Please refer to [#3439](https://github.com/Azure/autorest.typescript/pull/3439)
- [Feature] Delete prepack. Please refer to [#3449](https://github.com/Azure/autorest.typescript/pull/3449)
- [Feature] Improve autorest packageJson scripts. Please refer to [#3393](https://github.com/Azure/autorest.typescript/pull/3393)
- [Feature] Use tsconfig.src.build.json. Please refer to [#3392](https://github.com/Azure/autorest.typescript/pull/3392)
- [Bugfix] Fix enum name normalization in TSDoc comments for extensible enums. Please refer to [#3430](https://github.com/Azure/autorest.typescript/pull/3430)
- [Bugfix] Fix TypeSpec endpoint parameter generation when endpoint has default values. Please refer to [#3426](https://github.com/Azure/autorest.typescript/pull/3426)

## 0.43.0 (2025-08-08)

- [Bugfix] Remove the previously missed `experimentalExtensibleEnums`. Please refer to [#3417](https://github.com/Azure/autorest.typescript/pull/3417)
- [Feature] Upgrade dependencies
  - Update dependencies to dev and fix nightly ci. Please refer to [#3411](https://github.com/Azure/autorest.typescript/pull/3411)
  - Upgrade TCGC version to latest dev. Please refer to [#3407](https://github.com/Azure/autorest.typescript/pull/3407)
  - Upgrade TypeSpec and TCGC dependencies to latest stable versions. Please refer to [#3419](https://github.com/Azure/autorest.typescript/pull/3419)
- [Bugfix] Patch LRO generation would fail with void 202 response. Please refer to [#3401](https://github.com/Azure/autorest.typescript/pull/3401)
- [Feature] Adopt some comments AI provided during review for Modular. Please refer to [#3398](https://github.com/Azure/autorest.typescript/pull/3398)
- [Feature] Support `@list` paging in RLC. Please refer to [#3318](https://github.com/Azure/autorest.typescript/pull/3318)

## 0.42.1 (2025-07-23)

- [Feature] Add tspd for regen docs. Please refer to [#3236](https://github.com/Azure/autorest.typescript/pull/3236)
- [Feature] Generate tsconfig.snippets.json. Please refer to [#3373](https://github.com/Azure/autorest.typescript/pull/3373)
- [Bugfix] Fix the import ordering in-consistent issues. Please refer to [#3383](https://github.com/Azure/autorest.typescript/pull/3383)
- [Feature] Upgrade TypeSpec and TCGC versions to latest releases. Please refer to [#3381](https://github.com/Azure/autorest.typescript/pull/3381)
- [Feature] Add the cloudSetting option for ARM Modular SDK. Please refer to [#3233](https://github.com/Azure/autorest.typescript/pull/3233)
- [Bugfix] [release.yml] Fix typo in demands. Please refer to [#3370](https://github.com/Azure/autorest.typescript/pull/3370)

## 0.42.0 (2025-07-09)

- [Bugfix] Fix sample serialization name and name inconsistency for body parameter. Please refer to [#3340](https://github.com/Azure/autorest.typescript/pull/3340)
- [Feature] Upgrade package to latest version. Please refer to [#3365](https://github.com/Azure/autorest.typescript/pull/3365)
- [Feature] Improve test scripts. Please refer to [#3239](https://github.com/Azure/autorest.typescript/pull/3239)
- [Feature] Upgrade dependency versions for hlc and modular. Please refer to [#3339](https://github.com/Azure/autorest.typescript/pull/3339)
- [Bugfix] Fix reserved word in operations. Please refer to [#3356](https://github.com/Azure/autorest.typescript/pull/3356)
- [Bugfix] Improve handling of user-defined models that conflict with Azure Core type names. Please refer to [#3319](https://github.com/Azure/autorest.typescript/pull/3319)
- [Feature] Upgrade azure specs and update case. Please refer to [#3346](https://github.com/Azure/autorest.typescript/pull/3346)
- [Bugfix] Fix lro operation status. Please refer to [#3337](https://github.com/Azure/autorest.typescript/pull/3337)
- [Feature] Update generate test. Please refer to [#3333](https://github.com/Azure/autorest.typescript/pull/3333)
- [Bugfix] Resolve the issue of a missing import file in the modular code classic client. Please refer to [#3330](https://github.com/Azure/autorest.typescript/pull/3330)
- [Feature] Improve generate-metadata. Please refer to [#3317](https://github.com/Azure/autorest.typescript/pull/3317)
- [Bugfix] Fix body parameter name normalization of reserved words. Please refer to [#3334](https://github.com/Azure/autorest.typescript/pull/3334)
- [Feature] Remove deprecated baseUrl. Please refer to [#3324](https://github.com/Azure/autorest.typescript/pull/3324)
- [Bugfix] Fix parent client no additional params and fix header/path/query client level params. Please refer to [#3292](https://github.com/Azure/autorest.typescript/pull/3292)
- [Feature] [EngSys] Update agent pool to "azsdk-pool". Please refer to [#3321](https://github.com/Azure/autorest.typescript/pull/3321)
- [Bugfix] Ensure no compile issue for query parameter re-injection in Paging. Please refer to [#3289](https://github.com/Azure/autorest.typescript/pull/3289)
- [Bugfix] fix union type discriminator. Please refer to [#3216](https://github.com/Azure/autorest.typescript/pull/3216)
- [Feature] Update node version to 20 for ci. Please refer to [#3316](https://github.com/Azure/autorest.typescript/pull/3316)
- [Feature] Remove `review/` and `changelogmd` in package.json's files config. Please refer to [#3310](https://github.com/Azure/autorest.typescript/pull/3310)

## 0.41.1 (2025-06-20)

- [Bugfix] Fix property normalization inconsistancy among sample and client generation. Please refer to [#3285](https://github.com/Azure/autorest.typescript/pull/3285)
- [Bugfix] Fix the issues in tcgc upgrade to v0.57.1. Please refer to [#3302](https://github.com/Azure/autorest.typescript/pull/3302)
- [Bugfix] Update CODEOWNERS. Please refer to [#3298](https://github.com/Azure/autorest.typescript/pull/3298)
- [Feature] Extend api-extractor.json from base for azure-sdk-for-js repository. Please refer to [#3296](https://github.com/Azure/autorest.typescript/pull/3296)
- [Feature] Update generated package engines field to target Node 20. Please refer to [#3295](https://github.com/Azure/autorest.typescript/pull/3295)
- [Feature] Upgrade TypeSpec and Azure Tools dependencies to latest versions. Please refer to [#3283](https://github.com/Azure/autorest.typescript/pull/3283)
- [Bugfix] Export models to root index file for model-only case. Please refer to [#3222](https://github.com/Azure/autorest.typescript/pull/3222)
- [Bugfix] Fix @azure-tools/azure-http-specs version. Please refer to [#3263](https://github.com/Azure/autorest.typescript/pull/3263)
- [Bugfix] Optimize skip logic for modular unit test cases. Please refer to [#3245](https://github.com/Azure/autorest.typescript/pull/3245)
- [Feature] Add the first version of copilot instructions. Please refer to [#3238](https://github.com/Azure/autorest.typescript/pull/3238)

## 0.41.0 (2025-06-04)

- [Feature] Migrate to pnpm
  - Update dependency generation to adopt pnpm workspace catalog versions. Please refer to [#3172](https://github.com/Azure/autorest.typescript/pull/3172)
  - Switch from "npm pack" to "pnpm pack". Please refer to [#3223](https://github.com/Azure/autorest.typescript/pull/3223)
  - Use "workspace:^". Please refer to [#3224](https://github.com/Azure/autorest.typescript/pull/3224)
- [Bugfix] Export models to root index file for model-only case. Please refer to [#3222](https://github.com/Azure/autorest.typescript/pull/3222)
- [Bugfix] Fix snippets generation issue. Please refer to [#3227](https://github.com/Azure/autorest.typescript/pull/3227)
- [Bugfix] Fix missing configs in package.json for Modular and RLC. Please refer to [#3215](https://github.com/Azure/autorest.typescript/pull/3215)
- [Bugfix] Fix reference issue in recursive cases. Please refer to [#3175](https://github.com/Azure/autorest.typescript/pull/3175)

## 0.40.2 (2025-05-22)

- [Bugfix] Fix wrong eslint dependency

## 0.40.1 (2025-05-20)

- [Feature] Remove camel-case style option. Please refer to [#3167](https://github.com/Azure/autorest.typescript/pull/3167)
- [Feature] Migrate to pnpm
  - Update dependency generation to adopt pnpm workspace catalog versions. Please refer to [#3172](https://github.com/Azure/autorest.typescript/pull/3172)
  - Support option for rlc swagger and fix missing dependencies. Please refer to [#3200](https://github.com/Azure/autorest.typescript/pull/3200)
  - Support generation config for new option. Please refer to [#3197](https://github.com/Azure/autorest.typescript/pull/3197)
- [Feature] ESM migration for RLC from swagger. Please refer to [#3182](https://github.com/Azure/autorest.typescript/pull/3182)
- [Feature] Hierarchy nested client support in Modular. Please refer to [#3163](https://github.com/Azure/autorest.typescript/pull/3163)
- [Feature] Generate metadata.json for Azure services for RLC and Modular. Please refer to [#3169](https://github.com/Azure/autorest.typescript/pull/3169)
- [Feature] Skip lint check for mgmt Modular packages. Please refer to [#3205](https://github.com/Azure/autorest.typescript/pull/3205)
- [Bugfix] Update tcgc to v0.56.1 and fix nightly ci. Please refer to [#3190](https://github.com/Azure/autorest.typescript/pull/3190)
- [Bugfix] Fix readme generation issue when setting @@clientname. Please refer to [#3198](https://github.com/Azure/autorest.typescript/pull/3198)
- [Bugfix] Fix subscriptionId issues in readme.md and emitter samples. Please refer to [#3161](https://github.com/Azure/autorest.typescript/pull/3161)
- [Bugfix] Fix missing tshy configs.md and emitter samples. Please refer to [#3193](https://github.com/Azure/autorest.typescript/pull/3193)
- [Bugfix] Fix the reserved word issue in Modular for API layer. Please refer to [#3191](https://github.com/Azure/autorest.typescript/pull/3191)

## 0.39.0 (2025-04-28)

- [Feature] Support optional path parameter for Modular. Please refer to [#3152](https://github.com/Azure/autorest.typescript/pull/3152)
- [Feature] Fix the flavor config issue. Please refer to [#3173](https://github.com/Azure/autorest.typescript/pull/3173)
- [Feature] Support additional properties for non-legacy case in Modular. Please refer to [#2981](https://github.com/Azure/autorest.typescript/pull/2981)
- [Bugfix] Remove duplicated license header for HLC. Please refer to [#3171](https://github.com/Azure/autorest.typescript/pull/3171)
- [Feature] Migrate to ESM for HLC. Please refer to [#3128](https://github.com/Azure/autorest.typescript/pull/3128)
- [Feature] Add support for constant body property. Please refer to [#3133](https://github.com/Azure/autorest.typescript/pull/3133)
- [Feature] Add no-deprecated lint rule for typespec-ts. Please refer to [#3141](https://github.com/Azure/autorest.typescript/pull/3141)
- [Bugfix] Fix serialize name normalize in url template. Please refer to [#3130](https://github.com/Azure/autorest.typescript/pull/3130)
- [Feature] Refine the api-version removed test cases. Please refer to [#3153](https://github.com/Azure/autorest.typescript/pull/3153)

## 0.38.6 (2025-04-03)

- [Feature] Upgrade dev dependency typescript version to ~5.8.2. Please refer to [#3120](https://github.com/Azure/autorest.typescript/pull/3120)
- [Feature] Upgrade to the latest dev dependency before TypeSpec GA. Please refer to [#3135](https://github.com/Azure/autorest.typescript/pull/3135)
- [Bugfix] Fix eventGrid build error. Please refer to [#3143](https://github.com/Azure/autorest.typescript/pull/3143)
- [Feature] Basic HttpPart support for RLC. Please refer to [#3124](https://github.com/Azure/autorest.typescript/pull/3124)

## 0.38.5 (2025-03-24)

- [Feature] Improve generateTest config. Please refer to [#3125](https://github.com/Azure/autorest.typescript/pull/3125)
- [Feature] Support esm generation.
  - Support tsconfig changes, vitest config changes and api-extractor changes from migration tool for codegen. Please refer to [#3081](https://github.com/Azure/autorest.typescript/pull/3081)
  - Remove Impressions in HLC readme.md and update Api-extractor template for modular. Please refer to [#3092](https://github.com/Azure/autorest.typescript/pull/3092)
  - Fix duplicate license header generations for snippets. Please refer to [#3106](https://github.com/Azure/autorest.typescript/pull/3106)
- [Feature] To not expose internal operations for hierarchy client true. Please refer to [#3082](https://github.com/Azure/autorest.typescript/pull/3082)
- [Feature] upgrade to compiler 0.67.x. Please refer to [#3071](https://github.com/Azure/autorest.typescript/pull/3071)
- [Feature] Fully support binder to manage dependency and fix performance issue. Please refer to [#3119](https://github.com/Azure/autorest.typescript/pull/3119)
- [Bugfix] Fix name normalization issues.
  - Remove the modular normalization and directly use the rlc-common ones. Please refer to [#3115](https://github.com/Azure/autorest.typescript/pull/3115)
  - Fix the ser/deser name normalization inconsistency issue in modular. Please refer to [#3102](https://github.com/Azure/autorest.typescript/pull/3102)
- [Bugfix] Fix incorrect references to discriminated model serializers. Please refer to [#3108](https://github.com/Azure/autorest.typescript/pull/3108)
- [Bugfix] Fix the encode issue for header in RLC. Please refer to [#3089](https://github.com/Azure/autorest.typescript/pull/3089)
- [Others] Update smoke test specs to remove deprecated typespec usage. Please refer to [#3103](https://github.com/Azure/autorest.typescript/pull/3103)
- [Others] Update format script. Please refer to [#3094](https://github.com/Azure/autorest.typescript/pull/3094)
- [Others] Upgrade dev dependency typescript version to `~5.7.2~. Please refer to [#3100](https://github.com/Azure/autorest.typescript/pull/3100)

## 0.38.4 (2025-03-07)

- [Feature] Upgrade http-specs version. Please refer to [#3085](https://github.com/Azure/autorest.typescript/pull/3085)
- [Feature] Upgrade package version to latest. Please refer to [#3088](https://github.com/Azure/autorest.typescript/pull/3088)
- [Feature] Unify the typespec options to kebab-case style. Please refer to [#2960](https://github.com/Azure/autorest.typescript/pull/2960)
- [Feature] Normalization refinement including enum member name. Please refer to [#2839](https://github.com/Azure/autorest.typescript/pull/2839)
- [Feature] Remove @microsoft/api-extractor from common dev dependencies of generated packages. Please refer to [#3088](https://github.com/Azure/autorest.typescript/pull/3058)
- [Feature] Fully support url template in Modular. Please refer to [#2884](https://github.com/Azure/autorest.typescript/pull/2884)
- [Feature] Ignore *.d.*ts.map when packing generated packages. Please refer to [#3069](https://github.com/Azure/autorest.typescript/pull/3069)
- [Bugfix] Fix paging samples' template. Please refer to [#3086](https://github.com/Azure/autorest.typescript/pull/3086)
- [Bugfix] Fix Issue for publish @azure-tools/rlc-common and @azure-tools/typespec-ts to github. Please refer to [#3080](https://github.com/Azure/autorest.typescript/pull/3080)

## 0.38.3 (2025-02-25)

- [Feature] Update compiler version to 0.65.x. Please refer to [#2753](https://github.com/Azure/autorest.typescript/pull/2753)
- [Bugfix] Enable `generateSample: true` if it is a mgmt package. Please refer to [#3068](https://github.com/Azure/autorest.typescript/pull/3068)
- [Bugfix] Fix await in multi examples in one file. Please refer to [#3061](https://github.com/Azure/autorest.typescript/pull/3061)
- [Feature] Support snippets for Modular/RLC/HLC. Please refer to [#3052](https://github.com/Azure/autorest.typescript/pull/3052)
- [Bugfix] Fix operation hierarchies info in sample gen. Please refer to [#3023](https://github.com/Azure/autorest.typescript/pull/3023)
- [Bugfix] Remove isDefaultSupersetOfOthers logic as no longer needed. Please refer to [#3057](https://github.com/Azure/autorest.typescript/pull/3057)
- [Feature] Upgrade http-specs verison. Rest.Resource. Please refer to [#3053](https://github.com/Azure/autorest.typescript/pull/3053)
- [Feature] Use recommended boilerplate LICENSE. Please refer to [#3044](https://github.com/Azure/autorest.typescript/pull/3044)
- [Feature] remove references of api-extractor-json-types and package-json-module rules. Please refer to [#3042](https://github.com/Azure/autorest.typescript/pull/3042)
- [Feature] Upgrade dependency vitest version to ^3.0.3 in generated packages. Please refer to [#3046](https://github.com/Azure/autorest.typescript/pull/3046)
- [Feature] Use agents from 1ES pool. Please refer to [#3047](https://github.com/Azure/autorest.typescript/pull/3047)

## 0.38.2 (2025-01-27)

- [Feature] Upgrade spector version. Please refer to [#3007](https://github.com/Azure/autorest.typescript/pull/3007)
- [Feature] Generate nullable as type alias and resolve recursive reference in union. Please refer to [#2989](https://github.com/Azure/autorest.typescript/pull/2989)
- [Bugfix] Add await for sync function. Please refer to [#3014](https://github.com/Azure/autorest.typescript/pull/3014)
- [Bugfix] Fix crossLanguageDefinitionId with TypeSpec.Rest.Resource. Please refer to [#3010](https://github.com/Azure/autorest.typescript/pull/3010)
- [Bugfix] Remove mkdirp ./review as dev-tool handles that. Please refer to [#3015](https://github.com/Azure/autorest.typescript/pull/3015)
- [Bugfix] Should not filter serializedName out for endpoint. Please refer to [#3017](https://github.com/Azure/autorest.typescript/pull/3017)
- [Bugfix] Update sample template for Modular/RLC/HLC. Please refer to [#2998](https://github.com/Azure/autorest.typescript/pull/2998)
- [Bugfix] Fix generation issue and update the ai projects to the latest one. Please refer to [#3037](https://github.com/Azure/autorest.typescript/pull/3037)

## 0.38.1 (2025-01-17)

- [Bugfix] Fix windows env issue in model namespace hierarchy. Please refer to [#3008](https://github.com/Azure/autorest.typescript/pull/3008)

## 0.38.0 (2025-01-16)

- [Feature] Upgrade compiler version to 0.64. Please refer to [#3006](https://github.com/Azure/autorest.typescript/pull/3006)
- [Feature] Multipart/form-data support for typespec-todo. Please refer to [#2984](https://github.com/Azure/autorest.typescript/pull/2984)
- [Feature] Model namespaces hierarchies. Please refer to [#2969](https://github.com/Azure/autorest.typescript/pull/2969)
- [Feature] Support title config for typespec generation. Please refer to [#2941](https://github.com/Azure/autorest.typescript/pull/2941)
- [Feature] Support the customized error responses in deserializer. Please refer to [#2978](https://github.com/Azure/autorest.typescript/pull/2978)
- [Feature] Migration of SDK Client Packages from CADL Ranch to Typespec & Typespec. Please refer to [#2936](https://github.com/Azure/autorest.typescript/pull/2936)
- [Feature] Eable `isTypeOnly` for RLC ImportDeclarations. Please refer to [#2963](https://github.com/Azure/autorest.typescript/pull/2963)
- [Feature] Add a flag to generate ESM compatible source code. Please refer to [#2925](https://github.com/Azure/autorest.typescript/pull/2925)
- [Feature] Set `isModularLibrary` to `true` for unbranded and mgmt plane. Please refer to [#2973](https://github.com/Azure/autorest.typescript/pull/2973)
- [Feature] Use `learn.microsoft.com` in generated packages. Please refer to [#2977](https://github.com/Azure/autorest.typescript/pull/2977)
- [Bugfix] Fix the duplicated template name without friendlyName in RLC. Please refer to [#2976](https://github.com/Azure/autorest.typescript/pull/2976)
- [Bugfix] Rename the inner method name with `_methodName`. Please refer to [#2983](https://github.com/Azure/autorest.typescript/pull/2983)
- [Bugfix] Do not crash for an empty project. Please refer to [#2972](https://github.com/Azure/autorest.typescript/pull/2972)

## 0.37.0 (2024-12-27)

- [Feature] Sdk package methods adoption. Please refer to [#2943](https://github.com/Azure/autorest.typescript/pull/2943)
  - Adopt to sdkPackage methods;
  - Support client level path parameter in general;
  - ContentType/accept header parameter logic change;
  - ApiVersion and its policy related change;
  - Adjust parameter order change aligned with spec in spread cases;
  - The bytes type gets generated inconsistent as before;
  - Replace core related dependencies in static helper.
- [Feature] Upgrade mocha to ^11.0.2 for generated packages. Please refer to [#2945](https://github.com/Azure/autorest.typescript/pull/2945)
- [Feature] use azsdkEslint.config helper in eslint.config.mjs. Please refer to [#2949](https://github.com/Azure/autorest.typescript/pull/2949)
- [Feature] Upgrade typespec http runtime version to v0.1.0 for unbranded client. Please refer to [#2947](https://github.com/Azure/autorest.typescript/pull/2947)

## 0.36.0 (2024-12-12)

- [Feature] Support tcgc type for ModelProperty, remove baseUrl in unbranded client and remove property if visibility with none. Please refer to [#2927](https://github.com/Azure/autorest.typescript/pull/2927)
- [Feature] Upgrade typespec compiler to v0.63 and cadl ranch spec to the latest. Please refer to [#2942](https://github.com/Azure/autorest.typescript/pull/2942)
- [Bugfix] Disable generation if enabling noEmit flag. Please refer to [#2948](https://github.com/Azure/autorest.typescript/pull/2948)
- [Bugfix] Upgrade tcgc to ignore error model generation in MPG if it is not referenced. Please refer to [#2934](https://github.com/Azure/autorest.typescript/pull/2934)
- [Feature] Refactor existing modular unit tests as scenario tests. Please refer to [#2915](https://github.com/Azure/autorest.typescript/pull/2915)

## 0.35.0 (2024-11-29)

- [Feature] Upgrade eslint version to ^9.9.0. Please refer to [#2928](https://github.com/Azure/autorest.typescript/pull/2928)
- [Feature] Upgrade compiler to v0.62.x and tcgc in Nov. Please refer to [#2892](https://github.com/Azure/autorest.typescript/pull/2892)
- [Feature] Update azureSdkForJs default value when flavor !== azure. Please refer to [#2921](https://github.com/Azure/autorest.typescript/pull/2921)
- [Feature] Remove uglify-js dep generation for autorest.typescript. Please refer to [#2920](https://github.com/Azure/autorest.typescript/pull/2920)
- [Feature] Check no-emit flag. Please refer to [#2908](https://github.com/Azure/autorest.typescript/pull/2908)
- [Feature] URI template support in RLC. Please refer to [#2814](https://github.com/Azure/autorest.typescript/pull/2814)
- [Feature] Uprade cadl ranch version to v0.16.1. Please refer to [#2907](https://github.com/Azure/autorest.typescript/pull/2907)
- [Feature] Move to use dev-tool vendored version of cross-env and uglify-js for JS repository. Please refer to [#2895](https://github.com/Azure/autorest.typescript/pull/2895)
- [Bugfix] Fix tsp rlc logger.ts generation. Please refer to [#2904](https://github.com/Azure/autorest.typescript/pull/2904)
- [Bugfix] Fix unix timestamps. Please refer to [#2135](https://github.com/Azure/autorest.typescript/pull/2135)
- [Bugfix] Fix readme issues and duplicated licence lines issue. Please refer to [#2922](https://github.com/Azure/autorest.typescript/pull/2922)

## 0.34.0 (2024-11-11)

- [Feature] Generate knownable api version and fix flattening enum issue. Please refer to [#2889](https://github.com/Azure/autorest.typescript/pull/2889)
- [Feature] Switch to use vendored version for rimraf, mkdirp, and uglify-js in JS repo. Please refer to [#2886](https://github.com/Azure/autorest.typescript/pull/2886)
- [Feature] Models generation related follow up on the binder work. Please refer to [#2878](https://github.com/Azure/autorest.typescript/pull/2878)
- [Feature] Remove core-http dependency. Please refer to [#2874](https://github.com/Azure/autorest.typescript/pull/2874)
- [Feature] Upgrade cadl-ranch version to v0.15.0. Please refer to [#2872](https://github.com/Azure/autorest.typescript/pull/2872)
- [Feature] Generate healthInsights_radiologyinsights code with isModularLibrary: true. Please refer to [#2871](https://github.com/Azure/autorest.typescript/pull/2871)
- [Feature] Support the allowReserved for path parameter in Modular. Please refer to [#2858](https://github.com/Azure/autorest.typescript/pull/2858)
- [Feature] Upgrade compiler to v0.61.x and tcgc in Oct. Please refer to [#2854](https://github.com/Azure/autorest.typescript/pull/2854)
- [Feature] Upgrade azure-rest/core-client to 2.3.1 in RLC and Modular. Please refer to [#2851](https://github.com/Azure/autorest.typescript/pull/2851)
- [Feature] Switch to doc from description since description is deprecated. Please refer to [#2850](https://github.com/Azure/autorest.typescript/pull/2850)
- [Feature] Support hookTimeout config generation in vitest.config.ts and vitest.…. Please refer to [#2847](https://github.com/Azure/autorest.typescript/pull/2847)
- [Feature] Support sample.env generation in rlc-common for typespec-ts. Please refer to [#2845](https://github.com/Azure/autorest.typescript/pull/2845)
- [Feature] Use dev-tool command in tshy for monorepo. Please refer to [#2843](https://github.com/Azure/autorest.typescript/pull/2843)
- [Feature] Remove the import logic of paging. Please refer to [#2837](https://github.com/Azure/autorest.typescript/pull/2837)
- [Feature] Config Nightly CI improvement with forcing run. Please refer to [#2829](https://github.com/Azure/autorest.typescript/pull/2829)
- [Feature] Upgrade typescript to 5.6.2. Please refer to [#2824](https://github.com/Azure/autorest.typescript/pull/2824)
- [Feature] Stop exporting api layer for MPG. Please refer to [#2823](https://github.com/Azure/autorest.typescript/pull/2823)
- [Feature] Upgrade compiler to v0.60.x and tcgc in Sep. Please refer to [#2819](https://github.com/Azure/autorest.typescript/pull/2819)
- [Feature] Bump emitter version to v0.33. Please refer to [#2804](https://github.com/Azure/autorest.typescript/pull/2804)
- [Feature] Remove core-paging dependency in RLC. Please refer to [#2785](https://github.com/Azure/autorest.typescript/pull/2785)
- [Feature] Update the finalStateVia config for LRO operations. Please refer to [#2783](https://github.com/Azure/autorest.typescript/pull/2783)
- [Feature] Sample generation for MPG for cliassical client. Please refer to [#2770](https://github.com/Azure/autorest.typescript/pull/2770)
- [Feature] Use binder to manage model dependency and support model deserializer with partially adopt to tcgc sdkPackage. Please refer to [#2759](https://github.com/Azure/autorest.typescript/pull/2759)
- [Feature] Upgrade dev dependency prettier to version 3.3.3 in generated packages. Please refer to [#2675](https://github.com/Azure/autorest.typescript/pull/2675)
- [Bugfix] Fix UserAgentInfo and Constantpaths issues. Please refer to [#2888](https://github.com/Azure/autorest.typescript/pull/2888)
- [Bugfix] Adjust the key link format for modular readme. Please refer to [#2885](https://github.com/Azure/autorest.typescript/pull/2885)
- [Bugfix] Fix the sample issue with escaped chars. Please refer to [#2875](https://github.com/Azure/autorest.typescript/pull/2875)
- [Bugfix] Fix static-helper relative path. Please refer to [#2873](https://github.com/Azure/autorest.typescript/pull/2873)
- [Bugfix] Codegen crashed as NYI Serialization of anonymous types. Please refer to [#2870](https://github.com/Azure/autorest.typescript/pull/2870)
- [Bugfix] Fix the optional body parameter issues. Please refer to [#2868](https://github.com/Azure/autorest.typescript/pull/2868)
- [Bugfix] Remove "./" from tsconfig's include/exclude as they are not needed. Please refer to [#2849](https://github.com/Azure/autorest.typescript/pull/2849)
- [Bugfix] Fix the generation path of logger.ts. Please refer to [#2848](https://github.com/Azure/autorest.typescript/pull/2848)
- [Bugfix] Support encode int as string. Please refer to [#2838](https://github.com/Azure/autorest.typescript/pull/2838)
- [Bugfix] Should generate samples for spread cases. Please refer to [#2833](https://github.com/Azure/autorest.typescript/pull/2833)

## 0.33.0 (2024-09-06)

- [Feature] Fix body optionality default parameter to true for implicit body. Please refer to [#2731](https://github.com/Azure/autorest.typescript/pull/2731)
- [Feature] Upgrade tcgc to v0.45.4. Please refer to [#2782](https://github.com/Azure/autorest.typescript/pull/2782)
- [Feature] Support typecheck command for sample scripts. Please refer to [#2784](https://github.com/Azure/autorest.typescript/pull/2784)
- [Feature] Remove the paging dependency in Modular. Please refer to [#2781](https://github.com/Azure/autorest.typescript/pull/2781)
- [Feature] Update LRO version in package.json for autorest rlc generation. Please refer to [#2763](https://github.com/Azure/autorest.typescript/pull/2763)
- [Feature] Generate plainDate and plainTime as string in both RLC and Modular. Please refer to [#2703](https://github.com/Azure/autorest.typescript/pull/2703)
- [Feature] Support TypeSpec enum name. Please refer to [#2767](https://github.com/Azure/autorest.typescript/pull/2767)
- [Bugfix] Set core-util dependency with binder. Please refer to [#2743](https://github.com/Azure/autorest.typescript/pull/2743)
- [Bugfix] Fix constant type serialization and deserialization. Please refer to [#2776](https://github.com/Azure/autorest.typescript/pull/2776)
- [Bugfix] Standardize OSS copyright header. Please refer to [#2775](https://github.com/Azure/autorest.typescript/pull/2775)
- [Bugfix] Fix special union within anonymous model issue. Please refer to [#2767](https://github.com/Azure/autorest.typescript/pull/2767)
- [Bugfix] Get paging properties from parent models. Please refer to [#2764](https://github.com/Azure/autorest.typescript/pull/2764)

## 0.32.0 (2024-08-15)

- [Feature] Remove internal RLC layer from modular. Please refer to [#2728](https://github.com/Azure/autorest.typescript/pull/2728).
- [Feature] Upgrade TypeSpec compiler to 0.59. Please refer to [#2741](https://github.com/Azure/autorest.typescript/pull/2741).
- [Feature] Fix some issues with API version handling in new getClient. Please refer to [#2738](https://github.com/Azure/autorest.typescript/pull/2738).
- [Feature] Binder support external dependencies. Please refer to [#2728](https://github.com/Azure/autorest.typescript/pull/2728) and [#2716](https://github.com/Azure/autorest.typescript/pull/2716).
- [Feature] Update the existing package.json to correct lro or paging dependencies. Please refer to [#2732](https://github.com/Azure/autorest.typescript/pull/2732).
- [Feature] Engineering system related improvements.
  - Upgrade dependency vitest version to ^2.0.5 in generated packages, please refer to [#2749](https://github.com/Azure/autorest.typescript/pull/2749);
  - Use ESLint flat config files in generated package, please refer to [#2754](https://github.com/Azure/autorest.typescript/pull/2754);
  - Upgrade tshy to v2, please refer to [#2751](https://github.com/Azure/autorest.typescript/pull/2751).
- [Bugfix] Enable changelog pack for RLC and Modular. Please refer to [#2695](https://github.com/Azure/autorest.typescript/pull/2695).
- [Bugfix] Disable sampleUrl generation if generateSample is false. Please refer to [#2713](https://github.com/Azure/autorest.typescript/pull/2713).
- [Bugfix] Fix resolve conflicts bug. Please refer to [#2717](https://github.com/Azure/autorest.typescript/pull/2717).
- [Bugfix] Fix client name issue in Modular. Please refer to [#2744](https://github.com/Azure/autorest.typescript/pull/2744).
- [Bugfix] Set as azure scope if package is under azure-rest. Please refer to [#2756](https://github.com/Azure/autorest.typescript/pull/2756).
- [Bugfix] Emit warnings for un-supported credential and filter out non-200 status code in response check. Please refer to [#2704](https://github.com/Azure/autorest.typescript/pull/2704).

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

## 1.0.0-beta.5 (2022-11-30)

- [Feature] Support multiple clients from Cadl. Please refer to issue [#1593](https://github.com/Azure/autorest.typescript/issues/1593).
- [Feature] Support optional parameter for parametrized host. Please refer to issue [#1635](https://github.com/Azure/autorest.typescript/issues/1635) and issue [#1667](https://github.com/Azure/autorest.typescript/issues/1667).

## 1.0.0-beta.4 (2022-11-16)

- [BugFix] Add the license header and please refer the [pr](https://github.com/Azure/autorest.typescript/pull/1663).
- [BugFix] Fix browser testing issue. Please refer to pr [#1656](https://github.com/Azure/autorest.typescript/pull/1656) for details.
- [BugFix] Fix the option azureSdkForJs issue. Please refer to pr [#1638](https://github.com/Azure/autorest.typescript/pull/1638) for details.
- [BugFix] Fix modle name in merge and patch issue. Please refer to pr [#1647](https://github.com/Azure/autorest.typescript/pull/1647) for details.
- [Feature] Update the contributing and readme document. Please refer to pr [#1627](https://github.com/Azure/autorest.typescript/pull/1627) for details.
- [Feature] Support multiple parameters for parametrized host. Please refer to pr [#1635](https://github.com/Azure/autorest.typescript/issues/1635)

## 1.0.0-beta.2 (2022-10-19)

- [BugFix] Fix missing peer dependencies. Please refer to [#1612](https://github.com/Azure/autorest.typescript/pull/1612) and [#1610](https://github.com/Azure/autorest.typescript/pull/1610) for further details.
- [Feature] Support sdk-folder in cadl emitter for automation script. Please refer to [#1613](https://github.com/Azure/autorest.typescript/pull/1613) for further details.

## 1.0.0-beta.1 (2022-10-13)

- Initial preview release of the Autorest Typescript/Javascript RLC Common libraries.
