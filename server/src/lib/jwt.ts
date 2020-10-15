import jwt from "jsonwebtoken";

export const sign = (payload: string | object) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.JWT_SECRET!,
      {
        expiresIn: "1d",
      },
      (err, token) => {
        if (err) return reject(err);
        return resolve(token);
      }
    );
  });
};
