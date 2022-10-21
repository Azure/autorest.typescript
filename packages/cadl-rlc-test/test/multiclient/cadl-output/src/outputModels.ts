/** A widget. */
export interface WidgetOutput {
  /** The widget name. */
  name: string;
  /**
   * The widget color.
   *
   * Possible values: Black, White, Red, Green, Blue
   */
  color: string;
  /** The ID of the widget's manufacturer. */
  manufacturerId: string;
  /** The entity tag for this resource. */
  etag: string;
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
  error?: ErrorModelOutput;
  /** The result of the operation. */
  result?: WidgetOutput;
}

/** The error object. */
export interface ErrorModelOutput {
  /** One of a server-defined set of error codes. */
  code: string;
  /** A human-readable representation of the error. */
  message: string;
  /** The target of the error. */
  target?: string;
  /** An array of details about specific errors that led to this reported error. */
  details: Array<ErrorModelOutput>;
  /** An object containing more specific information than the current object about the error. */
  innererror?: InnerErrorOutput;
}

/** An object containing more specific information about the error. As per Microsoft One API guidelines - https://github.com/Microsoft/api-guidelines/blob/vNext/Guidelines.md#7102-error-condition-responses. */
export interface InnerErrorOutput {
  /** One of a server-defined set of error codes. */
  code: string;
  /** Inner error. */
  innererror?: InnerErrorOutput;
}

/** A response containing error details. */
export interface ErrorResponseOutput {
  /** The error object. */
  error: ErrorModelOutput;
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
  error?: ErrorModelOutput;
  /** The result of the operation. */
  result?: never;
}

/** Paged collection of Widget items */
export interface WidgetListOutput {
  /** The Widget items on this page */
  value: Array<WidgetOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** Provides analytics about the use and maintenance of a Widget. */
export interface WidgetAnalyticsOutput {
  /** The identifier for the analytics object.  There is only one named 'current'. */
  id: "current";
  /** The number of uses of the widget. */
  useCount: number;
  /** The number of times the widget was repaired. */
  repairCount: number;
}

/** A submitted repair request for a widget. */
export interface WidgetRepairRequestOutput {
  /**
   * The state of the widget repair request.
   *
   * Possible values: Succeeded, Failed, Canceled, SentToManufacturer
   */
  requestState: string;
  /** The date and time when the repair is scheduled to occur. */
  scheduledDateTime: string;
  /** The date and time when the request was created. */
  createdDateTime: string;
  /** The date and time when the request was updated. */
  updatedDateTime: string;
  /** The date and time when the request was completed. */
  completedDateTime: string;
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
  error?: ErrorModelOutput;
  /** The result of the operation. */
  result?: WidgetRepairRequestOutput;
}

/** A widget's part. */
export interface WidgetPartOutput {
  /** The name of the part. */
  name: string;
  /** The ID to use for reordering the part. */
  partId: string;
  /** The ID of the part's manufacturer. */
  manufacturerId: string;
  /** The entity tag for this resource. */
  etag: string;
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
  error?: ErrorModelOutput;
  /** The result of the operation. */
  result?: WidgetPartOutput;
}

/** Paged collection of WidgetPart items */
export interface WidgetPartListOutput {
  /** The WidgetPart items on this page */
  value: Array<WidgetPartOutput>;
  /** The link to the next page of items */
  nextLink?: string;
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
  error?: ErrorModelOutput;
  /** The result of the operation. */
  result?: AcceptedResponseOutput;
}

export interface AcceptedResponseOutput {}

/** A manufacturer of widgets. */
export interface ManufacturerOutput {
  /** The manufacturer's unique ID. */
  id: string;
  /** The manufacturer's name. */
  name: string;
  /** The manufacturer's full address. */
  address: string;
  /** The entity tag for this resource. */
  etag: string;
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
  error?: ErrorModelOutput;
  /** The result of the operation. */
  result?: ManufacturerOutput;
}

/** Paged collection of Manufacturer items */
export interface ManufacturerListOutput {
  /** The Manufacturer items on this page */
  value: Array<ManufacturerOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}
