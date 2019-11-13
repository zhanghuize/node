'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
	const { router, controller } = app;
	router.get('/', controller.home.index);
	router.get('/getCarousel', controller.home.carousel);
	router.get('/getNavigator', controller.home.navigator);
	router.get('/getUser', controller.home.getUser);
	router.post('/addList', controller.home.addList);
	router.post('/deleList', controller.home.deleList);
	router.get('/getType', controller.home.getType);
	router.post('/postProduct', controller.home.postProduct);
	router.post('/postFenye', controller.home.postFenye);
	router.post('/postXiugai', controller.home.postXiugai);
	router.post('/user/login', controller.user.login);
};
