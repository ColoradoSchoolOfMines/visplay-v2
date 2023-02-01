<<<<<<< HEAD
import { HashResult } from "../../core/entities/hash_result";

=======
>>>>>>> eca6d3084080bbb8fdd5e75b70fff32210b635f6
export interface Hasher {
    hash(password: string): Promise<HashResult>;
}