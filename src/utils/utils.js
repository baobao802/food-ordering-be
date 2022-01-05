import jwt from 'jsonwebtoken';

export default (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      isSeller: user.isSeller,
    },
    process.env.JWT_SECRET || 'bkhunter',
    {
      expiresIn: '30d',
    }
  );
};