/** A widget. */
export interface Widget {
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

/** Provides analytics about the use and maintenance of a Widget. */
export interface WidgetAnalytics {
  /** The identifier for the analytics object.  There is only one named 'current'. */
  id: "current";
  /** The number of uses of the widget. */
  useCount: number;
  /** The number of times the widget was repaired. */
  repairCount: number;
}

/** A submitted repair request for a widget. */
export interface WidgetRepairRequest {
  /**
   * The state of the widget repair request.
   *
   * Possible values: Succeeded, Failed, Canceled, SentToManufacturer
   */
  requestState: string;
  /** The date and time when the repair is scheduled to occur. */
  scheduledDateTime: Date | string;
  /** The date and time when the request was created. */
  createdDateTime: Date | string;
  /** The date and time when the request was updated. */
  updatedDateTime: Date | string;
  /** The date and time when the request was completed. */
  completedDateTime: Date | string;
}

/** A widget's part. */
export interface WidgetPart {
  /** The name of the part. */
  name: string;
  /** The ID to use for reordering the part. */
  partId: string;
  /** The ID of the part's manufacturer. */
  manufacturerId: string;
  /** The entity tag for this resource. */
  etag: string;
}

/** The details of a reorder request for a WidgetPart. */
export interface WidgetPartReorderRequest {
  /** Identifies who signed off the reorder request. */
  signedOffBy: string;
}

/** A manufacturer of widgets. */
export interface Manufacturer {
  /** The manufacturer's unique ID. */
  id: string;
  /** The manufacturer's name. */
  name: string;
  /** The manufacturer's full address. */
  address: string;
  /** The entity tag for this resource. */
  etag: string;
}
