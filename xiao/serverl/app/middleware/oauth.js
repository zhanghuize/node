module.exports = (opt, app) => {
	return async function oauth(ctx, next) {
		console.log('asd');
		await next();
		console.log('asd');
		console.log(ctx.session.userinfo);
	};
};
