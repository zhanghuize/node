const { Service } = require('egg');

class UserService extends Service {
	async login({ username, password }) {
		return this.app.mysql.select('user1', { username, password });
	}
}
module.exports = UserService;
