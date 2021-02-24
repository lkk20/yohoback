'use strict'

const Controller = require('egg').Controller
// const crypto = require('crypto')
class UserController extends Controller {
	//首页推荐
	async getRecommend() {
		const { ctx } = this
		let { num } = ctx.request.body
		const recommend = await ctx.service.user.getRecommend(num)
		if (recommend.length > 0) {
			ctx.body = { message: '获取成功', code: 200, data: recommend }
		} else {
			ctx.body = { message: '暂无推荐商品', code: 400 }
		}
	}
	//登录
	async login() {
		const { ctx } = this
		let { phone, password } = ctx.request.body
		const userinfo = await ctx.service.user.login(phone, password)
		if (userinfo.length > 0) {
			const token = this.app.jwt.sign(
				{ phone: phone, password: password },
				this.app.config.jwt.secret,
				{
					expiresIn: '86400s'
				}
			)
			ctx.body = {
				data: userinfo,
				message: '登录成功',
				code: 200,
				token: token
			}
		} else {
			ctx.body = { message: '登录失败', code: 400 }
		}
	}
	//注册
	async register() {
		const { ctx } = this
		let { username, password, phone } = ctx.request.body
		//注册时检查手机号是否存在
		const isExistence = await ctx.service.user.inspect(phone)
		if (!isExistence[0]['COUNT(userid)']) {
			const result = await ctx.service.user.register(username, password, phone)
			ctx.body = { message: '注册成功', data: result, code: 200 }
		} else {
			ctx.body = { message: '手机号已经使用过了', data: isExistence, code: 400 }
		}
	}
	//获取用户信息
	async getUserInfo() {
		const { ctx } = this
		let { userid } = ctx.request.body
		const userinfo = await ctx.service.user.getUserInfo(userid)
		if (userinfo.length > 0) {
			ctx.body = { message: '查询成功', code: 200, data: userinfo[0] }
		} else {
			ctx.body = { message: '暂无数据', code: 400 }
		}
	}
	//top获取
	async getTops() {
		const { ctx } = this
		let { num } = ctx.request.body
		const tops = await ctx.service.user.getTops(num)
		if (tops.length > 0) {
			ctx.body = { message: '获取成功', code: 200, data: tops }
		} else {
			ctx.body = { message: '暂无热销商品', code: 400 }
		}
	}
	//四类数据获取
	async getFourCateData() {
		const { ctx } = this
		let { cate, start, size } = ctx.request.body
		const fourCateData = await ctx.service.user.getFourCateData(
			cate,
			start,
			size
		)
		if (fourCateData.length > 0) {
			ctx.body = { message: '获取数据成功', data: fourCateData, code: 200 }
		} else {
			ctx.body = { message: '暂无数据', code: 400 }
		}
	}
	//通过种类获取数据
	async getDataByCate() {
		const { ctx } = this
		let { cate, start, size } = ctx.request.body
		const dataByCate = await ctx.service.user.getDataByCate(cate, start, size)
		if (dataByCate.length > 0) {
			ctx.body = { message: '获取数据成功', data: dataByCate, code: 200 }
		} else {
			ctx.body = { message: '暂无数据', code: 400 }
		}
	}
	//搜索
	async searchByKey() {
		const { ctx } = this
		let { key, start, size } = ctx.request.body
		const productList = await ctx.service.user.searchByKey(key, start, size)
		if (productList.length > 0) {
			ctx.body = { message: '获取数据成功', data: productList, code: 200 }
		} else {
			ctx.body = { message: '暂无数据', code: 400 }
		}
	}
	//通过id获取商品
	async getProductById() {
		const { ctx } = this
		let { pid } = ctx.request.body
		const result = await ctx.service.user.getProductById(pid)
		if (result.length > 0) {
			ctx.body = { message: '获取数据成功', data: result[0], code: 200 }
		} else {
			ctx.body = { message: '数据为空', code: 400 }
		}
	}
	//加入购物车
	async addCart() {
		const { ctx } = this
		let { pid, uid, num } = ctx.request.body
		const result = await ctx.service.user.addCart(pid, uid, num)
		if (result && result.affectedRows) {
			ctx.body = { message: '加入购物车成功', code: 200 }
		} else {
			ctx.body = { message: '超过了加购限制', code: 400 }
		}
	}
	//是否收藏
	async isCollect() {
		const { ctx } = this
		let { pid, uid } = ctx.request.body
		const result = await ctx.service.user.isCollect(pid, uid)
		if (result[0]['COUNT(collectid)']) {
			ctx.body = { message: '已经收藏', code: 200 }
		} else {
			ctx.body = { message: '没有收藏', code: 400 }
		}
	}
	//添加收藏
	async addCollect() {
		const { ctx } = this
		let { pid, uid, image, title, price, cate, isCollect } = ctx.request.body
		const result = await ctx.service.user.addCollect(
			pid,
			uid,
			image,
			title,
			price,
			cate,
			isCollect
		)
		if (result.affectedRows) {
			ctx.body = { message: '操作成功', code: 200 }
		} else {
			ctx.body = { message: '操作失败', code: 400 }
		}
	}
	//获取购物车数据
	async getCartData() {
		const { ctx } = this
		let { uid } = ctx.request.body
		const result = await ctx.service.user.getCartData(uid)
		if (result.length > 0) {
			ctx.body = { message: '获取成功', data: result, code: 200 }
		} else {
			ctx.body = { message: '购物车为空', code: 400 }
		}
	}
	//获取收藏数据
	async getCollectData() {
		const { ctx } = this
		let { uid } = ctx.request.body
		const result = await ctx.service.user.getCollectData(uid)
		if (result.length > 0) {
			ctx.body = { message: '获取成功', data: result, code: 200 }
		} else {
			ctx.body = { message: '收藏为空', code: 400 }
		}
	}
	//获取游览数据
	async getViewData() {
		const { ctx } = this
		let { uid } = ctx.request.body
		const result = await ctx.service.user.getViewData(uid)
		if (result.length > 0) {
			ctx.body = { message: '获取成功', data: result, code: 200 }
		} else {
			ctx.body = { message: '浏览为空', code: 400 }
		}
	}
	//添加浏览数据
	async addView() {
		const { ctx } = this
		let { uid, pid, image } = ctx.request.body
		const result = await ctx.service.user.addView(uid, pid, image)
		if (result.affectedRows > 0) {
			ctx.body = { message: '添加成功', code: 200 }
		} else {
			ctx.body = { message: '添加失败', code: 400 }
		}
	}
	//清空浏览数据
	async deleteViews() {
		const { ctx } = this
		let { uid } = ctx.request.body
		const result = await ctx.service.user.deleteViews(uid)
		if (result.affectedRows > 0) {
			ctx.body = { message: '清除成功', code: 200 }
		} else {
			ctx.body = { message: '清除失败', code: 400 }
		}
	}
	//删除购物车数据
	async deleteCartByCid() {
		const { ctx } = this
		let { cid } = ctx.request.body
		const result = await ctx.service.user.deleteCartByCid(cid)
		if (result.affectedRows > 0) {
			ctx.body = { message: '清除成功', code: 200 }
		} else {
			ctx.body = { message: '清除失败', code: 400 }
		}
	}
	//通过id获取购物车数据
	async getCartByCid() {
		const { ctx } = this
		let { cid } = ctx.request.body
		const result = await ctx.service.user.getCartByCid(cid)
		if (result.length > 0) {
			ctx.body = { message: '获取成功', data: result, code: 200 }
		} else {
			ctx.body = { message: '数据为空', code: 400 }
		}
	}
	//修改用户数据
	async changeUserInfo() {
		const { ctx } = this
		let { uid, name, address } = ctx.request.body
		const result = await ctx.service.user.changeUserInfo(uid, name, address)
		if (result.affectedRows > 0) {
			ctx.body = { message: '修改成功', code: 200 }
		} else {
			ctx.body = { message: '修改失败', code: 400 }
		}
	}
}

module.exports = UserController
