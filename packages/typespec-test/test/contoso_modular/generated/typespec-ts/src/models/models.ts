// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ErrorModel } from "@azure-rest/core-client";

/** A widget. */
export interface Widget {
  /** The widget name. */
  readonly name: string;
  /** The ID of the widget's manufacturer. */
  manufacturerId: string;
  /** The faked shared model. */
  sharedModel?: FakedSharedModel;
}

/** Faked shared model */
export interface FakedSharedModel {
  /** The tag. */
  tag: string;
  /** The created date. */
  createdDate: Date;
}

/** Provides status details for long running operations. */
export interface ResourceOperationStatus {
  /** The unique ID of the operation. */
  id: string;
  /** The status of the operation */
  status: OperationState;
  /** Error object that describes the error when status is "Failed". */
  error?: ErrorModel;
  /** The result of the operation. */
  result?: Widget;
}

/** Enum describing allowed operation states. */
/** "NotStarted", "Running", "Succeeded", "Failed", "Canceled" */
export type OperationState = string;

export interface OperationStatus {
  /** The unique ID of the operation. */
  id: string;
  /** The status of the operation */
  status: OperationState;
  /** Error object that describes the error when status is "Failed". */
  error?: ErrorModel;
}

/** Paged collection of Widget items */
export interface PagedWidget {
  /** The Widget items on this page */
  value: Widget[];
  /** The link to the next page of items */
  readonly nextLink?: string;
}
