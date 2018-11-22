const app = require('../sevice');
const fs=require('fs');
const upload = require("../upload");
const bodyParser = require('body-parser')

// apk上传
app.post('/api/pub/apk/upload',upload.single('apk'), async (req, res) => {
    log.get().debug("req.file" + req.file);
    if (req.file) {
        log.get().debug(req.file.path);
        res.json({code:200, data:req.file});
        return ;
    } else {
        res.json({code:400});
    }
});