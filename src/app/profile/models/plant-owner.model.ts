export interface SendPlantOwner {
    name: string,
    email: string,
    address: string,
    phone: number,
    photo: string,
    dni: number,
    birthday: string,
    gender: string
}

export interface GetPlantOwner {
    id: number,
    name: string,
    email: string,
    address: string,
    phone: number,
    photo: string,
    dni: number,
    birthday: string,
    gender: string
}