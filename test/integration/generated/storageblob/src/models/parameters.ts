import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/octet-stream",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const body: OperationParameter = {
  parameterPath: "body",
  mapper: {
    serializedName: "body",
    required: true,
    xmlName: "body",
    type: {
      name: "Stream"
    }
  }
};

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/xml",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const url: OperationURLParameter = {
  parameterPath: "url",
  mapper: {
    serializedName: "url",
    required: true,
    xmlName: "url",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const comp: OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    defaultValue: "page",
    isConstant: true,
    serializedName: "comp",
    type: {
      name: "String"
    }
  }
};

export const pageWrite: OperationParameter = {
  parameterPath: "pageWrite",
  mapper: {
    defaultValue: "update",
    isConstant: true,
    serializedName: "x-ms-page-write",
    type: {
      name: "String"
    }
  }
};

export const contentLength: OperationParameter = {
  parameterPath: "contentLength",
  mapper: {
    serializedName: "Content-Length",
    required: true,
    xmlName: "Content-Length",
    type: {
      name: "Number"
    }
  }
};

export const transactionalContentMD5: OperationParameter = {
  parameterPath: ["options", "transactionalContentMD5"],
  mapper: {
    serializedName: "Content-MD5",
    xmlName: "Content-MD5",
    type: {
      name: "ByteArray"
    }
  }
};

export const transactionalContentCrc64: OperationParameter = {
  parameterPath: ["options", "transactionalContentCrc64"],
  mapper: {
    serializedName: "x-ms-content-crc64",
    xmlName: "x-ms-content-crc64",
    type: {
      name: "ByteArray"
    }
  }
};

export const timeout: OperationQueryParameter = {
  parameterPath: ["options", "timeout"],
  mapper: {
    constraints: {
      InclusiveMinimum: 0
    },
    serializedName: "timeout",
    xmlName: "timeout",
    type: {
      name: "Number"
    }
  }
};

export const range: OperationParameter = {
  parameterPath: ["options", "range"],
  mapper: {
    serializedName: "x-ms-range",
    xmlName: "x-ms-range",
    type: {
      name: "String"
    }
  }
};

export const leaseId: OperationParameter = {
  parameterPath: ["options", "leaseAccessConditions", "leaseId"],
  mapper: {
    serializedName: "x-ms-lease-id",
    xmlName: "x-ms-lease-id",
    type: {
      name: "String"
    }
  }
};

export const encryptionKey: OperationParameter = {
  parameterPath: ["options", "cpkInfo", "encryptionKey"],
  mapper: {
    serializedName: "x-ms-encryption-key",
    xmlName: "x-ms-encryption-key",
    type: {
      name: "String"
    }
  }
};

export const encryptionKeySha256: OperationParameter = {
  parameterPath: ["options", "cpkInfo", "encryptionKeySha256"],
  mapper: {
    serializedName: "x-ms-encryption-key-sha256",
    xmlName: "x-ms-encryption-key-sha256",
    type: {
      name: "String"
    }
  }
};

export const encryptionAlgorithm: OperationParameter = {
  parameterPath: ["options", "cpkInfo", "encryptionAlgorithm"],
  mapper: {
    defaultValue: "AES256",
    isConstant: true,
    serializedName: "x-ms-encryption-algorithm",
    type: {
      name: "String"
    }
  }
};

export const encryptionScope: OperationParameter = {
  parameterPath: ["options", "cpkScopeInfo", "encryptionScope"],
  mapper: {
    serializedName: "x-ms-encryption-scope",
    xmlName: "x-ms-encryption-scope",
    type: {
      name: "String"
    }
  }
};

export const ifSequenceNumberLessThanOrEqualTo: OperationParameter = {
  parameterPath: [
    "options",
    "sequenceNumberAccessConditions",
    "ifSequenceNumberLessThanOrEqualTo"
  ],
  mapper: {
    serializedName: "x-ms-if-sequence-number-le",
    xmlName: "x-ms-if-sequence-number-le",
    type: {
      name: "Number"
    }
  }
};

export const ifSequenceNumberLessThan: OperationParameter = {
  parameterPath: [
    "options",
    "sequenceNumberAccessConditions",
    "ifSequenceNumberLessThan"
  ],
  mapper: {
    serializedName: "x-ms-if-sequence-number-lt",
    xmlName: "x-ms-if-sequence-number-lt",
    type: {
      name: "Number"
    }
  }
};

export const ifSequenceNumberEqualTo: OperationParameter = {
  parameterPath: [
    "options",
    "sequenceNumberAccessConditions",
    "ifSequenceNumberEqualTo"
  ],
  mapper: {
    serializedName: "x-ms-if-sequence-number-eq",
    xmlName: "x-ms-if-sequence-number-eq",
    type: {
      name: "Number"
    }
  }
};

export const ifModifiedSince: OperationParameter = {
  parameterPath: ["options", "modifiedAccessConditions", "ifModifiedSince"],
  mapper: {
    serializedName: "If-Modified-Since",
    xmlName: "If-Modified-Since",
    type: {
      name: "DateTimeRfc1123"
    }
  }
};

export const ifUnmodifiedSince: OperationParameter = {
  parameterPath: ["options", "modifiedAccessConditions", "ifUnmodifiedSince"],
  mapper: {
    serializedName: "If-Unmodified-Since",
    xmlName: "If-Unmodified-Since",
    type: {
      name: "DateTimeRfc1123"
    }
  }
};

export const ifMatch: OperationParameter = {
  parameterPath: ["options", "modifiedAccessConditions", "ifMatch"],
  mapper: {
    serializedName: "If-Match",
    xmlName: "If-Match",
    type: {
      name: "String"
    }
  }
};

export const ifNoneMatch: OperationParameter = {
  parameterPath: ["options", "modifiedAccessConditions", "ifNoneMatch"],
  mapper: {
    serializedName: "If-None-Match",
    xmlName: "If-None-Match",
    type: {
      name: "String"
    }
  }
};

export const ifTags: OperationParameter = {
  parameterPath: ["options", "modifiedAccessConditions", "ifTags"],
  mapper: {
    serializedName: "x-ms-if-tags",
    xmlName: "x-ms-if-tags",
    type: {
      name: "String"
    }
  }
};

export const version: OperationParameter = {
  parameterPath: "version",
  mapper: {
    defaultValue: "2020-06-12",
    isConstant: true,
    serializedName: "x-ms-version",
    type: {
      name: "String"
    }
  }
};

export const requestId: OperationParameter = {
  parameterPath: ["options", "requestId"],
  mapper: {
    serializedName: "x-ms-client-request-id",
    xmlName: "x-ms-client-request-id",
    type: {
      name: "String"
    }
  }
};

export const comp1: OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    defaultValue: "block",
    isConstant: true,
    serializedName: "comp",
    type: {
      name: "String"
    }
  }
};

export const blockId: OperationQueryParameter = {
  parameterPath: "blockId",
  mapper: {
    serializedName: "blockid",
    required: true,
    xmlName: "blockid",
    type: {
      name: "String"
    }
  }
};

export const blobType: OperationParameter = {
  parameterPath: "blobType",
  mapper: {
    defaultValue: "BlockBlob",
    isConstant: true,
    serializedName: "x-ms-blob-type",
    type: {
      name: "String"
    }
  }
};

export const blobContentType: OperationParameter = {
  parameterPath: ["options", "blobHttpHeaders", "blobContentType"],
  mapper: {
    serializedName: "x-ms-blob-content-type",
    xmlName: "x-ms-blob-content-type",
    type: {
      name: "String"
    }
  }
};

export const blobContentEncoding: OperationParameter = {
  parameterPath: ["options", "blobHttpHeaders", "blobContentEncoding"],
  mapper: {
    serializedName: "x-ms-blob-content-encoding",
    xmlName: "x-ms-blob-content-encoding",
    type: {
      name: "String"
    }
  }
};

export const blobContentLanguage: OperationParameter = {
  parameterPath: ["options", "blobHttpHeaders", "blobContentLanguage"],
  mapper: {
    serializedName: "x-ms-blob-content-language",
    xmlName: "x-ms-blob-content-language",
    type: {
      name: "String"
    }
  }
};

export const blobContentMD5: OperationParameter = {
  parameterPath: ["options", "blobHttpHeaders", "blobContentMD5"],
  mapper: {
    serializedName: "x-ms-blob-content-md5",
    xmlName: "x-ms-blob-content-md5",
    type: {
      name: "ByteArray"
    }
  }
};

export const blobCacheControl: OperationParameter = {
  parameterPath: ["options", "blobHttpHeaders", "blobCacheControl"],
  mapper: {
    serializedName: "x-ms-blob-cache-control",
    xmlName: "x-ms-blob-cache-control",
    type: {
      name: "String"
    }
  }
};

export const metadata: OperationParameter = {
  parameterPath: ["options", "metadata"],
  mapper: {
    serializedName: "x-ms-meta",
    xmlName: "x-ms-meta",
    headerCollectionPrefix: "x-ms-meta-",
    type: {
      name: "Dictionary",
      value: { type: { name: "String" } }
    }
  }
};

export const blobContentDisposition: OperationParameter = {
  parameterPath: ["options", "blobHttpHeaders", "blobContentDisposition"],
  mapper: {
    serializedName: "x-ms-blob-content-disposition",
    xmlName: "x-ms-blob-content-disposition",
    type: {
      name: "String"
    }
  }
};

export const tier: OperationParameter = {
  parameterPath: ["options", "tier"],
  mapper: {
    serializedName: "x-ms-access-tier",
    xmlName: "x-ms-access-tier",
    type: {
      name: "String"
    }
  }
};

export const blobTagsString: OperationParameter = {
  parameterPath: ["options", "blobTagsString"],
  mapper: {
    serializedName: "x-ms-tags",
    xmlName: "x-ms-tags",
    type: {
      name: "String"
    }
  }
};

export const accept1: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/xml",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const sourceIfModifiedSince: OperationParameter = {
  parameterPath: [
    "options",
    "sourceModifiedAccessConditions",
    "sourceIfModifiedSince"
  ],
  mapper: {
    serializedName: "x-ms-source-if-modified-since",
    xmlName: "x-ms-source-if-modified-since",
    type: {
      name: "DateTimeRfc1123"
    }
  }
};

export const sourceIfUnmodifiedSince: OperationParameter = {
  parameterPath: [
    "options",
    "sourceModifiedAccessConditions",
    "sourceIfUnmodifiedSince"
  ],
  mapper: {
    serializedName: "x-ms-source-if-unmodified-since",
    xmlName: "x-ms-source-if-unmodified-since",
    type: {
      name: "DateTimeRfc1123"
    }
  }
};

export const sourceIfMatch: OperationParameter = {
  parameterPath: ["options", "sourceModifiedAccessConditions", "sourceIfMatch"],
  mapper: {
    serializedName: "x-ms-source-if-match",
    xmlName: "x-ms-source-if-match",
    type: {
      name: "String"
    }
  }
};

export const sourceIfNoneMatch: OperationParameter = {
  parameterPath: [
    "options",
    "sourceModifiedAccessConditions",
    "sourceIfNoneMatch"
  ],
  mapper: {
    serializedName: "x-ms-source-if-none-match",
    xmlName: "x-ms-source-if-none-match",
    type: {
      name: "String"
    }
  }
};

export const sourceIfTags: OperationParameter = {
  parameterPath: ["options", "sourceModifiedAccessConditions", "sourceIfTags"],
  mapper: {
    serializedName: "x-ms-source-if-tags",
    xmlName: "x-ms-source-if-tags",
    type: {
      name: "String"
    }
  }
};

export const sourceContentMD5: OperationParameter = {
  parameterPath: ["options", "sourceContentMD5"],
  mapper: {
    serializedName: "x-ms-source-content-md5",
    xmlName: "x-ms-source-content-md5",
    type: {
      name: "ByteArray"
    }
  }
};

export const copySource: OperationParameter = {
  parameterPath: "copySource",
  mapper: {
    serializedName: "x-ms-copy-source",
    required: true,
    xmlName: "x-ms-copy-source",
    type: {
      name: "String"
    }
  }
};

export const copySourceBlobProperties: OperationParameter = {
  parameterPath: ["options", "copySourceBlobProperties"],
  mapper: {
    serializedName: "x-ms-copy-source-blob-properties",
    xmlName: "x-ms-copy-source-blob-properties",
    type: {
      name: "Boolean"
    }
  }
};

export const comp2: OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    defaultValue: "appendblock",
    isConstant: true,
    serializedName: "comp",
    type: {
      name: "String"
    }
  }
};

export const maxSize: OperationParameter = {
  parameterPath: ["options", "appendPositionAccessConditions", "maxSize"],
  mapper: {
    serializedName: "x-ms-blob-condition-maxsize",
    xmlName: "x-ms-blob-condition-maxsize",
    type: {
      name: "Number"
    }
  }
};

export const appendPosition: OperationParameter = {
  parameterPath: [
    "options",
    "appendPositionAccessConditions",
    "appendPosition"
  ],
  mapper: {
    serializedName: "x-ms-blob-condition-appendpos",
    xmlName: "x-ms-blob-condition-appendpos",
    type: {
      name: "Number"
    }
  }
};
