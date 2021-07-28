import * as coreClient from "@azure/core-client";
export declare const AzureResourceBase: coreClient.CompositeMapper;
export declare const ManagedServiceIdentity: coreClient.CompositeMapper;
export declare const UserAssignedIdentity: coreClient.CompositeMapper;
export declare const SystemData: coreClient.CompositeMapper;
export declare const DeploymentScriptsError: coreClient.CompositeMapper;
export declare const ErrorResponse: coreClient.CompositeMapper;
export declare const ErrorAdditionalInfo: coreClient.CompositeMapper;
export declare const DeploymentScriptListResult: coreClient.CompositeMapper;
export declare const ScriptLogsList: coreClient.CompositeMapper;
export declare const DeploymentScriptPropertiesBase: coreClient.CompositeMapper;
export declare const ContainerConfiguration: coreClient.CompositeMapper;
export declare const StorageAccountConfiguration: coreClient.CompositeMapper;
export declare const ScriptStatus: coreClient.CompositeMapper;
export declare const ScriptConfigurationBase: coreClient.CompositeMapper;
export declare const EnvironmentVariable: coreClient.CompositeMapper;
export declare const DeploymentScript: coreClient.CompositeMapper;
export declare const DeploymentScriptUpdateParameter: coreClient.CompositeMapper;
export declare const ScriptLog: coreClient.CompositeMapper;
export declare const AzurePowerShellScriptProperties: coreClient.CompositeMapper;
export declare const AzureCliScriptProperties: coreClient.CompositeMapper;
export declare const AzurePowerShellScript: coreClient.CompositeMapper;
export declare const AzureCliScript: coreClient.CompositeMapper;
export declare let discriminators: {
    "AzureResourceBase.DeploymentScript": coreClient.CompositeMapper;
    "AzureResourceBase.AzurePowerShell": coreClient.CompositeMapper;
    "AzureResourceBase.AzureCLI": coreClient.CompositeMapper;
};
//# sourceMappingURL=mappers.d.ts.map