const fs = require('fs');
const path = require('path');
var multer = require('multer');

var storage = multer.diskStorage({
   destination: path.join(__dirname, 'upload'),
   filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
   }
})

const upload = multer({ storage: storage });

module.exports = upload;
