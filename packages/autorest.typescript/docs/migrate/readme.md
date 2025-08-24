# <img align="center" src="../images/logo.png"> Migration Guide: AutoRest High-Level Client to TypeSpec Modular

This guide helps you migrate from AutoRest high-level client (HLC) libraries to TypeSpec modular libraries. The new modular libraries provide a better developer experience with improved type safety, modular design, and enhanced performance.

## Quick Start

- **New to this migration?** Start with the [Quick Reference](./quick-reference.md) for a concise overview
- **Need detailed examples?** See [Migration Code Examples](./examples.md)
- **Step-by-step migration?** Continue reading this guide

## Overview

TypeSpec modular libraries represent the next generation of Azure SDK client libraries for JavaScript. They offer:

- **Better Developer Experience**: More intuitive APIs with improved IntelliSense support
- **Modular Architecture**: Better organization and tree-shaking capabilities  
- **Enhanced Type Safety**: Stronger typing and better error handling
- **Modern JavaScript Features**: Built with modern JavaScript patterns and best practices

For more information about modular libraries, see the [Azure SDK Modularized Libraries blog post](https://devblogs.microsoft.com/azure-sdk/azure-sdk-modularized-libraries-for-javascript/).

## Key Breaking Changes

### 1. Long Running Operations (LRO)

The LRO implementation has been redesigned and now uses `@azure/core-lro` v3. This introduces several breaking changes in method signatures, poller behavior, and rehydration.

#### Method Signature Changes

**Before (HLC):**
```typescript
// Two separate methods
const poller = await client.integrationRuntimes.beginStart(options);
const result = await client.integrationRuntimes.beginStartAndWait(options);
```

**After (Modular):**
```typescript
// Single method that returns a PollerLike
const poller = client.integrationRuntimes.start(options);
const result = await client.integrationRuntimes.start(options); // Can await directly
```

#### Poller Type Changes

The return type has changed from `SimplePollerLike` to `PollerLike`, which is also `PromiseLike`.

| Operation | HLC (`SimplePollerLike`) | Modular (`PollerLike`) |
|-----------|-------------------------|------------------------|
| Get final results | `pollUntilDone()` | `pollUntilDone()` or `await poller` |
| Poll manually | `poll()` | `poll()` |
| Progress callback | `onProgress()` | `onProgress()` |
| Check if finished | `isDone()` | `isDone` (property) |
| Stop polling | `stopPolling()` | Use `AbortController` |
| Check if stopped | `isStopped()` | Use `AbortController` |
| Get operation state | `getOperationState()` | `operationState` (property) |
| Get final result | `getResult()` | `result` (property) |
| Serialize poller | `toString()` | `serialize()` (async) |
| Wait for submission | N/A | `submitted()` |

**Before (HLC):**
```typescript
const poller = await client.beginOperation();
const status = poller.getOperationState().status;
const serializedState = poller.toString();
```

**After (Modular):**
```typescript
const poller = client.operation();
await poller.submitted(); // Wait for poller to be submitted
const status = poller.operationState?.status; // Can be undefined initially
const serializedState = await poller.serialize();
```

#### Rehydration Changes

Resuming LRO operations has changed from an option parameter to a client-level helper function.

**Before (HLC):**
```typescript
const result = await client.beginStartAndWait({ resumeFrom: serializedState });
```

**After (Modular):**
```typescript
import { restorePoller } from './client';

const poller = restorePoller(client, serializedState, client.start);
const result = await poller;
```

### 2. Paging Operations

Paging interfaces have been updated for better consistency and developer experience.

#### Removal of maxPageSize

The `maxPageSize` parameter in `PageSettings` has been removed as it was not functional in HLC.

**Before (HLC):**
```typescript
for await (const page of client.listItems().byPage({ maxPageSize: 10 })) {
  // maxPageSize was ignored
}
```

**After (Modular):**
```typescript
for await (const page of client.listItems().byPage()) {
  // No maxPageSize parameter
}
```

#### Continuation Token Access

Direct access to continuation tokens without helper functions.

**Before (HLC):**
```typescript
import { getContinuationToken } from './pagingHelper';

const iterator = client.listItems();
const firstPage = await iterator.byPage().next();
const continuationToken = getContinuationToken(firstPage.value);
```

**After (Modular):**
```typescript
const iterator = client.listItems();
const firstPage = await iterator.byPage().next();
const continuationToken = firstPage.value.continuationToken;
```

### 3. Interface Name Changes

Operation option interfaces have been renamed for consistency.

**Before (HLC):**
```typescript
interface DataProductsGetOptionalParams extends OperationOptions {
  // options
}
```

**After (Modular):**
```typescript
interface DataProductsGetOptions extends OperationOptions {
  // options  
}
```

### 4. Response Model Changes

Response models have been simplified to focus on the actual data rather than HTTP metadata.

**Before (HLC):**
```typescript
// Dedicated response interface with headers
interface DataProductsCreateResponse {
  body: DataProduct;
  headers: { [key: string]: string };
  status: number;
}

const response: DataProductsCreateResponse = await client.dataProducts.beginCreateAndWait();
```

**After (Modular):**
```typescript
// Direct model type
const dataProduct: DataProduct = await client.dataProducts.create();
```

## Migration Strategies

### 1. Update Dependencies

```bash
# Remove old AutoRest-generated package
npm uninstall @azure/old-package-name

# Install new TypeSpec modular package  
npm install @azure/new-package-name
```

### 2. Update Imports

**Before (HLC):**
```typescript
import { SomeClient, SomeClientOptionalParams } from '@azure/old-package';
```

**After (Modular):**
```typescript
import { SomeClient, SomeClientOptions } from '@azure/new-package';
```

### 3. Update Client Initialization

The client initialization pattern remains similar, but some option names may change.

**Before (HLC):**
```typescript
const client = new SomeClient(endpoint, credential, {
  apiVersion: '2023-01-01'
});
```

**After (Modular):**
```typescript
const client = new SomeClient(endpoint, credential, {
  apiVersion: '2023-01-01'  
});
```

### 4. Update LRO Usage

For long-running operations, update to the new single-method pattern:

**Before (HLC):**
```typescript
// For fire-and-forget
const poller = await client.beginOperation();
const result = await poller.pollUntilDone();

// For wait-until-complete
const result = await client.beginOperationAndWait();
```

**After (Modular):**
```typescript
// For fire-and-forget
const poller = client.operation();
await poller.submitted(); // Optional: wait for submission
const result = await poller.pollUntilDone();

// For wait-until-complete  
const result = await client.operation();
```

### 5. Update Paging Usage

**Before (HLC):**
```typescript
for await (const item of client.listItems()) {
  console.log(item);
}

// With pages
for await (const page of client.listItems().byPage()) {
  for (const item of page) {
    console.log(item);
  }
}
```

**After (Modular):**
```typescript
// Same pattern works
for await (const item of client.listItems()) {
  console.log(item);
}

// With pages - same pattern
for await (const page of client.listItems().byPage()) {
  for (const item of page) {
    console.log(item);
  }
}
```

## Best Practices

1. **Test Thoroughly**: Run your existing tests to identify any breaking changes specific to your usage
2. **Update Error Handling**: Review error handling patterns as error types may have changed
3. **Check Type Definitions**: Use TypeScript's compiler to identify type mismatches
4. **Review Generated Code**: Examine the new generated code structure to understand changes
5. **Update Documentation**: Update your code documentation to reflect the new API patterns

## Common Migration Patterns

### Pattern 1: Simple Operations
```typescript
// Before
const result = await client.getResource(resourceId, options);

// After (usually unchanged)
const result = await client.getResource(resourceId, options);
```

### Pattern 2: LRO Operations
```typescript
// Before
const result = await client.beginCreateAndWait(resource, options);

// After
const result = await client.create(resource, options);
```

### Pattern 3: Paged Operations
```typescript
// Before
const items = [];
for await (const item of client.listResources()) {
  items.push(item);
}

// After (unchanged)
const items = [];
for await (const item of client.listResources()) {
  items.push(item);
}
```

## Migration Checklist

Use this checklist to ensure you've covered all aspects of the migration:

### Pre-Migration
- [ ] Review the breaking changes documentation
- [ ] Identify all LRO operations in your code
- [ ] Identify all paging operations in your code
- [ ] Check for custom error handling patterns
- [ ] Review any response header usage

### During Migration
- [ ] Update package dependencies
- [ ] Update import statements
- [ ] Convert LRO method calls (remove `begin` prefix, update poller usage)
- [ ] Update paging continuation token access
- [ ] Update interface names (`OptionalParams` → `Options`)
- [ ] Remove response wrapper access where applicable
- [ ] Update error handling if using specific error types

### Post-Migration
- [ ] Run full test suite
- [ ] Verify LRO operations work correctly
- [ ] Verify paging operations work correctly
- [ ] Test error scenarios
- [ ] Update documentation
- [ ] Review performance characteristics

## Detailed Examples

For comprehensive code examples covering all migration scenarios, see [Migration Code Examples](./examples.md).

## Troubleshooting Common Issues

### TypeScript Compilation Errors

**Issue**: `Property 'beginXXX' does not exist`
**Solution**: Remove the `begin` prefix from LRO method names.

**Issue**: `Type 'XXXOptionalParams' is not assignable to 'XXXOptions'`
**Solution**: Update interface names to use `Options` suffix instead of `OptionalParams`.

### Runtime Errors

**Issue**: `poller.getOperationState is not a function`
**Solution**: Use `poller.operationState` property instead of the `getOperationState()` method.

**Issue**: `getContinuationToken is not defined`
**Solution**: Access continuation tokens directly from page results: `page.continuationToken`.

### Performance Considerations

- **Bundle Size**: Modular libraries typically have smaller bundle sizes due to better tree-shaking
- **Type Safety**: Stronger typing may catch errors earlier but could require code updates
- **Memory Usage**: New LRO implementation may have different memory characteristics

## Migration Timeline Recommendations

1. **Phase 1**: Update dependencies and fix compilation errors
2. **Phase 2**: Update LRO operations one service area at a time
3. **Phase 3**: Update paging operations
4. **Phase 4**: Test and validate all scenarios
5. **Phase 5**: Deploy and monitor

## Resources

- [Detailed Migration Code Examples](./examples.md)
- [Azure SDK Modularized Libraries Blog Post](https://devblogs.microsoft.com/azure-sdk/azure-sdk-modularized-libraries-for-javascript/)
- [Azure SDK for JS Management Libraries Migration Guide](https://github.com/Azure/azure-sdk-for-js/blob/main/documentation/MIGRATION-guide-for-next-generation-management-libraries.md)
- [Core-LRO v3 Migration Guide](https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/core/core-lro/docs/MIGRATION.md)
- [Azure SDK for JavaScript Guidelines](https://azure.github.io/azure-sdk/typescript_introduction.html)
- [TypeSpec Documentation](https://typespec.io/)

## Support

If you encounter issues during migration:

1. Check the [troubleshooting guide](../troubleshooting.md)
2. Review the [FAQ](../faq.md)
3. Review the [detailed examples](./examples.md)
4. Search for existing [GitHub issues](https://github.com/Azure/autorest.typescript/issues)
5. Create a new issue with detailed information about your migration challenge

For questions specific to Azure SDK patterns, also check the [Azure SDK for JS repository](https://github.com/Azure/azure-sdk-for-js) for additional resources and examples.
