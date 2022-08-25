export interface ModelCollectionModel {
  requiredModelCollection: Array<SimpleModel>;
  optionalModelCollection?: Array<SimpleModel>;
}

export interface SimpleModel {
  /** Required string. */
  requiredString: string;
  requiredInt: number;
}
