// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
const responseMap = {
    "GET /assets": ["200"],
    "POST /assets": ["200"],
    "GET /assets/{assetId}": ["200"],
    "POST /assets/{assetId}:dismissAssetChain": ["200"],
    "POST /assets:export": ["200"],
    "POST /assets/{assetId}:getObservations": ["200"],
    "POST /assets:getDeltaDetails": ["200"],
    "POST /assets:getDeltaSummary": ["200"],
    "GET /dataConnections": ["200"],
    "POST /dataConnections:validate": ["200"],
    "GET /dataConnections/{dataConnectionName}": ["200"],
    "PUT /dataConnections/{dataConnectionName}": ["200"],
    "DELETE /dataConnections/{dataConnectionName}": ["204"],
    "GET /discoGroups": ["200"],
    "POST /discoGroups:validate": ["200"],
    "GET /discoGroups/{groupName}": ["200"],
    "PUT /discoGroups/{groupName}": ["200"],
    "POST /discoGroups/{groupName}:run": ["204"],
    "GET /discoGroups/{groupName}/runs": ["200"],
    "POST /discoGroups:getAssetChainSummary": ["200"],
    "POST /discoGroups:dismissSeedChain": ["200"],
    "GET /discoTemplates": ["200"],
    "GET /discoTemplates/{templateId}": ["200"],
    "POST /reports/assets:getBillable": ["200"],
    "POST /reports/assets:getSnapshot": ["200"],
    "POST /reports/assets:getSummary": ["200"],
    "POST /reports/assets:getSnapshotExport": ["200"],
    "GET /savedFilters": ["200"],
    "GET /savedFilters/{filterName}": ["200"],
    "PUT /savedFilters/{filterName}": ["200"],
    "DELETE /savedFilters/{filterName}": ["204"],
    "GET /tasks": ["200"],
    "GET /tasks/{taskId}": ["200"],
    "POST /tasks/{taskId}:cancel": ["200"],
    "POST /tasks/{taskId}:run": ["200"],
    "POST /tasks/{taskId}:download": ["200"],
    "GET /cisaCves": ["200"],
    "GET /cisaCves/{cveId}": ["200"],
};
export function isUnexpected(response) {
    const lroOriginal = response.headers["x-ms-original-url"];
    const url = new URL(lroOriginal ?? response.request.url);
    const method = response.request.method;
    let pathDetails = responseMap[`${method} ${url.pathname}`];
    if (!pathDetails) {
        pathDetails = getParametrizedPathSuccess(method, url.pathname);
    }
    return !pathDetails.includes(response.status);
}
function getParametrizedPathSuccess(method, path) {
    const pathParts = path.split("/");
    // Traverse list to match the longest candidate
    // matchedLen: the length of candidate path
    // matchedValue: the matched status code array
    let matchedLen = -1, matchedValue = [];
    // Iterate the responseMap to find a match
    for (const [key, value] of Object.entries(responseMap)) {
        // Extracting the path from the map key which is in format
        // GET /path/foo
        if (!key.startsWith(method)) {
            continue;
        }
        const candidatePath = getPathFromMapKey(key);
        // Get each part of the url path
        const candidateParts = candidatePath.split("/");
        // track if we have found a match to return the values found.
        let found = true;
        for (let i = candidateParts.length - 1, j = pathParts.length - 1; i >= 1 && j >= 1; i--, j--) {
            if (candidateParts[i]?.startsWith("{") &&
                candidateParts[i]?.indexOf("}") !== -1) {
                const start = candidateParts[i].indexOf("}") + 1, end = candidateParts[i]?.length;
                // If the current part of the candidate is a "template" part
                // Try to use the suffix of pattern to match the path
                // {guid} ==> $
                // {guid}:export ==> :export$
                const isMatched = new RegExp(`${candidateParts[i]?.slice(start, end)}`).test(pathParts[j] || "");
                if (!isMatched) {
                    found = false;
                    break;
                }
                continue;
            }
            // If the candidate part is not a template and
            // the parts don't match mark the candidate as not found
            // to move on with the next candidate path.
            if (candidateParts[i] !== pathParts[j]) {
                found = false;
                break;
            }
        }
        // We finished evaluating the current candidate parts
        // Update the matched value if and only if we found the longer pattern
        if (found && candidatePath.length > matchedLen) {
            matchedLen = candidatePath.length;
            matchedValue = value;
        }
    }
    return matchedValue;
}
function getPathFromMapKey(mapKey) {
    const pathStart = mapKey.indexOf("/");
    return mapKey.slice(pathStart);
}
//# sourceMappingURL=isUnexpected.js.map