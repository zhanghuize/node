const mysql = require('mysql');
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '123321',
	database: 'ab_zzj'
});

connection.connect();

module.exports.query = function($sql, $params = []) {
	return new Promise((resolve, reject) => {
		connection.query($sql, $params, (error, result) => {
			if (error) {
				reject(error);
			} else {
				resolve(result);
			}
		});
	});
};
