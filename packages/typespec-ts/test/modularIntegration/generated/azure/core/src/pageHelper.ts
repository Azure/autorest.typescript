import { PathUncheckedResponse } from "@azure-rest/core-client";

/**
 * Gets for the value of nextLink in the body
 */
export function getNextLink(
  body: unknown,
  nextLinkName?: string
): string | undefined {
  if (!nextLinkName) {
    return undefined;
  }

  const nextLink = (body as Record<string, unknown>)[nextLinkName];

  if (typeof nextLink !== "string" && typeof nextLink !== "undefined") {
    throw new Error(
      `Body Property ${nextLinkName} should be a string or undefined`
    );
  }

  return nextLink;
}

/**
 * Gets the elements of the current request in the body.
 */
export function getElements<T = unknown>(body: unknown, itemName: string): T[] {
  const value = (body as Record<string, unknown>)[itemName] as T[];

  // value has to be an array according to the x-ms-pageable extension.
  // The fact that this must be an array is used above to calculate the
  // type of elements in the page in PaginateReturn
  if (!Array.isArray(value)) {
    throw new Error(
      `Couldn't paginate response\n Body doesn't contain an array property with name: ${itemName}`
    );
  }

  return value ?? [];
}

export function getPaginationProperties(
  initialResponse: PathUncheckedResponse
) {
  // Build a set with the passed custom nextLinkNames
  const nextLinkNames = new Set(["nextLink"]);

  // Build a set with the passed custom set of itemNames
  const itemNames = new Set(["value", "items"]);

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
      `Couldn't paginate response\n Body doesn't contain an array property with name: ${[
        ...itemNames
      ].join(" OR ")}`
    );
  }

  return { itemName, nextLinkName };
}
