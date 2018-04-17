// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

export function timeoutPromise(timeoutMs: number): Promise<void> {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject(new Error(`Exceeded timeout of ${timeoutMs} milliseconds.`));
    }, timeoutMs);
  });
}
