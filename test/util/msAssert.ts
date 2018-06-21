// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

import * as assert from "assert";

/**
 * Assert that the provided asyncFunction will throw an error. If an errorChecker function is
 * provided, then the thrown error must pass the assertions/validations in the errorChecker
 * function.
 * @param asyncFunction The async function to run.
 * @param errorChecker The optional function to use to validate the thrown error.
 */
export async function throwsAsync<T>(asyncFunction: (() => Promise<T>) | Promise<T>, errorChecker?: (error: Error) => void): Promise<Error> {
  let thrownError: Error | undefined;
  try {
    await (typeof asyncFunction === "function" ? asyncFunction() : asyncFunction);
  } catch (error) {
    thrownError = error;
  }

  if (!thrownError) {
    // Throw the default assertion error when an error was not thrown.
    assert.throws(() => { });
  } else if (errorChecker) {
    errorChecker(thrownError);
  }

  return thrownError;
}