const dotenv = require("dotenv");
// import dotenv from "dotenv";
dotenv.config();

// module.exports = { PORT: process.env.PORT };

const ServerConfig = {
    PORT: process.env.PORT,
    SALT_ROUNDS: process.env.SALT_ROUNDS,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRY: process.env.JWT_EXPIRY,

};

module.exports = ServerConfig;
