# Naming Conventions and Test Templates

## .spec.ts File Naming

Convert the test case path to camelCase for the file name:

| Path | File Name |
| --- | --- |
| `encode/numeric` | `encodeNumeric.spec.ts` |
| `payload/xml` | `payloadXml.spec.ts` |
| `authentication/api-key` | `authApiKey.spec.ts` |
| `azure/core/basic` | `azureCore.spec.ts` |
| `azure/core/model` | `azureCoreModel.spec.ts` |
| `azure/resource-manager/resources` | `azureArmResources.spec.ts` |
| `azure/resource-manager/non-resource` | `azureArmNonResource.spec.ts` |
| `azure/client-generator-core/access` | `azureClientGeneratorCoreAccess.spec.ts` |
| `azure/client-generator-core/api-version/header` | `azureClientGeneratorCoreApiVersionHeader.spec.ts` |

**Key rules:**

- `azure/resource-manager/` paths use prefix `azureArm` (not `azureResourceManager`)
- `azure/core/` paths use prefix `azureCore`
- `azure/client-generator-core/` paths use prefix `azureClientGeneratorCore`
- When uncertain, search existing `.spec.ts` files in `test/azureModularIntegration/` for similar paths

## tspconfig Template

Set `package-details.name` to `"@msinternal/<category-subcategory>"` based on the path (e.g., `encode/array` becomes `@msinternal/encode-array`).

Use this template exactly as-is. Do not copy additional options from sibling tspconfig files.

```yaml
emit:
  - "@azure-tools/typespec-ts"
options:
  "@azure-tools/typespec-ts":
    emitter-output-dir: "{project-root}"
    generate-test: false
    add-credentials: false
    flavor: azure
    azure-sdk-for-js: false
    is-typespec-test: true
    package-details:
      name: "@msinternal/<category-subcategory>"
      description: "<Category Subcategory> Test Service"
```

## .gitignore Template

Create this file at `test/azureModularIntegration/generated/<path>/.gitignore` to ensure only `tspconfig.yaml`, `src/index.d.ts`, and `.gitignore` itself are tracked:

```
/**
!/src
/src/**
!/src/index.d.ts
!/.gitignore
!/tspconfig.yaml
```

## Test File Template

```typescript
import { assert } from "chai";
import { ClientName } from "./generated/<path>/src/index.js";

describe("DescriptiveName", () => {
  let client: ClientName;

  beforeEach(() => {
    client = new ClientName({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0,
      },
    });
  });

  it("should do something", async () => {
    const result = await client.someOperation();
    assert.isUndefined(result);
  });
});
```

## Test Rules

- Endpoint is always `http://localhost:3002` with `allowInsecureConnection: true`
- Import client from `./generated/<path>/src/index.js` (use the exact client name from the generated `index.ts`)
- Use `chai` assertions: `assert.strictEqual()`, `assert.deepEqual()`, `assert.isUndefined()`
- For error tests: wrap in try-catch with `assert.fail()` in the try block
- For paginated results: use `for await (const item of client.listOp()) { items.push(item); }`
- Some clients require credentials or positional params -- check the generated client's constructor signature
