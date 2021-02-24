/*
SQLyog Ultimate v12.09 (64 bit)
MySQL - 8.0.12 : Database - yoho
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`yoho` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;

USE `yoho`;

/*Table structure for table `admin` */

DROP TABLE IF EXISTS `admin`;

CREATE TABLE `admin` (
  `aid` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`aid`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `admin` */

insert  into `admin`(`aid`,`username`,`password`,`name`) values (1,'15237155820','123456789','李康康'),(2,'152371551','123456789',NULL),(3,'15237155821','123456789','111'),(4,'152371558201','123456789','111');

/*Table structure for table `cart` */

DROP TABLE IF EXISTS `cart`;

CREATE TABLE `cart` (
  `cartid` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) DEFAULT NULL,
  `pid` int(11) DEFAULT NULL,
  `sku` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `num` int(11) DEFAULT NULL,
  PRIMARY KEY (`cartid`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `cart` */

insert  into `cart`(`cartid`,`uid`,`pid`,`sku`,`num`) values (17,1,2,NULL,1),(16,1,1,NULL,1);

/*Table structure for table `collect` */

DROP TABLE IF EXISTS `collect`;

CREATE TABLE `collect` (
  `collectid` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `pid` int(11) DEFAULT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `price` float DEFAULT NULL,
  `cate` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`collectid`),
  KEY `userid` (`uid`),
  KEY `productid` (`pid`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `collect` */

insert  into `collect`(`collectid`,`uid`,`pid`,`image`,`title`,`price`,`cate`) values (5,1,1,'https://img10.static.yhbimg.com/goodsimg/2021/02/01/09/01a99d0fae9619d66e61a8317db45f859d.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60','SMG 休闲夹克',1299,'夹克');

/*Table structure for table `product` */

DROP TABLE IF EXISTS `product`;

CREATE TABLE `product` (
  `productid` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `cate` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `oldprice` float DEFAULT NULL,
  `price` float DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `swiperimage` text COLLATE utf8_unicode_ci,
  `detailmap` text COLLATE utf8_unicode_ci,
  `productinfo` text CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `isrecommend` tinyint(1) DEFAULT '0',
  `istop` tinyint(1) DEFAULT '0',
  `issale` tinyint(1) DEFAULT '0',
  `isnew` tinyint(1) DEFAULT '0',
  `ishot` tinyint(1) DEFAULT '0',
  `istuan` tinyint(1) DEFAULT '0',
  `num` int(11) DEFAULT NULL,
  PRIMARY KEY (`productid`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `product` */

insert  into `product`(`productid`,`title`,`cate`,`oldprice`,`price`,`image`,`swiperimage`,`detailmap`,`productinfo`,`isrecommend`,`istop`,`issale`,`isnew`,`ishot`,`istuan`,`num`) values (1,'SMG 休闲夹克11','夹克',123,1299,'https://img10.static.yhbimg.com/goodsimg/2021/02/01/09/01a99d0fae9619d66e61a8317db45f859d.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60','https://img11.static.yhbimg.com/goodsimg/2021/02/01/09/01a99d0fae9619d66e61a8317db45f859d.jpg?imageMogr2/thumbnail/450x600/position/center/quality/60,https://img12.static.yhbimg.com/goodsimg/2021/02/01/09/0276f8cf2407b336610a04d8ae0614cbb1.jpg?imageMogr2/thumbnail/450x600/position/center/quality/60','https://img12.static.yhbimg.com/goodsimg/2021/02/01/09/0228de823e6db469a00614584c067c79b4.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp,https://img11.static.yhbimg.com/goodsimg/2021/02/01/09/012d9e84e253270dd5bcbf1bc1a564de3b.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp,https://img12.static.yhbimg.com/goodsimg/2021/02/01/09/0231fb86a9ce7abd4c46c0cc6d444674d8.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp','选用一般洗涤剂即可，水温不超过45度,可轻拧绞，忌暴晒和烘干，洗后通风阴干。低温蒸汽熨烫，温度不能超过110度，不能干烫 。在日光下晾晒时，将里面朝外111。',1,1,1,0,0,0,100),(2,'李宁 韦德系列 图案印花短袖T恤','T恤',NULL,299,'https://img11.static.yhbimg.com/goodsimg/2020/12/02/11/015cc2e6cc75a77a324152ab7b6b0f3307.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60','https://img10.static.yhbimg.com/goodsimg/2020/12/02/11/015cc2e6cc75a77a324152ab7b6b0f3307.jpg?imageMogr2/thumbnail/450x600/position/center/quality/60','https://img13.static.yhbimg.com/goodsimg/2019/05/11/11/02877dea3ac069325169316a61ad5671c7.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp,https://img11.static.yhbimg.com/goodsimg/2019/05/11/11/0199e39fdf9facb633b882e20bec6819b7.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp,https://img11.static.yhbimg.com/goodsimg/2019/05/11/11/010f10cacb41f9252b31228343efd3d184.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp,https://img12.static.yhbimg.com/goodsimg/2019/05/11/11/0285e1123b1a067f09042ba8c2055b4e1d.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp,https://img11.static.yhbimg.com/goodsimg/2019/05/11/11/01fb18dac32872ebae5fe5530112572c9a.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp','涤纶类的服装可机洗，可手洗，可干洗，可用毛刷刷洗。不可曝晒，不宜烘干。熨烫温度不能超过110度，熨烫时一定要打蒸汽，不能干烫 。在日光下晾晒时，将里面朝外。',1,0,1,0,0,0,100),(3,'THETHING 装饰立体袋连帽夹克','夹克',498,448,'https://img12.static.yhbimg.com/goodsimg/2021/02/04/10/02c6c8f1b65538f5591ca458f224c39d0c.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60','https://img13.static.yhbimg.com/goodsimg/2021/02/04/10/02c6c8f1b65538f5591ca458f224c39d0c.jpg?imageMogr2/thumbnail/450x600/position/center/quality/60,https://img11.static.yhbimg.com/goodsimg/2021/02/04/10/0192c4d432508cc0f8162b7bf0db1107d3.jpg?imageMogr2/thumbnail/450x600/position/center/quality/60','https://img11.static.yhbimg.com/goodsimg/2021/02/04/10/01b782a6285adc7b4f7208a42275dc001f.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp,https://img12.static.yhbimg.com/goodsimg/2021/02/04/10/02201d916196ab8da390a9430ca60de61d.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp,https://img11.static.yhbimg.com/goodsimg/2021/02/04/10/01289a0fa94c390d07f5d643c245b24d5b.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp','涤纶类的服装可机洗，可手洗，可干洗，可用毛刷刷洗。不可曝晒，不宜烘干。熨烫温度不能超过110度，熨烫时一定要打蒸汽，不能干烫 。在日光下晾晒时，将里面朝外。',1,1,1,0,0,0,100),(4,'THETHING 主题岩石满印教练夹克','夹克',428,385,'https://img10.static.yhbimg.com/goodsimg/2021/02/04/10/016afa680676664364e835782d91d0a5c9.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60','https://img10.static.yhbimg.com/goodsimg/2021/02/04/10/016afa680676664364e835782d91d0a5c9.jpg?imageMogr2/thumbnail/450x600/position/center/quality/60,https://img10.static.yhbimg.com/goodsimg/2021/02/04/10/0105dd68348b7610a052f04096b51beb7e.jpg?imageMogr2/thumbnail/450x600/position/center/quality/60','https://img11.static.yhbimg.com/goodsimg/2021/02/04/10/0133fbbfd5b5a57a6179dc5186a47ea792.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp','涤纶类的服装可机洗，可手洗，可干洗，可用毛刷刷洗。不可曝晒，不宜烘干。熨烫温度不能超过110度，熨烫时一定要打蒸汽，不能干烫 。在日光下晾晒时，将里面朝外。',1,0,1,0,0,0,100),(5,'THETHING 连帽宽松廓形夹克','夹克',520,475,'https://img10.static.yhbimg.com/goodsimg/2021/02/04/10/0143f43de976fbe6a5ccbb4a1b3639fd00.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60','https://img10.static.yhbimg.com/goodsimg/2021/02/04/10/0143f43de976fbe6a5ccbb4a1b3639fd00.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60','https://img10.static.yhbimg.com/goodsimg/2021/02/04/10/0143f43de976fbe6a5ccbb4a1b3639fd00.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60','涤纶类的服装可机洗，可手洗，可干洗，可用毛刷刷洗。不可曝晒，不宜烘干。熨烫温度不能超过110度，熨烫时一定要打蒸汽，不能干烫 。在日光下晾晒时，将里面朝外。',1,0,1,0,0,0,100),(7,'THETHING 连帽宽松廓形夹克','夹克',520,475,'https://img10.static.yhbimg.com/goodsimg/2021/02/04/10/0143f43de976fbe6a5ccbb4a1b3639fd00.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60','https://img10.static.yhbimg.com/goodsimg/2021/02/04/10/0143f43de976fbe6a5ccbb4a1b3639fd00.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',NULL,'涤纶类的服装可机洗，可手洗，可干洗，可用毛刷刷洗。不可曝晒，不宜烘干。熨烫温度不能超过110度，熨烫时一定要打蒸汽，不能干烫 。在日光下晾晒时，将里面朝外。',1,1,1,0,0,0,100),(8,'THETHING 连帽宽松廓形夹克','夹克',520,475,'https://img10.static.yhbimg.com/goodsimg/2021/02/04/10/0143f43de976fbe6a5ccbb4a1b3639fd00.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',NULL,NULL,NULL,1,1,1,0,0,0,100),(10,'THETHING 连帽宽松廓形夹克','夹克',520,475,'https://img10.static.yhbimg.com/goodsimg/2021/02/04/10/0143f43de976fbe6a5ccbb4a1b3639fd00.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',NULL,NULL,NULL,1,1,1,0,0,0,100),(11,'THETHING 连帽宽松廓形夹克','夹克',520,475,'https://img10.static.yhbimg.com/goodsimg/2021/02/04/10/0143f43de976fbe6a5ccbb4a1b3639fd00.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',NULL,NULL,NULL,1,1,1,0,0,0,100),(12,'THETHING 连帽宽松廓形夹克','夹克',520,475,'https://img10.static.yhbimg.com/goodsimg/2021/02/04/10/0143f43de976fbe6a5ccbb4a1b3639fd00.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',NULL,NULL,NULL,1,1,1,0,0,0,100),(13,'THETHING 连帽宽松廓形夹克','夹克',520,475,'https://img10.static.yhbimg.com/goodsimg/2021/02/04/10/0143f43de976fbe6a5ccbb4a1b3639fd00.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',NULL,NULL,NULL,1,1,1,0,0,0,100),(14,'THETHING 连帽宽松廓形夹克','夹克',520,475,'https://img10.static.yhbimg.com/goodsimg/2021/02/04/10/0143f43de976fbe6a5ccbb4a1b3639fd00.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',NULL,NULL,NULL,1,1,1,0,0,0,100),(15,'THETHING 连帽宽松廓形夹克','夹克',520,475,'https://img10.static.yhbimg.com/goodsimg/2021/02/04/10/0143f43de976fbe6a5ccbb4a1b3639fd00.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',NULL,NULL,NULL,1,1,1,0,0,0,100);

/*Table structure for table `userinfo` */

DROP TABLE IF EXISTS `userinfo`;

CREATE TABLE `userinfo` (
  `userid` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  KEY `userid` (`userid`)
) ENGINE=MyISAM AUTO_INCREMENT=1234567897 DEFAULT CHARSET=utf8;

/*Data for the table `userinfo` */

insert  into `userinfo`(`userid`,`username`,`password`,`phone`,`address`) values (1,'李康康','123456789','15237155820','test村'),(2,'lll','123456','123456',NULL),(1234567895,'zs','123456789','13713713711',NULL),(1234567896,'zs','123456789','13713713712',NULL);

/*Table structure for table `view` */

DROP TABLE IF EXISTS `view`;

CREATE TABLE `view` (
  `vid` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) DEFAULT NULL,
  `pid` int(11) DEFAULT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`vid`)
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `view` */

insert  into `view`(`vid`,`uid`,`pid`,`image`) values (15,1,6,'https://img10.static.yhbimg.com/goodsimg/2021/02/04/10/0143f43de976fbe6a5ccbb4a1b3639fd00.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60'),(14,1,4,'https://img10.static.yhbimg.com/goodsimg/2021/02/04/10/016afa680676664364e835782d91d0a5c9.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60'),(13,1,1,'https://img10.static.yhbimg.com/goodsimg/2021/02/01/09/01a99d0fae9619d66e61a8317db45f859d.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60'),(12,1,3,'https://img12.static.yhbimg.com/goodsimg/2021/02/04/10/02c6c8f1b65538f5591ca458f224c39d0c.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60'),(11,1,3,'https://img12.static.yhbimg.com/goodsimg/2021/02/04/10/02c6c8f1b65538f5591ca458f224c39d0c.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60'),(16,1,4,'https://img10.static.yhbimg.com/goodsimg/2021/02/04/10/016afa680676664364e835782d91d0a5c9.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60'),(17,1,3,'https://img12.static.yhbimg.com/goodsimg/2021/02/04/10/02c6c8f1b65538f5591ca458f224c39d0c.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60'),(18,1,7,''),(19,1,7,''),(20,1,1,'https://img10.static.yhbimg.com/goodsimg/2021/02/01/09/01a99d0fae9619d66e61a8317db45f859d.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60'),(21,1,2,'https://img11.static.yhbimg.com/goodsimg/2020/12/02/11/015cc2e6cc75a77a324152ab7b6b0f3307.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60'),(22,1,2,'https://img11.static.yhbimg.com/goodsimg/2020/12/02/11/015cc2e6cc75a77a324152ab7b6b0f3307.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
