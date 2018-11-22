const app = require('../sevice');
const fs=require('fs');
const upload = require("../upload");
const bodyParser = require('body-parser')

// apk页详情
app.get('/api/pub/apk/info', async (req, res) => {
    try{ 
        fs.readFileSync("../download.json", function(err, data) {
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