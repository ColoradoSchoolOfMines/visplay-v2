import { Hasher } from '../../external/hashing/hasher';

class UserAuth {
    async loginUser(username: string, password: string): Promise<void> {
        const hasher = container.resolve<Hasher>("password_hasher");

        // const hashedPassword = hasher.hash(password);
    }   
}