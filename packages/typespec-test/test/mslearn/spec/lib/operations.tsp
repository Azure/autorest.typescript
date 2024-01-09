using TypeSpec.Http;
using TypeSpec.Reflection;

namespace Microsoft.Learn;

/** The most basic operation for all requests */
op BaseOperation<TResponse, TParams extends Model, TErrorResponse = {}>(...ApiVersionParameter, ...TParams) 
    : TResponse | TErrorResponse | RateLimitExceedErrorResponse | UnauthorizedResponse | ForbiddenResponse | BadRequestResponse;

/** The basic read operation */
@get
op ReadOperation<T extends Model, TParams extends Model = {}, TErrorResponse = {}>
    is BaseOperation<SuccessResponse<200, T>, TParams, TErrorResponse | NotFoundResponse>;

/** The basic list operation */
@get
op ListOperation<T extends Model, TParams extends Model = {}, TErrorResponse = {}>
    is BaseOperation<SuccessResponse<200, Page<T>>, TParams & PageQueryParameter, TErrorResponse>;

/** Reads a content */
op ContentReadOperation<T extends Model, TParams extends Model = {}, TErrorResponse = {}>
    is ReadOperation<T, TParams & LocaleQueryParameter, TErrorResponse>;

/** List contents */
op ContentListOperation<T extends Model, TParams extends Model = {}, TErrorResponse = {}>
    is ListOperation<T, TParams & LocaleQueryParameter, TErrorResponse>;

/** Read user data */
op UserDataReadOperation<T extends Model, TParams extends Model = {}, TErrorResponse = {}>
    is ReadOperation<T, TParams & UserIdPathParameter, TErrorResponse>;

/** Read my user data */
op MyDataReadOperation<T extends Model, TParams extends Model = {}, TErrorResponse = {}>
    is ReadOperation<T, TParams, TErrorResponse>;

/** List user data */
op UserDataListOperation<T extends Model, TParams extends Model = {}, TErrorResponse = {}>
    is ListOperation<T, TParams & UserIdPathParameter, TErrorResponse>;

/** List my user data */
op MyDataListOperation<T extends Model, TParams extends Model = {}, TErrorResponse = {}>
    is ListOperation<T, TParams, TErrorResponse>;

