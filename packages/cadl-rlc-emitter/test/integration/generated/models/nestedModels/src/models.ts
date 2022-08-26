export interface InputModel {
  /** Model to illustrate a nested model that only appears on an input model. */
  NestedInputModel: object;
  /** Model to illustrate a nested model that appears as a nested model on input, output, and round-trip models. */
  NestedSharedModel: object;
}

export interface NestedInputOnlyModel {
  /** Required string, illustrating a reference type property. */
  requiredString: string;
  requiredInt: number;
  requiredStringList: string[];
  requiredIntList: number[];
}

export interface NestedRoundTripSharedModel {
  /** Required string, illustrating a reference type property. */
  requiredString: string;
  requiredInt: number;
  requiredStringList: string[];
  requiredIntList: number[];
}

export interface RoundTripModel {
  /** Model to illustrate a nested model that only appears on a nested model. */
  NestedRoundTripModel: NestedRoundTripOnlyModel;
  /** Model to illustrate a nested model that appears as a nested model on input, output, and round-trip models. */
  NestedSharedModel: NestedRoundTripSharedModel;
}

export interface NestedRoundTripOnlyModel {
  /** Required string, illustrating a reference type property. */
  requiredString: string;
  requiredInt: number;
  requiredStringList: string[];
  requiredIntList: number[];
}
