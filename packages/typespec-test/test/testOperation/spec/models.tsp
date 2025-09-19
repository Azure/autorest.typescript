import "@azure-tools/typespec-azure-core";

using Azure.Core;

namespace KeyVault;

alias KeyVaultOperation<
    TParams extends Reflection.Model,
    TResponse,
    Traits extends Reflection.Model = {}
> = Foundations.Operation<TParams, TResponse, Traits, {}>;
