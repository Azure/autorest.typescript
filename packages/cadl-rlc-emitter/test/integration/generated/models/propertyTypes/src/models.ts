/** Model with a boolean property */
export interface BooleanProperty {
  /** Property */
  property: boolean;
}

/** Model with a string property */
export interface StringProperty {
  /** Property */
  property: string;
}

/** Model with a bytes property */
export interface BytesProperty {
  /** Property */
  property: string;
}

/** Model with a int property */
export interface IntProperty {
  /** Property */
  property: number;
}

/** Model with a float property */
export interface FloatProperty {
  /** Property */
  property: number;
}

/** Model with a datetime property */
export interface DatetimeProperty {
  /** Property */
  property: Date | string;
}

/** Model with a duration property */
export interface DurationProperty {
  /** Property */
  property: Date | string;
}

/** Model with enum properties */
export interface EnumProperty {
  /** Property */
  property: "ValueOne" | "ValueTwo";
}

/** Model with extensible enum properties */
export interface ExtensibleEnumProperty {
  /** Property */
  property: "ValueOne" | "ValueTwo";
}

/** Model with model properties */
export interface ModelProperty {
  /** Property */
  property: InnerModel;
}

/** Inner model. Will be a property type for ModelWithModelProperties */
export interface InnerModel {
  /** Required string property */
  property: string;
}

/** Model with collection string properties */
export interface CollectionsStringProperty {
  /** Property */
  property: string[];
}

/** Model with collection int properties */
export interface CollectionsIntProperty {
  /** Property */
  property: number[];
}

/** Model with collection model properties */
export interface CollectionsModelProperty {
  /** Property */
  property: Array<InnerModel>;
}
