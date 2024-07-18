const fs = require('fs-extra');
const path = require('path');
const app = require('./sevice');
const upload = require("./upload");

const jsonPath = path.join(__dirname, 'apk/download.json');

app.get('/api/newconf/client/updatecheck', async (req, res) => {
	return fs.readJson(jsonPath)
		.then(packageObj => {
			res.json({
				code: 200,
				data: Object.values(packageObj),
			});
		})
		.catch(err => {
			res.json({ code: 400, message: err.message });
		})
});


// 渠道列表
app.get('/api/versionCheck/version/list', async (req, res) => {
	return fs.readJson(jsonPath)
		.then(packageObj => {
			res.json({
				code: 200,
				data: Object.values(packageObj),
			});
		})
		.catch(err => {
			res.json({ code: 400, message: err.message });
		})
});

// 获取 默认 apk页详情
app.get('/api/versionCheck/version', async (req, res) => {
	const vendor = 'defaults';
	return fs.readJson(jsonPath)
		.then(packageObj => {
			res.json({
				code: 200,
				data: packageObj[vendor],
			});
		})
		.catch(err => {
			res.json({ code: 400, message: err.message });
		})
});

// 创建 新渠道
app.post('/api/versionCheck/version', async (req, res) => {
	return fs.readJson(jsonPath)
		.then(packageObj => {
			const updateData = req.body;
			const { code } = updateData;

			const data = {
				...packageObj,
				[code]: {
					...updateData,
					id: code,
				}
			};

			return fs.writeJson(jsonPath, data)
				.then(() => {
					res.json({ code: 200 });
				})
				.catch(err => {
					res.json({ code: 400, message: err.message });
				})
		})
		.catch(err => {
			res.json({ code: 400, message: err.message });
		})
});

// 默认 apk页更新
app.put('/api/versionCheck/version', async (req, res) => {
	const vendor = 'defaults';

	return fs.readJson(jsonPath)
		.then(packageObj => {
			const updateData = req.body;
			const data = {
				...packageObj,
				[vendor]: {
					...updateData,
				}
			};

			return fs.writeJson(jsonPath, data)
				.then(() => {
					res.json({ code: 200 });
				})
				.catch(err => {
					res.json({ code: 400, message: err.message });
				})
		})
		.catch(err => {
			res.json({ code: 400, message: err.message });
		})
});

// 获取渠道子项
app.get('/api/versionCheck/version/vendor/:id', async (req, res) => {
	const { id } = req.params;

	return fs.readJson(jsonPath)
		.then(packageObj => {

			const rst = packageObj[id] || {};

			res.json({
				code: 200,
				data: rst,
			});
		})
		.catch(err => {
			res.json({ code: 400, message: err.message });
		})
});

// 更新渠道子项
app.put('/api/versionCheck/version/vendor/:id', async (req, res) => {
	const { id } = req.params;

	return fs.readJson(jsonPath)
		.then(packageObj => {
			const updateData = req.body;

			delete packageObj[id];

			const data = {
				...packageObj,
				[updateData.code]: {
					...updateData,
					id: updateData.code,
				}
			};

			return fs.writeJson(jsonPath, data)
				.then(() => {
					res.json({ code: 200 });
				})
				.catch(err => {
					res.json({ code: 400, message: err.message });
				})
		})
		.catch(err => {
			res.json({ code: 400, message: err.message });
		})
});

app.delete('/api/versionCheck/version/vendor/:id', async (req, res) => {
	const { id } = req.params;

	if (id === 'defaults') {
		res.json({ code: 400, message: "默认渠道无法删除" });
		return false;
	}

	return fs.readJson(jsonPath)
		.then(packageObj => {
			delete packageObj[id];

			return fs.writeJson(jsonPath, packageObj)
				.then(() => {
					res.json({ code: 200 });
				})
				.catch(err => {
					res.json({ code: 400, message: err.message });
				})
		})
		.catch(err => {
			res.json({ code: 400, message: err.message });
		})
});


app.post('/api/versionCheck/upload', upload.single('file'), async (req, res) => {
	const configPath = path.join(__dirname, '../config.js')
	delete require.cache[configPath];

	const config = require(configPath);

	if (req.file) {
		res.json({
			code: 200,
			data: {
				url: `${config.outUrl}/${req.file.filename}`,
				name: req.file.filename,
			}
		});
		return;
	} else {
		res.json({ code: 400 });
	}
});