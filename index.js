const express = require('express');
const app = express();
const fs=require('fs');
const upload = require("./upload");
const bodyParser = require('body-parser')

// req.body 解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// apk上传
app.post('/api/gw/apk/upload',upload.single('apk'), async (req, res) => {
    log.get().debug("req.file" + req.file);
    if (req.file) {
        log.get().debug(req.file.path);
        res.json({code:200, data:req.file});
        return ;
    } else {
        res.json({code:400});
    }
});

// apk页详情
app.get('/api/gw/apk/info', async (req, res) => {
    try{
        fs.readFileSync("./download.json", function(err, data) {
            if (err) {
                res.json({code : 400, message: err.message});
            } else {
                res.json(JSON.parse(data));
            }
        });
    } catch(err) {
        const statusCode = err.response && err.response.statusCode || 500;
        const message = err.response && err.response.body || "Internal Error";
        res.status(statusCode).json(message);
    }
});

// apk页更新
app.put('/api/gw/apk/info', async (req, res) => {
    try{
        let config = fs.readFileSync("./download.json", function(err, data) {
            if (err) {
                res.json({code : 400, message: err.message});
            }
        });
        config = JSON.parse(config);
        console.log(config);
        let updateData = req.body;
        for(let item in updateData) {
            if(item != "baseUrl") {
                config[item] = updateData[item];
            }
        }


        fs.writeFile("./download.json", JSON.stringify(config), function(err, data) {
            if (err) {
                res.json({code : 400, message: err.message});
            } else {
                res.json({code: 200});
            }
        });
    } catch(err) {
        console.log(err.message);
        const statusCode = err.response && err.response.statusCode || 500;
        const message = err.response && err.response.body || "Internal Error";
            res.status(statusCode).json(message);
    }
});


var server = app.listen(8000, function () {
    console.log("api-download-api running")
})

module.exports = app;
