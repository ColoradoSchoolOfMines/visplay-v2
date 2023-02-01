<<<<<<< HEAD
import { container } from "tsyringe";
import { Hasher } from "../../external/hashing/hasher";
=======
import { Hasher } from '../../external/hashing/hasher';
>>>>>>> eca6d3084080bbb8fdd5e75b70fff32210b635f6

class UserAuth {
    async loginUser(username: string, password: string): Promise<void> {
        const hasher = container.resolve<Hasher>("password_hasher");

        // const hashedPassword = hasher.hash(password);
    }   
}