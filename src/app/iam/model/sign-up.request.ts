export class SignUpRequest {
    constructor(
        public email: string,
        public name: string,
        public address: string,
        public phone: number,
        public photo: string,
        public dni: number,
        public birthday: string,
        public gender: string,
        public ruc: string,
        public roles: ParameterType[] = [ParameterType.ROLE_PLANT_OWNER]
      ) {}
}

export enum ParameterType {
  ROLE_PLANT_OWNER = 'ROLE_PLANT_OWNER',
  ROLE_SUPPLIER = 'ROLE_SUPPLIER',
  ROLE_ADMIN = 'ROLE_ADMIN'
}
