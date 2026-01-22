export const SerializationHelpers = {
  buildMultiCollection: {
    kind: "function",
    name: "buildMultiCollection",
    location: "serialization/build-multi-collection.ts"
  },
  buildCsvCollection: {
    kind: "function",
    name: "buildCsvCollection",
    location: "serialization/build-csv-collection.ts"
  },
  buildPipeCollection: {
    kind: "function",
    name: "buildPipeCollection",
    location: "serialization/build-pipe-collection.ts"
  },
  buildSsvCollection: {
    kind: "function",
    name: "buildSsvCollection",
    location: "serialization/build-ssv-collection.ts"
  },
  buildTsvCollection: {
    kind: "function",
    name: "buildTsvCollection",
    location: "serialization/build-tsv-collection.ts"
  },
  buildNewlineCollection: {
    kind: "function",
    name: "buildNewlineCollection",
    location: "serialization/build-newline-collection.ts"
  },
  parseCsvCollection: {
    kind: "function",
    name: "parseCsvCollection",
    location: "serialization/parse-csv-collection.ts"
  },
  parsePipeCollection: {
    kind: "function",
    name: "parsePipeCollection",
    location: "serialization/parse-pipe-collection.ts"
  },
  parseSsvCollection: {
    kind: "function",
    name: "parseSsvCollection",
    location: "serialization/parse-ssv-collection.ts"
  },
  parseNewlineCollection: {
    kind: "function",
    name: "parseNewlineCollection",
    location: "serialization/parse-newline-collection.ts"
  },
  serializeRecord: {
    kind: "function",
    name: "serializeRecord",
    location: "serialization/serialize-record.ts"
  },
  getBinaryResponse: {
    kind: "function",
    name: "getBinaryResponse",
    location: "serialization/get-binary-response.ts"
  },
  areAllPropsUndefined: {
    kind: "function",
    name: "areAllPropsUndefined",
    location: "serialization/check-prop-undefined.ts"
  }
} as const;

export const PagingHelpers = {
  PageSettings: {
    kind: "interface",
    name: "PageSettings",
    location: "pagingHelpers.ts"
  },
  ContinuablePage: {
    kind: "typeAlias",
    name: "ContinuablePage",
    location: "pagingHelpers.ts"
  },
  PagedAsyncIterableIterator: {
    kind: "interface",
    name: "PagedAsyncIterableIterator",
    location: "pagingHelpers.ts"
  },
  PagedResult: {
    kind: "interface",
    name: "PagedResult",
    location: "pagingHelpers.ts"
  },
  BuildPagedAsyncIteratorOptions: {
    kind: "interface",
    name: "BuildPagedAsyncIteratorOptions",
    location: "pagingHelpers.ts"
  },
  BuildPagedAsyncIterator: {
    kind: "function",
    name: "buildPagedAsyncIterator",
    location: "pagingHelpers.ts"
  }
} as const;

export const PollingHelpers = {
  GetLongRunningPollerOptions: {
    kind: "interface",
    name: "GetLongRunningPollerOptions",
    location: "pollingHelpers.ts"
  },
  GetLongRunningPoller: {
    kind: "function",
    name: "getLongRunningPoller",
    location: "pollingHelpers.ts"
  }
} as const;

export const SimplePollerHelpers = {
  SimplePollerLike: {
    kind: "interface",
    name: "SimplePollerLike",
    location: "simplePollerHelpers.ts"
  },
  getSimplePoller: {
    kind: "function",
    name: "getSimplePoller",
    location: "simplePollerHelpers.ts"
  }
} as const;

export const UrlTemplateHelpers = {
  parseTemplate: {
    kind: "function",
    name: "expandUrlTemplate",
    location: "urlTemplate.ts"
  }
} as const;
export const MultipartHelpers = {
  FileContents: {
    kind: "typeAlias",
    name: "FileContents",
    location: "multipartHelpers.ts"
  },
  createFilePartDescriptor: {
    kind: "function",
    name: "createFilePartDescriptor",
    location: "multipartHelpers.ts"
  }
} as const;

export const CloudSettingHelpers = {
  AzureClouds: {
    kind: "enum",
    name: "AzureClouds",
    location: "cloudSettingHelpers.ts"
  },
  AzureSupportedClouds: {
    kind: "typeAlias",
    name: "AzureSupportedClouds",
    location: "cloudSettingHelpers.ts"
  },
  getArmEndpoint: {
    kind: "function",
    name: "getArmEndpoint",
    location: "cloudSettingHelpers.ts"
  }
} as const;

export const XmlHelpers = {
  XmlSerializationOptions: {
    kind: "interface",
    name: "XmlSerializationOptions",
    location: "serialization/xml-helpers.ts"
  },
  XmlPropertyMetadata: {
    kind: "interface",
    name: "XmlPropertyMetadata",
    location: "serialization/xml-helpers.ts"
  },
  XmlPropertyDeserializeMetadata: {
    kind: "interface",
    name: "XmlPropertyDeserializeMetadata",
    location: "serialization/xml-helpers.ts"
  },
  serializeModelToXml: {
    kind: "function",
    name: "serializeModelToXml",
    location: "serialization/xml-helpers.ts"
  },
  serializeToXml: {
    kind: "function",
    name: "serializeToXml",
    location: "serialization/xml-helpers.ts"
  },
  xmlObjectToString: {
    kind: "function",
    name: "xmlObjectToString",
    location: "serialization/xml-helpers.ts"
  },
  parseXmlString: {
    kind: "function",
    name: "parseXmlString",
    location: "serialization/xml-helpers.ts"
  },
  deserializeXmlToModel: {
    kind: "function",
    name: "deserializeXmlToModel",
    location: "serialization/xml-helpers.ts"
  },
  deserializeFromXml: {
    kind: "function",
    name: "deserializeFromXml",
    location: "serialization/xml-helpers.ts"
  },
  isXmlContentType: {
    kind: "function",
    name: "isXmlContentType",
    location: "serialization/xml-helpers.ts"
  },
  isJsonContentType: {
    kind: "function",
    name: "isJsonContentType",
    location: "serialization/xml-helpers.ts"
  }
} as const;
