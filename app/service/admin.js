'use strict'
const Service = require('egg').Service

class AdminService extends Service {
	//获取管理者信息
	async getAdminInfo(aid) {
		const adminInfo = await this.app.mysql.query(
			'SELECT name FROM admin WHERE aid = ?',
			aid
		)
		return adminInfo
	}
	//登录
	async adminLogin(username, password) {
		const result = await this.app.mysql.query(
			'SELECT aid FROM admin WHERE username = ? AND password = ?',
			[username, password]
		)
		return result
	}
	//检查手机号是否使用过了
	async inspectUsername(username) {
		const count = await this.app.mysql.query(
			'SELECT COUNT(aid) FROM admin WHERE username = ?',
			username
		)
		return count
	}
	//注册
	async adminRegister(username, password, name) {
		const result = await this.app.mysql.query(
			'INSERT INTO admin (username,PASSWORD,name) VALUES(?,?,?)',
			[username, password, name]
		)
		return result
	}
	//获取用户数量
	async getAllUserNum() {
		const count = await this.app.mysql.query('SELECT COUNT(*) FROM userinfo')
		return count
	}
	//获取用户信息
	async getAllUserInfo(start, limit) {
		const result = await this.app.mysql.query(
			'SELECT userid , username , phone , address FROM userinfo LIMIT ? , ?',
			[start, limit]
		)
		return result
	}
	async getAllProductsNum() {
		const count = await this.app.mysql.query('SELECT COUNT(*) FROM product')
		return count
	}
	async getAllProducts(start, limit) {
		const result = await this.app.mysql.query(
			'SELECT productid , title , cate , price , image , num FROM product LIMIT ? , ?',
			[start, limit]
		)
		return result
	}
	async adminGetProduct(pid) {
		const result = await this.app.mysql.query(
			'SELECT * FROM product WHERE productid = ?',
			pid
		)
		return result
	}
	async changeProduct(pid, newData) {
		const options = {
			where: {
				productid: pid
			}
		}
		const result = await this.app.mysql.update('product', newData, options)
		return result
	}
	async deleteProduct(pid) {
		const result = await this.app.mysql.query(
			'DELETE FROM product WHERE productid = ?',
			pid
		)
		return result
	}
	async addProduct(newData) {
		const result = await this.app.mysql.insert('product', newData)
		return result
	}
	async searchData(key, start, size) {
		const result = {}
		result.total = await this.app.mysql.query(
			'SELECT COUNT(*) FROM product WHERE title LIKE ? OR productinfo LIKE ? OR cate = ?',
			[`%${key}%`, `%${key}%`, key]
		)
		result.data = await this.app.mysql.query(
			'SELECT * FROM product WHERE title LIKE ? OR productinfo LIKE ? OR cate = ? LIMIT ? , ?',
			[`%${key}%`, `%${key}%`, key, start, size]
		)
		return result
	}
}
module.exports = AdminService
