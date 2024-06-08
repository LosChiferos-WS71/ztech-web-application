export interface SendFlowerpotAssigment {
    plantOwnerId: number,
    flowerpotId: number,
    plantTypeId: number,
    name: string,
    photo: string,
    startDate: string,
    endDate: string
}

export interface GetFlowerpotAssigment {
    id: number,
    plantOwnerId: number,
    flowerpotId: number,
    plantTypeId: number,
    name: string,
    photo: string,
    startDate: string,
    endDate: string
}