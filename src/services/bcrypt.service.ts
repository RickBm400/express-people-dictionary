import { hashSync } from "bcrypt";
class bcrypt {
  async makeHash(pasword: string) {
    return hashSync(pasword, 10);
  }
}

export default new bcrypt();
