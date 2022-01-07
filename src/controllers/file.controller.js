import uploadFile from '../middleware/upload.middleware';
import fs from 'fs';

const upload = async (req, res) => {
  try {
    await uploadFile(req, res);

    if (req.file == undefined) {
      return res.status(400).send({ message: 'Please upload a file!' });
    }

    res.status(200).send({
      url: `${req.protocol}://${req.get('host')}${req.baseUrl}/${
        req.file.filename
      }`,
    });
  } catch (err) {
    res.status(500).send({
      message: `Could not upload the file: ${req.file.originalname}. ${err}`,
    });
  }
};

const getList = (req, res) => {
  const directoryPath = __basedir + '/resources/static/assets/uploads/';

  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).send({
        message: 'Unable to scan files!',
      });
    }

    let fileInfos = [];

    files.forEach((file) => {
      fileInfos.push({
        name: file,
        url: baseUrl + file,
      });
    });

    res.status(200).send(fileInfos);
  });
};

const download = (req, res) => {
  const filename = req.params.filename;
  const directoryPath = __basedir + '/resources/static/assets/uploads/';

  res.setHeader('Content-Disposition', `inline; filename=${filename}`);
  res.download(directoryPath + filename, filename, (err) => {
    if (err) {
      res.status(500).send({
        message: 'Could not download the file. ' + err,
      });
    }
  });
};

export default {
  upload,
  download,
  getList,
};
