import { Schema } from "@autorest/codemodel";

export type PathParameter = {
  name: string;
  schema: Schema;
  description?: string;
};

export interface ResponseTypes {
  success: string[];
  error: string[];
}

export interface OperationMethod {
  optionsName: string;
  description: string;
  hasOptionalOptions: boolean;
  returnType: string;
  successStatus: string[];
  responseTypes: ResponseTypes;
}

export type Methods = {
  [key: string]: [OperationMethod];
};

export interface PathMetadata {
  name: string;
  pathParameters: PathParameter[];
  methods: Methods;
  annotations?: OperationAnnotations;
}

export type Paths = Record<string, PathMetadata>;

export interface OperationAnnotations {
  isLongRunning?: boolean;
  isPageable?: boolean;
}

export type Method = "get" | "post" | "patch" | "put" | "delete";

/**
 * A group of samples in operation_id level and they are used to generate in a sample file
 */
export interface RLCSampleGroup {
  filename: string,
  clientClassName: string,
  clientPackageName: string,
  samples: RLCSampleDetail[],
  // import createClient, { getLongRunningPoller, ScenesCreateSatelliteDataIngestionJobParameters } from "@azure-rest/agrifood-farming";
  // import { DefaultAzureCredential } from "@azure/identity";
  importedTypes?: string[],
}

/**
 * An independent sample detail and it will be wrapped as a func
 */
export interface RLCSampleDetail {
  /**
   * metadata for comments
   */
  description: string,
  originalFileLocation?: string,
  // createOrUpdateFarmers
  // createOrUpdateFarmers().catch(console.error);  
  name: string,
  // "/farmers/{farmerId}"
  path: string;
  // const Endpoint = "{Endpoint}"; 
  // const credential = new DefaultAzureCredential(); 
  clientParamsInits: string[],
  // const farmerId = "FARMER123"; 
  pathParamsInits: string[];
  // const options: Option = { 
  //   body: { 
  //     name: "John Smith", 
  //     description: "Some description", 
  //     status: "Active", 
  //     properties: { 
  //       "Irrigated": "Yes", 
  //       "RetailerId": "Retailer123" 
  //     }, 
  //   } 
  // }; 
  methodParamsInits: string[],
  // Endpoint, credential
  // const client = createClient(Endpoint, credential);
  clientParamStr: string;
  // "/farmers/{farmerId}", farmerId
  // await client.path("/farmers/{farmerId}", farmerId).patch(options);
  pathParamStr: string;
  // options
  methodParamStr: "options" | "";
  // patch
  method: string;
  // const initialResponse = await client.path("/scenes/satellite/ingest-data/{jobId}", jobId).put(options);
  // const poller = getLongRunningPoller(client, initialResponse);
  // const result = await poller.pollUntilDone();
  isLRO: boolean,
  // const initialResponse = await client.path("/farmers").get();
  // const pageData = paginate(client, initialResponse);
  // const result = [];
  // for await (const item of pageData) {
  //   result.push(item);
  // }
  isPaging: boolean,
} 