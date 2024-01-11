import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter,
} from "@azure/core-client";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/xml",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String",
    },
  },
};

export const url: OperationURLParameter = {
  parameterPath: "url",
  mapper: {
    serializedName: "url",
    required: true,
    xmlName: "url",
    type: {
      name: "String",
    },
  },
  skipEncoding: true,
};

export const comp: OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    defaultValue: "range",
    isConstant: true,
    serializedName: "comp",
    type: {
      name: "String",
    },
  },
};

export const timeout: OperationQueryParameter = {
  parameterPath: ["options", "timeout"],
  mapper: {
    constraints: {
      InclusiveMinimum: 0,
    },
    serializedName: "timeout",
    xmlName: "timeout",
    type: {
      name: "Number",
    },
  },
};

export const range: OperationParameter = {
  parameterPath: "range",
  mapper: {
    serializedName: "x-ms-range",
    required: true,
    xmlName: "x-ms-range",
    type: {
      name: "String",
    },
  },
};

export const copySource: OperationParameter = {
  parameterPath: "copySource",
  mapper: {
    serializedName: "x-ms-copy-source",
    required: true,
    xmlName: "x-ms-copy-source",
    type: {
      name: "String",
    },
  },
};

export const sourceRange: OperationParameter = {
  parameterPath: ["options", "sourceRange"],
  mapper: {
    serializedName: "x-ms-source-range",
    xmlName: "x-ms-source-range",
    type: {
      name: "String",
    },
  },
};

export const fileRangeWriteFromUrl: OperationParameter = {
  parameterPath: "fileRangeWriteFromUrl",
  mapper: {
    defaultValue: "update",
    isConstant: true,
    serializedName: "x-ms-write",
    type: {
      name: "String",
    },
  },
};

export const contentLength: OperationParameter = {
  parameterPath: "contentLength",
  mapper: {
    serializedName: "Content-Length",
    required: true,
    xmlName: "Content-Length",
    type: {
      name: "Number",
    },
  },
};

export const sourceContentCrc64: OperationParameter = {
  parameterPath: ["options", "sourceContentCrc64"],
  mapper: {
    serializedName: "x-ms-source-content-crc64",
    xmlName: "x-ms-source-content-crc64",
    type: {
      name: "ByteArray",
    },
  },
};

export const sourceIfMatchCrc64: OperationParameter = {
  parameterPath: [
    "options",
    "sourceModifiedAccessConditions",
    "sourceIfMatchCrc64",
  ],
  mapper: {
    serializedName: "x-ms-source-if-match-crc64",
    xmlName: "x-ms-source-if-match-crc64",
    type: {
      name: "ByteArray",
    },
  },
};

export const sourceIfNoneMatchCrc64: OperationParameter = {
  parameterPath: [
    "options",
    "sourceModifiedAccessConditions",
    "sourceIfNoneMatchCrc64",
  ],
  mapper: {
    serializedName: "x-ms-source-if-none-match-crc64",
    xmlName: "x-ms-source-if-none-match-crc64",
    type: {
      name: "ByteArray",
    },
  },
};

export const version: OperationParameter = {
  parameterPath: "version",
  mapper: {
    defaultValue: "2020-04-08",
    isConstant: true,
    serializedName: "x-ms-version",
    type: {
      name: "String",
    },
  },
};

export const leaseId: OperationParameter = {
  parameterPath: ["options", "leaseAccessConditions", "leaseId"],
  mapper: {
    serializedName: "x-ms-lease-id",
    xmlName: "x-ms-lease-id",
    type: {
      name: "String",
    },
  },
};
