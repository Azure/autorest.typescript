// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  Test,
  TestFileInfo,
  testFileInfoArrayDeserializer,
  testArrayDeserializer,
  TestRun,
  testRunArrayDeserializer,
  TestProfile,
  testProfileArrayDeserializer,
  TestProfileRun,
  testProfileRunArrayDeserializer,
} from "./microsoft/loadTestService/models.js";

/** Paged collection of TestFileInfo items */
export interface _PagedTestFileInfo {
  /** The TestFileInfo items on this page */
  value: TestFileInfo[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _pagedTestFileInfoDeserializer(item: any): _PagedTestFileInfo {
  return {
    value: testFileInfoArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

/** Paged collection of Test items */
export interface _PagedTest {
  /** The Test items on this page */
  value: Test[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _pagedTestDeserializer(item: any): _PagedTest {
  return {
    value: testArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

/** Paged collection of TestRun items */
export interface _PagedTestRun {
  /** The TestRun items on this page */
  value: TestRun[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _pagedTestRunDeserializer(item: any): _PagedTestRun {
  return {
    value: testRunArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

/** Paged collection of TestProfile items */
export interface _PagedTestProfile {
  /** The TestProfile items on this page */
  value: TestProfile[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _pagedTestProfileDeserializer(item: any): _PagedTestProfile {
  return {
    value: testProfileArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

/** Paged collection of TestProfileRun items */
export interface _PagedTestProfileRun {
  /** The TestProfileRun items on this page */
  value: TestProfileRun[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _pagedTestProfileRunDeserializer(
  item: any,
): _PagedTestProfileRun {
  return {
    value: testProfileRunArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}
