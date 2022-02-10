import UserService from '../services/user.service.js';
import UserModel from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import generateToken from '../utils/utils.js';
const UserController = {};

UserController.getTopSeller = async (req, res) => {
  const topSellers = await UserModel.find({ isSeller: true }).limit(3);
  res.send(topSellers);
};

UserController.signin = async (req, res) => {
  const user = await UserModel.findOne({ email: req.body.email });
  if (user) {
    if (bcrypt.compareSync(req.body.password, user.password)) {
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        isSeller: user.isSeller,
        token: generateToken(user),
      });
      return;
    }
  }
  res.status(401).send({ message: 'Invalid email or password' });
};

UserController.register = async (req, res) => {
  const found = await UserModel.findOne({ email: req.body.email });
  if (!found) {
    const user = new UserModel({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    });
    const createdUser = await user.save();
    res.send({
      _id: createdUser._id,
      name: createdUser.name,
      email: createdUser.email,
      isAdmin: createdUser.isAdmin,
      isSeller: user.isSeller,
      token: generateToken(createdUser),
    });
    return;
  }

  res.status(400).send({
    message: 'Email has already exists.',
  });
};

UserController.getUserById = async (req, res) => {
  const user = await UserModel.findById(req.params.id);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send({ message: 'User Not Found' });
  }
};

UserController.getAllUser = async (req, res) => {
  const pageSize = 1;
  const page = Number(req.query.pageNumber) || 1;
  const count = await UserModel.count();
  const users = await UserModel.find({}).sort({ _id: -1 }).skip(pageSize * (page - 1)).limit(pageSize);
  res.send({ users, page, pages: Math.ceil(count / pageSize) });
};

UserController.deleteUser = async (req, res) => {
  const user = await UserModel.findById(req.params.id);
  if (user) {
    if (user.email === 'admin@gmail.com') {
      res.status(400).send({ message: 'Can Not Delete Admin User' });
      return;
    }
    const deleteUser = await user.remove();
    res.send({ message: 'User Deleted', user: deleteUser });
  } else {
    res.status(404).send({ message: 'User Not Found' });
  }
};

UserController.updateUser = async (req, res) => {
  const user = await UserModel.findById(req.params.id);
  if (user) {
    console.log("user nè" + user);
    console.log(req.body);
    if (user.email === 'admin@gmail.com') {
      if (req.body.isSeller === 'true' || req.body.isAdmin === 'false') {
        res.status(400).send({ message: 'Can Not Update Admin User' });
        return;
      }
    }
    user.name = req.body.name;
    user.email = req.body.email;
    user.address = req.body.address;
    user.phone = req.body.phone;
    user.image = req.body.image;
    user.isSeller = true;
    user.isAdmin = req.body.isAdmin === true;
    const updatedUser = await user.save();
    res.send({ message: 'User Updated', user: updatedUser });
  } else {
    res.status(404).send({ message: 'User Not Found' });
  }
};

UserController.updateProfileUser = async (req, res) => {
  const user = await UserModel.findById(req.user._id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.address = req.body.address || user.address;
    user.phone = req.body.phone || user.phone;
    user.image = req.body.image || user.image;

    if (req.body.password) {
      user.password = bcrypt.hashSync(req.body.password, 8);
    }
    const updatedUser = await user.save();
    res.send({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      address: updatedUser.address,
      image: updatedUser.image,
      phone: updatedUser.phone,
      isAdmin: updatedUser.isAdmin,
      isSeller: user.isSeller,
      token: generateToken(updatedUser),
    });
  }
};

export default UserController;
