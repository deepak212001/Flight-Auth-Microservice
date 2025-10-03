// import CrudRepository from "./crud.repository.js";
// import Airplane from "../models/airplane.js";

const CrudRepository = require("./crud.repository");
const { User } = require("../models");

class UserRepository extends CrudRepository {
  constructor() {
    // super keyword help to call constructor of parents call
    super(User);
  }
  async getUserByEmail(email) {
    const user = await User.findOne({ where: { email: email } });
    return user;
  }
}

module.exports = UserRepository;
