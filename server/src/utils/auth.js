import jwt from 'jwt-simple';

require('dotenv-safe').config();

export async function getUser(token) {
  if (!token) return { user: null };

  let user = null;

  try {
    const tokenContent = jwt.decode(token.substring(7), process.env.JWT_KEY);

    if (new Date(tokenContent.exp * 1000) > new Date()) {
      user = tokenContent;
    }

    return {
      user
    };
  } catch (err) {
    return { user: null };
  }
}


export function generateToken(user) {
  const now = Math.floor(Date.now()) / 1000;


  const userInfo = {
    id: user.id,
    email: user.email,
    iat: now,
    exp: now + 3 * 24 * 60 * 60
  };

  return {
    ...userInfo,
    token: jwt.encode(userInfo, process.env.JWT_KEY)
  };
}
