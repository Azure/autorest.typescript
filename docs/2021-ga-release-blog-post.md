# Introducing the new Azure SDK Management Libraries for JavaScript

We're excited to announce the new GA release for JavaScript libraries that enable you to provision and manage Azure resources via the Azure Resource Manager. These libraries have several new features that help developers to have a great experience in using the Azure Services. Some of the important libraries that have been released are:

1. [@azure/arm-compute](https://www.npmjs.com/package/@azure/arm-compute)
2. [@azure/arm-network](https://www.npmjs.com/package/@azure/arm-network)
3. [@azure/arm-storage](https://www.npmjs.com/package/@azure/arm-storage)
4. [@azure/arm-sql](https://www.npmjs.com/package/@azure/arm-sql)
5. [@azure/arm-resources](https://www.npmjs.com/package/@azure/arm-resources)
6. [@azure/arm-policy](https://www.npmjs.com/package/@azure/arm-policy)
7. [@azure/arm-managedapplications](https://www.npmjs.com/package/@azure/arm-managedapplications)
8. [@azure/arm-links](https://www.npmjs.com/package/@azure/arm-links)
9. [@azure/arm-locks](https://www.npmjs.com/package/@azure/arm-locks)
10. [@azure/arm-features](https://www.npmjs.com/package/@azure/arm-features)

These libraries follow the new [Azure Library guidelines](https://azure.github.io/azure-sdk/general_introduction.html) that were written to provide an improved and consistent development experience across Azure services. The [TypeScript & JavaScript specific guidelines](https://azure.github.io/azure-sdk/typescript_introduction.html) that are also followed ensure that these libraries have a natural and idiomatic feel to the JavaScript and TypeScript ecosystem. These libraries have been generated using the new [Autorest Typescript Library Generator](https://www.npmjs.com/package/@autorest/typescript). They provide new authentication mechanisms, better paging and long running operations experience.. We encourage you to try out the libraries and provide your feedback.

## Key concepts

While a detailed list and usage of the new features can be found in the [migration guide](https://aka.ms/js-track2-migration-guide) and the [quick start guide](https://github.com/Azure/azure-sdk-for-js/blob/main/documentation/next-generation-quickstart.md) can be used for first time users, below is an overview of the major changes in the new libraries

### Authentication

Previously, the Azure management libraries required credential objects created via the packages `@azure/ms-rest-nodeauth` or `@azure/ms-rest-browserauth` that used ADAL which reaches end of support in Jun 2022. The new Azure management libraries require credential objects from the new `@azure/identity` package that makes use of the [MSAL](https://docs.microsoft.com/azure/active-directory/develop/msal-overview) and have many more authentication options to support newer scenarios.

- For the different authentication scenarios, see the [Azure Identity examples](https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/identity/identity/samples/AzureIdentityExamples.md)
- Refer to the [migration guide to @azure/identity](https://github.com/Azure/ms-rest-nodeauth/blob/master/migrate-to-identity-v2.md) to update your existing application.

### Promises vs callbacks

To help with code readability, better handling of deferred and asynchronous computations and better error handling, our new guidelines encourage the use of promises over callbacks. Therefore, the overloads that took callbacks have been dropped in favor of promises.

### PagedAsyncIterableIterator interface

List operations now return a `PagedAsyncIterableIterator` interface that can be used to iterate over the results. This is a better user experience than before where a new method call had to made to access the next page. The [List Operations](https://github.com/Azure/azure-sdk-for-js/blob/main/documentation/MIGRATION-guide-for-next-generation-management-libraries.md#list-operations) section in the migration guide will give you more details on it.

### ES6 Support

The SDKs have been changed to support ECMAScript 2015 (ES6) and beyond

### Long Running Operations

The structure of LRO Operations has been modified. The `LROPoller` return object has been modified to `PollerLike` object. The [Long Running Operations](https://github.com/Azure/azure-sdk-for-js/blob/main/documentation/MIGRATION-guide-for-next-generation-management-libraries.md#long-running-operations) section in the migration guide will give you more details on it.

## What's next

In the future, we are planning to release the following:

1. Improved documentation on the usage of the Libraries
2. More azure services will be covered and released with the new features
3. Detailed end-to-end examples for the Libraries including the new features introduced with these releases.

## Feedback

We encourage you to try out the libraries and provide your feedback by filing an issue at [Azure/azure-sdk-for-js](https://github.com/Azure/azure-sdk-for-js/issues/new/choose)

## Conclusion

We hope these changes make management of your Azure resources much easier with the JavaScript Libraries.

## Reference Links

1. List of libraries released
   1. [@azure/arm-compute](https://www.npmjs.com/package/@azure/arm-compute)
   2. [@azure/arm-network](https://www.npmjs.com/package/@azure/arm-network)
   3. [@azure/arm-storage](https://www.npmjs.com/package/@azure/arm-storage)
   4. [@azure/arm-sql](https://www.npmjs.com/package/@azure/arm-sql)
   5. [@azure/arm-resources](https://www.npmjs.com/package/@azure/arm-resources)
   6. [@azure/arm-policy](https://www.npmjs.com/package/@azure/arm-policy)
   7. [@azure/arm-managedapplications](https://www.npmjs.com/package/@azure/arm-managedapplications)
   8. [@azure/arm-links](https://www.npmjs.com/package/@azure/arm-links)
   9. [@azure/arm-locks](https://www.npmjs.com/package/@azure/arm-locks)
   10. [@azure/arm-features](https://www.npmjs.com/package/@azure/arm-features)
2. [Autorest Typescript SDK Generator](https://www.npmjs.com/package/@autorest/typescript)
3. [Migration Guide for SDKs](https://aka.ms/js-track2-migration-guide)
4. [Migration Guide for `@azure/identity`](https://github.com/Azure/ms-rest-nodeauth/blob/master/migrate-to-identity-v2.md)
5. [Quick Start Guide](https://github.com/Azure/azure-sdk-for-js/blob/main/documentation/next-generation-quickstart.md)
