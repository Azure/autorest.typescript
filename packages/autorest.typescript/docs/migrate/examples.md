# Migration Code Examples

This document provides detailed code examples for migrating from AutoRest high-level client (HLC) to TypeSpec modular libraries.

## Table of Contents

- [Client Initialization](#client-initialization)
- [Long Running Operations](#long-running-operations)
- [Paging Operations](#paging-operations)
- [Error Handling](#error-handling)
- [Authentication](#authentication)
- [Advanced Scenarios](#advanced-scenarios)

## Client Initialization

### Basic Client Setup

**Before (HLC):**
```typescript
import { DataFactoryManagementClient } from '@azure/arm-datafactory';
import { DefaultAzureCredential } from '@azure/identity';

const credential = new DefaultAzureCredential();
const client = new DataFactoryManagementClient(credential, subscriptionId, {
  apiVersion: '2018-06-01'
});
```

**After (Modular):**
```typescript
import { DataFactoryManagementClient } from '@azure/arm-datafactory';
import { DefaultAzureCredential } from '@azure/identity';

const credential = new DefaultAzureCredential();
const client = new DataFactoryManagementClient(credential, subscriptionId, {
  apiVersion: '2018-06-01'
});
```

### Client with Custom Options

**Before (HLC):**
```typescript
const client = new DataFactoryManagementClient(credential, subscriptionId, {
  endpoint: 'https://custom.endpoint.com',
  apiVersion: '2018-06-01',
  userAgentOptions: {
    userAgentPrefix: 'MyApp/1.0'
  }
});
```

**After (Modular):**
```typescript
const client = new DataFactoryManagementClient(credential, subscriptionId, {
  endpoint: 'https://custom.endpoint.com',
  apiVersion: '2018-06-01',
  userAgentOptions: {
    userAgentPrefix: 'MyApp/1.0'
  }
});
```

## Long Running Operations

### Basic LRO Pattern

**Before (HLC):**
```typescript
import { DataFactoryManagementClient } from '@azure/arm-datafactory';

async function startIntegrationRuntime() {
  const client = new DataFactoryManagementClient(credential, subscriptionId);
  
  // Fire and forget pattern
  const poller = await client.integrationRuntimes.beginStart(
    resourceGroupName,
    factoryName,
    integrationRuntimeName
  );
  
  // Monitor progress
  poller.onProgress((state) => {
    console.log(`Status: ${state.status}`);
  });
  
  // Wait for completion
  const result = await poller.pollUntilDone();
  return result;
}

async function startAndWaitIntegrationRuntime() {
  const client = new DataFactoryManagementClient(credential, subscriptionId);
  
  // Wait until complete pattern
  const result = await client.integrationRuntimes.beginStartAndWait(
    resourceGroupName,
    factoryName,
    integrationRuntimeName
  );
  
  return result;
}
```

**After (Modular):**
```typescript
import { DataFactoryManagementClient } from '@azure/arm-datafactory';

async function startIntegrationRuntime() {
  const client = new DataFactoryManagementClient(credential, subscriptionId);
  
  // Fire and forget pattern
  const poller = client.integrationRuntimes.start(
    resourceGroupName,
    factoryName,
    integrationRuntimeName
  );
  
  // Wait for submission (optional)
  await poller.submitted();
  
  // Monitor progress
  poller.onProgress((state) => {
    console.log(`Status: ${state.status}`);
  });
  
  // Wait for completion
  const result = await poller.pollUntilDone();
  return result;
}

async function startAndWaitIntegrationRuntime() {
  const client = new DataFactoryManagementClient(credential, subscriptionId);
  
  // Wait until complete pattern - just await the poller
  const result = await client.integrationRuntimes.start(
    resourceGroupName,
    factoryName,
    integrationRuntimeName
  );
  
  return result;
}
```

### LRO with Serialization/Rehydration

**Before (HLC):**
```typescript
async function resumableLRO() {
  const client = new DataFactoryManagementClient(credential, subscriptionId);
  
  // Start operation
  const poller = await client.integrationRuntimes.beginStart(
    resourceGroupName,
    factoryName,
    integrationRuntimeName
  );
  
  // Serialize state
  const serializedState = poller.toString();
  
  // Store serializedState somewhere (database, file, etc.)
  await saveStateToDatabase(serializedState);
  
  // Later, resume from saved state
  const savedState = await loadStateFromDatabase();
  const resumedResult = await client.integrationRuntimes.beginStartAndWait(
    resourceGroupName,
    factoryName,
    integrationRuntimeName,
    { resumeFrom: savedState }
  );
  
  return resumedResult;
}
```

**After (Modular):**
```typescript
import { restorePoller } from '@azure/arm-datafactory';

async function resumableLRO() {
  const client = new DataFactoryManagementClient(credential, subscriptionId);
  
  // Start operation
  const poller = client.integrationRuntimes.start(
    resourceGroupName,
    factoryName,
    integrationRuntimeName
  );
  
  // Serialize state
  const serializedState = await poller.serialize();
  
  // Store serializedState somewhere (database, file, etc.)
  await saveStateToDatabase(serializedState);
  
  // Later, resume from saved state
  const savedState = await loadStateFromDatabase();
  const restoredPoller = restorePoller(
    client,
    savedState,
    client.integrationRuntimes.start
  );
  
  const resumedResult = await restoredPoller;
  return resumedResult;
}
```

### LRO with Cancellation

**Before (HLC):**
```typescript
async function cancellableLRO() {
  const client = new DataFactoryManagementClient(credential, subscriptionId);
  
  const poller = await client.integrationRuntimes.beginStart(
    resourceGroupName,
    factoryName,
    integrationRuntimeName
  );
  
  // Setup cancellation
  setTimeout(() => {
    poller.stopPolling();
  }, 30000); // Cancel after 30 seconds
  
  if (poller.isStopped()) {
    console.log('Operation was cancelled');
    return null;
  }
  
  return await poller.pollUntilDone();
}
```

**After (Modular):**
```typescript
async function cancellableLRO() {
  const client = new DataFactoryManagementClient(credential, subscriptionId);
  
  // Create abort controller
  const abortController = new AbortController();
  
  const poller = client.integrationRuntimes.start(
    resourceGroupName,
    factoryName,
    integrationRuntimeName,
    { abortSignal: abortController.signal }
  );
  
  // Setup cancellation
  setTimeout(() => {
    abortController.abort();
  }, 30000); // Cancel after 30 seconds
  
  try {
    return await poller.pollUntilDone();
  } catch (error) {
    if (error.name === 'AbortError') {
      console.log('Operation was cancelled');
      return null;
    }
    throw error;
  }
}
```

## Paging Operations

### Basic Paging

**Before (HLC):**
```typescript
async function listAllFactories() {
  const client = new DataFactoryManagementClient(credential, subscriptionId);
  
  const factories = [];
  for await (const factory of client.factories.listByResourceGroup(resourceGroupName)) {
    factories.push(factory);
  }
  
  return factories;
}
```

**After (Modular):**
```typescript
async function listAllFactories() {
  const client = new DataFactoryManagementClient(credential, subscriptionId);
  
  const factories = [];
  for await (const factory of client.factories.listByResourceGroup(resourceGroupName)) {
    factories.push(factory);
  }
  
  return factories;
}
```

### Page-by-Page Processing

**Before (HLC):**
```typescript
import { getContinuationToken } from '@azure/arm-datafactory/pagingHelper';

async function processFactoriesByPage() {
  const client = new DataFactoryManagementClient(credential, subscriptionId);
  
  const iterator = client.factories.listByResourceGroup(resourceGroupName);
  
  let continuationToken: string | undefined;
  do {
    const page = await iterator.byPage({ continuationToken }).next();
    
    if (page.done) break;
    
    // Process current page
    console.log(`Processing ${page.value.length} factories`);
    for (const factory of page.value) {
      console.log(`Factory: ${factory.name}`);
    }
    
    // Get continuation token for next page
    continuationToken = getContinuationToken(page.value);
    
  } while (continuationToken);
}
```

**After (Modular):**
```typescript
async function processFactoriesByPage() {
  const client = new DataFactoryManagementClient(credential, subscriptionId);
  
  const iterator = client.factories.listByResourceGroup(resourceGroupName);
  
  let continuationToken: string | undefined;
  do {
    const page = await iterator.byPage({ continuationToken }).next();
    
    if (page.done) break;
    
    // Process current page
    console.log(`Processing ${page.value.length} factories`);
    for (const factory of page.value) {
      console.log(`Factory: ${factory.name}`);
    }
    
    // Get continuation token directly from page
    continuationToken = page.value.continuationToken;
    
  } while (continuationToken);
}
```

### Custom Page Size (HLC Only)

**Before (HLC):**
```typescript
// Note: maxPageSize was not actually functional in HLC
async function listWithCustomPageSize() {
  const client = new DataFactoryManagementClient(credential, subscriptionId);
  
  for await (const page of client.factories
    .listByResourceGroup(resourceGroupName)
    .byPage({ maxPageSize: 10 })) {
    // maxPageSize was ignored in HLC
    console.log(`Page contains ${page.length} items`);
  }
}
```

**After (Modular):**
```typescript
// maxPageSize is not available in modular (it was non-functional in HLC anyway)
async function listFactories() {
  const client = new DataFactoryManagementClient(credential, subscriptionId);
  
  for await (const page of client.factories
    .listByResourceGroup(resourceGroupName)
    .byPage()) {
    console.log(`Page contains ${page.length} items`);
  }
}
```

## Error Handling

### Basic Error Handling

**Before (HLC):**
```typescript
import { RestError } from '@azure/core-rest-pipeline';

async function handleErrors() {
  const client = new DataFactoryManagementClient(credential, subscriptionId);
  
  try {
    const factory = await client.factories.get(resourceGroupName, factoryName);
    return factory;
  } catch (error) {
    if (error instanceof RestError) {
      console.log(`HTTP ${error.statusCode}: ${error.message}`);
      if (error.statusCode === 404) {
        console.log('Factory not found');
      }
    }
    throw error;
  }
}
```

**After (Modular):**
```typescript
import { isRestError } from '@azure/core-rest-pipeline';

async function handleErrors() {
  const client = new DataFactoryManagementClient(credential, subscriptionId);
  
  try {
    const factory = await client.factories.get(resourceGroupName, factoryName);
    return factory;
  } catch (error) {
    if (isRestError(error)) {
      console.log(`HTTP ${error.status}: ${error.message}`);
      if (error.status === 404) {
        console.log('Factory not found');
      }
    }
    throw error;
  }
}
```

## Authentication

### Default Credential

**Before (HLC):**
```typescript
import { DefaultAzureCredential } from '@azure/identity';

const credential = new DefaultAzureCredential();
const client = new DataFactoryManagementClient(credential, subscriptionId);
```

**After (Modular):**
```typescript
import { DefaultAzureCredential } from '@azure/identity';

const credential = new DefaultAzureCredential();
const client = new DataFactoryManagementClient(credential, subscriptionId);
```

### Service Principal Authentication

**Before (HLC):**
```typescript
import { ClientSecretCredential } from '@azure/identity';

const credential = new ClientSecretCredential(
  tenantId,
  clientId,
  clientSecret
);
const client = new DataFactoryManagementClient(credential, subscriptionId);
```

**After (Modular):**
```typescript
import { ClientSecretCredential } from '@azure/identity';

const credential = new ClientSecretCredential(
  tenantId,
  clientId,
  clientSecret
);
const client = new DataFactoryManagementClient(credential, subscriptionId);
```

## Advanced Scenarios

### Custom Request Headers

**Before (HLC):**
```typescript
async function customHeaders() {
  const client = new DataFactoryManagementClient(credential, subscriptionId);
  
  const result = await client.factories.get(resourceGroupName, factoryName, {
    requestOptions: {
      customHeaders: {
        'x-custom-header': 'custom-value'
      }
    }
  });
  
  return result;
}
```

**After (Modular):**
```typescript
async function customHeaders() {
  const client = new DataFactoryManagementClient(credential, subscriptionId);
  
  const result = await client.factories.get(resourceGroupName, factoryName, {
    requestOptions: {
      headers: {
        'x-custom-header': 'custom-value'
      }
    }
  });
  
  return result;
}
```

### Tracing and Telemetry

**Before (HLC):**
```typescript
import { setTracer } from '@azure/core-tracing';

// Setup tracing
setTracer(myTracer);

const client = new DataFactoryManagementClient(credential, subscriptionId, {
  userAgentOptions: {
    userAgentPrefix: 'MyApp/1.0'
  }
});
```

**After (Modular):**
```typescript
import { setTracer } from '@azure/core-tracing';

// Setup tracing (same as before)
setTracer(myTracer);

const client = new DataFactoryManagementClient(credential, subscriptionId, {
  userAgentOptions: {
    userAgentPrefix: 'MyApp/1.0'
  }
});
```

### Response Headers Access

**Before (HLC):**
```typescript
async function getResponseHeaders() {
  const client = new DataFactoryManagementClient(credential, subscriptionId);
  
  let responseHeaders: { [key: string]: string } = {};
  
  const result = await client.factories.get(resourceGroupName, factoryName, {
    onResponse: (response) => {
      responseHeaders = response.headers.toJSON();
    }
  });
  
  return { result, headers: responseHeaders };
}
```

**After (Modular):**
```typescript
async function getResponseHeaders() {
  const client = new DataFactoryManagementClient(credential, subscriptionId);
  
  let responseHeaders: { [key: string]: string } = {};
  
  const result = await client.factories.get(resourceGroupName, factoryName, {
    onResponse: (response) => {
      responseHeaders = response.headers.toJSON();
    }
  });
  
  // Note: result is the direct model, not a response wrapper
  return { result, headers: responseHeaders };
}
```