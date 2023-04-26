import { RequestOptions } from '../../common/interfaces';
import { Client as ResponseClient } from '../../rest/response/index.js';
import { isUnexpected } from '../../rest/core/isUnexpected';
import { Resource } from './models.js';

export interface CreateWithHeadersOptions {
    requestOptions?: RequestOptions;
    body?: Resource;
    /** Body parameter Content-Type. Known values are: application/json. */
    content_type?: string;
}

export async function createWithHeaders(
    context: ResponseClient.ResponseContext,
    options: CreateWithHeadersOptions = { requestOptions: {} }
): Promise<Resource> {
    const result = await context.path("/response/create-with-headers").put({
        contentType: (options.content_type as any) ?? 'application/json',
        headers: {
            Accept: 'application/json',
            ...options.requestOptions?.headers,
        },
        body: {
            ...(options.body ?? {}),
        },
    });
    if (isUnexpected(result)) {
        throw result.body;
    }

    return {
        ...result.body,
    };
}
