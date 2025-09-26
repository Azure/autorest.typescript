import "./main.tsp";
import "@azure-tools/typespec-client-generator-core";

using Azure.ClientGenerator.Core;
using TypeSpec.Http;

namespace Customizations;
using KeyVault;

/**
 * The GET operation is applicable to any secret stored in Azure Key Vault. This operation requires the secrets/get permission.
 */
@summary("Get a specified secret from a given key vault.")
@route("/secrets/{secret-name}/{secret-version}")
@get
op getSecret is KeyVaultOperation<
    {
        /**
         * The name of the secret.
         */
        @path("secret-name")
        @clientName("name", "go")
        secretName: string;

        /**
         * The version of the secret. This URI fragment is optional. If not specified, the latest version of the secret is returned.
         */
        @path("secret-version")
        @clientName("version", "go")
        secretVersion: string;
    },
    {}
>;
@@override(KeyVault.getSecret, getSecret);
