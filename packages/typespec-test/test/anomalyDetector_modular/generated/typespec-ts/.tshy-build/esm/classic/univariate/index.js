// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { detectUnivariateEntireSeries, detectUnivariateLastPoint, detectUnivariateChangePoint, } from "../../api/univariate/index.js";
export function getUnivariate(context) {
    return {
        detectUnivariateEntireSeries: (options, options) => detectUnivariateEntireSeries(context, options, options),
        detectUnivariateLastPoint: (options, options) => detectUnivariateLastPoint(context, options, options),
        detectUnivariateChangePoint: (options, options) => detectUnivariateChangePoint(context, options, options),
    };
}
export function getUnivariateOperations(context) {
    return {
        ...getUnivariate(context),
    };
}
//# sourceMappingURL=index.js.map