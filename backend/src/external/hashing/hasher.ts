export interface Hasher {
    hash(password: string): Promise<HashResult>;
}