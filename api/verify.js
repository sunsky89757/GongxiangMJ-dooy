module.exports = (req, res) => {
	let obj = {
		"status": "Fail",
		"message": "密钥无效 | Secret key is invalid",
		"data": null
	};
	const auth_secret_keys = process.env.AUTH_SECRET_KEY? process.env.AUTH_SECRET_KEY.trim().split(',').filter(item => item !== ''):[];
	if (req.body && req.body.token && auth_secret_keys.include(req.body.token)) obj = {
		status: 'Success',
		message: 'Verify successfully',
		data: null
	}
	res.setHeader('Content-type', 'application/json');
	res.writeHead(200).end(
		JSON.stringify(obj)
	);
}
