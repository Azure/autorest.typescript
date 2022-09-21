/** Template type for testing models with optional property. Pass in the type of the property you are looking for */
export interface StringProperty {
  /** Property */
  property?: string;
}

/** Template type for testing models with optional property. Pass in the type of the property you are looking for */
export interface BytesProperty {
  /** Property */
  property?: string;
}

/** Model with a datetime property */
export interface DatetimeProperty {
  /** Property */
  property?: Date | string;
}

/** Model with a duration property */
export interface DurationProperty {
  /** Property */
  property?: Date | string;
}

/** Model with collection bytes properties */
export interface CollectionsByteProperty {
  /** Property */
  property?: string[];
}

/** Model with collection models properties */
export interface CollectionsModelProperty {
  /** Property */
  property?: Array<StringProperty>;
}

/** Model with required and optional properties */
export interface RequiredAndOptionalProperty {
  /** optional string property */
  optionalProperty?: string;
  /** required int property */
  requiredProperty: number;
}
