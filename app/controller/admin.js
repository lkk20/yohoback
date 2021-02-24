'use strict'

const Controller = require('egg').Controller

class AdminController extends Controller {
	async getAdminInfo() {
		const { ctx } = this
		let { aid } = ctx.request.body
		const adminInfo = await ctx.service.admin.getAdminInfo(aid)
		if (adminInfo.length > 0) {
			ctx.body = { message: '获取成功', data: adminInfo, code: 200 }
		} else {
			ctx.body = { message: '修改失败', code: 400 }
		}
	}
	async adminLogin() {
		const { ctx } = this
		let { username, password } = ctx.request.body
		const result = await ctx.service.admin.adminLogin(username, password)
		if (result.length > 0) {
			const token = this.app.jwt.sign(
				{ username: username, password: password },
				this.app.config.jwt.secret,
				{
					expiresIn: '86400s'
				}
			)

			ctx.body = {
				data: result,
				message: '登录成功',
				code: 200,
				token: token
			}
		} else {
			ctx.body = { message: '密码或账号错误', code: 400 }
		}
	}
	//注册账号
	async adminRegister() {
		const { ctx } = this
		let { username, password, name } = ctx.request.body
		//检查账号是否使用
		const inspectResult = await ctx.service.admin.inspectUsername(username)
		if (!inspectResult[0]['COUNT(aid)']) {
			const result = await ctx.service.admin.adminRegister(
				username,
				password,
				name
			)
			ctx.body = { message: '注册成功', code: 200 }
		} else {
			ctx.body = { message: '该账号存在', code: 400 }
		}
	}
	//获取所有用户数据
	async getAllUserInfo() {
		const { ctx } = this
		let { start, limit } = ctx.request.body
		//检查账号是否使用
		const result = await ctx.service.admin.getAllUserInfo(start, limit)
		const total = await ctx.service.admin.getAllUserNum()
		if (result.length > 0) {
			ctx.body = {
				message: '获取成功',
				data: result,
				total: total[0][['COUNT(*)']],
				code: 200
			}
		} else {
			ctx.body = { message: '获取失败', code: 400 }
		}
	}
	async getAllProducts() {
		const { ctx } = this
		let { start, limit } = ctx.request.body
		//检查账号是否使用
		const result = await ctx.service.admin.getAllProducts(start, limit)
		const total = await ctx.service.admin.getAllProductsNum()
		if (result.length > 0) {
			ctx.body = {
				message: '获取成功',
				data: result,
				total: total[0][['COUNT(*)']],
				code: 200
			}
		} else {
			ctx.body = { message: '获取失败', code: 400 }
		}
	}
	async adminGetProduct() {
		const { ctx } = this
		let { pid } = ctx.request.body
		//检查账号是否使用
		const result = await ctx.service.admin.adminGetProduct(pid)
		if (result.length > 0) {
			ctx.body = {
				message: '获取成功',
				data: result,
				code: 200
			}
		} else {
			ctx.body = { message: '获取失败', code: 400 }
		}
	}
	async changeProduct() {
		const { ctx } = this
		let { pid, newData } = ctx.request.body
		//检查账号是否使用
		const result = await ctx.service.admin.changeProduct(pid, newData)
		if (result.affectedRows === 1) {
			ctx.body = {
				message: '更新成功',
				code: 200
			}
		} else {
			ctx.body = { message: '更新失败', code: 400 }
		}
	}
	async deleteProduct() {
		const { ctx } = this
		let { pid } = ctx.request.body
		//检查账号是否使用
		const result = await ctx.service.admin.deleteProduct(pid)
		if (result.affectedRows === 1) {
			ctx.body = {
				message: '删除成功',
				code: 200
			}
		} else {
			ctx.body = { message: '删除失败', code: 400 }
		}
	}
	async addProduct() {
		const { ctx } = this
		let { newData } = ctx.request.body
		//检查账号是否使用
		const result = await ctx.service.admin.addProduct(newData)
		if (result.affectedRows === 1) {
			ctx.body = {
				message: '添加成功',
				code: 200
			}
		} else {
			ctx.body = { message: '添加失败', code: 400 }
		}
	}
	async searchData() {
		const { ctx } = this
		let { key, start, size } = ctx.request.body
		//检查账号是否使用
		const { total, data } = await ctx.service.admin.searchData(key, start, size)

		if (data.length > 0 && total !== 0) {
			ctx.body = {
				message: '搜索成功',
				data: data,
				total: total[0]['COUNT(*)'],
				code: 200
			}
		} else {
			ctx.body = { message: '暂无数据', code: 400 }
		}
	}
}

module.exports = AdminController
