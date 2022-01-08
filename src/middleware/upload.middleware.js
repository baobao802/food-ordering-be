import uploadFile from '../middleware/configUpload.js';
import fs from 'fs';


const upload = async (req, res, next) => {
  
  try {
    await uploadFile(req, res);
    if (req.file == undefined) {
      return res.status(400).send({ message: 'Please upload a file!' });
    } else {
      const url = `${req.protocol}://${req.get('host')}${req.baseUrl}/${req.file.filename}`;
      req.body.image = url;
      next();
    }
  } catch (err) {
    res.status(500).send({
      message: `Could not upload the file: ${req.file.originalname}.${err}`,
    });
  }
};

export default upload;
