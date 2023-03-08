export enum UserPermission {
    ADMIN = "Admin"
}

export class User {
    constructor(
        private email: string,
        private password: string,
        private permissions: UserPermission[]
    ) {}

    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }

    gerPermissions() {
        return this.permissions;
    }
}