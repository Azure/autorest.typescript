import { OpenAIContext } from "../../api/OpenAIContext.js";
import { CreateFineTuneRequest, FineTune, ListFineTunesResponse, ListFineTuneEventsResponse } from "../../models/models.js";
import { FineTunesCreateOptions, FineTunesListOptions, FineTunesRetrieveOptions, FineTunesListEventsOptions, FineTunesCancelOptions } from "../../models/options.js";
export interface FineTunesOperations {
    create: (fineTune: CreateFineTuneRequest, options?: FineTunesCreateOptions) => Promise<FineTune>;
    list: (options?: FineTunesListOptions) => Promise<ListFineTunesResponse>;
    retrieve: (fineTuneId: string, options?: FineTunesRetrieveOptions) => Promise<FineTune>;
    listEvents: (fineTuneId: string, options?: FineTunesListEventsOptions) => Promise<ListFineTuneEventsResponse>;
    cancel: (fineTuneId: string, options?: FineTunesCancelOptions) => Promise<FineTune>;
}
export declare function getFineTunes(context: OpenAIContext): {
    create: (fineTune: CreateFineTuneRequest, options?: FineTunesCreateOptions) => Promise<FineTune>;
    list: (options?: FineTunesListOptions) => Promise<ListFineTunesResponse>;
    retrieve: (fineTuneId: string, options?: FineTunesRetrieveOptions) => Promise<FineTune>;
    listEvents: (fineTuneId: string, options?: FineTunesListEventsOptions) => Promise<ListFineTuneEventsResponse>;
    cancel: (fineTuneId: string, options?: FineTunesCancelOptions) => Promise<FineTune>;
};
export declare function getFineTunesOperations(context: OpenAIContext): FineTunesOperations;
//# sourceMappingURL=index.d.ts.map