import type { Client } from '@azure-rest/core-client';
import type { ClientOptions } from '@azure-rest/core-client';
import type { HttpResponse } from '@azure-rest/core-client';
import type { RequestParameters } from '@azure-rest/core-client';
import type { StreamableMethod } from '@azure-rest/core-client';

declare function createClient({ apiVersion, ...options }?: PreviewVersionClientOptions): PreviewVersionClient;
export default createClient;

export declare interface GetWidget {
    get(options?: GetWidgetParameters): StreamableMethod<GetWidget200Response | GetWidget404Response>;
}

export declare interface GetWidget200Response extends HttpResponse {
    status: "200";
    body: WidgetOutput;
}

export declare interface GetWidget404Response extends HttpResponse {
    status: "404";
}

export declare type GetWidgetParameters = RequestParameters;

export declare interface ListWidgets {
    get(options?: ListWidgetsParameters): StreamableMethod<ListWidgets200Response>;
}

export declare interface ListWidgets200Response extends HttpResponse {
    status: "200";
    body: {
        widgets: Array<WidgetOutput>;
    };
}

export declare type ListWidgetsParameters = ListWidgetsQueryParam & RequestParameters;

export declare interface ListWidgetsQueryParam {
    queryParameters?: ListWidgetsQueryParamProperties;
}

export declare interface ListWidgetsQueryParamProperties {
    name?: string;
    color?: string;
}

export declare type PreviewVersionClient = Client & {
    path: Routes;
};

export declare interface PreviewVersionClientOptions extends ClientOptions {
    apiVersion?: string;
}

export declare interface Routes {
    (path: "/azure/versioning/previewVersion/widgets/{id}", id: string): GetWidget;
    (path: "/azure/versioning/previewVersion/widgets/{id}/color", id: string): UpdateWidgetColor;
    (path: "/azure/versioning/previewVersion/widgets"): ListWidgets;
}

export declare interface UpdateWidgetColor {
    patch(options: UpdateWidgetColorParameters): StreamableMethod<UpdateWidgetColor200Response | UpdateWidgetColor404Response>;
}

export declare interface UpdateWidgetColor200Response extends HttpResponse {
    status: "200";
    body: WidgetOutput;
}

export declare interface UpdateWidgetColor404Response extends HttpResponse {
    status: "404";
}

export declare interface UpdateWidgetColorBodyParam {
    body: UpdateWidgetColorRequestResourceMergeAndPatch;
}

export declare interface UpdateWidgetColorMediaTypesParam {
    contentType: "application/merge-patch+json";
}

export declare type UpdateWidgetColorParameters = UpdateWidgetColorMediaTypesParam & UpdateWidgetColorBodyParam & RequestParameters;

export declare interface UpdateWidgetColorRequest {
    color: string;
}

export declare type UpdateWidgetColorRequestResourceMergeAndPatch = Partial<UpdateWidgetColorRequest>;

export declare interface WidgetOutput {
    id: string;
    name: string;
    color?: string;
}

export { }
