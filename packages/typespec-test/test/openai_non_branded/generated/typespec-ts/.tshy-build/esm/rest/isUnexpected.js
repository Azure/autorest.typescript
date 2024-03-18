// Licensed under the MIT license.
const responseMap = {
    "POST /audio/transcriptions": ["200"],
    "POST /audio/translations": ["200"],
    "POST /chat/completions": ["200"],
    "POST /fine_tuning/jobs": ["200"],
    "GET /fine_tuning/jobs": ["200"],
    "GET /fine_tuning/jobs/{fine_tuning_job_id}": ["200"],
    "GET /fine_tuning/jobs/{fine_tuning_job_id}/events": ["200"],
    "POST /fine_tuning/jobs/{fine_tuning_job_id}/cancel": ["200"],
    "POST /completions": ["200"],
    "POST /edits": ["200"],
    "POST /embeddings": ["200"],
    "GET /files": ["200"],
    "POST /files": ["200"],
    "POST /files/files/{file_id}": ["200"],
    "DELETE /files/files/{file_id}": ["200"],
    "GET /files/files/{file_id}/content": ["200"],
    "POST /fine-tunes": ["200"],
    "GET /fine-tunes": ["200"],
    "GET /fine-tunes/{fine_tune_id}": ["200"],
    "GET /fine-tunes/{fine_tune_id}/events": ["200"],
    "POST /fine-tunes/{fine_tune_id}/cancel": ["200"],
    "GET /models": ["200"],
    "GET /models/{model}": ["200"],
    "DELETE /models/{model}": ["200"],
    "POST /images/generations": ["200"],
    "POST /images/edits": ["200"],
    "POST /images/variations": ["200"],
    "POST /moderations": ["200"],
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