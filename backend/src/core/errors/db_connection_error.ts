export class DBConnectionError extends Error {
    constructor(msg: string) {
        super();
        this.message = msg;
        this.name = 'DBConnectionError';
    }
}
