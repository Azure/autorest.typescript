import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface GetWidgetOptionalParams extends OperationOptions {
}

export declare enum KnownApiVersions {
    V20240101 = "2024-01-01",
    V20240601 = "2024-06-01",
    V20241201Preview = "2024-12-01-preview"
}

export declare interface ListWidgetsOptionalParams extends OperationOptions {
    name?: string;
    color?: string;
}

export declare class PreviewVersionClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: PreviewVersionClientOptionalParams);
    listWidgets(options?: ListWidgetsOptionalParams): Promise<{
        widgets: Widget[];
    }>;
    updateWidgetColor(id: string, colorUpdate: UpdateWidgetColorRequest, options?: UpdateWidgetColorOptionalParams): Promise<Widget>;
    getWidget(id: string, options?: GetWidgetOptionalParams): Promise<Widget>;
}

export declare interface PreviewVersionClientOptionalParams extends ClientOptions {
    apiVersion?: string;
}

export declare interface UpdateWidgetColorOptionalParams extends OperationOptions {
}

export declare interface UpdateWidgetColorRequest {
    color: string;
}

export declare interface Widget {
    id: string;
    name: string;
    color?: string;
}

export { }
