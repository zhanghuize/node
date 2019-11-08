const koa = require('koa');
const path = require('path');
const koaRouter = require('koa-router')
const bodyParser = require('koa-bodyparser')
const koaStatic = require('koa-static');
const staticPath = koaStatic(path.join(process.cwd(),'app/public'));

const app = new koa();
const router = new koaRouter();
const {login,registry} = require('./controller/user');
const {carouselList,navigatorList,productList} = require('./controller/home')

app.use(staticPath)
app.use(bodyParser())
app.use(router.routes());
app.use(router.allowedMethods());

router.post('/user/registry', registry);
router.post('/user/login',login);
router.get('/getCarouselList',carouselList)
router.get('/getNavigatorList',navigatorList)
router.get('/getProductList',productList)

app.listen(8080,()=>{
    console.log('server is running at 8080')
})