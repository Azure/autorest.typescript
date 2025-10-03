# Contributing

This project welcomes contributions and suggestions. Most contributions require you to agree to a Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments

# How to contribute to the Azure TypeScript SDK generator project

There are many ways that you can contribute to the Azure TypeScript SDK generator project:

- Submit a bug
- Submit a code fix for a bug
- Submit additions or modifications to the documentation
- Submit a feature request

All code submissions will be reviewed and tested by the team, and those that meet a high bar for both quality and design/roadmap appropriateness will be merged into the source. Be sure to follow the existing file/folder structure when adding new boards or sensors.

If you encounter any bugs please file an issue in the [Issues](https://github.com/Azure/autorest.typescript/issues) section of the project.

## Things to keep in mind when contributing

Some guidance for when you make a contribution:

- Add/update unit tests and code as required by your change
- Make sure you run all the unit tests on the affected platform(s)/languages. If the change is in common code, generally running on one platform would be acceptable.
- Run end-to-end tests or simple sample code to make sure the lib works in an end-to-end scenario.

## Big contributions

If your contribution is significantly big it is better to first check with the project developers in order to make sure the change aligns with the long term plans. This can be done simply by submitting a question via the GitHub Issues section.

Want to get started hacking on the code? Great! Keep reading. This contributing guide helps you to start working with and contributing to the Azure Typescript/Javascript SDK Generator.

## Prerequisites

In order contribute to this project, You will need to install some prerequisite dependencies to get start.

- Git
- Any of the [LTS versions of Node.js](https://github.com/nodejs/release#release-schedule)
- Pnpm 10.12.x
  - Install / update Pnpm globally via `npm install -g pnpm`.
- [Autorest](https://www.npmjs.com/package/autorest), if you're planning contribute to the generator code from swagger either for high level client or for rest level client.
- [TypeSpec Compiler](https://www.npmjs.com/package/@typespec/compiler), if you're planning contribute to the generator code from TypeSpec.

### Things to keep in mind when contributing

If your test case is working fine as expected, now you are ready to create the PR. But, before that, make sure you run all the tests (Unit/Integration/Smoke) and ensure there are no unintentional changes. And if there are any changes (intentional) in any of the test cases, include those files also in your PR.

### I've made changes to Autorest.Typescript, however when re-generating the library my changes don't seem to have been picked up

- Make sure to re-build autorest.typescript after any changes you want to test

      npm run build

### How to update dependencies in generated package.json files?

Our generated SDKs take dependency on various packages which you can see in the generated package.json files. These will need to be upgraded from time to time to stay on the latest major version so that we get bug fixes automatically due to semver.

- Update the version of the dependency you are looking for in the methods `restLevelPackage` and/or `regularAutorestPackage` in the [`packageFileGenerator.ts`](https://github.com/Azure/autorest.typescript/blob/main/packages/autorest.typescript/src/generators/static/packageFileGenerator.ts) file.
- Run `pnpm build && npm run generate-swaggers && npm run smoke-test` to update the generated files in the repo and run smoke tests before creating the PR.

For example, see the [PR 1271](https://github.com/Azure/autorest.typescript/pull/1271) that updates the version of `prettier` that the generated SDKs depend on.
