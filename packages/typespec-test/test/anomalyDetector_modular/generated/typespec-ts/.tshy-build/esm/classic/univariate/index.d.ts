import { AnomalyDetectorContext } from "../../api/AnomalyDetectorContext.js";
import { UnivariateUnivariateDetectionOptions, UnivariateUnivariateEntireDetectionResult, UnivariateUnivariateLastDetectionResult, UnivariateUnivariateChangePointDetectionOptions, UnivariateUnivariateChangePointDetectionResult } from "../../models/models.js";
import { UnivariateDetectUnivariateEntireSeriesOptions, UnivariateDetectUnivariateLastPointOptions, UnivariateDetectUnivariateChangePointOptions } from "../../models/options.js";
export interface UnivariateOperations {
    detectUnivariateEntireSeries: (options?: UnivariateUnivariateDetectionOptions, options?: UnivariateDetectUnivariateEntireSeriesOptions) => Promise<UnivariateUnivariateEntireDetectionResult>;
    detectUnivariateLastPoint: (options?: UnivariateUnivariateDetectionOptions, options?: UnivariateDetectUnivariateLastPointOptions) => Promise<UnivariateUnivariateLastDetectionResult>;
    detectUnivariateChangePoint: (options?: UnivariateUnivariateChangePointDetectionOptions, options?: UnivariateDetectUnivariateChangePointOptions) => Promise<UnivariateUnivariateChangePointDetectionResult>;
}
export declare function getUnivariate(context: AnomalyDetectorContext): {
    detectUnivariateEntireSeries: (options?: UnivariateUnivariateDetectionOptions, options?: UnivariateDetectUnivariateEntireSeriesOptions) => Promise<UnivariateUnivariateEntireDetectionResult>;
    detectUnivariateLastPoint: (options?: UnivariateUnivariateDetectionOptions, options?: UnivariateDetectUnivariateLastPointOptions) => Promise<UnivariateUnivariateLastDetectionResult>;
    detectUnivariateChangePoint: (options?: UnivariateUnivariateChangePointDetectionOptions, options?: UnivariateDetectUnivariateChangePointOptions) => Promise<UnivariateUnivariateChangePointDetectionResult>;
};
export declare function getUnivariateOperations(context: AnomalyDetectorContext): UnivariateOperations;
//# sourceMappingURL=index.d.ts.map