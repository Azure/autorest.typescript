// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * This file contains only generated model types and (de)serializers.
 * Disable this rule for deserializer functions which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** A JWKS like document */
export interface JwksDocument {
  /** List of public keys used for receipt verification. */
  keys: JsonWebKey[];
}

export function jwksDocumentDeserializer(item: any): JwksDocument {
  return {
    keys: jsonWebKeyArrayDeserializer(item["keys"]),
  };
}

export function jsonWebKeyArrayDeserializer(result: Array<JsonWebKey>): any[] {
  return result.map((item) => {
    return jsonWebKeyDeserializer(item);
  });
}

/** rfc7517 JSON Web Key representation adapted from a shared swagger definition in the common types */
export interface JsonWebKey {
  /**
   * The "alg" (algorithm) parameter identifies the algorithm intended for
   * use with the key.  The values used should either be registered in the
   * IANA "JSON Web Signature and Encryption Algorithms" registry
   * established by [JWA] or be a value that contains a Collision-
   * Resistant Name.
   */
  alg?: string;
  /** The "crv" (curve) parameter identifies the curve type */
  crv?: string;
  /** RSA private exponent or ECC private key */
  d?: string;
  /** RSA Private Key Parameter */
  dp?: string;
  /** RSA Private Key Parameter */
  dq?: string;
  /** RSA public exponent, in Base64 */
  e?: string;
  /** Symmetric key */
  k?: string;
  /**
   * The "kid" (key ID) parameter is used to match a specific key.  This
   * is used, for instance, to choose among a set of keys within a JWK Set
   * during key rollover.  The structure of the "kid" value is
   * unspecified.  When "kid" values are used within a JWK Set, different
   * keys within the JWK Set SHOULD use distinct "kid" values.  (One
   * example in which different keys might use the same "kid" value is if
   * they have different "kty" (key type) values but are considered to be
   * equivalent alternatives by the application using them.)  The "kid"
   * value is a case-sensitive string.
   */
  kid?: string;
  /**
   * The "kty" (key type) parameter identifies the cryptographic algorithm
   * family used with the key, such as "RSA" or "EC". "kty" values should
   * either be registered in the IANA "JSON Web Key Types" registry
   * established by [JWA] or be a value that contains a Collision-
   * Resistant Name.  The "kty" value is a case-sensitive string.
   */
  kty: string;
  /** RSA modulus, in Base64 */
  n?: string;
  /** RSA secret prime */
  p?: string;
  /** RSA secret prime, with p < q */
  q?: string;
  /** RSA Private Key Parameter */
  qi?: string;
  /**
   * Use ("public key use") identifies the intended use of
   * the public key. The "use" parameter is employed to indicate whether
   * a public key is used for encrypting data or verifying the signature
   * on data. Values are commonly "sig" (signature) or "enc" (encryption).
   */
  use?: string;
  /** X coordinate for the Elliptic Curve point */
  x?: string;
  /**
   * The "x5c" (X.509 certificate chain) parameter contains a chain of one
   * or more PKIX certificates [RFC5280].  The certificate chain is
   * represented as a JSON array of certificate value strings.  Each
   * string in the array is a base64-encoded (Section 4 of [RFC4648] --
   * not base64url-encoded) DER [ITU.X690.1994] PKIX certificate value.
   * The PKIX certificate containing the key value MUST be the first
   * certificate.
   */
  x5C?: string[];
  /** Y coordinate for the Elliptic Curve point */
  y?: string;
}

export function jsonWebKeyDeserializer(item: any): JsonWebKey {
  return {
    alg: item["alg"],
    crv: item["crv"],
    d: item["d"],
    dp: item["dp"],
    dq: item["dq"],
    e: item["e"],
    k: item["k"],
    kid: item["kid"],
    kty: item["kty"],
    n: item["n"],
    p: item["p"],
    q: item["q"],
    qi: item["qi"],
    use: item["use"],
    x: item["x"],
    x5C: !item["x5c"]
      ? item["x5c"]
      : item["x5c"].map((p: any) => {
          return p;
        }),
    y: item["y"],
  };
}

/** The Microsoft.CodeTransparency service versions. */
export enum KnownVersions {
  /** The 2025-01-31-preview version of the Microsoft.CodeTransparency service. */
  _20250131Preview = "2025-01-31-preview",
}

/** Alias for _GetPublicKeysUnionResponse */
export type _GetPublicKeysUnionResponse =
  | JwksDocument
  | Uint8Array
  | Uint8Array
  | Uint8Array
  | Uint8Array
  | Uint8Array;

export function _getPublicKeysUnionResponseDeserializer(
  item: any,
): _GetPublicKeysUnionResponse {
  return item;
}
