# KeyVault Management - No Deserializer/Serializer Exports in Index

Should not export any deserializer or serializer functions in the main index.ts file, including those with _1, _2, etc. suffixes.

## TypeSpec

This is the TypeSpec definition for KeyVault management API.

```tsp
import "@typespec/rest";
import "@typespec/http";
import "@typespec/versioning";
import "@azure-tools/typespec-azure-core";
import "@azure-tools/typespec-azure-resource-manager";

using TypeSpec.Rest;
using TypeSpec.Http;
using TypeSpec.Versioning;
using Azure.ResourceManager;
using Azure.ResourceManager.Foundations;
using Azure.Core;

@armProviderNamespace
@service(#{ title: "KeyVault Management" })
@versioned(Versions)
@armCommonTypesVersion(Azure.ResourceManager.CommonTypes.Versions.v5)
namespace Microsoft.KeyVault;

enum Versions {
  @useDependency(Azure.ResourceManager.Versions.v1_0_Preview_1)
  @useDependency(Azure.Core.Versions.v1_0_Preview_1)
  v2023_02_01: "2023-02-01",
}

model Vault is Azure.ResourceManager.TrackedResource<VaultProperties, false> {
  ...ResourceNameParameter<
    Resource = Vault,
    KeyName = "vaultName",
    SegmentName = "vaults",
    NamePattern = ""
  >;
}

model VaultProperties {
  tenantId: Azure.Core.uuid;
}

@armResourceOperations
interface Vaults {
  /**
   * Gets the specified Azure key vault.
   */
  get is ArmResourceRead<Vault>;
}

model ManagedHsmResource {
  /**
   * Metadata pertaining to creation and last modification of the key vault resource.
   */
  @visibility(Lifecycle.Read)
  systemData?: SystemData;
}

model SystemData {
  /**
   * The identity that created the key vault resource.
   */
  createdBy?: string;

  /**
   * The timestamp of the key vault resource creation (UTC).
   */
  createdAt?: utcDateTime;

  /**
   * The identity that last modified the key vault resource.
   */
  lastModifiedBy?: string;

  /**
   * The timestamp of the key vault resource last modification (UTC).
   */
  lastModifiedAt?: utcDateTime;
}
```

The config would be like:

```yaml
withRawContent: true
```

## Models Should Only Export Types

The models file should only contain interface and type definitions, not serializer/deserializer functions:

```ts models
/** model interface Vault */
export interface Vault extends TrackedResource {
  /** Properties of the vault */
  properties?: VaultProperties;
  /** The name of the vault. */
  readonly name: string;
}

/** model interface VaultProperties */
export interface VaultProperties {
  tenantId: string;
}

/** model interface SystemData */
export interface SystemData {
  /** The identity that created the key vault resource. */
  createdBy?: string;
  /** The timestamp of the key vault resource creation (UTC). */
  createdAt?: Date;
  /** The identity that last modified the key vault resource. */
  lastModifiedBy?: string;
  /** The timestamp of the key vault resource last modification (UTC). */
  lastModifiedAt?: Date;
}

/** model interface ManagedHsmResource */
export interface ManagedHsmResource {
  /** Metadata pertaining to creation and last modification of the key vault resource. */
  readonly systemData?: SystemData;
}

/** Known values of {@link Versions} that the service accepts. */
export enum KnownVersions {
  v2023_02_01 = "2023-02-01",
}

/**
 * Extensible enum. Indicates the API version. \
 * {@link KnownVersions} can be used interchangeably with Versions,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **v2023_02_01**
 */
export type Versions = string;
```
