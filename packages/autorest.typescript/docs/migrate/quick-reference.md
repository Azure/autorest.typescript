# Quick Migration Reference

This is a quick reference for migrating from AutoRest high-level client (HLC) to TypeSpec modular libraries.

## Quick Changes Summary

### LRO Operations
```typescript
// Before
const result = await client.beginOperationAndWait();
const poller = await client.beginOperation();

// After  
const result = await client.operation();
const poller = client.operation();
```

### Paging Operations
```typescript
// Before
import { getContinuationToken } from './pagingHelper';
const token = getContinuationToken(page);

// After
const token = page.continuationToken;
```

### Interface Names
```typescript
// Before
interface SomeOperationOptionalParams { }

// After
interface SomeOperationOptions { }
```

### Response Models
```typescript
// Before
const response: SomeOperationResponse = await client.operation();
const data = response.body;

// After
const data: SomeModel = await client.operation();
```

## Poller Properties/Methods

| HLC (`SimplePollerLike`) | Modular (`PollerLike`) |
|--------------------------|------------------------|
| `await poller.pollUntilDone()` | `await poller` or `await poller.pollUntilDone()` |
| `poller.getOperationState()` | `poller.operationState` |
| `poller.getResult()` | `poller.result` |
| `poller.toString()` | `await poller.serialize()` |
| `poller.stopPolling()` | Use `AbortController` |
| `poller.isStopped()` | Use `AbortController` |
| N/A | `await poller.submitted()` |

## Common Patterns

### Start LRO and Wait
```typescript
// Before
const result = await client.beginOperationAndWait(params);

// After
const result = await client.operation(params);
```

### Start LRO and Monitor
```typescript
// Before
const poller = await client.beginOperation(params);
const result = await poller.pollUntilDone();

// After
const poller = client.operation(params);
await poller.submitted(); // Optional
const result = await poller.pollUntilDone();
```

### Resume LRO
```typescript
// Before
const result = await client.beginOperationAndWait(params, {
  resumeFrom: serializedState
});

// After
import { restorePoller } from './client';
const poller = restorePoller(client, serializedState, client.operation);
const result = await poller;
```

### Page Through Results
```typescript
// Before
for await (const page of client.list().byPage()) {
  const token = getContinuationToken(page);
}

// After
for await (const page of client.list().byPage()) {
  const token = page.continuationToken;
}
```

### Cancel LRO
```typescript
// Before
const poller = await client.beginOperation();
poller.stopPolling();

// After
const controller = new AbortController();
const poller = client.operation({ abortSignal: controller.signal });
controller.abort(); // Cancel
```

## Package Updates

```bash
# Remove HLC package
npm uninstall @azure/arm-service-old

# Install modular package
npm install @azure/arm-service-new
```

## Import Updates

```typescript
// Before
import { 
  ServiceClient, 
  ServiceClientOptionalParams,
  SomeOperationResponse 
} from '@azure/arm-service-old';

// After
import { 
  ServiceClient, 
  ServiceClientOptions
  // SomeOperationResponse no longer exists
} from '@azure/arm-service-new';
```

## Error Handling

```typescript
// Before
import { RestError } from '@azure/core-rest-pipeline';
if (error instanceof RestError) {
  console.log(error.statusCode);
}

// After
import { isRestError } from '@azure/core-rest-pipeline';
if (isRestError(error)) {
  console.log(error.status);
}
```

## Complete Example

### Before (HLC)
```typescript
import { DataFactoryManagementClient } from '@azure/arm-datafactory-old';
import { getContinuationToken } from '@azure/arm-datafactory-old/pagingHelper';

const client = new DataFactoryManagementClient(credential, subscriptionId);

// LRO
const result = await client.integrationRuntimes.beginStartAndWait(
  resourceGroup, 
  factoryName, 
  runtimeName
);

// Paging
const factories = [];
for await (const page of client.factories.listByResourceGroup(resourceGroup).byPage()) {
  factories.push(...page);
  const token = getContinuationToken(page);
}
```

### After (Modular)
```typescript
import { DataFactoryManagementClient } from '@azure/arm-datafactory-new';

const client = new DataFactoryManagementClient(credential, subscriptionId);

// LRO
const result = await client.integrationRuntimes.start(
  resourceGroup, 
  factoryName, 
  runtimeName
);

// Paging
const factories = [];
for await (const page of client.factories.listByResourceGroup(resourceGroup).byPage()) {
  factories.push(...page);
  const token = page.continuationToken;
}
```