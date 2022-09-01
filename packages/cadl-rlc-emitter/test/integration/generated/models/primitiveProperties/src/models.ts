/** Round-trip model with primitive properties to show serialization and deserialization of each. */
export interface PrimitivePropertyModel {
  requiredString: string;
  requiredBytes: string;
  requiredInt: number;
  requiredLong: number;
  requiredSafeInt: number;
  requiredFloat: number;
  requiredDouble: number;
  /** Illustrate a zonedDateTime body parameter, serialized as (https://datatracker.ietf.org/doc/html/rfc3339) */
  requiredBodyDateTime: Date | string;
  requiredDuration: string;
  requiredBoolean: boolean;
}
