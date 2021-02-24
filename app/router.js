'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
	const { router, controller, middleware } = app
	const jwtErr = middleware.jwtErr(app.config.jwt)
	//登录
	router.post('/api/login', controller.user.login)
	//注册
	router.post('/api/register', controller.user.register)
	//获取推荐
	router.post('/api/getRecommend', controller.user.getRecommend)
	//获取top
	router.post('/api/getTops', controller.user.getTops)
	//获取活动类
	router.post('/api/getFourCateData', controller.user.getFourCateData)
	//根据cate获取数据
	router.post('/api/getDataByCate', controller.user.getDataByCate)
	//根据关键词搜索
	router.post('/api/searchByKey', controller.user.searchByKey)
	//根据ID获取产品信息
	router.post('/api/getProductById', controller.user.getProductById)
	//添加购物车
	router.post('/api/addCart', jwtErr, controller.user.addCart)
	//是否收藏
	router.post('/api/isCollect', jwtErr, controller.user.isCollect)
	//添加收藏
	router.post('/api/addCollect', jwtErr, controller.user.addCollect)
	//获取购物车数据
	router.post('/api/getCartData', jwtErr, controller.user.getCartData)
	//获取收藏数据
	router.post('/api/getCollectData', jwtErr, controller.user.getCollectData)
	//获取用户信息
	router.post('/api/getUserInfo', jwtErr, controller.user.getUserInfo)
	//获取游览数据
	router.post('/api/getViewData', jwtErr, controller.user.getViewData)
	//添加浏览数据
	router.post('/api/addView', jwtErr, controller.user.addView)
	//清空浏览
	router.post('/api/deleteViews', jwtErr, controller.user.deleteViews)
	//删除购物车数据
	router.post('/api/deleteCartByCid', jwtErr, controller.user.deleteCartByCid)
	//通过id获取购物车数据
	router.post('/api/getCartByCid', jwtErr, controller.user.getCartByCid)
	//修改用户数据
	router.post('/api/changeUserInfo', jwtErr, controller.user.changeUserInfo)
	//后台管理
	//登录
	router.post('/api/adminLogin', controller.admin.adminLogin)
	//注册
	router.post('/api/adminRegister', controller.admin.adminRegister)
	//管理员信息
	router.post('/api/getAdminInfo', jwtErr, controller.admin.getAdminInfo)
	//获取用户信息
	router.post('/api/getAllUserInfo', jwtErr, controller.admin.getAllUserInfo)
	//获取所有商品
	router.post('/api/getAllProducts', jwtErr, controller.admin.getAllProducts)
	//根据ID获取产品
	router.post('/api/adminGetProduct', jwtErr, controller.admin.adminGetProduct)
	//编辑后保存商品
	router.post('/api/changeProduct', jwtErr, controller.admin.changeProduct)
	//删除
	router.post('/api/deleteProduct', jwtErr, controller.admin.deleteProduct)
	//添加
	router.post('/api/addProduct', jwtErr, controller.admin.addProduct)
	//搜索商品
	router.post('/api/searchData', jwtErr, controller.admin.searchData)
}
