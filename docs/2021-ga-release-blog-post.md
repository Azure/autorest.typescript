# Introducing the new Azure SDK Management Libraries for JS

We're excited to announce the new GA release for Javascript SDKs. These SDKs have several new features that help our customers to have a great experience in using the Azure Services. Some of the important SDKs that have been released are:

1. [Compute](https://www.npmjs.com/package/@azure/arm-compute/v/17.0.0)
2. [Network](https://www.npmjs.com/package/@azure/arm-network/v/26.0.0)
3. [Storage](https://www.npmjs.com/package/@azure/arm-storage/v/17.0.0)
4. [Sql](https://www.npmjs.com/package/@azure/arm-sql/v/9.0.0)
5. [Resources](https://www.npmjs.com/package/@azure/arm-resources/v/5.0.0)
6. [Policy](https://www.npmjs.com/package/@azure/arm-policy/v/5.0.0)
7. [Managed applications](https://www.npmjs.com/package/@azure/arm-managedapplications/v/2.0.0)
8. [Links](https://www.npmjs.com/package/@azure/arm-links/v/2.0.0)
9. [Locks](https://www.npmjs.com/package/@azure/arm-locks/v/2.0.0)
10. [Features](https://www.npmjs.com/package/@azure/arm-features/v/3.0.0)

Each of these SDKs follows the new [Azure SDK guidelines](https://azure.github.io/azure-sdk/typescript_introduction.html). All these SDKs have been generated using the latest version of the new [Autorest Typescript SDK Generator](https://www.npmjs.com/package/@autorest/typescript/v/6.0.0-beta.15). These libraries provide new authentication mechanisms, uses Promises, etc. We encourage you to try out the libraries and provide your feedback.

## Key concepts

The new libraries have the following changes:

1. **Authentication**: The packages `@azure/ms-rest-nodeauth` or `@azure/ms-rest-browserauth` are replaced with a new package `@azure/identity` instead. The [migration guide](https://github.com/Azure/ms-rest-nodeauth/blob/master/migrate-to-identity-v2.md) helps in the process of migration to the new identity package.
2. **Promises**: Method overloads that use callbacks have been replaced to use Promise instead.
3. The results of List operations could be iterated by using the `PagedAsyncIterableIterator` interface
4. The SDKs have been changed to support ECMAScript 2015 (ES6) and beyond

A detailed list and usage of these features could be found in the [migration guide](https://aka.ms/js-track2-migration-guide) A [Quick Start](https://aka.ms/js-track2-quickstart) helps to get started with the new libraries.

## What's next

In the future, we are planning to release the following:

1. Improved documentation on the usage of the SDKs
2. More azure services will be covered and released with the new features
3. Detailed end-to-end examples for the SDKs including the new features introduced with these releases.

## Feedback

We encourage you to try out the libraries and provide your feedback. If there are any issues, Please file an issue with the [JS Repository](https://github.com/Azure/azure-sdk-for-js/issues/new/choose)

## Conclusion

We hope these changes make management of your Azure resources much easier with the JS SDK.

## Reference Links

1. List of libraries released
   1. [Compute](https://www.npmjs.com/package/@azure/arm-compute/v/17.0.0)
   2. [Network](https://www.npmjs.com/package/@azure/arm-network/v/26.0.0)
   3. [Storage](https://www.npmjs.com/package/@azure/arm-storage/v/17.0.0)
   4. [Sql](https://www.npmjs.com/package/@azure/arm-sql/v/9.0.0)
   5. [Resources](https://www.npmjs.com/package/@azure/arm-resources/v/5.0.0)
   6. [Policy](https://www.npmjs.com/package/@azure/arm-policy/v/5.0.0)
   7. [Managed applications](https://www.npmjs.com/package/@azure/arm-managedapplications/v/2.0.0)
   8. [Links](https://www.npmjs.com/package/@azure/arm-links/v/2.0.0)
   9. [Locks](https://www.npmjs.com/package/@azure/arm-locks/v/2.0.0)
   10. [Features](https://www.npmjs.com/package/@azure/arm-features/v/3.0.0)
2. [Autorest Typescript SDK Generator](https://www.npmjs.com/package/@autorest/typescript/v/6.0.0-beta.15)
3. [Migration Guide for SDKs](https://aka.ms/js-track2-migration-guide)
4. [Migration Guide for `@azure/identity`](https://github.com/Azure/ms-rest-nodeauth/blob/master/migrate-to-identity-v2.md)
