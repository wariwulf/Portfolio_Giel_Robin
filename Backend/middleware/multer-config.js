const multer = require('multer');
const sharp = require('sharp');
const path = require('path');

// Définissez le chemin d'accès au dossier de destination pour enregistrer les images
const UPLOADS_DIR = path.join(__dirname, '../images');

const MIME_TYPES = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/gif': 'gif',
  'image/jpg': 'jpg',
};

const storage = multer.memoryStorage(); // Utilisez memoryStorage pour stocker temporairement les images en mémoire

const fileFilter = (req, file, callback) => {
  console.log('File MIME Type:', file.mimetype);
  const allowedMimeTypes = Object.values(MIME_TYPES);
  if (allowedMimeTypes.includes(file.mimetype)) {
    callback(null, true);
  } else {
    callback(new Error('Invalid file type.'), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 10, // 10 MB limit
  },
});

const resizeAndSaveImage = (req, res, next) => {
  if (!req.file) {
    return next();
  }

  try {
    const filePath = path.join(UPLOADS_DIR, req.file.filename);
    sharp(req.file.path)
      .resize(300, 200)
      .toFile(filePath)
      .then(() => {
        fs.unlinkSync(req.file.path);
        req.file.path = filePath;
        next();
      })
      .catch((error) => {
        fs.unlinkSync(req.file.path);
        next(error);
      });
  } catch (error) {
    next(error);
  }
};

module.exports = { upload: upload.single('image'), resizeAndSaveImage: resizeAndSaveImage };

