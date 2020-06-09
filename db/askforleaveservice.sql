/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50724
Source Host           : localhost:3306
Source Database       : askforleaveservice

Target Server Type    : MYSQL
Target Server Version : 50724
File Encoding         : 65001

Date: 2020-06-09 14:52:30
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for leave
-- ----------------------------
DROP TABLE IF EXISTS `leave`;
CREATE TABLE `leave` (
  `le_id` int(11) NOT NULL AUTO_INCREMENT,
  `s_id` varchar(20) DEFAULT NULL,
  `le_starttime` date DEFAULT NULL COMMENT '请假开始时间',
  `le_endtime` date DEFAULT NULL COMMENT '请假结束时间',
  `le_leavetime` date DEFAULT NULL COMMENT '离校时间',
  `le_phone` varchar(30) DEFAULT NULL COMMENT '学生联系电话',
  `le_reason` text COMMENT '请假原因',
  `le_stayplace` varchar(255) DEFAULT NULL COMMENT '住宿位置',
  `ap_id` int(11) DEFAULT NULL COMMENT '实训申请ID',
  `le_status` int(11) DEFAULT '0' COMMENT '请假状态',
  `le_confirmtime` date DEFAULT NULL COMMENT '指导老师确认时间',
  `le_throughtime` date DEFAULT NULL COMMENT '专业负责人通过时间',
  `le_backreason` text COMMENT '驳回理由',
  PRIMARY KEY (`le_id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of leave
-- ----------------------------
INSERT INTO `leave` VALUES ('12', '201611104003', '2019-03-08', '2019-03-08', '2019-03-08', '17865168830', '实习', '北京', '12', '3', null, null, null);
INSERT INTO `leave` VALUES ('13', '201611104001', '2019-03-08', '2019-03-08', '2019-03-08', '17865168830', '实习', '北京', '13', '3', null, null, null);
INSERT INTO `leave` VALUES ('14', '201611104002', '2019-03-08', '2019-03-08', '2019-03-08', '17865168830', '实习', '北京', '14', '3', null, null, null);
INSERT INTO `leave` VALUES ('15', '201611104004', '2019-03-08', '2019-03-08', '2019-03-08', '17865168830', '实习', '北京', '15', '3', null, null, null);
INSERT INTO `leave` VALUES ('16', '201611104005', '2019-03-08', '2019-03-08', '2019-03-08', '17865168830', '实习', '北京', '16', '3', null, null, null);
INSERT INTO `leave` VALUES ('17', '201611104006', '2019-03-08', '2019-03-08', '2019-03-08', '17865168830', '实习', '北京', '17', '3', null, null, null);
INSERT INTO `leave` VALUES ('18', '201611104007', '2019-03-08', '2019-03-08', '2019-03-08', '17865168830', '实习', '北京', '18', '3', null, null, null);
INSERT INTO `leave` VALUES ('19', '201611104008', '2019-03-08', '2019-03-08', '2019-03-08', '17865168830', '实习', '北京', '19', '3', null, null, null);
INSERT INTO `leave` VALUES ('20', '201611104009', '2019-03-08', '2019-03-08', '2019-03-08', '17865168830', '实习', '北京', '20', '1', null, null, null);
INSERT INTO `leave` VALUES ('22', '201611104033', '2020-06-09', '2020-07-10', '2020-06-10', '17865168830', '实习', '北京市,北京市,东城区,小区', '23', '3', null, null, null);

-- ----------------------------
-- Table structure for trainingapply
-- ----------------------------
DROP TABLE IF EXISTS `trainingapply`;
CREATE TABLE `trainingapply` (
  `ap_id` int(11) NOT NULL AUTO_INCREMENT,
  `s_id` varchar(20) DEFAULT NULL,
  `ap_name` varchar(255) DEFAULT NULL COMMENT '实习名称',
  `ap_company` varchar(255) DEFAULT NULL COMMENT '实习公司',
  `ap_reason` text COMMENT '实习理由',
  `ap_place` varchar(255) DEFAULT NULL COMMENT '实习地址',
  `ap_teaName` varchar(20) DEFAULT NULL COMMENT '协作指导老师名称',
  `ap_teaTitle` varchar(20) DEFAULT NULL COMMENT '协作指导老师职务',
  `ap_teaPhone` varchar(20) DEFAULT NULL COMMENT '协作指导老师电话',
  `t_id` varchar(20) DEFAULT NULL,
  `spec_id` varchar(20) NOT NULL DEFAULT '' COMMENT '专业编号',
  `ifgraduate` varchar(1) DEFAULT '0' COMMENT '是否考研',
  `u_id` int(11) DEFAULT NULL,
  `ap_pdf_status` int(1) DEFAULT NULL COMMENT '实习证明提交状态',
  `ap_pdf_time` datetime DEFAULT NULL COMMENT '提交证明时间',
  PRIMARY KEY (`ap_id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of trainingapply
-- ----------------------------
INSERT INTO `trainingapply` VALUES ('12', '201611104003', '谷歌', '谷歌', '实训', '北京', '王老师', '经理', '17865168830', '110086', '101', '0', '1', null, null);
INSERT INTO `trainingapply` VALUES ('13', '201611104001', '谷歌', '谷歌', '实训', '北京', '王老师', '经理', '17865168830', '110042', '101', '0', '1', null, null);
INSERT INTO `trainingapply` VALUES ('14', '201611104002', '谷歌', '谷歌', '实训', '北京', '王老师', '经理', '17865168830', '110043', '101', '0', '1', null, null);
INSERT INTO `trainingapply` VALUES ('15', '201611104004', '谷歌', '谷歌', '实训', '北京', '王老师', '经理', '17865168830', '110086', '101', '0', '1', null, null);
INSERT INTO `trainingapply` VALUES ('16', '201611104005', '谷歌', '谷歌', '实训', '北京', '王老师', '经理', '17865168830', '110086', '101', '0', '1', null, null);
INSERT INTO `trainingapply` VALUES ('17', '201611104006', '谷歌', '谷歌', '实训', '北京', '王老师', '经理', '17865168830', '110086', '101', '0', '1', null, null);
INSERT INTO `trainingapply` VALUES ('18', '201611104007', '谷歌', '谷歌', '实训', '北京', '王老师', '经理', '17865168830', '110086', '101', '0', '1', null, null);
INSERT INTO `trainingapply` VALUES ('19', '201611104008', '谷歌', '谷歌', '实训', '北京', '王老师', '经理', '17865168830', '110086', '101', '0', '1', null, null);
INSERT INTO `trainingapply` VALUES ('20', '201611104009', '谷歌', '谷歌', '实训', '北京', '王老师', '经理', '17865168830', '110086', '101', '0', '1', null, null);
INSERT INTO `trainingapply` VALUES ('23', '201611104033', '服务网格', '网营科技', '实习', '北京市,北京市,东城区,小区', '王老师', '王老师', '17865168830', '110086', '101', '0', '3', null, null);
