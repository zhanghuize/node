'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
	async index() {
		const { ctx } = this;
		ctx.body = 'hi, egg';
	}
	async carousel() {
		const result = await this.app.mysql.query('select * from banner');
		if (result.length) {
			this.ctx.body = {
				code: 1,
				result
			};
		} else {
			this.ctx.body = {
				code: 0
			};
		}
	}

	async navigator() {
		const result = await this.app.mysql.query('select * from navigator');
		if (result.length) {
			this.ctx.body = {
				code: 1,
				result
			};
		} else {
			this.ctx.body = {
				code: 0
			};
		}
	}

	async getUser() {
		const result = await this.app.mysql.query('select * from user');
		if (result.length) {
			this.ctx.body = {
				code: 1,
				result
			};
		} else {
			this.ctx.body = {
				code: 0
			};
		}
	}

	async addList() {
		const {
			username,
			password,
			mobile,
			gender,
			address
		} = this.ctx.request.body.datalist;
		const $sql =
			'insert into user (username,password,mobile,gender,address) values (?,?,?,?,?)';
		const $params = [username, password, mobile, gender, address];
		const result = await this.app.mysql.query($sql, $params);
		console.log(result);
		if (result.affectedRows > 0) {
			this.ctx.body = {
				code: 1,
				result
			};
		} else {
			this.ctx.body = {
				code: 0
			};
		}
	}

	async deleList() {
		const { id } = this.ctx.request.body;
		const $sql = 'DELETE FROM user WHERE id=?';
		const $params = [id];
		const result = await this.app.mysql.query($sql, $params);
		console.log(result);
		if (result.affectedRows > 0) {
			this.ctx.body = {
				code: 1
			};
		} else {
			this.ctx.body = {
				code: 0
			};
		}
	}

	async getType() {
		const result = await this.app.mysql.query('select * from type');
		if (result.length) {
			this.ctx.body = {
				code: 1,
				result
			};
		} else {
			this.ctx.body = {
				code: 0
			};
		}
	}

	async postProduct() {
		const { id } = this.ctx.request.body;
		const $sql = `select * FROM product WHERE type LIKE '%${id}%'`;
		const result = await this.app.mysql.query($sql);
		console.log(result);
		if (result.length) {
			this.ctx.body = {
				code: 1,
				result
			};
		} else {
			this.ctx.body = {
				code: 0
			};
		}
	}

	async postFenye() {
		const { id } = this.ctx.request.body;
		const $sql = 'select * FROM navigator LIMIT ?,?';
		const $params = [id * 1, 2];
		const result = await this.app.mysql.query($sql, $params);
		console.log(result);
		if (result.length) {
			this.ctx.body = {
				code: 1,
				result
			};
		} else {
			this.ctx.body = {
				code: 0
			};
		}
	}

	async postXiugai() {
		const {
			username,
			password,
			mobile,
			gender,
			address,
			id
		} = this.ctx.request.body.datalistl;
		const $sql =
			'UPDATE user SET username=?, password=?, mobile=?,gender=?, address=? WHERE id=?;';
		const $params = [username, password, mobile, gender, address, id];
		const result = await this.app.mysql.query($sql, $params);
		if (result.affectedRows > 0) {
			this.ctx.body = {
				code: 1
			};
		} else {
			this.ctx.body = {
				code: 0
			};
		}
	}
}

module.exports = HomeController;
