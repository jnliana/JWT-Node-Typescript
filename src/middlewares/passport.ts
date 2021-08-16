// passport verifica si el token es correcto, crea una estrategia, asi lo llama el modulo
import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt";
import config from "../config/config";
import user, { IUser } from "../models/user";

const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.JWTSecret,
};

export default new Strategy(opts, async (payload, done) => {
  try {
    //ese es el id del usuario, que envio para crear el token
    const userData = await user.findById(payload.id);
    if (userData) {
      return done(null, userData);
    } else {
      return done(null, false);
    }
  } catch (err) {
    console.log(err);
  }
});
