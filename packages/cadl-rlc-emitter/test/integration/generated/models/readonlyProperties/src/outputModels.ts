/** Output model with readonly properties. */
export interface OutputModelOutput {
  /** Required string, illustrating a readonly reference type property. */
  requiredReadonlyString: string;
  /** Required int, illustrating a readonly value type property. */
  requiredReadonlyInt: number;
  /** Optional string, illustrating a readonly reference type property. */
  optionalReadonlyString?: string;
  /** Optional int, illustrating a readonly value type property. */
  optionalReadonlyInt?: number;
  /** Required readonly model. */
  requiredReadonlyModel: ReadonlyModelOutput;
  /** Optional readonly model. */
  optionalReadonlyModel?: ReadonlyModelOutput;
  /** Required readonly string collection. */
  requiredReadonlyStringList: string[];
  /** Required readonly int collection. */
  requiredReadonlyIntList: number[];
  /** Optional readonly string collection. */
  optionalReadonlyStringList?: string[];
  /** Optional readonly int collection. */
  optionalReadonlyIntList?: number[];
}

/** Readonly model */
export interface ReadonlyModelOutput {
  /** Required string */
  requiredString: string;
}

/** Round-trip model with readonly properties. */
export interface RoundTripModelOutput {
  /** Required string, illustrating a readonly reference type property. */
  requiredReadonlyString: string;
  /** Required int, illustrating a readonly value type property. */
  requiredReadonlyInt: number;
  /** Optional string, illustrating a readonly reference type property. */
  optionalReadonlyString?: string;
  /** Optional int, illustrating a readonly value type property. */
  optionalReadonlyInt?: number;
  /** Required readonly model. */
  requiredReadonlyModel: ReadonlyModelOutput;
  /** Optional readonly model. */
  optionalReadonlyModel?: ReadonlyModelOutput;
  /** Required readonly string collection. */
  requiredReadonlyStringList: string[];
  /** Required readonly int collection. */
  requiredReadonlyIntList: number[];
  /** Optional readonly string collection. */
  optionalReadonlyStringList?: string[];
  /** Optional readonly int collection. */
  optionalReadonlyIntList?: number[];
}
