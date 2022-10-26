export interface PageInfo {
  continuationToken?: string;
}

const pageMap = new WeakMap<object, PageInfo>();
export function getContinuationToken(page: unknown): string | undefined {
  if (typeof page !== "object" || page === null) {
    return undefined;
  }
  return pageMap.get(page)?.continuationToken;
}

export function setContinuationToken(
  page: unknown,
  continuationToken: string | undefined
): void {
  if (typeof page !== "object" || page === null || !continuationToken) {
    return;
  }
  const pageInfo = pageMap.get(page) ?? {};
  pageInfo.continuationToken = continuationToken;
  pageMap.set(page, pageInfo);
}
