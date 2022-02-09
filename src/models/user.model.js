import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
    isSeller: { type: Boolean, default: false, required: true },
    address: { type: String, required: false, default: "" },
    phone: { type: String, required: false, default: "" },
    image: {type: String, required: false, default: 'https://scontent.fdad3-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=5OEPdEIQJikAX_08Ws7&_nc_ht=scontent.fdad3-2.fna&oh=00_AT8lcES6nG1hnENybeLF_iBCDrFZGy2pe1UTTYFcKQLh9A&oe=6200C278'}
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model('User', userSchema);
export default User;