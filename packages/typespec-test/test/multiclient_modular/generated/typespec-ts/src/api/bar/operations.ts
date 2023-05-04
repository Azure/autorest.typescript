import { RequestOptions } from '../../common/interfaces';
import { Client as BarClient } from '../../rest/bar/index.js';
import { isUnexpected } from '../../rest/foo/isUnexpected';
import { Resource } from './models.js';

export interface CreateWithHeadersOptions {
    requestOptions?: RequestOptions;
    description?: string;
    /** Body parameter Content-Type. Known values are: application/json. */
    content_type?: string;
}

export async function createWithHeaders(
    context: BarClient.BarContext,
    name: string,
    type: string,
    options: CreateWithHeadersOptions = { requestOptions: {} }
): Promise<Resource> {
    const result = await context.path("/response/create-with-headers").put({
        contentType: (options.content_type as any) ?? 'application/json',
        headers: {
            Accept: 'application/json',
            ...options.requestOptions?.headers,
        },
        body: {
            name,
            type,
            description: options.description,
        },
    });
    if (isUnexpected(result)) {
        throw result.body;
    }

    return {
        ...result.body,
    };
}
