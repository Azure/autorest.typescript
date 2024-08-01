export const Utilities = {
  buildCsvCollection: {
    kind: "function",
    name: "buildCsvCollection",
    location: "utilities.ts"
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
