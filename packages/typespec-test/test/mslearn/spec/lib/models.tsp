using TypeSpec.Http;
using TypeSpec.Reflection;
using Azure.Core;

namespace Microsoft.Learn;

/** An identifier in XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX format */
@format("uuid")
scalar uuid extends string;

/** User-defined ID */
@pattern("^[a-zA-Z0-9_\\-\\.]+$")
scalar uid extends string;

/** A markdown text strictly adheres common-mark standard, with no custom markdown extensions */
alias commonmark = string;

/** A markdown text with learn markdown extensions */
alias learnmark = string;

/** A relative URL reference with a relative path, such as foo/bar.html */
alias relativePath = url;

/** A relative URL reference with an absolute path, such as /foo/bar.html */
alias absolutePath = url;

/** Represents a Server-Sent-Event response stream */
alias EventStream<T> = T[];

/** Equivlant to TypeScript Pick type: https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys */
alias Pick<T, Keys> = T;

/** Equivlant to TypeScript Omit type: https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys */
alias Omit<T, Keys> = T;

/** Reference to another entity */
alias EntityRef<T> = T;

/** Link to a content */
model ContentLink {
    /** A aboslute URL with protocol and domain to the content */
    url: url;

    /** A localized title of the content */
    title?: string;
}

model ApiVersionParameter {
    /** The API version to use for this operation */
    @query("api-version")
    apiVersion?: Versions;
}

/** Response containing rate limit info */
model RateLimitResponse {
    /** The maximum number of requests you're permitted to make per hour. */
    @header("RateLimit-Limit")
    ratelimitLimit: int32;

    /** The number of requests remaining in the current rate limit window. */
    @header("RateLimit-Remaining")
    ratelimitRemaining: int32;
}

/** Response when rate limit exceeded allowed quota */
model RateLimitExceedErrorResponse extends Response<429> {
    /** Delay in seconds to retry for a 429 request */
    @header("Retry-After")
    retryAfter: int32;
}

/**
 * Response body for HTTP 4xx user errors.
 */
@error
model Error<TErrorCode> {
    /** The top-level error object */
    error: {
        /** One of a server-defined set of error codes */
        code: TErrorCode;

        /** A human-readable representation of the error */
        message: string;
    };
}

/** User error responses */
model ErrorResponse<TStatusCode extends 400 | 422, TErrorCode> {
    @statusCode statusCode: TStatusCode;
    @body body: Error<TErrorCode>;
}

/** HTTP success responses  */
model SuccessResponse<TStatusCode extends 200 | 201 | 202 | 204, TResponse extends Model> {
    @statusCode statusCode: TStatusCode;
    @body body: TResponse;

    ...RateLimitResponse;
}

model PageQueryParameter {
    /** An offset into the collection of the first resource to be returned */
    @query skip?: int32;

    /** The maximum number of resources to return from the collection */
    @query top?: int32;
}

model FilterQueryParameter {
    /** Controls the list operation using filter expressions */
    @query filter?: string;
}

/** Describes a page of resource object */
@pagedResult()
model Page<T> {
    /**
     * The absolute URL path to the next page of items.
     * or the property does not exist if this is the last page of the collection
     */
    @nextLink()
    nextLink?: absolutePath;

    /** The items on this page */
    @items()
    value: T[];
}

model LocaleQueryParameter {
    /**
     * A single, valid locale of the requested resource.
     * If this parameter isn't supplied, the `en-us` response will be returned.
     * If the resource isn't available in the requested locale, 404 will be returned.
     */
    @query locale?: Locale,
}

model UserIdPathParameter {
    @path userId: string,
}

model ExpandQueryParameter<T> {
    /** A list of the related resources to be included in line with each resource */
    @query({
      format: "multi",
    })
    expand?: T[];
}

/** A localizable classification */
model Taxonomy {
    /** Taxonomy unique identifier, such as data-ai */
    id: string;

    /** Localized taxonomy display name, such as "Data and AI" */
    name: string;
}

/** Aggregated user rating */
model Rating {
    /** Average rating out of 1 to 5 */
    average: float32;

    /** Number of rates */
    count: int32;
}
