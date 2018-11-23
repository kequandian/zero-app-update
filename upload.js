const fs = require('fs');
var multer  = require('multer');

var storage = multer.diskStorage({
  destination: 'apk/',
  //给上传文件重命名，获取添加后缀名
  filename: function (req, file, cb) {
      cb(null,  file.originalname);
   }
}); 
const upload = multer({storage: storage});

module.exports = upload;