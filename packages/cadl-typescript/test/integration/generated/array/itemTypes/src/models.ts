/** Array inner model */
export interface InnerModel {
  /** Required string property */
  property: string;
  children?: Array<InnerModel>;
}
