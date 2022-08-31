/** Input model with enum properties. */
export interface InputModel {
  /** Represents the days of the week using a standard, non-string enum. */
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
  /** Represents the days of the week using a standard, non-string enum. */
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
