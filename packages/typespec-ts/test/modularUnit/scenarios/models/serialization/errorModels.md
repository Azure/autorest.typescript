# only: not generate error models in MPG if it is not referenced

## TypeSpec

This is tsp definition.

```tsp
model TodoItem {
  name: string;
}
model TodoPage {
  /** The items in the page */
  @pageItems items: TodoItem[];

  pagination: {
    /** The number of items returned in this page */
    pageSize: int32;

    /** The total number of items */
    totalSize: int32;

    ...PaginationControls;

    /** A link to the previous page, if it exists */
    prevLink?: url;

    /** A link to the next page, if it exists */
    nextLink?: url;
  };
}

@error
model ApiError {
  /** A machine readable error code */
  code: string;

  /** A human readable message */
  message: string;
}

/**
 * Something is wrong with you.
 */
model Standard4XXResponse extends ApiError {
  @minValue(400)
  @maxValue(499)
  @statusCode
  statusCode: int32;
}

/**
 * Something is wrong with me.
 */
model Standard5XXResponse extends ApiError {
  @minValue(500)
  @maxValue(599)
  @statusCode
  statusCode: int32;
}
alias WithStandardErrors<T> = T | Standard4XXResponse | Standard5XXResponse;
model PaginationControls {
  /** The limit to the number of items */
  @query limit?: int32 = 50;

  /** The offset to start paginating at */
  @query offset?: int32 = 0;
}
@list op list(...PaginationControls): WithStandardErrors<TodoPage>;
```

## Provide generated models and its serializer

Generated Models.

```ts models
/** model interface TodoPage */
export interface TodoPage {
  /** The items in the page */
  items: TodoItem[];
  pagination: {
    pageSize: number;
    totalSize: number;
    limit?: number;
    offset?: number;
    prevLink?: string;
    nextLink?: string;
  };
}

export function todoPageDeserializer(item: any): TodoPage {
  return {
    items: todoItemArrayDeserializer(item["items"]),
    pagination: _todoPagePaginationDeserializer(item["pagination"]),
  };
}

export function todoItemArrayDeserializer(result: Array<TodoItem>): any[] {
  return result.map((item) => {
    return todoItemDeserializer(item);
  });
}

/** model interface TodoItem */
export interface TodoItem {
  name: string;
}

export function todoItemDeserializer(item: any): TodoItem {
  return {
    name: item["name"],
  };
}

/** model interface _TodoPagePagination */
export interface _TodoPagePagination {
  /** The number of items returned in this page */
  pageSize: number;
  /** The total number of items */
  totalSize: number;
  /** A link to the previous page, if it exists */
  prevLink?: string;
  /** A link to the next page, if it exists */
  nextLink?: string;
}

export function _todoPagePaginationDeserializer(
  item: any,
): _TodoPagePagination {
  return {
    pageSize: item["pageSize"],
    totalSize: item["totalSize"],
    prevLink: item["prevLink"],
    nextLink: item["nextLink"],
  };
}

/** Something is wrong with you. */
export interface Standard4XXResponse extends ApiError {}

export function standard4XXResponseDeserializer(
  item: any,
): Standard4XXResponse {
  return {
    code: item["code"],
    message: item["message"],
  };
}

/** model interface ApiError */
export interface ApiError {
  /** A machine readable error code */
  code: string;
  /** A human readable message */
  message: string;
}

export function apiErrorDeserializer(item: any): ApiError {
  return {
    code: item["code"],
    message: item["message"],
  };
}

/** Something is wrong with me. */
export interface Standard5XXResponse extends ApiError {}

export function standard5XXResponseDeserializer(
  item: any,
): Standard5XXResponse {
  return {
    code: item["code"],
    message: item["message"],
  };
}
```
