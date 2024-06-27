export class SignUpRequestTs {
    constructor(
        public username: string,
        public password: string,
        public roles: string[] = ['ROLE_ADMIN']  // Rol de inicio predeterminado
      ) {}
}
