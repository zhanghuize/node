const koa = require('koa');
const path = require('path');
const koaRouter = require('koa-router');
const bodyParser = require('koa-bodyparser');
const koaStatic = require('koa-static');
const staticPath = koaStatic(path.join(process.cwd(), 'app/public'));

const app = new koa();
const router = new koaRouter();
// const {} = require('./controller/user');
// const {} = require('./controller/home');

app.use(staticPath);
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

router.post;

app.listen(process.env.PORT || 3000, res => {
	console.log('服务启动成功');
});
