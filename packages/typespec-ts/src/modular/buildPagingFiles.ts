import path from "path";
import { Client, ModularCodeModel } from "./modularCodeModel.js";
import {
  hasPagingOperation,
  isPagingOperation
} from "./helpers/operationHelpers.js";

export async function buildPagingTypes(
  codeModel: ModularCodeModel,
  client: Client
) {
  if (!hasPagingOperation(client)) {
    return;
  }
  const filePath = path.join(
    codeModel.modularOptions.sourceRoot,
    client.subfolder ?? "",
    `models/pagingTypes.ts`
  );
  const fileContent = codeModel.project.createSourceFile(filePath, undefined, {
    overwrite: true
  });
  fileContent.addStatements([
    `
    export interface PageSettings {
      /**
       * The token that keeps track of where to continue the iterator
       */
      continuationToken?: string;
    }
    
    /**
     * An interface that allows async iterable iteration both to completion and by page.
     */
    export interface PagedAsyncIterableIterator<
      TElement,
      TPage = TElement[],
      TPageSettings = PageSettings
    > {
      /**
       * The next method, part of the iteration protocol
       */
      next(): Promise<IteratorResult<TElement>>;
      /**
       * The connection to the async iterator, part of the iteration protocol
       */
      [Symbol.asyncIterator](): PagedAsyncIterableIterator<TElement>;
      /**
       * Return an AsyncIterableIterator that works a page at a time
       */
      byPage: (
        settings?: TPageSettings
      ) => AsyncIterableIterator<TPage & { continuationToken?: string }>;
    }
    `
  ]);

  return fileContent;
}

export async function buildPagingHelpers(
  codeModel: ModularCodeModel,
  client: Client
) {
  const pagingOperstions = client.operationGroups
    .flatMap((op) => op.operations)
    .filter(isPagingOperation);
  if (!pagingOperstions || pagingOperstions.length === 0) {
    return;
  }
  // prepare custom nextLinkNames and itemNames
  const nextLinkNames = new Set(["nextLink"]);
  const itemNames = new Set(["value", "items"]);
  for (const op of pagingOperstions) {
    if (op.continuationTokenName) {
      nextLinkNames.add(op.continuationTokenName);
    }
    if (op.itemName) {
      itemNames.add(op.itemName);
    }
  }
  const nextLinkNamesStr = [...nextLinkNames]
    .map((name) => `"${name}"`)
    .join(", ");
  const itemNamesStr = [...itemNames].map((name) => `"${name}"`).join(", ");
  const pagingTypesPath = `../models/pagingTypes.js`;
  const filePath = path.join(
    codeModel.modularOptions.sourceRoot,
    client.subfolder ?? "",
    `api/pagingHelpers.ts`
  );

  const fileContent = codeModel.project.createSourceFile(filePath, undefined, {
    overwrite: true
  });

  fileContent.addStatements([
    `
    import {
      getPagedAsyncIterator,
      PagedAsyncIterableIterator as CorePagedAsyncIterableIterator,
      PagedResult,
      PageSettings as CorePageSettings
    } from "@azure/core-paging";
    import {
      Client,
      createRestError,
      PathUncheckedResponse
    } from "@azure-rest/core-client";
    import { PageSettings, PagedAsyncIterableIterator } from "${pagingTypesPath}";
    
    export interface PageInfo {
      continuationToken?: string;
    }
    
    /**
     * Helper type to extract the type of an array
     */
    export type GetArrayType<T> = T extends Array<infer TData> ? TData : never;
    
    /**
     * Helper type to infer the Type of the paged elements from the response type
     * This type is generated based on the swagger information for x-ms-pageable
     * specifically on the itemName property which indicates the property of the response
     * where the page items are found. The default value is \`value\`.
     * This type will allow us to provide strongly typed Iterator based on the response we get as second parameter
     */
    export type PaginateReturn<TResult> = TResult extends
      | {
          body: { value?: infer TPage };
        }
      | {
          body: { items?: infer TPage };
        }
      ? GetArrayType<TPage>
      : Array<unknown>;
    
    export function buildPagedAsyncIterator<
      TElement,
      TResponse extends PathUncheckedResponse = PathUncheckedResponse
    >(
      client: Client,
      initialSendFunction: (...args: any[]) => PromiseLike<TResponse>,
      deserializeFunction: (result: TResponse) => Promise<unknown>,
      sendFunctionArgs: any[] = []
    ): PagedAsyncIterableIterator<TElement> {
      let firstRun = true;
      let itemName: string, nextLinkName: string | undefined;
      const firstPageLinkPlaceholder = "";
      const pagedResult: PagedResult<TElement[]> = {
        firstPageLink: firstPageLinkPlaceholder,
        getPage: async (pageLink: string) => {
          const result =
            firstRun && pageLink === firstPageLinkPlaceholder
              ? await initialSendFunction(...sendFunctionArgs)
              : await client.pathUnchecked(pageLink).get();
          if (firstRun) {
            const pageInfo = getPaginationProperties(result);
            itemName = pageInfo.itemName;
            nextLinkName = pageInfo.nextLinkName;
          }
          firstRun = false;
          checkPagingRequest(result);
          const results = await deserializeFunction(result as TResponse);
          const nextLink = getNextLink(results, nextLinkName);
          const values = getElements<TElement>(results, itemName);
          return {
            page: values,
            nextPageLink: nextLink
          };
        },
        byPage: (settings?: PageSettings) => {
          const { continuationToken } = settings ?? {};
          return getPageAsyncIterator(pagedResult, {
            pageLink: continuationToken
          }) as any;
        }
      };
      const iter: CorePagedAsyncIterableIterator<TElement> =
        getPagedAsyncIterator(pagedResult);
    
      return {
        next() {
          return iter.next();
        },
        [Symbol.asyncIterator]() {
          return this;
        },
        byPage: (settings?: PageSettings) => {
          return iter.byPage(
            settings as CorePageSettings
          ) as unknown as AsyncIterableIterator<
            TElement[] & { continuationToken?: string }
          >;
        }
      };
    }
    
    async function* getPageAsyncIterator<TPage>(
      pagedResult: PagedResult<TPage>,
      options: {
        pageLink?: string;
      } = {}
    ): AsyncIterableIterator<TPage & { continuationToken?: string }> {
      const { pageLink } = options;
      let response = await pagedResult.getPage(
        pageLink ?? pagedResult.firstPageLink
      );
      if (!response) {
        return;
      }
      (response.page as any).continuationToken = response.nextPageLink;
      yield response.page as any;
      while (response.nextPageLink) {
        response = await pagedResult.getPage(response.nextPageLink);
        if (!response) {
          return;
        }
        (response.page as any).continuationToken = response.nextPageLink;
        yield response.page as any;
      }
    }
    
    /**
     * Gets for the value of nextLink in the body
     */
    function getNextLink(body: unknown, nextLinkName?: string): string | undefined {
      if (!nextLinkName) {
        return undefined;
      }
    
      const nextLink = (body as Record<string, unknown>)[nextLinkName];
    
      if (typeof nextLink !== "string" && typeof nextLink !== "undefined") {
        throw new Error(
          \`Body Property \${nextLinkName} should be a string or undefined\`
        );
      }
    
      return nextLink;
    }
    
    /**
     * Gets the elements of the current request in the body.
     */
    function getElements<T = unknown>(body: unknown, itemName: string): T[] {
      const value = (body as Record<string, unknown>)[itemName] as T[];
    
      // value has to be an array according to the x-ms-pageable extension.
      // The fact that this must be an array is used above to calculate the
      // type of elements in the page in PaginateReturn
      if (!Array.isArray(value)) {
        throw new Error(
          \`Couldn't paginate response\n Body doesn't contain an array property with name: \${itemName}\`
        );
      }
    
      return value ?? [];
    }
    
    /**
     * Checks if a request failed
     */
    function checkPagingRequest(response: PathUncheckedResponse): void {
      const Http2xxStatusCodes = [
        "200",
        "201",
        "202",
        "203",
        "204",
        "205",
        "206",
        "207",
        "208",
        "226"
      ];
      if (!Http2xxStatusCodes.includes(response.status)) {
        throw createRestError(
          \`Pagination failed with unexpected statusCode \${response.status}\`,
          response
        );
      }
    }
    
    /**
     * Extracts the itemName and nextLinkName from the initial response to use them for pagination
     */
    function getPaginationProperties(initialResponse: PathUncheckedResponse) {
      // Build a set with the passed custom nextLinkNames
      const nextLinkNames = new Set([${nextLinkNamesStr}]);
    
      // Build a set with the passed custom set of itemNames
      const itemNames = new Set([${itemNamesStr}]);
    
      let nextLinkName: string | undefined;
      let itemName: string | undefined;
    
      for (const name of nextLinkNames) {
        const nextLink = (initialResponse.body as Record<string, unknown>)[
          name
        ] as string;
        if (nextLink) {
          nextLinkName = name;
          break;
        }
      }
    
      for (const name of itemNames) {
        const item = (initialResponse.body as Record<string, unknown>)[
          name
        ] as string;
        if (item) {
          itemName = name;
          break;
        }
      }
    
      if (!itemName) {
        throw new Error(
          \`Couldn't paginate response\n Body doesn't contain an array property with name: \${[
            ...itemNames
          ].join(" OR ")}\`
        );
      }
    
      return { itemName, nextLinkName };
    }
    `
  ]);
}
