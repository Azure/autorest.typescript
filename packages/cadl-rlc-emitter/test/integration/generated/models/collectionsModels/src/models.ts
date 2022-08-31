/** Simple model with model collection properties */
export interface ModelCollectionModel {
  requiredModelCollection: Array<SimpleModel>;
  optionalModelCollection?: Array<SimpleModel>;
}

/** Simple model that will appear in a collection. */
export interface SimpleModel {
  /** Required string. */
  requiredString: string;
  requiredInt: number;
}
