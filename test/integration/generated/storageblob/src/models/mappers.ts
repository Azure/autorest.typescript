import * as coreHttp from "@azure/core-http";

export const StorageError: coreHttp.CompositeMapper = {
  serializedName: "StorageError",
  type: {
    name: "Composite",
    className: "StorageError",
    modelProperties: {
      message: {
        serializedName: "Message",
        xmlName: "Message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const KeyInfo: coreHttp.CompositeMapper = {
  serializedName: "KeyInfo",
  type: {
    name: "Composite",
    className: "KeyInfo",
    modelProperties: {
      start: {
        serializedName: "Start",
        required: true,
        xmlName: "Start",
        type: {
          name: "String"
        }
      },
      expiry: {
        serializedName: "Expiry",
        required: true,
        xmlName: "Expiry",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UserDelegationKey: coreHttp.CompositeMapper = {
  serializedName: "UserDelegationKey",
  type: {
    name: "Composite",
    className: "UserDelegationKey",
    modelProperties: {
      signedOid: {
        serializedName: "SignedOid",
        required: true,
        xmlName: "SignedOid",
        type: {
          name: "String"
        }
      },
      signedTid: {
        serializedName: "SignedTid",
        required: true,
        xmlName: "SignedTid",
        type: {
          name: "String"
        }
      },
      signedStart: {
        serializedName: "SignedStart",
        required: true,
        xmlName: "SignedStart",
        type: {
          name: "DateTime"
        }
      },
      signedExpiry: {
        serializedName: "SignedExpiry",
        required: true,
        xmlName: "SignedExpiry",
        type: {
          name: "DateTime"
        }
      },
      signedService: {
        serializedName: "SignedService",
        required: true,
        xmlName: "SignedService",
        type: {
          name: "String"
        }
      },
      signedVersion: {
        serializedName: "SignedVersion",
        required: true,
        xmlName: "SignedVersion",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "Value",
        required: true,
        xmlName: "Value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DataLakeStorageError: coreHttp.CompositeMapper = {
  serializedName: "DataLakeStorageError",
  type: {
    name: "Composite",
    className: "DataLakeStorageError",
    modelProperties: {
      dataLakeStorageErrorDetails: {
        serializedName: "error",
        xmlName: "error",
        type: {
          name: "Composite",
          className: "DataLakeStorageErrorError"
        }
      }
    }
  }
};

export const DataLakeStorageErrorError: coreHttp.CompositeMapper = {
  serializedName: "DataLakeStorageErrorError",
  type: {
    name: "Composite",
    className: "DataLakeStorageErrorError",
    modelProperties: {
      code: {
        serializedName: "Code",
        xmlName: "Code",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "Message",
        xmlName: "Message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AccessPolicy: coreHttp.CompositeMapper = {
  serializedName: "AccessPolicy",
  type: {
    name: "Composite",
    className: "AccessPolicy",
    modelProperties: {
      start: {
        serializedName: "Start",
        xmlName: "Start",
        type: {
          name: "DateTime"
        }
      },
      expiry: {
        serializedName: "Expiry",
        xmlName: "Expiry",
        type: {
          name: "DateTime"
        }
      },
      permission: {
        serializedName: "Permission",
        xmlName: "Permission",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BlobItemInternal: coreHttp.CompositeMapper = {
  serializedName: "BlobItemInternal",
  xmlName: "Blob",
  type: {
    name: "Composite",
    className: "BlobItemInternal",
    modelProperties: {
      name: {
        serializedName: "Name",
        required: true,
        xmlName: "Name",
        type: {
          name: "String"
        }
      },
      deleted: {
        serializedName: "Deleted",
        required: true,
        xmlName: "Deleted",
        type: {
          name: "Boolean"
        }
      },
      snapshot: {
        serializedName: "Snapshot",
        required: true,
        xmlName: "Snapshot",
        type: {
          name: "String"
        }
      },
      versionId: {
        serializedName: "VersionId",
        xmlName: "VersionId",
        type: {
          name: "String"
        }
      },
      isCurrentVersion: {
        serializedName: "IsCurrentVersion",
        xmlName: "IsCurrentVersion",
        type: {
          name: "Boolean"
        }
      },
      properties: {
        serializedName: "Properties",
        xmlName: "Properties",
        type: {
          name: "Composite",
          className: "BlobPropertiesInternal"
        }
      },
      metadata: {
        serializedName: "Metadata",
        xmlName: "Metadata",
        type: {
          name: "Composite",
          className: "BlobMetadata"
        }
      },
      blobTags: {
        serializedName: "BlobTags",
        xmlName: "Tags",
        type: {
          name: "Composite",
          className: "BlobTags"
        }
      },
      objectReplicationMetadata: {
        serializedName: "ObjectReplicationMetadata",
        xmlName: "ObjectReplicationMetadata",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const BlobPropertiesInternal: coreHttp.CompositeMapper = {
  serializedName: "BlobPropertiesInternal",
  xmlName: "Properties",
  type: {
    name: "Composite",
    className: "BlobPropertiesInternal",
    modelProperties: {
      creationTime: {
        serializedName: "Creation-Time",
        xmlName: "Creation-Time",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      lastModified: {
        serializedName: "Last-Modified",
        required: true,
        xmlName: "Last-Modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      etag: {
        serializedName: "Etag",
        required: true,
        xmlName: "Etag",
        type: {
          name: "String"
        }
      },
      contentLength: {
        serializedName: "Content-Length",
        xmlName: "Content-Length",
        type: {
          name: "Number"
        }
      },
      contentType: {
        serializedName: "Content-Type",
        xmlName: "Content-Type",
        type: {
          name: "String"
        }
      },
      contentEncoding: {
        serializedName: "Content-Encoding",
        xmlName: "Content-Encoding",
        type: {
          name: "String"
        }
      },
      contentLanguage: {
        serializedName: "Content-Language",
        xmlName: "Content-Language",
        type: {
          name: "String"
        }
      },
      contentMD5: {
        serializedName: "Content-MD5",
        xmlName: "Content-MD5",
        type: {
          name: "ByteArray"
        }
      },
      contentDisposition: {
        serializedName: "Content-Disposition",
        xmlName: "Content-Disposition",
        type: {
          name: "String"
        }
      },
      cacheControl: {
        serializedName: "Cache-Control",
        xmlName: "Cache-Control",
        type: {
          name: "String"
        }
      },
      blobSequenceNumber: {
        serializedName: "x-ms-blob-sequence-number",
        xmlName: "x-ms-blob-sequence-number",
        type: {
          name: "Number"
        }
      },
      blobType: {
        serializedName: "BlobType",
        xmlName: "BlobType",
        type: {
          name: "Enum",
          allowedValues: ["BlockBlob", "PageBlob", "AppendBlob"]
        }
      },
      leaseStatus: {
        serializedName: "LeaseStatus",
        xmlName: "LeaseStatus",
        type: {
          name: "Enum",
          allowedValues: ["locked", "unlocked"]
        }
      },
      leaseState: {
        serializedName: "LeaseState",
        xmlName: "LeaseState",
        type: {
          name: "Enum",
          allowedValues: [
            "available",
            "leased",
            "expired",
            "breaking",
            "broken"
          ]
        }
      },
      leaseDuration: {
        serializedName: "LeaseDuration",
        xmlName: "LeaseDuration",
        type: {
          name: "Enum",
          allowedValues: ["infinite", "fixed"]
        }
      },
      copyId: {
        serializedName: "CopyId",
        xmlName: "CopyId",
        type: {
          name: "String"
        }
      },
      copyStatus: {
        serializedName: "CopyStatus",
        xmlName: "CopyStatus",
        type: {
          name: "Enum",
          allowedValues: ["pending", "success", "aborted", "failed"]
        }
      },
      copySource: {
        serializedName: "CopySource",
        xmlName: "CopySource",
        type: {
          name: "String"
        }
      },
      copyProgress: {
        serializedName: "CopyProgress",
        xmlName: "CopyProgress",
        type: {
          name: "String"
        }
      },
      copyCompletionTime: {
        serializedName: "CopyCompletionTime",
        xmlName: "CopyCompletionTime",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      copyStatusDescription: {
        serializedName: "CopyStatusDescription",
        xmlName: "CopyStatusDescription",
        type: {
          name: "String"
        }
      },
      serverEncrypted: {
        serializedName: "ServerEncrypted",
        xmlName: "ServerEncrypted",
        type: {
          name: "Boolean"
        }
      },
      incrementalCopy: {
        serializedName: "IncrementalCopy",
        xmlName: "IncrementalCopy",
        type: {
          name: "Boolean"
        }
      },
      destinationSnapshot: {
        serializedName: "DestinationSnapshot",
        xmlName: "DestinationSnapshot",
        type: {
          name: "String"
        }
      },
      deletedTime: {
        serializedName: "DeletedTime",
        xmlName: "DeletedTime",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      remainingRetentionDays: {
        serializedName: "RemainingRetentionDays",
        xmlName: "RemainingRetentionDays",
        type: {
          name: "Number"
        }
      },
      accessTier: {
        serializedName: "AccessTier",
        xmlName: "AccessTier",
        type: {
          name: "String"
        }
      },
      accessTierInferred: {
        serializedName: "AccessTierInferred",
        xmlName: "AccessTierInferred",
        type: {
          name: "Boolean"
        }
      },
      archiveStatus: {
        serializedName: "ArchiveStatus",
        xmlName: "ArchiveStatus",
        type: {
          name: "String"
        }
      },
      customerProvidedKeySha256: {
        serializedName: "CustomerProvidedKeySha256",
        xmlName: "CustomerProvidedKeySha256",
        type: {
          name: "String"
        }
      },
      encryptionScope: {
        serializedName: "EncryptionScope",
        xmlName: "EncryptionScope",
        type: {
          name: "String"
        }
      },
      accessTierChangeTime: {
        serializedName: "AccessTierChangeTime",
        xmlName: "AccessTierChangeTime",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      tagCount: {
        serializedName: "TagCount",
        xmlName: "TagCount",
        type: {
          name: "Number"
        }
      },
      expiresOn: {
        serializedName: "Expiry-Time",
        xmlName: "Expiry-Time",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      isSealed: {
        serializedName: "Sealed",
        xmlName: "Sealed",
        type: {
          name: "Boolean"
        }
      },
      rehydratePriority: {
        serializedName: "RehydratePriority",
        xmlName: "RehydratePriority",
        type: {
          name: "String"
        }
      },
      lastAccessedOn: {
        serializedName: "LastAccessTime",
        xmlName: "LastAccessTime",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const BlobMetadata: coreHttp.CompositeMapper = {
  serializedName: "BlobMetadata",
  xmlName: "Metadata",
  type: {
    name: "Composite",
    className: "BlobMetadata",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      encrypted: {
        serializedName: "Encrypted",
        xmlName: "Encrypted",
        xmlIsAttribute: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BlobTags: coreHttp.CompositeMapper = {
  serializedName: "BlobTags",
  xmlName: "Tags",
  type: {
    name: "Composite",
    className: "BlobTags",
    modelProperties: {
      blobTagSet: {
        serializedName: "BlobTagSet",
        required: true,
        xmlName: "TagSet",
        xmlIsWrapped: true,
        xmlElementName: "Tag",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "BlobTag"
            }
          }
        }
      }
    }
  }
};

export const BlobTag: coreHttp.CompositeMapper = {
  serializedName: "BlobTag",
  xmlName: "Tag",
  type: {
    name: "Composite",
    className: "BlobTag",
    modelProperties: {
      key: {
        serializedName: "Key",
        required: true,
        xmlName: "Key",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "Value",
        required: true,
        xmlName: "Value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ListBlobsFlatSegmentResponse: coreHttp.CompositeMapper = {
  serializedName: "ListBlobsFlatSegmentResponse",
  xmlName: "EnumerationResults",
  type: {
    name: "Composite",
    className: "ListBlobsFlatSegmentResponse",
    modelProperties: {
      serviceEndpoint: {
        serializedName: "ServiceEndpoint",
        required: true,
        xmlName: "ServiceEndpoint",
        xmlIsAttribute: true,
        type: {
          name: "String"
        }
      },
      containerName: {
        serializedName: "ContainerName",
        required: true,
        xmlName: "ContainerName",
        xmlIsAttribute: true,
        type: {
          name: "String"
        }
      },
      prefix: {
        serializedName: "Prefix",
        xmlName: "Prefix",
        type: {
          name: "String"
        }
      },
      marker: {
        serializedName: "Marker",
        xmlName: "Marker",
        type: {
          name: "String"
        }
      },
      maxResults: {
        serializedName: "MaxResults",
        xmlName: "MaxResults",
        type: {
          name: "Number"
        }
      },
      segment: {
        serializedName: "Segment",
        xmlName: "Blobs",
        type: {
          name: "Composite",
          className: "BlobFlatListSegment"
        }
      },
      nextMarker: {
        serializedName: "NextMarker",
        xmlName: "NextMarker",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BlobFlatListSegment: coreHttp.CompositeMapper = {
  serializedName: "BlobFlatListSegment",
  xmlName: "Blobs",
  type: {
    name: "Composite",
    className: "BlobFlatListSegment",
    modelProperties: {
      blobItems: {
        serializedName: "BlobItems",
        required: true,
        xmlName: "BlobItems",
        xmlElementName: "Blob",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "BlobItemInternal"
            }
          }
        }
      }
    }
  }
};

export const ListBlobsHierarchySegmentResponse: coreHttp.CompositeMapper = {
  serializedName: "ListBlobsHierarchySegmentResponse",
  xmlName: "EnumerationResults",
  type: {
    name: "Composite",
    className: "ListBlobsHierarchySegmentResponse",
    modelProperties: {
      serviceEndpoint: {
        serializedName: "ServiceEndpoint",
        required: true,
        xmlName: "ServiceEndpoint",
        xmlIsAttribute: true,
        type: {
          name: "String"
        }
      },
      containerName: {
        serializedName: "ContainerName",
        required: true,
        xmlName: "ContainerName",
        xmlIsAttribute: true,
        type: {
          name: "String"
        }
      },
      prefix: {
        serializedName: "Prefix",
        xmlName: "Prefix",
        type: {
          name: "String"
        }
      },
      marker: {
        serializedName: "Marker",
        xmlName: "Marker",
        type: {
          name: "String"
        }
      },
      maxResults: {
        serializedName: "MaxResults",
        xmlName: "MaxResults",
        type: {
          name: "Number"
        }
      },
      delimiter: {
        serializedName: "Delimiter",
        xmlName: "Delimiter",
        type: {
          name: "String"
        }
      },
      segment: {
        serializedName: "Segment",
        xmlName: "Blobs",
        type: {
          name: "Composite",
          className: "BlobHierarchyListSegment"
        }
      },
      nextMarker: {
        serializedName: "NextMarker",
        xmlName: "NextMarker",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BlobHierarchyListSegment: coreHttp.CompositeMapper = {
  serializedName: "BlobHierarchyListSegment",
  xmlName: "Blobs",
  type: {
    name: "Composite",
    className: "BlobHierarchyListSegment",
    modelProperties: {
      blobPrefixes: {
        serializedName: "BlobPrefixes",
        xmlName: "BlobPrefixes",
        xmlElementName: "BlobPrefix",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "BlobPrefix"
            }
          }
        }
      },
      blobItems: {
        serializedName: "BlobItems",
        required: true,
        xmlName: "BlobItems",
        xmlElementName: "Blob",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "BlobItemInternal"
            }
          }
        }
      }
    }
  }
};

export const BlobPrefix: coreHttp.CompositeMapper = {
  serializedName: "BlobPrefix",
  type: {
    name: "Composite",
    className: "BlobPrefix",
    modelProperties: {
      name: {
        serializedName: "Name",
        required: true,
        xmlName: "Name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Block: coreHttp.CompositeMapper = {
  serializedName: "Block",
  type: {
    name: "Composite",
    className: "Block",
    modelProperties: {
      name: {
        serializedName: "Name",
        required: true,
        xmlName: "Name",
        type: {
          name: "String"
        }
      },
      size: {
        serializedName: "Size",
        required: true,
        xmlName: "Size",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const BlockList: coreHttp.CompositeMapper = {
  serializedName: "BlockList",
  type: {
    name: "Composite",
    className: "BlockList",
    modelProperties: {
      committedBlocks: {
        serializedName: "CommittedBlocks",
        xmlName: "CommittedBlocks",
        xmlIsWrapped: true,
        xmlElementName: "Block",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Block"
            }
          }
        }
      },
      uncommittedBlocks: {
        serializedName: "UncommittedBlocks",
        xmlName: "UncommittedBlocks",
        xmlIsWrapped: true,
        xmlElementName: "Block",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Block"
            }
          }
        }
      }
    }
  }
};

export const BlockLookupList: coreHttp.CompositeMapper = {
  serializedName: "BlockLookupList",
  xmlName: "BlockList",
  type: {
    name: "Composite",
    className: "BlockLookupList",
    modelProperties: {
      committed: {
        serializedName: "Committed",
        xmlName: "Committed",
        xmlElementName: "Committed",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      uncommitted: {
        serializedName: "Uncommitted",
        xmlName: "Uncommitted",
        xmlElementName: "Uncommitted",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      latest: {
        serializedName: "Latest",
        xmlName: "Latest",
        xmlElementName: "Latest",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const ContainerItem: coreHttp.CompositeMapper = {
  serializedName: "ContainerItem",
  xmlName: "Container",
  type: {
    name: "Composite",
    className: "ContainerItem",
    modelProperties: {
      name: {
        serializedName: "Name",
        required: true,
        xmlName: "Name",
        type: {
          name: "String"
        }
      },
      deleted: {
        serializedName: "Deleted",
        xmlName: "Deleted",
        type: {
          name: "Boolean"
        }
      },
      version: {
        serializedName: "Version",
        xmlName: "Version",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "Properties",
        xmlName: "Properties",
        type: {
          name: "Composite",
          className: "ContainerProperties"
        }
      },
      metadata: {
        serializedName: "Metadata",
        xmlName: "Metadata",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const ContainerProperties: coreHttp.CompositeMapper = {
  serializedName: "ContainerProperties",
  type: {
    name: "Composite",
    className: "ContainerProperties",
    modelProperties: {
      lastModified: {
        serializedName: "Last-Modified",
        required: true,
        xmlName: "Last-Modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      etag: {
        serializedName: "Etag",
        required: true,
        xmlName: "Etag",
        type: {
          name: "String"
        }
      },
      leaseStatus: {
        serializedName: "LeaseStatus",
        xmlName: "LeaseStatus",
        type: {
          name: "Enum",
          allowedValues: ["locked", "unlocked"]
        }
      },
      leaseState: {
        serializedName: "LeaseState",
        xmlName: "LeaseState",
        type: {
          name: "Enum",
          allowedValues: [
            "available",
            "leased",
            "expired",
            "breaking",
            "broken"
          ]
        }
      },
      leaseDuration: {
        serializedName: "LeaseDuration",
        xmlName: "LeaseDuration",
        type: {
          name: "Enum",
          allowedValues: ["infinite", "fixed"]
        }
      },
      publicAccess: {
        serializedName: "PublicAccess",
        xmlName: "PublicAccess",
        type: {
          name: "String"
        }
      },
      hasImmutabilityPolicy: {
        serializedName: "HasImmutabilityPolicy",
        xmlName: "HasImmutabilityPolicy",
        type: {
          name: "Boolean"
        }
      },
      hasLegalHold: {
        serializedName: "HasLegalHold",
        xmlName: "HasLegalHold",
        type: {
          name: "Boolean"
        }
      },
      defaultEncryptionScope: {
        serializedName: "DefaultEncryptionScope",
        xmlName: "DefaultEncryptionScope",
        type: {
          name: "String"
        }
      },
      preventEncryptionScopeOverride: {
        serializedName: "DenyEncryptionScopeOverride",
        xmlName: "DenyEncryptionScopeOverride",
        type: {
          name: "Boolean"
        }
      },
      deletedTime: {
        serializedName: "DeletedTime",
        xmlName: "DeletedTime",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      remainingRetentionDays: {
        serializedName: "RemainingRetentionDays",
        xmlName: "RemainingRetentionDays",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const DelimitedTextConfiguration: coreHttp.CompositeMapper = {
  serializedName: "DelimitedTextConfiguration",
  xmlName: "DelimitedTextConfiguration",
  type: {
    name: "Composite",
    className: "DelimitedTextConfiguration",
    modelProperties: {
      columnSeparator: {
        serializedName: "ColumnSeparator",
        required: true,
        xmlName: "ColumnSeparator",
        type: {
          name: "String"
        }
      },
      fieldQuote: {
        serializedName: "FieldQuote",
        required: true,
        xmlName: "FieldQuote",
        type: {
          name: "String"
        }
      },
      recordSeparator: {
        serializedName: "RecordSeparator",
        required: true,
        xmlName: "RecordSeparator",
        type: {
          name: "String"
        }
      },
      escapeChar: {
        serializedName: "EscapeChar",
        required: true,
        xmlName: "EscapeChar",
        type: {
          name: "String"
        }
      },
      headersPresent: {
        serializedName: "HeadersPresent",
        required: true,
        xmlName: "HasHeaders",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const JsonTextConfiguration: coreHttp.CompositeMapper = {
  serializedName: "JsonTextConfiguration",
  xmlName: "JsonTextConfiguration",
  type: {
    name: "Composite",
    className: "JsonTextConfiguration",
    modelProperties: {
      recordSeparator: {
        serializedName: "RecordSeparator",
        required: true,
        xmlName: "RecordSeparator",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ArrowConfiguration: coreHttp.CompositeMapper = {
  serializedName: "ArrowConfiguration",
  xmlName: "ArrowConfiguration",
  type: {
    name: "Composite",
    className: "ArrowConfiguration",
    modelProperties: {
      schema: {
        serializedName: "Schema",
        required: true,
        xmlName: "Schema",
        xmlIsWrapped: true,
        xmlElementName: "Field",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ArrowField"
            }
          }
        }
      }
    }
  }
};

export const ArrowField: coreHttp.CompositeMapper = {
  serializedName: "ArrowField",
  xmlName: "Field",
  type: {
    name: "Composite",
    className: "ArrowField",
    modelProperties: {
      type: {
        serializedName: "Type",
        required: true,
        xmlName: "Type",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "Name",
        xmlName: "Name",
        type: {
          name: "String"
        }
      },
      precision: {
        serializedName: "Precision",
        xmlName: "Precision",
        type: {
          name: "Number"
        }
      },
      scale: {
        serializedName: "Scale",
        xmlName: "Scale",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ListContainersSegmentResponse: coreHttp.CompositeMapper = {
  serializedName: "ListContainersSegmentResponse",
  xmlName: "EnumerationResults",
  type: {
    name: "Composite",
    className: "ListContainersSegmentResponse",
    modelProperties: {
      serviceEndpoint: {
        serializedName: "ServiceEndpoint",
        required: true,
        xmlName: "ServiceEndpoint",
        xmlIsAttribute: true,
        type: {
          name: "String"
        }
      },
      prefix: {
        serializedName: "Prefix",
        xmlName: "Prefix",
        type: {
          name: "String"
        }
      },
      marker: {
        serializedName: "Marker",
        xmlName: "Marker",
        type: {
          name: "String"
        }
      },
      maxResults: {
        serializedName: "MaxResults",
        xmlName: "MaxResults",
        type: {
          name: "Number"
        }
      },
      containerItems: {
        serializedName: "ContainerItems",
        required: true,
        xmlName: "Containers",
        xmlIsWrapped: true,
        xmlElementName: "Container",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ContainerItem"
            }
          }
        }
      },
      nextMarker: {
        serializedName: "NextMarker",
        xmlName: "NextMarker",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CorsRule: coreHttp.CompositeMapper = {
  serializedName: "CorsRule",
  type: {
    name: "Composite",
    className: "CorsRule",
    modelProperties: {
      allowedOrigins: {
        serializedName: "AllowedOrigins",
        required: true,
        xmlName: "AllowedOrigins",
        type: {
          name: "String"
        }
      },
      allowedMethods: {
        serializedName: "AllowedMethods",
        required: true,
        xmlName: "AllowedMethods",
        type: {
          name: "String"
        }
      },
      allowedHeaders: {
        serializedName: "AllowedHeaders",
        required: true,
        xmlName: "AllowedHeaders",
        type: {
          name: "String"
        }
      },
      exposedHeaders: {
        serializedName: "ExposedHeaders",
        required: true,
        xmlName: "ExposedHeaders",
        type: {
          name: "String"
        }
      },
      maxAgeInSeconds: {
        constraints: {
          InclusiveMinimum: 0
        },
        serializedName: "MaxAgeInSeconds",
        required: true,
        xmlName: "MaxAgeInSeconds",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const FilterBlobItem: coreHttp.CompositeMapper = {
  serializedName: "FilterBlobItem",
  xmlName: "Blob",
  type: {
    name: "Composite",
    className: "FilterBlobItem",
    modelProperties: {
      name: {
        serializedName: "Name",
        required: true,
        xmlName: "Name",
        type: {
          name: "String"
        }
      },
      containerName: {
        serializedName: "ContainerName",
        required: true,
        xmlName: "ContainerName",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "Tags",
        xmlName: "Tags",
        type: {
          name: "Composite",
          className: "BlobTags"
        }
      }
    }
  }
};

export const FilterBlobSegment: coreHttp.CompositeMapper = {
  serializedName: "FilterBlobSegment",
  xmlName: "EnumerationResults",
  type: {
    name: "Composite",
    className: "FilterBlobSegment",
    modelProperties: {
      serviceEndpoint: {
        serializedName: "ServiceEndpoint",
        required: true,
        xmlName: "ServiceEndpoint",
        xmlIsAttribute: true,
        type: {
          name: "String"
        }
      },
      where: {
        serializedName: "Where",
        required: true,
        xmlName: "Where",
        type: {
          name: "String"
        }
      },
      blobs: {
        serializedName: "Blobs",
        required: true,
        xmlName: "Blobs",
        xmlIsWrapped: true,
        xmlElementName: "Blob",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FilterBlobItem"
            }
          }
        }
      },
      nextMarker: {
        serializedName: "NextMarker",
        xmlName: "NextMarker",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GeoReplication: coreHttp.CompositeMapper = {
  serializedName: "GeoReplication",
  type: {
    name: "Composite",
    className: "GeoReplication",
    modelProperties: {
      status: {
        serializedName: "Status",
        required: true,
        xmlName: "Status",
        type: {
          name: "String"
        }
      },
      lastSyncTime: {
        serializedName: "LastSyncTime",
        required: true,
        xmlName: "LastSyncTime",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const Logging: coreHttp.CompositeMapper = {
  serializedName: "Logging",
  type: {
    name: "Composite",
    className: "Logging",
    modelProperties: {
      version: {
        serializedName: "Version",
        required: true,
        xmlName: "Version",
        type: {
          name: "String"
        }
      },
      delete: {
        serializedName: "Delete",
        required: true,
        xmlName: "Delete",
        type: {
          name: "Boolean"
        }
      },
      read: {
        serializedName: "Read",
        required: true,
        xmlName: "Read",
        type: {
          name: "Boolean"
        }
      },
      write: {
        serializedName: "Write",
        required: true,
        xmlName: "Write",
        type: {
          name: "Boolean"
        }
      },
      retentionPolicy: {
        serializedName: "RetentionPolicy",
        xmlName: "RetentionPolicy",
        type: {
          name: "Composite",
          className: "RetentionPolicy"
        }
      }
    }
  }
};

export const RetentionPolicy: coreHttp.CompositeMapper = {
  serializedName: "RetentionPolicy",
  type: {
    name: "Composite",
    className: "RetentionPolicy",
    modelProperties: {
      enabled: {
        serializedName: "Enabled",
        required: true,
        xmlName: "Enabled",
        type: {
          name: "Boolean"
        }
      },
      days: {
        constraints: {
          InclusiveMinimum: 1
        },
        serializedName: "Days",
        xmlName: "Days",
        type: {
          name: "Number"
        }
      },
      allowPermanentDelete: {
        serializedName: "AllowPermanentDelete",
        xmlName: "AllowPermanentDelete",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const Metrics: coreHttp.CompositeMapper = {
  serializedName: "Metrics",
  type: {
    name: "Composite",
    className: "Metrics",
    modelProperties: {
      version: {
        serializedName: "Version",
        xmlName: "Version",
        type: {
          name: "String"
        }
      },
      enabled: {
        serializedName: "Enabled",
        required: true,
        xmlName: "Enabled",
        type: {
          name: "Boolean"
        }
      },
      includeAPIs: {
        serializedName: "IncludeAPIs",
        xmlName: "IncludeAPIs",
        type: {
          name: "Boolean"
        }
      },
      retentionPolicy: {
        serializedName: "RetentionPolicy",
        xmlName: "RetentionPolicy",
        type: {
          name: "Composite",
          className: "RetentionPolicy"
        }
      }
    }
  }
};

export const PageList: coreHttp.CompositeMapper = {
  serializedName: "PageList",
  type: {
    name: "Composite",
    className: "PageList",
    modelProperties: {
      pageRange: {
        serializedName: "PageRange",
        xmlName: "PageRange",
        xmlElementName: "PageRange",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PageRange"
            }
          }
        }
      },
      clearRange: {
        serializedName: "ClearRange",
        xmlName: "ClearRange",
        xmlElementName: "ClearRange",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ClearRange"
            }
          }
        }
      }
    }
  }
};

export const PageRange: coreHttp.CompositeMapper = {
  serializedName: "PageRange",
  xmlName: "PageRange",
  type: {
    name: "Composite",
    className: "PageRange",
    modelProperties: {
      start: {
        serializedName: "Start",
        required: true,
        xmlName: "Start",
        type: {
          name: "Number"
        }
      },
      end: {
        serializedName: "End",
        required: true,
        xmlName: "End",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ClearRange: coreHttp.CompositeMapper = {
  serializedName: "ClearRange",
  xmlName: "ClearRange",
  type: {
    name: "Composite",
    className: "ClearRange",
    modelProperties: {
      start: {
        serializedName: "Start",
        required: true,
        xmlName: "Start",
        type: {
          name: "Number"
        }
      },
      end: {
        serializedName: "End",
        required: true,
        xmlName: "End",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const QueryRequest: coreHttp.CompositeMapper = {
  serializedName: "QueryRequest",
  xmlName: "QueryRequest",
  type: {
    name: "Composite",
    className: "QueryRequest",
    modelProperties: {
      queryType: {
        defaultValue: "SQL",
        isConstant: true,
        serializedName: "QueryType",
        type: {
          name: "String"
        }
      },
      expression: {
        serializedName: "Expression",
        required: true,
        xmlName: "Expression",
        type: {
          name: "String"
        }
      },
      inputSerialization: {
        serializedName: "InputSerialization",
        xmlName: "InputSerialization",
        type: {
          name: "Composite",
          className: "QuerySerialization"
        }
      },
      outputSerialization: {
        serializedName: "OutputSerialization",
        xmlName: "OutputSerialization",
        type: {
          name: "Composite",
          className: "QuerySerialization"
        }
      }
    }
  }
};

export const QuerySerialization: coreHttp.CompositeMapper = {
  serializedName: "QuerySerialization",
  type: {
    name: "Composite",
    className: "QuerySerialization",
    modelProperties: {
      format: {
        serializedName: "Format",
        xmlName: "Format",
        type: {
          name: "Composite",
          className: "QueryFormat"
        }
      }
    }
  }
};

export const QueryFormat: coreHttp.CompositeMapper = {
  serializedName: "QueryFormat",
  type: {
    name: "Composite",
    className: "QueryFormat",
    modelProperties: {
      type: {
        serializedName: "Type",
        xmlName: "Type",
        type: {
          name: "Enum",
          allowedValues: ["delimited", "json", "arrow"]
        }
      },
      delimitedTextConfiguration: {
        serializedName: "DelimitedTextConfiguration",
        xmlName: "DelimitedTextConfiguration",
        type: {
          name: "Composite",
          className: "DelimitedTextConfiguration"
        }
      },
      jsonTextConfiguration: {
        serializedName: "JsonTextConfiguration",
        xmlName: "JsonTextConfiguration",
        type: {
          name: "Composite",
          className: "JsonTextConfiguration"
        }
      },
      arrowConfiguration: {
        serializedName: "ArrowConfiguration",
        xmlName: "ArrowConfiguration",
        type: {
          name: "Composite",
          className: "ArrowConfiguration"
        }
      }
    }
  }
};

export const SignedIdentifier: coreHttp.CompositeMapper = {
  serializedName: "SignedIdentifier",
  xmlName: "SignedIdentifier",
  type: {
    name: "Composite",
    className: "SignedIdentifier",
    modelProperties: {
      id: {
        serializedName: "Id",
        required: true,
        xmlName: "Id",
        type: {
          name: "String"
        }
      },
      accessPolicy: {
        serializedName: "AccessPolicy",
        xmlName: "AccessPolicy",
        type: {
          name: "Composite",
          className: "AccessPolicy"
        }
      }
    }
  }
};

export const StaticWebsite: coreHttp.CompositeMapper = {
  serializedName: "StaticWebsite",
  type: {
    name: "Composite",
    className: "StaticWebsite",
    modelProperties: {
      enabled: {
        serializedName: "Enabled",
        required: true,
        xmlName: "Enabled",
        type: {
          name: "Boolean"
        }
      },
      indexDocument: {
        serializedName: "IndexDocument",
        xmlName: "IndexDocument",
        type: {
          name: "String"
        }
      },
      errorDocument404Path: {
        serializedName: "ErrorDocument404Path",
        xmlName: "ErrorDocument404Path",
        type: {
          name: "String"
        }
      },
      defaultIndexDocumentPath: {
        serializedName: "DefaultIndexDocumentPath",
        xmlName: "DefaultIndexDocumentPath",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const StorageServiceProperties: coreHttp.CompositeMapper = {
  serializedName: "StorageServiceProperties",
  type: {
    name: "Composite",
    className: "StorageServiceProperties",
    modelProperties: {
      logging: {
        serializedName: "Logging",
        xmlName: "Logging",
        type: {
          name: "Composite",
          className: "Logging"
        }
      },
      hourMetrics: {
        serializedName: "HourMetrics",
        xmlName: "HourMetrics",
        type: {
          name: "Composite",
          className: "Metrics"
        }
      },
      minuteMetrics: {
        serializedName: "MinuteMetrics",
        xmlName: "MinuteMetrics",
        type: {
          name: "Composite",
          className: "Metrics"
        }
      },
      cors: {
        serializedName: "Cors",
        xmlName: "Cors",
        xmlIsWrapped: true,
        xmlElementName: "CorsRule",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CorsRule"
            }
          }
        }
      },
      defaultServiceVersion: {
        serializedName: "DefaultServiceVersion",
        xmlName: "DefaultServiceVersion",
        type: {
          name: "String"
        }
      },
      deleteRetentionPolicy: {
        serializedName: "DeleteRetentionPolicy",
        xmlName: "DeleteRetentionPolicy",
        type: {
          name: "Composite",
          className: "RetentionPolicy"
        }
      },
      staticWebsite: {
        serializedName: "StaticWebsite",
        xmlName: "StaticWebsite",
        type: {
          name: "Composite",
          className: "StaticWebsite"
        }
      }
    }
  }
};

export const StorageServiceStats: coreHttp.CompositeMapper = {
  serializedName: "StorageServiceStats",
  type: {
    name: "Composite",
    className: "StorageServiceStats",
    modelProperties: {
      geoReplication: {
        serializedName: "GeoReplication",
        xmlName: "GeoReplication",
        type: {
          name: "Composite",
          className: "GeoReplication"
        }
      }
    }
  }
};

export const BlockBlobUploadHeaders: coreHttp.CompositeMapper = {
  serializedName: "BlockBlob_uploadHeaders",
  type: {
    name: "Composite",
    className: "BlockBlobUploadHeaders",
    modelProperties: {
      eTag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      contentMD5: {
        serializedName: "content-md5",
        xmlName: "content-md5",
        type: {
          name: "ByteArray"
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      versionId: {
        serializedName: "x-ms-version-id",
        xmlName: "x-ms-version-id",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      isServerEncrypted: {
        serializedName: "x-ms-request-server-encrypted",
        xmlName: "x-ms-request-server-encrypted",
        type: {
          name: "Boolean"
        }
      },
      encryptionKeySha256: {
        serializedName: "x-ms-encryption-key-sha256",
        xmlName: "x-ms-encryption-key-sha256",
        type: {
          name: "String"
        }
      },
      encryptionScope: {
        serializedName: "x-ms-encryption-scope",
        xmlName: "x-ms-encryption-scope",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BlockBlobUploadExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "BlockBlob_uploadExceptionHeaders",
  type: {
    name: "Composite",
    className: "BlockBlobUploadExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BlockBlobPutBlobFromUrlHeaders: coreHttp.CompositeMapper = {
  serializedName: "BlockBlob_putBlobFromUrlHeaders",
  type: {
    name: "Composite",
    className: "BlockBlobPutBlobFromUrlHeaders",
    modelProperties: {
      eTag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last-modified",
        xmlName: "last-modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      contentMD5: {
        serializedName: "content-md5",
        xmlName: "content-md5",
        type: {
          name: "ByteArray"
        }
      },
      clientRequestId: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "x-ms-request-id",
        xmlName: "x-ms-request-id",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "x-ms-version",
        xmlName: "x-ms-version",
        type: {
          name: "String"
        }
      },
      versionId: {
        serializedName: "x-ms-version-id",
        xmlName: "x-ms-version-id",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        xmlName: "date",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      isServerEncrypted: {
        serializedName: "x-ms-request-server-encrypted",
        xmlName: "x-ms-request-server-encrypted",
        type: {
          name: "Boolean"
        }
      },
      encryptionKeySha256: {
        serializedName: "x-ms-encryption-key-sha256",
        xmlName: "x-ms-encryption-key-sha256",
        type: {
          name: "String"
        }
      },
      encryptionScope: {
        serializedName: "x-ms-encryption-scope",
        xmlName: "x-ms-encryption-scope",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BlockBlobPutBlobFromUrlExceptionHeaders: coreHttp.CompositeMapper = {
  serializedName: "BlockBlob_putBlobFromUrlExceptionHeaders",
  type: {
    name: "Composite",
    className: "BlockBlobPutBlobFromUrlExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        xmlName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};
