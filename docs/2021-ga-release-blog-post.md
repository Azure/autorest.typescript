# Introducing the new Azure SDK Management Libraries for Javascript

We're excited to announce the new GA release for Javascript SDKs. These SDKs have several new features that help our customers to have a great experience in using the Azure Services. Some of the important SDKs that have been released are:

1. [Compute](https://www.npmjs.com/package/@azure/arm-compute)
2. [Network](https://www.npmjs.com/package/@azure/arm-network)
3. [Storage](https://www.npmjs.com/package/@azure/arm-storage)
4. [Sql](https://www.npmjs.com/package/@azure/arm-sql)
5. [Resources](https://www.npmjs.com/package/@azure/arm-resources)
6. [Policy](https://www.npmjs.com/package/@azure/arm-policy)
7. [Managed applications](https://www.npmjs.com/package/@azure/arm-managedapplications)
8. [Links](https://www.npmjs.com/package/@azure/arm-links)
9. [Locks](https://www.npmjs.com/package/@azure/arm-locks)
10. [Features](https://www.npmjs.com/package/@azure/arm-features)

Each of these SDKs follows the new [Azure SDK guidelines](https://azure.github.io/azure-sdk/typescript_introduction.html). All these SDKs have been generated using the latest version of the new [Autorest Typescript SDK Generator](https://www.npmjs.com/package/@autorest/typescript). These libraries provide new authentication mechanisms, uses Promises, etc. We encourage you to try out the libraries and provide your feedback.

## Key concepts

The new libraries have the following changes:

### Authentication

Previously, the Azure management libraries required credential objects created via the packages `@azure/ms-rest-nodeauth` or `@azure/ms-rest-browserauth` that used ADAL which reaches end of support in Jun 2022. The new Azure management libraries require credential objects from the new `@azure/identity` package that makes use of the [MSAL](https://docs.microsoft.com/azure/active-directory/develop/msal-overview) and have many more authentication options to support newer scenarios.

- For the different authentication scenarios, see the [Azure Identity examples](https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/identity/identity/samples/AzureIdentityExamples.md)
- Refer to the [migration guide to @azure/identity](https://github.com/Azure/ms-rest-nodeauth/blob/master/migrate-to-identity-v2.md) to update your existing application.

### Promises

To help with code readability, better handling of deferred and asynchronous computations and better error handling, our new guidelines encourage the use of promises over callbacks. Therefore, the overloads that took callbacks have been dropped in favor of promises.

### PagedAsyncIterableIterator interface

List operations now return a `PagedAsyncIterableIterator` interface that can be used to iterate over the results. This is a better user experience than before where a new method call had to made to access the next page. ```

### ES6 Support

The SDKs have been changed to support ECMAScript 2015 (ES6) and beyond

### Long Running Operations

The structure of LRO Operations has been modified. The `LROPoller` return object has been modified to `PollerLike` object. The [Long Running Operations](https://github.com/Azure/azure-sdk-for-js/blob/main/documentation/MIGRATION-guide-for-next-generation-management-libraries.md#long-running-operations) section in the migration guide will give you more details on it.

A detailed list and usage of these features could be found in the [migration guide](https://aka.ms/js-track2-migration-guide) A [Quick Start](https://aka.ms/js-track2-quickstart) helps to get started with the new libraries.

## What's next

In the future, we are planning to release the following:

1. Improved documentation on the usage of the SDKs
2. More azure services will be covered and released with the new features
3. Detailed end-to-end examples for the SDKs including the new features introduced with these releases.

## Feedback

We encourage you to try out the libraries and provide your feedback by filing an issue at [Azure/azure-sdk-for-js](https://github.com/Azure/azure-sdk-for-js/issues/new/choose)

## Conclusion

We hope these changes make management of your Azure resources much easier with the Javascript SDK.

## Reference Links

1. List of libraries released
   1. [Compute](https://www.npmjs.com/package/@azure/arm-compute)
   2. [Network](https://www.npmjs.com/package/@azure/arm-network)
   3. [Storage](https://www.npmjs.com/package/@azure/arm-storage)
   4. [Sql](https://www.npmjs.com/package/@azure/arm-sql)
   5. [Resources](https://www.npmjs.com/package/@azure/arm-resources)
   6. [Policy](https://www.npmjs.com/package/@azure/arm-policy)
   7. [Managed applications](https://www.npmjs.com/package/@azure/arm-managedapplications)
   8. [Links](https://www.npmjs.com/package/@azure/arm-links)
   9. [Locks](https://www.npmjs.com/package/@azure/arm-locks)
   10. [Features](https://www.npmjs.com/package/@azure/arm-features)
2. [Autorest Typescript SDK Generator](https://www.npmjs.com/package/@autorest/typescript)
3. [Migration Guide for SDKs](https://aka.ms/js-track2-migration-guide)
4. [Migration Guide for `@azure/identity`](https://github.com/Azure/ms-rest-nodeauth/blob/master/migrate-to-identity-v2.md)
