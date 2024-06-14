export interface FlowerpotAssignmentRequest {
    plantOwnerId: number,
    flowerpotId: number,
    plantTypeId: number,
    name: string,
    photo: string,
    startDate: string,
    endDate: string
}

export interface FlowerpotAssignmentResponse {
    name: string,
    photo: string,
    startDate: string,
    endDate: string
}