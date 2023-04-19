// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Paged } from "@azure/core-paging";
import { ErrorModel } from "@azure-rest/core-client";

/** A widget. */
export interface WidgetOutput {
  /** The widget name. */
  readonly name: string;
  /** The ID of the widget's manufacturer. */
  manufacturerId: string;
  /** The faked shared model. */
  sharedModel?: FakedSharedModelOutput;
}

/** Faked shared model */
export interface FakedSharedModelOutput {
  /** The tag. */
  tag: string;
  /** The created date. */
  createdDate: string;
}

/** Provides status details for long running operations. */
export interface ResourceOperationStatusOutput {
  /** The unique ID of the operation. */
  id: string;
  /**
   * The status of the operation
   *
   * Possible values: InProgress, Succeeded, Failed, Canceled
   */
  status: string;
  /** Error object that describes the error when status is "Failed". */
  error?: ErrorModel;
  /** The result of the operation. */
  result?: WidgetOutput;
}

/** Provides status details for long running operations. */
export interface OperationStatusOutput {
  /** The unique ID of the operation. */
  id: string;
  /**
   * The status of the operation
   *
   * Possible values: InProgress, Succeeded, Failed, Canceled
   */
  status: string;
  /** Error object that describes the error when status is "Failed". */
  error?: ErrorModel;
}

/** Paged collection of Widget items */
export type WidgetListOutput = Paged<WidgetOutput>;
