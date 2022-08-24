export interface RoundTripModel {
  /** Required string, illustrating a readonly reference type property. */
  requiredReadonlyString: string;
  requiredReadonlyInt: number;
  /** Optional string, illustrating a readonly reference type property. */
  optionalReadonlyString?: string;
  optionalReadonlyInt?: number;
  /** Readonly model */
  requiredReadonlyModel: object;
  /** Readonly model */
  optionalReadonlyModel?: object;
  requiredReadonlyStringList: array;
  requiredReadonlyIntList: array;
  optionalReadonlyStringList?: array;
  optionalReadonlyIntList?: array;
}
