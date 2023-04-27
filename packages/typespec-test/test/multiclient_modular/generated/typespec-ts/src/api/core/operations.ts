import { RequestOptions } from '../../common/interfaces';
import { Client as CoreClient } from '../../rest/core/index.js';
import { isUnexpected } from '../../rest/core/isUnexpected';
import { Resource } from './models.js';

export interface CreateOrUpdateOptions {
    requestOptions?: RequestOptions;
    description?: string;
    /** Body parameter Content-Type. Known values are: application/json. */
    content_type?: string;
}

export async function createOrUpdate(
    context: CoreClient.CoreContext,
    name: string,
    type: string,
    options: CreateOrUpdateOptions = { requestOptions: {} }
): Promise<Resource> {
    const result = await context.path('/cadl-core/resources/{name}', name).put({
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
