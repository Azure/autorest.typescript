// Licensed under the MIT License.

/** model interface _FloatRequest */
export interface _FloatRequest {
  temperature: {
    body: number;
    contentType: "text/plain";
  };
}

export function _floatRequestSerializer(item: _FloatRequest): any {
  return [
    {
      name: "temperature",
      body: _floatRequestTemperatureSerializer(item["temperature"]),
    },
  ];
}

/** model interface _FloatRequestTemperature */
export interface _FloatRequestTemperature {
  body: number;
}

export function _floatRequestTemperatureSerializer(
  item: _FloatRequestTemperature,
): any {
  return item;
}
