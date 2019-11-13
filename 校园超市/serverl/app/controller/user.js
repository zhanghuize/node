'use strict';

const { Controller } = require('egg');
const md5 = require('md5');
class UserControll extends Controller {
	async login() {
		const params = this.ctx.request.body;
		const result = await this.ctx.service.user.login(params);
		const token = md5(
			JSON.stringify({
				header: {
					alg: 'md5',
					typ: 'jwt'
				},
				payload: {
					uid: result[0].id,
					tim: new Date().getTime()
				}
			})
		);

		if (result.length) {
			this.ctx.session.userinfo = {
				id: result[0].id,
				token
			};
			console.log(this.ctx.session.userinfo);
			this.ctx.body = {
				code: 1,
				result,
				id: result[0].id,
				token
			};
		} else {
			this.ctx.body = {
				code: 0
			};
		}
	}
}

module.exports = UserControll;
