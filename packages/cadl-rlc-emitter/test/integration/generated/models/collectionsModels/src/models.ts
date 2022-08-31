/** Simple model with model collection properties */
export interface ModelCollectionModel {
  /** Required collection of models. */
  requiredModelCollection: Array<SimpleModel>;
  /** Optional collection of models. */
  optionalModelCollection?: Array<SimpleModel>;
}

/** Simple model that will appear in a collection. */
export interface SimpleModel {
  /** Required string. */
  requiredString: string;
  /** Required int. */
  requiredInt: number;
}
