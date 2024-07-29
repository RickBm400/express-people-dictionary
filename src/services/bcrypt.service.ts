import { hashSync } from "bcrypt";
class bcrypt {
  async makeHash(pasword: string): Promise<string> {
    // task: implementar rules para la contraseña
    return hashSync(pasword, 10);
  }
}

export default new bcrypt();
