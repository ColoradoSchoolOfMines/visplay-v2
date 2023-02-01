import { HashResult } from "../../core/entities/hash_result";

export interface Hasher {
    hash(password: string): Promise<HashResult>;
}