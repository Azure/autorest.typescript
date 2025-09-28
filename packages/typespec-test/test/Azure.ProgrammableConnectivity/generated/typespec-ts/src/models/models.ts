// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Request to verify Location */
export interface DeviceLocationVerificationContent {
  /** Network to query for this device, or device information to enable network routing. */
  networkIdentifier: NetworkIdentifier;
  /** Latitude of location to be verified */
  latitude: number;
  /** Longitude of location to be verified */
  longitude: number;
  /** Accuracy expected for location verification in kilometers */
  accuracy: number;
  /** The device to find the location for. Exactly one of Network Access Code, Phone Number, IPv4 address, or IPv6 address */
  device: LocationDevice;
}

export function deviceLocationVerificationContentSerializer(
  item: DeviceLocationVerificationContent,
): any {
  return {
    networkIdentifier: networkIdentifierSerializer(item["networkIdentifier"]),
    latitude: item["latitude"],
    longitude: item["longitude"],
    accuracy: item["accuracy"],
    device: locationDeviceSerializer(item["device"]),
  };
}

/** Identifier for the network to be queried */
export interface NetworkIdentifier {
  /** The type of identifier for the network. one of: 'IPv4', 'IPv6', 'MSISDN', 'NetworkCode' */
  identifierType: string;
  /**
   * The network identifier, based on the identifierType: an IPv4 address, an IPv6 address, an MSISDN, or a Network Code.
   * A Network Code may be obtained from APC documentation or from the APC /Network:retrieve endpoint.
   */
  identifier: string;
}

export function networkIdentifierSerializer(item: NetworkIdentifier): any {
  return {
    identifierType: item["identifierType"],
    identifier: item["identifier"],
  };
}

/** Device information needed by operator to provide location information. Include exactly one of these properties to identify your device. */
export interface LocationDevice {
  /** External identifier or network access identifier of the device */
  networkAccessIdentifier?: string;
  /** Phone number in E.164 format (starting with country code), and optionally prefixed with '+' */
  phoneNumber?: string;
  /** The Ipv4 address */
  ipv4Address?: Ipv4Address;
  /** The Ipv6 address */
  ipv6Address?: Ipv6Address;
}

export function locationDeviceSerializer(item: LocationDevice): any {
  return {
    networkAccessIdentifier: item["networkAccessIdentifier"],
    phoneNumber: item["phoneNumber"],
    ipv4Address: !item["ipv4Address"]
      ? item["ipv4Address"]
      : ipv4AddressSerializer(item["ipv4Address"]),
    ipv6Address: !item["ipv6Address"]
      ? item["ipv6Address"]
      : ipv6AddressSerializer(item["ipv6Address"]),
  };
}

/** IPv4 device indicator */
export interface Ipv4Address {
  /** An IPv4 address. This may be specified as an exact address, or as a subnet in CIDR notation. */
  ipv4: string;
  /** User equipment port. */
  port: number;
}

export function ipv4AddressSerializer(item: Ipv4Address): any {
  return { ipv4: item["ipv4"], port: item["port"] };
}

/** IPv6 device indicator */
export interface Ipv6Address {
  /** An IPv6 address. This may be specified as an exact address, or as a subnet in CIDR notation. */
  ipv6: string;
  /** User equipment port. */
  port: number;
}

export function ipv6AddressSerializer(item: Ipv6Address): any {
  return { ipv6: item["ipv6"], port: item["port"] };
}

/** Response verifying location */
export interface DeviceLocationVerificationResult {
  /** True if the location is in the specified area, False otherwise */
  verificationResult: boolean;
}

export function deviceLocationVerificationResultDeserializer(
  item: any,
): DeviceLocationVerificationResult {
  return {
    verificationResult: item["verificationResult"],
  };
}

/** The network that the device is on. */
export interface NetworkRetrievalResult {
  /** The identifier for the network. This can be used as the networkIdentifier for the service APIs. */
  networkCode: string;
}

export function networkRetrievalResultDeserializer(
  item: any,
): NetworkRetrievalResult {
  return {
    networkCode: item["networkCode"],
  };
}

/** Request to verify number of device - first call */
export interface NumberVerificationWithoutCodeContent {
  /** Identifier for the network to query for this device. */
  networkIdentifier: NetworkIdentifier;
  /** Phone number in E.164 format (starting with country code), and optionally prefixed with '+' */
  phoneNumber?: string;
  /** Hashed phone number. SHA-256 (in hexadecimal representation) of the mobile phone number in **E.164 format (starting with country code)**. Optionally prefixed with '+'. */
  hashedPhoneNumber?: string;
  /** Redirect URI to backend application. */
  redirectUri: string;
}

export function numberVerificationWithoutCodeContentSerializer(
  item: NumberVerificationWithoutCodeContent,
): any {
  return {
    networkIdentifier: networkIdentifierSerializer(item["networkIdentifier"]),
    phoneNumber: item["phoneNumber"],
    hashedPhoneNumber: item["hashedPhoneNumber"],
    redirectUri: item["redirectUri"],
  };
}

/** Request to verify number of device - second call */
export interface NumberVerificationWithCodeContent {
  /** The code provided by APC in exchange for the operator code. */
  apcCode: string;
}

export function numberVerificationWithCodeContentSerializer(
  item: NumberVerificationWithCodeContent,
): any {
  return { apcCode: item["apcCode"] };
}

/** Response verifying number of device */
export interface NumberVerificationResult {
  /** True if number if the phone number matches the device, False otherwise */
  verificationResult: boolean;
}

export function numberVerificationResultDeserializer(
  item: any,
): NumberVerificationResult {
  return {
    verificationResult: item["verificationResult"],
  };
}

/** Request to retrieve SimSwap date */
export interface SimSwapRetrievalContent {
  /** Phone number in E.164 format (starting with country code), and optionally prefixed with '+' */
  phoneNumber?: string;
  /** Network to query for this device */
  networkIdentifier: NetworkIdentifier;
}

export function simSwapRetrievalContentSerializer(
  item: SimSwapRetrievalContent,
): any {
  return {
    phoneNumber: item["phoneNumber"],
    networkIdentifier: networkIdentifierSerializer(item["networkIdentifier"]),
  };
}

/** Response with SimSwap date */
export interface SimSwapRetrievalResult {
  /** Datetime of most recent swap for SIM */
  date?: Date;
}

export function simSwapRetrievalResultDeserializer(
  item: any,
): SimSwapRetrievalResult {
  return {
    date: !item["date"] ? item["date"] : new Date(item["date"]),
  };
}

/** Request to verify SimSwap in period */
export interface SimSwapVerificationContent {
  /** Phone number in E.164 format (starting with country code), and optionally prefixed with '+' */
  phoneNumber?: string;
  /** Maximum lookback for SimSwap verification */
  maxAgeHours?: number;
  /** Identifier for the network to query for this device. */
  networkIdentifier: NetworkIdentifier;
}

export function simSwapVerificationContentSerializer(
  item: SimSwapVerificationContent,
): any {
  return {
    phoneNumber: item["phoneNumber"],
    maxAgeHours: item["maxAgeHours"],
    networkIdentifier: networkIdentifierSerializer(item["networkIdentifier"]),
  };
}

/** Response verifying SimSwap in period */
export interface SimSwapVerificationResult {
  /** True if the SIM has swapped in the specified period, False otherwise */
  verificationResult: boolean;
}

export function simSwapVerificationResultDeserializer(
  item: any,
): SimSwapVerificationResult {
  return {
    verificationResult: item["verificationResult"],
  };
}

/** APC Versions */
export enum KnownAPCVersions {
  /** Version 2024-02-09-preview */
  V20240209Preview = "2024-02-09-preview",
}
