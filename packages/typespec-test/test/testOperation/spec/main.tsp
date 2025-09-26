import "@typespec/rest";
import "@typespec/http";
import "@typespec/versioning";
import "@azure-tools/typespec-azure-core";
import "./routes.tsp";

using TypeSpec.Http;

@service(#{ title: "KeyVaultClient" })
@server(
    "{vaultBaseUrl}",
    "The key vault client performs cryptographic key operations and vault operations against the Key Vault service.",
    {
        vaultBaseUrl: url,
    }
)
namespace KeyVault;
