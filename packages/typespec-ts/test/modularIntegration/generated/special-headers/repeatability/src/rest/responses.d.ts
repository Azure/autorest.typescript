import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse } from "@azure-rest/core-client";
export interface ImmediateSuccess204Headers {
    "repeatability-result"?: "accepted" | "rejected";
}
export interface ImmediateSuccess204Response extends HttpResponse {
    status: "204";
    headers: RawHttpHeaders & ImmediateSuccess204Headers;
}
//# sourceMappingURL=responses.d.ts.map