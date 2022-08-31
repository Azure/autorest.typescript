/** Input model with nested model properties. */
export interface InputModel {
  /** Model to illustrate a nested model that only appears on an input model. */
  NestedInputModel: object;
  /** Model to illustrate a nested model that appears as a nested model on input, output, and round-trip models. */
  NestedSharedModel: object;
}

/** Model to illustrate a nested model that only appears on an input model. */
export interface NestedInputOnlyModel {
  /** Required string, illustrating a reference type property. */
  requiredString: string;
  requiredInt: number;
  requiredStringList: string[];
  requiredIntList: number[];
}

/** Model to illustrate a nested model that appears as a nested model on input, output, and round-trip models. */
export interface NestedRoundTripSharedModel {
  /** Required string, illustrating a reference type property. */
  requiredString: string;
  requiredInt: number;
  requiredStringList: string[];
  requiredIntList: number[];
}

/** Round-trip model with nested model properties */
export interface RoundTripModel {
  /** Model to illustrate a nested model that only appears on a nested model. */
  NestedRoundTripModel: NestedRoundTripOnlyModel;
  /** Model to illustrate a nested model that appears as a nested model on input, output, and round-trip models. */
  NestedSharedModel: NestedRoundTripSharedModel;
}

/** Model to illustrate a nested model that only appears on a nested model. */
export interface NestedRoundTripOnlyModel {
  /** Required string, illustrating a reference type property. */
  requiredString: string;
  requiredInt: number;
  requiredStringList: string[];
  requiredIntList: number[];
}
