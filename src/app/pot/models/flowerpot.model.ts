export interface SendFlowerpot {
    code: string,
    active: boolean,
    lastTemprature: number,
    lastHumidity: number,
    lastSunlight: number
}

export interface GetFlowerpot {
    id: number,
    code: string,
    active: boolean,
    lastTemprature: number,
    lastHumidity: number,
    lastSunlight: number
}