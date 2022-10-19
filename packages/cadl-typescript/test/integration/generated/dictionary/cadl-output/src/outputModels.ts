/** Dictionary inner model */
export interface InnerModelOutput {
  /** Required string property */
  property: string;
  children?: Record<string, InnerModelOutput>;
}
