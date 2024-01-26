// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface MultiPartRequest {
  id: string;
  profileImage: string;
}

export interface ComplexPartsRequest {
  id: string;
  address: Address;
  profileImage: string;
  previousAddresses: Array<Address>;
  pictures: string[];
}

export interface Address {
  city: string;
}

export interface JsonPartRequest {
  address: Address;
  profileImage: string;
}

export interface BinaryArrayPartsRequest {
  id: string;
  pictures: string[];
}

export interface JsonArrayPartsRequest {
  profileImage: string;
  previousAddresses: Array<Address>;
}

export interface MultiBinaryPartsRequest {
  profileImage: string;
  picture?: string;
}
