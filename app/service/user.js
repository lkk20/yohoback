'use strict'
const Service = require('egg').Service

class UserService extends Service {
	//登录
	async login(phone, password) {
		const userinfo = await this.app.mysql.query(
			'SELECT userid FROM userinfo WHERE phone = ? AND PASSWORD = ?',
			[phone, password]
		)
		return userinfo
	}
	//检查将注册的账号是否存在
	async inspect(phone) {
		const count = await this.app.mysql.query(
			'SELECT COUNT(userid) FROM userinfo WHERE phone = ?',
			phone
		)
		return count
	}
	//注册
	async register(username, password, phone) {
		const result = await this.app.mysql.query(
			'INSERT INTO userinfo (username,PASSWORD,phone) VALUES(?,?,?)',
			[username, password, phone]
		)
		return result
	}
	//首页推荐商品
	async getRecommend(num) {
		const recommend = await this.app.mysql.query(
			'SELECT productid,title,price,image,issale,oldprice,cate FROM product WHERE isrecommend LIMIT ?',
			Number(num)
		)
		return recommend
	}
	//获取用户信息
	async getUserInfo(userid) {
		const userinfo = await this.app.mysql.query(
			'SELECT username,address,phone FROM userinfo WHERE userid = ?',
			Number(userid)
		)
		return userinfo
	}
	//修改用户信息
	async changeUserInfo(uid, name, address) {
		const result = await this.app.mysql.query(
			'UPDATE userinfo SET username = ? , address = ? WHERE userid = ?',
			[name, address, Number(uid)]
		)
		return result
	}
	//获取tops数据
	async getTops(num) {
		const tops = await this.app.mysql.query(
			'SELECT productid,price,image FROM product WHERE istop LIMIT ?',
			Number(num)
		)
		return tops
	}
	//获取四类数据
	async getFourCateData(cate, start, size) {
		const fourCateData = await this.app.mysql.query(
			'SELECT productid,title,issale,oldprice,price,image,cate FROM product WHERE ? LIMIT ? , ?',
			[cate, start, size]
		)
		return fourCateData
	}
	//根据类别获取数据
	async getDataByCate(cate, start, size) {
		const dataByCate = await this.app.mysql.query(
			'SELECT productid,title,issale,oldprice,price,image,cate FROM product WHERE cate = ? LIMIT ? , ?',
			[cate, start, size]
		)
		return dataByCate
	}
	//搜索 `%${key}%` 数据库搜索使用
	async searchByKey(key, start, size) {
		const result = await this.app.mysql.query(
			'SELECT productid,title,issale,oldprice,price,image,cate FROM product WHERE title LIKE ? OR productinfo LIKE ? OR cate = ? LIMIT ? , ?',
			[`%${key}%`, `%${key}%`, key, start, size]
		)
		return result
	}
	//通过商品id获取数据
	async getProductById(pid) {
		const result = await this.app.mysql.query(
			'SELECT title,cate,oldprice,price,image,swiperimage,detailmap,productinfo,issale,num FROM product WHERE productid = ?',
			pid
		)
		return result
	}
	//加入购物车
	async addCart(pid, uid, num) {
		let result = null
		//先检查购物车内是否已经有该商品
		const isHas = await this.app.mysql.query(
			'SELECT cartid,num FROM cart WHERE pid = ? AND uid = ?',
			[pid, uid]
		)
		if (isHas.length > 0) {
			if (isHas[0].num + num > 0) {
				//>0数量加num
				if (isHas[0].num + num <= 10) {
					//没有超过加购限制
					result = await this.app.mysql.query(
						'UPDATE cart SET num = ? WHERE cartid = ?',
						[isHas[0].num + num, isHas[0].cartid]
					)
				}
			} else {
				//购物车数量<0删除数据
				result = await this.app.mysql.query(
					'DELETE FROM cart WHERE cartid = ?',
					isHas[0].cartid
				)
			}
		} else {
			//插入数据
			if (num <= 10) {
				result = await this.app.mysql.query(
					'INSERT INTO cart (pid,uid,num) VALUES(?,?,?)',
					[pid, uid, num]
				)
			}
		}
		return result
	}
	//是否收藏
	async isCollect(pid, uid) {
		const result = await this.app.mysql.query(
			'SELECT COUNT(collectid) FROM collect WHERE pid = ? AND uid = ?',
			[pid, uid]
		)
		return result
	}
	//添加收藏
	async addCollect(pid, uid, image, title, price, cate, isCollect) {
		let result = null
		if (isCollect) {
			result = await this.app.mysql.query(
				'DELETE FROM collect WHERE pid = ? AND uid = ?',
				[pid, uid]
			)
		} else {
			result = await this.app.mysql.query(
				'INSERT INTO collect (uid,pid,image,title,price,cate) VALUES (?,?,?,?,?,?)',
				[uid, pid, image, title, price, cate]
			)
		}
		return result
	}
	//获取购物车数据
	async getCartData(uid) {
		const result = await this.app.mysql.query(
			'SELECT * FROM cart WHERE uid = ?',
			uid
		)
		return result
	}
	//获取收藏数据
	async getCollectData(uid) {
		const result = await this.app.mysql.query(
			'SELECT * FROM collect WHERE uid = ?',
			uid
		)
		return result
	}
	//获取浏览数据
	async getViewData(uid) {
		const result = await this.app.mysql.query(
			'SELECT * FROM view WHERE uid = ?',
			uid
		)
		return result
	}
	//添加浏览数据
	async addView(uid, pid, image) {
		const result = await this.app.mysql.query(
			'INSERT INTO view (uid,pid,image) VALUES (?,?,?)',
			[uid, pid, image]
		)
		return result
	}
	//清除浏览数据
	async deleteViews(uid) {
		const result = await this.app.mysql.query(
			'DELETE FROM view WHERE uid = ?',
			uid
		)
		return result
	}
	//清除购物车数据
	async deleteCartByCid(cid) {
		const result = await this.app.mysql.query(
			'DELETE FROM cart WHERE cartid = ?',
			cid
		)
		return result
	}
	//通过id获取购物车数据
	async getCartByCid(cid) {
		const result = await this.app.mysql.query(
			'SELECT * FROM cart WHERE cartid = ?',
			cid
		)
		return result
	}
}
module.exports = UserService
