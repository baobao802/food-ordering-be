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
    image: {type: String, required: false, default: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t1.30497-1/p100x100/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=H17oga767iMAX_K6yno&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fhan2-3.fna&oh=00_AT-f_HJr4j_IHRTwMuJ5I3PVEj9DpwIbN-wUtr3dm7mQtw&oe=622BF051'}
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model('User', userSchema);
export default User;