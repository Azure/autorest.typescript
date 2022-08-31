/** Round-trip model with primitive properties to show serialization and deserialization of each. */
export interface PrimitivePropertyModel {
  requiredString: string;
  requiredBytes: string;
  requiredInt: number;
  requiredLong: number;
  requiredSafeInt: number;
  requiredFloat: number;
  requiredDouble: number;
  requiredBodyDateTime: string;
  requiredDuration: string;
  requiredBoolean: boolean;
}
