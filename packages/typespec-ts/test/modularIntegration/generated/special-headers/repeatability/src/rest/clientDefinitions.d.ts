import { ImmediateSuccessParameters } from "./parameters.js";
import { ImmediateSuccess204Response } from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";
export interface ImmediateSuccess {
    post(options: ImmediateSuccessParameters): StreamableMethod<ImmediateSuccess204Response>;
}
export interface Routes {
    (path: "/special-headers/repeatability/immediateSuccess"): ImmediateSuccess;
}
export type RepeatabilityContext = Client & {
    path: Routes;
};
//# sourceMappingURL=clientDefinitions.d.ts.map