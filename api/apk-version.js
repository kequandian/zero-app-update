const app = require('../sevice');
const fs = require('fs-extra');
const upload = require("../upload");
const bodyParser = require('body-parser')

// apk页详情
app.get('/api/pub/app/version', async (req, res) => {
	return fs.readJson('./download.json')
	.then(packageObj => {
		res.json(packageObj);
	})
	.catch(err => {
		res.json({code : 400, message: err.message});
	})
});

// apk页更新
app.put('/api/app/version', async (req, res) => {
	return fs.readJson('./download.json')
	.then(packageObj => {
		let updateData = req.body;
        for(let item in updateData) {
            packageObj[item] = updateData[item];
        }
		res.json(packageObj);
		return fs.writeJson('./download.json', packageObj)
		.then(() => {
			res.json({code: 200});
		})
		.catch(err => {
			res.json({code : 400, message: err.message});
		})
	})
	.catch(err => {
		res.json({code : 400, message: err.message});
	})
});