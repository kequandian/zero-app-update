const fs = require('fs');
var multer  = require('multer');

let config = fs.readFileSync("./download.json", function(err, data) {
   if (err) {
       res.json({code : 400, message: err.message});
   }
});
config = JSON.parse(config);

var storage = multer.diskStorage({
  destination: `${config['baseUrl']}`,
  filename: function (req, file, cb) {
      cb(null,  file.originalname);
   }
});
const upload = multer({storage: storage});

module.exports = upload;
