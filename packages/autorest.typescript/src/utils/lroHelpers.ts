// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export const createLroImports = (useLegacyLro?: boolean) =>
  useLegacyLro
    ? ["PollerLike", "PollOperationState", "LroEngine"]
    : ["SimplePollerLike", "OperationState", "createHttpPoller"];

export function createLroType(inputs: {
  useLegacyLro?: boolean;
  responseName: string;
}): string {
  const { responseName, useLegacyLro } = inputs;
  return useLegacyLro
    ? `Promise<PollerLike<PollOperationState<${responseName}>,${responseName}>>`
    : `Promise<SimplePollerLike<OperationState<${responseName}>,${responseName}>>`;
}
