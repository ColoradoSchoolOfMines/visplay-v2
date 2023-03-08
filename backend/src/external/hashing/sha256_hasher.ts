import bcrypt from 'bcrypt';

import { HashResult } from '../../core/entities/hash_result';
import { Hasher } from './hasher';

export class BCryptHasher implements Hasher {
    hash(password: string): Promise<HashResult> {
        return new Promise((resolve, reject) => bcrypt.genSalt(10, (err: any, salt: string) => {
            if (err) return reject(err);
            bcrypt.hash(password, salt, function (err: any, hash: string) {
                // Store hash in the database
                if (err) return reject(err);
                return resolve(new HashResult(hash, salt));
            });
        }))
    }

    hash_with_salt(password: string, salt: string): Promise<HashResult> {
        return new Promise((resolve, reject) => {
            bcrypt.hash(password, salt, function (err: any, hash: string) {
                // Store hash in the database
                if (err) return reject(err);
                return resolve(new HashResult(hash, salt));
            });
        })
    }
}