/** Readonly model */
export interface ReadonlyModel {
  /** Required string */
  requiredString: string;
}

/** Round-trip model with readonly properties. */
export interface RoundTripModel {
  /** Required string, illustrating a readonly reference type property. */
  requiredReadonlyString: string;
  requiredReadonlyInt: number;
  /** Optional string, illustrating a readonly reference type property. */
  optionalReadonlyString?: string;
  optionalReadonlyInt?: number;
  /** Readonly model */
  requiredReadonlyModel: ReadonlyModel;
  /** Readonly model */
  optionalReadonlyModel?: ReadonlyModel;
  requiredReadonlyStringList: string[];
  requiredReadonlyIntList: number[];
  optionalReadonlyStringList?: string[];
  optionalReadonlyIntList?: number[];
}
