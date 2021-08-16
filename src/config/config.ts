export default {
  DB: {
    URI: process.env.MONGODB_URI || "mongodb://localhost:27017/jwttutorial",
    USER: process.env.MONGODB_USER,
    PASSWORD: process.env.MONGODB_PASSWORD,
  },
  JWTSecret: process.env.JWT_SECRET || "secretToken",
};
