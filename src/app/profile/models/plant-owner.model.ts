export interface PlantOwnerRequest {
    name: string,
    email: string,
    address: string,
    phone: number,
    photo: string,
    dni: number,
    birthday: string,
    gender: string
}

export interface PlantOwnerResponse {
    id: number,
    name: string,
    email: string,
    address: string,
    phone: number,
    photo: string,
    dni: number,
    birthday: Date,
    gender: string
}