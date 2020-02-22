const app = require('../sevice');
const fs=require('fs');
const upload = require("../upload");
const bodyParser = require('body-parser')

// apk页更新
app.put('/api/app/version', async (req, res) => {
    try{
        let config = fs.readFileSync("../download.json", function(err, data) {
            if (err) {
                res.json({code : 400, message: err.message});
            } 
        });
        config = JSON.parse(config);
        let updateData = req.body;
        for(let item in updateData) {
            config[item] = updateData[item];
        }

        fs.writeFile("../download.json", JSON.stringify(config), function(err, data) {
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





