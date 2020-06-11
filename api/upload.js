const fs = require('fs');
const path = require('path');
const shortid = require('shortid');
var multer = require('multer');


var storage = multer.diskStorage({
   destination: path.join(__dirname, 'download'),
   filename: function (req, file, cb) {
      // cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
      const uuid = shortid.generate();
      cb(null, uuid + path.extname(file.originalname))
   }
})

const upload = multer({ storage: storage });

module.exports = upload;
