export const Utilities = {
  buildCsvCollection: {
    kind: "function",
    name: "buildCsvCollection",
    location: "utilities.ts"
  }
};

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
    kind: "function",
    name: "BuildPagedAsyncIteratorOptions",
    location: "pagingHelpers.ts"
  },
  BuildPagedAsyncIterator: {
    kind: "function",
    name: "buildPagedAsyncIterator",
    location: "pagingHelpers.ts"
  }
};

export const PollingHellpers = {
  GetLongRunningPollerOptions: {
    kind: "interface",
    name: "GetLongRunningPollerOptions",
    location: "pollingHelpers.ts"
  },
  GetLongRunningPoller: {
    kind: "function",
    name: "pollingHelpers.ts"
  }
};
