import util from 'util';
import multer from 'multer';

const maxSize = 2 * 1024 * 1024;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + '/resources/static/assets/uploads/');
  },
  filename: (req, file, cb) => {
    const fileExtension = (file.originalname.match(/\.+[\S]+$/) || [])[0];
    const filename = `${Date.now()}${fileExtension}`;
    cb(null, filename);
  },
});

const uploadFile = multer({
  storage,
  limits: { fileSize: maxSize },
}).single('image');

export default util.promisify(uploadFile);