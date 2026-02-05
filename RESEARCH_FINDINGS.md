# Research Findings: Headers in Operation Return Types

## Problem Summary

When an operation returns a model with header properties using TypeSpec syntax like:

```typespec
model User {
  name: string;
  email: string;
}

op getUser(): User & {@header requestId: string};
```

The generated operation signature incorrectly returns only the model type:

```typescript
Promise<User>;
```

Instead of including both model and header properties:

```typescript
Promise<{ name: string; email: string; requestId: string }>;
```

---

## Key File Locations

### Primary Generation Files

1. **[packages/typespec-ts/src/modular/helpers/operationHelpers.ts](packages/typespec-ts/src/modular/helpers/operationHelpers.ts)**
   - Contains core logic for generating operation signatures and deserialization
   - Functions: `getOperationFunction()`, `getDeserializePrivateFunction()`, `getResponseMapping()`

2. **[packages/typespec-ts/src/modular/emitModels.ts](packages/typespec-ts/src/modular/emitModels.ts)**
   - Handles emission of model types and header-only response interfaces
   - Functions: `emitTypes()`, `emitHeaderOnlyResponseInterface()`

3. **[packages/typespec-ts/src/modular/buildOperations.ts](packages/typespec-ts/src/modular/buildOperations.ts)**
   - Builds operation files and calls the operation function generators

### Test Case Reference

- **[packages/typespec-ts/test/modularUnit/scenarios/models/response/headerAndModelInResponse.md](packages/typespec-ts/test/modularUnit/scenarios/models/response/headerAndModelInResponse.md)**
  - Shows expected behavior: return type should be `Promise<{ name: string; email: string; requestId: string }>`

---

## Current Code Patterns for Handling Headers

### 1. Return Type Generation in `getOperationFunction()` (lines 562-720)

**Current flow** (lines 598-618):

```typescript
let returnType = { name: "", type: "void" };
if (response.type) {
  const type = response.type;
  returnType = {
    name: (type as any).name ?? "",
    type: getTypeExpression(context, type!), // ← PROBLEM: Only returns model type
  };
} else if (hasHeaderOnlyResponse) {
  const headerOnlyInterfaceName = generateHeaderOnlyResponseTypeName(operation);
  registerHeaderOnlyResponseInterface(
    operation,
    responseHeaders,
    headerOnlyInterfaceName,
  );
  returnType = {
    name: headerOnlyInterfaceName,
    type: resolveReference(refkey(operation.operation.__raw, "headerResponse")),
  };
}
```

**Issue**: When `response.type` exists, the code:

- ✓ Retrieves `responseHeaders` (line 603)
- ✓ Checks `hasHeaderOnlyResponse` (line 604)
- ✗ **Does NOT check if the response model has header properties**
- ✗ **Does NOT combine model properties with headers in the return type**

### 2. Return Type Generation in `getDeserializePrivateFunction()` (lines 147-400)

Similar pattern at lines 168-197:

```typescript
const response = operation.response;
const restResponse = operation.operation.responses[0];
const responseHeaders = getResponseHeaders(operation.operation.responses);
const hasHeaderOnlyResponse = !response.type && responseHeaders.length > 0;

let returnType;
if (isLroOnly || isLroAndPaging) {
  returnType = buildLroReturnType(context, operation);
} else if (response.type && restResponse) {
  returnType = {
    name: (restResponse as any).name ?? "",
    type: getTypeExpression(context, restResponse.type!), // ← Only model type
  };
} else if (hasHeaderOnlyResponse) {
  const headerOnlyTypeName = generateHeaderOnlyResponseTypeName(operation);
  registerHeaderOnlyResponseInterface(
    operation,
    responseHeaders,
    headerOnlyTypeName,
  );
  returnType = {
    name: headerOnlyTypeName,
    type: resolveReference(refkey(operation.operation.__raw, "headerResponse")),
  };
}
```

---

## How Headers Are Currently Handled

### Header Property Detection

**Function**: `hasHeaderProperties()` (line 1793)

```typescript
function hasHeaderProperties(context: SdkContext, type: SdkModelType): boolean {
  const allProps = type.properties ?? [];
  const ancestorProps = getAllAncestors(type)
    .filter((p) => p.kind === "model")
    .flatMap((p) => (p as SdkModelType).properties ?? []);
  return [...allProps, ...ancestorProps].some((p) =>
    isHeader(context.program, p.__raw!),
  );
}
```

- ✓ Already checks if a model has header properties
- ✓ Already checks inherited properties

### Extracting Response Headers

**Function**: `getResponseHeaders()` (line 2321)

```typescript
export function getResponseHeaders(
  responses: SdkHttpOperation["responses"],
): SdkServiceResponseHeader[] {
  const headerMap = new Map<string, SdkServiceResponseHeader>();
  for (const response of responses ?? []) {
    for (const header of response.headers ?? []) {
      const key = header.serializedName ?? header.name;
      if (!headerMap.has(key)) {
        headerMap.set(key, header);
      }
    }
  }
  return Array.from(headerMap.values());
}
```

### Header-Only Response Handling

**Functions**:

- `generateHeaderOnlyResponseTypeName()` (line 2289) - Names like `GetUserResponse`
- `registerHeaderOnlyResponseInterface()` (line 2302) - Registers the header-only interface for emission
- `emitHeaderOnlyResponseInterface()` (line 1063 in emitModels.ts) - Generates the actual interface

**Example generated interface**:

```typescript
export interface GetUserResponse {
  requestId?: string;
}
```

---

## The KEY: How Deserialization Already Combines Model + Headers

**Function**: `getResponseMapping()` (lines 1688-1800) - **THIS IS THE REFERENCE IMPLEMENTATION**

This function is used during deserialization and it ALREADY correctly combines model and header properties:

```typescript
export function getResponseMapping(
  context: SdkContext,
  type: SdkType,
  propertyPath: string = "result.body",
  overrides?: ModelOverrideOptions,
  enableFlatten: boolean = true,
  headers?: string,
) {
  const allParents = type.kind === "model" ? getAllAncestors(type) : [];

  // Include header properties when deserializing responses
  const properties =
    type.kind === "model" ? getAllProperties(context, type, allParents) : [];

  if (type.kind === "model") {
    const headerProps: SdkModelPropertyType[] = [];
    const addHeaderProps = (model: SdkModelType) => {
      model.properties?.forEach((p) => {
        if (isHeader(context.program, p.__raw!)) {
          headerProps.push(p);
        }
      });
    };
    addHeaderProps(type);
    allParents.forEach((parent) => {
      if (parent.kind === "model") {
        addHeaderProps(parent as SdkModelType);
      }
    });
    // ✓ Adds header properties to the properties list
    headerProps.forEach((p) => {
      if (!properties.some((prop) => prop.name === p.name)) {
        properties.push(p);
      }
    });
  }

  const props: string[] = [];
  for (const prop of properties) {
    // Filters out metadata that isn't a header
    if (
      isMetadata(context.program, prop.__raw!) &&
      !isHeader(context.program, prop.__raw!)
    ) {
      continue;
    }
    // ✓ Deserializes both body properties and header properties correctly
    const isHeaderProp = isHeader(context.program, prop.__raw!);
    const basePath = isHeaderProp && headers ? headers : propertyPath;
    // ... generates deserialization for each property
  }
  return props;
}
```

**What it does**:

- Lines 1700-1725: Combines model properties with header properties
- Lines 1726-1800: Generates proper deserialization that reads from both `result.body` (for model props) and `result.headers` (for header props)

**Where it's called**:

- Line 260-261 in `getDeserializePrivateFunction()`:
  ```typescript
  const shouldPassHeaders =
    deserializedType.kind === "model" &&
    hasHeaderProperties(context, deserializedType);
  const deserializedArgs = shouldPassHeaders
    ? `${deserializedRoot}, result.headers`
    : deserializedRoot;
  ```

---

## Where Model/Header Properties Are Extracted

### Model Properties Extraction

**Function**: `getAllProperties()` - Used throughout codebase

Retrieves all properties from a model, including:

- Direct properties: `model.properties`
- Inherited properties: Using `getAllAncestors()` to walk the inheritance chain

### Header Property Identification

Uses `isHeader()` from `@typespec/http`:

```typescript
if (isHeader(context.program, p.__raw!)) {
  // This is a header property
}
```

### Type Expression Generation

**Function**: `getTypeExpression()` in [packages/typespec-ts/src/modular/type-expressions/get-type-expression.ts](packages/typespec-ts/src/modular/type-expressions/get-type-expression.ts) (line 28)

Generates TypeScript type expressions for SDK types:

- Models → interface reference (e.g., `User`)
- Primitives → primitive type (e.g., `string`, `number`)
- Arrays → `SomeType[]`
- Unions → `Type1 | Type2`
- etc.

---

## How Response Types Combine Model + Headers (When It Works)

### For Header-Only Responses

**When**: Operation returns no body, only headers
**What happens**:

1. `hasHeaderOnlyResponse` is detected (no response.type, has responseHeaders)
2. A dedicated interface is created: `GetUserResponse`
3. Interface has properties for each header
4. Return type is: `Promise<GetUserResponse>`

**Function**: `buildHeaderOnlyResponseValue()` (line 1810) builds the runtime object:

```typescript
return { serializedHeaderName: value, ... } as GetUserResponse;
```

### For Responses With Body + Headers (When It SHOULD Work But Doesn't)

**What happens NOW**:

1. Return type is: `Promise<User>` (only the model)
2. But at runtime, the deserialization combines model + headers correctly
3. **Type mismatch**: returned value has `{ name, email, requestId }` but type says just `User`

**What SHOULD happen**:

1. Return type should be: `Promise<{ name: string; email: string; requestId: string }>`
2. This can be either:
   - An **inline object literal type**: `{ name: string; email: string; requestId: string }`
   - A **generated interface**: Similar to header-only responses

---

## Existing Patterns for Generating Combined Types

### 1. Model Expression Generation

**File**: [packages/typespec-ts/src/modular/type-expressions/get-model-expression.ts](packages/typespec-ts/src/modular/type-expressions/get-model-expression.ts)

Can generate inline object literal types:

```typescript
// For discriminated unions or other complex models
`${normalizeModelPropertyName(context, p)}${p.optional ? "?" : ""}: ${getTypeExpression(context, p.type)}`;
```

### 2. Header-Only Response Interface

**File**: [packages/typespec-ts/src/modular/emitModels.ts](packages/typespec-ts/src/modular/emitModels.ts) (line 1063)

```typescript
const properties: PropertySignatureStructure[] = headers.map((header) => {
  const name = normalizeName(header.name, NameType.Property);
  const type = getTypeExpression(context, header.type);
  const isOptional = header.optional;
  return {
    kind: StructureKind.PropertySignature,
    name,
    type,
    hasQuestionToken: isOptional,
  };
});

const interfaceStructure: InterfaceStructure = {
  kind: StructureKind.Interface,
  name: typeName,
  isExported: true,
  properties,
};
```

---

## Technical Details Needed for Implementation

### 1. Property Combination Logic

Need to combine:

- **Model properties** from `response.type.kind === "model"` properties
- **Header properties** from `response.type` properties where `isHeader(context.program, prop.__raw!)` is true

### 2. Type Expression Generation

For return type, build object literal like:

```typescript
{
  name: string;
  email: string;
  requestId: string;
}
```

Using pattern similar to model property serialization:

```typescript
const propertyTypes = allProperties.map((prop) => {
  const name = normalizeModelPropertyName(context, prop);
  const type = getTypeExpression(context, prop.type);
  const optional = prop.optional ? "?" : "";
  return `${name}${optional}: ${type}`;
});
const objectType = `{ ${propertyTypes.join("; ")} }`;
```

### 3. Two Implementation Approaches

**Option A: Inline Object Literal (Simpler)**

- Generate inline type in return statement
- Example: `Promise<{ name: string; email: string; requestId: string }>`
- Pros: No new interface generation needed
- Cons: Type can be verbose for large models

**Option B: Generate Response Interface (More Consistent)**

- Similar to header-only response interfaces
- Create `UserResponse` interface with all properties (model + headers)
- Example: `Promise<UserResponse>`
- Pros: Cleaner, matches header-only pattern
- Cons: Additional interface to manage

### 4. Where to Make Changes

Three main locations:

1. **`getOperationFunction()`** (line 598-618) - Generate return type for public function signature
2. **`getDeserializePrivateFunction()`** (line 168-197) - Generate return type for private deserialize function
3. **Possibly `emitModels.ts`** - If creating response interfaces for Option B

### 5. Key Utility Functions to Use

- `hasHeaderProperties(context, type)` - Detect if model has headers ✓ (already exists)
- `getAllProperties(context, model, ancestors)` - Get all model properties
- `isHeader(context.program, prop.__raw!)` - Identify header properties
- `getTypeExpression(context, type)` - Generate type expressions
- `normalizeModelPropertyName(context, prop)` - Normalize property names
- `getAllAncestors(type)` - Get inherited properties

---

## Summary of Issues

| Issue                                           | Impact                                             | Current Code                                                         | Needed Change                                                         |
| ----------------------------------------------- | -------------------------------------------------- | -------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Return type doesn't include headers             | Type mismatch between signature and implementation | `getTypeExpression(context, type!)` only returns model type          | Check for header properties and combine types                         |
| Header properties filtered out from return type | Public API doesn't reflect actual returned object  | Response mapping correctly includes headers, but return type doesn't | Generate response type that includes both model and header properties |
| Works for header-only responses but not hybrid  | Inconsistent behavior                              | Special case for `hasHeaderOnlyResponse`                             | Extend logic to cover model + headers case                            |
| No interface for combined response              | Larger return type expressions or workarounds      | Header-only interfaces are generated                                 | Consider generating response interfaces for model + headers           |

---

## Code Flow Diagram

```
TypeSpec Input:
  model User { name: string; email: string; }
  op getUser(): User & {@header requestId: string};

         ↓

Parse & Extract:
  - response.type = User (SdkModelType)
  - responseHeaders = [{ name: "requestId", ... }]
  - hasHeaderProperties(context, User) = true ✓

         ↓

Generate Return Type (CURRENTLY BROKEN):
  getOperationFunction() line 598-618:
    if (response.type) {
      returnType = getTypeExpression(context, User)  ← Returns "User" only
    }

         ↓

Expected Return Type:
  Promise<{ name: string; email: string; requestId: string }>

         ↓

Runtime Deserialization (WORKS CORRECTLY):
  getDeserializePrivateFunction() line 260-270:
    shouldPassHeaders = true (has header properties) ✓
    Calls: deserializer(result.body, result.headers)

  getResponseMapping() line 1700-1800:
    Combines model props + header props ✓
    Returns: { name: "...", email: "...", requestId: "..." } ✓

         ↓

Result: Type mismatch between declared return type and actual runtime type
```
