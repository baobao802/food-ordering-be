import uploadFile from '../middleware/configUpload.js';
import cloudinary from 'cloudinary';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();
cloudinary.v2.config({
  cloud_name: 'articlesgroup',
  api_key: '567228543314488',
  api_secret: 'DKHdpzz88eeBGKFR4N10_ROO0jM'
});


const upload = async (req, res, next) => {
  
  try {
    await uploadFile(req, res);
    if (req.file == undefined) {
      return res.status(400).send({ message: 'Please upload a file!' });
    } else {
      cloudinary.v2.uploader.upload(`./resources/static/assets/uploads/${req.file.filename}`, {
        resource_type: "image",
        folder: "fruits"
      }).then((result) => {
        fs.unlinkSync(`./resources/static/assets/uploads/${req.file.filename}`);
        const url = result.url;
        req.body.image = url;
        next();
      }).catch((error) => {
        return res.status(400).send({ message: 'Failed to upload image!' });
      })
    }
  } catch (err) {
    res.status(500).send({
      message: `Could not upload the file: ${req.file.originalname}.${err}`,
    });
  }
};

export default upload;
