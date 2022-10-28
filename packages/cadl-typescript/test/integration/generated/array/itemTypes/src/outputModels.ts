/** Array inner model */
export interface InnerModelOutput {
  /** Required string property */
  property: string;
  children?: Array<InnerModelOutput>;
}

