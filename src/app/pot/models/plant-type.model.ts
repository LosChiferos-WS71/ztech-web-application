export interface PlantTypeRequest {
    name: string,
    scientificName: string,
    photo: string,
    description: string
}

export interface PlantTypeResponse {
    id: number,
    name: string,
    scientificName: string,
    photo: string,
    description: string
}

export enum ParameterType {
  MIN_TEMPERATURE = 'MIN_TEMPERATURE',
  MAX_TEMPERATURE = 'MAX_TEMPERATURE',
  MIN_HUMIDITY = 'MIN_HUMIDITY',
  MAX_HUMIDITY = 'MAX_HUMIDITY',
  MIN_SUNLIGHT = 'MIN_SUNLIGHT',
  MAX_SUNLIGHT = 'MAX_SUNLIGHT'
}

export interface ParameterResponse {
  parameterType: ParameterType;
  value: number;
}

export interface PlantTypeDetailsResponse {
  plantType: PlantTypeResponse;
  parameters: ParameterResponse[];
}