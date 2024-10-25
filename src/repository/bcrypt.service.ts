import { hashSync, compareSync } from "bcrypt";
class bcrypt {
  async makeHash(pasword: string): Promise<string> {
    // task: implementar rules para la contraseña
    return hashSync(pasword, 10);
  }

  compareHash(password: string, hash: string): boolean {
    return compareSync(password, hash);
  }
}

export default new bcrypt();
