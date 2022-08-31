/** Input model with enum properties. */
export interface InputModel {
  /** Required standard enum value. */
  Day:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";
  /** Required string enum value. */
  Language: "English" | "Spanish" | "Mandarin" | "Undocumented";
}

/** Round-trip model with enum properties */
export interface RoundTripModel {
  /** Required standard enum value. */
  Day:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";
  /** Required string enum value. */
  Language: "English" | "Spanish" | "Mandarin" | "Undocumented";
}
