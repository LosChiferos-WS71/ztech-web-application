export interface FlowerpotRequest {
    code: string,
    active: boolean,
    lastTemprature: number,
    lastHumidity: number,
    lastSunlight: number
}

export interface FlowerpotResponse {
    id: number,
    code: string,
    active: boolean,
    lastTemprature: number,
    lastHumidity: number,
    lastSunlight: number
}