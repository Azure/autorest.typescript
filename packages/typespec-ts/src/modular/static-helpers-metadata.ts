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

export const UriTemplateHelpers = {
  parseTemplate: {
    kind: "function",
    name: "expandUrlTemplate",
    location: "urlTemplate.ts"
  }
} as const;
