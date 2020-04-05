import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
var store = new Vuex.Store({
  state: {
    cities: [
      {
        id: 1,
        value: "北京市",
        label: "北京市",
        spell: "beijingshi",
        abb: "bjs",
        children: [
          {
            id: 2,
            value: "北京市",
            label: "北京市",
            spell: "beijingshi",
            abb: "bjs",
            children: [
              {
                id: 3,
                value: "东城区",
                label: "东城区",
                spell: "dongchengqu",
                abb: "dcq"
              },
              {
                id: 4,
                value: "西城区",
                label: "西城区",
                spell: "xichengqu",
                abb: "xcq"
              },
              {
                id: 5,
                value: "崇文区",
                label: "崇文区",
                spell: "chongwenqu",
                abb: "cwq"
              },
              {
                id: 6,
                value: "宣武区",
                label: "宣武区",
                spell: "xuanwuqu",
                abb: "xwq"
              },
              {
                id: 7,
                value: "朝阳区",
                label: "朝阳区",
                spell: "chaoyangqu",
                abb: "cyq"
              },
              {
                id: 8,
                value: "丰台区",
                label: "丰台区",
                spell: "fengtaiqu",
                abb: "ftq"
              },
              {
                id: 9,
                value: "石景山区",
                label: "石景山区",
                spell: "shijingshanqu",
                abb: "sjsq"
              },
              {
                id: 10,
                value: "海淀区",
                label: "海淀区",
                spell: "haidianqu",
                abb: "hdq"
              },
              {
                id: 11,
                value: "门头沟区",
                label: "门头沟区",
                spell: "mentougouqu",
                abb: "mtgq"
              },
              {
                id: 12,
                value: "房山区",
                label: "房山区",
                spell: "fangshanqu",
                abb: "fsq"
              },
              {
                id: 13,
                value: "通州区",
                label: "通州区",
                spell: "tongzhouqu",
                abb: "tzq"
              },
              {
                id: 14,
                value: "顺义区",
                label: "顺义区",
                spell: "shunyiqu",
                abb: "syq"
              },
              {
                id: 15,
                value: "昌平区",
                label: "昌平区",
                spell: "changpingqu",
                abb: "cpq"
              },
              {
                id: 16,
                value: "大兴区",
                label: "大兴区",
                spell: "daxingqu",
                abb: "dxq"
              },
              {
                id: 17,
                value: "怀柔区",
                label: "怀柔区",
                spell: "huairouqu",
                abb: "hrq"
              },
              {
                id: 18,
                value: "平谷区",
                label: "平谷区",
                spell: "pingguqu",
                abb: "pgq"
              }
            ]
          }
        ]
      },
      {
        id: 22,
        value: "天津市",
        label: "天津市",
        spell: "tianjinshi",
        abb: "tjs",
        children: [
          {
            id: 23,
            value: "天津市",
            label: "天津市",
            spell: "tianjinshi",
            abb: "tjs",
            children: [
              {
                id: 24,
                value: "和平区",
                label: "和平区",
                spell: "hepingqu",
                abb: "hpq"
              },
              {
                id: 25,
                value: "河东区",
                label: "河东区",
                spell: "hedongqu",
                abb: "hdq"
              },
              {
                id: 26,
                value: "河西区",
                label: "河西区",
                spell: "hexiqu",
                abb: "hxq"
              },
              {
                id: 27,
                value: "南开区",
                label: "南开区",
                spell: "nankaiqu",
                abb: "nkq"
              },
              {
                id: 28,
                value: "河北区",
                label: "河北区",
                spell: "hebeiqu",
                abb: "hbq"
              },
              {
                id: 29,
                value: "红桥区",
                label: "红桥区",
                spell: "hongqiaoqu",
                abb: "hqq"
              },
              {
                id: 30,
                value: "塘沽区",
                label: "塘沽区",
                spell: "tangguqu",
                abb: "tgq"
              },
              {
                id: 31,
                value: "汉沽区",
                label: "汉沽区",
                spell: "hanguqu",
                abb: "hgq"
              },
              {
                id: 32,
                value: "大港区",
                label: "大港区",
                spell: "dagangqu",
                abb: "dgq"
              },
              {
                id: 33,
                value: "东丽区",
                label: "东丽区",
                spell: "dongliqu",
                abb: "dlq"
              },
              {
                id: 34,
                value: "西青区",
                label: "西青区",
                spell: "xiqingqu",
                abb: "xqq"
              },
              {
                id: 35,
                value: "津南区",
                label: "津南区",
                spell: "jinnanqu",
                abb: "jnq"
              },
              {
                id: 36,
                value: "北辰区",
                label: "北辰区",
                spell: "beichenqu",
                abb: "bcq"
              },
              {
                id: 37,
                value: "武清区",
                label: "武清区",
                spell: "wuqingqu",
                abb: "wqq"
              },
              {
                id: 38,
                value: "宝坻区",
                label: "宝坻区",
                spell: "baochiqu",
                abb: "bcq"
              }
            ]
          }
        ]
      },
      {
        id: 43,
        value: "河北省",
        label: "河北省",
        spell: "hebeisheng",
        abb: "hbs",
        children: [
          {
            id: 44,
            value: "石家庄市",
            label: "石家庄市",
            spell: "shijiazhuangshi",
            abb: "sjzs",
            children: [
              {
                id: 46,
                value: "长安区",
                label: "长安区",
                spell: "changanqu",
                abb: "caq"
              },
              {
                id: 47,
                value: "桥东区",
                label: "桥东区",
                spell: "qiaodongqu",
                abb: "qdq"
              },
              {
                id: 48,
                value: "桥西区",
                label: "桥西区",
                spell: "qiaoxiqu",
                abb: "qxq"
              },
              {
                id: 49,
                value: "新华区",
                label: "新华区",
                spell: "xinhuaqu",
                abb: "xhq"
              },
              {
                id: 50,
                value: "井陉矿区",
                label: "井陉矿区",
                spell: "jingxingkuangqu",
                abb: "jxkq"
              },
              {
                id: 51,
                value: "裕华区",
                label: "裕华区",
                spell: "yuhuaqu",
                abb: "yhq"
              },
              {
                id: 52,
                value: "井陉县",
                label: "井陉县",
                spell: "jingxingxian",
                abb: "jxx"
              },
              {
                id: 53,
                value: "正定县",
                label: "正定县",
                spell: "zhengdingxian",
                abb: "zdx"
              },
              {
                id: 54,
                value: "栾城县",
                label: "栾城县",
                spell: "luanchengxian",
                abb: "lcx"
              },
              {
                id: 55,
                value: "行唐县",
                label: "行唐县",
                spell: "xingtangxian",
                abb: "xtx"
              },
              {
                id: 56,
                value: "灵寿县",
                label: "灵寿县",
                spell: "lingshouxian",
                abb: "lsx"
              },
              {
                id: 57,
                value: "高邑县",
                label: "高邑县",
                spell: "gaoyixian",
                abb: "gyx"
              },
              {
                id: 58,
                value: "深泽县",
                label: "深泽县",
                spell: "shenzexian",
                abb: "szx"
              },
              {
                id: 59,
                value: "赞皇县",
                label: "赞皇县",
                spell: "zanhuangxian",
                abb: "zhx"
              },
              {
                id: 60,
                value: "无极县",
                label: "无极县",
                spell: "wujixian",
                abb: "wjx"
              },
              {
                id: 61,
                value: "平山县",
                label: "平山县",
                spell: "pingshanxian",
                abb: "psx"
              },
              {
                id: 62,
                value: "元氏县",
                label: "元氏县",
                spell: "yuanshixian",
                abb: "ysx"
              },
              {
                id: 63,
                value: "赵县",
                label: "赵县",
                spell: "zhaoxian",
                abb: "zx"
              },
              {
                id: 64,
                value: "辛集市",
                label: "辛集市",
                spell: "xinjishi",
                abb: "xjs"
              },
              {
                id: 65,
                value: "藁城市",
                label: "藁城市",
                spell: "gaochengshi",
                abb: "gcs"
              },
              {
                id: 66,
                value: "晋州市",
                label: "晋州市",
                spell: "jinzhoushi",
                abb: "jzs"
              },
              {
                id: 67,
                value: "新乐市",
                label: "新乐市",
                spell: "xinleshi",
                abb: "xls"
              },
              {
                id: 68,
                value: "鹿泉市",
                label: "鹿泉市",
                spell: "luquanshi",
                abb: "lqs"
              }
            ]
          },
          {
            id: 69,
            value: "唐山市",
            label: "唐山市",
            spell: "tangshanshi",
            abb: "tss",
            children: [
              {
                id: 71,
                value: "路南区",
                label: "路南区",
                spell: "lunanqu",
                abb: "lnq"
              },
              {
                id: 72,
                value: "路北区",
                label: "路北区",
                spell: "lubeiqu",
                abb: "lbq"
              },
              {
                id: 73,
                value: "古冶区",
                label: "古冶区",
                spell: "guyequ",
                abb: "gyq"
              },
              {
                id: 74,
                value: "开平区",
                label: "开平区",
                spell: "kaipingqu",
                abb: "kpq"
              },
              {
                id: 75,
                value: "丰南区",
                label: "丰南区",
                spell: "fengnanqu",
                abb: "fnq"
              },
              {
                id: 76,
                value: "丰润区",
                label: "丰润区",
                spell: "fengrunqu",
                abb: "frq"
              },
              {
                id: 77,
                value: "滦县",
                label: "滦县",
                spell: "luanxian",
                abb: "lx"
              },
              {
                id: 78,
                value: "滦南县",
                label: "滦南县",
                spell: "luannanxian",
                abb: "lnx"
              },
              {
                id: 79,
                value: "乐亭县",
                label: "乐亭县",
                spell: "letingxian",
                abb: "ltx"
              },
              {
                id: 80,
                value: "迁西县",
                label: "迁西县",
                spell: "qianxixian",
                abb: "qxx"
              },
              {
                id: 81,
                value: "玉田县",
                label: "玉田县",
                spell: "yutianxian",
                abb: "ytx"
              },
              {
                id: 82,
                value: "唐海县",
                label: "唐海县",
                spell: "tanghaixian",
                abb: "thx"
              },
              {
                id: 83,
                value: "遵化市",
                label: "遵化市",
                spell: "zunhuashi",
                abb: "zhs"
              },
              {
                id: 84,
                value: "迁安市",
                label: "迁安市",
                spell: "qiananshi",
                abb: "qas"
              }
            ]
          },
          {
            id: 85,
            value: "秦皇岛市",
            label: "秦皇岛市",
            spell: "qinhuangdaoshi",
            abb: "qhds",
            children: [
              {
                id: 87,
                value: "海港区",
                label: "海港区",
                spell: "haigangqu",
                abb: "hgq"
              },
              {
                id: 88,
                value: "山海关区",
                label: "山海关区",
                spell: "shanhaiguanqu",
                abb: "shgq"
              },
              {
                id: 89,
                value: "北戴河区",
                label: "北戴河区",
                spell: "beidaihequ",
                abb: "bdhq"
              },
              {
                id: 90,
                value: "青龙满族自治县",
                label: "青龙满族自治县",
                spell: "qinglongmanzuzizhixian",
                abb: "qlmzzzx"
              },
              {
                id: 91,
                value: "昌黎县",
                label: "昌黎县",
                spell: "changlixian",
                abb: "clx"
              },
              {
                id: 92,
                value: "抚宁县",
                label: "抚宁县",
                spell: "funingxian",
                abb: "fnx"
              },
              {
                id: 93,
                value: "卢龙县",
                label: "卢龙县",
                spell: "lulongxian",
                abb: "llx"
              }
            ]
          },
          {
            id: 94,
            value: "邯郸市",
            label: "邯郸市",
            spell: "handanshi",
            abb: "hds",
            children: [
              {
                id: 96,
                value: "邯山区",
                label: "邯山区",
                spell: "hanshanqu",
                abb: "hsq"
              },
              {
                id: 97,
                value: "丛台区",
                label: "丛台区",
                spell: "congtaiqu",
                abb: "ctq"
              },
              {
                id: 98,
                value: "复兴区",
                label: "复兴区",
                spell: "fuxingqu",
                abb: "fxq"
              },
              {
                id: 99,
                value: "峰峰矿区",
                label: "峰峰矿区",
                spell: "fengfengkuangqu",
                abb: "ffkq"
              },
              {
                id: 100,
                value: "邯郸县",
                label: "邯郸县",
                spell: "handanxian",
                abb: "hdx"
              },
              {
                id: 101,
                value: "临漳县",
                label: "临漳县",
                spell: "linzhangxian",
                abb: "lzx"
              },
              {
                id: 102,
                value: "成安县",
                label: "成安县",
                spell: "chenganxian",
                abb: "cax"
              },
              {
                id: 103,
                value: "大名县",
                label: "大名县",
                spell: "damingxian",
                abb: "dmx"
              },
              {
                id: 104,
                value: "涉县",
                label: "涉县",
                spell: "shexian",
                abb: "sx"
              },
              {
                id: 105,
                value: "磁县",
                label: "磁县",
                spell: "cixian",
                abb: "cx"
              },
              {
                id: 106,
                value: "肥乡县",
                label: "肥乡县",
                spell: "feixiangxian",
                abb: "fxx"
              },
              {
                id: 107,
                value: "永年县",
                label: "永年县",
                spell: "yongnianxian",
                abb: "ynx"
              },
              {
                id: 108,
                value: "邱县",
                label: "邱县",
                spell: "qiuxian",
                abb: "qx"
              },
              {
                id: 109,
                value: "鸡泽县",
                label: "鸡泽县",
                spell: "jizexian",
                abb: "jzx"
              },
              {
                id: 110,
                value: "广平县",
                label: "广平县",
                spell: "guangpingxian",
                abb: "gpx"
              },
              {
                id: 111,
                value: "馆陶县",
                label: "馆陶县",
                spell: "guantaoxian",
                abb: "gtx"
              },
              {
                id: 112,
                value: "魏县",
                label: "魏县",
                spell: "weixian",
                abb: "wx"
              },
              {
                id: 113,
                value: "曲周县",
                label: "曲周县",
                spell: "quzhouxian",
                abb: "qzx"
              },
              {
                id: 114,
                value: "武安市",
                label: "武安市",
                spell: "wuanshi",
                abb: "was"
              }
            ]
          },
          {
            id: 115,
            value: "邢台市",
            label: "邢台市",
            spell: "xingtaishi",
            abb: "xts",
            children: [
              {
                id: 117,
                value: "桥东区",
                label: "桥东区",
                spell: "qiaodongqu",
                abb: "qdq"
              },
              {
                id: 118,
                value: "桥西区",
                label: "桥西区",
                spell: "qiaoxiqu",
                abb: "qxq"
              },
              {
                id: 119,
                value: "邢台县",
                label: "邢台县",
                spell: "xingtaixian",
                abb: "xtx"
              },
              {
                id: 120,
                value: "临城县",
                label: "临城县",
                spell: "linchengxian",
                abb: "lcx"
              },
              {
                id: 121,
                value: "内丘县",
                label: "内丘县",
                spell: "neiqiuxian",
                abb: "nqx"
              },
              {
                id: 122,
                value: "柏乡县",
                label: "柏乡县",
                spell: "boxiangxian",
                abb: "bxx"
              },
              {
                id: 123,
                value: "隆尧县",
                label: "隆尧县",
                spell: "longyaoxian",
                abb: "lyx"
              },
              {
                id: 124,
                value: "任县",
                label: "任县",
                spell: "renxian",
                abb: "rx"
              },
              {
                id: 125,
                value: "南和县",
                label: "南和县",
                spell: "nanhexian",
                abb: "nhx"
              },
              {
                id: 126,
                value: "宁晋县",
                label: "宁晋县",
                spell: "ningjinxian",
                abb: "njx"
              },
              {
                id: 127,
                value: "巨鹿县",
                label: "巨鹿县",
                spell: "juluxian",
                abb: "jlx"
              },
              {
                id: 128,
                value: "新河县",
                label: "新河县",
                spell: "xinhexian",
                abb: "xhx"
              },
              {
                id: 129,
                value: "广宗县",
                label: "广宗县",
                spell: "guangzongxian",
                abb: "gzx"
              },
              {
                id: 130,
                value: "平乡县",
                label: "平乡县",
                spell: "pingxiangxian",
                abb: "pxx"
              },
              {
                id: 131,
                value: "威县",
                label: "威县",
                spell: "weixian",
                abb: "wx"
              },
              {
                id: 132,
                value: "清河县",
                label: "清河县",
                spell: "qinghexian",
                abb: "qhx"
              },
              {
                id: 133,
                value: "临西县",
                label: "临西县",
                spell: "linxixian",
                abb: "lxx"
              },
              {
                id: 134,
                value: "南宫市",
                label: "南宫市",
                spell: "nangongshi",
                abb: "ngs"
              },
              {
                id: 135,
                value: "沙河市",
                label: "沙河市",
                spell: "shaheshi",
                abb: "shs"
              }
            ]
          },
          {
            id: 136,
            value: "保定市",
            label: "保定市",
            spell: "baodingshi",
            abb: "bds",
            children: [
              {
                id: 138,
                value: "新市区",
                label: "新市区",
                spell: "xinshiqu",
                abb: "xsq"
              },
              {
                id: 139,
                value: "北市区",
                label: "北市区",
                spell: "beishiqu",
                abb: "bsq"
              },
              {
                id: 140,
                value: "南市区",
                label: "南市区",
                spell: "nanshiqu",
                abb: "nsq"
              },
              {
                id: 141,
                value: "满城县",
                label: "满城县",
                spell: "manchengxian",
                abb: "mcx"
              },
              {
                id: 142,
                value: "清苑县",
                label: "清苑县",
                spell: "qingyuanxian",
                abb: "qyx"
              },
              {
                id: 143,
                value: "涞水县",
                label: "涞水县",
                spell: "laishuixian",
                abb: "lsx"
              },
              {
                id: 144,
                value: "阜平县",
                label: "阜平县",
                spell: "fupingxian",
                abb: "fpx"
              },
              {
                id: 145,
                value: "徐水县",
                label: "徐水县",
                spell: "xushuixian",
                abb: "xsx"
              },
              {
                id: 146,
                value: "定兴县",
                label: "定兴县",
                spell: "dingxingxian",
                abb: "dxx"
              },
              {
                id: 147,
                value: "唐县",
                label: "唐县",
                spell: "tangxian",
                abb: "tx"
              },
              {
                id: 148,
                value: "高阳县",
                label: "高阳县",
                spell: "gaoyangxian",
                abb: "gyx"
              },
              {
                id: 149,
                value: "容城县",
                label: "容城县",
                spell: "rongchengxian",
                abb: "rcx"
              },
              {
                id: 150,
                value: "涞源县",
                label: "涞源县",
                spell: "laiyuanxian",
                abb: "lyx"
              },
              {
                id: 151,
                value: "望都县",
                label: "望都县",
                spell: "wangdouxian",
                abb: "wdx"
              },
              {
                id: 152,
                value: "安新县",
                label: "安新县",
                spell: "anxinxian",
                abb: "axx"
              },
              {
                id: 153,
                value: "易县",
                label: "易县",
                spell: "yixian",
                abb: "yx"
              },
              {
                id: 154,
                value: "曲阳县",
                label: "曲阳县",
                spell: "quyangxian",
                abb: "qyx"
              },
              {
                id: 155,
                value: "蠡县",
                label: "蠡县",
                spell: "lixian",
                abb: "lx"
              },
              {
                id: 156,
                value: "顺平县",
                label: "顺平县",
                spell: "shunpingxian",
                abb: "spx"
              },
              {
                id: 157,
                value: "博野县",
                label: "博野县",
                spell: "boyexian",
                abb: "byx"
              },
              {
                id: 158,
                value: "雄县",
                label: "雄县",
                spell: "xiongxian",
                abb: "xx"
              },
              {
                id: 159,
                value: "涿州市",
                label: "涿州市",
                spell: "zhuozhoushi",
                abb: "zzs"
              },
              {
                id: 160,
                value: "定州市",
                label: "定州市",
                spell: "dingzhoushi",
                abb: "dzs"
              },
              {
                id: 161,
                value: "安国市",
                label: "安国市",
                spell: "anguoshi",
                abb: "ags"
              },
              {
                id: 162,
                value: "高碑店市",
                label: "高碑店市",
                spell: "gaobeidianshi",
                abb: "gbds"
              }
            ]
          },
          {
            id: 163,
            value: "张家口市",
            label: "张家口市",
            spell: "zhangjiakoushi",
            abb: "zjks",
            children: [
              {
                id: 165,
                value: "桥东区",
                label: "桥东区",
                spell: "qiaodongqu",
                abb: "qdq"
              },
              {
                id: 166,
                value: "桥西区",
                label: "桥西区",
                spell: "qiaoxiqu",
                abb: "qxq"
              },
              {
                id: 167,
                value: "宣化区",
                label: "宣化区",
                spell: "xuanhuaqu",
                abb: "xhq"
              },
              {
                id: 168,
                value: "下花园区",
                label: "下花园区",
                spell: "xiahuayuanqu",
                abb: "xhyq"
              },
              {
                id: 169,
                value: "宣化县",
                label: "宣化县",
                spell: "xuanhuaxian",
                abb: "xhx"
              },
              {
                id: 170,
                value: "张北县",
                label: "张北县",
                spell: "zhangbeixian",
                abb: "zbx"
              },
              {
                id: 171,
                value: "康保县",
                label: "康保县",
                spell: "kangbaoxian",
                abb: "kbx"
              },
              {
                id: 172,
                value: "沽源县",
                label: "沽源县",
                spell: "guyuanxian",
                abb: "gyx"
              },
              {
                id: 173,
                value: "尚义县",
                label: "尚义县",
                spell: "shangyixian",
                abb: "syx"
              },
              {
                id: 174,
                value: "蔚县",
                label: "蔚县",
                spell: "yuxian",
                abb: "yx"
              },
              {
                id: 175,
                value: "阳原县",
                label: "阳原县",
                spell: "yangyuanxian",
                abb: "yyx"
              },
              {
                id: 176,
                value: "怀安县",
                label: "怀安县",
                spell: "huaianxian",
                abb: "hax"
              },
              {
                id: 177,
                value: "万全县",
                label: "万全县",
                spell: "wanquanxian",
                abb: "wqx"
              },
              {
                id: 178,
                value: "怀来县",
                label: "怀来县",
                spell: "huailaixian",
                abb: "hlx"
              },
              {
                id: 179,
                value: "涿鹿县",
                label: "涿鹿县",
                spell: "zhuoluxian",
                abb: "zlx"
              },
              {
                id: 180,
                value: "赤城县",
                label: "赤城县",
                spell: "chichengxian",
                abb: "ccx"
              },
              {
                id: 181,
                value: "崇礼县",
                label: "崇礼县",
                spell: "chonglixian",
                abb: "clx"
              }
            ]
          },
          {
            id: 182,
            value: "承德市",
            label: "承德市",
            spell: "chengdeshi",
            abb: "cds",
            children: [
              {
                id: 184,
                value: "双桥区",
                label: "双桥区",
                spell: "shuangqiaoqu",
                abb: "sqq"
              },
              {
                id: 185,
                value: "双滦区",
                label: "双滦区",
                spell: "shuangluanqu",
                abb: "slq"
              },
              {
                id: 186,
                value: "鹰手营子矿区",
                label: "鹰手营子矿区",
                spell: "yingshouyingzikuangqu",
                abb: "ysyzkq"
              },
              {
                id: 187,
                value: "承德县",
                label: "承德县",
                spell: "chengdexian",
                abb: "cdx"
              },
              {
                id: 188,
                value: "兴隆县",
                label: "兴隆县",
                spell: "xinglongxian",
                abb: "xlx"
              },
              {
                id: 189,
                value: "平泉县",
                label: "平泉县",
                spell: "pingquanxian",
                abb: "pqx"
              },
              {
                id: 190,
                value: "滦平县",
                label: "滦平县",
                spell: "luanpingxian",
                abb: "lpx"
              },
              {
                id: 191,
                value: "隆化县",
                label: "隆化县",
                spell: "longhuaxian",
                abb: "lhx"
              },
              {
                id: 192,
                value: "丰宁满族自治县",
                label: "丰宁满族自治县",
                spell: "fengningmanzuzizhixian",
                abb: "fnmzzzx"
              },
              {
                id: 193,
                value: "宽城满族自治县",
                label: "宽城满族自治县",
                spell: "kuanchengmanzuzizhixian",
                abb: "kcmzzzx"
              },
              {
                id: 194,
                value: "围场满族蒙古族自治县",
                label: "围场满族蒙古族自治县",
                spell: "weichangmanzumengguzuzizhixian",
                abb: "wcmzmgzzzx"
              }
            ]
          },
          {
            id: 195,
            value: "沧州市",
            label: "沧州市",
            spell: "cangzhoushi",
            abb: "czs",
            children: [
              {
                id: 197,
                value: "新华区",
                label: "新华区",
                spell: "xinhuaqu",
                abb: "xhq"
              },
              {
                id: 198,
                value: "运河区",
                label: "运河区",
                spell: "yunhequ",
                abb: "yhq"
              },
              {
                id: 199,
                value: "沧县",
                label: "沧县",
                spell: "cangxian",
                abb: "cx"
              },
              {
                id: 200,
                value: "青县",
                label: "青县",
                spell: "qingxian",
                abb: "qx"
              },
              {
                id: 201,
                value: "东光县",
                label: "东光县",
                spell: "dongguangxian",
                abb: "dgx"
              },
              {
                id: 202,
                value: "海兴县",
                label: "海兴县",
                spell: "haixingxian",
                abb: "hxx"
              },
              {
                id: 203,
                value: "盐山县",
                label: "盐山县",
                spell: "yanshanxian",
                abb: "ysx"
              },
              {
                id: 204,
                value: "肃宁县",
                label: "肃宁县",
                spell: "suningxian",
                abb: "snx"
              },
              {
                id: 205,
                value: "南皮县",
                label: "南皮县",
                spell: "nanpixian",
                abb: "npx"
              },
              {
                id: 206,
                value: "吴桥县",
                label: "吴桥县",
                spell: "wuqiaoxian",
                abb: "wqx"
              },
              {
                id: 207,
                value: "献县",
                label: "献县",
                spell: "xianxian",
                abb: "xx"
              },
              {
                id: 208,
                value: "孟村回族自治县",
                label: "孟村回族自治县",
                spell: "mengcunhuizuzizhixian",
                abb: "mchzzzx"
              },
              {
                id: 209,
                value: "泊头市",
                label: "泊头市",
                spell: "botoushi",
                abb: "bts"
              },
              {
                id: 210,
                value: "任丘市",
                label: "任丘市",
                spell: "renqiushi",
                abb: "rqs"
              },
              {
                id: 211,
                value: "黄骅市",
                label: "黄骅市",
                spell: "huanghuashi",
                abb: "hhs"
              },
              {
                id: 212,
                value: "河间市",
                label: "河间市",
                spell: "hejianshi",
                abb: "hjs"
              }
            ]
          },
          {
            id: 213,
            value: "廊坊市",
            label: "廊坊市",
            spell: "langfangshi",
            abb: "lfs",
            children: [
              {
                id: 215,
                value: "安次区",
                label: "安次区",
                spell: "anciqu",
                abb: "acq"
              },
              {
                id: 216,
                value: "广阳区",
                label: "广阳区",
                spell: "guangyangqu",
                abb: "gyq"
              },
              {
                id: 217,
                value: "固安县",
                label: "固安县",
                spell: "guanxian",
                abb: "gax"
              },
              {
                id: 218,
                value: "永清县",
                label: "永清县",
                spell: "yongqingxian",
                abb: "yqx"
              },
              {
                id: 219,
                value: "香河县",
                label: "香河县",
                spell: "xianghexian",
                abb: "xhx"
              },
              {
                id: 220,
                value: "大城县",
                label: "大城县",
                spell: "dachengxian",
                abb: "dcx"
              },
              {
                id: 221,
                value: "文安县",
                label: "文安县",
                spell: "wenanxian",
                abb: "wax"
              },
              {
                id: 222,
                value: "大厂回族自治县",
                label: "大厂回族自治县",
                spell: "dachanghuizuzizhixian",
                abb: "dchzzzx"
              },
              {
                id: 223,
                value: "霸州市",
                label: "霸州市",
                spell: "bazhoushi",
                abb: "bzs"
              },
              {
                id: 224,
                value: "三河市",
                label: "三河市",
                spell: "sanheshi",
                abb: "shs"
              }
            ]
          },
          {
            id: 225,
            value: "衡水市",
            label: "衡水市",
            spell: "hengshuishi",
            abb: "hss",
            children: [
              {
                id: 227,
                value: "桃城区",
                label: "桃城区",
                spell: "taochengqu",
                abb: "tcq"
              },
              {
                id: 228,
                value: "枣强县",
                label: "枣强县",
                spell: "zaoqiangxian",
                abb: "zqx"
              },
              {
                id: 229,
                value: "武邑县",
                label: "武邑县",
                spell: "wuyixian",
                abb: "wyx"
              },
              {
                id: 230,
                value: "武强县",
                label: "武强县",
                spell: "wuqiangxian",
                abb: "wqx"
              },
              {
                id: 231,
                value: "饶阳县",
                label: "饶阳县",
                spell: "raoyangxian",
                abb: "ryx"
              },
              {
                id: 232,
                value: "安平县",
                label: "安平县",
                spell: "anpingxian",
                abb: "apx"
              },
              {
                id: 233,
                value: "故城县",
                label: "故城县",
                spell: "guchengxian",
                abb: "gcx"
              },
              {
                id: 234,
                value: "景县",
                label: "景县",
                spell: "jingxian",
                abb: "jx"
              },
              {
                id: 235,
                value: "阜城县",
                label: "阜城县",
                spell: "fuchengxian",
                abb: "fcx"
              },
              {
                id: 236,
                value: "冀州市",
                label: "冀州市",
                spell: "jizhoushi",
                abb: "jzs"
              },
              {
                id: 237,
                value: "深州市",
                label: "深州市",
                spell: "shenzhoushi",
                abb: "szs"
              }
            ]
          }
        ]
      },
      {
        id: 238,
        value: "山西省",
        label: "山西省",
        spell: "shanxisheng",
        abb: "sxs",
        children: [
          {
            id: 239,
            value: "太原市",
            label: "太原市",
            spell: "taiyuanshi",
            abb: "tys",
            children: [
              {
                id: 241,
                value: "小店区",
                label: "小店区",
                spell: "xiaodianqu",
                abb: "xdq"
              },
              {
                id: 242,
                value: "迎泽区",
                label: "迎泽区",
                spell: "yingzequ",
                abb: "yzq"
              },
              {
                id: 243,
                value: "杏花岭区",
                label: "杏花岭区",
                spell: "xinghualingqu",
                abb: "xhlq"
              },
              {
                id: 244,
                value: "尖草坪区",
                label: "尖草坪区",
                spell: "jiancaopingqu",
                abb: "jcpq"
              },
              {
                id: 245,
                value: "万柏林区",
                label: "万柏林区",
                spell: "wanbolinqu",
                abb: "wblq"
              },
              {
                id: 246,
                value: "晋源区",
                label: "晋源区",
                spell: "jinyuanqu",
                abb: "jyq"
              },
              {
                id: 247,
                value: "清徐县",
                label: "清徐县",
                spell: "qingxuxian",
                abb: "qxx"
              },
              {
                id: 248,
                value: "阳曲县",
                label: "阳曲县",
                spell: "yangquxian",
                abb: "yqx"
              },
              {
                id: 249,
                value: "娄烦县",
                label: "娄烦县",
                spell: "loufanxian",
                abb: "lfx"
              },
              {
                id: 250,
                value: "古交市",
                label: "古交市",
                spell: "gujiaoshi",
                abb: "gjs"
              }
            ]
          },
          {
            id: 251,
            value: "大同市",
            label: "大同市",
            spell: "datongshi",
            abb: "dts",
            children: [
              {
                id: 253,
                value: "城区",
                label: "城区",
                spell: "chengqu",
                abb: "cq"
              },
              {
                id: 254,
                value: "矿区",
                label: "矿区",
                spell: "kuangqu",
                abb: "kq"
              },
              {
                id: 255,
                value: "南郊区",
                label: "南郊区",
                spell: "nanjiaoqu",
                abb: "njq"
              },
              {
                id: 256,
                value: "新荣区",
                label: "新荣区",
                spell: "xinrongqu",
                abb: "xrq"
              },
              {
                id: 257,
                value: "阳高县",
                label: "阳高县",
                spell: "yanggaoxian",
                abb: "ygx"
              },
              {
                id: 258,
                value: "天镇县",
                label: "天镇县",
                spell: "tianzhenxian",
                abb: "tzx"
              },
              {
                id: 259,
                value: "广灵县",
                label: "广灵县",
                spell: "guanglingxian",
                abb: "glx"
              },
              {
                id: 260,
                value: "灵丘县",
                label: "灵丘县",
                spell: "lingqiuxian",
                abb: "lqx"
              },
              {
                id: 261,
                value: "浑源县",
                label: "浑源县",
                spell: "hunyuanxian",
                abb: "hyx"
              },
              {
                id: 262,
                value: "左云县",
                label: "左云县",
                spell: "zuoyunxian",
                abb: "zyx"
              },
              {
                id: 263,
                value: "大同县",
                label: "大同县",
                spell: "datongxian",
                abb: "dtx"
              }
            ]
          },
          {
            id: 264,
            value: "阳泉市",
            label: "阳泉市",
            spell: "yangquanshi",
            abb: "yqs",
            children: [
              {
                id: 266,
                value: "城区",
                label: "城区",
                spell: "chengqu",
                abb: "cq"
              },
              {
                id: 267,
                value: "矿区",
                label: "矿区",
                spell: "kuangqu",
                abb: "kq"
              },
              {
                id: 268,
                value: "郊区",
                label: "郊区",
                spell: "jiaoqu",
                abb: "jq"
              },
              {
                id: 269,
                value: "平定县",
                label: "平定县",
                spell: "pingdingxian",
                abb: "pdx"
              },
              {
                id: 270,
                value: "盂县",
                label: "盂县",
                spell: "yuxian",
                abb: "yx"
              }
            ]
          },
          {
            id: 271,
            value: "长治市",
            label: "长治市",
            spell: "changzhishi",
            abb: "czs",
            children: [
              {
                id: 273,
                value: "城区",
                label: "城区",
                spell: "chengqu",
                abb: "cq"
              },
              {
                id: 274,
                value: "郊区",
                label: "郊区",
                spell: "jiaoqu",
                abb: "jq"
              },
              {
                id: 275,
                value: "长治县",
                label: "长治县",
                spell: "changzhixian",
                abb: "czx"
              },
              {
                id: 276,
                value: "襄垣县",
                label: "襄垣县",
                spell: "xiangyuanxian",
                abb: "xyx"
              },
              {
                id: 277,
                value: "屯留县",
                label: "屯留县",
                spell: "tunliuxian",
                abb: "tlx"
              },
              {
                id: 278,
                value: "平顺县",
                label: "平顺县",
                spell: "pingshunxian",
                abb: "psx"
              },
              {
                id: 279,
                value: "黎城县",
                label: "黎城县",
                spell: "lichengxian",
                abb: "lcx"
              },
              {
                id: 280,
                value: "壶关县",
                label: "壶关县",
                spell: "huguanxian",
                abb: "hgx"
              },
              {
                id: 281,
                value: "长子县",
                label: "长子县",
                spell: "changzixian",
                abb: "czx"
              },
              {
                id: 282,
                value: "武乡县",
                label: "武乡县",
                spell: "wuxiangxian",
                abb: "wxx"
              },
              {
                id: 283,
                value: "沁县",
                label: "沁县",
                spell: "qinxian",
                abb: "qx"
              },
              {
                id: 284,
                value: "沁源县",
                label: "沁源县",
                spell: "qinyuanxian",
                abb: "qyx"
              },
              {
                id: 285,
                value: "潞城市",
                label: "潞城市",
                spell: "luchengshi",
                abb: "lcs"
              }
            ]
          },
          {
            id: 286,
            value: "晋城市",
            label: "晋城市",
            spell: "jinchengshi",
            abb: "jcs",
            children: [
              {
                id: 288,
                value: "城区",
                label: "城区",
                spell: "chengqu",
                abb: "cq"
              },
              {
                id: 289,
                value: "沁水县",
                label: "沁水县",
                spell: "qinshuixian",
                abb: "qsx"
              },
              {
                id: 290,
                value: "阳城县",
                label: "阳城县",
                spell: "yangchengxian",
                abb: "ycx"
              },
              {
                id: 291,
                value: "陵川县",
                label: "陵川县",
                spell: "lingchuanxian",
                abb: "lcx"
              },
              {
                id: 292,
                value: "泽州县",
                label: "泽州县",
                spell: "zezhouxian",
                abb: "zzx"
              },
              {
                id: 293,
                value: "高平市",
                label: "高平市",
                spell: "gaopingshi",
                abb: "gps"
              }
            ]
          },
          {
            id: 294,
            value: "朔州市",
            label: "朔州市",
            spell: "shuozhoushi",
            abb: "szs",
            children: [
              {
                id: 296,
                value: "朔城区",
                label: "朔城区",
                spell: "shuochengqu",
                abb: "scq"
              },
              {
                id: 297,
                value: "平鲁区",
                label: "平鲁区",
                spell: "pingluqu",
                abb: "plq"
              },
              {
                id: 298,
                value: "山阴县",
                label: "山阴县",
                spell: "shanyinxian",
                abb: "syx"
              },
              {
                id: 299,
                value: "应县",
                label: "应县",
                spell: "yingxian",
                abb: "yx"
              },
              {
                id: 300,
                value: "右玉县",
                label: "右玉县",
                spell: "youyuxian",
                abb: "yyx"
              },
              {
                id: 301,
                value: "怀仁县",
                label: "怀仁县",
                spell: "huairenxian",
                abb: "hrx"
              }
            ]
          },
          {
            id: 302,
            value: "晋中市",
            label: "晋中市",
            spell: "jinzhongshi",
            abb: "jzs",
            children: [
              {
                id: 304,
                value: "榆次区",
                label: "榆次区",
                spell: "yuciqu",
                abb: "ycq"
              },
              {
                id: 305,
                value: "榆社县",
                label: "榆社县",
                spell: "yushexian",
                abb: "ysx"
              },
              {
                id: 306,
                value: "左权县",
                label: "左权县",
                spell: "zuoquanxian",
                abb: "zqx"
              },
              {
                id: 307,
                value: "和顺县",
                label: "和顺县",
                spell: "heshunxian",
                abb: "hsx"
              },
              {
                id: 308,
                value: "昔阳县",
                label: "昔阳县",
                spell: "xiyangxian",
                abb: "xyx"
              },
              {
                id: 309,
                value: "寿阳县",
                label: "寿阳县",
                spell: "shouyangxian",
                abb: "syx"
              },
              {
                id: 310,
                value: "太谷县",
                label: "太谷县",
                spell: "taiguxian",
                abb: "tgx"
              },
              {
                id: 311,
                value: "祁县",
                label: "祁县",
                spell: "qixian",
                abb: "qx"
              },
              {
                id: 312,
                value: "平遥县",
                label: "平遥县",
                spell: "pingyaoxian",
                abb: "pyx"
              },
              {
                id: 313,
                value: "灵石县",
                label: "灵石县",
                spell: "lingshixian",
                abb: "lsx"
              },
              {
                id: 314,
                value: "介休市",
                label: "介休市",
                spell: "jiexiushi",
                abb: "jxs"
              }
            ]
          },
          {
            id: 315,
            value: "运城市",
            label: "运城市",
            spell: "yunchengshi",
            abb: "ycs",
            children: [
              {
                id: 317,
                value: "盐湖区",
                label: "盐湖区",
                spell: "yanhuqu",
                abb: "yhq"
              },
              {
                id: 318,
                value: "临猗县",
                label: "临猗县",
                spell: "linyixian",
                abb: "lyx"
              },
              {
                id: 319,
                value: "万荣县",
                label: "万荣县",
                spell: "wanrongxian",
                abb: "wrx"
              },
              {
                id: 320,
                value: "闻喜县",
                label: "闻喜县",
                spell: "wenxixian",
                abb: "wxx"
              },
              {
                id: 321,
                value: "稷山县",
                label: "稷山县",
                spell: "jishanxian",
                abb: "jsx"
              },
              {
                id: 322,
                value: "新绛县",
                label: "新绛县",
                spell: "xinjiangxian",
                abb: "xjx"
              },
              {
                id: 323,
                value: "绛县",
                label: "绛县",
                spell: "jiangxian",
                abb: "jx"
              },
              {
                id: 324,
                value: "垣曲县",
                label: "垣曲县",
                spell: "yuanquxian",
                abb: "yqx"
              },
              {
                id: 325,
                value: "夏县",
                label: "夏县",
                spell: "xiaxian",
                abb: "xx"
              },
              {
                id: 326,
                value: "平陆县",
                label: "平陆县",
                spell: "pingluxian",
                abb: "plx"
              },
              {
                id: 327,
                value: "芮城县",
                label: "芮城县",
                spell: "ruichengxian",
                abb: "rcx"
              },
              {
                id: 328,
                value: "永济市",
                label: "永济市",
                spell: "yongjishi",
                abb: "yjs"
              },
              {
                id: 329,
                value: "河津市",
                label: "河津市",
                spell: "hejinshi",
                abb: "hjs"
              }
            ]
          },
          {
            id: 330,
            value: "忻州市",
            label: "忻州市",
            spell: "xinzhoushi",
            abb: "xzs",
            children: [
              {
                id: 332,
                value: "忻府区",
                label: "忻府区",
                spell: "xinfuqu",
                abb: "xfq"
              },
              {
                id: 333,
                value: "定襄县",
                label: "定襄县",
                spell: "dingxiangxian",
                abb: "dxx"
              },
              {
                id: 334,
                value: "五台县",
                label: "五台县",
                spell: "wutaixian",
                abb: "wtx"
              },
              {
                id: 335,
                value: "代县",
                label: "代县",
                spell: "daixian",
                abb: "dx"
              },
              {
                id: 336,
                value: "繁峙县",
                label: "繁峙县",
                spell: "fanzhixian",
                abb: "fzx"
              },
              {
                id: 337,
                value: "宁武县",
                label: "宁武县",
                spell: "ningwuxian",
                abb: "nwx"
              },
              {
                id: 338,
                value: "静乐县",
                label: "静乐县",
                spell: "jinglexian",
                abb: "jlx"
              },
              {
                id: 339,
                value: "神池县",
                label: "神池县",
                spell: "shenchixian",
                abb: "scx"
              },
              {
                id: 340,
                value: "五寨县",
                label: "五寨县",
                spell: "wuzhaixian",
                abb: "wzx"
              },
              {
                id: 341,
                value: "岢岚县",
                label: "岢岚县",
                spell: "kelanxian",
                abb: "klx"
              },
              {
                id: 342,
                value: "河曲县",
                label: "河曲县",
                spell: "hequxian",
                abb: "hqx"
              },
              {
                id: 343,
                value: "保德县",
                label: "保德县",
                spell: "baodexian",
                abb: "bdx"
              },
              {
                id: 344,
                value: "偏关县",
                label: "偏关县",
                spell: "pianguanxian",
                abb: "pgx"
              },
              {
                id: 345,
                value: "原平市",
                label: "原平市",
                spell: "yuanpingshi",
                abb: "yps"
              }
            ]
          },
          {
            id: 346,
            value: "临汾市",
            label: "临汾市",
            spell: "linfenshi",
            abb: "lfs",
            children: [
              {
                id: 348,
                value: "尧都区",
                label: "尧都区",
                spell: "yaodouqu",
                abb: "ydq"
              },
              {
                id: 349,
                value: "曲沃县",
                label: "曲沃县",
                spell: "quwoxian",
                abb: "qwx"
              },
              {
                id: 350,
                value: "翼城县",
                label: "翼城县",
                spell: "yichengxian",
                abb: "ycx"
              },
              {
                id: 351,
                value: "襄汾县",
                label: "襄汾县",
                spell: "xiangfenxian",
                abb: "xfx"
              },
              {
                id: 352,
                value: "洪洞县",
                label: "洪洞县",
                spell: "hongdongxian",
                abb: "hdx"
              },
              {
                id: 353,
                value: "古县",
                label: "古县",
                spell: "guxian",
                abb: "gx"
              },
              {
                id: 354,
                value: "安泽县",
                label: "安泽县",
                spell: "anzexian",
                abb: "azx"
              },
              {
                id: 355,
                value: "浮山县",
                label: "浮山县",
                spell: "fushanxian",
                abb: "fsx"
              },
              {
                id: 356,
                value: "吉县",
                label: "吉县",
                spell: "jixian",
                abb: "jx"
              },
              {
                id: 357,
                value: "乡宁县",
                label: "乡宁县",
                spell: "xiangningxian",
                abb: "xnx"
              },
              {
                id: 358,
                value: "大宁县",
                label: "大宁县",
                spell: "daningxian",
                abb: "dnx"
              },
              {
                id: 359,
                value: "隰县",
                label: "隰县",
                spell: "xixian",
                abb: "xx"
              },
              {
                id: 360,
                value: "永和县",
                label: "永和县",
                spell: "yonghexian",
                abb: "yhx"
              },
              {
                id: 361,
                value: "蒲县",
                label: "蒲县",
                spell: "puxian",
                abb: "px"
              },
              {
                id: 362,
                value: "汾西县",
                label: "汾西县",
                spell: "fenxixian",
                abb: "fxx"
              },
              {
                id: 363,
                value: "侯马市",
                label: "侯马市",
                spell: "houmashi",
                abb: "hms"
              },
              {
                id: 364,
                value: "霍州市",
                label: "霍州市",
                spell: "huozhoushi",
                abb: "hzs"
              }
            ]
          },
          {
            id: 365,
            value: "吕梁市",
            label: "吕梁市",
            spell: "lu:liangshi",
            abb: "lls",
            children: [
              {
                id: 367,
                value: "离石区",
                label: "离石区",
                spell: "lishiqu",
                abb: "lsq"
              },
              {
                id: 368,
                value: "文水县",
                label: "文水县",
                spell: "wenshuixian",
                abb: "wsx"
              },
              {
                id: 369,
                value: "交城县",
                label: "交城县",
                spell: "jiaochengxian",
                abb: "jcx"
              },
              {
                id: 370,
                value: "兴县",
                label: "兴县",
                spell: "xingxian",
                abb: "xx"
              },
              {
                id: 371,
                value: "临县",
                label: "临县",
                spell: "linxian",
                abb: "lx"
              },
              {
                id: 372,
                value: "柳林县",
                label: "柳林县",
                spell: "liulinxian",
                abb: "llx"
              },
              {
                id: 373,
                value: "石楼县",
                label: "石楼县",
                spell: "shilouxian",
                abb: "slx"
              },
              {
                id: 374,
                value: "岚县",
                label: "岚县",
                spell: "lanxian",
                abb: "lx"
              },
              {
                id: 375,
                value: "方山县",
                label: "方山县",
                spell: "fangshanxian",
                abb: "fsx"
              },
              {
                id: 376,
                value: "中阳县",
                label: "中阳县",
                spell: "zhongyangxian",
                abb: "zyx"
              },
              {
                id: 377,
                value: "交口县",
                label: "交口县",
                spell: "jiaokouxian",
                abb: "jkx"
              },
              {
                id: 378,
                value: "孝义市",
                label: "孝义市",
                spell: "xiaoyishi",
                abb: "xys"
              },
              {
                id: 379,
                value: "汾阳市",
                label: "汾阳市",
                spell: "fenyangshi",
                abb: "fys"
              }
            ]
          }
        ]
      },
      {
        id: 380,
        value: "内蒙古自治区",
        label: "内蒙古自治区",
        spell: "neimengguzizhiqu",
        abb: "nmgzzq",
        children: [
          {
            id: 381,
            value: "呼和浩特市",
            label: "呼和浩特市",
            spell: "huhehaoteshi",
            abb: "hhhts",
            children: [
              {
                id: 383,
                value: "新城区",
                label: "新城区",
                spell: "xinchengqu",
                abb: "xcq"
              },
              {
                id: 384,
                value: "回民区",
                label: "回民区",
                spell: "huiminqu",
                abb: "hmq"
              },
              {
                id: 385,
                value: "玉泉区",
                label: "玉泉区",
                spell: "yuquanqu",
                abb: "yqq"
              },
              {
                id: 386,
                value: "赛罕区",
                label: "赛罕区",
                spell: "saihanqu",
                abb: "shq"
              },
              {
                id: 387,
                value: "土默特左旗",
                label: "土默特左旗",
                spell: "tumotezuoqi",
                abb: "tmtzq"
              },
              {
                id: 388,
                value: "托克托县",
                label: "托克托县",
                spell: "tuoketuoxian",
                abb: "tktx"
              },
              {
                id: 389,
                value: "和林格尔县",
                label: "和林格尔县",
                spell: "helingeerxian",
                abb: "hlgex"
              },
              {
                id: 390,
                value: "清水河县",
                label: "清水河县",
                spell: "qingshuihexian",
                abb: "qshx"
              },
              {
                id: 391,
                value: "武川县",
                label: "武川县",
                spell: "wuchuanxian",
                abb: "wcx"
              }
            ]
          },
          {
            id: 392,
            value: "包头市",
            label: "包头市",
            spell: "baotoushi",
            abb: "bts",
            children: [
              {
                id: 394,
                value: "东河区",
                label: "东河区",
                spell: "donghequ",
                abb: "dhq"
              },
              {
                id: 395,
                value: "昆都仑区",
                label: "昆都仑区",
                spell: "kundoulunqu",
                abb: "kdlq"
              },
              {
                id: 396,
                value: "青山区",
                label: "青山区",
                spell: "qingshanqu",
                abb: "qsq"
              },
              {
                id: 397,
                value: "石拐区",
                label: "石拐区",
                spell: "shiguaiqu",
                abb: "sgq"
              },
              {
                id: 398,
                value: "白云鄂博矿区(*)",
                label: "白云鄂博矿区(*)",
                spell: "baiyunebokuangqu(*)",
                abb: "byebkq(*)"
              },
              {
                id: 399,
                value: "九原区",
                label: "九原区",
                spell: "jiuyuanqu",
                abb: "jyq"
              },
              {
                id: 400,
                value: "土默特右旗",
                label: "土默特右旗",
                spell: "tumoteyouqi",
                abb: "tmtyq"
              },
              {
                id: 401,
                value: "固阳县",
                label: "固阳县",
                spell: "guyangxian",
                abb: "gyx"
              },
              {
                id: 402,
                value: "达尔罕茂明安联合旗",
                label: "达尔罕茂明安联合旗",
                spell: "daerhanmaominganlianheqi",
                abb: "dehmmalhq"
              }
            ]
          },
          {
            id: 403,
            value: "乌海市",
            label: "乌海市",
            spell: "wuhaishi",
            abb: "whs",
            children: [
              {
                id: 405,
                value: "海勃湾区",
                label: "海勃湾区",
                spell: "haibowanqu",
                abb: "hbwq"
              },
              {
                id: 406,
                value: "海南区",
                label: "海南区",
                spell: "hainanqu",
                abb: "hnq"
              },
              {
                id: 407,
                value: "乌达区",
                label: "乌达区",
                spell: "wudaqu",
                abb: "wdq"
              }
            ]
          },
          {
            id: 408,
            value: "赤峰市",
            label: "赤峰市",
            spell: "chifengshi",
            abb: "cfs",
            children: [
              {
                id: 410,
                value: "红山区",
                label: "红山区",
                spell: "hongshanqu",
                abb: "hsq"
              },
              {
                id: 411,
                value: "元宝山区",
                label: "元宝山区",
                spell: "yuanbaoshanqu",
                abb: "ybsq"
              },
              {
                id: 412,
                value: "松山区",
                label: "松山区",
                spell: "songshanqu",
                abb: "ssq"
              },
              {
                id: 413,
                value: "阿鲁科尔沁旗",
                label: "阿鲁科尔沁旗",
                spell: "alukeerqinqi",
                abb: "alkeqq"
              },
              {
                id: 414,
                value: "巴林左旗",
                label: "巴林左旗",
                spell: "balinzuoqi",
                abb: "blzq"
              },
              {
                id: 415,
                value: "巴林右旗",
                label: "巴林右旗",
                spell: "balinyouqi",
                abb: "blyq"
              },
              {
                id: 416,
                value: "林西县",
                label: "林西县",
                spell: "linxixian",
                abb: "lxx"
              },
              {
                id: 417,
                value: "克什克腾旗",
                label: "克什克腾旗",
                spell: "keshenketengqi",
                abb: "ksktq"
              },
              {
                id: 418,
                value: "翁牛特旗",
                label: "翁牛特旗",
                spell: "wengniuteqi",
                abb: "wntq"
              },
              {
                id: 419,
                value: "喀喇沁旗",
                label: "喀喇沁旗",
                spell: "kalaqinqi",
                abb: "klqq"
              },
              {
                id: 420,
                value: "宁城县",
                label: "宁城县",
                spell: "ningchengxian",
                abb: "ncx"
              },
              {
                id: 421,
                value: "敖汉旗",
                label: "敖汉旗",
                spell: "aohanqi",
                abb: "ahq"
              }
            ]
          },
          {
            id: 422,
            value: "通辽市",
            label: "通辽市",
            spell: "tongliaoshi",
            abb: "tls",
            children: [
              {
                id: 424,
                value: "科尔沁区",
                label: "科尔沁区",
                spell: "keerqinqu",
                abb: "keqq"
              },
              {
                id: 425,
                value: "科尔沁左翼中旗",
                label: "科尔沁左翼中旗",
                spell: "keerqinzuoyizhongqi",
                abb: "keqzyzq"
              },
              {
                id: 426,
                value: "科尔沁左翼后旗",
                label: "科尔沁左翼后旗",
                spell: "keerqinzuoyihouqi",
                abb: "keqzyhq"
              },
              {
                id: 427,
                value: "开鲁县",
                label: "开鲁县",
                spell: "kailuxian",
                abb: "klx"
              },
              {
                id: 428,
                value: "库伦旗",
                label: "库伦旗",
                spell: "kulunqi",
                abb: "klq"
              },
              {
                id: 429,
                value: "奈曼旗",
                label: "奈曼旗",
                spell: "naimanqi",
                abb: "nmq"
              },
              {
                id: 430,
                value: "扎鲁特旗",
                label: "扎鲁特旗",
                spell: "zhaluteqi",
                abb: "zltq"
              },
              {
                id: 431,
                value: "霍林郭勒市",
                label: "霍林郭勒市",
                spell: "huolinguoleshi",
                abb: "hlgls"
              }
            ]
          },
          {
            id: 432,
            value: "鄂尔多斯市",
            label: "鄂尔多斯市",
            spell: "eerduosishi",
            abb: "eedss",
            children: [
              {
                id: 434,
                value: "东胜区",
                label: "东胜区",
                spell: "dongshengqu",
                abb: "dsq"
              },
              {
                id: 435,
                value: "达拉特旗",
                label: "达拉特旗",
                spell: "dalateqi",
                abb: "dltq"
              },
              {
                id: 436,
                value: "准格尔旗",
                label: "准格尔旗",
                spell: "zhungeerqi",
                abb: "zgeq"
              },
              {
                id: 437,
                value: "鄂托克前旗",
                label: "鄂托克前旗",
                spell: "etuokeqianqi",
                abb: "etkqq"
              },
              {
                id: 438,
                value: "鄂托克旗",
                label: "鄂托克旗",
                spell: "etuokeqi",
                abb: "etkq"
              },
              {
                id: 439,
                value: "杭锦旗",
                label: "杭锦旗",
                spell: "hangjinqi",
                abb: "hjq"
              },
              {
                id: 440,
                value: "乌审旗",
                label: "乌审旗",
                spell: "wushenqi",
                abb: "wsq"
              },
              {
                id: 441,
                value: "伊金霍洛旗",
                label: "伊金霍洛旗",
                spell: "yijinhuoluoqi",
                abb: "yjhlq"
              }
            ]
          },
          {
            id: 442,
            value: "呼伦贝尔市",
            label: "呼伦贝尔市",
            spell: "hulunbeiershi",
            abb: "hlbes",
            children: [
              {
                id: 444,
                value: "海拉尔区",
                label: "海拉尔区",
                spell: "hailaerqu",
                abb: "hleq"
              },
              {
                id: 445,
                value: "阿荣旗",
                label: "阿荣旗",
                spell: "arongqi",
                abb: "arq"
              },
              {
                id: 446,
                value: "莫力达瓦达斡尔族自治旗",
                label: "莫力达瓦达斡尔族自治旗",
                spell: "molidawadawoerzuzizhiqi",
                abb: "mldwdwezzzq"
              },
              {
                id: 447,
                value: "鄂伦春自治旗",
                label: "鄂伦春自治旗",
                spell: "elunchunzizhiqi",
                abb: "elczzq"
              },
              {
                id: 448,
                value: "鄂温克族自治旗",
                label: "鄂温克族自治旗",
                spell: "ewenkezuzizhiqi",
                abb: "ewkzzzq"
              },
              {
                id: 449,
                value: "陈巴尔虎旗",
                label: "陈巴尔虎旗",
                spell: "chenbaerhuqi",
                abb: "cbehq"
              },
              {
                id: 450,
                value: "新巴尔虎左旗",
                label: "新巴尔虎左旗",
                spell: "xinbaerhuzuoqi",
                abb: "xbehzq"
              },
              {
                id: 451,
                value: "新巴尔虎右旗",
                label: "新巴尔虎右旗",
                spell: "xinbaerhuyouqi",
                abb: "xbehyq"
              },
              {
                id: 452,
                value: "满洲里市",
                label: "满洲里市",
                spell: "manzhoulishi",
                abb: "mzls"
              },
              {
                id: 453,
                value: "牙克石市",
                label: "牙克石市",
                spell: "yakeshishi",
                abb: "ykss"
              },
              {
                id: 454,
                value: "扎兰屯市",
                label: "扎兰屯市",
                spell: "zhalantunshi",
                abb: "zlts"
              },
              {
                id: 455,
                value: "额尔古纳市",
                label: "额尔古纳市",
                spell: "eergunashi",
                abb: "eegns"
              },
              {
                id: 456,
                value: "根河市",
                label: "根河市",
                spell: "genheshi",
                abb: "ghs"
              }
            ]
          },
          {
            id: 457,
            value: "巴彦淖尔市",
            label: "巴彦淖尔市",
            spell: "bayannaoershi",
            abb: "bynes",
            children: [
              {
                id: 459,
                value: "临河区",
                label: "临河区",
                spell: "linhequ",
                abb: "lhq"
              },
              {
                id: 460,
                value: "五原县",
                label: "五原县",
                spell: "wuyuanxian",
                abb: "wyx"
              },
              {
                id: 461,
                value: "磴口县",
                label: "磴口县",
                spell: "dengkouxian",
                abb: "dkx"
              },
              {
                id: 462,
                value: "乌拉特前旗",
                label: "乌拉特前旗",
                spell: "wulateqianqi",
                abb: "wltqq"
              },
              {
                id: 463,
                value: "乌拉特中旗",
                label: "乌拉特中旗",
                spell: "wulatezhongqi",
                abb: "wltzq"
              },
              {
                id: 464,
                value: "乌拉特后旗",
                label: "乌拉特后旗",
                spell: "wulatehouqi",
                abb: "wlthq"
              },
              {
                id: 465,
                value: "杭锦后旗",
                label: "杭锦后旗",
                spell: "hangjinhouqi",
                abb: "hjhq"
              }
            ]
          },
          {
            id: 466,
            value: "乌兰察布市",
            label: "乌兰察布市",
            spell: "wulanchabushi",
            abb: "wlcbs",
            children: [
              {
                id: 468,
                value: "集宁区",
                label: "集宁区",
                spell: "jiningqu",
                abb: "jnq"
              },
              {
                id: 469,
                value: "卓资县",
                label: "卓资县",
                spell: "zhuozixian",
                abb: "zzx"
              },
              {
                id: 470,
                value: "化德县",
                label: "化德县",
                spell: "huadexian",
                abb: "hdx"
              },
              {
                id: 471,
                value: "商都县",
                label: "商都县",
                spell: "shangdouxian",
                abb: "sdx"
              },
              {
                id: 472,
                value: "兴和县",
                label: "兴和县",
                spell: "xinghexian",
                abb: "xhx"
              },
              {
                id: 473,
                value: "凉城县",
                label: "凉城县",
                spell: "liangchengxian",
                abb: "lcx"
              },
              {
                id: 474,
                value: "察哈尔右翼前旗",
                label: "察哈尔右翼前旗",
                spell: "chahaeryouyiqianqi",
                abb: "cheyyqq"
              },
              {
                id: 475,
                value: "察哈尔右翼中旗",
                label: "察哈尔右翼中旗",
                spell: "chahaeryouyizhongqi",
                abb: "cheyyzq"
              },
              {
                id: 476,
                value: "察哈尔右翼后旗",
                label: "察哈尔右翼后旗",
                spell: "chahaeryouyihouqi",
                abb: "cheyyhq"
              },
              {
                id: 477,
                value: "四子王旗",
                label: "四子王旗",
                spell: "siziwangqi",
                abb: "szwq"
              },
              {
                id: 478,
                value: "丰镇市",
                label: "丰镇市",
                spell: "fengzhenshi",
                abb: "fzs"
              }
            ]
          },
          {
            id: 479,
            value: "兴安盟",
            label: "兴安盟",
            spell: "xinganmeng",
            abb: "xam",
            children: [
              {
                id: 480,
                value: "乌兰浩特市",
                label: "乌兰浩特市",
                spell: "wulanhaoteshi",
                abb: "wlhts"
              },
              {
                id: 481,
                value: "阿尔山市",
                label: "阿尔山市",
                spell: "aershanshi",
                abb: "aess"
              },
              {
                id: 482,
                value: "科尔沁右翼前旗",
                label: "科尔沁右翼前旗",
                spell: "keerqinyouyiqianqi",
                abb: "keqyyqq"
              },
              {
                id: 483,
                value: "科尔沁右翼中旗",
                label: "科尔沁右翼中旗",
                spell: "keerqinyouyizhongqi",
                abb: "keqyyzq"
              },
              {
                id: 484,
                value: "扎赉特旗",
                label: "扎赉特旗",
                spell: "zhalaiteqi",
                abb: "zltq"
              },
              {
                id: 485,
                value: "突泉县",
                label: "突泉县",
                spell: "tuquanxian",
                abb: "tqx"
              }
            ]
          },
          {
            id: 486,
            value: "锡林郭勒盟",
            label: "锡林郭勒盟",
            spell: "xilinguolemeng",
            abb: "xlglm",
            children: [
              {
                id: 487,
                value: "二连浩特市",
                label: "二连浩特市",
                spell: "erlianhaoteshi",
                abb: "elhts"
              },
              {
                id: 488,
                value: "锡林浩特市",
                label: "锡林浩特市",
                spell: "xilinhaoteshi",
                abb: "xlhts"
              },
              {
                id: 489,
                value: "阿巴嘎旗",
                label: "阿巴嘎旗",
                spell: "abagaqi",
                abb: "abgq"
              },
              {
                id: 490,
                value: "苏尼特左旗",
                label: "苏尼特左旗",
                spell: "sunitezuoqi",
                abb: "sntzq"
              },
              {
                id: 491,
                value: "苏尼特右旗",
                label: "苏尼特右旗",
                spell: "suniteyouqi",
                abb: "sntyq"
              },
              {
                id: 492,
                value: "东乌珠穆沁旗",
                label: "东乌珠穆沁旗",
                spell: "dongwuzhumuqinqi",
                abb: "dwzmqq"
              },
              {
                id: 493,
                value: "西乌珠穆沁旗",
                label: "西乌珠穆沁旗",
                spell: "xiwuzhumuqinqi",
                abb: "xwzmqq"
              },
              {
                id: 494,
                value: "太仆寺旗",
                label: "太仆寺旗",
                spell: "taipusiqi",
                abb: "tpsq"
              },
              {
                id: 495,
                value: "镶黄旗",
                label: "镶黄旗",
                spell: "xianghuangqi",
                abb: "xhq"
              },
              {
                id: 496,
                value: "正镶白旗",
                label: "正镶白旗",
                spell: "zhengxiangbaiqi",
                abb: "zxbq"
              },
              {
                id: 497,
                value: "正蓝旗",
                label: "正蓝旗",
                spell: "zhenglanqi",
                abb: "zlq"
              },
              {
                id: 498,
                value: "多伦县",
                label: "多伦县",
                spell: "duolunxian",
                abb: "dlx"
              }
            ]
          },
          {
            id: 499,
            value: "阿拉善盟",
            label: "阿拉善盟",
            spell: "alashanmeng",
            abb: "alsm",
            children: [
              {
                id: 500,
                value: "阿拉善左旗",
                label: "阿拉善左旗",
                spell: "alashanzuoqi",
                abb: "alszq"
              },
              {
                id: 501,
                value: "阿拉善右旗",
                label: "阿拉善右旗",
                spell: "alashanyouqi",
                abb: "alsyq"
              },
              {
                id: 502,
                value: "额济纳旗",
                label: "额济纳旗",
                spell: "ejinaqi",
                abb: "ejnq"
              }
            ]
          }
        ]
      },
      {
        id: 503,
        value: "辽宁省",
        label: "辽宁省",
        spell: "liaoningsheng",
        abb: "lns",
        children: [
          {
            id: 504,
            value: "沈阳市",
            label: "沈阳市",
            spell: "shenyangshi",
            abb: "sys",
            children: [
              {
                id: 506,
                value: "和平区",
                label: "和平区",
                spell: "hepingqu",
                abb: "hpq"
              },
              {
                id: 507,
                value: "沈河区",
                label: "沈河区",
                spell: "shenhequ",
                abb: "shq"
              },
              {
                id: 508,
                value: "大东区",
                label: "大东区",
                spell: "dadongqu",
                abb: "ddq"
              },
              {
                id: 509,
                value: "皇姑区",
                label: "皇姑区",
                spell: "huangguqu",
                abb: "hgq"
              },
              {
                id: 510,
                value: "铁西区",
                label: "铁西区",
                spell: "tiexiqu",
                abb: "txq"
              },
              {
                id: 511,
                value: "苏家屯区",
                label: "苏家屯区",
                spell: "sujiatunqu",
                abb: "sjtq"
              },
              {
                id: 512,
                value: "东陵区",
                label: "东陵区",
                spell: "donglingqu",
                abb: "dlq"
              },
              {
                id: 513,
                value: "沈北新区",
                label: "沈北新区",
                spell: "shenbeixinqu",
                abb: "sbxq"
              },
              {
                id: 514,
                value: "于洪区",
                label: "于洪区",
                spell: "yuhongqu",
                abb: "yhq"
              },
              {
                id: 515,
                value: "辽中县",
                label: "辽中县",
                spell: "liaozhongxian",
                abb: "lzx"
              },
              {
                id: 516,
                value: "康平县",
                label: "康平县",
                spell: "kangpingxian",
                abb: "kpx"
              },
              {
                id: 517,
                value: "法库县",
                label: "法库县",
                spell: "fakuxian",
                abb: "fkx"
              },
              {
                id: 518,
                value: "新民市",
                label: "新民市",
                spell: "xinminshi",
                abb: "xms"
              }
            ]
          },
          {
            id: 519,
            value: "大连市",
            label: "大连市",
            spell: "dalianshi",
            abb: "dls",
            children: [
              {
                id: 521,
                value: "中山区",
                label: "中山区",
                spell: "zhongshanqu",
                abb: "zsq"
              },
              {
                id: 522,
                value: "西岗区",
                label: "西岗区",
                spell: "xigangqu",
                abb: "xgq"
              },
              {
                id: 523,
                value: "沙河口区",
                label: "沙河口区",
                spell: "shahekouqu",
                abb: "shkq"
              },
              {
                id: 524,
                value: "甘井子区",
                label: "甘井子区",
                spell: "ganjingziqu",
                abb: "gjzq"
              },
              {
                id: 525,
                value: "旅顺口区",
                label: "旅顺口区",
                spell: "lu:shunkouqu",
                abb: "lskq"
              },
              {
                id: 526,
                value: "金州区",
                label: "金州区",
                spell: "jinzhouqu",
                abb: "jzq"
              },
              {
                id: 527,
                value: "长海县",
                label: "长海县",
                spell: "changhaixian",
                abb: "chx"
              },
              {
                id: 528,
                value: "瓦房店市",
                label: "瓦房店市",
                spell: "wafangdianshi",
                abb: "wfds"
              },
              {
                id: 529,
                value: "普兰店市",
                label: "普兰店市",
                spell: "pulandianshi",
                abb: "plds"
              },
              {
                id: 530,
                value: "庄河市",
                label: "庄河市",
                spell: "zhuangheshi",
                abb: "zhs"
              }
            ]
          },
          {
            id: 531,
            value: "鞍山市",
            label: "鞍山市",
            spell: "anshanshi",
            abb: "ass",
            children: [
              {
                id: 533,
                value: "铁东区",
                label: "铁东区",
                spell: "tiedongqu",
                abb: "tdq"
              },
              {
                id: 534,
                value: "铁西区",
                label: "铁西区",
                spell: "tiexiqu",
                abb: "txq"
              },
              {
                id: 535,
                value: "立山区",
                label: "立山区",
                spell: "lishanqu",
                abb: "lsq"
              },
              {
                id: 536,
                value: "千山区",
                label: "千山区",
                spell: "qianshanqu",
                abb: "qsq"
              },
              {
                id: 537,
                value: "台安县",
                label: "台安县",
                spell: "taianxian",
                abb: "tax"
              },
              {
                id: 538,
                value: "岫岩满族自治县",
                label: "岫岩满族自治县",
                spell: "xiuyanmanzuzizhixian",
                abb: "xymzzzx"
              },
              {
                id: 539,
                value: "海城市",
                label: "海城市",
                spell: "haichengshi",
                abb: "hcs"
              }
            ]
          },
          {
            id: 540,
            value: "抚顺市",
            label: "抚顺市",
            spell: "fushunshi",
            abb: "fss",
            children: [
              {
                id: 542,
                value: "新抚区",
                label: "新抚区",
                spell: "xinfuqu",
                abb: "xfq"
              },
              {
                id: 543,
                value: "东洲区",
                label: "东洲区",
                spell: "dongzhouqu",
                abb: "dzq"
              },
              {
                id: 544,
                value: "望花区",
                label: "望花区",
                spell: "wanghuaqu",
                abb: "whq"
              },
              {
                id: 545,
                value: "顺城区",
                label: "顺城区",
                spell: "shunchengqu",
                abb: "scq"
              },
              {
                id: 546,
                value: "抚顺县",
                label: "抚顺县",
                spell: "fushunxian",
                abb: "fsx"
              },
              {
                id: 547,
                value: "新宾满族自治县",
                label: "新宾满族自治县",
                spell: "xinbinmanzuzizhixian",
                abb: "xbmzzzx"
              },
              {
                id: 548,
                value: "清原满族自治县",
                label: "清原满族自治县",
                spell: "qingyuanmanzuzizhixian",
                abb: "qymzzzx"
              }
            ]
          },
          {
            id: 549,
            value: "本溪市",
            label: "本溪市",
            spell: "benxishi",
            abb: "bxs",
            children: [
              {
                id: 551,
                value: "平山区",
                label: "平山区",
                spell: "pingshanqu",
                abb: "psq"
              },
              {
                id: 552,
                value: "溪湖区",
                label: "溪湖区",
                spell: "xihuqu",
                abb: "xhq"
              },
              {
                id: 553,
                value: "明山区",
                label: "明山区",
                spell: "mingshanqu",
                abb: "msq"
              },
              {
                id: 554,
                value: "南芬区",
                label: "南芬区",
                spell: "nanfenqu",
                abb: "nfq"
              },
              {
                id: 555,
                value: "本溪满族自治县",
                label: "本溪满族自治县",
                spell: "benximanzuzizhixian",
                abb: "bxmzzzx"
              },
              {
                id: 556,
                value: "桓仁满族自治县",
                label: "桓仁满族自治县",
                spell: "huanrenmanzuzizhixian",
                abb: "hrmzzzx"
              }
            ]
          },
          {
            id: 557,
            value: "丹东市",
            label: "丹东市",
            spell: "dandongshi",
            abb: "dds",
            children: [
              {
                id: 559,
                value: "元宝区",
                label: "元宝区",
                spell: "yuanbaoqu",
                abb: "ybq"
              },
              {
                id: 560,
                value: "振兴区",
                label: "振兴区",
                spell: "zhenxingqu",
                abb: "zxq"
              },
              {
                id: 561,
                value: "振安区",
                label: "振安区",
                spell: "zhenanqu",
                abb: "zaq"
              },
              {
                id: 562,
                value: "宽甸满族自治县",
                label: "宽甸满族自治县",
                spell: "kuandianmanzuzizhixian",
                abb: "kdmzzzx"
              },
              {
                id: 563,
                value: "东港市",
                label: "东港市",
                spell: "donggangshi",
                abb: "dgs"
              },
              {
                id: 564,
                value: "凤城市",
                label: "凤城市",
                spell: "fengchengshi",
                abb: "fcs"
              }
            ]
          },
          {
            id: 565,
            value: "锦州市",
            label: "锦州市",
            spell: "jinzhoushi",
            abb: "jzs",
            children: [
              {
                id: 567,
                value: "古塔区",
                label: "古塔区",
                spell: "gutaqu",
                abb: "gtq"
              },
              {
                id: 568,
                value: "凌河区",
                label: "凌河区",
                spell: "linghequ",
                abb: "lhq"
              },
              {
                id: 569,
                value: "太和区",
                label: "太和区",
                spell: "taihequ",
                abb: "thq"
              },
              {
                id: 570,
                value: "黑山县",
                label: "黑山县",
                spell: "heishanxian",
                abb: "hsx"
              },
              {
                id: 571,
                value: "义县",
                label: "义县",
                spell: "yixian",
                abb: "yx"
              },
              {
                id: 572,
                value: "凌海市",
                label: "凌海市",
                spell: "linghaishi",
                abb: "lhs"
              },
              {
                id: 573,
                value: "北镇市",
                label: "北镇市",
                spell: "beizhenshi",
                abb: "bzs"
              }
            ]
          },
          {
            id: 574,
            value: "营口市",
            label: "营口市",
            spell: "yingkoushi",
            abb: "yks",
            children: [
              {
                id: 576,
                value: "站前区",
                label: "站前区",
                spell: "zhanqianqu",
                abb: "zqq"
              },
              {
                id: 577,
                value: "西市区",
                label: "西市区",
                spell: "xishiqu",
                abb: "xsq"
              },
              {
                id: 578,
                value: "鲅鱼圈区",
                label: "鲅鱼圈区",
                spell: "bayuquanqu",
                abb: "byqq"
              },
              {
                id: 579,
                value: "老边区",
                label: "老边区",
                spell: "laobianqu",
                abb: "lbq"
              },
              {
                id: 580,
                value: "盖州市",
                label: "盖州市",
                spell: "gaizhoushi",
                abb: "gzs"
              },
              {
                id: 581,
                value: "大石桥市",
                label: "大石桥市",
                spell: "dashiqiaoshi",
                abb: "dsqs"
              }
            ]
          },
          {
            id: 582,
            value: "阜新市",
            label: "阜新市",
            spell: "fuxinshi",
            abb: "fxs",
            children: [
              {
                id: 584,
                value: "海州区",
                label: "海州区",
                spell: "haizhouqu",
                abb: "hzq"
              },
              {
                id: 585,
                value: "新邱区",
                label: "新邱区",
                spell: "xinqiuqu",
                abb: "xqq"
              },
              {
                id: 586,
                value: "太平区",
                label: "太平区",
                spell: "taipingqu",
                abb: "tpq"
              },
              {
                id: 587,
                value: "清河门区",
                label: "清河门区",
                spell: "qinghemenqu",
                abb: "qhmq"
              },
              {
                id: 588,
                value: "细河区",
                label: "细河区",
                spell: "xihequ",
                abb: "xhq"
              },
              {
                id: 589,
                value: "阜新蒙古族自治县",
                label: "阜新蒙古族自治县",
                spell: "fuxinmengguzuzizhixian",
                abb: "fxmgzzzx"
              },
              {
                id: 590,
                value: "彰武县",
                label: "彰武县",
                spell: "zhangwuxian",
                abb: "zwx"
              }
            ]
          },
          {
            id: 591,
            value: "辽阳市",
            label: "辽阳市",
            spell: "liaoyangshi",
            abb: "lys",
            children: [
              {
                id: 593,
                value: "白塔区",
                label: "白塔区",
                spell: "baitaqu",
                abb: "btq"
              },
              {
                id: 594,
                value: "文圣区",
                label: "文圣区",
                spell: "wenshengqu",
                abb: "wsq"
              },
              {
                id: 595,
                value: "宏伟区",
                label: "宏伟区",
                spell: "hongweiqu",
                abb: "hwq"
              },
              {
                id: 596,
                value: "弓长岭区",
                label: "弓长岭区",
                spell: "gongchanglingqu",
                abb: "gclq"
              },
              {
                id: 597,
                value: "太子河区",
                label: "太子河区",
                spell: "taizihequ",
                abb: "tzhq"
              },
              {
                id: 598,
                value: "辽阳县",
                label: "辽阳县",
                spell: "liaoyangxian",
                abb: "lyx"
              },
              {
                id: 599,
                value: "灯塔市",
                label: "灯塔市",
                spell: "dengtashi",
                abb: "dts"
              }
            ]
          },
          {
            id: 600,
            value: "盘锦市",
            label: "盘锦市",
            spell: "panjinshi",
            abb: "pjs",
            children: [
              {
                id: 602,
                value: "双台子区",
                label: "双台子区",
                spell: "shuangtaiziqu",
                abb: "stzq"
              },
              {
                id: 603,
                value: "兴隆台区",
                label: "兴隆台区",
                spell: "xinglongtaiqu",
                abb: "xltq"
              },
              {
                id: 604,
                value: "大洼县",
                label: "大洼县",
                spell: "dawaxian",
                abb: "dwx"
              },
              {
                id: 605,
                value: "盘山县",
                label: "盘山县",
                spell: "panshanxian",
                abb: "psx"
              }
            ]
          },
          {
            id: 606,
            value: "铁岭市",
            label: "铁岭市",
            spell: "tielingshi",
            abb: "tls",
            children: [
              {
                id: 608,
                value: "银州区",
                label: "银州区",
                spell: "yinzhouqu",
                abb: "yzq"
              },
              {
                id: 609,
                value: "清河区",
                label: "清河区",
                spell: "qinghequ",
                abb: "qhq"
              },
              {
                id: 610,
                value: "铁岭县",
                label: "铁岭县",
                spell: "tielingxian",
                abb: "tlx"
              },
              {
                id: 611,
                value: "西丰县",
                label: "西丰县",
                spell: "xifengxian",
                abb: "xfx"
              },
              {
                id: 612,
                value: "昌图县",
                label: "昌图县",
                spell: "changtuxian",
                abb: "ctx"
              },
              {
                id: 613,
                value: "调兵山市",
                label: "调兵山市",
                spell: "diaobingshanshi",
                abb: "dbss"
              },
              {
                id: 614,
                value: "开原市",
                label: "开原市",
                spell: "kaiyuanshi",
                abb: "kys"
              }
            ]
          },
          {
            id: 615,
            value: "朝阳市",
            label: "朝阳市",
            spell: "chaoyangshi",
            abb: "cys",
            children: [
              {
                id: 617,
                value: "双塔区",
                label: "双塔区",
                spell: "shuangtaqu",
                abb: "stq"
              },
              {
                id: 618,
                value: "龙城区",
                label: "龙城区",
                spell: "longchengqu",
                abb: "lcq"
              },
              {
                id: 619,
                value: "朝阳县",
                label: "朝阳县",
                spell: "chaoyangxian",
                abb: "cyx"
              },
              {
                id: 620,
                value: "建平县",
                label: "建平县",
                spell: "jianpingxian",
                abb: "jpx"
              },
              {
                id: 621,
                value: "喀喇沁左翼蒙古族自治县",
                label: "喀喇沁左翼蒙古族自治县",
                spell: "kalaqinzuoyimengguzuzizhixian",
                abb: "klqzymgzzzx"
              },
              {
                id: 622,
                value: "北票市",
                label: "北票市",
                spell: "beipiaoshi",
                abb: "bps"
              },
              {
                id: 623,
                value: "凌源市",
                label: "凌源市",
                spell: "lingyuanshi",
                abb: "lys"
              }
            ]
          },
          {
            id: 624,
            value: "葫芦岛市",
            label: "葫芦岛市",
            spell: "huludaoshi",
            abb: "hlds",
            children: [
              {
                id: 626,
                value: "连山区",
                label: "连山区",
                spell: "lianshanqu",
                abb: "lsq"
              },
              {
                id: 627,
                value: "龙港区",
                label: "龙港区",
                spell: "longgangqu",
                abb: "lgq"
              },
              {
                id: 628,
                value: "南票区",
                label: "南票区",
                spell: "nanpiaoqu",
                abb: "npq"
              },
              {
                id: 629,
                value: "绥中县",
                label: "绥中县",
                spell: "suizhongxian",
                abb: "szx"
              },
              {
                id: 630,
                value: "建昌县",
                label: "建昌县",
                spell: "jianchangxian",
                abb: "jcx"
              },
              {
                id: 631,
                value: "兴城市",
                label: "兴城市",
                spell: "xingchengshi",
                abb: "xcs"
              }
            ]
          }
        ]
      },
      {
        id: 632,
        value: "吉林省",
        label: "吉林省",
        spell: "jilinsheng",
        abb: "jls",
        children: [
          {
            id: 633,
            value: "长春市",
            label: "长春市",
            spell: "changchunshi",
            abb: "ccs",
            children: [
              {
                id: 635,
                value: "南关区",
                label: "南关区",
                spell: "nanguanqu",
                abb: "ngq"
              },
              {
                id: 636,
                value: "宽城区",
                label: "宽城区",
                spell: "kuanchengqu",
                abb: "kcq"
              },
              {
                id: 637,
                value: "朝阳区",
                label: "朝阳区",
                spell: "chaoyangqu",
                abb: "cyq"
              },
              {
                id: 638,
                value: "二道区",
                label: "二道区",
                spell: "erdaoqu",
                abb: "edq"
              },
              {
                id: 639,
                value: "绿园区",
                label: "绿园区",
                spell: "lu:yuanqu",
                abb: "lyq"
              },
              {
                id: 640,
                value: "双阳区",
                label: "双阳区",
                spell: "shuangyangqu",
                abb: "syq"
              },
              {
                id: 641,
                value: "农安县",
                label: "农安县",
                spell: "nonganxian",
                abb: "nax"
              },
              {
                id: 642,
                value: "九台市",
                label: "九台市",
                spell: "jiutaishi",
                abb: "jts"
              },
              {
                id: 643,
                value: "榆树市",
                label: "榆树市",
                spell: "yushushi",
                abb: "yss"
              },
              {
                id: 644,
                value: "德惠市",
                label: "德惠市",
                spell: "dehuishi",
                abb: "dhs"
              }
            ]
          },
          {
            id: 645,
            value: "吉林市",
            label: "吉林市",
            spell: "jilinshi",
            abb: "jls",
            children: [
              {
                id: 647,
                value: "昌邑区",
                label: "昌邑区",
                spell: "changyiqu",
                abb: "cyq"
              },
              {
                id: 648,
                value: "龙潭区",
                label: "龙潭区",
                spell: "longtanqu",
                abb: "ltq"
              },
              {
                id: 649,
                value: "船营区",
                label: "船营区",
                spell: "chuanyingqu",
                abb: "cyq"
              },
              {
                id: 650,
                value: "丰满区",
                label: "丰满区",
                spell: "fengmanqu",
                abb: "fmq"
              },
              {
                id: 651,
                value: "永吉县",
                label: "永吉县",
                spell: "yongjixian",
                abb: "yjx"
              },
              {
                id: 652,
                value: "蛟河市",
                label: "蛟河市",
                spell: "jiaoheshi",
                abb: "jhs"
              },
              {
                id: 653,
                value: "桦甸市",
                label: "桦甸市",
                spell: "huadianshi",
                abb: "hds"
              },
              {
                id: 654,
                value: "舒兰市",
                label: "舒兰市",
                spell: "shulanshi",
                abb: "sls"
              },
              {
                id: 655,
                value: "磐石市",
                label: "磐石市",
                spell: "panshishi",
                abb: "pss"
              }
            ]
          },
          {
            id: 656,
            value: "四平市",
            label: "四平市",
            spell: "sipingshi",
            abb: "sps",
            children: [
              {
                id: 658,
                value: "铁西区",
                label: "铁西区",
                spell: "tiexiqu",
                abb: "txq"
              },
              {
                id: 659,
                value: "铁东区",
                label: "铁东区",
                spell: "tiedongqu",
                abb: "tdq"
              },
              {
                id: 660,
                value: "梨树县",
                label: "梨树县",
                spell: "lishuxian",
                abb: "lsx"
              },
              {
                id: 661,
                value: "伊通满族自治县",
                label: "伊通满族自治县",
                spell: "yitongmanzuzizhixian",
                abb: "ytmzzzx"
              },
              {
                id: 662,
                value: "公主岭市",
                label: "公主岭市",
                spell: "gongzhulingshi",
                abb: "gzls"
              },
              {
                id: 663,
                value: "双辽市",
                label: "双辽市",
                spell: "shuangliaoshi",
                abb: "sls"
              }
            ]
          },
          {
            id: 664,
            value: "辽源市",
            label: "辽源市",
            spell: "liaoyuanshi",
            abb: "lys",
            children: [
              {
                id: 666,
                value: "龙山区",
                label: "龙山区",
                spell: "longshanqu",
                abb: "lsq"
              },
              {
                id: 667,
                value: "西安区",
                label: "西安区",
                spell: "xianqu",
                abb: "xaq"
              },
              {
                id: 668,
                value: "东丰县",
                label: "东丰县",
                spell: "dongfengxian",
                abb: "dfx"
              },
              {
                id: 669,
                value: "东辽县",
                label: "东辽县",
                spell: "dongliaoxian",
                abb: "dlx"
              }
            ]
          },
          {
            id: 670,
            value: "通化市",
            label: "通化市",
            spell: "tonghuashi",
            abb: "ths",
            children: [
              {
                id: 672,
                value: "东昌区",
                label: "东昌区",
                spell: "dongchangqu",
                abb: "dcq"
              },
              {
                id: 673,
                value: "二道江区",
                label: "二道江区",
                spell: "erdaojiangqu",
                abb: "edjq"
              },
              {
                id: 674,
                value: "通化县",
                label: "通化县",
                spell: "tonghuaxian",
                abb: "thx"
              },
              {
                id: 675,
                value: "辉南县",
                label: "辉南县",
                spell: "huinanxian",
                abb: "hnx"
              },
              {
                id: 676,
                value: "柳河县",
                label: "柳河县",
                spell: "liuhexian",
                abb: "lhx"
              },
              {
                id: 677,
                value: "梅河口市",
                label: "梅河口市",
                spell: "meihekoushi",
                abb: "mhks"
              },
              {
                id: 678,
                value: "集安市",
                label: "集安市",
                spell: "jianshi",
                abb: "jas"
              }
            ]
          },
          {
            id: 679,
            value: "白山市",
            label: "白山市",
            spell: "baishanshi",
            abb: "bss",
            children: [
              {
                id: 681,
                value: "八道江区",
                label: "八道江区",
                spell: "badaojiangqu",
                abb: "bdjq"
              },
              {
                id: 682,
                value: "江源区",
                label: "江源区",
                spell: "jiangyuanqu",
                abb: "jyq"
              },
              {
                id: 683,
                value: "抚松县",
                label: "抚松县",
                spell: "fusongxian",
                abb: "fsx"
              },
              {
                id: 684,
                value: "靖宇县",
                label: "靖宇县",
                spell: "jingyuxian",
                abb: "jyx"
              },
              {
                id: 685,
                value: "长白朝鲜族自治县",
                label: "长白朝鲜族自治县",
                spell: "changbaichaoxianzuzizhixian",
                abb: "cbcxzzzx"
              },
              {
                id: 686,
                value: "临江市",
                label: "临江市",
                spell: "linjiangshi",
                abb: "ljs"
              }
            ]
          },
          {
            id: 687,
            value: "松原市",
            label: "松原市",
            spell: "songyuanshi",
            abb: "sys",
            children: [
              {
                id: 689,
                value: "宁江区",
                label: "宁江区",
                spell: "ningjiangqu",
                abb: "njq"
              },
              {
                id: 690,
                value: "前郭尔罗斯蒙古族自治县",
                label: "前郭尔罗斯蒙古族自治县",
                spell: "qianguoerluosimengguzuzizhixian",
                abb: "qgelsmgzzzx"
              },
              {
                id: 691,
                value: "长岭县",
                label: "长岭县",
                spell: "changlingxian",
                abb: "clx"
              },
              {
                id: 692,
                value: "乾安县",
                label: "乾安县",
                spell: "qiananxian",
                abb: "qax"
              },
              {
                id: 693,
                value: "扶余县",
                label: "扶余县",
                spell: "fuyuxian",
                abb: "fyx"
              }
            ]
          },
          {
            id: 694,
            value: "白城市",
            label: "白城市",
            spell: "baichengshi",
            abb: "bcs",
            children: [
              {
                id: 696,
                value: "洮北区",
                label: "洮北区",
                spell: "taobeiqu",
                abb: "tbq"
              },
              {
                id: 697,
                value: "镇赉县",
                label: "镇赉县",
                spell: "zhenlaixian",
                abb: "zlx"
              },
              {
                id: 698,
                value: "通榆县",
                label: "通榆县",
                spell: "tongyuxian",
                abb: "tyx"
              },
              {
                id: 699,
                value: "洮南市",
                label: "洮南市",
                spell: "taonanshi",
                abb: "tns"
              },
              {
                id: 700,
                value: "大安市",
                label: "大安市",
                spell: "daanshi",
                abb: "das"
              }
            ]
          },
          {
            id: 701,
            value: "延边朝鲜族自治州",
            label: "延边朝鲜族自治州",
            spell: "yanbianchaoxianzuzizhizhou",
            abb: "ybcxzzzz",
            children: [
              {
                id: 702,
                value: "延吉市",
                label: "延吉市",
                spell: "yanjishi",
                abb: "yjs"
              },
              {
                id: 703,
                value: "图们市",
                label: "图们市",
                spell: "tumenshi",
                abb: "tms"
              },
              {
                id: 704,
                value: "敦化市",
                label: "敦化市",
                spell: "dunhuashi",
                abb: "dhs"
              },
              {
                id: 705,
                value: "珲春市",
                label: "珲春市",
                spell: "hunchunshi",
                abb: "hcs"
              },
              {
                id: 706,
                value: "龙井市",
                label: "龙井市",
                spell: "longjingshi",
                abb: "ljs"
              },
              {
                id: 707,
                value: "和龙市",
                label: "和龙市",
                spell: "helongshi",
                abb: "hls"
              },
              {
                id: 708,
                value: "汪清县",
                label: "汪清县",
                spell: "wangqingxian",
                abb: "wqx"
              },
              {
                id: 709,
                value: "安图县",
                label: "安图县",
                spell: "antuxian",
                abb: "atx"
              }
            ]
          }
        ]
      },
      {
        id: 710,
        value: "黑龙江省",
        label: "黑龙江省",
        spell: "heilongjiangsheng",
        abb: "hljs",
        children: [
          {
            id: 711,
            value: "哈尔滨市",
            label: "哈尔滨市",
            spell: "haerbinshi",
            abb: "hebs",
            children: [
              {
                id: 713,
                value: "道里区",
                label: "道里区",
                spell: "daoliqu",
                abb: "dlq"
              },
              {
                id: 714,
                value: "南岗区",
                label: "南岗区",
                spell: "nangangqu",
                abb: "ngq"
              },
              {
                id: 715,
                value: "道外区",
                label: "道外区",
                spell: "daowaiqu",
                abb: "dwq"
              },
              {
                id: 716,
                value: "平房区",
                label: "平房区",
                spell: "pingfangqu",
                abb: "pfq"
              },
              {
                id: 717,
                value: "松北区",
                label: "松北区",
                spell: "songbeiqu",
                abb: "sbq"
              },
              {
                id: 718,
                value: "香坊区",
                label: "香坊区",
                spell: "xiangfangqu",
                abb: "xfq"
              },
              {
                id: 719,
                value: "呼兰区",
                label: "呼兰区",
                spell: "hulanqu",
                abb: "hlq"
              },
              {
                id: 720,
                value: "阿城区",
                label: "阿城区",
                spell: "achengqu",
                abb: "acq"
              },
              {
                id: 721,
                value: "依兰县",
                label: "依兰县",
                spell: "yilanxian",
                abb: "ylx"
              },
              {
                id: 722,
                value: "方正县",
                label: "方正县",
                spell: "fangzhengxian",
                abb: "fzx"
              },
              {
                id: 723,
                value: "宾县",
                label: "宾县",
                spell: "binxian",
                abb: "bx"
              },
              {
                id: 724,
                value: "巴彦县",
                label: "巴彦县",
                spell: "bayanxian",
                abb: "byx"
              },
              {
                id: 725,
                value: "木兰县",
                label: "木兰县",
                spell: "mulanxian",
                abb: "mlx"
              },
              {
                id: 726,
                value: "通河县",
                label: "通河县",
                spell: "tonghexian",
                abb: "thx"
              },
              {
                id: 727,
                value: "延寿县",
                label: "延寿县",
                spell: "yanshouxian",
                abb: "ysx"
              },
              {
                id: 728,
                value: "双城市",
                label: "双城市",
                spell: "shuangchengshi",
                abb: "scs"
              },
              {
                id: 729,
                value: "尚志市",
                label: "尚志市",
                spell: "shangzhishi",
                abb: "szs"
              },
              {
                id: 730,
                value: "五常市",
                label: "五常市",
                spell: "wuchangshi",
                abb: "wcs"
              }
            ]
          },
          {
            id: 731,
            value: "齐齐哈尔市",
            label: "齐齐哈尔市",
            spell: "qiqihaershi",
            abb: "qqhes",
            children: [
              {
                id: 733,
                value: "龙沙区",
                label: "龙沙区",
                spell: "longshaqu",
                abb: "lsq"
              },
              {
                id: 734,
                value: "建华区",
                label: "建华区",
                spell: "jianhuaqu",
                abb: "jhq"
              },
              {
                id: 735,
                value: "铁锋区",
                label: "铁锋区",
                spell: "tiefengqu",
                abb: "tfq"
              },
              {
                id: 736,
                value: "昂昂溪区",
                label: "昂昂溪区",
                spell: "angangxiqu",
                abb: "aaxq"
              },
              {
                id: 737,
                value: "富拉尔基区",
                label: "富拉尔基区",
                spell: "fulaerjiqu",
                abb: "flejq"
              },
              {
                id: 738,
                value: "碾子山区",
                label: "碾子山区",
                spell: "nianzishanqu",
                abb: "nzsq"
              },
              {
                id: 739,
                value: "梅里斯达斡尔族区",
                label: "梅里斯达斡尔族区",
                spell: "meilisidawoerzuqu",
                abb: "mlsdwezq"
              },
              {
                id: 740,
                value: "龙江县",
                label: "龙江县",
                spell: "longjiangxian",
                abb: "ljx"
              },
              {
                id: 741,
                value: "依安县",
                label: "依安县",
                spell: "yianxian",
                abb: "yax"
              },
              {
                id: 742,
                value: "泰来县",
                label: "泰来县",
                spell: "tailaixian",
                abb: "tlx"
              },
              {
                id: 743,
                value: "甘南县",
                label: "甘南县",
                spell: "gannanxian",
                abb: "gnx"
              },
              {
                id: 744,
                value: "富裕县",
                label: "富裕县",
                spell: "fuyuxian",
                abb: "fyx"
              },
              {
                id: 745,
                value: "克山县",
                label: "克山县",
                spell: "keshanxian",
                abb: "ksx"
              },
              {
                id: 746,
                value: "克东县",
                label: "克东县",
                spell: "kedongxian",
                abb: "kdx"
              },
              {
                id: 747,
                value: "拜泉县",
                label: "拜泉县",
                spell: "baiquanxian",
                abb: "bqx"
              },
              {
                id: 748,
                value: "讷河市",
                label: "讷河市",
                spell: "neheshi",
                abb: "nhs"
              }
            ]
          },
          {
            id: 749,
            value: "鸡西市",
            label: "鸡西市",
            spell: "jixishi",
            abb: "jxs",
            children: [
              {
                id: 751,
                value: "鸡冠区",
                label: "鸡冠区",
                spell: "jiguanqu",
                abb: "jgq"
              },
              {
                id: 752,
                value: "恒山区",
                label: "恒山区",
                spell: "hengshanqu",
                abb: "hsq"
              },
              {
                id: 753,
                value: "滴道区",
                label: "滴道区",
                spell: "didaoqu",
                abb: "ddq"
              },
              {
                id: 754,
                value: "梨树区",
                label: "梨树区",
                spell: "lishuqu",
                abb: "lsq"
              },
              {
                id: 755,
                value: "城子河区",
                label: "城子河区",
                spell: "chengzihequ",
                abb: "czhq"
              },
              {
                id: 756,
                value: "麻山区",
                label: "麻山区",
                spell: "mashanqu",
                abb: "msq"
              },
              {
                id: 757,
                value: "鸡东县",
                label: "鸡东县",
                spell: "jidongxian",
                abb: "jdx"
              },
              {
                id: 758,
                value: "虎林市",
                label: "虎林市",
                spell: "hulinshi",
                abb: "hls"
              },
              {
                id: 759,
                value: "密山市",
                label: "密山市",
                spell: "mishanshi",
                abb: "mss"
              }
            ]
          },
          {
            id: 760,
            value: "鹤岗市",
            label: "鹤岗市",
            spell: "hegangshi",
            abb: "hgs",
            children: [
              {
                id: 762,
                value: "向阳区",
                label: "向阳区",
                spell: "xiangyangqu",
                abb: "xyq"
              },
              {
                id: 763,
                value: "工农区",
                label: "工农区",
                spell: "gongnongqu",
                abb: "gnq"
              },
              {
                id: 764,
                value: "南山区",
                label: "南山区",
                spell: "nanshanqu",
                abb: "nsq"
              },
              {
                id: 765,
                value: "兴安区",
                label: "兴安区",
                spell: "xinganqu",
                abb: "xaq"
              },
              {
                id: 766,
                value: "东山区",
                label: "东山区",
                spell: "dongshanqu",
                abb: "dsq"
              },
              {
                id: 767,
                value: "兴山区",
                label: "兴山区",
                spell: "xingshanqu",
                abb: "xsq"
              },
              {
                id: 768,
                value: "萝北县",
                label: "萝北县",
                spell: "luobeixian",
                abb: "lbx"
              },
              {
                id: 769,
                value: "绥滨县",
                label: "绥滨县",
                spell: "suibinxian",
                abb: "sbx"
              }
            ]
          },
          {
            id: 770,
            value: "双鸭山市",
            label: "双鸭山市",
            spell: "shuangyashanshi",
            abb: "syss",
            children: [
              {
                id: 772,
                value: "尖山区",
                label: "尖山区",
                spell: "jianshanqu",
                abb: "jsq"
              },
              {
                id: 773,
                value: "岭东区",
                label: "岭东区",
                spell: "lingdongqu",
                abb: "ldq"
              },
              {
                id: 774,
                value: "四方台区",
                label: "四方台区",
                spell: "sifangtaiqu",
                abb: "sftq"
              },
              {
                id: 775,
                value: "宝山区",
                label: "宝山区",
                spell: "baoshanqu",
                abb: "bsq"
              },
              {
                id: 776,
                value: "集贤县",
                label: "集贤县",
                spell: "jixianxian",
                abb: "jxx"
              },
              {
                id: 777,
                value: "友谊县",
                label: "友谊县",
                spell: "youyixian",
                abb: "yyx"
              },
              {
                id: 778,
                value: "宝清县",
                label: "宝清县",
                spell: "baoqingxian",
                abb: "bqx"
              },
              {
                id: 779,
                value: "饶河县",
                label: "饶河县",
                spell: "raohexian",
                abb: "rhx"
              }
            ]
          },
          {
            id: 780,
            value: "大庆市",
            label: "大庆市",
            spell: "daqingshi",
            abb: "dqs",
            children: [
              {
                id: 782,
                value: "萨尔图区",
                label: "萨尔图区",
                spell: "saertuqu",
                abb: "setq"
              },
              {
                id: 783,
                value: "龙凤区",
                label: "龙凤区",
                spell: "longfengqu",
                abb: "lfq"
              },
              {
                id: 784,
                value: "让胡路区",
                label: "让胡路区",
                spell: "ranghuluqu",
                abb: "rhlq"
              },
              {
                id: 785,
                value: "红岗区",
                label: "红岗区",
                spell: "honggangqu",
                abb: "hgq"
              },
              {
                id: 786,
                value: "大同区",
                label: "大同区",
                spell: "datongqu",
                abb: "dtq"
              },
              {
                id: 787,
                value: "肇州县",
                label: "肇州县",
                spell: "zhaozhouxian",
                abb: "zzx"
              },
              {
                id: 788,
                value: "肇源县",
                label: "肇源县",
                spell: "zhaoyuanxian",
                abb: "zyx"
              },
              {
                id: 789,
                value: "林甸县",
                label: "林甸县",
                spell: "lindianxian",
                abb: "ldx"
              },
              {
                id: 790,
                value: "杜尔伯特蒙古族自治县",
                label: "杜尔伯特蒙古族自治县",
                spell: "duerbotemengguzuzizhixian",
                abb: "debtmgzzzx"
              }
            ]
          },
          {
            id: 791,
            value: "伊春市",
            label: "伊春市",
            spell: "yichunshi",
            abb: "ycs",
            children: [
              {
                id: 793,
                value: "伊春区",
                label: "伊春区",
                spell: "yichunqu",
                abb: "ycq"
              },
              {
                id: 794,
                value: "南岔区",
                label: "南岔区",
                spell: "nanchaqu",
                abb: "ncq"
              },
              {
                id: 795,
                value: "友好区",
                label: "友好区",
                spell: "youhaoqu",
                abb: "yhq"
              },
              {
                id: 796,
                value: "西林区",
                label: "西林区",
                spell: "xilinqu",
                abb: "xlq"
              },
              {
                id: 797,
                value: "翠峦区",
                label: "翠峦区",
                spell: "cuiluanqu",
                abb: "clq"
              },
              {
                id: 798,
                value: "新青区",
                label: "新青区",
                spell: "xinqingqu",
                abb: "xqq"
              },
              {
                id: 799,
                value: "美溪区",
                label: "美溪区",
                spell: "meixiqu",
                abb: "mxq"
              },
              {
                id: 800,
                value: "金山屯区",
                label: "金山屯区",
                spell: "jinshantunqu",
                abb: "jstq"
              },
              {
                id: 801,
                value: "五营区",
                label: "五营区",
                spell: "wuyingqu",
                abb: "wyq"
              },
              {
                id: 802,
                value: "乌马河区",
                label: "乌马河区",
                spell: "wumahequ",
                abb: "wmhq"
              },
              {
                id: 803,
                value: "汤旺河区",
                label: "汤旺河区",
                spell: "tangwanghequ",
                abb: "twhq"
              },
              {
                id: 804,
                value: "带岭区",
                label: "带岭区",
                spell: "dailingqu",
                abb: "dlq"
              },
              {
                id: 805,
                value: "乌伊岭区",
                label: "乌伊岭区",
                spell: "wuyilingqu",
                abb: "wylq"
              },
              {
                id: 806,
                value: "红星区",
                label: "红星区",
                spell: "hongxingqu",
                abb: "hxq"
              },
              {
                id: 807,
                value: "上甘岭区",
                label: "上甘岭区",
                spell: "shangganlingqu",
                abb: "sglq"
              },
              {
                id: 808,
                value: "嘉荫县",
                label: "嘉荫县",
                spell: "jiayinxian",
                abb: "jyx"
              },
              {
                id: 809,
                value: "铁力市",
                label: "铁力市",
                spell: "tielishi",
                abb: "tls"
              }
            ]
          },
          {
            id: 810,
            value: "佳木斯市",
            label: "佳木斯市",
            spell: "jiamusishi",
            abb: "jmss",
            children: [
              {
                id: 812,
                value: "向阳区",
                label: "向阳区",
                spell: "xiangyangqu",
                abb: "xyq"
              },
              {
                id: 813,
                value: "前进区",
                label: "前进区",
                spell: "qianjinqu",
                abb: "qjq"
              },
              {
                id: 814,
                value: "东风区",
                label: "东风区",
                spell: "dongfengqu",
                abb: "dfq"
              },
              {
                id: 815,
                value: "郊区",
                label: "郊区",
                spell: "jiaoqu",
                abb: "jq"
              },
              {
                id: 816,
                value: "桦南县",
                label: "桦南县",
                spell: "huananxian",
                abb: "hnx"
              },
              {
                id: 817,
                value: "桦川县",
                label: "桦川县",
                spell: "huachuanxian",
                abb: "hcx"
              },
              {
                id: 818,
                value: "汤原县",
                label: "汤原县",
                spell: "tangyuanxian",
                abb: "tyx"
              },
              {
                id: 819,
                value: "抚远县",
                label: "抚远县",
                spell: "fuyuanxian",
                abb: "fyx"
              },
              {
                id: 820,
                value: "同江市",
                label: "同江市",
                spell: "tongjiangshi",
                abb: "tjs"
              },
              {
                id: 821,
                value: "富锦市",
                label: "富锦市",
                spell: "fujinshi",
                abb: "fjs"
              }
            ]
          },
          {
            id: 822,
            value: "七台河市",
            label: "七台河市",
            spell: "qitaiheshi",
            abb: "qths",
            children: [
              {
                id: 824,
                value: "新兴区",
                label: "新兴区",
                spell: "xinxingqu",
                abb: "xxq"
              },
              {
                id: 825,
                value: "桃山区",
                label: "桃山区",
                spell: "taoshanqu",
                abb: "tsq"
              },
              {
                id: 826,
                value: "茄子河区",
                label: "茄子河区",
                spell: "qiezihequ",
                abb: "qzhq"
              },
              {
                id: 827,
                value: "勃利县",
                label: "勃利县",
                spell: "bolixian",
                abb: "blx"
              }
            ]
          },
          {
            id: 828,
            value: "牡丹江市",
            label: "牡丹江市",
            spell: "mudanjiangshi",
            abb: "mdjs",
            children: [
              {
                id: 830,
                value: "东安区",
                label: "东安区",
                spell: "donganqu",
                abb: "daq"
              },
              {
                id: 831,
                value: "阳明区",
                label: "阳明区",
                spell: "yangmingqu",
                abb: "ymq"
              },
              {
                id: 832,
                value: "爱民区",
                label: "爱民区",
                spell: "aiminqu",
                abb: "amq"
              },
              {
                id: 833,
                value: "西安区",
                label: "西安区",
                spell: "xianqu",
                abb: "xaq"
              },
              {
                id: 834,
                value: "东宁县",
                label: "东宁县",
                spell: "dongningxian",
                abb: "dnx"
              },
              {
                id: 835,
                value: "林口县",
                label: "林口县",
                spell: "linkouxian",
                abb: "lkx"
              },
              {
                id: 836,
                value: "绥芬河市",
                label: "绥芬河市",
                spell: "suifenheshi",
                abb: "sfhs"
              },
              {
                id: 837,
                value: "海林市",
                label: "海林市",
                spell: "hailinshi",
                abb: "hls"
              },
              {
                id: 838,
                value: "宁安市",
                label: "宁安市",
                spell: "ninganshi",
                abb: "nas"
              },
              {
                id: 839,
                value: "穆棱市",
                label: "穆棱市",
                spell: "mulengshi",
                abb: "mls"
              }
            ]
          },
          {
            id: 840,
            value: "黑河市",
            label: "黑河市",
            spell: "heiheshi",
            abb: "hhs",
            children: [
              {
                id: 842,
                value: "爱辉区",
                label: "爱辉区",
                spell: "aihuiqu",
                abb: "ahq"
              },
              {
                id: 843,
                value: "嫩江县",
                label: "嫩江县",
                spell: "nenjiangxian",
                abb: "njx"
              },
              {
                id: 844,
                value: "逊克县",
                label: "逊克县",
                spell: "xunkexian",
                abb: "xkx"
              },
              {
                id: 845,
                value: "孙吴县",
                label: "孙吴县",
                spell: "sunwuxian",
                abb: "swx"
              },
              {
                id: 846,
                value: "北安市",
                label: "北安市",
                spell: "beianshi",
                abb: "bas"
              },
              {
                id: 847,
                value: "五大连池市",
                label: "五大连池市",
                spell: "wudalianchishi",
                abb: "wdlcs"
              }
            ]
          },
          {
            id: 848,
            value: "绥化市",
            label: "绥化市",
            spell: "suihuashi",
            abb: "shs",
            children: [
              {
                id: 850,
                value: "北林区",
                label: "北林区",
                spell: "beilinqu",
                abb: "blq"
              },
              {
                id: 851,
                value: "望奎县",
                label: "望奎县",
                spell: "wangkuixian",
                abb: "wkx"
              },
              {
                id: 852,
                value: "兰西县",
                label: "兰西县",
                spell: "lanxixian",
                abb: "lxx"
              },
              {
                id: 853,
                value: "青冈县",
                label: "青冈县",
                spell: "qinggangxian",
                abb: "qgx"
              },
              {
                id: 854,
                value: "庆安县",
                label: "庆安县",
                spell: "qinganxian",
                abb: "qax"
              },
              {
                id: 855,
                value: "明水县",
                label: "明水县",
                spell: "mingshuixian",
                abb: "msx"
              },
              {
                id: 856,
                value: "绥棱县",
                label: "绥棱县",
                spell: "suilengxian",
                abb: "slx"
              },
              {
                id: 857,
                value: "安达市",
                label: "安达市",
                spell: "andashi",
                abb: "ads"
              },
              {
                id: 858,
                value: "肇东市",
                label: "肇东市",
                spell: "zhaodongshi",
                abb: "zds"
              },
              {
                id: 859,
                value: "海伦市",
                label: "海伦市",
                spell: "hailunshi",
                abb: "hls"
              }
            ]
          },
          {
            id: 860,
            value: "大兴安岭地区",
            label: "大兴安岭地区",
            spell: "daxinganlingdiqu",
            abb: "dxaldq",
            children: [
              {
                id: 861,
                value: "加格达奇区",
                label: "加格达奇区",
                spell: "jiagedaqiqu",
                abb: "jgdqq"
              },
              {
                id: 862,
                value: "松岭区",
                label: "松岭区",
                spell: "songlingqu",
                abb: "slq"
              },
              {
                id: 863,
                value: "新林区",
                label: "新林区",
                spell: "xinlinqu",
                abb: "xlq"
              },
              {
                id: 864,
                value: "呼中区",
                label: "呼中区",
                spell: "huzhongqu",
                abb: "hzq"
              },
              {
                id: 865,
                value: "呼玛县",
                label: "呼玛县",
                spell: "humaxian",
                abb: "hmx"
              },
              {
                id: 866,
                value: "塔河县",
                label: "塔河县",
                spell: "tahexian",
                abb: "thx"
              },
              {
                id: 867,
                value: "漠河县",
                label: "漠河县",
                spell: "mohexian",
                abb: "mhx"
              }
            ]
          }
        ]
      },
      {
        id: 868,
        value: "上海市",
        label: "上海市",
        spell: "shanghaishi",
        abb: "shs",
        children: [
          {
            id: 869,
            value: "上海市",
            label: "上海市",
            spell: "shanghaishi",
            abb: "shs",
            children: [
              {
                id: 870,
                value: "黄浦区",
                label: "黄浦区",
                spell: "huangpuqu",
                abb: "hpq"
              },
              {
                id: 871,
                value: "卢湾区",
                label: "卢湾区",
                spell: "luwanqu",
                abb: "lwq"
              },
              {
                id: 872,
                value: "徐汇区",
                label: "徐汇区",
                spell: "xuhuiqu",
                abb: "xhq"
              },
              {
                id: 873,
                value: "长宁区",
                label: "长宁区",
                spell: "changningqu",
                abb: "cnq"
              },
              {
                id: 874,
                value: "静安区",
                label: "静安区",
                spell: "jinganqu",
                abb: "jaq"
              },
              {
                id: 875,
                value: "普陀区",
                label: "普陀区",
                spell: "putuoqu",
                abb: "ptq"
              },
              {
                id: 876,
                value: "闸北区",
                label: "闸北区",
                spell: "zhabeiqu",
                abb: "zbq"
              },
              {
                id: 877,
                value: "虹口区",
                label: "虹口区",
                spell: "hongkouqu",
                abb: "hkq"
              },
              {
                id: 878,
                value: "杨浦区",
                label: "杨浦区",
                spell: "yangpuqu",
                abb: "ypq"
              },
              {
                id: 879,
                value: "闵行区",
                label: "闵行区",
                spell: "minxingqu",
                abb: "mxq"
              },
              {
                id: 880,
                value: "宝山区",
                label: "宝山区",
                spell: "baoshanqu",
                abb: "bsq"
              },
              {
                id: 881,
                value: "嘉定区",
                label: "嘉定区",
                spell: "jiadingqu",
                abb: "jdq"
              },
              {
                id: 882,
                value: "浦东新区",
                label: "浦东新区",
                spell: "pudongxinqu",
                abb: "pdxq"
              },
              {
                id: 883,
                value: "金山区",
                label: "金山区",
                spell: "jinshanqu",
                abb: "jsq"
              },
              {
                id: 884,
                value: "松江区",
                label: "松江区",
                spell: "songjiangqu",
                abb: "sjq"
              },
              {
                id: 885,
                value: "青浦区",
                label: "青浦区",
                spell: "qingpuqu",
                abb: "qpq"
              },
              {
                id: 886,
                value: "南汇区",
                label: "南汇区",
                spell: "nanhuiqu",
                abb: "nhq"
              },
              {
                id: 887,
                value: "奉贤区",
                label: "奉贤区",
                spell: "fengxianqu",
                abb: "fxq"
              }
            ]
          }
        ]
      },
      {
        id: 890,
        value: "江苏省",
        label: "江苏省",
        spell: "jiangsusheng",
        abb: "jss",
        children: [
          {
            id: 891,
            value: "南京市",
            label: "南京市",
            spell: "nanjingshi",
            abb: "njs",
            children: [
              {
                id: 893,
                value: "玄武区",
                label: "玄武区",
                spell: "xuanwuqu",
                abb: "xwq"
              },
              {
                id: 894,
                value: "白下区",
                label: "白下区",
                spell: "baixiaqu",
                abb: "bxq"
              },
              {
                id: 895,
                value: "秦淮区",
                label: "秦淮区",
                spell: "qinhuaiqu",
                abb: "qhq"
              },
              {
                id: 896,
                value: "建邺区",
                label: "建邺区",
                spell: "jianyequ",
                abb: "jyq"
              },
              {
                id: 897,
                value: "鼓楼区",
                label: "鼓楼区",
                spell: "gulouqu",
                abb: "glq"
              },
              {
                id: 898,
                value: "下关区",
                label: "下关区",
                spell: "xiaguanqu",
                abb: "xgq"
              },
              {
                id: 899,
                value: "浦口区",
                label: "浦口区",
                spell: "pukouqu",
                abb: "pkq"
              },
              {
                id: 900,
                value: "栖霞区",
                label: "栖霞区",
                spell: "qixiaqu",
                abb: "qxq"
              },
              {
                id: 901,
                value: "雨花台区",
                label: "雨花台区",
                spell: "yuhuataiqu",
                abb: "yhtq"
              },
              {
                id: 902,
                value: "江宁区",
                label: "江宁区",
                spell: "jiangningqu",
                abb: "jnq"
              },
              {
                id: 903,
                value: "六合区",
                label: "六合区",
                spell: "liuhequ",
                abb: "lhq"
              },
              {
                id: 904,
                value: "溧水县",
                label: "溧水县",
                spell: "lishuixian",
                abb: "lsx"
              },
              {
                id: 905,
                value: "高淳县",
                label: "高淳县",
                spell: "gaochunxian",
                abb: "gcx"
              }
            ]
          },
          {
            id: 906,
            value: "无锡市",
            label: "无锡市",
            spell: "wuxishi",
            abb: "wxs",
            children: [
              {
                id: 908,
                value: "崇安区",
                label: "崇安区",
                spell: "chonganqu",
                abb: "caq"
              },
              {
                id: 909,
                value: "南长区",
                label: "南长区",
                spell: "nanchangqu",
                abb: "ncq"
              },
              {
                id: 910,
                value: "北塘区",
                label: "北塘区",
                spell: "beitangqu",
                abb: "btq"
              },
              {
                id: 911,
                value: "锡山区",
                label: "锡山区",
                spell: "xishanqu",
                abb: "xsq"
              },
              {
                id: 912,
                value: "惠山区",
                label: "惠山区",
                spell: "huishanqu",
                abb: "hsq"
              },
              {
                id: 913,
                value: "滨湖区",
                label: "滨湖区",
                spell: "binhuqu",
                abb: "bhq"
              },
              {
                id: 914,
                value: "江阴市",
                label: "江阴市",
                spell: "jiangyinshi",
                abb: "jys"
              },
              {
                id: 915,
                value: "宜兴市",
                label: "宜兴市",
                spell: "yixingshi",
                abb: "yxs"
              }
            ]
          },
          {
            id: 916,
            value: "徐州市",
            label: "徐州市",
            spell: "xuzhoushi",
            abb: "xzs",
            children: [
              {
                id: 918,
                value: "鼓楼区",
                label: "鼓楼区",
                spell: "gulouqu",
                abb: "glq"
              },
              {
                id: 919,
                value: "云龙区",
                label: "云龙区",
                spell: "yunlongqu",
                abb: "ylq"
              },
              {
                id: 920,
                value: "九里区",
                label: "九里区",
                spell: "jiuliqu",
                abb: "jlq"
              },
              {
                id: 921,
                value: "贾汪区",
                label: "贾汪区",
                spell: "jiawangqu",
                abb: "jwq"
              },
              {
                id: 922,
                value: "泉山区",
                label: "泉山区",
                spell: "quanshanqu",
                abb: "qsq"
              },
              {
                id: 923,
                value: "丰县",
                label: "丰县",
                spell: "fengxian",
                abb: "fx"
              },
              {
                id: 924,
                value: "沛县",
                label: "沛县",
                spell: "peixian",
                abb: "px"
              },
              {
                id: 925,
                value: "铜山县",
                label: "铜山县",
                spell: "tongshanxian",
                abb: "tsx"
              },
              {
                id: 926,
                value: "睢宁县",
                label: "睢宁县",
                spell: "suiningxian",
                abb: "snx"
              },
              {
                id: 927,
                value: "新沂市",
                label: "新沂市",
                spell: "xinyishi",
                abb: "xys"
              },
              {
                id: 928,
                value: "邳州市",
                label: "邳州市",
                spell: "pizhoushi",
                abb: "pzs"
              }
            ]
          },
          {
            id: 929,
            value: "常州市",
            label: "常州市",
            spell: "changzhoushi",
            abb: "czs",
            children: [
              {
                id: 931,
                value: "天宁区",
                label: "天宁区",
                spell: "tianningqu",
                abb: "tnq"
              },
              {
                id: 932,
                value: "钟楼区",
                label: "钟楼区",
                spell: "zhonglouqu",
                abb: "zlq"
              },
              {
                id: 933,
                value: "戚墅堰区",
                label: "戚墅堰区",
                spell: "qishuyanqu",
                abb: "qsyq"
              },
              {
                id: 934,
                value: "新北区",
                label: "新北区",
                spell: "xinbeiqu",
                abb: "xbq"
              },
              {
                id: 935,
                value: "武进区",
                label: "武进区",
                spell: "wujinqu",
                abb: "wjq"
              },
              {
                id: 936,
                value: "溧阳市",
                label: "溧阳市",
                spell: "liyangshi",
                abb: "lys"
              },
              {
                id: 937,
                value: "金坛市",
                label: "金坛市",
                spell: "jintanshi",
                abb: "jts"
              }
            ]
          },
          {
            id: 938,
            value: "苏州市",
            label: "苏州市",
            spell: "suzhoushi",
            abb: "szs",
            children: [
              {
                id: 940,
                value: "沧浪区",
                label: "沧浪区",
                spell: "canglangqu",
                abb: "clq"
              },
              {
                id: 941,
                value: "平江区",
                label: "平江区",
                spell: "pingjiangqu",
                abb: "pjq"
              },
              {
                id: 942,
                value: "金阊区",
                label: "金阊区",
                spell: "jinchangqu",
                abb: "jcq"
              },
              {
                id: 943,
                value: "虎丘区",
                label: "虎丘区",
                spell: "huqiuqu",
                abb: "hqq"
              },
              {
                id: 944,
                value: "吴中区",
                label: "吴中区",
                spell: "wuzhongqu",
                abb: "wzq"
              },
              {
                id: 945,
                value: "相城区",
                label: "相城区",
                spell: "xiangchengqu",
                abb: "xcq"
              },
              {
                id: 946,
                value: "常熟市",
                label: "常熟市",
                spell: "changshushi",
                abb: "css"
              },
              {
                id: 947,
                value: "张家港市",
                label: "张家港市",
                spell: "zhangjiagangshi",
                abb: "zjgs"
              },
              {
                id: 948,
                value: "昆山市",
                label: "昆山市",
                spell: "kunshanshi",
                abb: "kss"
              },
              {
                id: 949,
                value: "吴江市",
                label: "吴江市",
                spell: "wujiangshi",
                abb: "wjs"
              },
              {
                id: 950,
                value: "太仓市",
                label: "太仓市",
                spell: "taicangshi",
                abb: "tcs"
              }
            ]
          },
          {
            id: 951,
            value: "南通市",
            label: "南通市",
            spell: "nantongshi",
            abb: "nts",
            children: [
              {
                id: 953,
                value: "崇川区",
                label: "崇川区",
                spell: "chongchuanqu",
                abb: "ccq"
              },
              {
                id: 954,
                value: "港闸区",
                label: "港闸区",
                spell: "gangzhaqu",
                abb: "gzq"
              },
              {
                id: 955,
                value: "海安县",
                label: "海安县",
                spell: "haianxian",
                abb: "hax"
              },
              {
                id: 956,
                value: "如东县",
                label: "如东县",
                spell: "rudongxian",
                abb: "rdx"
              },
              {
                id: 957,
                value: "启东市",
                label: "启东市",
                spell: "qidongshi",
                abb: "qds"
              },
              {
                id: 958,
                value: "如皋市",
                label: "如皋市",
                spell: "rugaoshi",
                abb: "rgs"
              },
              {
                id: 959,
                value: "通州市",
                label: "通州市",
                spell: "tongzhoushi",
                abb: "tzs"
              },
              {
                id: 960,
                value: "海门市",
                label: "海门市",
                spell: "haimenshi",
                abb: "hms"
              }
            ]
          },
          {
            id: 961,
            value: "连云港市",
            label: "连云港市",
            spell: "lianyungangshi",
            abb: "lygs",
            children: [
              {
                id: 963,
                value: "连云区",
                label: "连云区",
                spell: "lianyunqu",
                abb: "lyq"
              },
              {
                id: 964,
                value: "新浦区",
                label: "新浦区",
                spell: "xinpuqu",
                abb: "xpq"
              },
              {
                id: 965,
                value: "海州区",
                label: "海州区",
                spell: "haizhouqu",
                abb: "hzq"
              },
              {
                id: 966,
                value: "赣榆县",
                label: "赣榆县",
                spell: "ganyuxian",
                abb: "gyx"
              },
              {
                id: 967,
                value: "东海县",
                label: "东海县",
                spell: "donghaixian",
                abb: "dhx"
              },
              {
                id: 968,
                value: "灌云县",
                label: "灌云县",
                spell: "guanyunxian",
                abb: "gyx"
              },
              {
                id: 969,
                value: "灌南县",
                label: "灌南县",
                spell: "guannanxian",
                abb: "gnx"
              }
            ]
          },
          {
            id: 970,
            value: "淮安市",
            label: "淮安市",
            spell: "huaianshi",
            abb: "has",
            children: [
              {
                id: 972,
                value: "清河区",
                label: "清河区",
                spell: "qinghequ",
                abb: "qhq"
              },
              {
                id: 973,
                value: "楚州区",
                label: "楚州区",
                spell: "chuzhouqu",
                abb: "czq"
              },
              {
                id: 974,
                value: "淮阴区",
                label: "淮阴区",
                spell: "huaiyinqu",
                abb: "hyq"
              },
              {
                id: 975,
                value: "清浦区",
                label: "清浦区",
                spell: "qingpuqu",
                abb: "qpq"
              },
              {
                id: 976,
                value: "涟水县",
                label: "涟水县",
                spell: "lianshuixian",
                abb: "lsx"
              },
              {
                id: 977,
                value: "洪泽县",
                label: "洪泽县",
                spell: "hongzexian",
                abb: "hzx"
              },
              {
                id: 978,
                value: "盱眙县",
                label: "盱眙县",
                spell: "xuyixian",
                abb: "xyx"
              },
              {
                id: 979,
                value: "金湖县",
                label: "金湖县",
                spell: "jinhuxian",
                abb: "jhx"
              }
            ]
          },
          {
            id: 980,
            value: "盐城市",
            label: "盐城市",
            spell: "yanchengshi",
            abb: "ycs",
            children: [
              {
                id: 982,
                value: "亭湖区",
                label: "亭湖区",
                spell: "tinghuqu",
                abb: "thq"
              },
              {
                id: 983,
                value: "盐都区",
                label: "盐都区",
                spell: "yandouqu",
                abb: "ydq"
              },
              {
                id: 984,
                value: "响水县",
                label: "响水县",
                spell: "xiangshuixian",
                abb: "xsx"
              },
              {
                id: 985,
                value: "滨海县",
                label: "滨海县",
                spell: "binhaixian",
                abb: "bhx"
              },
              {
                id: 986,
                value: "阜宁县",
                label: "阜宁县",
                spell: "funingxian",
                abb: "fnx"
              },
              {
                id: 987,
                value: "射阳县",
                label: "射阳县",
                spell: "sheyangxian",
                abb: "syx"
              },
              {
                id: 988,
                value: "建湖县",
                label: "建湖县",
                spell: "jianhuxian",
                abb: "jhx"
              },
              {
                id: 989,
                value: "东台市",
                label: "东台市",
                spell: "dongtaishi",
                abb: "dts"
              },
              {
                id: 990,
                value: "大丰市",
                label: "大丰市",
                spell: "dafengshi",
                abb: "dfs"
              }
            ]
          },
          {
            id: 991,
            value: "扬州市",
            label: "扬州市",
            spell: "yangzhoushi",
            abb: "yzs",
            children: [
              {
                id: 993,
                value: "广陵区",
                label: "广陵区",
                spell: "guanglingqu",
                abb: "glq"
              },
              {
                id: 994,
                value: "邗江区",
                label: "邗江区",
                spell: "hanjiangqu",
                abb: "hjq"
              },
              {
                id: 995,
                value: "维扬区",
                label: "维扬区",
                spell: "weiyangqu",
                abb: "wyq"
              },
              {
                id: 996,
                value: "宝应县",
                label: "宝应县",
                spell: "baoyingxian",
                abb: "byx"
              },
              {
                id: 997,
                value: "仪征市",
                label: "仪征市",
                spell: "yizhengshi",
                abb: "yzs"
              },
              {
                id: 998,
                value: "高邮市",
                label: "高邮市",
                spell: "gaoyoushi",
                abb: "gys"
              },
              {
                id: 999,
                value: "江都市",
                label: "江都市",
                spell: "jiangdoushi",
                abb: "jds"
              }
            ]
          },
          {
            id: 1000,
            value: "镇江市",
            label: "镇江市",
            spell: "zhenjiangshi",
            abb: "zjs",
            children: [
              {
                id: 1002,
                value: "京口区",
                label: "京口区",
                spell: "jingkouqu",
                abb: "jkq"
              },
              {
                id: 1003,
                value: "润州区",
                label: "润州区",
                spell: "runzhouqu",
                abb: "rzq"
              },
              {
                id: 1004,
                value: "丹徒区",
                label: "丹徒区",
                spell: "dantuqu",
                abb: "dtq"
              },
              {
                id: 1005,
                value: "丹阳市",
                label: "丹阳市",
                spell: "danyangshi",
                abb: "dys"
              },
              {
                id: 1006,
                value: "扬中市",
                label: "扬中市",
                spell: "yangzhongshi",
                abb: "yzs"
              },
              {
                id: 1007,
                value: "句容市",
                label: "句容市",
                spell: "jurongshi",
                abb: "jrs"
              }
            ]
          },
          {
            id: 1008,
            value: "泰州市",
            label: "泰州市",
            spell: "taizhoushi",
            abb: "tzs",
            children: [
              {
                id: 1010,
                value: "海陵区",
                label: "海陵区",
                spell: "hailingqu",
                abb: "hlq"
              },
              {
                id: 1011,
                value: "高港区",
                label: "高港区",
                spell: "gaogangqu",
                abb: "ggq"
              },
              {
                id: 1012,
                value: "兴化市",
                label: "兴化市",
                spell: "xinghuashi",
                abb: "xhs"
              },
              {
                id: 1013,
                value: "靖江市",
                label: "靖江市",
                spell: "jingjiangshi",
                abb: "jjs"
              },
              {
                id: 1014,
                value: "泰兴市",
                label: "泰兴市",
                spell: "taixingshi",
                abb: "txs"
              },
              {
                id: 1015,
                value: "姜堰市",
                label: "姜堰市",
                spell: "jiangyanshi",
                abb: "jys"
              }
            ]
          },
          {
            id: 1016,
            value: "宿迁市",
            label: "宿迁市",
            spell: "suqianshi",
            abb: "sqs",
            children: [
              {
                id: 1018,
                value: "宿城区",
                label: "宿城区",
                spell: "suchengqu",
                abb: "scq"
              },
              {
                id: 1019,
                value: "宿豫区",
                label: "宿豫区",
                spell: "suyuqu",
                abb: "syq"
              },
              {
                id: 1020,
                value: "沭阳县",
                label: "沭阳县",
                spell: "shuyangxian",
                abb: "syx"
              },
              {
                id: 1021,
                value: "泗阳县",
                label: "泗阳县",
                spell: "siyangxian",
                abb: "syx"
              },
              {
                id: 1022,
                value: "泗洪县",
                label: "泗洪县",
                spell: "sihongxian",
                abb: "shx"
              }
            ]
          }
        ]
      },
      {
        id: 1023,
        value: "浙江省",
        label: "浙江省",
        spell: "zhejiangsheng",
        abb: "zjs",
        children: [
          {
            id: 1024,
            value: "杭州市",
            label: "杭州市",
            spell: "hangzhoushi",
            abb: "hzs",
            children: [
              {
                id: 1026,
                value: "上城区",
                label: "上城区",
                spell: "shangchengqu",
                abb: "scq"
              },
              {
                id: 1027,
                value: "下城区",
                label: "下城区",
                spell: "xiachengqu",
                abb: "xcq"
              },
              {
                id: 1028,
                value: "江干区",
                label: "江干区",
                spell: "jiangganqu",
                abb: "jgq"
              },
              {
                id: 1029,
                value: "拱墅区",
                label: "拱墅区",
                spell: "gongshuqu",
                abb: "gsq"
              },
              {
                id: 1030,
                value: "西湖区",
                label: "西湖区",
                spell: "xihuqu",
                abb: "xhq"
              },
              {
                id: 1031,
                value: "滨江区",
                label: "滨江区",
                spell: "binjiangqu",
                abb: "bjq"
              },
              {
                id: 1032,
                value: "萧山区",
                label: "萧山区",
                spell: "xiaoshanqu",
                abb: "xsq"
              },
              {
                id: 1033,
                value: "余杭区",
                label: "余杭区",
                spell: "yuhangqu",
                abb: "yhq"
              },
              {
                id: 1034,
                value: "桐庐县",
                label: "桐庐县",
                spell: "tongluxian",
                abb: "tlx"
              },
              {
                id: 1035,
                value: "淳安县",
                label: "淳安县",
                spell: "chunanxian",
                abb: "cax"
              },
              {
                id: 1036,
                value: "建德市",
                label: "建德市",
                spell: "jiandeshi",
                abb: "jds"
              },
              {
                id: 1037,
                value: "富阳市",
                label: "富阳市",
                spell: "fuyangshi",
                abb: "fys"
              },
              {
                id: 1038,
                value: "临安市",
                label: "临安市",
                spell: "linanshi",
                abb: "las"
              }
            ]
          },
          {
            id: 1039,
            value: "宁波市",
            label: "宁波市",
            spell: "ningboshi",
            abb: "nbs",
            children: [
              {
                id: 1041,
                value: "海曙区",
                label: "海曙区",
                spell: "haishuqu",
                abb: "hsq"
              },
              {
                id: 1042,
                value: "江东区",
                label: "江东区",
                spell: "jiangdongqu",
                abb: "jdq"
              },
              {
                id: 1043,
                value: "江北区",
                label: "江北区",
                spell: "jiangbeiqu",
                abb: "jbq"
              },
              {
                id: 1044,
                value: "北仑区",
                label: "北仑区",
                spell: "beilunqu",
                abb: "blq"
              },
              {
                id: 1045,
                value: "镇海区",
                label: "镇海区",
                spell: "zhenhaiqu",
                abb: "zhq"
              },
              {
                id: 1046,
                value: "鄞州区",
                label: "鄞州区",
                spell: "yinzhouqu",
                abb: "yzq"
              },
              {
                id: 1047,
                value: "象山县",
                label: "象山县",
                spell: "xiangshanxian",
                abb: "xsx"
              },
              {
                id: 1048,
                value: "宁海县",
                label: "宁海县",
                spell: "ninghaixian",
                abb: "nhx"
              },
              {
                id: 1049,
                value: "余姚市",
                label: "余姚市",
                spell: "yuyaoshi",
                abb: "yys"
              },
              {
                id: 1050,
                value: "慈溪市",
                label: "慈溪市",
                spell: "cixishi",
                abb: "cxs"
              },
              {
                id: 1051,
                value: "奉化市",
                label: "奉化市",
                spell: "fenghuashi",
                abb: "fhs"
              }
            ]
          },
          {
            id: 1052,
            value: "温州市",
            label: "温州市",
            spell: "wenzhoushi",
            abb: "wzs",
            children: [
              {
                id: 1054,
                value: "鹿城区",
                label: "鹿城区",
                spell: "luchengqu",
                abb: "lcq"
              },
              {
                id: 1055,
                value: "龙湾区",
                label: "龙湾区",
                spell: "longwanqu",
                abb: "lwq"
              },
              {
                id: 1056,
                value: "瓯海区",
                label: "瓯海区",
                spell: "ouhaiqu",
                abb: "ohq"
              },
              {
                id: 1057,
                value: "洞头县",
                label: "洞头县",
                spell: "dongtouxian",
                abb: "dtx"
              },
              {
                id: 1058,
                value: "永嘉县",
                label: "永嘉县",
                spell: "yongjiaxian",
                abb: "yjx"
              },
              {
                id: 1059,
                value: "平阳县",
                label: "平阳县",
                spell: "pingyangxian",
                abb: "pyx"
              },
              {
                id: 1060,
                value: "苍南县",
                label: "苍南县",
                spell: "cangnanxian",
                abb: "cnx"
              },
              {
                id: 1061,
                value: "文成县",
                label: "文成县",
                spell: "wenchengxian",
                abb: "wcx"
              },
              {
                id: 1062,
                value: "泰顺县",
                label: "泰顺县",
                spell: "taishunxian",
                abb: "tsx"
              },
              {
                id: 1063,
                value: "瑞安市",
                label: "瑞安市",
                spell: "ruianshi",
                abb: "ras"
              },
              {
                id: 1064,
                value: "乐清市",
                label: "乐清市",
                spell: "leqingshi",
                abb: "lqs"
              }
            ]
          },
          {
            id: 1065,
            value: "嘉兴市",
            label: "嘉兴市",
            spell: "jiaxingshi",
            abb: "jxs",
            children: [
              {
                id: 1067,
                value: "南湖区",
                label: "南湖区",
                spell: "nanhuqu",
                abb: "nhq"
              },
              {
                id: 1068,
                value: "秀洲区",
                label: "秀洲区",
                spell: "xiuzhouqu",
                abb: "xzq"
              },
              {
                id: 1069,
                value: "嘉善县",
                label: "嘉善县",
                spell: "jiashanxian",
                abb: "jsx"
              },
              {
                id: 1070,
                value: "海盐县",
                label: "海盐县",
                spell: "haiyanxian",
                abb: "hyx"
              },
              {
                id: 1071,
                value: "海宁市",
                label: "海宁市",
                spell: "hainingshi",
                abb: "hns"
              },
              {
                id: 1072,
                value: "平湖市",
                label: "平湖市",
                spell: "pinghushi",
                abb: "phs"
              },
              {
                id: 1073,
                value: "桐乡市",
                label: "桐乡市",
                spell: "tongxiangshi",
                abb: "txs"
              }
            ]
          },
          {
            id: 1074,
            value: "湖州市",
            label: "湖州市",
            spell: "huzhoushi",
            abb: "hzs",
            children: [
              {
                id: 1076,
                value: "吴兴区",
                label: "吴兴区",
                spell: "wuxingqu",
                abb: "wxq"
              },
              {
                id: 1077,
                value: "南浔区",
                label: "南浔区",
                spell: "nanxunqu",
                abb: "nxq"
              },
              {
                id: 1078,
                value: "德清县",
                label: "德清县",
                spell: "deqingxian",
                abb: "dqx"
              },
              {
                id: 1079,
                value: "长兴县",
                label: "长兴县",
                spell: "changxingxian",
                abb: "cxx"
              },
              {
                id: 1080,
                value: "安吉县",
                label: "安吉县",
                spell: "anjixian",
                abb: "ajx"
              }
            ]
          },
          {
            id: 1081,
            value: "绍兴市",
            label: "绍兴市",
            spell: "shaoxingshi",
            abb: "sxs",
            children: [
              {
                id: 1083,
                value: "越城区",
                label: "越城区",
                spell: "yuechengqu",
                abb: "ycq"
              },
              {
                id: 1084,
                value: "绍兴县",
                label: "绍兴县",
                spell: "shaoxingxian",
                abb: "sxx"
              },
              {
                id: 1085,
                value: "新昌县",
                label: "新昌县",
                spell: "xinchangxian",
                abb: "xcx"
              },
              {
                id: 1086,
                value: "诸暨市",
                label: "诸暨市",
                spell: "zhujishi",
                abb: "zjs"
              },
              {
                id: 1087,
                value: "上虞市",
                label: "上虞市",
                spell: "shangyushi",
                abb: "sys"
              },
              {
                id: 1088,
                value: "嵊州市",
                label: "嵊州市",
                spell: "shengzhoushi",
                abb: "szs"
              }
            ]
          },
          {
            id: 1089,
            value: "金华市",
            label: "金华市",
            spell: "jinhuashi",
            abb: "jhs",
            children: [
              {
                id: 1091,
                value: "婺城区",
                label: "婺城区",
                spell: "wuchengqu",
                abb: "wcq"
              },
              {
                id: 1092,
                value: "金东区",
                label: "金东区",
                spell: "jindongqu",
                abb: "jdq"
              },
              {
                id: 1093,
                value: "武义县",
                label: "武义县",
                spell: "wuyixian",
                abb: "wyx"
              },
              {
                id: 1094,
                value: "浦江县",
                label: "浦江县",
                spell: "pujiangxian",
                abb: "pjx"
              },
              {
                id: 1095,
                value: "磐安县",
                label: "磐安县",
                spell: "pananxian",
                abb: "pax"
              },
              {
                id: 1096,
                value: "兰溪市",
                label: "兰溪市",
                spell: "lanxishi",
                abb: "lxs"
              },
              {
                id: 1097,
                value: "义乌市",
                label: "义乌市",
                spell: "yiwushi",
                abb: "yws"
              },
              {
                id: 1098,
                value: "东阳市",
                label: "东阳市",
                spell: "dongyangshi",
                abb: "dys"
              },
              {
                id: 1099,
                value: "永康市",
                label: "永康市",
                spell: "yongkangshi",
                abb: "yks"
              }
            ]
          },
          {
            id: 1100,
            value: "衢州市",
            label: "衢州市",
            spell: "quzhoushi",
            abb: "qzs",
            children: [
              {
                id: 1102,
                value: "柯城区",
                label: "柯城区",
                spell: "kechengqu",
                abb: "kcq"
              },
              {
                id: 1103,
                value: "衢江区",
                label: "衢江区",
                spell: "qujiangqu",
                abb: "qjq"
              },
              {
                id: 1104,
                value: "常山县",
                label: "常山县",
                spell: "changshanxian",
                abb: "csx"
              },
              {
                id: 1105,
                value: "开化县",
                label: "开化县",
                spell: "kaihuaxian",
                abb: "khx"
              },
              {
                id: 1106,
                value: "龙游县",
                label: "龙游县",
                spell: "longyouxian",
                abb: "lyx"
              },
              {
                id: 1107,
                value: "江山市",
                label: "江山市",
                spell: "jiangshanshi",
                abb: "jss"
              }
            ]
          },
          {
            id: 1108,
            value: "舟山市",
            label: "舟山市",
            spell: "zhoushanshi",
            abb: "zss",
            children: [
              {
                id: 1110,
                value: "定海区",
                label: "定海区",
                spell: "dinghaiqu",
                abb: "dhq"
              },
              {
                id: 1111,
                value: "普陀区",
                label: "普陀区",
                spell: "putuoqu",
                abb: "ptq"
              },
              {
                id: 1112,
                value: "岱山县",
                label: "岱山县",
                spell: "daishanxian",
                abb: "dsx"
              },
              {
                id: 1113,
                value: "嵊泗县",
                label: "嵊泗县",
                spell: "shengsixian",
                abb: "ssx"
              }
            ]
          },
          {
            id: 1114,
            value: "台州市",
            label: "台州市",
            spell: "taizhoushi",
            abb: "tzs",
            children: [
              {
                id: 1116,
                value: "椒江区",
                label: "椒江区",
                spell: "jiaojiangqu",
                abb: "jjq"
              },
              {
                id: 1117,
                value: "黄岩区",
                label: "黄岩区",
                spell: "huangyanqu",
                abb: "hyq"
              },
              {
                id: 1118,
                value: "路桥区",
                label: "路桥区",
                spell: "luqiaoqu",
                abb: "lqq"
              },
              {
                id: 1119,
                value: "玉环县",
                label: "玉环县",
                spell: "yuhuanxian",
                abb: "yhx"
              },
              {
                id: 1120,
                value: "三门县",
                label: "三门县",
                spell: "sanmenxian",
                abb: "smx"
              },
              {
                id: 1121,
                value: "天台县",
                label: "天台县",
                spell: "tiantaixian",
                abb: "ttx"
              },
              {
                id: 1122,
                value: "仙居县",
                label: "仙居县",
                spell: "xianjuxian",
                abb: "xjx"
              },
              {
                id: 1123,
                value: "温岭市",
                label: "温岭市",
                spell: "wenlingshi",
                abb: "wls"
              },
              {
                id: 1124,
                value: "临海市",
                label: "临海市",
                spell: "linhaishi",
                abb: "lhs"
              }
            ]
          },
          {
            id: 1125,
            value: "丽水市",
            label: "丽水市",
            spell: "lishuishi",
            abb: "lss",
            children: [
              {
                id: 1127,
                value: "莲都区",
                label: "莲都区",
                spell: "liandouqu",
                abb: "ldq"
              },
              {
                id: 1128,
                value: "青田县",
                label: "青田县",
                spell: "qingtianxian",
                abb: "qtx"
              },
              {
                id: 1129,
                value: "缙云县",
                label: "缙云县",
                spell: "jinyunxian",
                abb: "jyx"
              },
              {
                id: 1130,
                value: "遂昌县",
                label: "遂昌县",
                spell: "suichangxian",
                abb: "scx"
              },
              {
                id: 1131,
                value: "松阳县",
                label: "松阳县",
                spell: "songyangxian",
                abb: "syx"
              },
              {
                id: 1132,
                value: "云和县",
                label: "云和县",
                spell: "yunhexian",
                abb: "yhx"
              },
              {
                id: 1133,
                value: "庆元县",
                label: "庆元县",
                spell: "qingyuanxian",
                abb: "qyx"
              },
              {
                id: 1134,
                value: "景宁畲族自治县",
                label: "景宁畲族自治县",
                spell: "jingningshezuzizhixian",
                abb: "jnszzzx"
              },
              {
                id: 1135,
                value: "龙泉市",
                label: "龙泉市",
                spell: "longquanshi",
                abb: "lqs"
              }
            ]
          }
        ]
      },
      {
        id: 1136,
        value: "安徽省",
        label: "安徽省",
        spell: "anhuisheng",
        abb: "ahs",
        children: [
          {
            id: 1137,
            value: "合肥市",
            label: "合肥市",
            spell: "hefeishi",
            abb: "hfs",
            children: [
              {
                id: 1139,
                value: "瑶海区",
                label: "瑶海区",
                spell: "yaohaiqu",
                abb: "yhq"
              },
              {
                id: 1140,
                value: "庐阳区",
                label: "庐阳区",
                spell: "luyangqu",
                abb: "lyq"
              },
              {
                id: 1141,
                value: "蜀山区",
                label: "蜀山区",
                spell: "shushanqu",
                abb: "ssq"
              },
              {
                id: 1142,
                value: "包河区",
                label: "包河区",
                spell: "baohequ",
                abb: "bhq"
              },
              {
                id: 1143,
                value: "长丰县",
                label: "长丰县",
                spell: "changfengxian",
                abb: "cfx"
              },
              {
                id: 1144,
                value: "肥东县",
                label: "肥东县",
                spell: "feidongxian",
                abb: "fdx"
              },
              {
                id: 1145,
                value: "肥西县",
                label: "肥西县",
                spell: "feixixian",
                abb: "fxx"
              }
            ]
          },
          {
            id: 1146,
            value: "芜湖市",
            label: "芜湖市",
            spell: "wuhushi",
            abb: "whs",
            children: [
              {
                id: 1148,
                value: "镜湖区",
                label: "镜湖区",
                spell: "jinghuqu",
                abb: "jhq"
              },
              {
                id: 1149,
                value: "弋江区",
                label: "弋江区",
                spell: "yijiangqu",
                abb: "yjq"
              },
              {
                id: 1150,
                value: "鸠江区",
                label: "鸠江区",
                spell: "jiujiangqu",
                abb: "jjq"
              },
              {
                id: 1151,
                value: "三山区",
                label: "三山区",
                spell: "sanshanqu",
                abb: "ssq"
              },
              {
                id: 1152,
                value: "芜湖县",
                label: "芜湖县",
                spell: "wuhuxian",
                abb: "whx"
              },
              {
                id: 1153,
                value: "繁昌县",
                label: "繁昌县",
                spell: "fanchangxian",
                abb: "fcx"
              },
              {
                id: 1154,
                value: "南陵县",
                label: "南陵县",
                spell: "nanlingxian",
                abb: "nlx"
              }
            ]
          },
          {
            id: 1155,
            value: "蚌埠市",
            label: "蚌埠市",
            spell: "bangbushi",
            abb: "bbs",
            children: [
              {
                id: 1157,
                value: "龙子湖区",
                label: "龙子湖区",
                spell: "longzihuqu",
                abb: "lzhq"
              },
              {
                id: 1158,
                value: "蚌山区",
                label: "蚌山区",
                spell: "bangshanqu",
                abb: "bsq"
              },
              {
                id: 1159,
                value: "禹会区",
                label: "禹会区",
                spell: "yuhuiqu",
                abb: "yhq"
              },
              {
                id: 1160,
                value: "淮上区",
                label: "淮上区",
                spell: "huaishangqu",
                abb: "hsq"
              },
              {
                id: 1161,
                value: "怀远县",
                label: "怀远县",
                spell: "huaiyuanxian",
                abb: "hyx"
              },
              {
                id: 1162,
                value: "五河县",
                label: "五河县",
                spell: "wuhexian",
                abb: "whx"
              },
              {
                id: 1163,
                value: "固镇县",
                label: "固镇县",
                spell: "guzhenxian",
                abb: "gzx"
              }
            ]
          },
          {
            id: 1164,
            value: "淮南市",
            label: "淮南市",
            spell: "huainanshi",
            abb: "hns",
            children: [
              {
                id: 1166,
                value: "大通区",
                label: "大通区",
                spell: "datongqu",
                abb: "dtq"
              },
              {
                id: 1167,
                value: "田家庵区",
                label: "田家庵区",
                spell: "tianjiaanqu",
                abb: "tjaq"
              },
              {
                id: 1168,
                value: "谢家集区",
                label: "谢家集区",
                spell: "xiejiajiqu",
                abb: "xjjq"
              },
              {
                id: 1169,
                value: "八公山区",
                label: "八公山区",
                spell: "bagongshanqu",
                abb: "bgsq"
              },
              {
                id: 1170,
                value: "潘集区",
                label: "潘集区",
                spell: "panjiqu",
                abb: "pjq"
              },
              {
                id: 1171,
                value: "凤台县",
                label: "凤台县",
                spell: "fengtaixian",
                abb: "ftx"
              }
            ]
          },
          {
            id: 1172,
            value: "马鞍山市",
            label: "马鞍山市",
            spell: "maanshanshi",
            abb: "mass",
            children: [
              {
                id: 1174,
                value: "金家庄区",
                label: "金家庄区",
                spell: "jinjiazhuangqu",
                abb: "jjzq"
              },
              {
                id: 1175,
                value: "花山区",
                label: "花山区",
                spell: "huashanqu",
                abb: "hsq"
              },
              {
                id: 1176,
                value: "雨山区",
                label: "雨山区",
                spell: "yushanqu",
                abb: "ysq"
              },
              {
                id: 1177,
                value: "当涂县",
                label: "当涂县",
                spell: "dangtuxian",
                abb: "dtx"
              }
            ]
          },
          {
            id: 1178,
            value: "淮北市",
            label: "淮北市",
            spell: "huaibeishi",
            abb: "hbs",
            children: [
              {
                id: 1180,
                value: "杜集区",
                label: "杜集区",
                spell: "dujiqu",
                abb: "djq"
              },
              {
                id: 1181,
                value: "相山区",
                label: "相山区",
                spell: "xiangshanqu",
                abb: "xsq"
              },
              {
                id: 1182,
                value: "烈山区",
                label: "烈山区",
                spell: "lieshanqu",
                abb: "lsq"
              },
              {
                id: 1183,
                value: "濉溪县",
                label: "濉溪县",
                spell: "suixixian",
                abb: "sxx"
              }
            ]
          },
          {
            id: 1184,
            value: "铜陵市",
            label: "铜陵市",
            spell: "tonglingshi",
            abb: "tls",
            children: [
              {
                id: 1186,
                value: "铜官山区",
                label: "铜官山区",
                spell: "tongguanshanqu",
                abb: "tgsq"
              },
              {
                id: 1187,
                value: "狮子山区",
                label: "狮子山区",
                spell: "shizishanqu",
                abb: "szsq"
              },
              {
                id: 1188,
                value: "郊区",
                label: "郊区",
                spell: "jiaoqu",
                abb: "jq"
              },
              {
                id: 1189,
                value: "铜陵县",
                label: "铜陵县",
                spell: "tonglingxian",
                abb: "tlx"
              }
            ]
          },
          {
            id: 1190,
            value: "安庆市",
            label: "安庆市",
            spell: "anqingshi",
            abb: "aqs",
            children: [
              {
                id: 1192,
                value: "迎江区",
                label: "迎江区",
                spell: "yingjiangqu",
                abb: "yjq"
              },
              {
                id: 1193,
                value: "大观区",
                label: "大观区",
                spell: "daguanqu",
                abb: "dgq"
              },
              {
                id: 1194,
                value: "宜秀区",
                label: "宜秀区",
                spell: "yixiuqu",
                abb: "yxq"
              },
              {
                id: 1195,
                value: "怀宁县",
                label: "怀宁县",
                spell: "huainingxian",
                abb: "hnx"
              },
              {
                id: 1196,
                value: "枞阳县",
                label: "枞阳县",
                spell: "zongyangxian",
                abb: "zyx"
              },
              {
                id: 1197,
                value: "潜山县",
                label: "潜山县",
                spell: "qianshanxian",
                abb: "qsx"
              },
              {
                id: 1198,
                value: "太湖县",
                label: "太湖县",
                spell: "taihuxian",
                abb: "thx"
              },
              {
                id: 1199,
                value: "宿松县",
                label: "宿松县",
                spell: "susongxian",
                abb: "ssx"
              },
              {
                id: 1200,
                value: "望江县",
                label: "望江县",
                spell: "wangjiangxian",
                abb: "wjx"
              },
              {
                id: 1201,
                value: "岳西县",
                label: "岳西县",
                spell: "yuexixian",
                abb: "yxx"
              },
              {
                id: 1202,
                value: "桐城市",
                label: "桐城市",
                spell: "tongchengshi",
                abb: "tcs"
              }
            ]
          },
          {
            id: 1203,
            value: "黄山市",
            label: "黄山市",
            spell: "huangshanshi",
            abb: "hss",
            children: [
              {
                id: 1205,
                value: "屯溪区",
                label: "屯溪区",
                spell: "tunxiqu",
                abb: "txq"
              },
              {
                id: 1206,
                value: "黄山区",
                label: "黄山区",
                spell: "huangshanqu",
                abb: "hsq"
              },
              {
                id: 1207,
                value: "徽州区",
                label: "徽州区",
                spell: "huizhouqu",
                abb: "hzq"
              },
              {
                id: 1208,
                value: "歙县",
                label: "歙县",
                spell: "shexian",
                abb: "sx"
              },
              {
                id: 1209,
                value: "休宁县",
                label: "休宁县",
                spell: "xiuningxian",
                abb: "xnx"
              },
              {
                id: 1210,
                value: "黟县",
                label: "黟县",
                spell: "yixian",
                abb: "yx"
              },
              {
                id: 1211,
                value: "祁门县",
                label: "祁门县",
                spell: "qimenxian",
                abb: "qmx"
              }
            ]
          },
          {
            id: 1212,
            value: "滁州市",
            label: "滁州市",
            spell: "chuzhoushi",
            abb: "czs",
            children: [
              {
                id: 1214,
                value: "琅琊区",
                label: "琅琊区",
                spell: "langyaqu",
                abb: "lyq"
              },
              {
                id: 1215,
                value: "南谯区",
                label: "南谯区",
                spell: "nanqiaoqu",
                abb: "nqq"
              },
              {
                id: 1216,
                value: "来安县",
                label: "来安县",
                spell: "laianxian",
                abb: "lax"
              },
              {
                id: 1217,
                value: "全椒县",
                label: "全椒县",
                spell: "quanjiaoxian",
                abb: "qjx"
              },
              {
                id: 1218,
                value: "定远县",
                label: "定远县",
                spell: "dingyuanxian",
                abb: "dyx"
              },
              {
                id: 1219,
                value: "凤阳县",
                label: "凤阳县",
                spell: "fengyangxian",
                abb: "fyx"
              },
              {
                id: 1220,
                value: "天长市",
                label: "天长市",
                spell: "tianchangshi",
                abb: "tcs"
              },
              {
                id: 1221,
                value: "明光市",
                label: "明光市",
                spell: "mingguangshi",
                abb: "mgs"
              }
            ]
          },
          {
            id: 1222,
            value: "阜阳市",
            label: "阜阳市",
            spell: "fuyangshi",
            abb: "fys",
            children: [
              {
                id: 1224,
                value: "颍州区",
                label: "颍州区",
                spell: "yingzhouqu",
                abb: "yzq"
              },
              {
                id: 1225,
                value: "颍东区",
                label: "颍东区",
                spell: "yingdongqu",
                abb: "ydq"
              },
              {
                id: 1226,
                value: "颍泉区",
                label: "颍泉区",
                spell: "yingquanqu",
                abb: "yqq"
              },
              {
                id: 1227,
                value: "临泉县",
                label: "临泉县",
                spell: "linquanxian",
                abb: "lqx"
              },
              {
                id: 1228,
                value: "太和县",
                label: "太和县",
                spell: "taihexian",
                abb: "thx"
              },
              {
                id: 1229,
                value: "阜南县",
                label: "阜南县",
                spell: "funanxian",
                abb: "fnx"
              },
              {
                id: 1230,
                value: "颍上县",
                label: "颍上县",
                spell: "yingshangxian",
                abb: "ysx"
              },
              {
                id: 1231,
                value: "界首市",
                label: "界首市",
                spell: "jieshoushi",
                abb: "jss"
              }
            ]
          },
          {
            id: 1232,
            value: "宿州市",
            label: "宿州市",
            spell: "suzhoushi",
            abb: "szs",
            children: [
              {
                id: 1234,
                value: "埇桥区",
                label: "埇桥区",
                spell: "yongqiaoqu",
                abb: "yqq"
              },
              {
                id: 1235,
                value: "砀山县",
                label: "砀山县",
                spell: "dangshanxian",
                abb: "dsx"
              },
              {
                id: 1236,
                value: "萧县",
                label: "萧县",
                spell: "xiaoxian",
                abb: "xx"
              },
              {
                id: 1237,
                value: "灵璧县",
                label: "灵璧县",
                spell: "lingbixian",
                abb: "lbx"
              },
              {
                id: 1238,
                value: "泗县",
                label: "泗县",
                spell: "sixian",
                abb: "sx"
              }
            ]
          },
          {
            id: 1239,
            value: "巢湖市",
            label: "巢湖市",
            spell: "chaohushi",
            abb: "chs",
            children: [
              {
                id: 1241,
                value: "居巢区",
                label: "居巢区",
                spell: "juchaoqu",
                abb: "jcq"
              },
              {
                id: 1242,
                value: "庐江县",
                label: "庐江县",
                spell: "lujiangxian",
                abb: "ljx"
              },
              {
                id: 1243,
                value: "无为县",
                label: "无为县",
                spell: "wuweixian",
                abb: "wwx"
              },
              {
                id: 1244,
                value: "含山县",
                label: "含山县",
                spell: "hanshanxian",
                abb: "hsx"
              },
              {
                id: 1245,
                value: "和县",
                label: "和县",
                spell: "hexian",
                abb: "hx"
              }
            ]
          },
          {
            id: 1246,
            value: "六安市",
            label: "六安市",
            spell: "liuanshi",
            abb: "las",
            children: [
              {
                id: 1248,
                value: "金安区",
                label: "金安区",
                spell: "jinanqu",
                abb: "jaq"
              },
              {
                id: 1249,
                value: "裕安区",
                label: "裕安区",
                spell: "yuanqu",
                abb: "yaq"
              },
              {
                id: 1250,
                value: "寿县",
                label: "寿县",
                spell: "shouxian",
                abb: "sx"
              },
              {
                id: 1251,
                value: "霍邱县",
                label: "霍邱县",
                spell: "huoqiuxian",
                abb: "hqx"
              },
              {
                id: 1252,
                value: "舒城县",
                label: "舒城县",
                spell: "shuchengxian",
                abb: "scx"
              },
              {
                id: 1253,
                value: "金寨县",
                label: "金寨县",
                spell: "jinzhaixian",
                abb: "jzx"
              },
              {
                id: 1254,
                value: "霍山县",
                label: "霍山县",
                spell: "huoshanxian",
                abb: "hsx"
              }
            ]
          },
          {
            id: 1255,
            value: "亳州市",
            label: "亳州市",
            spell: "bozhoushi",
            abb: "bzs",
            children: [
              {
                id: 1257,
                value: "谯城区",
                label: "谯城区",
                spell: "qiaochengqu",
                abb: "qcq"
              },
              {
                id: 1258,
                value: "涡阳县",
                label: "涡阳县",
                spell: "woyangxian",
                abb: "wyx"
              },
              {
                id: 1259,
                value: "蒙城县",
                label: "蒙城县",
                spell: "mengchengxian",
                abb: "mcx"
              },
              {
                id: 1260,
                value: "利辛县",
                label: "利辛县",
                spell: "lixinxian",
                abb: "lxx"
              }
            ]
          },
          {
            id: 1261,
            value: "池州市",
            label: "池州市",
            spell: "chizhoushi",
            abb: "czs",
            children: [
              {
                id: 1263,
                value: "贵池区",
                label: "贵池区",
                spell: "guichiqu",
                abb: "gcq"
              },
              {
                id: 1264,
                value: "东至县",
                label: "东至县",
                spell: "dongzhixian",
                abb: "dzx"
              },
              {
                id: 1265,
                value: "石台县",
                label: "石台县",
                spell: "shitaixian",
                abb: "stx"
              },
              {
                id: 1266,
                value: "青阳县",
                label: "青阳县",
                spell: "qingyangxian",
                abb: "qyx"
              }
            ]
          },
          {
            id: 1267,
            value: "宣城市",
            label: "宣城市",
            spell: "xuanchengshi",
            abb: "xcs",
            children: [
              {
                id: 1269,
                value: "宣州区",
                label: "宣州区",
                spell: "xuanzhouqu",
                abb: "xzq"
              },
              {
                id: 1270,
                value: "郎溪县",
                label: "郎溪县",
                spell: "langxixian",
                abb: "lxx"
              },
              {
                id: 1271,
                value: "广德县",
                label: "广德县",
                spell: "guangdexian",
                abb: "gdx"
              },
              {
                id: 1272,
                value: "泾县",
                label: "泾县",
                spell: "jingxian",
                abb: "jx"
              },
              {
                id: 1273,
                value: "绩溪县",
                label: "绩溪县",
                spell: "jixixian",
                abb: "jxx"
              },
              {
                id: 1274,
                value: "旌德县",
                label: "旌德县",
                spell: "jingdexian",
                abb: "jdx"
              },
              {
                id: 1275,
                value: "宁国市",
                label: "宁国市",
                spell: "ningguoshi",
                abb: "ngs"
              }
            ]
          }
        ]
      },
      {
        id: 1276,
        value: "福建省",
        label: "福建省",
        spell: "fujiansheng",
        abb: "fjs",
        children: [
          {
            id: 1277,
            value: "福州市",
            label: "福州市",
            spell: "fuzhoushi",
            abb: "fzs",
            children: [
              {
                id: 1279,
                value: "鼓楼区",
                label: "鼓楼区",
                spell: "gulouqu",
                abb: "glq"
              },
              {
                id: 1280,
                value: "台江区",
                label: "台江区",
                spell: "taijiangqu",
                abb: "tjq"
              },
              {
                id: 1281,
                value: "仓山区",
                label: "仓山区",
                spell: "cangshanqu",
                abb: "csq"
              },
              {
                id: 1282,
                value: "马尾区",
                label: "马尾区",
                spell: "maweiqu",
                abb: "mwq"
              },
              {
                id: 1283,
                value: "晋安区",
                label: "晋安区",
                spell: "jinanqu",
                abb: "jaq"
              },
              {
                id: 1284,
                value: "闽侯县",
                label: "闽侯县",
                spell: "minhouxian",
                abb: "mhx"
              },
              {
                id: 1285,
                value: "连江县",
                label: "连江县",
                spell: "lianjiangxian",
                abb: "ljx"
              },
              {
                id: 1286,
                value: "罗源县",
                label: "罗源县",
                spell: "luoyuanxian",
                abb: "lyx"
              },
              {
                id: 1287,
                value: "闽清县",
                label: "闽清县",
                spell: "minqingxian",
                abb: "mqx"
              },
              {
                id: 1288,
                value: "永泰县",
                label: "永泰县",
                spell: "yongtaixian",
                abb: "ytx"
              },
              {
                id: 1289,
                value: "平潭县",
                label: "平潭县",
                spell: "pingtanxian",
                abb: "ptx"
              },
              {
                id: 1290,
                value: "福清市",
                label: "福清市",
                spell: "fuqingshi",
                abb: "fqs"
              },
              {
                id: 1291,
                value: "长乐市",
                label: "长乐市",
                spell: "changleshi",
                abb: "cls"
              }
            ]
          },
          {
            id: 1292,
            value: "厦门市",
            label: "厦门市",
            spell: "shamenshi",
            abb: "sms",
            children: [
              {
                id: 1294,
                value: "思明区",
                label: "思明区",
                spell: "simingqu",
                abb: "smq"
              },
              {
                id: 1295,
                value: "海沧区",
                label: "海沧区",
                spell: "haicangqu",
                abb: "hcq"
              },
              {
                id: 1296,
                value: "湖里区",
                label: "湖里区",
                spell: "huliqu",
                abb: "hlq"
              },
              {
                id: 1297,
                value: "集美区",
                label: "集美区",
                spell: "jimeiqu",
                abb: "jmq"
              },
              {
                id: 1298,
                value: "同安区",
                label: "同安区",
                spell: "tonganqu",
                abb: "taq"
              },
              {
                id: 1299,
                value: "翔安区",
                label: "翔安区",
                spell: "xianganqu",
                abb: "xaq"
              }
            ]
          },
          {
            id: 1300,
            value: "莆田市",
            label: "莆田市",
            spell: "putianshi",
            abb: "pts",
            children: [
              {
                id: 1302,
                value: "城厢区",
                label: "城厢区",
                spell: "chengxiangqu",
                abb: "cxq"
              },
              {
                id: 1303,
                value: "涵江区",
                label: "涵江区",
                spell: "hanjiangqu",
                abb: "hjq"
              },
              {
                id: 1304,
                value: "荔城区",
                label: "荔城区",
                spell: "lichengqu",
                abb: "lcq"
              },
              {
                id: 1305,
                value: "秀屿区",
                label: "秀屿区",
                spell: "xiuyuqu",
                abb: "xyq"
              },
              {
                id: 1306,
                value: "仙游县",
                label: "仙游县",
                spell: "xianyouxian",
                abb: "xyx"
              }
            ]
          },
          {
            id: 1307,
            value: "三明市",
            label: "三明市",
            spell: "sanmingshi",
            abb: "sms",
            children: [
              {
                id: 1309,
                value: "梅列区",
                label: "梅列区",
                spell: "meiliequ",
                abb: "mlq"
              },
              {
                id: 1310,
                value: "三元区",
                label: "三元区",
                spell: "sanyuanqu",
                abb: "syq"
              },
              {
                id: 1311,
                value: "明溪县",
                label: "明溪县",
                spell: "mingxixian",
                abb: "mxx"
              },
              {
                id: 1312,
                value: "清流县",
                label: "清流县",
                spell: "qingliuxian",
                abb: "qlx"
              },
              {
                id: 1313,
                value: "宁化县",
                label: "宁化县",
                spell: "ninghuaxian",
                abb: "nhx"
              },
              {
                id: 1314,
                value: "大田县",
                label: "大田县",
                spell: "datianxian",
                abb: "dtx"
              },
              {
                id: 1315,
                value: "尤溪县",
                label: "尤溪县",
                spell: "youxixian",
                abb: "yxx"
              },
              {
                id: 1316,
                value: "沙县",
                label: "沙县",
                spell: "shaxian",
                abb: "sx"
              },
              {
                id: 1317,
                value: "将乐县",
                label: "将乐县",
                spell: "jianglexian",
                abb: "jlx"
              },
              {
                id: 1318,
                value: "泰宁县",
                label: "泰宁县",
                spell: "tainingxian",
                abb: "tnx"
              },
              {
                id: 1319,
                value: "建宁县",
                label: "建宁县",
                spell: "jianningxian",
                abb: "jnx"
              },
              {
                id: 1320,
                value: "永安市",
                label: "永安市",
                spell: "yonganshi",
                abb: "yas"
              }
            ]
          },
          {
            id: 1321,
            value: "泉州市",
            label: "泉州市",
            spell: "quanzhoushi",
            abb: "qzs",
            children: [
              {
                id: 1323,
                value: "鲤城区",
                label: "鲤城区",
                spell: "lichengqu",
                abb: "lcq"
              },
              {
                id: 1324,
                value: "丰泽区",
                label: "丰泽区",
                spell: "fengzequ",
                abb: "fzq"
              },
              {
                id: 1325,
                value: "洛江区",
                label: "洛江区",
                spell: "luojiangqu",
                abb: "ljq"
              },
              {
                id: 1326,
                value: "泉港区",
                label: "泉港区",
                spell: "quangangqu",
                abb: "qgq"
              },
              {
                id: 1327,
                value: "惠安县",
                label: "惠安县",
                spell: "huianxian",
                abb: "hax"
              },
              {
                id: 1328,
                value: "安溪县",
                label: "安溪县",
                spell: "anxixian",
                abb: "axx"
              },
              {
                id: 1329,
                value: "永春县",
                label: "永春县",
                spell: "yongchunxian",
                abb: "ycx"
              },
              {
                id: 1330,
                value: "德化县",
                label: "德化县",
                spell: "dehuaxian",
                abb: "dhx"
              },
              {
                id: 1331,
                value: "金门县",
                label: "金门县",
                spell: "jinmenxian",
                abb: "jmx"
              },
              {
                id: 1332,
                value: "石狮市",
                label: "石狮市",
                spell: "shishishi",
                abb: "sss"
              },
              {
                id: 1333,
                value: "晋江市",
                label: "晋江市",
                spell: "jinjiangshi",
                abb: "jjs"
              },
              {
                id: 1334,
                value: "南安市",
                label: "南安市",
                spell: "nananshi",
                abb: "nas"
              }
            ]
          },
          {
            id: 1335,
            value: "漳州市",
            label: "漳州市",
            spell: "zhangzhoushi",
            abb: "zzs",
            children: [
              {
                id: 1337,
                value: "芗城区",
                label: "芗城区",
                spell: "xiangchengqu",
                abb: "xcq"
              },
              {
                id: 1338,
                value: "龙文区",
                label: "龙文区",
                spell: "longwenqu",
                abb: "lwq"
              },
              {
                id: 1339,
                value: "云霄县",
                label: "云霄县",
                spell: "yunxiaoxian",
                abb: "yxx"
              },
              {
                id: 1340,
                value: "漳浦县",
                label: "漳浦县",
                spell: "zhangpuxian",
                abb: "zpx"
              },
              {
                id: 1341,
                value: "诏安县",
                label: "诏安县",
                spell: "zhaoanxian",
                abb: "zax"
              },
              {
                id: 1342,
                value: "长泰县",
                label: "长泰县",
                spell: "changtaixian",
                abb: "ctx"
              },
              {
                id: 1343,
                value: "东山县",
                label: "东山县",
                spell: "dongshanxian",
                abb: "dsx"
              },
              {
                id: 1344,
                value: "南靖县",
                label: "南靖县",
                spell: "nanjingxian",
                abb: "njx"
              },
              {
                id: 1345,
                value: "平和县",
                label: "平和县",
                spell: "pinghexian",
                abb: "phx"
              },
              {
                id: 1346,
                value: "华安县",
                label: "华安县",
                spell: "huaanxian",
                abb: "hax"
              },
              {
                id: 1347,
                value: "龙海市",
                label: "龙海市",
                spell: "longhaishi",
                abb: "lhs"
              }
            ]
          },
          {
            id: 1348,
            value: "南平市",
            label: "南平市",
            spell: "nanpingshi",
            abb: "nps",
            children: [
              {
                id: 1350,
                value: "延平区",
                label: "延平区",
                spell: "yanpingqu",
                abb: "ypq"
              },
              {
                id: 1351,
                value: "顺昌县",
                label: "顺昌县",
                spell: "shunchangxian",
                abb: "scx"
              },
              {
                id: 1352,
                value: "浦城县",
                label: "浦城县",
                spell: "puchengxian",
                abb: "pcx"
              },
              {
                id: 1353,
                value: "光泽县",
                label: "光泽县",
                spell: "guangzexian",
                abb: "gzx"
              },
              {
                id: 1354,
                value: "松溪县",
                label: "松溪县",
                spell: "songxixian",
                abb: "sxx"
              },
              {
                id: 1355,
                value: "政和县",
                label: "政和县",
                spell: "zhenghexian",
                abb: "zhx"
              },
              {
                id: 1356,
                value: "邵武市",
                label: "邵武市",
                spell: "shaowushi",
                abb: "sws"
              },
              {
                id: 1357,
                value: "武夷山市",
                label: "武夷山市",
                spell: "wuyishanshi",
                abb: "wyss"
              },
              {
                id: 1358,
                value: "建瓯市",
                label: "建瓯市",
                spell: "jianoushi",
                abb: "jos"
              },
              {
                id: 1359,
                value: "建阳市",
                label: "建阳市",
                spell: "jianyangshi",
                abb: "jys"
              }
            ]
          },
          {
            id: 1360,
            value: "龙岩市",
            label: "龙岩市",
            spell: "longyanshi",
            abb: "lys",
            children: [
              {
                id: 1362,
                value: "新罗区",
                label: "新罗区",
                spell: "xinluoqu",
                abb: "xlq"
              },
              {
                id: 1363,
                value: "长汀县",
                label: "长汀县",
                spell: "changtingxian",
                abb: "ctx"
              },
              {
                id: 1364,
                value: "永定县",
                label: "永定县",
                spell: "yongdingxian",
                abb: "ydx"
              },
              {
                id: 1365,
                value: "上杭县",
                label: "上杭县",
                spell: "shanghangxian",
                abb: "shx"
              },
              {
                id: 1366,
                value: "武平县",
                label: "武平县",
                spell: "wupingxian",
                abb: "wpx"
              },
              {
                id: 1367,
                value: "连城县",
                label: "连城县",
                spell: "lianchengxian",
                abb: "lcx"
              },
              {
                id: 1368,
                value: "漳平市",
                label: "漳平市",
                spell: "zhangpingshi",
                abb: "zps"
              }
            ]
          },
          {
            id: 1369,
            value: "宁德市",
            label: "宁德市",
            spell: "ningdeshi",
            abb: "nds",
            children: [
              {
                id: 1371,
                value: "蕉城区",
                label: "蕉城区",
                spell: "jiaochengqu",
                abb: "jcq"
              },
              {
                id: 1372,
                value: "霞浦县",
                label: "霞浦县",
                spell: "xiapuxian",
                abb: "xpx"
              },
              {
                id: 1373,
                value: "古田县",
                label: "古田县",
                spell: "gutianxian",
                abb: "gtx"
              },
              {
                id: 1374,
                value: "屏南县",
                label: "屏南县",
                spell: "pingnanxian",
                abb: "pnx"
              },
              {
                id: 1375,
                value: "寿宁县",
                label: "寿宁县",
                spell: "shouningxian",
                abb: "snx"
              },
              {
                id: 1376,
                value: "周宁县",
                label: "周宁县",
                spell: "zhouningxian",
                abb: "znx"
              },
              {
                id: 1377,
                value: "柘荣县",
                label: "柘荣县",
                spell: "zherongxian",
                abb: "zrx"
              },
              {
                id: 1378,
                value: "福安市",
                label: "福安市",
                spell: "fuanshi",
                abb: "fas"
              },
              {
                id: 1379,
                value: "福鼎市",
                label: "福鼎市",
                spell: "fudingshi",
                abb: "fds"
              }
            ]
          }
        ]
      },
      {
        id: 1380,
        value: "江西省",
        label: "江西省",
        spell: "jiangxisheng",
        abb: "jxs",
        children: [
          {
            id: 1381,
            value: "南昌市",
            label: "南昌市",
            spell: "nanchangshi",
            abb: "ncs",
            children: [
              {
                id: 1383,
                value: "东湖区",
                label: "东湖区",
                spell: "donghuqu",
                abb: "dhq"
              },
              {
                id: 1384,
                value: "西湖区",
                label: "西湖区",
                spell: "xihuqu",
                abb: "xhq"
              },
              {
                id: 1385,
                value: "青云谱区",
                label: "青云谱区",
                spell: "qingyunpuqu",
                abb: "qypq"
              },
              {
                id: 1386,
                value: "湾里区",
                label: "湾里区",
                spell: "wanliqu",
                abb: "wlq"
              },
              {
                id: 1387,
                value: "青山湖区",
                label: "青山湖区",
                spell: "qingshanhuqu",
                abb: "qshq"
              },
              {
                id: 1388,
                value: "南昌县",
                label: "南昌县",
                spell: "nanchangxian",
                abb: "ncx"
              },
              {
                id: 1389,
                value: "新建县",
                label: "新建县",
                spell: "xinjianxian",
                abb: "xjx"
              },
              {
                id: 1390,
                value: "安义县",
                label: "安义县",
                spell: "anyixian",
                abb: "ayx"
              },
              {
                id: 1391,
                value: "进贤县",
                label: "进贤县",
                spell: "jinxianxian",
                abb: "jxx"
              }
            ]
          },
          {
            id: 1392,
            value: "景德镇市",
            label: "景德镇市",
            spell: "jingdezhenshi",
            abb: "jdzs",
            children: [
              {
                id: 1394,
                value: "昌江区",
                label: "昌江区",
                spell: "changjiangqu",
                abb: "cjq"
              },
              {
                id: 1395,
                value: "珠山区",
                label: "珠山区",
                spell: "zhushanqu",
                abb: "zsq"
              },
              {
                id: 1396,
                value: "浮梁县",
                label: "浮梁县",
                spell: "fuliangxian",
                abb: "flx"
              },
              {
                id: 1397,
                value: "乐平市",
                label: "乐平市",
                spell: "lepingshi",
                abb: "lps"
              }
            ]
          },
          {
            id: 1398,
            value: "萍乡市",
            label: "萍乡市",
            spell: "pingxiangshi",
            abb: "pxs",
            children: [
              {
                id: 1400,
                value: "安源区",
                label: "安源区",
                spell: "anyuanqu",
                abb: "ayq"
              },
              {
                id: 1401,
                value: "湘东区",
                label: "湘东区",
                spell: "xiangdongqu",
                abb: "xdq"
              },
              {
                id: 1402,
                value: "莲花县",
                label: "莲花县",
                spell: "lianhuaxian",
                abb: "lhx"
              },
              {
                id: 1403,
                value: "上栗县",
                label: "上栗县",
                spell: "shanglixian",
                abb: "slx"
              },
              {
                id: 1404,
                value: "芦溪县",
                label: "芦溪县",
                spell: "luxixian",
                abb: "lxx"
              }
            ]
          },
          {
            id: 1405,
            value: "九江市",
            label: "九江市",
            spell: "jiujiangshi",
            abb: "jjs",
            children: [
              {
                id: 1407,
                value: "庐山区",
                label: "庐山区",
                spell: "lushanqu",
                abb: "lsq"
              },
              {
                id: 1408,
                value: "浔阳区",
                label: "浔阳区",
                spell: "xunyangqu",
                abb: "xyq"
              },
              {
                id: 1409,
                value: "九江县",
                label: "九江县",
                spell: "jiujiangxian",
                abb: "jjx"
              },
              {
                id: 1410,
                value: "武宁县",
                label: "武宁县",
                spell: "wuningxian",
                abb: "wnx"
              },
              {
                id: 1411,
                value: "修水县",
                label: "修水县",
                spell: "xiushuixian",
                abb: "xsx"
              },
              {
                id: 1412,
                value: "永修县",
                label: "永修县",
                spell: "yongxiuxian",
                abb: "yxx"
              },
              {
                id: 1413,
                value: "德安县",
                label: "德安县",
                spell: "deanxian",
                abb: "dax"
              },
              {
                id: 1414,
                value: "星子县",
                label: "星子县",
                spell: "xingzixian",
                abb: "xzx"
              },
              {
                id: 1415,
                value: "都昌县",
                label: "都昌县",
                spell: "douchangxian",
                abb: "dcx"
              },
              {
                id: 1416,
                value: "湖口县",
                label: "湖口县",
                spell: "hukouxian",
                abb: "hkx"
              },
              {
                id: 1417,
                value: "彭泽县",
                label: "彭泽县",
                spell: "pengzexian",
                abb: "pzx"
              },
              {
                id: 1418,
                value: "瑞昌市",
                label: "瑞昌市",
                spell: "ruichangshi",
                abb: "rcs"
              }
            ]
          },
          {
            id: 1419,
            value: "新余市",
            label: "新余市",
            spell: "xinyushi",
            abb: "xys",
            children: [
              {
                id: 1421,
                value: "渝水区",
                label: "渝水区",
                spell: "yushuiqu",
                abb: "ysq"
              },
              {
                id: 1422,
                value: "分宜县",
                label: "分宜县",
                spell: "fenyixian",
                abb: "fyx"
              }
            ]
          },
          {
            id: 1423,
            value: "鹰潭市",
            label: "鹰潭市",
            spell: "yingtanshi",
            abb: "yts",
            children: [
              {
                id: 1425,
                value: "月湖区",
                label: "月湖区",
                spell: "yuehuqu",
                abb: "yhq"
              },
              {
                id: 1426,
                value: "余江县",
                label: "余江县",
                spell: "yujiangxian",
                abb: "yjx"
              },
              {
                id: 1427,
                value: "贵溪市",
                label: "贵溪市",
                spell: "guixishi",
                abb: "gxs"
              }
            ]
          },
          {
            id: 1428,
            value: "赣州市",
            label: "赣州市",
            spell: "ganzhoushi",
            abb: "gzs",
            children: [
              {
                id: 1430,
                value: "章贡区",
                label: "章贡区",
                spell: "zhanggongqu",
                abb: "zgq"
              },
              {
                id: 1431,
                value: "赣县",
                label: "赣县",
                spell: "ganxian",
                abb: "gx"
              },
              {
                id: 1432,
                value: "信丰县",
                label: "信丰县",
                spell: "xinfengxian",
                abb: "xfx"
              },
              {
                id: 1433,
                value: "大余县",
                label: "大余县",
                spell: "dayuxian",
                abb: "dyx"
              },
              {
                id: 1434,
                value: "上犹县",
                label: "上犹县",
                spell: "shangyouxian",
                abb: "syx"
              },
              {
                id: 1435,
                value: "崇义县",
                label: "崇义县",
                spell: "chongyixian",
                abb: "cyx"
              },
              {
                id: 1436,
                value: "安远县",
                label: "安远县",
                spell: "anyuanxian",
                abb: "ayx"
              },
              {
                id: 1437,
                value: "龙南县",
                label: "龙南县",
                spell: "longnanxian",
                abb: "lnx"
              },
              {
                id: 1438,
                value: "定南县",
                label: "定南县",
                spell: "dingnanxian",
                abb: "dnx"
              },
              {
                id: 1439,
                value: "全南县",
                label: "全南县",
                spell: "quannanxian",
                abb: "qnx"
              },
              {
                id: 1440,
                value: "宁都县",
                label: "宁都县",
                spell: "ningdouxian",
                abb: "ndx"
              },
              {
                id: 1441,
                value: "于都县",
                label: "于都县",
                spell: "yudouxian",
                abb: "ydx"
              },
              {
                id: 1442,
                value: "兴国县",
                label: "兴国县",
                spell: "xingguoxian",
                abb: "xgx"
              },
              {
                id: 1443,
                value: "会昌县",
                label: "会昌县",
                spell: "huichangxian",
                abb: "hcx"
              },
              {
                id: 1444,
                value: "寻乌县",
                label: "寻乌县",
                spell: "xunwuxian",
                abb: "xwx"
              },
              {
                id: 1445,
                value: "石城县",
                label: "石城县",
                spell: "shichengxian",
                abb: "scx"
              },
              {
                id: 1446,
                value: "瑞金市",
                label: "瑞金市",
                spell: "ruijinshi",
                abb: "rjs"
              },
              {
                id: 1447,
                value: "南康市",
                label: "南康市",
                spell: "nankangshi",
                abb: "nks"
              }
            ]
          },
          {
            id: 1448,
            value: "吉安市",
            label: "吉安市",
            spell: "jianshi",
            abb: "jas",
            children: [
              {
                id: 1450,
                value: "吉州区",
                label: "吉州区",
                spell: "jizhouqu",
                abb: "jzq"
              },
              {
                id: 1451,
                value: "青原区",
                label: "青原区",
                spell: "qingyuanqu",
                abb: "qyq"
              },
              {
                id: 1452,
                value: "吉安县",
                label: "吉安县",
                spell: "jianxian",
                abb: "jax"
              },
              {
                id: 1453,
                value: "吉水县",
                label: "吉水县",
                spell: "jishuixian",
                abb: "jsx"
              },
              {
                id: 1454,
                value: "峡江县",
                label: "峡江县",
                spell: "xiajiangxian",
                abb: "xjx"
              },
              {
                id: 1455,
                value: "新干县",
                label: "新干县",
                spell: "xinganxian",
                abb: "xgx"
              },
              {
                id: 1456,
                value: "永丰县",
                label: "永丰县",
                spell: "yongfengxian",
                abb: "yfx"
              },
              {
                id: 1457,
                value: "泰和县",
                label: "泰和县",
                spell: "taihexian",
                abb: "thx"
              },
              {
                id: 1458,
                value: "遂川县",
                label: "遂川县",
                spell: "suichuanxian",
                abb: "scx"
              },
              {
                id: 1459,
                value: "万安县",
                label: "万安县",
                spell: "wananxian",
                abb: "wax"
              },
              {
                id: 1460,
                value: "安福县",
                label: "安福县",
                spell: "anfuxian",
                abb: "afx"
              },
              {
                id: 1461,
                value: "永新县",
                label: "永新县",
                spell: "yongxinxian",
                abb: "yxx"
              },
              {
                id: 1462,
                value: "井冈山市",
                label: "井冈山市",
                spell: "jinggangshanshi",
                abb: "jgss"
              }
            ]
          },
          {
            id: 1463,
            value: "宜春市",
            label: "宜春市",
            spell: "yichunshi",
            abb: "ycs",
            children: [
              {
                id: 1465,
                value: "袁州区",
                label: "袁州区",
                spell: "yuanzhouqu",
                abb: "yzq"
              },
              {
                id: 1466,
                value: "奉新县",
                label: "奉新县",
                spell: "fengxinxian",
                abb: "fxx"
              },
              {
                id: 1467,
                value: "万载县",
                label: "万载县",
                spell: "wanzaixian",
                abb: "wzx"
              },
              {
                id: 1468,
                value: "上高县",
                label: "上高县",
                spell: "shanggaoxian",
                abb: "sgx"
              },
              {
                id: 1469,
                value: "宜丰县",
                label: "宜丰县",
                spell: "yifengxian",
                abb: "yfx"
              },
              {
                id: 1470,
                value: "靖安县",
                label: "靖安县",
                spell: "jinganxian",
                abb: "jax"
              },
              {
                id: 1471,
                value: "铜鼓县",
                label: "铜鼓县",
                spell: "tongguxian",
                abb: "tgx"
              },
              {
                id: 1472,
                value: "丰城市",
                label: "丰城市",
                spell: "fengchengshi",
                abb: "fcs"
              },
              {
                id: 1473,
                value: "樟树市",
                label: "樟树市",
                spell: "zhangshushi",
                abb: "zss"
              },
              {
                id: 1474,
                value: "高安市",
                label: "高安市",
                spell: "gaoanshi",
                abb: "gas"
              }
            ]
          },
          {
            id: 1475,
            value: "抚州市",
            label: "抚州市",
            spell: "fuzhoushi",
            abb: "fzs",
            children: [
              {
                id: 1477,
                value: "临川区",
                label: "临川区",
                spell: "linchuanqu",
                abb: "lcq"
              },
              {
                id: 1478,
                value: "南城县",
                label: "南城县",
                spell: "nanchengxian",
                abb: "ncx"
              },
              {
                id: 1479,
                value: "黎川县",
                label: "黎川县",
                spell: "lichuanxian",
                abb: "lcx"
              },
              {
                id: 1480,
                value: "南丰县",
                label: "南丰县",
                spell: "nanfengxian",
                abb: "nfx"
              },
              {
                id: 1481,
                value: "崇仁县",
                label: "崇仁县",
                spell: "chongrenxian",
                abb: "crx"
              },
              {
                id: 1482,
                value: "乐安县",
                label: "乐安县",
                spell: "leanxian",
                abb: "lax"
              },
              {
                id: 1483,
                value: "宜黄县",
                label: "宜黄县",
                spell: "yihuangxian",
                abb: "yhx"
              },
              {
                id: 1484,
                value: "金溪县",
                label: "金溪县",
                spell: "jinxixian",
                abb: "jxx"
              },
              {
                id: 1485,
                value: "资溪县",
                label: "资溪县",
                spell: "zixixian",
                abb: "zxx"
              },
              {
                id: 1486,
                value: "东乡县",
                label: "东乡县",
                spell: "dongxiangxian",
                abb: "dxx"
              },
              {
                id: 1487,
                value: "广昌县",
                label: "广昌县",
                spell: "guangchangxian",
                abb: "gcx"
              }
            ]
          },
          {
            id: 1488,
            value: "上饶市",
            label: "上饶市",
            spell: "shangraoshi",
            abb: "srs",
            children: [
              {
                id: 1490,
                value: "信州区",
                label: "信州区",
                spell: "xinzhouqu",
                abb: "xzq"
              },
              {
                id: 1491,
                value: "上饶县",
                label: "上饶县",
                spell: "shangraoxian",
                abb: "srx"
              },
              {
                id: 1492,
                value: "广丰县",
                label: "广丰县",
                spell: "guangfengxian",
                abb: "gfx"
              },
              {
                id: 1493,
                value: "玉山县",
                label: "玉山县",
                spell: "yushanxian",
                abb: "ysx"
              },
              {
                id: 1494,
                value: "铅山县",
                label: "铅山县",
                spell: "qianshanxian",
                abb: "qsx"
              },
              {
                id: 1495,
                value: "横峰县",
                label: "横峰县",
                spell: "hengfengxian",
                abb: "hfx"
              },
              {
                id: 1496,
                value: "弋阳县",
                label: "弋阳县",
                spell: "yiyangxian",
                abb: "yyx"
              },
              {
                id: 1497,
                value: "余干县",
                label: "余干县",
                spell: "yuganxian",
                abb: "ygx"
              },
              {
                id: 1498,
                value: "鄱阳县",
                label: "鄱阳县",
                spell: "poyangxian",
                abb: "pyx"
              },
              {
                id: 1499,
                value: "万年县",
                label: "万年县",
                spell: "wannianxian",
                abb: "wnx"
              },
              {
                id: 1500,
                value: "婺源县",
                label: "婺源县",
                spell: "wuyuanxian",
                abb: "wyx"
              },
              {
                id: 1501,
                value: "德兴市",
                label: "德兴市",
                spell: "dexingshi",
                abb: "dxs"
              }
            ]
          }
        ]
      },
      {
        id: 1502,
        value: "山东省",
        label: "山东省",
        spell: "shandongsheng",
        abb: "sds",
        children: [
          {
            id: 1503,
            value: "济南市",
            label: "济南市",
            spell: "jinanshi",
            abb: "jns",
            children: [
              {
                id: 1505,
                value: "历下区",
                label: "历下区",
                spell: "lixiaqu",
                abb: "lxq"
              },
              {
                id: 1506,
                value: "市中区",
                label: "市中区",
                spell: "shizhongqu",
                abb: "szq"
              },
              {
                id: 1507,
                value: "槐荫区",
                label: "槐荫区",
                spell: "huaiyinqu",
                abb: "hyq"
              },
              {
                id: 1508,
                value: "天桥区",
                label: "天桥区",
                spell: "tianqiaoqu",
                abb: "tqq"
              },
              {
                id: 1509,
                value: "历城区",
                label: "历城区",
                spell: "lichengqu",
                abb: "lcq"
              },
              {
                id: 1510,
                value: "长清区",
                label: "长清区",
                spell: "changqingqu",
                abb: "cqq"
              },
              {
                id: 1511,
                value: "平阴县",
                label: "平阴县",
                spell: "pingyinxian",
                abb: "pyx"
              },
              {
                id: 1512,
                value: "济阳县",
                label: "济阳县",
                spell: "jiyangxian",
                abb: "jyx"
              },
              {
                id: 1513,
                value: "商河县",
                label: "商河县",
                spell: "shanghexian",
                abb: "shx"
              },
              {
                id: 1514,
                value: "章丘市",
                label: "章丘市",
                spell: "zhangqiushi",
                abb: "zqs"
              }
            ]
          },
          {
            id: 1515,
            value: "青岛市",
            label: "青岛市",
            spell: "qingdaoshi",
            abb: "qds",
            children: [
              {
                id: 1517,
                value: "市南区",
                label: "市南区",
                spell: "shinanqu",
                abb: "snq"
              },
              {
                id: 1518,
                value: "市北区",
                label: "市北区",
                spell: "shibeiqu",
                abb: "sbq"
              },
              {
                id: 1519,
                value: "四方区",
                label: "四方区",
                spell: "sifangqu",
                abb: "sfq"
              },
              {
                id: 1520,
                value: "黄岛区",
                label: "黄岛区",
                spell: "huangdaoqu",
                abb: "hdq"
              },
              {
                id: 1521,
                value: "崂山区",
                label: "崂山区",
                spell: "laoshanqu",
                abb: "lsq"
              },
              {
                id: 1522,
                value: "李沧区",
                label: "李沧区",
                spell: "licangqu",
                abb: "lcq"
              },
              {
                id: 1523,
                value: "城阳区",
                label: "城阳区",
                spell: "chengyangqu",
                abb: "cyq"
              },
              {
                id: 1524,
                value: "胶州市",
                label: "胶州市",
                spell: "jiaozhoushi",
                abb: "jzs"
              },
              {
                id: 1525,
                value: "即墨市",
                label: "即墨市",
                spell: "jimoshi",
                abb: "jms"
              },
              {
                id: 1526,
                value: "平度市",
                label: "平度市",
                spell: "pingdushi",
                abb: "pds"
              },
              {
                id: 1527,
                value: "胶南市",
                label: "胶南市",
                spell: "jiaonanshi",
                abb: "jns"
              },
              {
                id: 1528,
                value: "莱西市",
                label: "莱西市",
                spell: "laixishi",
                abb: "lxs"
              }
            ]
          },
          {
            id: 1529,
            value: "淄博市",
            label: "淄博市",
            spell: "ziboshi",
            abb: "zbs",
            children: [
              {
                id: 1531,
                value: "淄川区",
                label: "淄川区",
                spell: "zichuanqu",
                abb: "zcq"
              },
              {
                id: 1532,
                value: "张店区",
                label: "张店区",
                spell: "zhangdianqu",
                abb: "zdq"
              },
              {
                id: 1533,
                value: "博山区",
                label: "博山区",
                spell: "boshanqu",
                abb: "bsq"
              },
              {
                id: 1534,
                value: "临淄区",
                label: "临淄区",
                spell: "linziqu",
                abb: "lzq"
              },
              {
                id: 1535,
                value: "周村区",
                label: "周村区",
                spell: "zhoucunqu",
                abb: "zcq"
              },
              {
                id: 1536,
                value: "桓台县",
                label: "桓台县",
                spell: "huantaixian",
                abb: "htx"
              },
              {
                id: 1537,
                value: "高青县",
                label: "高青县",
                spell: "gaoqingxian",
                abb: "gqx"
              },
              {
                id: 1538,
                value: "沂源县",
                label: "沂源县",
                spell: "yiyuanxian",
                abb: "yyx"
              }
            ]
          },
          {
            id: 1539,
            value: "枣庄市",
            label: "枣庄市",
            spell: "zaozhuangshi",
            abb: "zzs",
            children: [
              {
                id: 1541,
                value: "市中区",
                label: "市中区",
                spell: "shizhongqu",
                abb: "szq"
              },
              {
                id: 1542,
                value: "薛城区",
                label: "薛城区",
                spell: "xuechengqu",
                abb: "xcq"
              },
              {
                id: 1543,
                value: "峄城区",
                label: "峄城区",
                spell: "yichengqu",
                abb: "ycq"
              },
              {
                id: 1544,
                value: "台儿庄区",
                label: "台儿庄区",
                spell: "taierzhuangqu",
                abb: "tezq"
              },
              {
                id: 1545,
                value: "山亭区",
                label: "山亭区",
                spell: "shantingqu",
                abb: "stq"
              },
              {
                id: 1546,
                value: "滕州市",
                label: "滕州市",
                spell: "tengzhoushi",
                abb: "tzs"
              }
            ]
          },
          {
            id: 1547,
            value: "东营市",
            label: "东营市",
            spell: "dongyingshi",
            abb: "dys",
            children: [
              {
                id: 1549,
                value: "东营区",
                label: "东营区",
                spell: "dongyingqu",
                abb: "dyq"
              },
              {
                id: 1550,
                value: "河口区",
                label: "河口区",
                spell: "hekouqu",
                abb: "hkq"
              },
              {
                id: 1551,
                value: "垦利县",
                label: "垦利县",
                spell: "kenlixian",
                abb: "klx"
              },
              {
                id: 1552,
                value: "利津县",
                label: "利津县",
                spell: "lijinxian",
                abb: "ljx"
              },
              {
                id: 1553,
                value: "广饶县",
                label: "广饶县",
                spell: "guangraoxian",
                abb: "grx"
              }
            ]
          },
          {
            id: 1554,
            value: "烟台市",
            label: "烟台市",
            spell: "yantaishi",
            abb: "yts",
            children: [
              {
                id: 1556,
                value: "芝罘区",
                label: "芝罘区",
                spell: "zhifuqu",
                abb: "zfq"
              },
              {
                id: 1557,
                value: "福山区",
                label: "福山区",
                spell: "fushanqu",
                abb: "fsq"
              },
              {
                id: 1558,
                value: "牟平区",
                label: "牟平区",
                spell: "moupingqu",
                abb: "mpq"
              },
              {
                id: 1559,
                value: "莱山区",
                label: "莱山区",
                spell: "laishanqu",
                abb: "lsq"
              },
              {
                id: 1560,
                value: "长岛县",
                label: "长岛县",
                spell: "changdaoxian",
                abb: "cdx"
              },
              {
                id: 1561,
                value: "龙口市",
                label: "龙口市",
                spell: "longkoushi",
                abb: "lks"
              },
              {
                id: 1562,
                value: "莱阳市",
                label: "莱阳市",
                spell: "laiyangshi",
                abb: "lys"
              },
              {
                id: 1563,
                value: "莱州市",
                label: "莱州市",
                spell: "laizhoushi",
                abb: "lzs"
              },
              {
                id: 1564,
                value: "蓬莱市",
                label: "蓬莱市",
                spell: "penglaishi",
                abb: "pls"
              },
              {
                id: 1565,
                value: "招远市",
                label: "招远市",
                spell: "zhaoyuanshi",
                abb: "zys"
              },
              {
                id: 1566,
                value: "栖霞市",
                label: "栖霞市",
                spell: "qixiashi",
                abb: "qxs"
              },
              {
                id: 1567,
                value: "海阳市",
                label: "海阳市",
                spell: "haiyangshi",
                abb: "hys"
              }
            ]
          },
          {
            id: 1568,
            value: "潍坊市",
            label: "潍坊市",
            spell: "weifangshi",
            abb: "wfs",
            children: [
              {
                id: 1570,
                value: "潍城区",
                label: "潍城区",
                spell: "weichengqu",
                abb: "wcq"
              },
              {
                id: 1571,
                value: "寒亭区",
                label: "寒亭区",
                spell: "hantingqu",
                abb: "htq"
              },
              {
                id: 1572,
                value: "坊子区",
                label: "坊子区",
                spell: "fangziqu",
                abb: "fzq"
              },
              {
                id: 1573,
                value: "奎文区",
                label: "奎文区",
                spell: "kuiwenqu",
                abb: "kwq"
              },
              {
                id: 1574,
                value: "临朐县",
                label: "临朐县",
                spell: "linquxian",
                abb: "lqx"
              },
              {
                id: 1575,
                value: "昌乐县",
                label: "昌乐县",
                spell: "changlexian",
                abb: "clx"
              },
              {
                id: 1576,
                value: "青州市",
                label: "青州市",
                spell: "qingzhoushi",
                abb: "qzs"
              },
              {
                id: 1577,
                value: "诸城市",
                label: "诸城市",
                spell: "zhuchengshi",
                abb: "zcs"
              },
              {
                id: 1578,
                value: "寿光市",
                label: "寿光市",
                spell: "shouguangshi",
                abb: "sgs"
              },
              {
                id: 1579,
                value: "安丘市",
                label: "安丘市",
                spell: "anqiushi",
                abb: "aqs"
              },
              {
                id: 1580,
                value: "高密市",
                label: "高密市",
                spell: "gaomishi",
                abb: "gms"
              },
              {
                id: 1581,
                value: "昌邑市",
                label: "昌邑市",
                spell: "changyishi",
                abb: "cys"
              }
            ]
          },
          {
            id: 1582,
            value: "济宁市",
            label: "济宁市",
            spell: "jiningshi",
            abb: "jns",
            children: [
              {
                id: 1584,
                value: "市中区",
                label: "市中区",
                spell: "shizhongqu",
                abb: "szq"
              },
              {
                id: 1585,
                value: "任城区",
                label: "任城区",
                spell: "renchengqu",
                abb: "rcq"
              },
              {
                id: 1586,
                value: "微山县",
                label: "微山县",
                spell: "weishanxian",
                abb: "wsx"
              },
              {
                id: 1587,
                value: "鱼台县",
                label: "鱼台县",
                spell: "yutaixian",
                abb: "ytx"
              },
              {
                id: 1588,
                value: "金乡县",
                label: "金乡县",
                spell: "jinxiangxian",
                abb: "jxx"
              },
              {
                id: 1589,
                value: "嘉祥县",
                label: "嘉祥县",
                spell: "jiaxiangxian",
                abb: "jxx"
              },
              {
                id: 1590,
                value: "汶上县",
                label: "汶上县",
                spell: "wenshangxian",
                abb: "wsx"
              },
              {
                id: 1591,
                value: "泗水县",
                label: "泗水县",
                spell: "sishuixian",
                abb: "ssx"
              },
              {
                id: 1592,
                value: "梁山县",
                label: "梁山县",
                spell: "liangshanxian",
                abb: "lsx"
              },
              {
                id: 1593,
                value: "曲阜市",
                label: "曲阜市",
                spell: "qufushi",
                abb: "qfs"
              },
              {
                id: 1594,
                value: "兖州市",
                label: "兖州市",
                spell: "yanzhoushi",
                abb: "yzs"
              },
              {
                id: 1595,
                value: "邹城市",
                label: "邹城市",
                spell: "zouchengshi",
                abb: "zcs"
              }
            ]
          },
          {
            id: 1596,
            value: "泰安市",
            label: "泰安市",
            spell: "taianshi",
            abb: "tas",
            children: [
              {
                id: 1598,
                value: "泰山区",
                label: "泰山区",
                spell: "taishanqu",
                abb: "tsq"
              },
              {
                id: 1599,
                value: "岱岳区",
                label: "岱岳区",
                spell: "daiyuequ",
                abb: "dyq"
              },
              {
                id: 1600,
                value: "宁阳县",
                label: "宁阳县",
                spell: "ningyangxian",
                abb: "nyx"
              },
              {
                id: 1601,
                value: "东平县",
                label: "东平县",
                spell: "dongpingxian",
                abb: "dpx"
              },
              {
                id: 1602,
                value: "新泰市",
                label: "新泰市",
                spell: "xintaishi",
                abb: "xts"
              },
              {
                id: 1603,
                value: "肥城市",
                label: "肥城市",
                spell: "feichengshi",
                abb: "fcs"
              }
            ]
          },
          {
            id: 1604,
            value: "威海市",
            label: "威海市",
            spell: "weihaishi",
            abb: "whs",
            children: [
              {
                id: 1606,
                value: "环翠区",
                label: "环翠区",
                spell: "huancuiqu",
                abb: "hcq"
              },
              {
                id: 1607,
                value: "文登市",
                label: "文登市",
                spell: "wendengshi",
                abb: "wds"
              },
              {
                id: 1608,
                value: "荣成市",
                label: "荣成市",
                spell: "rongchengshi",
                abb: "rcs"
              },
              {
                id: 1609,
                value: "乳山市",
                label: "乳山市",
                spell: "rushanshi",
                abb: "rss"
              }
            ]
          },
          {
            id: 1610,
            value: "日照市",
            label: "日照市",
            spell: "rizhaoshi",
            abb: "rzs",
            children: [
              {
                id: 1612,
                value: "东港区",
                label: "东港区",
                spell: "donggangqu",
                abb: "dgq"
              },
              {
                id: 1613,
                value: "岚山区",
                label: "岚山区",
                spell: "lanshanqu",
                abb: "lsq"
              },
              {
                id: 1614,
                value: "五莲县",
                label: "五莲县",
                spell: "wulianxian",
                abb: "wlx"
              },
              {
                id: 1615,
                value: "莒县",
                label: "莒县",
                spell: "juxian",
                abb: "jx"
              }
            ]
          },
          {
            id: 1616,
            value: "莱芜市",
            label: "莱芜市",
            spell: "laiwushi",
            abb: "lws",
            children: [
              {
                id: 1618,
                value: "莱城区",
                label: "莱城区",
                spell: "laichengqu",
                abb: "lcq"
              },
              {
                id: 1619,
                value: "钢城区",
                label: "钢城区",
                spell: "gangchengqu",
                abb: "gcq"
              }
            ]
          },
          {
            id: 1620,
            value: "临沂市",
            label: "临沂市",
            spell: "linyishi",
            abb: "lys",
            children: [
              {
                id: 1622,
                value: "兰山区",
                label: "兰山区",
                spell: "lanshanqu",
                abb: "lsq"
              },
              {
                id: 1623,
                value: "罗庄区",
                label: "罗庄区",
                spell: "luozhuangqu",
                abb: "lzq"
              },
              {
                id: 1624,
                value: "河东区",
                label: "河东区",
                spell: "hedongqu",
                abb: "hdq"
              },
              {
                id: 1625,
                value: "沂南县",
                label: "沂南县",
                spell: "yinanxian",
                abb: "ynx"
              },
              {
                id: 1626,
                value: "郯城县",
                label: "郯城县",
                spell: "tanchengxian",
                abb: "tcx"
              },
              {
                id: 1627,
                value: "沂水县",
                label: "沂水县",
                spell: "yishuixian",
                abb: "ysx"
              },
              {
                id: 1628,
                value: "苍山县",
                label: "苍山县",
                spell: "cangshanxian",
                abb: "csx"
              },
              {
                id: 1629,
                value: "费县",
                label: "费县",
                spell: "feixian",
                abb: "fx"
              },
              {
                id: 1630,
                value: "平邑县",
                label: "平邑县",
                spell: "pingyixian",
                abb: "pyx"
              },
              {
                id: 1631,
                value: "莒南县",
                label: "莒南县",
                spell: "junanxian",
                abb: "jnx"
              },
              {
                id: 1632,
                value: "蒙阴县",
                label: "蒙阴县",
                spell: "mengyinxian",
                abb: "myx"
              },
              {
                id: 1633,
                value: "临沭县",
                label: "临沭县",
                spell: "linshuxian",
                abb: "lsx"
              }
            ]
          },
          {
            id: 1634,
            value: "德州市",
            label: "德州市",
            spell: "dezhoushi",
            abb: "dzs",
            children: [
              {
                id: 1636,
                value: "德城区",
                label: "德城区",
                spell: "dechengqu",
                abb: "dcq"
              },
              {
                id: 1637,
                value: "陵县",
                label: "陵县",
                spell: "lingxian",
                abb: "lx"
              },
              {
                id: 1638,
                value: "宁津县",
                label: "宁津县",
                spell: "ningjinxian",
                abb: "njx"
              },
              {
                id: 1639,
                value: "庆云县",
                label: "庆云县",
                spell: "qingyunxian",
                abb: "qyx"
              },
              {
                id: 1640,
                value: "临邑县",
                label: "临邑县",
                spell: "linyixian",
                abb: "lyx"
              },
              {
                id: 1641,
                value: "齐河县",
                label: "齐河县",
                spell: "qihexian",
                abb: "qhx"
              },
              {
                id: 1642,
                value: "平原县",
                label: "平原县",
                spell: "pingyuanxian",
                abb: "pyx"
              },
              {
                id: 1643,
                value: "夏津县",
                label: "夏津县",
                spell: "xiajinxian",
                abb: "xjx"
              },
              {
                id: 1644,
                value: "武城县",
                label: "武城县",
                spell: "wuchengxian",
                abb: "wcx"
              },
              {
                id: 1645,
                value: "乐陵市",
                label: "乐陵市",
                spell: "lelingshi",
                abb: "lls"
              },
              {
                id: 1646,
                value: "禹城市",
                label: "禹城市",
                spell: "yuchengshi",
                abb: "ycs"
              }
            ]
          },
          {
            id: 1647,
            value: "聊城市",
            label: "聊城市",
            spell: "liaochengshi",
            abb: "lcs",
            children: [
              {
                id: 1649,
                value: "东昌府区",
                label: "东昌府区",
                spell: "dongchangfuqu",
                abb: "dcfq"
              },
              {
                id: 1650,
                value: "阳谷县",
                label: "阳谷县",
                spell: "yangguxian",
                abb: "ygx"
              },
              {
                id: 1651,
                value: "莘县",
                label: "莘县",
                spell: "xinxian",
                abb: "xx"
              },
              {
                id: 1652,
                value: "茌平县",
                label: "茌平县",
                spell: "chipingxian",
                abb: "cpx"
              },
              {
                id: 1653,
                value: "东阿县",
                label: "东阿县",
                spell: "dongaxian",
                abb: "dax"
              },
              {
                id: 1654,
                value: "冠县",
                label: "冠县",
                spell: "guanxian",
                abb: "gx"
              },
              {
                id: 1655,
                value: "高唐县",
                label: "高唐县",
                spell: "gaotangxian",
                abb: "gtx"
              },
              {
                id: 1656,
                value: "临清市",
                label: "临清市",
                spell: "linqingshi",
                abb: "lqs"
              }
            ]
          },
          {
            id: 1657,
            value: "滨州市",
            label: "滨州市",
            spell: "binzhoushi",
            abb: "bzs",
            children: [
              {
                id: 1659,
                value: "滨城区",
                label: "滨城区",
                spell: "binchengqu",
                abb: "bcq"
              },
              {
                id: 1660,
                value: "惠民县",
                label: "惠民县",
                spell: "huiminxian",
                abb: "hmx"
              },
              {
                id: 1661,
                value: "阳信县",
                label: "阳信县",
                spell: "yangxinxian",
                abb: "yxx"
              },
              {
                id: 1662,
                value: "无棣县",
                label: "无棣县",
                spell: "wudixian",
                abb: "wdx"
              },
              {
                id: 1663,
                value: "沾化县",
                label: "沾化县",
                spell: "zhanhuaxian",
                abb: "zhx"
              },
              {
                id: 1664,
                value: "博兴县",
                label: "博兴县",
                spell: "boxingxian",
                abb: "bxx"
              },
              {
                id: 1665,
                value: "邹平县",
                label: "邹平县",
                spell: "zoupingxian",
                abb: "zpx"
              }
            ]
          },
          {
            id: 1666,
            value: "菏泽市",
            label: "菏泽市",
            spell: "hezeshi",
            abb: "hzs",
            children: [
              {
                id: 1668,
                value: "牡丹区",
                label: "牡丹区",
                spell: "mudanqu",
                abb: "mdq"
              },
              {
                id: 1669,
                value: "曹县",
                label: "曹县",
                spell: "caoxian",
                abb: "cx"
              },
              {
                id: 1670,
                value: "单县",
                label: "单县",
                spell: "danxian",
                abb: "dx"
              },
              {
                id: 1671,
                value: "成武县",
                label: "成武县",
                spell: "chengwuxian",
                abb: "cwx"
              },
              {
                id: 1672,
                value: "巨野县",
                label: "巨野县",
                spell: "juyexian",
                abb: "jyx"
              },
              {
                id: 1673,
                value: "郓城县",
                label: "郓城县",
                spell: "yunchengxian",
                abb: "ycx"
              },
              {
                id: 1674,
                value: "鄄城县",
                label: "鄄城县",
                spell: "juanchengxian",
                abb: "jcx"
              },
              {
                id: 1675,
                value: "定陶县",
                label: "定陶县",
                spell: "dingtaoxian",
                abb: "dtx"
              },
              {
                id: 1676,
                value: "东明县",
                label: "东明县",
                spell: "dongmingxian",
                abb: "dmx"
              }
            ]
          }
        ]
      },
      {
        id: 1677,
        value: "河南省",
        label: "河南省",
        spell: "henansheng",
        abb: "hns",
        children: [
          {
            id: 1678,
            value: "郑州市",
            label: "郑州市",
            spell: "zhengzhoushi",
            abb: "zzs",
            children: [
              {
                id: 1680,
                value: "中原区",
                label: "中原区",
                spell: "zhongyuanqu",
                abb: "zyq"
              },
              {
                id: 1681,
                value: "二七区",
                label: "二七区",
                spell: "erqiqu",
                abb: "eqq"
              },
              {
                id: 1682,
                value: "管城回族区",
                label: "管城回族区",
                spell: "guanchenghuizuqu",
                abb: "gchzq"
              },
              {
                id: 1683,
                value: "金水区",
                label: "金水区",
                spell: "jinshuiqu",
                abb: "jsq"
              },
              {
                id: 1684,
                value: "上街区",
                label: "上街区",
                spell: "shangjiequ",
                abb: "sjq"
              },
              {
                id: 1685,
                value: "惠济区",
                label: "惠济区",
                spell: "huijiqu",
                abb: "hjq"
              },
              {
                id: 1686,
                value: "中牟县",
                label: "中牟县",
                spell: "zhongmouxian",
                abb: "zmx"
              },
              {
                id: 1687,
                value: "巩义市",
                label: "巩义市",
                spell: "gongyishi",
                abb: "gys"
              },
              {
                id: 1688,
                value: "荥阳市",
                label: "荥阳市",
                spell: "yingyangshi",
                abb: "yys"
              },
              {
                id: 1689,
                value: "新密市",
                label: "新密市",
                spell: "xinmishi",
                abb: "xms"
              },
              {
                id: 1690,
                value: "新郑市",
                label: "新郑市",
                spell: "xinzhengshi",
                abb: "xzs"
              },
              {
                id: 1691,
                value: "登封市",
                label: "登封市",
                spell: "dengfengshi",
                abb: "dfs"
              }
            ]
          },
          {
            id: 1692,
            value: "开封市",
            label: "开封市",
            spell: "kaifengshi",
            abb: "kfs",
            children: [
              {
                id: 1694,
                value: "龙亭区",
                label: "龙亭区",
                spell: "longtingqu",
                abb: "ltq"
              },
              {
                id: 1695,
                value: "顺河回族区",
                label: "顺河回族区",
                spell: "shunhehuizuqu",
                abb: "shhzq"
              },
              {
                id: 1696,
                value: "鼓楼区",
                label: "鼓楼区",
                spell: "gulouqu",
                abb: "glq"
              },
              {
                id: 1697,
                value: "禹王台区",
                label: "禹王台区",
                spell: "yuwangtaiqu",
                abb: "ywtq"
              },
              {
                id: 1698,
                value: "金明区",
                label: "金明区",
                spell: "jinmingqu",
                abb: "jmq"
              },
              {
                id: 1699,
                value: "杞县",
                label: "杞县",
                spell: "qixian",
                abb: "qx"
              },
              {
                id: 1700,
                value: "通许县",
                label: "通许县",
                spell: "tongxuxian",
                abb: "txx"
              },
              {
                id: 1701,
                value: "尉氏县",
                label: "尉氏县",
                spell: "weishixian",
                abb: "wsx"
              },
              {
                id: 1702,
                value: "开封县",
                label: "开封县",
                spell: "kaifengxian",
                abb: "kfx"
              },
              {
                id: 1703,
                value: "兰考县",
                label: "兰考县",
                spell: "lankaoxian",
                abb: "lkx"
              }
            ]
          },
          {
            id: 1704,
            value: "洛阳市",
            label: "洛阳市",
            spell: "luoyangshi",
            abb: "lys",
            children: [
              {
                id: 1706,
                value: "老城区",
                label: "老城区",
                spell: "laochengqu",
                abb: "lcq"
              },
              {
                id: 1707,
                value: "西工区",
                label: "西工区",
                spell: "xigongqu",
                abb: "xgq"
              },
              {
                id: 1708,
                value: "瀍河回族区",
                label: "瀍河回族区",
                spell: "chanhehuizuqu",
                abb: "chhzq"
              },
              {
                id: 1709,
                value: "涧西区",
                label: "涧西区",
                spell: "jianxiqu",
                abb: "jxq"
              },
              {
                id: 1710,
                value: "吉利区",
                label: "吉利区",
                spell: "jiliqu",
                abb: "jlq"
              },
              {
                id: 1711,
                value: "洛龙区",
                label: "洛龙区",
                spell: "luolongqu",
                abb: "llq"
              },
              {
                id: 1712,
                value: "孟津县",
                label: "孟津县",
                spell: "mengjinxian",
                abb: "mjx"
              },
              {
                id: 1713,
                value: "新安县",
                label: "新安县",
                spell: "xinanxian",
                abb: "xax"
              },
              {
                id: 1714,
                value: "栾川县",
                label: "栾川县",
                spell: "luanchuanxian",
                abb: "lcx"
              },
              {
                id: 1715,
                value: "嵩县",
                label: "嵩县",
                spell: "songxian",
                abb: "sx"
              },
              {
                id: 1716,
                value: "汝阳县",
                label: "汝阳县",
                spell: "ruyangxian",
                abb: "ryx"
              },
              {
                id: 1717,
                value: "宜阳县",
                label: "宜阳县",
                spell: "yiyangxian",
                abb: "yyx"
              },
              {
                id: 1718,
                value: "洛宁县",
                label: "洛宁县",
                spell: "luoningxian",
                abb: "lnx"
              },
              {
                id: 1719,
                value: "伊川县",
                label: "伊川县",
                spell: "yichuanxian",
                abb: "ycx"
              },
              {
                id: 1720,
                value: "偃师市",
                label: "偃师市",
                spell: "yanshishi",
                abb: "yss"
              }
            ]
          },
          {
            id: 1721,
            value: "平顶山市",
            label: "平顶山市",
            spell: "pingdingshanshi",
            abb: "pdss",
            children: [
              {
                id: 1723,
                value: "新华区",
                label: "新华区",
                spell: "xinhuaqu",
                abb: "xhq"
              },
              {
                id: 1724,
                value: "卫东区",
                label: "卫东区",
                spell: "weidongqu",
                abb: "wdq"
              },
              {
                id: 1725,
                value: "石龙区",
                label: "石龙区",
                spell: "shilongqu",
                abb: "slq"
              },
              {
                id: 1726,
                value: "湛河区",
                label: "湛河区",
                spell: "zhanhequ",
                abb: "zhq"
              },
              {
                id: 1727,
                value: "宝丰县",
                label: "宝丰县",
                spell: "baofengxian",
                abb: "bfx"
              },
              {
                id: 1728,
                value: "叶BRBR县",
                label: "叶BRBR县",
                spell: "yeBRBRxian",
                abb: "yBRBRx"
              },
              {
                id: 1729,
                value: "鲁山县",
                label: "鲁山县",
                spell: "lushanxian",
                abb: "lsx"
              },
              {
                id: 1730,
                value: "郏县",
                label: "郏县",
                spell: "jiaxian",
                abb: "jx"
              },
              {
                id: 1731,
                value: "舞钢市",
                label: "舞钢市",
                spell: "wugangshi",
                abb: "wgs"
              },
              {
                id: 1732,
                value: "汝州市",
                label: "汝州市",
                spell: "ruzhoushi",
                abb: "rzs"
              }
            ]
          },
          {
            id: 1733,
            value: "安阳市",
            label: "安阳市",
            spell: "anyangshi",
            abb: "ays",
            children: [
              {
                id: 1735,
                value: "文峰区",
                label: "文峰区",
                spell: "wenfengqu",
                abb: "wfq"
              },
              {
                id: 1736,
                value: "北关区",
                label: "北关区",
                spell: "beiguanqu",
                abb: "bgq"
              },
              {
                id: 1737,
                value: "殷都区",
                label: "殷都区",
                spell: "yindouqu",
                abb: "ydq"
              },
              {
                id: 1738,
                value: "龙安区",
                label: "龙安区",
                spell: "longanqu",
                abb: "laq"
              },
              {
                id: 1739,
                value: "安阳县",
                label: "安阳县",
                spell: "anyangxian",
                abb: "ayx"
              },
              {
                id: 1740,
                value: "汤阴县",
                label: "汤阴县",
                spell: "tangyinxian",
                abb: "tyx"
              },
              {
                id: 1741,
                value: "滑县",
                label: "滑县",
                spell: "huaxian",
                abb: "hx"
              },
              {
                id: 1742,
                value: "内黄县",
                label: "内黄县",
                spell: "neihuangxian",
                abb: "nhx"
              },
              {
                id: 1743,
                value: "林州市",
                label: "林州市",
                spell: "linzhoushi",
                abb: "lzs"
              }
            ]
          },
          {
            id: 1744,
            value: "鹤壁市",
            label: "鹤壁市",
            spell: "hebishi",
            abb: "hbs",
            children: [
              {
                id: 1746,
                value: "鹤山区",
                label: "鹤山区",
                spell: "heshanqu",
                abb: "hsq"
              },
              {
                id: 1747,
                value: "山城区",
                label: "山城区",
                spell: "shanchengqu",
                abb: "scq"
              },
              {
                id: 1748,
                value: "淇滨区",
                label: "淇滨区",
                spell: "qibinqu",
                abb: "qbq"
              },
              {
                id: 1749,
                value: "浚县",
                label: "浚县",
                spell: "junxian",
                abb: "jx"
              },
              {
                id: 1750,
                value: "淇县",
                label: "淇县",
                spell: "qixian",
                abb: "qx"
              }
            ]
          },
          {
            id: 1751,
            value: "新乡市",
            label: "新乡市",
            spell: "xinxiangshi",
            abb: "xxs",
            children: [
              {
                id: 1753,
                value: "红旗区",
                label: "红旗区",
                spell: "hongqiqu",
                abb: "hqq"
              },
              {
                id: 1754,
                value: "卫滨区",
                label: "卫滨区",
                spell: "weibinqu",
                abb: "wbq"
              },
              {
                id: 1755,
                value: "凤泉区",
                label: "凤泉区",
                spell: "fengquanqu",
                abb: "fqq"
              },
              {
                id: 1756,
                value: "牧野区",
                label: "牧野区",
                spell: "muyequ",
                abb: "myq"
              },
              {
                id: 1757,
                value: "新乡县",
                label: "新乡县",
                spell: "xinxiangxian",
                abb: "xxx"
              },
              {
                id: 1758,
                value: "获嘉县",
                label: "获嘉县",
                spell: "huojiaxian",
                abb: "hjx"
              },
              {
                id: 1759,
                value: "原阳县",
                label: "原阳县",
                spell: "yuanyangxian",
                abb: "yyx"
              },
              {
                id: 1760,
                value: "延津县",
                label: "延津县",
                spell: "yanjinxian",
                abb: "yjx"
              },
              {
                id: 1761,
                value: "封丘县",
                label: "封丘县",
                spell: "fengqiuxian",
                abb: "fqx"
              },
              {
                id: 1762,
                value: "长垣县",
                label: "长垣县",
                spell: "changyuanxian",
                abb: "cyx"
              },
              {
                id: 1763,
                value: "卫辉市",
                label: "卫辉市",
                spell: "weihuishi",
                abb: "whs"
              },
              {
                id: 1764,
                value: "辉县市",
                label: "辉县市",
                spell: "huixianshi",
                abb: "hxs"
              }
            ]
          },
          {
            id: 1765,
            value: "焦作市",
            label: "焦作市",
            spell: "jiaozuoshi",
            abb: "jzs",
            children: [
              {
                id: 1767,
                value: "解放区",
                label: "解放区",
                spell: "jiefangqu",
                abb: "jfq"
              },
              {
                id: 1768,
                value: "中站区",
                label: "中站区",
                spell: "zhongzhanqu",
                abb: "zzq"
              },
              {
                id: 1769,
                value: "马村区",
                label: "马村区",
                spell: "macunqu",
                abb: "mcq"
              },
              {
                id: 1770,
                value: "山阳区",
                label: "山阳区",
                spell: "shanyangqu",
                abb: "syq"
              },
              {
                id: 1771,
                value: "修武县",
                label: "修武县",
                spell: "xiuwuxian",
                abb: "xwx"
              },
              {
                id: 1772,
                value: "博爱县",
                label: "博爱县",
                spell: "boaixian",
                abb: "bax"
              },
              {
                id: 1773,
                value: "武陟县",
                label: "武陟县",
                spell: "wuzhixian",
                abb: "wzx"
              },
              {
                id: 1774,
                value: "温县",
                label: "温县",
                spell: "wenxian",
                abb: "wx"
              },
              {
                id: 1775,
                value: "沁阳市",
                label: "沁阳市",
                spell: "qinyangshi",
                abb: "qys"
              },
              {
                id: 1776,
                value: "孟州市",
                label: "孟州市",
                spell: "mengzhoushi",
                abb: "mzs"
              }
            ]
          },
          {
            id: 1777,
            value: "濮阳市",
            label: "濮阳市",
            spell: "puyangshi",
            abb: "pys",
            children: [
              {
                id: 1779,
                value: "华龙区",
                label: "华龙区",
                spell: "hualongqu",
                abb: "hlq"
              },
              {
                id: 1780,
                value: "清丰县",
                label: "清丰县",
                spell: "qingfengxian",
                abb: "qfx"
              },
              {
                id: 1781,
                value: "南乐县",
                label: "南乐县",
                spell: "nanlexian",
                abb: "nlx"
              },
              {
                id: 1782,
                value: "范县",
                label: "范县",
                spell: "fanxian",
                abb: "fx"
              },
              {
                id: 1783,
                value: "台前县",
                label: "台前县",
                spell: "taiqianxian",
                abb: "tqx"
              },
              {
                id: 1784,
                value: "濮阳县",
                label: "濮阳县",
                spell: "puyangxian",
                abb: "pyx"
              }
            ]
          },
          {
            id: 1785,
            value: "许昌市",
            label: "许昌市",
            spell: "xuchangshi",
            abb: "xcs",
            children: [
              {
                id: 1787,
                value: "魏都区",
                label: "魏都区",
                spell: "weidouqu",
                abb: "wdq"
              },
              {
                id: 1788,
                value: "许昌县",
                label: "许昌县",
                spell: "xuchangxian",
                abb: "xcx"
              },
              {
                id: 1789,
                value: "鄢陵县",
                label: "鄢陵县",
                spell: "yanlingxian",
                abb: "ylx"
              },
              {
                id: 1790,
                value: "襄城县",
                label: "襄城县",
                spell: "xiangchengxian",
                abb: "xcx"
              },
              {
                id: 1791,
                value: "禹州市",
                label: "禹州市",
                spell: "yuzhoushi",
                abb: "yzs"
              },
              {
                id: 1792,
                value: "长葛市",
                label: "长葛市",
                spell: "changgeshi",
                abb: "cgs"
              }
            ]
          },
          {
            id: 1793,
            value: "漯河市",
            label: "漯河市",
            spell: "luoheshi",
            abb: "lhs",
            children: [
              {
                id: 1795,
                value: "源汇区",
                label: "源汇区",
                spell: "yuanhuiqu",
                abb: "yhq"
              },
              {
                id: 1796,
                value: "郾城区",
                label: "郾城区",
                spell: "yanchengqu",
                abb: "ycq"
              },
              {
                id: 1797,
                value: "召陵区",
                label: "召陵区",
                spell: "zhaolingqu",
                abb: "zlq"
              },
              {
                id: 1798,
                value: "舞阳县",
                label: "舞阳县",
                spell: "wuyangxian",
                abb: "wyx"
              },
              {
                id: 1799,
                value: "临颍县",
                label: "临颍县",
                spell: "linyingxian",
                abb: "lyx"
              }
            ]
          },
          {
            id: 1800,
            value: "三门峡市",
            label: "三门峡市",
            spell: "sanmenxiashi",
            abb: "smxs",
            children: [
              {
                id: 1802,
                value: "湖滨区",
                label: "湖滨区",
                spell: "hubinqu",
                abb: "hbq"
              },
              {
                id: 1803,
                value: "渑池县",
                label: "渑池县",
                spell: "mianchixian",
                abb: "mcx"
              },
              {
                id: 1804,
                value: "陕县",
                label: "陕县",
                spell: "shanxian",
                abb: "sx"
              },
              {
                id: 1805,
                value: "卢氏县",
                label: "卢氏县",
                spell: "lushixian",
                abb: "lsx"
              },
              {
                id: 1806,
                value: "义马市",
                label: "义马市",
                spell: "yimashi",
                abb: "yms"
              },
              {
                id: 1807,
                value: "灵宝市",
                label: "灵宝市",
                spell: "lingbaoshi",
                abb: "lbs"
              }
            ]
          },
          {
            id: 1808,
            value: "南阳市",
            label: "南阳市",
            spell: "nanyangshi",
            abb: "nys",
            children: [
              {
                id: 1810,
                value: "宛城区",
                label: "宛城区",
                spell: "wanchengqu",
                abb: "wcq"
              },
              {
                id: 1811,
                value: "卧龙区",
                label: "卧龙区",
                spell: "wolongqu",
                abb: "wlq"
              },
              {
                id: 1812,
                value: "南召县",
                label: "南召县",
                spell: "nanzhaoxian",
                abb: "nzx"
              },
              {
                id: 1813,
                value: "方城县",
                label: "方城县",
                spell: "fangchengxian",
                abb: "fcx"
              },
              {
                id: 1814,
                value: "西峡县",
                label: "西峡县",
                spell: "xixiaxian",
                abb: "xxx"
              },
              {
                id: 1815,
                value: "镇平县",
                label: "镇平县",
                spell: "zhenpingxian",
                abb: "zpx"
              },
              {
                id: 1816,
                value: "内乡县",
                label: "内乡县",
                spell: "neixiangxian",
                abb: "nxx"
              },
              {
                id: 1817,
                value: "淅川县",
                label: "淅川县",
                spell: "xichuanxian",
                abb: "xcx"
              },
              {
                id: 1818,
                value: "社旗县",
                label: "社旗县",
                spell: "sheqixian",
                abb: "sqx"
              },
              {
                id: 1819,
                value: "唐河县",
                label: "唐河县",
                spell: "tanghexian",
                abb: "thx"
              },
              {
                id: 1820,
                value: "新野县",
                label: "新野县",
                spell: "xinyexian",
                abb: "xyx"
              },
              {
                id: 1821,
                value: "桐柏县",
                label: "桐柏县",
                spell: "tongboxian",
                abb: "tbx"
              },
              {
                id: 1822,
                value: "邓州市",
                label: "邓州市",
                spell: "dengzhoushi",
                abb: "dzs"
              }
            ]
          },
          {
            id: 1823,
            value: "商丘市",
            label: "商丘市",
            spell: "shangqiushi",
            abb: "sqs",
            children: [
              {
                id: 1825,
                value: "梁园区",
                label: "梁园区",
                spell: "liangyuanqu",
                abb: "lyq"
              },
              {
                id: 1826,
                value: "睢阳区",
                label: "睢阳区",
                spell: "suiyangqu",
                abb: "syq"
              },
              {
                id: 1827,
                value: "民权县",
                label: "民权县",
                spell: "minquanxian",
                abb: "mqx"
              },
              {
                id: 1828,
                value: "睢县",
                label: "睢县",
                spell: "suixian",
                abb: "sx"
              },
              {
                id: 1829,
                value: "宁陵县",
                label: "宁陵县",
                spell: "ninglingxian",
                abb: "nlx"
              },
              {
                id: 1830,
                value: "柘城县",
                label: "柘城县",
                spell: "zhechengxian",
                abb: "zcx"
              },
              {
                id: 1831,
                value: "虞城县",
                label: "虞城县",
                spell: "yuchengxian",
                abb: "ycx"
              },
              {
                id: 1832,
                value: "夏邑县",
                label: "夏邑县",
                spell: "xiayixian",
                abb: "xyx"
              },
              {
                id: 1833,
                value: "永城市",
                label: "永城市",
                spell: "yongchengshi",
                abb: "ycs"
              }
            ]
          },
          {
            id: 1834,
            value: "信阳市",
            label: "信阳市",
            spell: "xinyangshi",
            abb: "xys",
            children: [
              {
                id: 1836,
                value: "浉河区",
                label: "浉河区",
                spell: "shihequ",
                abb: "shq"
              },
              {
                id: 1837,
                value: "平桥区",
                label: "平桥区",
                spell: "pingqiaoqu",
                abb: "pqq"
              },
              {
                id: 1838,
                value: "罗山县",
                label: "罗山县",
                spell: "luoshanxian",
                abb: "lsx"
              },
              {
                id: 1839,
                value: "光山县",
                label: "光山县",
                spell: "guangshanxian",
                abb: "gsx"
              },
              {
                id: 1840,
                value: "新县",
                label: "新县",
                spell: "xinxian",
                abb: "xx"
              },
              {
                id: 1841,
                value: "商城县",
                label: "商城县",
                spell: "shangchengxian",
                abb: "scx"
              },
              {
                id: 1842,
                value: "固始县",
                label: "固始县",
                spell: "gushixian",
                abb: "gsx"
              },
              {
                id: 1843,
                value: "潢川县",
                label: "潢川县",
                spell: "huangchuanxian",
                abb: "hcx"
              },
              {
                id: 1844,
                value: "淮滨县",
                label: "淮滨县",
                spell: "huaibinxian",
                abb: "hbx"
              },
              {
                id: 1845,
                value: "息县",
                label: "息县",
                spell: "xixian",
                abb: "xx"
              }
            ]
          },
          {
            id: 1846,
            value: "周口市",
            label: "周口市",
            spell: "zhoukoushi",
            abb: "zks",
            children: [
              {
                id: 1848,
                value: "川汇区",
                label: "川汇区",
                spell: "chuanhuiqu",
                abb: "chq"
              },
              {
                id: 1849,
                value: "扶沟县",
                label: "扶沟县",
                spell: "fugouxian",
                abb: "fgx"
              },
              {
                id: 1850,
                value: "西华县",
                label: "西华县",
                spell: "xihuaxian",
                abb: "xhx"
              },
              {
                id: 1851,
                value: "商水县",
                label: "商水县",
                spell: "shangshuixian",
                abb: "ssx"
              },
              {
                id: 1852,
                value: "沈丘县",
                label: "沈丘县",
                spell: "shenqiuxian",
                abb: "sqx"
              },
              {
                id: 1853,
                value: "郸城县",
                label: "郸城县",
                spell: "danchengxian",
                abb: "dcx"
              },
              {
                id: 1854,
                value: "淮阳县",
                label: "淮阳县",
                spell: "huaiyangxian",
                abb: "hyx"
              },
              {
                id: 1855,
                value: "太康县",
                label: "太康县",
                spell: "taikangxian",
                abb: "tkx"
              },
              {
                id: 1856,
                value: "鹿邑县",
                label: "鹿邑县",
                spell: "luyixian",
                abb: "lyx"
              },
              {
                id: 1857,
                value: "项城市",
                label: "项城市",
                spell: "xiangchengshi",
                abb: "xcs"
              }
            ]
          },
          {
            id: 1858,
            value: "驻马店市",
            label: "驻马店市",
            spell: "zhumadianshi",
            abb: "zmds",
            children: [
              {
                id: 1860,
                value: "驿城区",
                label: "驿城区",
                spell: "yichengqu",
                abb: "ycq"
              },
              {
                id: 1861,
                value: "西平县",
                label: "西平县",
                spell: "xipingxian",
                abb: "xpx"
              },
              {
                id: 1862,
                value: "上蔡县",
                label: "上蔡县",
                spell: "shangcaixian",
                abb: "scx"
              },
              {
                id: 1863,
                value: "平舆县",
                label: "平舆县",
                spell: "pingyuxian",
                abb: "pyx"
              },
              {
                id: 1864,
                value: "正阳县",
                label: "正阳县",
                spell: "zhengyangxian",
                abb: "zyx"
              },
              {
                id: 1865,
                value: "确山县",
                label: "确山县",
                spell: "queshanxian",
                abb: "qsx"
              },
              {
                id: 1866,
                value: "泌阳县",
                label: "泌阳县",
                spell: "miyangxian",
                abb: "myx"
              },
              {
                id: 1867,
                value: "汝南县",
                label: "汝南县",
                spell: "runanxian",
                abb: "rnx"
              },
              {
                id: 1868,
                value: "遂平县",
                label: "遂平县",
                spell: "suipingxian",
                abb: "spx"
              },
              {
                id: 1869,
                value: "新蔡县",
                label: "新蔡县",
                spell: "xincaixian",
                abb: "xcx"
              }
            ]
          },
          {
            id: 1870,
            value: "济源市",
            label: "济源市",
            spell: "jiyuanshi",
            abb: "jys",
            children: [
              {
                id: 1871,
                value: "济源市",
                label: "济源市",
                spell: "jiyuanshi",
                abb: "jys"
              }
            ]
          }
        ]
      },
      {
        id: 1872,
        value: "湖北省",
        label: "湖北省",
        spell: "hubeisheng",
        abb: "hbs",
        children: [
          {
            id: 1873,
            value: "武汉市",
            label: "武汉市",
            spell: "wuhanshi",
            abb: "whs",
            children: [
              {
                id: 1875,
                value: "江岸区",
                label: "江岸区",
                spell: "jianganqu",
                abb: "jaq"
              },
              {
                id: 1876,
                value: "江汉区",
                label: "江汉区",
                spell: "jianghanqu",
                abb: "jhq"
              },
              {
                id: 1877,
                value: "硚口区",
                label: "硚口区",
                spell: "qiaokouqu",
                abb: "qkq"
              },
              {
                id: 1878,
                value: "汉阳区",
                label: "汉阳区",
                spell: "hanyangqu",
                abb: "hyq"
              },
              {
                id: 1879,
                value: "武昌区",
                label: "武昌区",
                spell: "wuchangqu",
                abb: "wcq"
              },
              {
                id: 1880,
                value: "青山区",
                label: "青山区",
                spell: "qingshanqu",
                abb: "qsq"
              },
              {
                id: 1881,
                value: "洪山区",
                label: "洪山区",
                spell: "hongshanqu",
                abb: "hsq"
              },
              {
                id: 1882,
                value: "东西湖区",
                label: "东西湖区",
                spell: "dongxihuqu",
                abb: "dxhq"
              },
              {
                id: 1883,
                value: "汉南区",
                label: "汉南区",
                spell: "hannanqu",
                abb: "hnq"
              },
              {
                id: 1884,
                value: "蔡甸区",
                label: "蔡甸区",
                spell: "caidianqu",
                abb: "cdq"
              },
              {
                id: 1885,
                value: "江夏区",
                label: "江夏区",
                spell: "jiangxiaqu",
                abb: "jxq"
              },
              {
                id: 1886,
                value: "黄陂区",
                label: "黄陂区",
                spell: "huangpoqu",
                abb: "hpq"
              },
              {
                id: 1887,
                value: "新洲区",
                label: "新洲区",
                spell: "xinzhouqu",
                abb: "xzq"
              }
            ]
          },
          {
            id: 1888,
            value: "黄石市",
            label: "黄石市",
            spell: "huangshishi",
            abb: "hss",
            children: [
              {
                id: 1890,
                value: "黄石港区",
                label: "黄石港区",
                spell: "huangshigangqu",
                abb: "hsgq"
              },
              {
                id: 1891,
                value: "西塞山区",
                label: "西塞山区",
                spell: "xisaishanqu",
                abb: "xssq"
              },
              {
                id: 1892,
                value: "下陆区",
                label: "下陆区",
                spell: "xialuqu",
                abb: "xlq"
              },
              {
                id: 1893,
                value: "铁山区",
                label: "铁山区",
                spell: "tieshanqu",
                abb: "tsq"
              },
              {
                id: 1894,
                value: "阳新县",
                label: "阳新县",
                spell: "yangxinxian",
                abb: "yxx"
              },
              {
                id: 1895,
                value: "大冶市",
                label: "大冶市",
                spell: "dayeshi",
                abb: "dys"
              }
            ]
          },
          {
            id: 1896,
            value: "十堰市",
            label: "十堰市",
            spell: "shiyanshi",
            abb: "sys",
            children: [
              {
                id: 1898,
                value: "茅箭区",
                label: "茅箭区",
                spell: "maojianqu",
                abb: "mjq"
              },
              {
                id: 1899,
                value: "张湾区",
                label: "张湾区",
                spell: "zhangwanqu",
                abb: "zwq"
              },
              {
                id: 1900,
                value: "郧县",
                label: "郧县",
                spell: "yunxian",
                abb: "yx"
              },
              {
                id: 1901,
                value: "郧西县",
                label: "郧西县",
                spell: "yunxixian",
                abb: "yxx"
              },
              {
                id: 1902,
                value: "竹山县",
                label: "竹山县",
                spell: "zhushanxian",
                abb: "zsx"
              },
              {
                id: 1903,
                value: "竹溪县",
                label: "竹溪县",
                spell: "zhuxixian",
                abb: "zxx"
              },
              {
                id: 1904,
                value: "房县",
                label: "房县",
                spell: "fangxian",
                abb: "fx"
              },
              {
                id: 1905,
                value: "丹江口市",
                label: "丹江口市",
                spell: "danjiangkoushi",
                abb: "djks"
              }
            ]
          },
          {
            id: 1906,
            value: "宜昌市",
            label: "宜昌市",
            spell: "yichangshi",
            abb: "ycs",
            children: [
              {
                id: 1908,
                value: "西陵区",
                label: "西陵区",
                spell: "xilingqu",
                abb: "xlq"
              },
              {
                id: 1909,
                value: "伍家岗区",
                label: "伍家岗区",
                spell: "wujiagangqu",
                abb: "wjgq"
              },
              {
                id: 1910,
                value: "点军区",
                label: "点军区",
                spell: "dianjunqu",
                abb: "djq"
              },
              {
                id: 1911,
                value: "猇亭区",
                label: "猇亭区",
                spell: "yaotingqu",
                abb: "ytq"
              },
              {
                id: 1912,
                value: "夷陵区",
                label: "夷陵区",
                spell: "yilingqu",
                abb: "ylq"
              },
              {
                id: 1913,
                value: "远安县",
                label: "远安县",
                spell: "yuananxian",
                abb: "yax"
              },
              {
                id: 1914,
                value: "兴山县",
                label: "兴山县",
                spell: "xingshanxian",
                abb: "xsx"
              },
              {
                id: 1915,
                value: "秭归县",
                label: "秭归县",
                spell: "ziguixian",
                abb: "zgx"
              },
              {
                id: 1916,
                value: "长阳土家族自治县",
                label: "长阳土家族自治县",
                spell: "changyangtujiazuzizhixian",
                abb: "cytjzzzx"
              },
              {
                id: 1917,
                value: "五峰土家族自治县",
                label: "五峰土家族自治县",
                spell: "wufengtujiazuzizhixian",
                abb: "wftjzzzx"
              },
              {
                id: 1918,
                value: "宜都市",
                label: "宜都市",
                spell: "yidoushi",
                abb: "yds"
              },
              {
                id: 1919,
                value: "当阳市",
                label: "当阳市",
                spell: "dangyangshi",
                abb: "dys"
              },
              {
                id: 1920,
                value: "枝江市",
                label: "枝江市",
                spell: "zhijiangshi",
                abb: "zjs"
              }
            ]
          },
          {
            id: 1921,
            value: "襄樊市",
            label: "襄樊市",
            spell: "xiangfanshi",
            abb: "xfs",
            children: [
              {
                id: 1923,
                value: "襄城区",
                label: "襄城区",
                spell: "xiangchengqu",
                abb: "xcq"
              },
              {
                id: 1924,
                value: "樊城区",
                label: "樊城区",
                spell: "fanchengqu",
                abb: "fcq"
              },
              {
                id: 1925,
                value: "襄阳区",
                label: "襄阳区",
                spell: "xiangyangqu",
                abb: "xyq"
              },
              {
                id: 1926,
                value: "南漳县",
                label: "南漳县",
                spell: "nanzhangxian",
                abb: "nzx"
              },
              {
                id: 1927,
                value: "谷城县",
                label: "谷城县",
                spell: "guchengxian",
                abb: "gcx"
              },
              {
                id: 1928,
                value: "保康县",
                label: "保康县",
                spell: "baokangxian",
                abb: "bkx"
              },
              {
                id: 1929,
                value: "老河口市",
                label: "老河口市",
                spell: "laohekoushi",
                abb: "lhks"
              },
              {
                id: 1930,
                value: "枣阳市",
                label: "枣阳市",
                spell: "zaoyangshi",
                abb: "zys"
              },
              {
                id: 1931,
                value: "宜城市",
                label: "宜城市",
                spell: "yichengshi",
                abb: "ycs"
              }
            ]
          },
          {
            id: 1932,
            value: "鄂州市",
            label: "鄂州市",
            spell: "ezhoushi",
            abb: "ezs",
            children: [
              {
                id: 1934,
                value: "梁子湖区",
                label: "梁子湖区",
                spell: "liangzihuqu",
                abb: "lzhq"
              },
              {
                id: 1935,
                value: "华容区",
                label: "华容区",
                spell: "huarongqu",
                abb: "hrq"
              },
              {
                id: 1936,
                value: "鄂城区",
                label: "鄂城区",
                spell: "echengqu",
                abb: "ecq"
              }
            ]
          },
          {
            id: 1937,
            value: "荆门市",
            label: "荆门市",
            spell: "jingmenshi",
            abb: "jms",
            children: [
              {
                id: 1939,
                value: "东宝区",
                label: "东宝区",
                spell: "dongbaoqu",
                abb: "dbq"
              },
              {
                id: 1940,
                value: "掇刀区",
                label: "掇刀区",
                spell: "duodaoqu",
                abb: "ddq"
              },
              {
                id: 1941,
                value: "京山县",
                label: "京山县",
                spell: "jingshanxian",
                abb: "jsx"
              },
              {
                id: 1942,
                value: "沙洋县",
                label: "沙洋县",
                spell: "shayangxian",
                abb: "syx"
              },
              {
                id: 1943,
                value: "钟祥市",
                label: "钟祥市",
                spell: "zhongxiangshi",
                abb: "zxs"
              }
            ]
          },
          {
            id: 1944,
            value: "孝感市",
            label: "孝感市",
            spell: "xiaoganshi",
            abb: "xgs",
            children: [
              {
                id: 1946,
                value: "孝南区",
                label: "孝南区",
                spell: "xiaonanqu",
                abb: "xnq"
              },
              {
                id: 1947,
                value: "孝昌县",
                label: "孝昌县",
                spell: "xiaochangxian",
                abb: "xcx"
              },
              {
                id: 1948,
                value: "大悟县",
                label: "大悟县",
                spell: "dawuxian",
                abb: "dwx"
              },
              {
                id: 1949,
                value: "云梦县",
                label: "云梦县",
                spell: "yunmengxian",
                abb: "ymx"
              },
              {
                id: 1950,
                value: "应城市",
                label: "应城市",
                spell: "yingchengshi",
                abb: "ycs"
              },
              {
                id: 1951,
                value: "安陆市",
                label: "安陆市",
                spell: "anlushi",
                abb: "als"
              },
              {
                id: 1952,
                value: "汉川市",
                label: "汉川市",
                spell: "hanchuanshi",
                abb: "hcs"
              }
            ]
          },
          {
            id: 1953,
            value: "荆州市",
            label: "荆州市",
            spell: "jingzhoushi",
            abb: "jzs",
            children: [
              {
                id: 1955,
                value: "沙市区",
                label: "沙市区",
                spell: "shashiqu",
                abb: "ssq"
              },
              {
                id: 1956,
                value: "荆州区",
                label: "荆州区",
                spell: "jingzhouqu",
                abb: "jzq"
              },
              {
                id: 1957,
                value: "公安县",
                label: "公安县",
                spell: "gonganxian",
                abb: "gax"
              },
              {
                id: 1958,
                value: "监利县",
                label: "监利县",
                spell: "jianlixian",
                abb: "jlx"
              },
              {
                id: 1959,
                value: "江陵县",
                label: "江陵县",
                spell: "jianglingxian",
                abb: "jlx"
              },
              {
                id: 1960,
                value: "石首市",
                label: "石首市",
                spell: "shishoushi",
                abb: "sss"
              },
              {
                id: 1961,
                value: "洪湖市",
                label: "洪湖市",
                spell: "honghushi",
                abb: "hhs"
              },
              {
                id: 1962,
                value: "松滋市",
                label: "松滋市",
                spell: "songzishi",
                abb: "szs"
              }
            ]
          },
          {
            id: 1963,
            value: "黄冈市",
            label: "黄冈市",
            spell: "huanggangshi",
            abb: "hgs",
            children: [
              {
                id: 1965,
                value: "黄州区",
                label: "黄州区",
                spell: "huangzhouqu",
                abb: "hzq"
              },
              {
                id: 1966,
                value: "团风县",
                label: "团风县",
                spell: "tuanfengxian",
                abb: "tfx"
              },
              {
                id: 1967,
                value: "红安县",
                label: "红安县",
                spell: "honganxian",
                abb: "hax"
              },
              {
                id: 1968,
                value: "罗田县",
                label: "罗田县",
                spell: "luotianxian",
                abb: "ltx"
              },
              {
                id: 1969,
                value: "英山县",
                label: "英山县",
                spell: "yingshanxian",
                abb: "ysx"
              },
              {
                id: 1970,
                value: "浠水县",
                label: "浠水县",
                spell: "xishuixian",
                abb: "xsx"
              },
              {
                id: 1971,
                value: "蕲春县",
                label: "蕲春县",
                spell: "qichunxian",
                abb: "qcx"
              },
              {
                id: 1972,
                value: "黄梅县",
                label: "黄梅县",
                spell: "huangmeixian",
                abb: "hmx"
              },
              {
                id: 1973,
                value: "麻城市",
                label: "麻城市",
                spell: "machengshi",
                abb: "mcs"
              },
              {
                id: 1974,
                value: "武穴市",
                label: "武穴市",
                spell: "wuxueshi",
                abb: "wxs"
              }
            ]
          },
          {
            id: 1975,
            value: "咸宁市",
            label: "咸宁市",
            spell: "xianningshi",
            abb: "xns",
            children: [
              {
                id: 1977,
                value: "咸安区",
                label: "咸安区",
                spell: "xiananqu",
                abb: "xaq"
              },
              {
                id: 1978,
                value: "嘉鱼县",
                label: "嘉鱼县",
                spell: "jiayuxian",
                abb: "jyx"
              },
              {
                id: 1979,
                value: "通城县",
                label: "通城县",
                spell: "tongchengxian",
                abb: "tcx"
              },
              {
                id: 1980,
                value: "崇阳县",
                label: "崇阳县",
                spell: "chongyangxian",
                abb: "cyx"
              },
              {
                id: 1981,
                value: "通山县",
                label: "通山县",
                spell: "tongshanxian",
                abb: "tsx"
              },
              {
                id: 1982,
                value: "赤壁市",
                label: "赤壁市",
                spell: "chibishi",
                abb: "cbs"
              }
            ]
          },
          {
            id: 1983,
            value: "随州市",
            label: "随州市",
            spell: "suizhoushi",
            abb: "szs",
            children: [
              {
                id: 1985,
                value: "曾都区",
                label: "曾都区",
                spell: "cengdouqu",
                abb: "cdq"
              },
              {
                id: 1986,
                value: "广水市",
                label: "广水市",
                spell: "guangshuishi",
                abb: "gss"
              }
            ]
          },
          {
            id: 1987,
            value: "恩施土家族苗族自治州",
            label: "恩施土家族苗族自治州",
            spell: "enshitujiazumiaozuzizhizhou",
            abb: "estjzmzzzz",
            children: [
              {
                id: 1988,
                value: "恩施市",
                label: "恩施市",
                spell: "enshishi",
                abb: "ess"
              },
              {
                id: 1989,
                value: "利川市",
                label: "利川市",
                spell: "lichuanshi",
                abb: "lcs"
              },
              {
                id: 1990,
                value: "建始县",
                label: "建始县",
                spell: "jianshixian",
                abb: "jsx"
              },
              {
                id: 1991,
                value: "巴东县",
                label: "巴东县",
                spell: "badongxian",
                abb: "bdx"
              },
              {
                id: 1992,
                value: "宣恩县",
                label: "宣恩县",
                spell: "xuanenxian",
                abb: "xex"
              },
              {
                id: 1993,
                value: "咸丰县",
                label: "咸丰县",
                spell: "xianfengxian",
                abb: "xfx"
              },
              {
                id: 1994,
                value: "来凤县",
                label: "来凤县",
                spell: "laifengxian",
                abb: "lfx"
              },
              {
                id: 1995,
                value: "鹤峰县",
                label: "鹤峰县",
                spell: "hefengxian",
                abb: "hfx"
              }
            ]
          },
          {
            id: 1996,
            value: "仙桃市",
            label: "仙桃市",
            spell: "xiantaoshi(*)",
            abb: "xts",
            children: [
              {
                id: 1997,
                value: "仙桃市",
                label: "仙桃市",
                spell: "xiantaoshi",
                abb: "xts"
              }
            ]
          },
          {
            id: 1998,
            value: "潜江市",
            label: "潜江市",
            spell: "qianjiangshi",
            abb: "qjs",
            children: [
              {
                id: 1999,
                value: "潜江市",
                label: "潜江市",
                spell: "qianjiangshi",
                abb: "qjs"
              }
            ]
          },
          {
            id: 19991,
            value: "天门市",
            label: "天门市",
            spell: "tianmenshi",
            abb: "tms",
            children: [
              {
                id: 19992,
                value: "天门市",
                label: "天门市",
                spell: "tianmenshi",
                abb: "tms"
              }
            ]
          },
          {
            id: 19993,
            value: "神农架林区",
            label: "神农架林区",
            spell: "shennongjialinqu",
            abb: "snjlq",
            children: [
              {
                id: 19994,
                value: "神农架林区",
                label: "神农架林区",
                spell: "shennongjialinqu",
                abb: "snjlq"
              }
            ]
          }
        ]
      },
      {
        id: 2001,
        value: "湖南省",
        label: "湖南省",
        spell: "hunansheng",
        abb: "hns",
        children: [
          {
            id: 2002,
            value: "长沙市",
            label: "长沙市",
            spell: "changshashi",
            abb: "css",
            children: [
              {
                id: 2004,
                value: "芙蓉区",
                label: "芙蓉区",
                spell: "furongqu",
                abb: "frq"
              },
              {
                id: 2005,
                value: "天心区",
                label: "天心区",
                spell: "tianxinqu",
                abb: "txq"
              },
              {
                id: 2006,
                value: "岳麓区",
                label: "岳麓区",
                spell: "yueluqu",
                abb: "ylq"
              },
              {
                id: 2007,
                value: "开福区",
                label: "开福区",
                spell: "kaifuqu",
                abb: "kfq"
              },
              {
                id: 2008,
                value: "雨花区",
                label: "雨花区",
                spell: "yuhuaqu",
                abb: "yhq"
              },
              {
                id: 2009,
                value: "长沙县",
                label: "长沙县",
                spell: "changshaxian",
                abb: "csx"
              },
              {
                id: 2010,
                value: "望城县",
                label: "望城县",
                spell: "wangchengxian",
                abb: "wcx"
              },
              {
                id: 2011,
                value: "宁乡县",
                label: "宁乡县",
                spell: "ningxiangxian",
                abb: "nxx"
              },
              {
                id: 2012,
                value: "浏阳市",
                label: "浏阳市",
                spell: "liuyangshi",
                abb: "lys"
              }
            ]
          },
          {
            id: 2013,
            value: "株洲市",
            label: "株洲市",
            spell: "zhuzhoushi",
            abb: "zzs",
            children: [
              {
                id: 2015,
                value: "荷塘区",
                label: "荷塘区",
                spell: "hetangqu",
                abb: "htq"
              },
              {
                id: 2016,
                value: "芦淞区",
                label: "芦淞区",
                spell: "lusongqu",
                abb: "lsq"
              },
              {
                id: 2017,
                value: "石峰区",
                label: "石峰区",
                spell: "shifengqu",
                abb: "sfq"
              },
              {
                id: 2018,
                value: "天元区",
                label: "天元区",
                spell: "tianyuanqu",
                abb: "tyq"
              },
              {
                id: 2019,
                value: "株洲县",
                label: "株洲县",
                spell: "zhuzhouxian",
                abb: "zzx"
              },
              {
                id: 2020,
                value: "攸县",
                label: "攸县",
                spell: "youxian",
                abb: "yx"
              },
              {
                id: 2021,
                value: "茶陵县",
                label: "茶陵县",
                spell: "chalingxian",
                abb: "clx"
              },
              {
                id: 2022,
                value: "炎陵县",
                label: "炎陵县",
                spell: "yanlingxian",
                abb: "ylx"
              },
              {
                id: 2023,
                value: "醴陵市",
                label: "醴陵市",
                spell: "lilingshi",
                abb: "lls"
              }
            ]
          },
          {
            id: 2024,
            value: "湘潭市",
            label: "湘潭市",
            spell: "xiangtanshi",
            abb: "xts",
            children: [
              {
                id: 2026,
                value: "雨湖区",
                label: "雨湖区",
                spell: "yuhuqu",
                abb: "yhq"
              },
              {
                id: 2027,
                value: "岳塘区",
                label: "岳塘区",
                spell: "yuetangqu",
                abb: "ytq"
              },
              {
                id: 2028,
                value: "湘潭县",
                label: "湘潭县",
                spell: "xiangtanxian",
                abb: "xtx"
              },
              {
                id: 2029,
                value: "湘乡市",
                label: "湘乡市",
                spell: "xiangxiangshi",
                abb: "xxs"
              },
              {
                id: 2030,
                value: "韶山市",
                label: "韶山市",
                spell: "shaoshanshi",
                abb: "sss"
              }
            ]
          },
          {
            id: 2031,
            value: "衡阳市",
            label: "衡阳市",
            spell: "hengyangshi",
            abb: "hys",
            children: [
              {
                id: 2033,
                value: "珠晖区",
                label: "珠晖区",
                spell: "zhuhuiqu",
                abb: "zhq"
              },
              {
                id: 2034,
                value: "雁峰区",
                label: "雁峰区",
                spell: "yanfengqu",
                abb: "yfq"
              },
              {
                id: 2035,
                value: "石鼓区",
                label: "石鼓区",
                spell: "shiguqu",
                abb: "sgq"
              },
              {
                id: 2036,
                value: "蒸湘区",
                label: "蒸湘区",
                spell: "zhengxiangqu",
                abb: "zxq"
              },
              {
                id: 2037,
                value: "南岳区",
                label: "南岳区",
                spell: "nanyuequ",
                abb: "nyq"
              },
              {
                id: 2038,
                value: "衡阳县",
                label: "衡阳县",
                spell: "hengyangxian",
                abb: "hyx"
              },
              {
                id: 2039,
                value: "衡南县",
                label: "衡南县",
                spell: "hengnanxian",
                abb: "hnx"
              },
              {
                id: 2040,
                value: "衡山县",
                label: "衡山县",
                spell: "hengshanxian",
                abb: "hsx"
              },
              {
                id: 2041,
                value: "衡东县",
                label: "衡东县",
                spell: "hengdongxian",
                abb: "hdx"
              },
              {
                id: 2042,
                value: "祁东县",
                label: "祁东县",
                spell: "qidongxian",
                abb: "qdx"
              },
              {
                id: 2043,
                value: "耒阳市",
                label: "耒阳市",
                spell: "leiyangshi",
                abb: "lys"
              },
              {
                id: 2044,
                value: "常宁市",
                label: "常宁市",
                spell: "changningshi",
                abb: "cns"
              }
            ]
          },
          {
            id: 2045,
            value: "邵阳市",
            label: "邵阳市",
            spell: "shaoyangshi",
            abb: "sys",
            children: [
              {
                id: 2047,
                value: "双清区",
                label: "双清区",
                spell: "shuangqingqu",
                abb: "sqq"
              },
              {
                id: 2048,
                value: "大祥区",
                label: "大祥区",
                spell: "daxiangqu",
                abb: "dxq"
              },
              {
                id: 2049,
                value: "北塔区",
                label: "北塔区",
                spell: "beitaqu",
                abb: "btq"
              },
              {
                id: 2050,
                value: "邵东县",
                label: "邵东县",
                spell: "shaodongxian",
                abb: "sdx"
              },
              {
                id: 2051,
                value: "新邵县",
                label: "新邵县",
                spell: "xinshaoxian",
                abb: "xsx"
              },
              {
                id: 2052,
                value: "邵阳县",
                label: "邵阳县",
                spell: "shaoyangxian",
                abb: "syx"
              },
              {
                id: 2053,
                value: "隆回县",
                label: "隆回县",
                spell: "longhuixian",
                abb: "lhx"
              },
              {
                id: 2054,
                value: "洞口县",
                label: "洞口县",
                spell: "dongkouxian",
                abb: "dkx"
              },
              {
                id: 2055,
                value: "绥宁县",
                label: "绥宁县",
                spell: "suiningxian",
                abb: "snx"
              },
              {
                id: 2056,
                value: "新宁县",
                label: "新宁县",
                spell: "xinningxian",
                abb: "xnx"
              },
              {
                id: 2057,
                value: "城步苗族自治县",
                label: "城步苗族自治县",
                spell: "chengbumiaozuzizhixian",
                abb: "cbmzzzx"
              },
              {
                id: 2058,
                value: "武冈市",
                label: "武冈市",
                spell: "wugangshi",
                abb: "wgs"
              }
            ]
          },
          {
            id: 2059,
            value: "岳阳市",
            label: "岳阳市",
            spell: "yueyangshi",
            abb: "yys",
            children: [
              {
                id: 2061,
                value: "岳阳楼区",
                label: "岳阳楼区",
                spell: "yueyanglouqu",
                abb: "yylq"
              },
              {
                id: 2062,
                value: "云溪区",
                label: "云溪区",
                spell: "yunxiqu",
                abb: "yxq"
              },
              {
                id: 2063,
                value: "君山区",
                label: "君山区",
                spell: "junshanqu",
                abb: "jsq"
              },
              {
                id: 2064,
                value: "岳阳县",
                label: "岳阳县",
                spell: "yueyangxian",
                abb: "yyx"
              },
              {
                id: 2065,
                value: "华容县",
                label: "华容县",
                spell: "huarongxian",
                abb: "hrx"
              },
              {
                id: 2066,
                value: "湘阴县",
                label: "湘阴县",
                spell: "xiangyinxian",
                abb: "xyx"
              },
              {
                id: 2067,
                value: "平江县",
                label: "平江县",
                spell: "pingjiangxian",
                abb: "pjx"
              },
              {
                id: 2068,
                value: "汨罗市",
                label: "汨罗市",
                spell: "miluoshi",
                abb: "mls"
              },
              {
                id: 2069,
                value: "临湘市",
                label: "临湘市",
                spell: "linxiangshi",
                abb: "lxs"
              }
            ]
          },
          {
            id: 2070,
            value: "常德市",
            label: "常德市",
            spell: "changdeshi",
            abb: "cds",
            children: [
              {
                id: 2072,
                value: "武陵区",
                label: "武陵区",
                spell: "wulingqu",
                abb: "wlq"
              },
              {
                id: 2073,
                value: "鼎城区",
                label: "鼎城区",
                spell: "dingchengqu",
                abb: "dcq"
              },
              {
                id: 2074,
                value: "安乡县",
                label: "安乡县",
                spell: "anxiangxian",
                abb: "axx"
              },
              {
                id: 2075,
                value: "汉寿县",
                label: "汉寿县",
                spell: "hanshouxian",
                abb: "hsx"
              },
              {
                id: 2076,
                value: "澧县",
                label: "澧县",
                spell: "lixian",
                abb: "lx"
              },
              {
                id: 2077,
                value: "临澧县",
                label: "临澧县",
                spell: "linlixian",
                abb: "llx"
              },
              {
                id: 2078,
                value: "桃源县",
                label: "桃源县",
                spell: "taoyuanxian",
                abb: "tyx"
              },
              {
                id: 2079,
                value: "石门县",
                label: "石门县",
                spell: "shimenxian",
                abb: "smx"
              },
              {
                id: 2080,
                value: "津市市",
                label: "津市市",
                spell: "jinshishi",
                abb: "jss"
              }
            ]
          },
          {
            id: 2081,
            value: "张家界市",
            label: "张家界市",
            spell: "zhangjiajieshi",
            abb: "zjjs",
            children: [
              {
                id: 2083,
                value: "永定区",
                label: "永定区",
                spell: "yongdingqu",
                abb: "ydq"
              },
              {
                id: 2084,
                value: "武陵源区",
                label: "武陵源区",
                spell: "wulingyuanqu",
                abb: "wlyq"
              },
              {
                id: 2085,
                value: "慈利县",
                label: "慈利县",
                spell: "cilixian",
                abb: "clx"
              },
              {
                id: 2086,
                value: "桑植县",
                label: "桑植县",
                spell: "sangzhixian",
                abb: "szx"
              }
            ]
          },
          {
            id: 2087,
            value: "益阳市",
            label: "益阳市",
            spell: "yiyangshi",
            abb: "yys",
            children: [
              {
                id: 2089,
                value: "资阳区",
                label: "资阳区",
                spell: "ziyangqu",
                abb: "zyq"
              },
              {
                id: 2090,
                value: "赫山区",
                label: "赫山区",
                spell: "heshanqu",
                abb: "hsq"
              },
              {
                id: 2091,
                value: "南县",
                label: "南县",
                spell: "nanxian",
                abb: "nx"
              },
              {
                id: 2092,
                value: "桃江县",
                label: "桃江县",
                spell: "taojiangxian",
                abb: "tjx"
              },
              {
                id: 2093,
                value: "安化县",
                label: "安化县",
                spell: "anhuaxian",
                abb: "ahx"
              },
              {
                id: 2094,
                value: "沅江市",
                label: "沅江市",
                spell: "yuanjiangshi",
                abb: "yjs"
              }
            ]
          },
          {
            id: 2095,
            value: "郴州市",
            label: "郴州市",
            spell: "chenzhoushi",
            abb: "czs",
            children: [
              {
                id: 2097,
                value: "北湖区",
                label: "北湖区",
                spell: "beihuqu",
                abb: "bhq"
              },
              {
                id: 2098,
                value: "苏仙区",
                label: "苏仙区",
                spell: "suxianqu",
                abb: "sxq"
              },
              {
                id: 2099,
                value: "桂阳县",
                label: "桂阳县",
                spell: "guiyangxian",
                abb: "gyx"
              },
              {
                id: 2100,
                value: "宜章县",
                label: "宜章县",
                spell: "yizhangxian",
                abb: "yzx"
              },
              {
                id: 2101,
                value: "永兴县",
                label: "永兴县",
                spell: "yongxingxian",
                abb: "yxx"
              },
              {
                id: 2102,
                value: "嘉禾县",
                label: "嘉禾县",
                spell: "jiahexian",
                abb: "jhx"
              },
              {
                id: 2103,
                value: "临武县",
                label: "临武县",
                spell: "linwuxian",
                abb: "lwx"
              },
              {
                id: 2104,
                value: "汝城县",
                label: "汝城县",
                spell: "ruchengxian",
                abb: "rcx"
              },
              {
                id: 2105,
                value: "桂东县",
                label: "桂东县",
                spell: "guidongxian",
                abb: "gdx"
              },
              {
                id: 2106,
                value: "安仁县",
                label: "安仁县",
                spell: "anrenxian",
                abb: "arx"
              },
              {
                id: 2107,
                value: "资兴市",
                label: "资兴市",
                spell: "zixingshi",
                abb: "zxs"
              }
            ]
          },
          {
            id: 2108,
            value: "永州市",
            label: "永州市",
            spell: "yongzhoushi",
            abb: "yzs",
            children: [
              {
                id: 2110,
                value: "零陵区",
                label: "零陵区",
                spell: "linglingqu",
                abb: "llq"
              },
              {
                id: 2111,
                value: "冷水滩区",
                label: "冷水滩区",
                spell: "lengshuitanqu",
                abb: "lstq"
              },
              {
                id: 2112,
                value: "祁阳县",
                label: "祁阳县",
                spell: "qiyangxian",
                abb: "qyx"
              },
              {
                id: 2113,
                value: "东安县",
                label: "东安县",
                spell: "donganxian",
                abb: "dax"
              },
              {
                id: 2114,
                value: "双牌县",
                label: "双牌县",
                spell: "shuangpaixian",
                abb: "spx"
              },
              {
                id: 2115,
                value: "道县",
                label: "道县",
                spell: "daoxian",
                abb: "dx"
              },
              {
                id: 2116,
                value: "江永县",
                label: "江永县",
                spell: "jiangyongxian",
                abb: "jyx"
              },
              {
                id: 2117,
                value: "宁远县",
                label: "宁远县",
                spell: "ningyuanxian",
                abb: "nyx"
              },
              {
                id: 2118,
                value: "蓝山县",
                label: "蓝山县",
                spell: "lanshanxian",
                abb: "lsx"
              },
              {
                id: 2119,
                value: "新田县",
                label: "新田县",
                spell: "xintianxian",
                abb: "xtx"
              },
              {
                id: 2120,
                value: "江华瑶族自治县",
                label: "江华瑶族自治县",
                spell: "jianghuayaozuzizhixian",
                abb: "jhyzzzx"
              }
            ]
          },
          {
            id: 2121,
            value: "怀化市",
            label: "怀化市",
            spell: "huaihuashi",
            abb: "hhs",
            children: [
              {
                id: 2123,
                value: "鹤城区",
                label: "鹤城区",
                spell: "hechengqu",
                abb: "hcq"
              },
              {
                id: 2124,
                value: "中方县",
                label: "中方县",
                spell: "zhongfangxian",
                abb: "zfx"
              },
              {
                id: 2125,
                value: "沅陵县",
                label: "沅陵县",
                spell: "yuanlingxian",
                abb: "ylx"
              },
              {
                id: 2126,
                value: "辰溪县",
                label: "辰溪县",
                spell: "chenxixian",
                abb: "cxx"
              },
              {
                id: 2127,
                value: "溆浦县",
                label: "溆浦县",
                spell: "xupuxian",
                abb: "xpx"
              },
              {
                id: 2128,
                value: "会同县",
                label: "会同县",
                spell: "huitongxian",
                abb: "htx"
              },
              {
                id: 2129,
                value: "麻阳苗族自治县",
                label: "麻阳苗族自治县",
                spell: "mayangmiaozuzizhixian",
                abb: "mymzzzx"
              },
              {
                id: 2130,
                value: "新晃侗族自治县",
                label: "新晃侗族自治县",
                spell: "xinhuangdongzuzizhixian",
                abb: "xhdzzzx"
              },
              {
                id: 2131,
                value: "芷江侗族自治县",
                label: "芷江侗族自治县",
                spell: "zhijiangdongzuzizhixian",
                abb: "zjdzzzx"
              },
              {
                id: 2132,
                value: "靖州苗族侗族自治县",
                label: "靖州苗族侗族自治县",
                spell: "jingzhoumiaozudongzuzizhixian",
                abb: "jzmzdzzzx"
              },
              {
                id: 2133,
                value: "通道侗族自治县",
                label: "通道侗族自治县",
                spell: "tongdaodongzuzizhixian",
                abb: "tddzzzx"
              },
              {
                id: 2134,
                value: "洪江市",
                label: "洪江市",
                spell: "hongjiangshi",
                abb: "hjs"
              }
            ]
          },
          {
            id: 2135,
            value: "娄底市",
            label: "娄底市",
            spell: "loudishi",
            abb: "lds",
            children: [
              {
                id: 2137,
                value: "娄星区",
                label: "娄星区",
                spell: "louxingqu",
                abb: "lxq"
              },
              {
                id: 2138,
                value: "双峰县",
                label: "双峰县",
                spell: "shuangfengxian",
                abb: "sfx"
              },
              {
                id: 2139,
                value: "新化县",
                label: "新化县",
                spell: "xinhuaxian",
                abb: "xhx"
              },
              {
                id: 2140,
                value: "冷水江市",
                label: "冷水江市",
                spell: "lengshuijiangshi",
                abb: "lsjs"
              },
              {
                id: 2141,
                value: "涟源市",
                label: "涟源市",
                spell: "lianyuanshi",
                abb: "lys"
              }
            ]
          },
          {
            id: 2142,
            value: "湘西土家族苗族自治州",
            label: "湘西土家族苗族自治州",
            spell: "xiangxitujiazumiaozuzizhizhou",
            abb: "xxtjzmzzzz",
            children: [
              {
                id: 2143,
                value: "吉首市",
                label: "吉首市",
                spell: "jishoushi",
                abb: "jss"
              },
              {
                id: 2144,
                value: "泸溪县",
                label: "泸溪县",
                spell: "luxixian",
                abb: "lxx"
              },
              {
                id: 2145,
                value: "凤凰县",
                label: "凤凰县",
                spell: "fenghuangxian",
                abb: "fhx"
              },
              {
                id: 2146,
                value: "花垣县",
                label: "花垣县",
                spell: "huayuanxian",
                abb: "hyx"
              },
              {
                id: 2147,
                value: "保靖县",
                label: "保靖县",
                spell: "baojingxian",
                abb: "bjx"
              },
              {
                id: 2148,
                value: "古丈县",
                label: "古丈县",
                spell: "guzhangxian",
                abb: "gzx"
              },
              {
                id: 2149,
                value: "永顺县",
                label: "永顺县",
                spell: "yongshunxian",
                abb: "ysx"
              },
              {
                id: 2150,
                value: "龙山县",
                label: "龙山县",
                spell: "longshanxian",
                abb: "lsx"
              }
            ]
          }
        ]
      },
      {
        id: 2151,
        value: "广东省",
        label: "广东省",
        spell: "guangdongsheng",
        abb: "gds",
        children: [
          {
            id: 2152,
            value: "广州市",
            label: "广州市",
            spell: "guangzhoushi",
            abb: "gzs",
            children: [
              {
                id: 2154,
                value: "荔湾区",
                label: "荔湾区",
                spell: "liwanqu",
                abb: "lwq"
              },
              {
                id: 2155,
                value: "越秀区",
                label: "越秀区",
                spell: "yuexiuqu",
                abb: "yxq"
              },
              {
                id: 2156,
                value: "海珠区",
                label: "海珠区",
                spell: "haizhuqu",
                abb: "hzq"
              },
              {
                id: 2157,
                value: "天河区",
                label: "天河区",
                spell: "tianhequ",
                abb: "thq"
              },
              {
                id: 2158,
                value: "白云区",
                label: "白云区",
                spell: "baiyunqu",
                abb: "byq"
              },
              {
                id: 2159,
                value: "黄埔区",
                label: "黄埔区",
                spell: "huangpuqu",
                abb: "hpq"
              },
              {
                id: 2160,
                value: "番禺区",
                label: "番禺区",
                spell: "fanyuqu",
                abb: "fyq"
              },
              {
                id: 2161,
                value: "花都区",
                label: "花都区",
                spell: "huadouqu",
                abb: "hdq"
              },
              {
                id: 2162,
                value: "南沙区",
                label: "南沙区",
                spell: "nanshaqu",
                abb: "nsq"
              },
              {
                id: 2163,
                value: "萝岗区",
                label: "萝岗区",
                spell: "luogangqu",
                abb: "lgq"
              },
              {
                id: 2164,
                value: "增城市",
                label: "增城市",
                spell: "zengchengshi",
                abb: "zcs"
              },
              {
                id: 2165,
                value: "从化市",
                label: "从化市",
                spell: "conghuashi",
                abb: "chs"
              }
            ]
          },
          {
            id: 2166,
            value: "韶关市",
            label: "韶关市",
            spell: "shaoguanshi",
            abb: "sgs",
            children: [
              {
                id: 2168,
                value: "武江区",
                label: "武江区",
                spell: "wujiangqu",
                abb: "wjq"
              },
              {
                id: 2169,
                value: "浈江区",
                label: "浈江区",
                spell: "zhenjiangqu",
                abb: "zjq"
              },
              {
                id: 2170,
                value: "曲江区",
                label: "曲江区",
                spell: "qujiangqu",
                abb: "qjq"
              },
              {
                id: 2171,
                value: "始兴县",
                label: "始兴县",
                spell: "shixingxian",
                abb: "sxx"
              },
              {
                id: 2172,
                value: "仁化县",
                label: "仁化县",
                spell: "renhuaxian",
                abb: "rhx"
              },
              {
                id: 2173,
                value: "翁源县",
                label: "翁源县",
                spell: "wengyuanxian",
                abb: "wyx"
              },
              {
                id: 2174,
                value: "乳源瑶族自治县",
                label: "乳源瑶族自治县",
                spell: "ruyuanyaozuzizhixian",
                abb: "ryyzzzx"
              },
              {
                id: 2175,
                value: "新丰县",
                label: "新丰县",
                spell: "xinfengxian",
                abb: "xfx"
              },
              {
                id: 2176,
                value: "乐昌市",
                label: "乐昌市",
                spell: "lechangshi",
                abb: "lcs"
              },
              {
                id: 2177,
                value: "南雄市",
                label: "南雄市",
                spell: "nanxiongshi",
                abb: "nxs"
              }
            ]
          },
          {
            id: 2178,
            value: "深圳市",
            label: "深圳市",
            spell: "shenzhenshi",
            abb: "szs",
            children: [
              {
                id: 2180,
                value: "罗湖区",
                label: "罗湖区",
                spell: "luohuqu",
                abb: "lhq"
              },
              {
                id: 2181,
                value: "福田区",
                label: "福田区",
                spell: "futianqu",
                abb: "ftq"
              },
              {
                id: 2182,
                value: "南山区",
                label: "南山区",
                spell: "nanshanqu",
                abb: "nsq"
              },
              {
                id: 2183,
                value: "宝安区",
                label: "宝安区",
                spell: "baoanqu",
                abb: "baq"
              },
              {
                id: 2184,
                value: "龙岗区",
                label: "龙岗区",
                spell: "longgangqu",
                abb: "lgq"
              },
              {
                id: 2185,
                value: "盐田区",
                label: "盐田区",
                spell: "yantianqu",
                abb: "ytq"
              }
            ]
          },
          {
            id: 2186,
            value: "珠海市",
            label: "珠海市",
            spell: "zhuhaishi",
            abb: "zhs",
            children: [
              {
                id: 2188,
                value: "香洲区",
                label: "香洲区",
                spell: "xiangzhouqu",
                abb: "xzq"
              },
              {
                id: 2189,
                value: "斗门区",
                label: "斗门区",
                spell: "doumenqu",
                abb: "dmq"
              },
              {
                id: 2190,
                value: "金湾区",
                label: "金湾区",
                spell: "jinwanqu",
                abb: "jwq"
              }
            ]
          },
          {
            id: 2191,
            value: "汕头市",
            label: "汕头市",
            spell: "shantoushi",
            abb: "sts",
            children: [
              {
                id: 2193,
                value: "龙湖区",
                label: "龙湖区",
                spell: "longhuqu",
                abb: "lhq"
              },
              {
                id: 2194,
                value: "金平区",
                label: "金平区",
                spell: "jinpingqu",
                abb: "jpq"
              },
              {
                id: 2195,
                value: "濠江区",
                label: "濠江区",
                spell: "haojiangqu",
                abb: "hjq"
              },
              {
                id: 2196,
                value: "潮阳区",
                label: "潮阳区",
                spell: "chaoyangqu",
                abb: "cyq"
              },
              {
                id: 2197,
                value: "潮南区",
                label: "潮南区",
                spell: "chaonanqu",
                abb: "cnq"
              },
              {
                id: 2198,
                value: "澄海区",
                label: "澄海区",
                spell: "chenghaiqu",
                abb: "chq"
              },
              {
                id: 2199,
                value: "南澳县",
                label: "南澳县",
                spell: "nanaoxian",
                abb: "nax"
              }
            ]
          },
          {
            id: 2200,
            value: "佛山市",
            label: "佛山市",
            spell: "foshanshi",
            abb: "fss",
            children: [
              {
                id: 2202,
                value: "禅城区",
                label: "禅城区",
                spell: "shanchengqu",
                abb: "scq"
              },
              {
                id: 2203,
                value: "南海区",
                label: "南海区",
                spell: "nanhaiqu",
                abb: "nhq"
              },
              {
                id: 2204,
                value: "顺德区",
                label: "顺德区",
                spell: "shundequ",
                abb: "sdq"
              },
              {
                id: 2205,
                value: "三水区",
                label: "三水区",
                spell: "sanshuiqu",
                abb: "ssq"
              },
              {
                id: 2206,
                value: "高明区",
                label: "高明区",
                spell: "gaomingqu",
                abb: "gmq"
              }
            ]
          },
          {
            id: 2207,
            value: "江门市",
            label: "江门市",
            spell: "jiangmenshi",
            abb: "jms",
            children: [
              {
                id: 2209,
                value: "蓬江区",
                label: "蓬江区",
                spell: "pengjiangqu",
                abb: "pjq"
              },
              {
                id: 2210,
                value: "江海区",
                label: "江海区",
                spell: "jianghaiqu",
                abb: "jhq"
              },
              {
                id: 2211,
                value: "新会区",
                label: "新会区",
                spell: "xinhuiqu",
                abb: "xhq"
              },
              {
                id: 2212,
                value: "台山市",
                label: "台山市",
                spell: "taishanshi",
                abb: "tss"
              },
              {
                id: 2213,
                value: "开平市",
                label: "开平市",
                spell: "kaipingshi",
                abb: "kps"
              },
              {
                id: 2214,
                value: "鹤山市",
                label: "鹤山市",
                spell: "heshanshi",
                abb: "hss"
              },
              {
                id: 2215,
                value: "恩平市",
                label: "恩平市",
                spell: "enpingshi",
                abb: "eps"
              }
            ]
          },
          {
            id: 2216,
            value: "湛江市",
            label: "湛江市",
            spell: "zhanjiangshi",
            abb: "zjs",
            children: [
              {
                id: 2218,
                value: "赤坎区",
                label: "赤坎区",
                spell: "chikanqu",
                abb: "ckq"
              },
              {
                id: 2219,
                value: "霞山区",
                label: "霞山区",
                spell: "xiashanqu",
                abb: "xsq"
              },
              {
                id: 2220,
                value: "坡头区",
                label: "坡头区",
                spell: "potouqu",
                abb: "ptq"
              },
              {
                id: 2221,
                value: "麻章区",
                label: "麻章区",
                spell: "mazhangqu",
                abb: "mzq"
              },
              {
                id: 2222,
                value: "遂溪县",
                label: "遂溪县",
                spell: "suixixian",
                abb: "sxx"
              },
              {
                id: 2223,
                value: "徐闻县",
                label: "徐闻县",
                spell: "xuwenxian",
                abb: "xwx"
              },
              {
                id: 2224,
                value: "廉江市",
                label: "廉江市",
                spell: "lianjiangshi",
                abb: "ljs"
              },
              {
                id: 2225,
                value: "雷州市",
                label: "雷州市",
                spell: "leizhoushi",
                abb: "lzs"
              },
              {
                id: 2226,
                value: "吴川市",
                label: "吴川市",
                spell: "wuchuanshi",
                abb: "wcs"
              }
            ]
          },
          {
            id: 2227,
            value: "茂名市",
            label: "茂名市",
            spell: "maomingshi",
            abb: "mms",
            children: [
              {
                id: 2229,
                value: "茂南区",
                label: "茂南区",
                spell: "maonanqu",
                abb: "mnq"
              },
              {
                id: 2230,
                value: "茂港区",
                label: "茂港区",
                spell: "maogangqu",
                abb: "mgq"
              },
              {
                id: 2231,
                value: "电白县",
                label: "电白县",
                spell: "dianbaixian",
                abb: "dbx"
              },
              {
                id: 2232,
                value: "高州市",
                label: "高州市",
                spell: "gaozhoushi",
                abb: "gzs"
              },
              {
                id: 2233,
                value: "化州市",
                label: "化州市",
                spell: "huazhoushi",
                abb: "hzs"
              },
              {
                id: 2234,
                value: "信宜市",
                label: "信宜市",
                spell: "xinyishi",
                abb: "xys"
              }
            ]
          },
          {
            id: 2235,
            value: "肇庆市",
            label: "肇庆市",
            spell: "zhaoqingshi",
            abb: "zqs",
            children: [
              {
                id: 2237,
                value: "端州区",
                label: "端州区",
                spell: "duanzhouqu",
                abb: "dzq"
              },
              {
                id: 2238,
                value: "鼎湖区",
                label: "鼎湖区",
                spell: "dinghuqu",
                abb: "dhq"
              },
              {
                id: 2239,
                value: "广宁县",
                label: "广宁县",
                spell: "guangningxian",
                abb: "gnx"
              },
              {
                id: 2240,
                value: "怀集县",
                label: "怀集县",
                spell: "huaijixian",
                abb: "hjx"
              },
              {
                id: 2241,
                value: "封开县",
                label: "封开县",
                spell: "fengkaixian",
                abb: "fkx"
              },
              {
                id: 2242,
                value: "德庆县",
                label: "德庆县",
                spell: "deqingxian",
                abb: "dqx"
              },
              {
                id: 2243,
                value: "高要市",
                label: "高要市",
                spell: "gaoyaoshi",
                abb: "gys"
              },
              {
                id: 2244,
                value: "四会市",
                label: "四会市",
                spell: "sihuishi",
                abb: "shs"
              }
            ]
          },
          {
            id: 2245,
            value: "惠州市",
            label: "惠州市",
            spell: "huizhoushi",
            abb: "hzs",
            children: [
              {
                id: 2247,
                value: "惠城区",
                label: "惠城区",
                spell: "huichengqu",
                abb: "hcq"
              },
              {
                id: 2248,
                value: "惠阳区",
                label: "惠阳区",
                spell: "huiyangqu",
                abb: "hyq"
              },
              {
                id: 2249,
                value: "博罗县",
                label: "博罗县",
                spell: "boluoxian",
                abb: "blx"
              },
              {
                id: 2250,
                value: "惠东县",
                label: "惠东县",
                spell: "huidongxian",
                abb: "hdx"
              },
              {
                id: 2251,
                value: "龙门县",
                label: "龙门县",
                spell: "longmenxian",
                abb: "lmx"
              }
            ]
          },
          {
            id: 2252,
            value: "梅州市",
            label: "梅州市",
            spell: "meizhoushi",
            abb: "mzs",
            children: [
              {
                id: 2254,
                value: "梅江区",
                label: "梅江区",
                spell: "meijiangqu",
                abb: "mjq"
              },
              {
                id: 2255,
                value: "梅县",
                label: "梅县",
                spell: "meixian",
                abb: "mx"
              },
              {
                id: 2256,
                value: "大埔县",
                label: "大埔县",
                spell: "dapuxian",
                abb: "dpx"
              },
              {
                id: 2257,
                value: "丰顺县",
                label: "丰顺县",
                spell: "fengshunxian",
                abb: "fsx"
              },
              {
                id: 2258,
                value: "五华县",
                label: "五华县",
                spell: "wuhuaxian",
                abb: "whx"
              },
              {
                id: 2259,
                value: "平远县",
                label: "平远县",
                spell: "pingyuanxian",
                abb: "pyx"
              },
              {
                id: 2260,
                value: "蕉岭县",
                label: "蕉岭县",
                spell: "jiaolingxian",
                abb: "jlx"
              },
              {
                id: 2261,
                value: "兴宁市",
                label: "兴宁市",
                spell: "xingningshi",
                abb: "xns"
              }
            ]
          },
          {
            id: 2262,
            value: "汕尾市",
            label: "汕尾市",
            spell: "shanweishi",
            abb: "sws",
            children: [
              {
                id: 2264,
                value: "城区",
                label: "城区",
                spell: "chengqu",
                abb: "cq"
              },
              {
                id: 2265,
                value: "海丰县",
                label: "海丰县",
                spell: "haifengxian",
                abb: "hfx"
              },
              {
                id: 2266,
                value: "陆河县",
                label: "陆河县",
                spell: "luhexian",
                abb: "lhx"
              },
              {
                id: 2267,
                value: "陆丰市",
                label: "陆丰市",
                spell: "lufengshi",
                abb: "lfs"
              }
            ]
          },
          {
            id: 2268,
            value: "河源市",
            label: "河源市",
            spell: "heyuanshi",
            abb: "hys",
            children: [
              {
                id: 2270,
                value: "源城区",
                label: "源城区",
                spell: "yuanchengqu",
                abb: "ycq"
              },
              {
                id: 2271,
                value: "紫金县",
                label: "紫金县",
                spell: "zijinxian",
                abb: "zjx"
              },
              {
                id: 2272,
                value: "龙川县",
                label: "龙川县",
                spell: "longchuanxian",
                abb: "lcx"
              },
              {
                id: 2273,
                value: "连平县",
                label: "连平县",
                spell: "lianpingxian",
                abb: "lpx"
              },
              {
                id: 2274,
                value: "和平县",
                label: "和平县",
                spell: "hepingxian",
                abb: "hpx"
              },
              {
                id: 2275,
                value: "东源县",
                label: "东源县",
                spell: "dongyuanxian",
                abb: "dyx"
              }
            ]
          },
          {
            id: 2276,
            value: "阳江市",
            label: "阳江市",
            spell: "yangjiangshi",
            abb: "yjs",
            children: [
              {
                id: 2278,
                value: "江城区",
                label: "江城区",
                spell: "jiangchengqu",
                abb: "jcq"
              },
              {
                id: 2279,
                value: "阳西县",
                label: "阳西县",
                spell: "yangxixian",
                abb: "yxx"
              },
              {
                id: 2280,
                value: "阳东县",
                label: "阳东县",
                spell: "yangdongxian",
                abb: "ydx"
              },
              {
                id: 2281,
                value: "阳春市",
                label: "阳春市",
                spell: "yangchunshi",
                abb: "ycs"
              }
            ]
          },
          {
            id: 2282,
            value: "清远市",
            label: "清远市",
            spell: "qingyuanshi",
            abb: "qys",
            children: [
              {
                id: 2284,
                value: "清城区",
                label: "清城区",
                spell: "qingchengqu",
                abb: "qcq"
              },
              {
                id: 2285,
                value: "佛冈县",
                label: "佛冈县",
                spell: "fogangxian",
                abb: "fgx"
              },
              {
                id: 2286,
                value: "阳山县",
                label: "阳山县",
                spell: "yangshanxian",
                abb: "ysx"
              },
              {
                id: 2287,
                value: "连山壮族瑶族自治县",
                label: "连山壮族瑶族自治县",
                spell: "lianshanzhuangzuyaozuzizhixian",
                abb: "lszzyzzzx"
              },
              {
                id: 2288,
                value: "连南瑶族自治县",
                label: "连南瑶族自治县",
                spell: "liannanyaozuzizhixian",
                abb: "lnyzzzx"
              },
              {
                id: 2289,
                value: "清新县",
                label: "清新县",
                spell: "qingxinxian",
                abb: "qxx"
              },
              {
                id: 2290,
                value: "英德市",
                label: "英德市",
                spell: "yingdeshi",
                abb: "yds"
              },
              {
                id: 2291,
                value: "连州市",
                label: "连州市",
                spell: "lianzhoushi",
                abb: "lzs"
              }
            ]
          },
          {
            id: 2292,
            value: "东莞市",
            label: "东莞市",
            spell: "dongguanshi",
            abb: "dgs",
            children: []
          },
          {
            id: 2293,
            value: "中山市",
            label: "中山市",
            spell: "zhongshanshi",
            abb: "zss",
            children: []
          },
          {
            id: 2294,
            value: "潮州市",
            label: "潮州市",
            spell: "chaozhoushi",
            abb: "czs",
            children: [
              {
                id: 2296,
                value: "湘桥区",
                label: "湘桥区",
                spell: "xiangqiaoqu",
                abb: "xqq"
              },
              {
                id: 2297,
                value: "潮安县",
                label: "潮安县",
                spell: "chaoanxian",
                abb: "cax"
              },
              {
                id: 2298,
                value: "饶平县",
                label: "饶平县",
                spell: "raopingxian",
                abb: "rpx"
              }
            ]
          },
          {
            id: 2299,
            value: "揭阳市",
            label: "揭阳市",
            spell: "jieyangshi",
            abb: "jys",
            children: [
              {
                id: 2301,
                value: "榕城区",
                label: "榕城区",
                spell: "rongchengqu",
                abb: "rcq"
              },
              {
                id: 2302,
                value: "揭东县",
                label: "揭东县",
                spell: "jiedongxian",
                abb: "jdx"
              },
              {
                id: 2303,
                value: "揭西县",
                label: "揭西县",
                spell: "jiexixian",
                abb: "jxx"
              },
              {
                id: 2304,
                value: "惠来县",
                label: "惠来县",
                spell: "huilaixian",
                abb: "hlx"
              },
              {
                id: 2305,
                value: "普宁市",
                label: "普宁市",
                spell: "puningshi",
                abb: "pns"
              }
            ]
          },
          {
            id: 2306,
            value: "云浮市",
            label: "云浮市",
            spell: "yunfushi",
            abb: "yfs",
            children: [
              {
                id: 2308,
                value: "云城区",
                label: "云城区",
                spell: "yunchengqu",
                abb: "ycq"
              },
              {
                id: 2309,
                value: "新兴县",
                label: "新兴县",
                spell: "xinxingxian",
                abb: "xxx"
              },
              {
                id: 2310,
                value: "郁南县",
                label: "郁南县",
                spell: "yunanxian",
                abb: "ynx"
              },
              {
                id: 2311,
                value: "云安县",
                label: "云安县",
                spell: "yunanxian",
                abb: "yax"
              },
              {
                id: 2312,
                value: "罗定市",
                label: "罗定市",
                spell: "luodingshi",
                abb: "lds"
              }
            ]
          }
        ]
      },
      {
        id: 2313,
        value: "广西壮族自治区",
        label: "广西壮族自治区",
        spell: "guangxizhuangzuzizhiqu",
        abb: "gxzzzzq",
        children: [
          {
            id: 2314,
            value: "南宁市",
            label: "南宁市",
            spell: "nanningshi",
            abb: "nns",
            children: [
              {
                id: 2316,
                value: "兴宁区",
                label: "兴宁区",
                spell: "xingningqu",
                abb: "xnq"
              },
              {
                id: 2317,
                value: "青秀区",
                label: "青秀区",
                spell: "qingxiuqu",
                abb: "qxq"
              },
              {
                id: 2318,
                value: "江南区",
                label: "江南区",
                spell: "jiangnanqu",
                abb: "jnq"
              },
              {
                id: 2319,
                value: "西乡塘区",
                label: "西乡塘区",
                spell: "xixiangtangqu",
                abb: "xxtq"
              },
              {
                id: 2320,
                value: "良庆区",
                label: "良庆区",
                spell: "liangqingqu",
                abb: "lqq"
              },
              {
                id: 2321,
                value: "邕宁区",
                label: "邕宁区",
                spell: "yongningqu",
                abb: "ynq"
              },
              {
                id: 2322,
                value: "武鸣县",
                label: "武鸣县",
                spell: "wumingxian",
                abb: "wmx"
              },
              {
                id: 2323,
                value: "隆安县",
                label: "隆安县",
                spell: "longanxian",
                abb: "lax"
              },
              {
                id: 2324,
                value: "马山县",
                label: "马山县",
                spell: "mashanxian",
                abb: "msx"
              },
              {
                id: 2325,
                value: "上林县",
                label: "上林县",
                spell: "shanglinxian",
                abb: "slx"
              },
              {
                id: 2326,
                value: "宾阳县",
                label: "宾阳县",
                spell: "binyangxian",
                abb: "byx"
              },
              {
                id: 2327,
                value: "横县",
                label: "横县",
                spell: "hengxian",
                abb: "hx"
              }
            ]
          },
          {
            id: 2328,
            value: "柳州市",
            label: "柳州市",
            spell: "liuzhoushi",
            abb: "lzs",
            children: [
              {
                id: 2330,
                value: "城中区",
                label: "城中区",
                spell: "chengzhongqu",
                abb: "czq"
              },
              {
                id: 2331,
                value: "鱼峰区",
                label: "鱼峰区",
                spell: "yufengqu",
                abb: "yfq"
              },
              {
                id: 2332,
                value: "柳南区",
                label: "柳南区",
                spell: "liunanqu",
                abb: "lnq"
              },
              {
                id: 2333,
                value: "柳北区",
                label: "柳北区",
                spell: "liubeiqu",
                abb: "lbq"
              },
              {
                id: 2334,
                value: "柳江县",
                label: "柳江县",
                spell: "liujiangxian",
                abb: "ljx"
              },
              {
                id: 2335,
                value: "柳城县",
                label: "柳城县",
                spell: "liuchengxian",
                abb: "lcx"
              },
              {
                id: 2336,
                value: "鹿寨县",
                label: "鹿寨县",
                spell: "luzhaixian",
                abb: "lzx"
              },
              {
                id: 2337,
                value: "融安县",
                label: "融安县",
                spell: "ronganxian",
                abb: "rax"
              },
              {
                id: 2338,
                value: "融水苗族自治县",
                label: "融水苗族自治县",
                spell: "rongshuimiaozuzizhixian",
                abb: "rsmzzzx"
              },
              {
                id: 2339,
                value: "三江侗族自治县",
                label: "三江侗族自治县",
                spell: "sanjiangdongzuzizhixian",
                abb: "sjdzzzx"
              }
            ]
          },
          {
            id: 2340,
            value: "桂林市",
            label: "桂林市",
            spell: "guilinshi",
            abb: "gls",
            children: [
              {
                id: 2342,
                value: "秀峰区",
                label: "秀峰区",
                spell: "xiufengqu",
                abb: "xfq"
              },
              {
                id: 2343,
                value: "叠彩区",
                label: "叠彩区",
                spell: "diecaiqu",
                abb: "dcq"
              },
              {
                id: 2344,
                value: "象山区",
                label: "象山区",
                spell: "xiangshanqu",
                abb: "xsq"
              },
              {
                id: 2345,
                value: "七星区",
                label: "七星区",
                spell: "qixingqu",
                abb: "qxq"
              },
              {
                id: 2346,
                value: "雁山区",
                label: "雁山区",
                spell: "yanshanqu",
                abb: "ysq"
              },
              {
                id: 2347,
                value: "阳朔县",
                label: "阳朔县",
                spell: "yangshuoxian",
                abb: "ysx"
              },
              {
                id: 2348,
                value: "临桂县",
                label: "临桂县",
                spell: "linguixian",
                abb: "lgx"
              },
              {
                id: 2349,
                value: "灵川县",
                label: "灵川县",
                spell: "lingchuanxian",
                abb: "lcx"
              },
              {
                id: 2350,
                value: "全州县",
                label: "全州县",
                spell: "quanzhouxian",
                abb: "qzx"
              },
              {
                id: 2351,
                value: "兴安县",
                label: "兴安县",
                spell: "xinganxian",
                abb: "xax"
              },
              {
                id: 2352,
                value: "永福县",
                label: "永福县",
                spell: "yongfuxian",
                abb: "yfx"
              },
              {
                id: 2353,
                value: "灌阳县",
                label: "灌阳县",
                spell: "guanyangxian",
                abb: "gyx"
              },
              {
                id: 2354,
                value: "龙胜各族自治县",
                label: "龙胜各族自治县",
                spell: "longshenggezuzizhixian",
                abb: "lsgzzzx"
              },
              {
                id: 2355,
                value: "资源县",
                label: "资源县",
                spell: "ziyuanxian",
                abb: "zyx"
              },
              {
                id: 2356,
                value: "平乐县",
                label: "平乐县",
                spell: "pinglexian",
                abb: "plx"
              },
              {
                id: 2357,
                value: "荔蒲县",
                label: "荔蒲县",
                spell: "lipuxian",
                abb: "lpx"
              },
              {
                id: 2358,
                value: "恭城瑶族自治县",
                label: "恭城瑶族自治县",
                spell: "gongchengyaozuzizhixian",
                abb: "gcyzzzx"
              }
            ]
          },
          {
            id: 2359,
            value: "梧州市",
            label: "梧州市",
            spell: "wuzhoushi",
            abb: "wzs",
            children: [
              {
                id: 2361,
                value: "万秀区",
                label: "万秀区",
                spell: "wanxiuqu",
                abb: "wxq"
              },
              {
                id: 2362,
                value: "蝶山区",
                label: "蝶山区",
                spell: "dieshanqu",
                abb: "dsq"
              },
              {
                id: 2363,
                value: "长洲区",
                label: "长洲区",
                spell: "changzhouqu",
                abb: "czq"
              },
              {
                id: 2364,
                value: "苍梧县",
                label: "苍梧县",
                spell: "cangwuxian",
                abb: "cwx"
              },
              {
                id: 2365,
                value: "藤县",
                label: "藤县",
                spell: "tengxian",
                abb: "tx"
              },
              {
                id: 2366,
                value: "蒙山县",
                label: "蒙山县",
                spell: "mengshanxian",
                abb: "msx"
              },
              {
                id: 2367,
                value: "岑溪市",
                label: "岑溪市",
                spell: "cenxishi",
                abb: "cxs"
              }
            ]
          },
          {
            id: 2368,
            value: "北海市",
            label: "北海市",
            spell: "beihaishi",
            abb: "bhs",
            children: [
              {
                id: 2370,
                value: "海城区",
                label: "海城区",
                spell: "haichengqu",
                abb: "hcq"
              },
              {
                id: 2371,
                value: "银海区",
                label: "银海区",
                spell: "yinhaiqu",
                abb: "yhq"
              },
              {
                id: 2372,
                value: "铁山港区",
                label: "铁山港区",
                spell: "tieshangangqu",
                abb: "tsgq"
              },
              {
                id: 2373,
                value: "合浦县",
                label: "合浦县",
                spell: "hepuxian",
                abb: "hpx"
              }
            ]
          },
          {
            id: 2374,
            value: "防城港市",
            label: "防城港市",
            spell: "fangchenggangshi",
            abb: "fcgs",
            children: [
              {
                id: 2376,
                value: "港口区",
                label: "港口区",
                spell: "gangkouqu",
                abb: "gkq"
              },
              {
                id: 2377,
                value: "防城区",
                label: "防城区",
                spell: "fangchengqu",
                abb: "fcq"
              },
              {
                id: 2378,
                value: "上思县",
                label: "上思县",
                spell: "shangsixian",
                abb: "ssx"
              },
              {
                id: 2379,
                value: "东兴市",
                label: "东兴市",
                spell: "dongxingshi",
                abb: "dxs"
              }
            ]
          },
          {
            id: 2380,
            value: "钦州市",
            label: "钦州市",
            spell: "qinzhoushi",
            abb: "qzs",
            children: [
              {
                id: 2382,
                value: "钦南区",
                label: "钦南区",
                spell: "qinnanqu",
                abb: "qnq"
              },
              {
                id: 2383,
                value: "钦北区",
                label: "钦北区",
                spell: "qinbeiqu",
                abb: "qbq"
              },
              {
                id: 2384,
                value: "灵山县",
                label: "灵山县",
                spell: "lingshanxian",
                abb: "lsx"
              },
              {
                id: 2385,
                value: "浦北县",
                label: "浦北县",
                spell: "pubeixian",
                abb: "pbx"
              }
            ]
          },
          {
            id: 2386,
            value: "贵港市",
            label: "贵港市",
            spell: "guigangshi",
            abb: "ggs",
            children: [
              {
                id: 2388,
                value: "港北区",
                label: "港北区",
                spell: "gangbeiqu",
                abb: "gbq"
              },
              {
                id: 2389,
                value: "港南区",
                label: "港南区",
                spell: "gangnanqu",
                abb: "gnq"
              },
              {
                id: 2390,
                value: "覃塘区",
                label: "覃塘区",
                spell: "tantangqu",
                abb: "ttq"
              },
              {
                id: 2391,
                value: "平南县",
                label: "平南县",
                spell: "pingnanxian",
                abb: "pnx"
              },
              {
                id: 2392,
                value: "桂平市",
                label: "桂平市",
                spell: "guipingshi",
                abb: "gps"
              }
            ]
          },
          {
            id: 2393,
            value: "玉林市",
            label: "玉林市",
            spell: "yulinshi",
            abb: "yls",
            children: [
              {
                id: 2395,
                value: "玉州区",
                label: "玉州区",
                spell: "yuzhouqu",
                abb: "yzq"
              },
              {
                id: 2396,
                value: "容县",
                label: "容县",
                spell: "rongxian",
                abb: "rx"
              },
              {
                id: 2397,
                value: "陆川县",
                label: "陆川县",
                spell: "luchuanxian",
                abb: "lcx"
              },
              {
                id: 2398,
                value: "博白县",
                label: "博白县",
                spell: "bobaixian",
                abb: "bbx"
              },
              {
                id: 2399,
                value: "兴业县",
                label: "兴业县",
                spell: "xingyexian",
                abb: "xyx"
              },
              {
                id: 2400,
                value: "北流市",
                label: "北流市",
                spell: "beiliushi",
                abb: "bls"
              }
            ]
          },
          {
            id: 2401,
            value: "百色市",
            label: "百色市",
            spell: "baiseshi",
            abb: "bss",
            children: [
              {
                id: 2403,
                value: "右江区",
                label: "右江区",
                spell: "youjiangqu",
                abb: "yjq"
              },
              {
                id: 2404,
                value: "田阳县",
                label: "田阳县",
                spell: "tianyangxian",
                abb: "tyx"
              },
              {
                id: 2405,
                value: "田东县",
                label: "田东县",
                spell: "tiandongxian",
                abb: "tdx"
              },
              {
                id: 2406,
                value: "平果县",
                label: "平果县",
                spell: "pingguoxian",
                abb: "pgx"
              },
              {
                id: 2407,
                value: "德保县",
                label: "德保县",
                spell: "debaoxian",
                abb: "dbx"
              },
              {
                id: 2408,
                value: "靖西县",
                label: "靖西县",
                spell: "jingxixian",
                abb: "jxx"
              },
              {
                id: 2409,
                value: "那坡县",
                label: "那坡县",
                spell: "neipoxian",
                abb: "npx"
              },
              {
                id: 2410,
                value: "凌云县",
                label: "凌云县",
                spell: "lingyunxian",
                abb: "lyx"
              },
              {
                id: 2411,
                value: "乐业县",
                label: "乐业县",
                spell: "leyexian",
                abb: "lyx"
              },
              {
                id: 2412,
                value: "田林县",
                label: "田林县",
                spell: "tianlinxian",
                abb: "tlx"
              },
              {
                id: 2413,
                value: "西林县",
                label: "西林县",
                spell: "xilinxian",
                abb: "xlx"
              },
              {
                id: 2414,
                value: "隆林各族自治县",
                label: "隆林各族自治县",
                spell: "longlingezuzizhixian",
                abb: "llgzzzx"
              }
            ]
          },
          {
            id: 2415,
            value: "贺州市",
            label: "贺州市",
            spell: "hezhoushi",
            abb: "hzs",
            children: [
              {
                id: 2417,
                value: "八步区",
                label: "八步区",
                spell: "babuqu",
                abb: "bbq"
              },
              {
                id: 2418,
                value: "昭平县",
                label: "昭平县",
                spell: "zhaopingxian",
                abb: "zpx"
              },
              {
                id: 2419,
                value: "钟山县",
                label: "钟山县",
                spell: "zhongshanxian",
                abb: "zsx"
              },
              {
                id: 2420,
                value: "富川瑶族自治县",
                label: "富川瑶族自治县",
                spell: "fuchuanyaozuzizhixian",
                abb: "fcyzzzx"
              }
            ]
          },
          {
            id: 2421,
            value: "河池市",
            label: "河池市",
            spell: "hechishi",
            abb: "hcs",
            children: [
              {
                id: 2423,
                value: "金城江区",
                label: "金城江区",
                spell: "jinchengjiangqu",
                abb: "jcjq"
              },
              {
                id: 2424,
                value: "南丹县",
                label: "南丹县",
                spell: "nandanxian",
                abb: "ndx"
              },
              {
                id: 2425,
                value: "天峨县",
                label: "天峨县",
                spell: "tianexian",
                abb: "tex"
              },
              {
                id: 2426,
                value: "凤山县",
                label: "凤山县",
                spell: "fengshanxian",
                abb: "fsx"
              },
              {
                id: 2427,
                value: "东兰县",
                label: "东兰县",
                spell: "donglanxian",
                abb: "dlx"
              },
              {
                id: 2428,
                value: "罗城仫佬族自治县",
                label: "罗城仫佬族自治县",
                spell: "luochengmulaozuzizhixian",
                abb: "lcmlzzzx"
              },
              {
                id: 2429,
                value: "环江毛南族自治县",
                label: "环江毛南族自治县",
                spell: "huanjiangmaonanzuzizhixian",
                abb: "hjmnzzzx"
              },
              {
                id: 2430,
                value: "巴马瑶族自治县",
                label: "巴马瑶族自治县",
                spell: "bamayaozuzizhixian",
                abb: "bmyzzzx"
              },
              {
                id: 2431,
                value: "都安瑶族自治县",
                label: "都安瑶族自治县",
                spell: "douanyaozuzizhixian",
                abb: "dayzzzx"
              },
              {
                id: 2432,
                value: "大化瑶族自治县",
                label: "大化瑶族自治县",
                spell: "dahuayaozuzizhixian",
                abb: "dhyzzzx"
              },
              {
                id: 2433,
                value: "宜州市",
                label: "宜州市",
                spell: "yizhoushi",
                abb: "yzs"
              }
            ]
          },
          {
            id: 2434,
            value: "来宾市",
            label: "来宾市",
            spell: "laibinshi",
            abb: "lbs",
            children: [
              {
                id: 2436,
                value: "兴宾区",
                label: "兴宾区",
                spell: "xingbinqu",
                abb: "xbq"
              },
              {
                id: 2437,
                value: "忻城县",
                label: "忻城县",
                spell: "xinchengxian",
                abb: "xcx"
              },
              {
                id: 2438,
                value: "象州县",
                label: "象州县",
                spell: "xiangzhouxian",
                abb: "xzx"
              },
              {
                id: 2439,
                value: "武宣县",
                label: "武宣县",
                spell: "wuxuanxian",
                abb: "wxx"
              },
              {
                id: 2440,
                value: "金秀瑶族自治县",
                label: "金秀瑶族自治县",
                spell: "jinxiuyaozuzizhixian",
                abb: "jxyzzzx"
              },
              {
                id: 2441,
                value: "合山市",
                label: "合山市",
                spell: "heshanshi",
                abb: "hss"
              }
            ]
          },
          {
            id: 2442,
            value: "崇左市",
            label: "崇左市",
            spell: "chongzuoshi",
            abb: "czs",
            children: [
              {
                id: 2444,
                value: "江洲区",
                label: "江洲区",
                spell: "jiangzhouqu",
                abb: "jzq"
              },
              {
                id: 2445,
                value: "扶绥县",
                label: "扶绥县",
                spell: "fusuixian",
                abb: "fsx"
              },
              {
                id: 2446,
                value: "宁明县",
                label: "宁明县",
                spell: "ningmingxian",
                abb: "nmx"
              },
              {
                id: 2447,
                value: "龙州县",
                label: "龙州县",
                spell: "longzhouxian",
                abb: "lzx"
              },
              {
                id: 2448,
                value: "大新县",
                label: "大新县",
                spell: "daxinxian",
                abb: "dxx"
              },
              {
                id: 2449,
                value: "天等县",
                label: "天等县",
                spell: "tiandengxian",
                abb: "tdx"
              },
              {
                id: 2450,
                value: "凭祥市",
                label: "凭祥市",
                spell: "pingxiangshi",
                abb: "pxs"
              }
            ]
          }
        ]
      },
      {
        id: 2451,
        value: "海南省",
        label: "海南省",
        spell: "hainansheng",
        abb: "hns",
        children: [
          {
            id: 2452,
            value: "海口市",
            label: "海口市",
            spell: "haikoushi",
            abb: "hks",
            children: [
              {
                id: 2454,
                value: "秀英区",
                label: "秀英区",
                spell: "xiuyingqu",
                abb: "xyq"
              },
              {
                id: 2455,
                value: "龙华区",
                label: "龙华区",
                spell: "longhuaqu",
                abb: "lhq"
              },
              {
                id: 2456,
                value: "琼山区",
                label: "琼山区",
                spell: "qiongshanqu",
                abb: "qsq"
              },
              {
                id: 2457,
                value: "美兰区",
                label: "美兰区",
                spell: "meilanqu",
                abb: "mlq"
              }
            ]
          },
          {
            id: 2458,
            value: "三亚市",
            label: "三亚市",
            spell: "sanyashi",
            abb: "sys",
            children: [
              {
                id: 2459,
                value: "三亚市",
                label: "三亚市",
                spell: "sanyashi",
                abb: "sys"
              }
            ]
          },
          {
            id: 2460,
            value: "五指山市",
            label: "五指山市",
            spell: "wuzhishanshi",
            abb: "wzss",
            children: [
              {
                id: 2461,
                value: "五指山市",
                label: "五指山市",
                spell: "wuzhishanshi",
                abb: "wzss"
              }
            ]
          },
          {
            id: 24620,
            value: "琼海市",
            label: "琼海市",
            spell: "wuzhishanshi",
            abb: "qhs",
            children: [
              {
                id: 24621,
                value: "琼海市",
                label: "琼海市",
                spell: "wuzhishanshi",
                abb: "qhs"
              }
            ]
          },
          {
            id: 24622,
            value: "儋州市",
            label: "儋州市",
            spell: "danzhoushi",
            abb: "dzs",
            children: [
              {
                id: 24623,
                value: "儋州市",
                label: "儋州市",
                spell: "danzhoushi",
                abb: "dzs"
              }
            ]
          },
          {
            id: 24624,
            value: "文昌市",
            label: "文昌市",
            spell: "wenchangshi",
            abb: "wcs",
            children: [
              {
                id: 24625,
                value: "文昌市",
                label: "文昌市",
                spell: "wenchangshi",
                abb: "wcs"
              }
            ]
          },
          {
            id: 24626,
            value: "万宁市",
            label: "万宁市",
            spell: "wanningshi",
            abb: "wns",
            children: [
              {
                id: 24627,
                value: "万宁市",
                label: "万宁市",
                spell: "wanningshi",
                abb: "wns"
              }
            ]
          },
          {
            id: 24628,
            value: "东方市",
            label: "东方市",
            spell: "dongfangshi",
            abb: "dfs",
            children: [
              {
                id: 24629,
                value: "东方市",
                label: "东方市",
                spell: "dongfangshi",
                abb: "dfs"
              }
            ]
          },
          {
            id: 24630,
            value: "定安县",
            label: "定安县",
            spell: "dinganxian",
            abb: "dax",
            children: [
              {
                id: 24631,
                value: "定安县",
                label: "定安县",
                spell: "dinganxian",
                abb: "dax"
              }
            ]
          },
          {
            id: 24632,
            value: "屯昌县",
            label: "屯昌县",
            spell: "tunchangxian",
            abb: "tcx",
            children: [
              {
                id: 24633,
                value: "屯昌县",
                label: "屯昌县",
                spell: "tunchangxian",
                abb: "tcx"
              }
            ]
          },
          {
            id: 24634,
            value: "澄迈县",
            label: "澄迈县",
            spell: "chengmaixian",
            abb: "cmx",
            children: [
              {
                id: 24635,
                value: "澄迈县",
                label: "澄迈县",
                spell: "chengmaixian",
                abb: "cmx"
              }
            ]
          },
          {
            id: 24634,
            value: "临高县",
            label: "临高县",
            spell: "lingaoxian",
            abb: "lgx",
            children: [
              {
                id: 24635,
                value: "临高县",
                label: "临高县",
                spell: "lingaoxian",
                abb: "lgx"
              }
            ]
          },
          {
            id: 24636,
            value: "白沙黎族自治县",
            label: "白沙黎族自治县",
            spell: "baishalizuzizhixian",
            abb: "bslzzzx",
            children: [
              {
                id: 24637,
                value: "白沙黎族自治县",
                label: "白沙黎族自治县",
                spell: "baishalizuzizhixian",
                abb: "bslzzzx"
              }
            ]
          },
          {
            id: 24638,
            value: "昌江黎族自治县",
            label: "昌江黎族自治县",
            spell: "changjianglizuzizhixian",
            abb: "cjlzzzx",
            children: [
              {
                id: 24639,
                value: "昌江黎族自治县",
                label: "昌江黎族自治县",
                spell: "changjianglizuzizhixian",
                abb: "cjlzzzx"
              }
            ]
          },
          {
            id: 24640,
            value: "乐东黎族自治县",
            label: "乐东黎族自治县",
            spell: "ledonglizuzizhixian",
            abb: "ldlzzzx",
            children: [
              {
                id: 24641,
                value: "乐东黎族自治县",
                label: "乐东黎族自治县",
                spell: "ledonglizuzizhixian",
                abb: "ldlzzzx"
              }
            ]
          },
          {
            id: 24642,
            value: "陵水黎族自治县",
            label: "陵水黎族自治县",
            spell: "lingshuilizuzizhixian",
            abb: "lslzzzx",
            children: [
              {
                id: 24643,
                value: "陵水黎族自治县",
                label: "陵水黎族自治县",
                spell: "lingshuilizuzizhixian",
                abb: "lslzzzx"
              }
            ]
          },
          {
            id: 24644,
            value: "保亭黎族苗族自治县",
            label: "保亭黎族苗族自治县",
            spell: "baotinglizumiaozuzizhixian",
            abb: "btlzmzzzx",
            children: [
              {
                id: 24645,
                value: "保亭黎族苗族自治县",
                label: "保亭黎族苗族自治县",
                spell: "baotinglizumiaozuzizhixian",
                abb: "btlzmzzzx"
              }
            ]
          },
          {
            id: 24646,
            value: "琼中黎族苗族自治县",
            label: "琼中黎族苗族自治县",
            spell: "qiongzhonglizumiaozuzizhixian",
            abb: "qzlzmzzzx",
            children: [
              {
                id: 24647,
                value: "琼中黎族苗族自治县",
                label: "琼中黎族苗族自治县",
                spell: "qiongzhonglizumiaozuzizhixian",
                abb: "qzlzmzzzx"
              }
            ]
          },
          {
            id: 24648,
            value: "西沙群岛",
            label: "西沙群岛",
            spell: "xishaqundao",
            abb: "xsqd",
            children: [
              {
                id: 2477,
                value: "西沙群岛",
                label: "西沙群岛",
                spell: "xishaqundao",
                abb: "xsqd"
              }
            ]
          },
          {
            id: 24649,
            value: "南沙群岛",
            label: "南沙群岛",
            spell: "nanshaqundao",
            abb: "nsqd",
            children: [
              {
                id: 2478,
                value: "南沙群岛",
                label: "南沙群岛",
                spell: "nanshaqundao",
                abb: "nsqd"
              }
            ]
          },
          {
            id: 24650,
            value: "中沙群岛的岛礁及其海域",
            label: "中沙群岛的岛礁及其海域",
            spell: "zhongshaqundaodedaojiaojiqihaiyu",
            abb: "zsqdddjjqhy",
            children: [
              {
                id: 24651,
                value: "中沙群岛的岛礁及其海域",
                label: "中沙群岛的岛礁及其海域",
                spell: "zhongshaqundaodedaojiaojiqihaiyu",
                abb: "zsqdddjjqhy"
              }
            ]
          }
        ]
      },
      {
        id: 2480,
        value: "重庆市",
        label: "重庆市",
        spell: "chongqingshi",
        abb: "cqs",
        children: [
          {
            id: 2481,
            value: "重庆市",
            label: "重庆市",
            spell: "chongqingshi",
            abb: "cqs",
            children: [
              {
                id: 2482,
                value: "万州区",
                label: "万州区",
                spell: "wanzhouqu",
                abb: "wzq"
              },
              {
                id: 2483,
                value: "涪陵区",
                label: "涪陵区",
                spell: "fulingqu",
                abb: "flq"
              },
              {
                id: 2484,
                value: "渝中区",
                label: "渝中区",
                spell: "yuzhongqu",
                abb: "yzq"
              },
              {
                id: 2485,
                value: "大渡口区",
                label: "大渡口区",
                spell: "dadukouqu",
                abb: "ddkq"
              },
              {
                id: 2486,
                value: "江北区",
                label: "江北区",
                spell: "jiangbeiqu",
                abb: "jbq"
              },
              {
                id: 2487,
                value: "沙坪坝区",
                label: "沙坪坝区",
                spell: "shapingbaqu",
                abb: "spbq"
              },
              {
                id: 2488,
                value: "九龙坡区",
                label: "九龙坡区",
                spell: "jiulongpoqu",
                abb: "jlpq"
              },
              {
                id: 2489,
                value: "南岸区",
                label: "南岸区",
                spell: "nananqu",
                abb: "naq"
              },
              {
                id: 2490,
                value: "北碚区",
                label: "北碚区",
                spell: "beibeiqu",
                abb: "bbq"
              },
              {
                id: 2491,
                value: "万盛区",
                label: "万盛区",
                spell: "wanshengqu",
                abb: "wsq"
              },
              {
                id: 2492,
                value: "双桥区",
                label: "双桥区",
                spell: "shuangqiaoqu",
                abb: "sqq"
              },
              {
                id: 2493,
                value: "渝北区",
                label: "渝北区",
                spell: "yubeiqu",
                abb: "ybq"
              },
              {
                id: 2494,
                value: "巴南区",
                label: "巴南区",
                spell: "bananqu",
                abb: "bnq"
              },
              {
                id: 2495,
                value: "黔江区",
                label: "黔江区",
                spell: "qianjiangqu",
                abb: "qjq"
              },
              {
                id: 2496,
                value: "长寿区",
                label: "长寿区",
                spell: "changshouqu",
                abb: "csq"
              },
              {
                id: 2497,
                value: "江津区",
                label: "江津区",
                spell: "jiangjinqu",
                abb: "jjq"
              },
              {
                id: 2498,
                value: "合川区",
                label: "合川区",
                spell: "hechuanqu",
                abb: "hcq"
              },
              {
                id: 2499,
                value: "永川区",
                label: "永川区",
                spell: "yongchuanqu",
                abb: "ycq"
              },
              {
                id: 2500,
                value: "南川区",
                label: "南川区",
                spell: "nanchuanqu",
                abb: "ncq"
              }
            ]
          }
        ]
      },
      {
        id: 2523,
        value: "四川省",
        label: "四川省",
        spell: "sichuansheng",
        abb: "scs",
        children: [
          {
            id: 2524,
            value: "成都市",
            label: "成都市",
            spell: "chengdoushi",
            abb: "cds",
            children: [
              {
                id: 2526,
                value: "锦江区",
                label: "锦江区",
                spell: "jinjiangqu",
                abb: "jjq"
              },
              {
                id: 2527,
                value: "青羊区",
                label: "青羊区",
                spell: "qingyangqu",
                abb: "qyq"
              },
              {
                id: 2528,
                value: "金牛区",
                label: "金牛区",
                spell: "jinniuqu",
                abb: "jnq"
              },
              {
                id: 2529,
                value: "武侯区",
                label: "武侯区",
                spell: "wuhouqu",
                abb: "whq"
              },
              {
                id: 2530,
                value: "成华区",
                label: "成华区",
                spell: "chenghuaqu",
                abb: "chq"
              },
              {
                id: 2531,
                value: "龙泉驿区",
                label: "龙泉驿区",
                spell: "longquanyiqu",
                abb: "lqyq"
              },
              {
                id: 2532,
                value: "青白江区",
                label: "青白江区",
                spell: "qingbaijiangqu",
                abb: "qbjq"
              },
              {
                id: 2533,
                value: "新都区",
                label: "新都区",
                spell: "xindouqu",
                abb: "xdq"
              },
              {
                id: 2534,
                value: "温江区",
                label: "温江区",
                spell: "wenjiangqu",
                abb: "wjq"
              },
              {
                id: 2535,
                value: "金堂县",
                label: "金堂县",
                spell: "jintangxian",
                abb: "jtx"
              },
              {
                id: 2536,
                value: "双流县",
                label: "双流县",
                spell: "shuangliuxian",
                abb: "slx"
              },
              {
                id: 2537,
                value: "郫县",
                label: "郫县",
                spell: "pixian",
                abb: "px"
              },
              {
                id: 2538,
                value: "大邑县",
                label: "大邑县",
                spell: "dayixian",
                abb: "dyx"
              },
              {
                id: 2539,
                value: "蒲江县",
                label: "蒲江县",
                spell: "pujiangxian",
                abb: "pjx"
              },
              {
                id: 2540,
                value: "新津县",
                label: "新津县",
                spell: "xinjinxian",
                abb: "xjx"
              },
              {
                id: 2541,
                value: "都江堰市",
                label: "都江堰市",
                spell: "doujiangyanshi",
                abb: "djys"
              },
              {
                id: 2542,
                value: "彭州市",
                label: "彭州市",
                spell: "pengzhoushi",
                abb: "pzs"
              },
              {
                id: 2543,
                value: "邛崃市",
                label: "邛崃市",
                spell: "qionglaishi",
                abb: "qls"
              },
              {
                id: 2544,
                value: "崇州市",
                label: "崇州市",
                spell: "chongzhoushi",
                abb: "czs"
              }
            ]
          },
          {
            id: 2545,
            value: "自贡市",
            label: "自贡市",
            spell: "zigongshi",
            abb: "zgs",
            children: [
              {
                id: 2547,
                value: "自流井区",
                label: "自流井区",
                spell: "ziliujingqu",
                abb: "zljq"
              },
              {
                id: 2548,
                value: "贡井区",
                label: "贡井区",
                spell: "gongjingqu",
                abb: "gjq"
              },
              {
                id: 2549,
                value: "大安区",
                label: "大安区",
                spell: "daanqu",
                abb: "daq"
              },
              {
                id: 2550,
                value: "沿滩区",
                label: "沿滩区",
                spell: "yantanqu",
                abb: "ytq"
              },
              {
                id: 2551,
                value: "荣县",
                label: "荣县",
                spell: "rongxian",
                abb: "rx"
              },
              {
                id: 2552,
                value: "富顺县",
                label: "富顺县",
                spell: "fushunxian",
                abb: "fsx"
              }
            ]
          },
          {
            id: 2553,
            value: "攀枝花市",
            label: "攀枝花市",
            spell: "panzhihuashi",
            abb: "pzhs",
            children: [
              {
                id: 2555,
                value: "东区",
                label: "东区",
                spell: "dongqu",
                abb: "dq"
              },
              {
                id: 2556,
                value: "西区",
                label: "西区",
                spell: "xiqu",
                abb: "xq"
              },
              {
                id: 2557,
                value: "仁和区",
                label: "仁和区",
                spell: "renhequ",
                abb: "rhq"
              },
              {
                id: 2558,
                value: "米易县",
                label: "米易县",
                spell: "miyixian",
                abb: "myx"
              },
              {
                id: 2559,
                value: "盐边县",
                label: "盐边县",
                spell: "yanbianxian",
                abb: "ybx"
              }
            ]
          },
          {
            id: 2560,
            value: "泸州市",
            label: "泸州市",
            spell: "luzhoushi",
            abb: "lzs",
            children: [
              {
                id: 2562,
                value: "江阳区",
                label: "江阳区",
                spell: "jiangyangqu",
                abb: "jyq"
              },
              {
                id: 2563,
                value: "纳溪区",
                label: "纳溪区",
                spell: "naxiqu",
                abb: "nxq"
              },
              {
                id: 2564,
                value: "龙马潭区",
                label: "龙马潭区",
                spell: "longmatanqu",
                abb: "lmtq"
              },
              {
                id: 2565,
                value: "泸县",
                label: "泸县",
                spell: "luxian",
                abb: "lx"
              },
              {
                id: 2566,
                value: "合江县",
                label: "合江县",
                spell: "hejiangxian",
                abb: "hjx"
              },
              {
                id: 2567,
                value: "叙永县",
                label: "叙永县",
                spell: "xuyongxian",
                abb: "xyx"
              },
              {
                id: 2568,
                value: "古蔺县",
                label: "古蔺县",
                spell: "gulinxian",
                abb: "glx"
              }
            ]
          },
          {
            id: 2569,
            value: "德阳市",
            label: "德阳市",
            spell: "deyangshi",
            abb: "dys",
            children: [
              {
                id: 2571,
                value: "旌阳区",
                label: "旌阳区",
                spell: "jingyangqu",
                abb: "jyq"
              },
              {
                id: 2572,
                value: "中江县",
                label: "中江县",
                spell: "zhongjiangxian",
                abb: "zjx"
              },
              {
                id: 2573,
                value: "罗江县",
                label: "罗江县",
                spell: "luojiangxian",
                abb: "ljx"
              },
              {
                id: 2574,
                value: "广汉市",
                label: "广汉市",
                spell: "guanghanshi",
                abb: "ghs"
              },
              {
                id: 2575,
                value: "什邡市",
                label: "什邡市",
                spell: "shenfangshi",
                abb: "sfs"
              },
              {
                id: 2576,
                value: "绵竹市",
                label: "绵竹市",
                spell: "mianzhushi",
                abb: "mzs"
              }
            ]
          },
          {
            id: 2577,
            value: "绵阳市",
            label: "绵阳市",
            spell: "mianyangshi",
            abb: "mys",
            children: [
              {
                id: 2579,
                value: "涪城区",
                label: "涪城区",
                spell: "fuchengqu",
                abb: "fcq"
              },
              {
                id: 2580,
                value: "游仙区",
                label: "游仙区",
                spell: "youxianqu",
                abb: "yxq"
              },
              {
                id: 2581,
                value: "三台县",
                label: "三台县",
                spell: "santaixian",
                abb: "stx"
              },
              {
                id: 2582,
                value: "盐亭县",
                label: "盐亭县",
                spell: "yantingxian",
                abb: "ytx"
              },
              {
                id: 2583,
                value: "安县",
                label: "安县",
                spell: "anxian",
                abb: "ax"
              },
              {
                id: 2584,
                value: "梓潼县",
                label: "梓潼县",
                spell: "zitongxian",
                abb: "ztx"
              },
              {
                id: 2585,
                value: "北川羌族自治县",
                label: "北川羌族自治县",
                spell: "beichuanqiangzuzizhixian",
                abb: "bcqzzzx"
              },
              {
                id: 2586,
                value: "平武县",
                label: "平武县",
                spell: "pingwuxian",
                abb: "pwx"
              },
              {
                id: 2587,
                value: "江油市",
                label: "江油市",
                spell: "jiangyoushi",
                abb: "jys"
              }
            ]
          },
          {
            id: 2588,
            value: "广元市",
            label: "广元市",
            spell: "guangyuanshi",
            abb: "gys",
            children: [
              {
                id: 2590,
                value: "市中区",
                label: "市中区",
                spell: "shizhongqu",
                abb: "szq"
              },
              {
                id: 2591,
                value: "元坝区",
                label: "元坝区",
                spell: "yuanbaqu",
                abb: "ybq"
              },
              {
                id: 2592,
                value: "朝天区",
                label: "朝天区",
                spell: "chaotianqu",
                abb: "ctq"
              },
              {
                id: 2593,
                value: "旺苍县",
                label: "旺苍县",
                spell: "wangcangxian",
                abb: "wcx"
              },
              {
                id: 2594,
                value: "青川县",
                label: "青川县",
                spell: "qingchuanxian",
                abb: "qcx"
              },
              {
                id: 2595,
                value: "剑阁县",
                label: "剑阁县",
                spell: "jiangexian",
                abb: "jgx"
              },
              {
                id: 2596,
                value: "苍溪县",
                label: "苍溪县",
                spell: "cangxixian",
                abb: "cxx"
              }
            ]
          },
          {
            id: 2597,
            value: "遂宁市",
            label: "遂宁市",
            spell: "suiningshi",
            abb: "sns",
            children: [
              {
                id: 2599,
                value: "船山区",
                label: "船山区",
                spell: "chuanshanqu",
                abb: "csq"
              },
              {
                id: 2600,
                value: "安居区",
                label: "安居区",
                spell: "anjuqu",
                abb: "ajq"
              },
              {
                id: 2601,
                value: "蓬溪县",
                label: "蓬溪县",
                spell: "pengxixian",
                abb: "pxx"
              },
              {
                id: 2602,
                value: "射洪县",
                label: "射洪县",
                spell: "shehongxian",
                abb: "shx"
              },
              {
                id: 2603,
                value: "大英县",
                label: "大英县",
                spell: "dayingxian",
                abb: "dyx"
              }
            ]
          },
          {
            id: 2604,
            value: "内江市",
            label: "内江市",
            spell: "neijiangshi",
            abb: "njs",
            children: [
              {
                id: 2606,
                value: "市中区",
                label: "市中区",
                spell: "shizhongqu",
                abb: "szq"
              },
              {
                id: 2607,
                value: "东兴区",
                label: "东兴区",
                spell: "dongxingqu",
                abb: "dxq"
              },
              {
                id: 2608,
                value: "威远县",
                label: "威远县",
                spell: "weiyuanxian",
                abb: "wyx"
              },
              {
                id: 2609,
                value: "资中县",
                label: "资中县",
                spell: "zizhongxian",
                abb: "zzx"
              },
              {
                id: 2610,
                value: "隆昌县",
                label: "隆昌县",
                spell: "longchangxian",
                abb: "lcx"
              }
            ]
          },
          {
            id: 2611,
            value: "乐山市",
            label: "乐山市",
            spell: "leshanshi",
            abb: "lss",
            children: [
              {
                id: 2613,
                value: "市中区",
                label: "市中区",
                spell: "shizhongqu",
                abb: "szq"
              },
              {
                id: 2614,
                value: "沙湾区",
                label: "沙湾区",
                spell: "shawanqu",
                abb: "swq"
              },
              {
                id: 2615,
                value: "五通桥区",
                label: "五通桥区",
                spell: "wutongqiaoqu",
                abb: "wtqq"
              },
              {
                id: 2616,
                value: "金口河区",
                label: "金口河区",
                spell: "jinkouhequ",
                abb: "jkhq"
              },
              {
                id: 2617,
                value: "犍为县",
                label: "犍为县",
                spell: "jianweixian",
                abb: "jwx"
              },
              {
                id: 2618,
                value: "井研县",
                label: "井研县",
                spell: "jingyanxian",
                abb: "jyx"
              },
              {
                id: 2619,
                value: "夹江县",
                label: "夹江县",
                spell: "jiajiangxian",
                abb: "jjx"
              },
              {
                id: 2620,
                value: "沐川县",
                label: "沐川县",
                spell: "muchuanxian",
                abb: "mcx"
              },
              {
                id: 2621,
                value: "峨边彝族自治县",
                label: "峨边彝族自治县",
                spell: "ebianyizuzizhixian",
                abb: "ebyzzzx"
              },
              {
                id: 2622,
                value: "马边彝族自治县",
                label: "马边彝族自治县",
                spell: "mabianyizuzizhixian",
                abb: "mbyzzzx"
              },
              {
                id: 2623,
                value: "峨眉山市",
                label: "峨眉山市",
                spell: "emeishanshi",
                abb: "emss"
              }
            ]
          },
          {
            id: 2624,
            value: "南充市",
            label: "南充市",
            spell: "nanchongshi",
            abb: "ncs",
            children: [
              {
                id: 2626,
                value: "顺庆区",
                label: "顺庆区",
                spell: "shunqingqu",
                abb: "sqq"
              },
              {
                id: 2627,
                value: "高坪区",
                label: "高坪区",
                spell: "gaopingqu",
                abb: "gpq"
              },
              {
                id: 2628,
                value: "嘉陵区",
                label: "嘉陵区",
                spell: "jialingqu",
                abb: "jlq"
              },
              {
                id: 2629,
                value: "南部县",
                label: "南部县",
                spell: "nanbuxian",
                abb: "nbx"
              },
              {
                id: 2630,
                value: "营山县",
                label: "营山县",
                spell: "yingshanxian",
                abb: "ysx"
              },
              {
                id: 2631,
                value: "蓬安县",
                label: "蓬安县",
                spell: "penganxian",
                abb: "pax"
              },
              {
                id: 2632,
                value: "仪陇县",
                label: "仪陇县",
                spell: "yilongxian",
                abb: "ylx"
              },
              {
                id: 2633,
                value: "西充县",
                label: "西充县",
                spell: "xichongxian",
                abb: "xcx"
              },
              {
                id: 2634,
                value: "阆中市",
                label: "阆中市",
                spell: "langzhongshi",
                abb: "lzs"
              }
            ]
          },
          {
            id: 2635,
            value: "眉山市",
            label: "眉山市",
            spell: "meishanshi",
            abb: "mss",
            children: [
              {
                id: 2637,
                value: "东坡区",
                label: "东坡区",
                spell: "dongpoqu",
                abb: "dpq"
              },
              {
                id: 2638,
                value: "仁寿县",
                label: "仁寿县",
                spell: "renshouxian",
                abb: "rsx"
              },
              {
                id: 2639,
                value: "彭山县",
                label: "彭山县",
                spell: "pengshanxian",
                abb: "psx"
              },
              {
                id: 2640,
                value: "洪雅县",
                label: "洪雅县",
                spell: "hongyaxian",
                abb: "hyx"
              },
              {
                id: 2641,
                value: "丹棱县",
                label: "丹棱县",
                spell: "danlengxian",
                abb: "dlx"
              },
              {
                id: 2642,
                value: "青神县",
                label: "青神县",
                spell: "qingshenxian",
                abb: "qsx"
              }
            ]
          },
          {
            id: 2643,
            value: "宜宾市",
            label: "宜宾市",
            spell: "yibinshi",
            abb: "ybs",
            children: [
              {
                id: 2645,
                value: "翠屏区",
                label: "翠屏区",
                spell: "cuipingqu",
                abb: "cpq"
              },
              {
                id: 2646,
                value: "宜宾县",
                label: "宜宾县",
                spell: "yibinxian",
                abb: "ybx"
              },
              {
                id: 2647,
                value: "南溪县",
                label: "南溪县",
                spell: "nanxixian",
                abb: "nxx"
              },
              {
                id: 2648,
                value: "江安县",
                label: "江安县",
                spell: "jianganxian",
                abb: "jax"
              },
              {
                id: 2649,
                value: "长宁县",
                label: "长宁县",
                spell: "changningxian",
                abb: "cnx"
              },
              {
                id: 2650,
                value: "高县",
                label: "高县",
                spell: "gaoxian",
                abb: "gx"
              },
              {
                id: 2651,
                value: "珙县",
                label: "珙县",
                spell: "gongxian",
                abb: "gx"
              },
              {
                id: 2652,
                value: "筠连县",
                label: "筠连县",
                spell: "yunlianxian",
                abb: "ylx"
              },
              {
                id: 2653,
                value: "兴文县",
                label: "兴文县",
                spell: "xingwenxian",
                abb: "xwx"
              },
              {
                id: 2654,
                value: "屏山县",
                label: "屏山县",
                spell: "pingshanxian",
                abb: "psx"
              }
            ]
          },
          {
            id: 2655,
            value: "广安市",
            label: "广安市",
            spell: "guanganshi",
            abb: "gas",
            children: [
              {
                id: 2657,
                value: "广安区",
                label: "广安区",
                spell: "guanganqu",
                abb: "gaq"
              },
              {
                id: 2658,
                value: "岳池县",
                label: "岳池县",
                spell: "yuechixian",
                abb: "ycx"
              },
              {
                id: 2659,
                value: "武胜县",
                label: "武胜县",
                spell: "wushengxian",
                abb: "wsx"
              },
              {
                id: 2660,
                value: "邻水县",
                label: "邻水县",
                spell: "linshuixian",
                abb: "lsx"
              },
              {
                id: 2661,
                value: "华蓥市",
                label: "华蓥市",
                spell: "huayingshi",
                abb: "hys"
              }
            ]
          },
          {
            id: 2662,
            value: "达州市",
            label: "达州市",
            spell: "dazhoushi",
            abb: "dzs",
            children: [
              {
                id: 2664,
                value: "通川区",
                label: "通川区",
                spell: "tongchuanqu",
                abb: "tcq"
              },
              {
                id: 2665,
                value: "达县",
                label: "达县",
                spell: "daxian",
                abb: "dx"
              },
              {
                id: 2666,
                value: "宣汉县",
                label: "宣汉县",
                spell: "xuanhanxian",
                abb: "xhx"
              },
              {
                id: 2667,
                value: "开江县",
                label: "开江县",
                spell: "kaijiangxian",
                abb: "kjx"
              },
              {
                id: 2668,
                value: "大竹县",
                label: "大竹县",
                spell: "dazhuxian",
                abb: "dzx"
              },
              {
                id: 2669,
                value: "渠县",
                label: "渠县",
                spell: "quxian",
                abb: "qx"
              },
              {
                id: 2670,
                value: "万源市",
                label: "万源市",
                spell: "wanyuanshi",
                abb: "wys"
              }
            ]
          },
          {
            id: 2671,
            value: "雅安市",
            label: "雅安市",
            spell: "yaanshi",
            abb: "yas",
            children: [
              {
                id: 2673,
                value: "雨城区",
                label: "雨城区",
                spell: "yuchengqu",
                abb: "ycq"
              },
              {
                id: 2674,
                value: "名山县",
                label: "名山县",
                spell: "mingshanxian",
                abb: "msx"
              },
              {
                id: 2675,
                value: "荥经县",
                label: "荥经县",
                spell: "yingjingxian",
                abb: "yjx"
              },
              {
                id: 2676,
                value: "汉源县",
                label: "汉源县",
                spell: "hanyuanxian",
                abb: "hyx"
              },
              {
                id: 2677,
                value: "石棉县",
                label: "石棉县",
                spell: "shimianxian",
                abb: "smx"
              },
              {
                id: 2678,
                value: "天全县",
                label: "天全县",
                spell: "tianquanxian",
                abb: "tqx"
              },
              {
                id: 2679,
                value: "芦山县",
                label: "芦山县",
                spell: "lushanxian",
                abb: "lsx"
              },
              {
                id: 2680,
                value: "宝兴县",
                label: "宝兴县",
                spell: "baoxingxian",
                abb: "bxx"
              }
            ]
          },
          {
            id: 2681,
            value: "巴中市",
            label: "巴中市",
            spell: "bazhongshi",
            abb: "bzs",
            children: [
              {
                id: 2683,
                value: "巴州区",
                label: "巴州区",
                spell: "bazhouqu",
                abb: "bzq"
              },
              {
                id: 2684,
                value: "通江县",
                label: "通江县",
                spell: "tongjiangxian",
                abb: "tjx"
              },
              {
                id: 2685,
                value: "南江县",
                label: "南江县",
                spell: "nanjiangxian",
                abb: "njx"
              },
              {
                id: 2686,
                value: "平昌县",
                label: "平昌县",
                spell: "pingchangxian",
                abb: "pcx"
              }
            ]
          },
          {
            id: 2687,
            value: "资阳市",
            label: "资阳市",
            spell: "ziyangshi",
            abb: "zys",
            children: [
              {
                id: 2689,
                value: "雁江区",
                label: "雁江区",
                spell: "yanjiangqu",
                abb: "yjq"
              },
              {
                id: 2690,
                value: "安岳县",
                label: "安岳县",
                spell: "anyuexian",
                abb: "ayx"
              },
              {
                id: 2691,
                value: "乐至县",
                label: "乐至县",
                spell: "lezhixian",
                abb: "lzx"
              },
              {
                id: 2692,
                value: "简阳市",
                label: "简阳市",
                spell: "jianyangshi",
                abb: "jys"
              }
            ]
          },
          {
            id: 2693,
            value: "阿坝藏族羌族自治州",
            label: "阿坝藏族羌族自治州",
            spell: "abazangzuqiangzuzizhizhou",
            abb: "abzzqzzzz",
            children: [
              {
                id: 2694,
                value: "汶川县",
                label: "汶川县",
                spell: "wenchuanxian",
                abb: "wcx"
              },
              {
                id: 2695,
                value: "理县",
                label: "理县",
                spell: "lixian",
                abb: "lx"
              },
              {
                id: 2696,
                value: "茂县",
                label: "茂县",
                spell: "maoxian",
                abb: "mx"
              },
              {
                id: 2697,
                value: "松潘县",
                label: "松潘县",
                spell: "songpanxian",
                abb: "spx"
              },
              {
                id: 2698,
                value: "九寨沟县",
                label: "九寨沟县",
                spell: "jiuzhaigouxian",
                abb: "jzgx"
              },
              {
                id: 2699,
                value: "金川县",
                label: "金川县",
                spell: "jinchuanxian",
                abb: "jcx"
              },
              {
                id: 2700,
                value: "小金县",
                label: "小金县",
                spell: "xiaojinxian",
                abb: "xjx"
              },
              {
                id: 2701,
                value: "黑水县",
                label: "黑水县",
                spell: "heishuixian",
                abb: "hsx"
              },
              {
                id: 2702,
                value: "马尔康县",
                label: "马尔康县",
                spell: "maerkangxian",
                abb: "mekx"
              },
              {
                id: 2703,
                value: "壤塘县",
                label: "壤塘县",
                spell: "rangtangxian",
                abb: "rtx"
              },
              {
                id: 2704,
                value: "阿坝县",
                label: "阿坝县",
                spell: "abaxian",
                abb: "abx"
              },
              {
                id: 2705,
                value: "若尔盖县",
                label: "若尔盖县",
                spell: "ruoergaixian",
                abb: "regx"
              },
              {
                id: 2706,
                value: "红原县",
                label: "红原县",
                spell: "hongyuanxian",
                abb: "hyx"
              }
            ]
          },
          {
            id: 2707,
            value: "甘孜藏族自治州",
            label: "甘孜藏族自治州",
            spell: "ganzizangzuzizhizhou",
            abb: "gzzzzzz",
            children: [
              {
                id: 2708,
                value: "康定县",
                label: "康定县",
                spell: "kangdingxian",
                abb: "kdx"
              },
              {
                id: 2709,
                value: "泸定县",
                label: "泸定县",
                spell: "ludingxian",
                abb: "ldx"
              },
              {
                id: 2710,
                value: "丹巴县",
                label: "丹巴县",
                spell: "danbaxian",
                abb: "dbx"
              },
              {
                id: 2711,
                value: "九龙县",
                label: "九龙县",
                spell: "jiulongxian",
                abb: "jlx"
              },
              {
                id: 2712,
                value: "雅江县",
                label: "雅江县",
                spell: "yajiangxian",
                abb: "yjx"
              },
              {
                id: 2713,
                value: "道孚县",
                label: "道孚县",
                spell: "daofuxian",
                abb: "dfx"
              },
              {
                id: 2714,
                value: "炉霍县",
                label: "炉霍县",
                spell: "luhuoxian",
                abb: "lhx"
              },
              {
                id: 2715,
                value: "甘孜县",
                label: "甘孜县",
                spell: "ganzixian",
                abb: "gzx"
              },
              {
                id: 2716,
                value: "新龙县",
                label: "新龙县",
                spell: "xinlongxian",
                abb: "xlx"
              },
              {
                id: 2717,
                value: "德格县",
                label: "德格县",
                spell: "degexian",
                abb: "dgx"
              },
              {
                id: 2718,
                value: "白玉县",
                label: "白玉县",
                spell: "baiyuxian",
                abb: "byx"
              },
              {
                id: 2719,
                value: "石渠县",
                label: "石渠县",
                spell: "shiquxian",
                abb: "sqx"
              },
              {
                id: 2720,
                value: "色达县",
                label: "色达县",
                spell: "sedaxian",
                abb: "sdx"
              },
              {
                id: 2721,
                value: "理塘县",
                label: "理塘县",
                spell: "litangxian",
                abb: "ltx"
              },
              {
                id: 2722,
                value: "巴塘县",
                label: "巴塘县",
                spell: "batangxian",
                abb: "btx"
              },
              {
                id: 2723,
                value: "乡城县",
                label: "乡城县",
                spell: "xiangchengxian",
                abb: "xcx"
              },
              {
                id: 2724,
                value: "稻城县",
                label: "稻城县",
                spell: "daochengxian",
                abb: "dcx"
              },
              {
                id: 2725,
                value: "得荣县",
                label: "得荣县",
                spell: "derongxian",
                abb: "drx"
              }
            ]
          },
          {
            id: 2726,
            value: "凉山彝族自治州",
            label: "凉山彝族自治州",
            spell: "liangshanyizuzizhizhou",
            abb: "lsyzzzz",
            children: [
              {
                id: 2727,
                value: "西昌市",
                label: "西昌市",
                spell: "xichangshi",
                abb: "xcs"
              },
              {
                id: 2728,
                value: "木里藏族自治县",
                label: "木里藏族自治县",
                spell: "mulizangzuzizhixian",
                abb: "mlzzzzx"
              },
              {
                id: 2729,
                value: "盐源县",
                label: "盐源县",
                spell: "yanyuanxian",
                abb: "yyx"
              },
              {
                id: 2730,
                value: "德昌县",
                label: "德昌县",
                spell: "dechangxian",
                abb: "dcx"
              },
              {
                id: 2731,
                value: "会理县",
                label: "会理县",
                spell: "huilixian",
                abb: "hlx"
              },
              {
                id: 2732,
                value: "会东县",
                label: "会东县",
                spell: "huidongxian",
                abb: "hdx"
              },
              {
                id: 2733,
                value: "宁南县",
                label: "宁南县",
                spell: "ningnanxian",
                abb: "nnx"
              },
              {
                id: 2734,
                value: "普格县",
                label: "普格县",
                spell: "pugexian",
                abb: "pgx"
              },
              {
                id: 2735,
                value: "布拖县",
                label: "布拖县",
                spell: "butuoxian",
                abb: "btx"
              },
              {
                id: 2736,
                value: "金阳县",
                label: "金阳县",
                spell: "jinyangxian",
                abb: "jyx"
              },
              {
                id: 2737,
                value: "昭觉县",
                label: "昭觉县",
                spell: "zhaojuexian",
                abb: "zjx"
              },
              {
                id: 2738,
                value: "喜德县",
                label: "喜德县",
                spell: "xidexian",
                abb: "xdx"
              },
              {
                id: 2739,
                value: "冕宁县",
                label: "冕宁县",
                spell: "mianningxian",
                abb: "mnx"
              },
              {
                id: 2740,
                value: "越西县",
                label: "越西县",
                spell: "yuexixian",
                abb: "yxx"
              },
              {
                id: 2741,
                value: "甘洛县",
                label: "甘洛县",
                spell: "ganluoxian",
                abb: "glx"
              },
              {
                id: 2742,
                value: "美姑县",
                label: "美姑县",
                spell: "meiguxian",
                abb: "mgx"
              },
              {
                id: 2743,
                value: "雷波县",
                label: "雷波县",
                spell: "leiboxian",
                abb: "lbx"
              }
            ]
          }
        ]
      },
      {
        id: 2744,
        value: "贵州省",
        label: "贵州省",
        spell: "guizhousheng",
        abb: "gzs",
        children: [
          {
            id: 2745,
            value: "贵阳市",
            label: "贵阳市",
            spell: "guiyangshi",
            abb: "gys",
            children: [
              {
                id: 2747,
                value: "南明区",
                label: "南明区",
                spell: "nanmingqu",
                abb: "nmq"
              },
              {
                id: 2748,
                value: "云岩区",
                label: "云岩区",
                spell: "yunyanqu",
                abb: "yyq"
              },
              {
                id: 2749,
                value: "花溪区",
                label: "花溪区",
                spell: "huaxiqu",
                abb: "hxq"
              },
              {
                id: 2750,
                value: "乌当区",
                label: "乌当区",
                spell: "wudangqu",
                abb: "wdq"
              },
              {
                id: 2751,
                value: "白云区",
                label: "白云区",
                spell: "baiyunqu",
                abb: "byq"
              },
              {
                id: 2752,
                value: "小河区",
                label: "小河区",
                spell: "xiaohequ",
                abb: "xhq"
              },
              {
                id: 2753,
                value: "开阳县",
                label: "开阳县",
                spell: "kaiyangxian",
                abb: "kyx"
              },
              {
                id: 2754,
                value: "息烽县",
                label: "息烽县",
                spell: "xifengxian",
                abb: "xfx"
              },
              {
                id: 2755,
                value: "修文县",
                label: "修文县",
                spell: "xiuwenxian",
                abb: "xwx"
              },
              {
                id: 2756,
                value: "清镇市",
                label: "清镇市",
                spell: "qingzhenshi",
                abb: "qzs"
              }
            ]
          },
          {
            id: 2757,
            value: "六盘水市",
            label: "六盘水市",
            spell: "liupanshuishi",
            abb: "lpss",
            children: [
              {
                id: 2758,
                value: "钟山区",
                label: "钟山区",
                spell: "zhongshanqu",
                abb: "zsq"
              },
              {
                id: 2759,
                value: "六枝特区",
                label: "六枝特区",
                spell: "liuzhitequ",
                abb: "lztq"
              },
              {
                id: 2760,
                value: "水城县",
                label: "水城县",
                spell: "shuichengxian",
                abb: "scx"
              },
              {
                id: 2761,
                value: "盘县",
                label: "盘县",
                spell: "panxian",
                abb: "px"
              }
            ]
          },
          {
            id: 2762,
            value: "遵义市",
            label: "遵义市",
            spell: "zunyishi",
            abb: "zys",
            children: [
              {
                id: 2764,
                value: "红花岗区",
                label: "红花岗区",
                spell: "honghuagangqu",
                abb: "hhgq"
              },
              {
                id: 2765,
                value: "汇川区",
                label: "汇川区",
                spell: "huichuanqu",
                abb: "hcq"
              },
              {
                id: 2766,
                value: "遵义县",
                label: "遵义县",
                spell: "zunyixian",
                abb: "zyx"
              },
              {
                id: 2767,
                value: "桐梓县",
                label: "桐梓县",
                spell: "tongzixian",
                abb: "tzx"
              },
              {
                id: 2768,
                value: "绥阳县",
                label: "绥阳县",
                spell: "suiyangxian",
                abb: "syx"
              },
              {
                id: 2769,
                value: "正安县",
                label: "正安县",
                spell: "zhenganxian",
                abb: "zax"
              },
              {
                id: 2770,
                value: "道真仡佬族苗族自治县",
                label: "道真仡佬族苗族自治县",
                spell: "daozhengelaozumiaozuzizhixian",
                abb: "dzglzmzzzx"
              },
              {
                id: 2771,
                value: "务川仡佬族苗族自治县",
                label: "务川仡佬族苗族自治县",
                spell: "wuchuangelaozumiaozuzizhixian",
                abb: "wcglzmzzzx"
              },
              {
                id: 2772,
                value: "凤冈县",
                label: "凤冈县",
                spell: "fenggangxian",
                abb: "fgx"
              },
              {
                id: 2773,
                value: "湄潭县",
                label: "湄潭县",
                spell: "meitanxian",
                abb: "mtx"
              },
              {
                id: 2774,
                value: "余庆县",
                label: "余庆县",
                spell: "yuqingxian",
                abb: "yqx"
              },
              {
                id: 2775,
                value: "习水县",
                label: "习水县",
                spell: "xishuixian",
                abb: "xsx"
              },
              {
                id: 2776,
                value: "赤水市",
                label: "赤水市",
                spell: "chishuishi",
                abb: "css"
              },
              {
                id: 2777,
                value: "仁怀市",
                label: "仁怀市",
                spell: "renhuaishi",
                abb: "rhs"
              }
            ]
          },
          {
            id: 2778,
            value: "安顺市",
            label: "安顺市",
            spell: "anshunshi",
            abb: "ass",
            children: [
              {
                id: 2780,
                value: "西秀区",
                label: "西秀区",
                spell: "xixiuqu",
                abb: "xxq"
              },
              {
                id: 2781,
                value: "平坝县",
                label: "平坝县",
                spell: "pingbaxian",
                abb: "pbx"
              },
              {
                id: 2782,
                value: "普定县",
                label: "普定县",
                spell: "pudingxian",
                abb: "pdx"
              },
              {
                id: 2783,
                value: "镇宁布依族苗族自治县",
                label: "镇宁布依族苗族自治县",
                spell: "zhenningbuyizumiaozuzizhixian",
                abb: "znbyzmzzzx"
              },
              {
                id: 2784,
                value: "关岭布依族苗族自治县",
                label: "关岭布依族苗族自治县",
                spell: "guanlingbuyizumiaozuzizhixian",
                abb: "glbyzmzzzx"
              },
              {
                id: 2785,
                value: "紫云苗族布依族自治县",
                label: "紫云苗族布依族自治县",
                spell: "ziyunmiaozubuyizuzizhixian",
                abb: "zymzbyzzzx"
              }
            ]
          },
          {
            id: 2786,
            value: "铜仁地区",
            label: "铜仁地区",
            spell: "tongrendiqu",
            abb: "trdq",
            children: [
              {
                id: 2787,
                value: "铜仁市",
                label: "铜仁市",
                spell: "tongrenshi",
                abb: "trs"
              },
              {
                id: 2788,
                value: "江口县",
                label: "江口县",
                spell: "jiangkouxian",
                abb: "jkx"
              },
              {
                id: 2789,
                value: "玉屏侗族自治县",
                label: "玉屏侗族自治县",
                spell: "yupingdongzuzizhixian",
                abb: "ypdzzzx"
              },
              {
                id: 2790,
                value: "石阡县",
                label: "石阡县",
                spell: "shiqianxian",
                abb: "sqx"
              },
              {
                id: 2791,
                value: "思南县",
                label: "思南县",
                spell: "sinanxian",
                abb: "snx"
              },
              {
                id: 2792,
                value: "印江土家族苗族自治县",
                label: "印江土家族苗族自治县",
                spell: "yinjiangtujiazumiaozuzizhixian",
                abb: "yjtjzmzzzx"
              },
              {
                id: 2793,
                value: "德江县",
                label: "德江县",
                spell: "dejiangxian",
                abb: "djx"
              },
              {
                id: 2794,
                value: "沿河土家族自治县",
                label: "沿河土家族自治县",
                spell: "yanhetujiazuzizhixian",
                abb: "yhtjzzzx"
              },
              {
                id: 2795,
                value: "松桃苗族自治县",
                label: "松桃苗族自治县",
                spell: "songtaomiaozuzizhixian",
                abb: "stmzzzx"
              },
              {
                id: 2796,
                value: "万山特区",
                label: "万山特区",
                spell: "wanshantequ",
                abb: "wstq"
              }
            ]
          },
          {
            id: 2797,
            value: "黔西南布依族苗族自治州",
            label: "黔西南布依族苗族自治州",
            spell: "qianxinanbuyizumiaozuzizhizhou",
            abb: "qxnbyzmzzzz",
            children: [
              {
                id: 2798,
                value: "兴义市",
                label: "兴义市",
                spell: "xingyishi",
                abb: "xys"
              },
              {
                id: 2799,
                value: "兴仁县",
                label: "兴仁县",
                spell: "xingrenxian",
                abb: "xrx"
              },
              {
                id: 2800,
                value: "普安县",
                label: "普安县",
                spell: "puanxian",
                abb: "pax"
              },
              {
                id: 2801,
                value: "晴隆县",
                label: "晴隆县",
                spell: "qinglongxian",
                abb: "qlx"
              },
              {
                id: 2802,
                value: "贞丰县",
                label: "贞丰县",
                spell: "zhenfengxian",
                abb: "zfx"
              },
              {
                id: 2803,
                value: "望谟县",
                label: "望谟县",
                spell: "wangmoxian",
                abb: "wmx"
              },
              {
                id: 2804,
                value: "册亨县",
                label: "册亨县",
                spell: "cehengxian",
                abb: "chx"
              },
              {
                id: 2805,
                value: "安龙县",
                label: "安龙县",
                spell: "anlongxian",
                abb: "alx"
              }
            ]
          },
          {
            id: 2806,
            value: "毕节地区",
            label: "毕节地区",
            spell: "bijiediqu",
            abb: "bjdq",
            children: [
              {
                id: 2807,
                value: "毕节市",
                label: "毕节市",
                spell: "bijieshi",
                abb: "bjs"
              },
              {
                id: 2808,
                value: "大方县",
                label: "大方县",
                spell: "dafangxian",
                abb: "dfx"
              },
              {
                id: 2809,
                value: "黔西县",
                label: "黔西县",
                spell: "qianxixian",
                abb: "qxx"
              },
              {
                id: 2810,
                value: "金沙县",
                label: "金沙县",
                spell: "jinshaxian",
                abb: "jsx"
              },
              {
                id: 2811,
                value: "织金县",
                label: "织金县",
                spell: "zhijinxian",
                abb: "zjx"
              },
              {
                id: 2812,
                value: "纳雍县",
                label: "纳雍县",
                spell: "nayongxian",
                abb: "nyx"
              },
              {
                id: 2813,
                value: "威宁彝族回族苗族自治县",
                label: "威宁彝族回族苗族自治县",
                spell: "weiningyizuhuizumiaozuzizhixian",
                abb: "wnyzhzmzzzx"
              },
              {
                id: 2814,
                value: "赫章县",
                label: "赫章县",
                spell: "hezhangxian",
                abb: "hzx"
              }
            ]
          },
          {
            id: 2815,
            value: "黔东南苗族侗族自治州",
            label: "黔东南苗族侗族自治州",
            spell: "qiandongnanmiaozudongzuzizhizhou",
            abb: "qdnmzdzzzz",
            children: [
              {
                id: 2816,
                value: "凯里市",
                label: "凯里市",
                spell: "kailishi",
                abb: "kls"
              },
              {
                id: 2817,
                value: "黄平县",
                label: "黄平县",
                spell: "huangpingxian",
                abb: "hpx"
              },
              {
                id: 2818,
                value: "施秉县",
                label: "施秉县",
                spell: "shibingxian",
                abb: "sbx"
              },
              {
                id: 2819,
                value: "三穗县",
                label: "三穗县",
                spell: "sansuixian",
                abb: "ssx"
              },
              {
                id: 2820,
                value: "镇远县",
                label: "镇远县",
                spell: "zhenyuanxian",
                abb: "zyx"
              },
              {
                id: 2821,
                value: "岑巩县",
                label: "岑巩县",
                spell: "cengongxian",
                abb: "cgx"
              },
              {
                id: 2822,
                value: "天柱县",
                label: "天柱县",
                spell: "tianzhuxian",
                abb: "tzx"
              },
              {
                id: 2823,
                value: "锦屏县",
                label: "锦屏县",
                spell: "jinpingxian",
                abb: "jpx"
              },
              {
                id: 2824,
                value: "剑河县",
                label: "剑河县",
                spell: "jianhexian",
                abb: "jhx"
              },
              {
                id: 2825,
                value: "台江县",
                label: "台江县",
                spell: "taijiangxian",
                abb: "tjx"
              },
              {
                id: 2826,
                value: "黎平县",
                label: "黎平县",
                spell: "lipingxian",
                abb: "lpx"
              },
              {
                id: 2827,
                value: "榕江县",
                label: "榕江县",
                spell: "rongjiangxian",
                abb: "rjx"
              },
              {
                id: 2828,
                value: "从江县",
                label: "从江县",
                spell: "congjiangxian",
                abb: "cjx"
              },
              {
                id: 2829,
                value: "雷山县",
                label: "雷山县",
                spell: "leishanxian",
                abb: "lsx"
              },
              {
                id: 2830,
                value: "麻江县",
                label: "麻江县",
                spell: "majiangxian",
                abb: "mjx"
              },
              {
                id: 2831,
                value: "丹寨县",
                label: "丹寨县",
                spell: "danzhaixian",
                abb: "dzx"
              }
            ]
          },
          {
            id: 2832,
            value: "黔南布依族苗族自治州",
            label: "黔南布依族苗族自治州",
            spell: "qiannanbuyizumiaozuzizhizhou",
            abb: "qnbyzmzzzz",
            children: [
              {
                id: 2833,
                value: "都匀市",
                label: "都匀市",
                spell: "douyunshi",
                abb: "dys"
              },
              {
                id: 2834,
                value: "福泉市",
                label: "福泉市",
                spell: "fuquanshi",
                abb: "fqs"
              },
              {
                id: 2835,
                value: "荔波县",
                label: "荔波县",
                spell: "liboxian",
                abb: "lbx"
              },
              {
                id: 2836,
                value: "贵定县",
                label: "贵定县",
                spell: "guidingxian",
                abb: "gdx"
              },
              {
                id: 2837,
                value: "瓮安县",
                label: "瓮安县",
                spell: "wenganxian",
                abb: "wax"
              },
              {
                id: 2838,
                value: "独山县",
                label: "独山县",
                spell: "dushanxian",
                abb: "dsx"
              },
              {
                id: 2839,
                value: "平塘县",
                label: "平塘县",
                spell: "pingtangxian",
                abb: "ptx"
              },
              {
                id: 2840,
                value: "罗甸县",
                label: "罗甸县",
                spell: "luodianxian",
                abb: "ldx"
              },
              {
                id: 2841,
                value: "长顺县",
                label: "长顺县",
                spell: "changshunxian",
                abb: "csx"
              },
              {
                id: 2842,
                value: "龙里县",
                label: "龙里县",
                spell: "longlixian",
                abb: "llx"
              },
              {
                id: 2843,
                value: "惠水县",
                label: "惠水县",
                spell: "huishuixian",
                abb: "hsx"
              },
              {
                id: 2844,
                value: "三都水族自治县",
                label: "三都水族自治县",
                spell: "sandoushuizuzizhixian",
                abb: "sdszzzx"
              }
            ]
          }
        ]
      },
      {
        id: 2845,
        value: "云南省",
        label: "云南省",
        spell: "yunnansheng",
        abb: "yns",
        children: [
          {
            id: 2846,
            value: "昆明市",
            label: "昆明市",
            spell: "kunmingshi",
            abb: "kms",
            children: [
              {
                id: 2848,
                value: "五华区",
                label: "五华区",
                spell: "wuhuaqu",
                abb: "whq"
              },
              {
                id: 2849,
                value: "盘龙区",
                label: "盘龙区",
                spell: "panlongqu",
                abb: "plq"
              },
              {
                id: 2850,
                value: "官渡区",
                label: "官渡区",
                spell: "guanduqu",
                abb: "gdq"
              },
              {
                id: 2851,
                value: "西山区",
                label: "西山区",
                spell: "xishanqu",
                abb: "xsq"
              },
              {
                id: 2852,
                value: "东川区",
                label: "东川区",
                spell: "dongchuanqu",
                abb: "dcq"
              },
              {
                id: 2853,
                value: "呈贡县",
                label: "呈贡县",
                spell: "chenggongxian",
                abb: "cgx"
              },
              {
                id: 2854,
                value: "晋宁县",
                label: "晋宁县",
                spell: "jinningxian",
                abb: "jnx"
              },
              {
                id: 2855,
                value: "富民县",
                label: "富民县",
                spell: "fuminxian",
                abb: "fmx"
              },
              {
                id: 2856,
                value: "宜良县",
                label: "宜良县",
                spell: "yiliangxian",
                abb: "ylx"
              },
              {
                id: 2857,
                value: "石林彝族自治县",
                label: "石林彝族自治县",
                spell: "shilinyizuzizhixian",
                abb: "slyzzzx"
              },
              {
                id: 2858,
                value: "嵩明县",
                label: "嵩明县",
                spell: "songmingxian",
                abb: "smx"
              },
              {
                id: 2859,
                value: "禄劝彝族苗族自治县",
                label: "禄劝彝族苗族自治县",
                spell: "luquanyizumiaozuzizhixian",
                abb: "lqyzmzzzx"
              },
              {
                id: 2860,
                value: "寻甸回族彝族自治县",
                label: "寻甸回族彝族自治县",
                spell: "xundianhuizuyizuzizhixian",
                abb: "xdhzyzzzx"
              },
              {
                id: 2861,
                value: "安宁市",
                label: "安宁市",
                spell: "anningshi",
                abb: "ans"
              }
            ]
          },
          {
            id: 2862,
            value: "曲靖市",
            label: "曲靖市",
            spell: "qujingshi",
            abb: "qjs",
            children: [
              {
                id: 2864,
                value: "麒麟区",
                label: "麒麟区",
                spell: "qilinqu",
                abb: "qlq"
              },
              {
                id: 2865,
                value: "马龙县",
                label: "马龙县",
                spell: "malongxian",
                abb: "mlx"
              },
              {
                id: 2866,
                value: "陆良县",
                label: "陆良县",
                spell: "luliangxian",
                abb: "llx"
              },
              {
                id: 2867,
                value: "师宗县",
                label: "师宗县",
                spell: "shizongxian",
                abb: "szx"
              },
              {
                id: 2868,
                value: "罗平县",
                label: "罗平县",
                spell: "luopingxian",
                abb: "lpx"
              },
              {
                id: 2869,
                value: "富源县",
                label: "富源县",
                spell: "fuyuanxian",
                abb: "fyx"
              },
              {
                id: 2870,
                value: "会泽县",
                label: "会泽县",
                spell: "huizexian",
                abb: "hzx"
              },
              {
                id: 2871,
                value: "沾益县",
                label: "沾益县",
                spell: "zhanyixian",
                abb: "zyx"
              },
              {
                id: 2872,
                value: "宣威市",
                label: "宣威市",
                spell: "xuanweishi",
                abb: "xws"
              }
            ]
          },
          {
            id: 2873,
            value: "玉溪市",
            label: "玉溪市",
            spell: "yuxishi",
            abb: "yxs",
            children: [
              {
                id: 2875,
                value: "红塔区",
                label: "红塔区",
                spell: "hongtaqu",
                abb: "htq"
              },
              {
                id: 2876,
                value: "江川县",
                label: "江川县",
                spell: "jiangchuanxian",
                abb: "jcx"
              },
              {
                id: 2877,
                value: "澄江县",
                label: "澄江县",
                spell: "chengjiangxian",
                abb: "cjx"
              },
              {
                id: 2878,
                value: "通海县",
                label: "通海县",
                spell: "tonghaixian",
                abb: "thx"
              },
              {
                id: 2879,
                value: "华宁县",
                label: "华宁县",
                spell: "huaningxian",
                abb: "hnx"
              },
              {
                id: 2880,
                value: "易门县",
                label: "易门县",
                spell: "yimenxian",
                abb: "ymx"
              },
              {
                id: 2881,
                value: "峨山彝族自治县",
                label: "峨山彝族自治县",
                spell: "eshanyizuzizhixian",
                abb: "esyzzzx"
              },
              {
                id: 2882,
                value: "新平彝族傣族自治县",
                label: "新平彝族傣族自治县",
                spell: "xinpingyizudaizuzizhixian",
                abb: "xpyzdzzzx"
              },
              {
                id: 2883,
                value: "元江哈尼族彝族傣族自治县",
                label: "元江哈尼族彝族傣族自治县",
                spell: "yuanjianghanizuyizudaizuzizhixian",
                abb: "yjhnzyzdzzzx"
              }
            ]
          },
          {
            id: 2884,
            value: "保山市",
            label: "保山市",
            spell: "baoshanshi",
            abb: "bss",
            children: [
              {
                id: 2886,
                value: "隆阳区",
                label: "隆阳区",
                spell: "longyangqu",
                abb: "lyq"
              },
              {
                id: 2887,
                value: "施甸县",
                label: "施甸县",
                spell: "shidianxian",
                abb: "sdx"
              },
              {
                id: 2888,
                value: "腾冲县",
                label: "腾冲县",
                spell: "tengchongxian",
                abb: "tcx"
              },
              {
                id: 2889,
                value: "龙陵县",
                label: "龙陵县",
                spell: "longlingxian",
                abb: "llx"
              },
              {
                id: 2890,
                value: "昌宁县",
                label: "昌宁县",
                spell: "changningxian",
                abb: "cnx"
              }
            ]
          },
          {
            id: 2891,
            value: "昭通市",
            label: "昭通市",
            spell: "zhaotongshi",
            abb: "zts",
            children: [
              {
                id: 2893,
                value: "昭阳区",
                label: "昭阳区",
                spell: "zhaoyangqu",
                abb: "zyq"
              },
              {
                id: 2894,
                value: "鲁甸县",
                label: "鲁甸县",
                spell: "ludianxian",
                abb: "ldx"
              },
              {
                id: 2895,
                value: "巧家县",
                label: "巧家县",
                spell: "qiaojiaxian",
                abb: "qjx"
              },
              {
                id: 2896,
                value: "盐津县",
                label: "盐津县",
                spell: "yanjinxian",
                abb: "yjx"
              },
              {
                id: 2897,
                value: "大关县",
                label: "大关县",
                spell: "daguanxian",
                abb: "dgx"
              },
              {
                id: 2898,
                value: "永善县",
                label: "永善县",
                spell: "yongshanxian",
                abb: "ysx"
              },
              {
                id: 2899,
                value: "绥江县",
                label: "绥江县",
                spell: "suijiangxian",
                abb: "sjx"
              },
              {
                id: 2900,
                value: "镇雄县",
                label: "镇雄县",
                spell: "zhenxiongxian",
                abb: "zxx"
              },
              {
                id: 2901,
                value: "彝良县",
                label: "彝良县",
                spell: "yiliangxian",
                abb: "ylx"
              },
              {
                id: 2902,
                value: "威信县",
                label: "威信县",
                spell: "weixinxian",
                abb: "wxx"
              },
              {
                id: 2903,
                value: "水富县",
                label: "水富县",
                spell: "shuifuxian",
                abb: "sfx"
              }
            ]
          },
          {
            id: 2904,
            value: "丽江市",
            label: "丽江市",
            spell: "lijiangshi",
            abb: "ljs",
            children: [
              {
                id: 2906,
                value: "古城区",
                label: "古城区",
                spell: "guchengqu",
                abb: "gcq"
              },
              {
                id: 2907,
                value: "玉龙纳西族自治县",
                label: "玉龙纳西族自治县",
                spell: "yulongnaxizuzizhixian",
                abb: "ylnxzzzx"
              },
              {
                id: 2908,
                value: "永胜县",
                label: "永胜县",
                spell: "yongshengxian",
                abb: "ysx"
              },
              {
                id: 2909,
                value: "华坪县",
                label: "华坪县",
                spell: "huapingxian",
                abb: "hpx"
              },
              {
                id: 2910,
                value: "宁蒗彝族自治县",
                label: "宁蒗彝族自治县",
                spell: "ninglangyizuzizhixian",
                abb: "nlyzzzx"
              }
            ]
          },
          {
            id: 2911,
            value: "普洱市",
            label: "普洱市",
            spell: "puershi",
            abb: "pes",
            children: [
              {
                id: 2913,
                value: "思茅区",
                label: "思茅区",
                spell: "simaoqu",
                abb: "smq"
              },
              {
                id: 2914,
                value: "宁洱哈尼族彝族自治县",
                label: "宁洱哈尼族彝族自治县",
                spell: "ningerhanizuyizuzizhixian",
                abb: "nehnzyzzzx"
              },
              {
                id: 2915,
                value: "墨江哈尼族自治县",
                label: "墨江哈尼族自治县",
                spell: "mojianghanizuzizhixian",
                abb: "mjhnzzzx"
              },
              {
                id: 2916,
                value: "景东彝族自治县",
                label: "景东彝族自治县",
                spell: "jingdongyizuzizhixian",
                abb: "jdyzzzx"
              },
              {
                id: 2917,
                value: "景谷傣族彝族自治县",
                label: "景谷傣族彝族自治县",
                spell: "jinggudaizuyizuzizhixian",
                abb: "jgdzyzzzx"
              },
              {
                id: 2918,
                value: "镇沅彝族哈尼族拉祜族自治县",
                label: "镇沅彝族哈尼族拉祜族自治县",
                spell: "zhenyuanyizuhanizulahuzuzizhixian",
                abb: "zyyzhnzlhzzzx"
              },
              {
                id: 2919,
                value: "江城哈尼族彝族自治县",
                label: "江城哈尼族彝族自治县",
                spell: "jiangchenghanizuyizuzizhixian",
                abb: "jchnzyzzzx"
              },
              {
                id: 2920,
                value: "孟连傣族拉祜族佤族自治县",
                label: "孟连傣族拉祜族佤族自治县",
                spell: "mengliandaizulahuzuwazuzizhixian",
                abb: "mldzlhzwzzzx"
              },
              {
                id: 2921,
                value: "澜沧拉祜族自治县",
                label: "澜沧拉祜族自治县",
                spell: "lancanglahuzuzizhixian",
                abb: "lclhzzzx"
              },
              {
                id: 2922,
                value: "西盟佤族自治县",
                label: "西盟佤族自治县",
                spell: "ximengwazuzizhixian",
                abb: "xmwzzzx"
              }
            ]
          },
          {
            id: 2923,
            value: "临沧市",
            label: "临沧市",
            spell: "lincangshi",
            abb: "lcs",
            children: [
              {
                id: 2925,
                value: "临翔区",
                label: "临翔区",
                spell: "linxiangqu",
                abb: "lxq"
              },
              {
                id: 2926,
                value: "凤庆县",
                label: "凤庆县",
                spell: "fengqingxian",
                abb: "fqx"
              },
              {
                id: 2927,
                value: "云县",
                label: "云县",
                spell: "yunxian",
                abb: "yx"
              },
              {
                id: 2928,
                value: "永德县",
                label: "永德县",
                spell: "yongdexian",
                abb: "ydx"
              },
              {
                id: 2929,
                value: "镇康县",
                label: "镇康县",
                spell: "zhenkangxian",
                abb: "zkx"
              },
              {
                id: 2930,
                value: "双江拉祜族佤族布朗族傣族自治县",
                label: "双江拉祜族佤族布朗族傣族自治县",
                spell: "shuangjianglahuzuwazubulangzudaizuzizhixian",
                abb: "sjlhzwzblzdzzzx"
              },
              {
                id: 2931,
                value: "耿马傣族佤族自治县",
                label: "耿马傣族佤族自治县",
                spell: "gengmadaizuwazuzizhixian",
                abb: "gmdzwzzzx"
              },
              {
                id: 2932,
                value: "沧源佤族自治县",
                label: "沧源佤族自治县",
                spell: "cangyuanwazuzizhixian",
                abb: "cywzzzx"
              }
            ]
          },
          {
            id: 2933,
            value: "楚雄彝族自治州",
            label: "楚雄彝族自治州",
            spell: "chuxiongyizuzizhizhou",
            abb: "cxyzzzz",
            children: [
              {
                id: 2934,
                value: "楚雄市",
                label: "楚雄市",
                spell: "chuxiongshi",
                abb: "cxs"
              },
              {
                id: 2935,
                value: "双柏县",
                label: "双柏县",
                spell: "shuangboxian",
                abb: "sbx"
              },
              {
                id: 2936,
                value: "牟定县",
                label: "牟定县",
                spell: "moudingxian",
                abb: "mdx"
              },
              {
                id: 2937,
                value: "南华县",
                label: "南华县",
                spell: "nanhuaxian",
                abb: "nhx"
              },
              {
                id: 2938,
                value: "姚安县",
                label: "姚安县",
                spell: "yaoanxian",
                abb: "yax"
              },
              {
                id: 2939,
                value: "大姚县",
                label: "大姚县",
                spell: "dayaoxian",
                abb: "dyx"
              },
              {
                id: 2940,
                value: "永仁县",
                label: "永仁县",
                spell: "yongrenxian",
                abb: "yrx"
              },
              {
                id: 2941,
                value: "元谋县",
                label: "元谋县",
                spell: "yuanmouxian",
                abb: "ymx"
              },
              {
                id: 2942,
                value: "武定县",
                label: "武定县",
                spell: "wudingxian",
                abb: "wdx"
              },
              {
                id: 2943,
                value: "禄丰县",
                label: "禄丰县",
                spell: "lufengxian",
                abb: "lfx"
              }
            ]
          },
          {
            id: 2944,
            value: "红河哈尼族彝族自治州",
            label: "红河哈尼族彝族自治州",
            spell: "honghehanizuyizuzizhizhou",
            abb: "hhhnzyzzzz",
            children: [
              {
                id: 2945,
                value: "个旧市",
                label: "个旧市",
                spell: "gejiushi",
                abb: "gjs"
              },
              {
                id: 2946,
                value: "开远市",
                label: "开远市",
                spell: "kaiyuanshi",
                abb: "kys"
              },
              {
                id: 2947,
                value: "蒙自县",
                label: "蒙自县",
                spell: "mengzixian",
                abb: "mzx"
              },
              {
                id: 2948,
                value: "屏边苗族自治县",
                label: "屏边苗族自治县",
                spell: "pingbianmiaozuzizhixian",
                abb: "pbmzzzx"
              },
              {
                id: 2949,
                value: "建水县",
                label: "建水县",
                spell: "jianshuixian",
                abb: "jsx"
              },
              {
                id: 2950,
                value: "石屏县",
                label: "石屏县",
                spell: "shipingxian",
                abb: "spx"
              },
              {
                id: 2951,
                value: "弥勒县",
                label: "弥勒县",
                spell: "milexian",
                abb: "mlx"
              },
              {
                id: 2952,
                value: "泸西县",
                label: "泸西县",
                spell: "luxixian",
                abb: "lxx"
              },
              {
                id: 2953,
                value: "元阳县",
                label: "元阳县",
                spell: "yuanyangxian",
                abb: "yyx"
              },
              {
                id: 2954,
                value: "红河县",
                label: "红河县",
                spell: "honghexian",
                abb: "hhx"
              },
              {
                id: 2955,
                value: "金平苗族瑶族傣族自治县",
                label: "金平苗族瑶族傣族自治县",
                spell: "jinpingmiaozuyaozudaizuzizhixian",
                abb: "jpmzyzdzzzx"
              },
              {
                id: 2956,
                value: "绿春县",
                label: "绿春县",
                spell: "lu:chunxian",
                abb: "lcx"
              },
              {
                id: 2957,
                value: "河口瑶族自治县",
                label: "河口瑶族自治县",
                spell: "hekouyaozuzizhixian",
                abb: "hkyzzzx"
              }
            ]
          },
          {
            id: 2958,
            value: "文山壮族苗族自治州",
            label: "文山壮族苗族自治州",
            spell: "wenshanzhuangzumiaozuzizhizhou",
            abb: "wszzmzzzz",
            children: [
              {
                id: 2959,
                value: "文山县",
                label: "文山县",
                spell: "wenshanxian",
                abb: "wsx"
              },
              {
                id: 2960,
                value: "砚山县",
                label: "砚山县",
                spell: "yanshanxian",
                abb: "ysx"
              },
              {
                id: 2961,
                value: "西畴县",
                label: "西畴县",
                spell: "xichouxian",
                abb: "xcx"
              },
              {
                id: 2962,
                value: "麻栗坡县",
                label: "麻栗坡县",
                spell: "malipoxian",
                abb: "mlpx"
              },
              {
                id: 2963,
                value: "马关县",
                label: "马关县",
                spell: "maguanxian",
                abb: "mgx"
              },
              {
                id: 2964,
                value: "丘北县",
                label: "丘北县",
                spell: "qiubeixian",
                abb: "qbx"
              },
              {
                id: 2965,
                value: "广南县",
                label: "广南县",
                spell: "guangnanxian",
                abb: "gnx"
              },
              {
                id: 2966,
                value: "富宁县",
                label: "富宁县",
                spell: "funingxian",
                abb: "fnx"
              }
            ]
          },
          {
            id: 2967,
            value: "西双版纳傣族自治州",
            label: "西双版纳傣族自治州",
            spell: "xishuangbannadaizuzizhizhou",
            abb: "xsbndzzzz",
            children: [
              {
                id: 2968,
                value: "景洪市",
                label: "景洪市",
                spell: "jinghongshi",
                abb: "jhs"
              },
              {
                id: 2969,
                value: "勐海县",
                label: "勐海县",
                spell: "menghaixian",
                abb: "mhx"
              },
              {
                id: 2970,
                value: "勐腊县",
                label: "勐腊县",
                spell: "menglaxian",
                abb: "mlx"
              }
            ]
          },
          {
            id: 2971,
            value: "大理白族自治州",
            label: "大理白族自治州",
            spell: "dalibaizuzizhizhou",
            abb: "dlbzzzz",
            children: [
              {
                id: 2972,
                value: "大理市",
                label: "大理市",
                spell: "dalishi",
                abb: "dls"
              },
              {
                id: 2973,
                value: "漾濞彝族自治县",
                label: "漾濞彝族自治县",
                spell: "yangbiyizuzizhixian",
                abb: "ybyzzzx"
              },
              {
                id: 2974,
                value: "祥云县",
                label: "祥云县",
                spell: "xiangyunxian",
                abb: "xyx"
              },
              {
                id: 2975,
                value: "宾川县",
                label: "宾川县",
                spell: "binchuanxian",
                abb: "bcx"
              },
              {
                id: 2976,
                value: "弥渡县",
                label: "弥渡县",
                spell: "miduxian",
                abb: "mdx"
              },
              {
                id: 2977,
                value: "南涧彝族自治县",
                label: "南涧彝族自治县",
                spell: "nanjianyizuzizhixian",
                abb: "njyzzzx"
              },
              {
                id: 2978,
                value: "巍山彝族回族自治县",
                label: "巍山彝族回族自治县",
                spell: "weishanyizuhuizuzizhixian",
                abb: "wsyzhzzzx"
              },
              {
                id: 2979,
                value: "永平县",
                label: "永平县",
                spell: "yongpingxian",
                abb: "ypx"
              },
              {
                id: 2980,
                value: "云龙县",
                label: "云龙县",
                spell: "yunlongxian",
                abb: "ylx"
              },
              {
                id: 2981,
                value: "洱源县",
                label: "洱源县",
                spell: "eryuanxian",
                abb: "eyx"
              },
              {
                id: 2982,
                value: "剑川县",
                label: "剑川县",
                spell: "jianchuanxian",
                abb: "jcx"
              },
              {
                id: 2983,
                value: "鹤庆县",
                label: "鹤庆县",
                spell: "heqingxian",
                abb: "hqx"
              }
            ]
          },
          {
            id: 2984,
            value: "德宏傣族景颇族自治州",
            label: "德宏傣族景颇族自治州",
            spell: "dehongdaizujingpozuzizhizhou",
            abb: "dhdzjpzzzz",
            children: [
              {
                id: 2985,
                value: "瑞丽市",
                label: "瑞丽市",
                spell: "ruilishi",
                abb: "rls"
              },
              {
                id: 2986,
                value: "潞西市",
                label: "潞西市",
                spell: "luxishi",
                abb: "lxs"
              },
              {
                id: 2987,
                value: "梁河县",
                label: "梁河县",
                spell: "lianghexian",
                abb: "lhx"
              },
              {
                id: 2988,
                value: "盈江县",
                label: "盈江县",
                spell: "yingjiangxian",
                abb: "yjx"
              },
              {
                id: 2989,
                value: "陇川县",
                label: "陇川县",
                spell: "longchuanxian",
                abb: "lcx"
              }
            ]
          },
          {
            id: 2990,
            value: "怒江傈僳族自治州",
            label: "怒江傈僳族自治州",
            spell: "nujianglisuzuzizhizhou",
            abb: "njlszzzz",
            children: [
              {
                id: 2991,
                value: "泸水县",
                label: "泸水县",
                spell: "lushuixian",
                abb: "lsx"
              },
              {
                id: 2992,
                value: "福贡县",
                label: "福贡县",
                spell: "fugongxian",
                abb: "fgx"
              },
              {
                id: 2993,
                value: "贡山独龙族怒族自治县",
                label: "贡山独龙族怒族自治县",
                spell: "gongshandulongzunuzuzizhixian",
                abb: "gsdlznzzzx"
              },
              {
                id: 2994,
                value: "兰坪白族普米族自治县",
                label: "兰坪白族普米族自治县",
                spell: "lanpingbaizupumizuzizhixian",
                abb: "lpbzpmzzzx"
              }
            ]
          },
          {
            id: 2995,
            value: "迪庆藏族自治州",
            label: "迪庆藏族自治州",
            spell: "diqingzangzuzizhizhou",
            abb: "dqzzzzz",
            children: [
              {
                id: 2996,
                value: "香格里拉县",
                label: "香格里拉县",
                spell: "xianggelilaxian",
                abb: "xgllx"
              },
              {
                id: 2997,
                value: "德钦县",
                label: "德钦县",
                spell: "deqinxian",
                abb: "dqx"
              },
              {
                id: 2998,
                value: "维西傈僳族自治县",
                label: "维西傈僳族自治县",
                spell: "weixilisuzuzizhixian",
                abb: "wxlszzzx"
              }
            ]
          }
        ]
      },
      {
        id: 2999,
        value: "西藏自治区",
        label: "西藏自治区",
        spell: "xizangzizhiqu",
        abb: "xzzzq",
        children: [
          {
            id: 3000,
            value: "拉萨市",
            label: "拉萨市",
            spell: "lasashi",
            abb: "lss",
            children: [
              {
                id: 3002,
                value: "城关区",
                label: "城关区",
                spell: "chengguanqu",
                abb: "cgq"
              },
              {
                id: 3003,
                value: "林周县",
                label: "林周县",
                spell: "linzhouxian",
                abb: "lzx"
              },
              {
                id: 3004,
                value: "当雄县",
                label: "当雄县",
                spell: "dangxiongxian",
                abb: "dxx"
              },
              {
                id: 3005,
                value: "尼木县",
                label: "尼木县",
                spell: "nimuxian",
                abb: "nmx"
              },
              {
                id: 3006,
                value: "曲水县",
                label: "曲水县",
                spell: "qushuixian",
                abb: "qsx"
              },
              {
                id: 3007,
                value: "堆龙德庆县",
                label: "堆龙德庆县",
                spell: "duilongdeqingxian",
                abb: "dldqx"
              },
              {
                id: 3008,
                value: "达孜县",
                label: "达孜县",
                spell: "dazixian",
                abb: "dzx"
              },
              {
                id: 3009,
                value: "墨竹工卡县",
                label: "墨竹工卡县",
                spell: "mozhugongkaxian",
                abb: "mzgkx"
              }
            ]
          },
          {
            id: 3010,
            value: "昌都地区",
            label: "昌都地区",
            spell: "changdoudiqu",
            abb: "cddq",
            children: [
              {
                id: 3011,
                value: "昌都县",
                label: "昌都县",
                spell: "changdouxian",
                abb: "cdx"
              },
              {
                id: 3012,
                value: "江达县",
                label: "江达县",
                spell: "jiangdaxian",
                abb: "jdx"
              },
              {
                id: 3013,
                value: "贡觉县",
                label: "贡觉县",
                spell: "gongjuexian",
                abb: "gjx"
              },
              {
                id: 3014,
                value: "类乌齐县",
                label: "类乌齐县",
                spell: "leiwuqixian",
                abb: "lwqx"
              },
              {
                id: 3015,
                value: "丁青县",
                label: "丁青县",
                spell: "dingqingxian",
                abb: "dqx"
              },
              {
                id: 3016,
                value: "察雅县",
                label: "察雅县",
                spell: "chayaxian",
                abb: "cyx"
              },
              {
                id: 3017,
                value: "八宿县",
                label: "八宿县",
                spell: "basuxian",
                abb: "bsx"
              },
              {
                id: 3018,
                value: "左贡县",
                label: "左贡县",
                spell: "zuogongxian",
                abb: "zgx"
              },
              {
                id: 3019,
                value: "芒康县",
                label: "芒康县",
                spell: "mangkangxian",
                abb: "mkx"
              },
              {
                id: 3020,
                value: "洛隆县",
                label: "洛隆县",
                spell: "luolongxian",
                abb: "llx"
              },
              {
                id: 3021,
                value: "边坝县",
                label: "边坝县",
                spell: "bianbaxian",
                abb: "bbx"
              }
            ]
          },
          {
            id: 3022,
            value: "山南地区",
            label: "山南地区",
            spell: "shannandiqu",
            abb: "sndq",
            children: [
              {
                id: 3023,
                value: "乃东县",
                label: "乃东县",
                spell: "naidongxian",
                abb: "ndx"
              },
              {
                id: 3024,
                value: "扎囊县",
                label: "扎囊县",
                spell: "zhanangxian",
                abb: "znx"
              },
              {
                id: 3025,
                value: "贡嘎县",
                label: "贡嘎县",
                spell: "gonggaxian",
                abb: "ggx"
              },
              {
                id: 3026,
                value: "桑日县",
                label: "桑日县",
                spell: "sangrixian",
                abb: "srx"
              },
              {
                id: 3027,
                value: "琼结县",
                label: "琼结县",
                spell: "qiongjiexian",
                abb: "qjx"
              },
              {
                id: 3028,
                value: "曲松县",
                label: "曲松县",
                spell: "qusongxian",
                abb: "qsx"
              },
              {
                id: 3029,
                value: "措美县",
                label: "措美县",
                spell: "cuomeixian",
                abb: "cmx"
              },
              {
                id: 3030,
                value: "洛扎县",
                label: "洛扎县",
                spell: "luozhaxian",
                abb: "lzx"
              },
              {
                id: 3031,
                value: "加查县",
                label: "加查县",
                spell: "jiachaxian",
                abb: "jcx"
              },
              {
                id: 3032,
                value: "隆子县",
                label: "隆子县",
                spell: "longzixian",
                abb: "lzx"
              },
              {
                id: 3033,
                value: "错那县",
                label: "错那县",
                spell: "cuoneixian",
                abb: "cnx"
              },
              {
                id: 3034,
                value: "浪卡子县",
                label: "浪卡子县",
                spell: "langkazixian",
                abb: "lkzx"
              }
            ]
          },
          {
            id: 3035,
            value: "日喀则地区",
            label: "日喀则地区",
            spell: "rikazediqu",
            abb: "rkzdq",
            children: [
              {
                id: 3036,
                value: "日喀则市",
                label: "日喀则市",
                spell: "rikazeshi",
                abb: "rkzs"
              },
              {
                id: 3037,
                value: "南木林县",
                label: "南木林县",
                spell: "nanmulinxian",
                abb: "nmlx"
              },
              {
                id: 3038,
                value: "江孜县",
                label: "江孜县",
                spell: "jiangzixian",
                abb: "jzx"
              },
              {
                id: 3039,
                value: "定日县",
                label: "定日县",
                spell: "dingrixian",
                abb: "drx"
              },
              {
                id: 3040,
                value: "萨迦县",
                label: "萨迦县",
                spell: "sajiaxian",
                abb: "sjx"
              },
              {
                id: 3041,
                value: "拉孜县",
                label: "拉孜县",
                spell: "lazixian",
                abb: "lzx"
              },
              {
                id: 3042,
                value: "昂仁县",
                label: "昂仁县",
                spell: "angrenxian",
                abb: "arx"
              },
              {
                id: 3043,
                value: "谢通门县",
                label: "谢通门县",
                spell: "xietongmenxian",
                abb: "xtmx"
              },
              {
                id: 3044,
                value: "白朗县",
                label: "白朗县",
                spell: "bailangxian",
                abb: "blx"
              },
              {
                id: 3045,
                value: "仁布县",
                label: "仁布县",
                spell: "renbuxian",
                abb: "rbx"
              },
              {
                id: 3046,
                value: "康马县",
                label: "康马县",
                spell: "kangmaxian",
                abb: "kmx"
              },
              {
                id: 3047,
                value: "定结县",
                label: "定结县",
                spell: "dingjiexian",
                abb: "djx"
              },
              {
                id: 3048,
                value: "仲巴县",
                label: "仲巴县",
                spell: "zhongbaxian",
                abb: "zbx"
              },
              {
                id: 3049,
                value: "亚东县",
                label: "亚东县",
                spell: "yadongxian",
                abb: "ydx"
              },
              {
                id: 3050,
                value: "吉隆县",
                label: "吉隆县",
                spell: "jilongxian",
                abb: "jlx"
              },
              {
                id: 3051,
                value: "聂拉木县",
                label: "聂拉木县",
                spell: "nielamuxian",
                abb: "nlmx"
              },
              {
                id: 3052,
                value: "萨嘎县",
                label: "萨嘎县",
                spell: "sagaxian",
                abb: "sgx"
              },
              {
                id: 3053,
                value: "岗巴县",
                label: "岗巴县",
                spell: "gangbaxian",
                abb: "gbx"
              }
            ]
          },
          {
            id: 3054,
            value: "那曲地区",
            label: "那曲地区",
            spell: "neiqudiqu",
            abb: "nqdq",
            children: [
              {
                id: 3055,
                value: "那曲县",
                label: "那曲县",
                spell: "neiquxian",
                abb: "nqx"
              },
              {
                id: 3056,
                value: "嘉黎县",
                label: "嘉黎县",
                spell: "jialixian",
                abb: "jlx"
              },
              {
                id: 3057,
                value: "比如县",
                label: "比如县",
                spell: "biruxian",
                abb: "brx"
              },
              {
                id: 3058,
                value: "聂荣县",
                label: "聂荣县",
                spell: "nierongxian",
                abb: "nrx"
              },
              {
                id: 3059,
                value: "安多县",
                label: "安多县",
                spell: "anduoxian",
                abb: "adx"
              },
              {
                id: 3060,
                value: "申扎县",
                label: "申扎县",
                spell: "shenzhaxian",
                abb: "szx"
              },
              {
                id: 3061,
                value: "索县",
                label: "索县",
                spell: "suoxian",
                abb: "sx"
              },
              {
                id: 3062,
                value: "班戈县",
                label: "班戈县",
                spell: "bangexian",
                abb: "bgx"
              },
              {
                id: 3063,
                value: "巴青县",
                label: "巴青县",
                spell: "baqingxian",
                abb: "bqx"
              },
              {
                id: 3064,
                value: "尼玛县",
                label: "尼玛县",
                spell: "nimaxian",
                abb: "nmx"
              }
            ]
          },
          {
            id: 3065,
            value: "阿里地区",
            label: "阿里地区",
            spell: "alidiqu",
            abb: "aldq",
            children: [
              {
                id: 3066,
                value: "普兰县",
                label: "普兰县",
                spell: "pulanxian",
                abb: "plx"
              },
              {
                id: 3067,
                value: "札达县",
                label: "札达县",
                spell: "zhadaxian",
                abb: "zdx"
              },
              {
                id: 3068,
                value: "噶尔县",
                label: "噶尔县",
                spell: "gaerxian",
                abb: "gex"
              },
              {
                id: 3069,
                value: "日土县",
                label: "日土县",
                spell: "rituxian",
                abb: "rtx"
              },
              {
                id: 3070,
                value: "革吉县",
                label: "革吉县",
                spell: "gejixian",
                abb: "gjx"
              },
              {
                id: 3071,
                value: "改则县",
                label: "改则县",
                spell: "gaizexian",
                abb: "gzx"
              },
              {
                id: 3072,
                value: "措勤县",
                label: "措勤县",
                spell: "cuoqinxian",
                abb: "cqx"
              }
            ]
          },
          {
            id: 3073,
            value: "林芝地区",
            label: "林芝地区",
            spell: "linzhidiqu",
            abb: "lzdq",
            children: [
              {
                id: 3074,
                value: "林芝县",
                label: "林芝县",
                spell: "linzhixian",
                abb: "lzx"
              },
              {
                id: 3075,
                value: "工布江达县",
                label: "工布江达县",
                spell: "gongbujiangdaxian",
                abb: "gbjdx"
              },
              {
                id: 3076,
                value: "米林县",
                label: "米林县",
                spell: "milinxian",
                abb: "mlx"
              },
              {
                id: 3077,
                value: "墨脱县",
                label: "墨脱县",
                spell: "motuoxian",
                abb: "mtx"
              },
              {
                id: 3078,
                value: "波密县",
                label: "波密县",
                spell: "bomixian",
                abb: "bmx"
              },
              {
                id: 3079,
                value: "察隅县",
                label: "察隅县",
                spell: "chayuxian",
                abb: "cyx"
              },
              {
                id: 3080,
                value: "朗县",
                label: "朗县",
                spell: "langxian",
                abb: "lx"
              }
            ]
          }
        ]
      },
      {
        id: 3081,
        value: "陕西省",
        label: "陕西省",
        spell: "shanxisheng",
        abb: "sxs",
        children: [
          {
            id: 3082,
            value: "西安市",
            label: "西安市",
            spell: "xianshi",
            abb: "xas",
            children: [
              {
                id: 3084,
                value: "新城区",
                label: "新城区",
                spell: "xinchengqu",
                abb: "xcq"
              },
              {
                id: 3085,
                value: "碑林区",
                label: "碑林区",
                spell: "beilinqu",
                abb: "blq"
              },
              {
                id: 3086,
                value: "莲湖区",
                label: "莲湖区",
                spell: "lianhuqu",
                abb: "lhq"
              },
              {
                id: 3087,
                value: "灞桥区",
                label: "灞桥区",
                spell: "baqiaoqu",
                abb: "bqq"
              },
              {
                id: 3088,
                value: "未央区",
                label: "未央区",
                spell: "weiyangqu",
                abb: "wyq"
              },
              {
                id: 3089,
                value: "雁塔区",
                label: "雁塔区",
                spell: "yantaqu",
                abb: "ytq"
              },
              {
                id: 3090,
                value: "阎良区",
                label: "阎良区",
                spell: "yanliangqu",
                abb: "ylq"
              },
              {
                id: 3091,
                value: "临潼区",
                label: "临潼区",
                spell: "lintongqu",
                abb: "ltq"
              },
              {
                id: 3092,
                value: "长安区",
                label: "长安区",
                spell: "changanqu",
                abb: "caq"
              },
              {
                id: 3093,
                value: "蓝田县",
                label: "蓝田县",
                spell: "lantianxian",
                abb: "ltx"
              },
              {
                id: 3094,
                value: "周至县",
                label: "周至县",
                spell: "zhouzhixian",
                abb: "zzx"
              },
              {
                id: 3095,
                value: "户县",
                label: "户县",
                spell: "huxian",
                abb: "hx"
              },
              {
                id: 3096,
                value: "高陵县",
                label: "高陵县",
                spell: "gaolingxian",
                abb: "glx"
              }
            ]
          },
          {
            id: 3097,
            value: "铜川市",
            label: "铜川市",
            spell: "tongchuanshi",
            abb: "tcs",
            children: [
              {
                id: 3099,
                value: "王益区",
                label: "王益区",
                spell: "wangyiqu",
                abb: "wyq"
              },
              {
                id: 3100,
                value: "印台区",
                label: "印台区",
                spell: "yintaiqu",
                abb: "ytq"
              },
              {
                id: 3101,
                value: "耀州区",
                label: "耀州区",
                spell: "yaozhouqu",
                abb: "yzq"
              },
              {
                id: 3102,
                value: "宜君县",
                label: "宜君县",
                spell: "yijunxian",
                abb: "yjx"
              }
            ]
          },
          {
            id: 3103,
            value: "宝鸡市",
            label: "宝鸡市",
            spell: "baojishi",
            abb: "bjs",
            children: [
              {
                id: 3105,
                value: "渭滨区",
                label: "渭滨区",
                spell: "weibinqu",
                abb: "wbq"
              },
              {
                id: 3106,
                value: "金台区",
                label: "金台区",
                spell: "jintaiqu",
                abb: "jtq"
              },
              {
                id: 3107,
                value: "陈仓区",
                label: "陈仓区",
                spell: "chencangqu",
                abb: "ccq"
              },
              {
                id: 3108,
                value: "凤翔县",
                label: "凤翔县",
                spell: "fengxiangxian",
                abb: "fxx"
              },
              {
                id: 3109,
                value: "岐山县",
                label: "岐山县",
                spell: "qishanxian",
                abb: "qsx"
              },
              {
                id: 3110,
                value: "扶风县",
                label: "扶风县",
                spell: "fufengxian",
                abb: "ffx"
              },
              {
                id: 3111,
                value: "眉县",
                label: "眉县",
                spell: "meixian",
                abb: "mx"
              },
              {
                id: 3112,
                value: "陇县",
                label: "陇县",
                spell: "longxian",
                abb: "lx"
              },
              {
                id: 3113,
                value: "千阳县",
                label: "千阳县",
                spell: "qianyangxian",
                abb: "qyx"
              },
              {
                id: 3114,
                value: "麟游县",
                label: "麟游县",
                spell: "linyouxian",
                abb: "lyx"
              },
              {
                id: 3115,
                value: "凤县",
                label: "凤县",
                spell: "fengxian",
                abb: "fx"
              },
              {
                id: 3116,
                value: "太白县",
                label: "太白县",
                spell: "taibaixian",
                abb: "tbx"
              }
            ]
          },
          {
            id: 3117,
            value: "咸阳市",
            label: "咸阳市",
            spell: "xianyangshi",
            abb: "xys",
            children: [
              {
                id: 3119,
                value: "秦都区",
                label: "秦都区",
                spell: "qindouqu",
                abb: "qdq"
              },
              {
                id: 3120,
                value: "杨凌区",
                label: "杨凌区",
                spell: "yanglingqu",
                abb: "ylq"
              },
              {
                id: 3121,
                value: "渭城区",
                label: "渭城区",
                spell: "weichengqu",
                abb: "wcq"
              },
              {
                id: 3122,
                value: "三原县",
                label: "三原县",
                spell: "sanyuanxian",
                abb: "syx"
              },
              {
                id: 3123,
                value: "泾阳县",
                label: "泾阳县",
                spell: "jingyangxian",
                abb: "jyx"
              },
              {
                id: 3124,
                value: "乾县",
                label: "乾县",
                spell: "qianxian",
                abb: "qx"
              },
              {
                id: 3125,
                value: "礼泉县",
                label: "礼泉县",
                spell: "liquanxian",
                abb: "lqx"
              },
              {
                id: 3126,
                value: "永寿县",
                label: "永寿县",
                spell: "yongshouxian",
                abb: "ysx"
              },
              {
                id: 3127,
                value: "彬县",
                label: "彬县",
                spell: "binxian",
                abb: "bx"
              },
              {
                id: 3128,
                value: "长武县",
                label: "长武县",
                spell: "changwuxian",
                abb: "cwx"
              },
              {
                id: 3129,
                value: "旬邑县",
                label: "旬邑县",
                spell: "xunyixian",
                abb: "xyx"
              },
              {
                id: 3130,
                value: "淳化县",
                label: "淳化县",
                spell: "chunhuaxian",
                abb: "chx"
              },
              {
                id: 3131,
                value: "武功县",
                label: "武功县",
                spell: "wugongxian",
                abb: "wgx"
              },
              {
                id: 3132,
                value: "兴平市",
                label: "兴平市",
                spell: "xingpingshi",
                abb: "xps"
              }
            ]
          },
          {
            id: 3133,
            value: "渭南市",
            label: "渭南市",
            spell: "weinanshi",
            abb: "wns",
            children: [
              {
                id: 3135,
                value: "临渭区",
                label: "临渭区",
                spell: "linweiqu",
                abb: "lwq"
              },
              {
                id: 3136,
                value: "华县",
                label: "华县",
                spell: "huaxian",
                abb: "hx"
              },
              {
                id: 3137,
                value: "潼关县",
                label: "潼关县",
                spell: "tongguanxian",
                abb: "tgx"
              },
              {
                id: 3138,
                value: "大荔县",
                label: "大荔县",
                spell: "dalixian",
                abb: "dlx"
              },
              {
                id: 3139,
                value: "合阳县",
                label: "合阳县",
                spell: "heyangxian",
                abb: "hyx"
              },
              {
                id: 3140,
                value: "澄城县",
                label: "澄城县",
                spell: "chengchengxian",
                abb: "ccx"
              },
              {
                id: 3141,
                value: "蒲城县",
                label: "蒲城县",
                spell: "puchengxian",
                abb: "pcx"
              },
              {
                id: 3142,
                value: "白水县",
                label: "白水县",
                spell: "baishuixian",
                abb: "bsx"
              },
              {
                id: 3143,
                value: "富平县",
                label: "富平县",
                spell: "fupingxian",
                abb: "fpx"
              },
              {
                id: 3144,
                value: "韩城市",
                label: "韩城市",
                spell: "hanchengshi",
                abb: "hcs"
              },
              {
                id: 3145,
                value: "华阴市",
                label: "华阴市",
                spell: "huayinshi",
                abb: "hys"
              }
            ]
          },
          {
            id: 3146,
            value: "延安市",
            label: "延安市",
            spell: "yananshi",
            abb: "yas",
            children: [
              {
                id: 3148,
                value: "宝塔区",
                label: "宝塔区",
                spell: "baotaqu",
                abb: "btq"
              },
              {
                id: 3149,
                value: "延长县",
                label: "延长县",
                spell: "yanchangxian",
                abb: "ycx"
              },
              {
                id: 3150,
                value: "延川县",
                label: "延川县",
                spell: "yanchuanxian",
                abb: "ycx"
              },
              {
                id: 3151,
                value: "子长县",
                label: "子长县",
                spell: "zichangxian",
                abb: "zcx"
              },
              {
                id: 3152,
                value: "安塞县",
                label: "安塞县",
                spell: "ansaixian",
                abb: "asx"
              },
              {
                id: 3153,
                value: "志丹县",
                label: "志丹县",
                spell: "zhidanxian",
                abb: "zdx"
              },
              {
                id: 3154,
                value: "吴起县",
                label: "吴起县",
                spell: "wuqixian",
                abb: "wqx"
              },
              {
                id: 3155,
                value: "甘泉县",
                label: "甘泉县",
                spell: "ganquanxian",
                abb: "gqx"
              },
              {
                id: 3156,
                value: "富县",
                label: "富县",
                spell: "fuxian",
                abb: "fx"
              },
              {
                id: 3157,
                value: "洛川县",
                label: "洛川县",
                spell: "luochuanxian",
                abb: "lcx"
              },
              {
                id: 3158,
                value: "宜川县",
                label: "宜川县",
                spell: "yichuanxian",
                abb: "ycx"
              },
              {
                id: 3159,
                value: "黄龙县",
                label: "黄龙县",
                spell: "huanglongxian",
                abb: "hlx"
              },
              {
                id: 3160,
                value: "黄陵县",
                label: "黄陵县",
                spell: "huanglingxian",
                abb: "hlx"
              }
            ]
          },
          {
            id: 3161,
            value: "汉中市",
            label: "汉中市",
            spell: "hanzhongshi",
            abb: "hzs",
            children: [
              {
                id: 3163,
                value: "汉台区",
                label: "汉台区",
                spell: "hantaiqu",
                abb: "htq"
              },
              {
                id: 3164,
                value: "南郑县",
                label: "南郑县",
                spell: "nanzhengxian",
                abb: "nzx"
              },
              {
                id: 3165,
                value: "城固县",
                label: "城固县",
                spell: "chengguxian",
                abb: "cgx"
              },
              {
                id: 3166,
                value: "洋县",
                label: "洋县",
                spell: "yangxian",
                abb: "yx"
              },
              {
                id: 3167,
                value: "西乡县",
                label: "西乡县",
                spell: "xixiangxian",
                abb: "xxx"
              },
              {
                id: 3168,
                value: "勉县",
                label: "勉县",
                spell: "mianxian",
                abb: "mx"
              },
              {
                id: 3169,
                value: "宁强县",
                label: "宁强县",
                spell: "ningqiangxian",
                abb: "nqx"
              },
              {
                id: 3170,
                value: "略阳县",
                label: "略阳县",
                spell: "lu:eyangxian",
                abb: "lyx"
              },
              {
                id: 3171,
                value: "镇巴县",
                label: "镇巴县",
                spell: "zhenbaxian",
                abb: "zbx"
              },
              {
                id: 3172,
                value: "留坝县",
                label: "留坝县",
                spell: "liubaxian",
                abb: "lbx"
              },
              {
                id: 3173,
                value: "佛坪县",
                label: "佛坪县",
                spell: "fopingxian",
                abb: "fpx"
              }
            ]
          },
          {
            id: 3174,
            value: "榆林市",
            label: "榆林市",
            spell: "yulinshi",
            abb: "yls",
            children: [
              {
                id: 3176,
                value: "榆阳区",
                label: "榆阳区",
                spell: "yuyangqu",
                abb: "yyq"
              },
              {
                id: 3177,
                value: "神木县",
                label: "神木县",
                spell: "shenmuxian",
                abb: "smx"
              },
              {
                id: 3178,
                value: "府谷县",
                label: "府谷县",
                spell: "fuguxian",
                abb: "fgx"
              },
              {
                id: 3179,
                value: "横山县",
                label: "横山县",
                spell: "hengshanxian",
                abb: "hsx"
              },
              {
                id: 3180,
                value: "靖边县",
                label: "靖边县",
                spell: "jingbianxian",
                abb: "jbx"
              },
              {
                id: 3181,
                value: "定边县",
                label: "定边县",
                spell: "dingbianxian",
                abb: "dbx"
              },
              {
                id: 3182,
                value: "绥德县",
                label: "绥德县",
                spell: "suidexian",
                abb: "sdx"
              },
              {
                id: 3183,
                value: "米脂县",
                label: "米脂县",
                spell: "mizhixian",
                abb: "mzx"
              },
              {
                id: 3184,
                value: "佳县",
                label: "佳县",
                spell: "jiaxian",
                abb: "jx"
              },
              {
                id: 3185,
                value: "吴堡县",
                label: "吴堡县",
                spell: "wubaoxian",
                abb: "wbx"
              },
              {
                id: 3186,
                value: "清涧县",
                label: "清涧县",
                spell: "qingjianxian",
                abb: "qjx"
              },
              {
                id: 3187,
                value: "子洲县",
                label: "子洲县",
                spell: "zizhouxian",
                abb: "zzx"
              }
            ]
          },
          {
            id: 3188,
            value: "安康市",
            label: "安康市",
            spell: "ankangshi",
            abb: "aks",
            children: [
              {
                id: 3190,
                value: "汉滨区",
                label: "汉滨区",
                spell: "hanbinqu",
                abb: "hbq"
              },
              {
                id: 3191,
                value: "汉阴县",
                label: "汉阴县",
                spell: "hanyinxian",
                abb: "hyx"
              },
              {
                id: 3192,
                value: "石泉县",
                label: "石泉县",
                spell: "shiquanxian",
                abb: "sqx"
              },
              {
                id: 3193,
                value: "宁陕县",
                label: "宁陕县",
                spell: "ningshanxian",
                abb: "nsx"
              },
              {
                id: 3194,
                value: "紫阳县",
                label: "紫阳县",
                spell: "ziyangxian",
                abb: "zyx"
              },
              {
                id: 3195,
                value: "岚皋县",
                label: "岚皋县",
                spell: "langaoxian",
                abb: "lgx"
              },
              {
                id: 3196,
                value: "平利县",
                label: "平利县",
                spell: "pinglixian",
                abb: "plx"
              },
              {
                id: 3197,
                value: "镇坪县",
                label: "镇坪县",
                spell: "zhenpingxian",
                abb: "zpx"
              },
              {
                id: 3198,
                value: "旬阳县",
                label: "旬阳县",
                spell: "xunyangxian",
                abb: "xyx"
              },
              {
                id: 3199,
                value: "白河县",
                label: "白河县",
                spell: "baihexian",
                abb: "bhx"
              }
            ]
          },
          {
            id: 3200,
            value: "商洛市",
            label: "商洛市",
            spell: "shangluoshi",
            abb: "sls",
            children: [
              {
                id: 3202,
                value: "商州区",
                label: "商州区",
                spell: "shangzhouqu",
                abb: "szq"
              },
              {
                id: 3203,
                value: "洛南县",
                label: "洛南县",
                spell: "luonanxian",
                abb: "lnx"
              },
              {
                id: 3204,
                value: "丹凤县",
                label: "丹凤县",
                spell: "danfengxian",
                abb: "dfx"
              },
              {
                id: 3205,
                value: "商南县",
                label: "商南县",
                spell: "shangnanxian",
                abb: "snx"
              },
              {
                id: 3206,
                value: "山阳县",
                label: "山阳县",
                spell: "shanyangxian",
                abb: "syx"
              },
              {
                id: 3207,
                value: "镇安县",
                label: "镇安县",
                spell: "zhenanxian",
                abb: "zax"
              },
              {
                id: 3208,
                value: "柞水县",
                label: "柞水县",
                spell: "zuoshuixian",
                abb: "zsx"
              }
            ]
          }
        ]
      },
      {
        id: 3209,
        value: "甘肃省",
        label: "甘肃省",
        spell: "gansusheng",
        abb: "gss",
        children: [
          {
            id: 3210,
            value: "兰州市",
            label: "兰州市",
            spell: "lanzhoushi",
            abb: "lzs",
            children: [
              {
                id: 3212,
                value: "城关区",
                label: "城关区",
                spell: "chengguanqu",
                abb: "cgq"
              },
              {
                id: 3213,
                value: "七里河区",
                label: "七里河区",
                spell: "qilihequ",
                abb: "qlhq"
              },
              {
                id: 3214,
                value: "西固区",
                label: "西固区",
                spell: "xiguqu",
                abb: "xgq"
              },
              {
                id: 3215,
                value: "安宁区",
                label: "安宁区",
                spell: "anningqu",
                abb: "anq"
              },
              {
                id: 3216,
                value: "红古区",
                label: "红古区",
                spell: "hongguqu",
                abb: "hgq"
              },
              {
                id: 3217,
                value: "永登县",
                label: "永登县",
                spell: "yongdengxian",
                abb: "ydx"
              },
              {
                id: 3218,
                value: "皋兰县",
                label: "皋兰县",
                spell: "gaolanxian",
                abb: "glx"
              },
              {
                id: 3219,
                value: "榆中县",
                label: "榆中县",
                spell: "yuzhongxian",
                abb: "yzx"
              }
            ]
          },
          {
            id: 3220,
            value: "嘉峪关市",
            label: "嘉峪关市",
            spell: "jiayuguanshi",
            abb: "jygs",
            children: [
              {
                id: 3221,
                value: "jiayuguanshi",
                label: "jiayuguanshi",
                spell: "shixiaqu",
                abb: "jygs"
              }
            ]
          },
          {
            id: 3222,
            value: "金昌市",
            label: "金昌市",
            spell: "jinchangshi",
            abb: "jcs",
            children: [
              {
                id: 3224,
                value: "金川区",
                label: "金川区",
                spell: "jinchuanqu",
                abb: "jcq"
              },
              {
                id: 3225,
                value: "永昌县",
                label: "永昌县",
                spell: "yongchangxian",
                abb: "ycx"
              }
            ]
          },
          {
            id: 3226,
            value: "白银市",
            label: "白银市",
            spell: "baiyinshi",
            abb: "bys",
            children: [
              {
                id: 3228,
                value: "白银区",
                label: "白银区",
                spell: "baiyinqu",
                abb: "byq"
              },
              {
                id: 3229,
                value: "平川区",
                label: "平川区",
                spell: "pingchuanqu",
                abb: "pcq"
              },
              {
                id: 3230,
                value: "靖远县",
                label: "靖远县",
                spell: "jingyuanxian",
                abb: "jyx"
              },
              {
                id: 3231,
                value: "会宁县",
                label: "会宁县",
                spell: "huiningxian",
                abb: "hnx"
              },
              {
                id: 3232,
                value: "景泰县",
                label: "景泰县",
                spell: "jingtaixian",
                abb: "jtx"
              }
            ]
          },
          {
            id: 3233,
            value: "天水市",
            label: "天水市",
            spell: "tianshuishi",
            abb: "tss",
            children: [
              {
                id: 3235,
                value: "秦州区",
                label: "秦州区",
                spell: "qinzhouqu",
                abb: "qzq"
              },
              {
                id: 3236,
                value: "麦积区",
                label: "麦积区",
                spell: "maijiqu",
                abb: "mjq"
              },
              {
                id: 3237,
                value: "清水县",
                label: "清水县",
                spell: "qingshuixian",
                abb: "qsx"
              },
              {
                id: 3238,
                value: "秦安县",
                label: "秦安县",
                spell: "qinanxian",
                abb: "qax"
              },
              {
                id: 3239,
                value: "甘谷县",
                label: "甘谷县",
                spell: "ganguxian",
                abb: "ggx"
              },
              {
                id: 3240,
                value: "武山县",
                label: "武山县",
                spell: "wushanxian",
                abb: "wsx"
              },
              {
                id: 3241,
                value: "张家川回族自治县",
                label: "张家川回族自治县",
                spell: "zhangjiachuanhuizuzizhixian",
                abb: "zjchzzzx"
              }
            ]
          },
          {
            id: 3242,
            value: "武威市",
            label: "武威市",
            spell: "wuweishi",
            abb: "wws",
            children: [
              {
                id: 3244,
                value: "凉州区",
                label: "凉州区",
                spell: "liangzhouqu",
                abb: "lzq"
              },
              {
                id: 3245,
                value: "民勤县",
                label: "民勤县",
                spell: "minqinxian",
                abb: "mqx"
              },
              {
                id: 3246,
                value: "古浪县",
                label: "古浪县",
                spell: "gulangxian",
                abb: "glx"
              },
              {
                id: 3247,
                value: "天祝藏族自治县",
                label: "天祝藏族自治县",
                spell: "tianzhuzangzuzizhixian",
                abb: "tzzzzzx"
              }
            ]
          },
          {
            id: 3248,
            value: "张掖市",
            label: "张掖市",
            spell: "zhangyeshi",
            abb: "zys",
            children: [
              {
                id: 3250,
                value: "甘州区",
                label: "甘州区",
                spell: "ganzhouqu",
                abb: "gzq"
              },
              {
                id: 3251,
                value: "肃南裕固族自治县",
                label: "肃南裕固族自治县",
                spell: "sunanyuguzuzizhixian",
                abb: "snygzzzx"
              },
              {
                id: 3252,
                value: "民乐县",
                label: "民乐县",
                spell: "minlexian",
                abb: "mlx"
              },
              {
                id: 3253,
                value: "临泽县",
                label: "临泽县",
                spell: "linzexian",
                abb: "lzx"
              },
              {
                id: 3254,
                value: "高台县",
                label: "高台县",
                spell: "gaotaixian",
                abb: "gtx"
              },
              {
                id: 3255,
                value: "山丹县",
                label: "山丹县",
                spell: "shandanxian",
                abb: "sdx"
              }
            ]
          },
          {
            id: 3256,
            value: "平凉市",
            label: "平凉市",
            spell: "pingliangshi",
            abb: "pls",
            children: [
              {
                id: 3258,
                value: "崆峒区",
                label: "崆峒区",
                spell: "kongtongqu",
                abb: "ktq"
              },
              {
                id: 3259,
                value: "泾川县",
                label: "泾川县",
                spell: "jingchuanxian",
                abb: "jcx"
              },
              {
                id: 3260,
                value: "灵台县",
                label: "灵台县",
                spell: "lingtaixian",
                abb: "ltx"
              },
              {
                id: 3261,
                value: "崇信县",
                label: "崇信县",
                spell: "chongxinxian",
                abb: "cxx"
              },
              {
                id: 3262,
                value: "华亭县",
                label: "华亭县",
                spell: "huatingxian",
                abb: "htx"
              },
              {
                id: 3263,
                value: "庄浪县",
                label: "庄浪县",
                spell: "zhuanglangxian",
                abb: "zlx"
              },
              {
                id: 3264,
                value: "静宁县",
                label: "静宁县",
                spell: "jingningxian",
                abb: "jnx"
              }
            ]
          },
          {
            id: 3265,
            value: "酒泉市",
            label: "酒泉市",
            spell: "jiuquanshi",
            abb: "jqs",
            children: [
              {
                id: 3267,
                value: "肃州区",
                label: "肃州区",
                spell: "suzhouqu",
                abb: "szq"
              },
              {
                id: 3268,
                value: "金塔县",
                label: "金塔县",
                spell: "jintaxian",
                abb: "jtx"
              },
              {
                id: 3269,
                value: "瓜州县",
                label: "瓜州县",
                spell: "guazhouxian",
                abb: "gzx"
              },
              {
                id: 3270,
                value: "肃北蒙古族自治县",
                label: "肃北蒙古族自治县",
                spell: "subeimengguzuzizhixian",
                abb: "sbmgzzzx"
              },
              {
                id: 3271,
                value: "阿克塞哈萨克族自治县",
                label: "阿克塞哈萨克族自治县",
                spell: "akesaihasakezuzizhixian",
                abb: "akshskzzzx"
              },
              {
                id: 3272,
                value: "玉门市",
                label: "玉门市",
                spell: "yumenshi",
                abb: "yms"
              },
              {
                id: 3273,
                value: "敦煌市",
                label: "敦煌市",
                spell: "dunhuangshi",
                abb: "dhs"
              }
            ]
          },
          {
            id: 3274,
            value: "庆阳市",
            label: "庆阳市",
            spell: "qingyangshi",
            abb: "qys",
            children: [
              {
                id: 3276,
                value: "西峰区",
                label: "西峰区",
                spell: "xifengqu",
                abb: "xfq"
              },
              {
                id: 3277,
                value: "庆城县",
                label: "庆城县",
                spell: "qingchengxian",
                abb: "qcx"
              },
              {
                id: 3278,
                value: "环县",
                label: "环县",
                spell: "huanxian",
                abb: "hx"
              },
              {
                id: 3279,
                value: "华池县",
                label: "华池县",
                spell: "huachixian",
                abb: "hcx"
              },
              {
                id: 3280,
                value: "合水县",
                label: "合水县",
                spell: "heshuixian",
                abb: "hsx"
              },
              {
                id: 3281,
                value: "正宁县",
                label: "正宁县",
                spell: "zhengningxian",
                abb: "znx"
              },
              {
                id: 3282,
                value: "宁县",
                label: "宁县",
                spell: "ningxian",
                abb: "nx"
              },
              {
                id: 3283,
                value: "镇原县",
                label: "镇原县",
                spell: "zhenyuanxian",
                abb: "zyx"
              }
            ]
          },
          {
            id: 3284,
            value: "定西市",
            label: "定西市",
            spell: "dingxishi",
            abb: "dxs",
            children: [
              {
                id: 3286,
                value: "安定区",
                label: "安定区",
                spell: "andingqu",
                abb: "adq"
              },
              {
                id: 3287,
                value: "通渭县",
                label: "通渭县",
                spell: "tongweixian",
                abb: "twx"
              },
              {
                id: 3288,
                value: "陇西县",
                label: "陇西县",
                spell: "longxixian",
                abb: "lxx"
              },
              {
                id: 3289,
                value: "渭源县",
                label: "渭源县",
                spell: "weiyuanxian",
                abb: "wyx"
              },
              {
                id: 3290,
                value: "临洮县",
                label: "临洮县",
                spell: "lintaoxian",
                abb: "ltx"
              },
              {
                id: 3291,
                value: "漳县",
                label: "漳县",
                spell: "zhangxian",
                abb: "zx"
              },
              {
                id: 3292,
                value: "岷县",
                label: "岷县",
                spell: "minxian",
                abb: "mx"
              }
            ]
          },
          {
            id: 3293,
            value: "陇南市",
            label: "陇南市",
            spell: "longnanshi",
            abb: "lns",
            children: [
              {
                id: 3295,
                value: "武都区",
                label: "武都区",
                spell: "wudouqu",
                abb: "wdq"
              },
              {
                id: 3296,
                value: "成县",
                label: "成县",
                spell: "chengxian",
                abb: "cx"
              },
              {
                id: 3297,
                value: "文县",
                label: "文县",
                spell: "wenxian",
                abb: "wx"
              },
              {
                id: 3298,
                value: "宕昌县",
                label: "宕昌县",
                spell: "dangchangxian",
                abb: "dcx"
              },
              {
                id: 3299,
                value: "康县",
                label: "康县",
                spell: "kangxian",
                abb: "kx"
              },
              {
                id: 3300,
                value: "西和县",
                label: "西和县",
                spell: "xihexian",
                abb: "xhx"
              },
              {
                id: 3301,
                value: "礼县",
                label: "礼县",
                spell: "lixian",
                abb: "lx"
              },
              {
                id: 3302,
                value: "徽县",
                label: "徽县",
                spell: "huixian",
                abb: "hx"
              },
              {
                id: 3303,
                value: "两当县",
                label: "两当县",
                spell: "liangdangxian",
                abb: "ldx"
              }
            ]
          },
          {
            id: 3304,
            value: "临夏回族自治州",
            label: "临夏回族自治州",
            spell: "linxiahuizuzizhizhou",
            abb: "lxhzzzz",
            children: [
              {
                id: 3305,
                value: "临夏市",
                label: "临夏市",
                spell: "linxiashi",
                abb: "lxs"
              },
              {
                id: 3306,
                value: "临夏县",
                label: "临夏县",
                spell: "linxiaxian",
                abb: "lxx"
              },
              {
                id: 3307,
                value: "康乐县",
                label: "康乐县",
                spell: "kanglexian",
                abb: "klx"
              },
              {
                id: 3308,
                value: "永靖县",
                label: "永靖县",
                spell: "yongjingxian",
                abb: "yjx"
              },
              {
                id: 3309,
                value: "广河县",
                label: "广河县",
                spell: "guanghexian",
                abb: "ghx"
              },
              {
                id: 3310,
                value: "和政县",
                label: "和政县",
                spell: "hezhengxian",
                abb: "hzx"
              },
              {
                id: 3311,
                value: "东乡族自治县",
                label: "东乡族自治县",
                spell: "dongxiangzuzizhixian",
                abb: "dxzzzx"
              },
              {
                id: 3312,
                value: "积石山保安族东乡族撒拉族自治县",
                label: "积石山保安族东乡族撒拉族自治县",
                spell: "jishishanbaoanzudongxiangzusalazuzizhixian",
                abb: "jssbazdxzslzzzx"
              }
            ]
          },
          {
            id: 3313,
            value: "甘南藏族自治州",
            label: "甘南藏族自治州",
            spell: "gannanzangzuzizhizhou",
            abb: "gnzzzzz",
            children: [
              {
                id: 3314,
                value: "合作市",
                label: "合作市",
                spell: "hezuoshi",
                abb: "hzs"
              },
              {
                id: 3315,
                value: "临潭县",
                label: "临潭县",
                spell: "lintanxian",
                abb: "ltx"
              },
              {
                id: 3316,
                value: "卓尼县",
                label: "卓尼县",
                spell: "zhuonixian",
                abb: "znx"
              },
              {
                id: 3317,
                value: "舟曲县",
                label: "舟曲县",
                spell: "zhouquxian",
                abb: "zqx"
              },
              {
                id: 3318,
                value: "迭部县",
                label: "迭部县",
                spell: "diebuxian",
                abb: "dbx"
              },
              {
                id: 3319,
                value: "玛曲县",
                label: "玛曲县",
                spell: "maquxian",
                abb: "mqx"
              },
              {
                id: 3320,
                value: "碌曲县",
                label: "碌曲县",
                spell: "liuquxian",
                abb: "lqx"
              },
              {
                id: 3321,
                value: "夏河县",
                label: "夏河县",
                spell: "xiahexian",
                abb: "xhx"
              }
            ]
          }
        ]
      },
      {
        id: 3322,
        value: "青海省",
        label: "青海省",
        spell: "qinghaisheng",
        abb: "qhs",
        children: [
          {
            id: 3323,
            value: "西宁市",
            label: "西宁市",
            spell: "xiningshi",
            abb: "xns",
            children: [
              {
                id: 3325,
                value: "城东区",
                label: "城东区",
                spell: "chengdongqu",
                abb: "cdq"
              },
              {
                id: 3326,
                value: "城中区",
                label: "城中区",
                spell: "chengzhongqu",
                abb: "czq"
              },
              {
                id: 3327,
                value: "城西区",
                label: "城西区",
                spell: "chengxiqu",
                abb: "cxq"
              },
              {
                id: 3328,
                value: "城北区",
                label: "城北区",
                spell: "chengbeiqu",
                abb: "cbq"
              },
              {
                id: 3329,
                value: "大通回族土族自治县",
                label: "大通回族土族自治县",
                spell: "datonghuizutuzuzizhixian",
                abb: "dthztzzzx"
              },
              {
                id: 3330,
                value: "湟中县",
                label: "湟中县",
                spell: "huangzhongxian",
                abb: "hzx"
              },
              {
                id: 3331,
                value: "湟源县",
                label: "湟源县",
                spell: "huangyuanxian",
                abb: "hyx"
              }
            ]
          },
          {
            id: 3332,
            value: "海东地区",
            label: "海东地区",
            spell: "haidongdiqu",
            abb: "hddq",
            children: [
              {
                id: 3333,
                value: "平安县",
                label: "平安县",
                spell: "pinganxian",
                abb: "pax"
              },
              {
                id: 3334,
                value: "民和回族土族自治县",
                label: "民和回族土族自治县",
                spell: "minhehuizutuzuzizhixian",
                abb: "mhhztzzzx"
              },
              {
                id: 3335,
                value: "乐都县",
                label: "乐都县",
                spell: "ledouxian",
                abb: "ldx"
              },
              {
                id: 3336,
                value: "互助土族自治县",
                label: "互助土族自治县",
                spell: "huzhutuzuzizhixian",
                abb: "hztzzzx"
              },
              {
                id: 3337,
                value: "化隆回族自治县",
                label: "化隆回族自治县",
                spell: "hualonghuizuzizhixian",
                abb: "hlhzzzx"
              },
              {
                id: 3338,
                value: "循化撒拉族自治县",
                label: "循化撒拉族自治县",
                spell: "xunhuasalazuzizhixian",
                abb: "xhslzzzx"
              }
            ]
          },
          {
            id: 3339,
            value: "海北藏族自治州",
            label: "海北藏族自治州",
            spell: "haibeizangzuzizhizhou",
            abb: "hbzzzzz",
            children: [
              {
                id: 3340,
                value: "门源回族自治县",
                label: "门源回族自治县",
                spell: "menyuanhuizuzizhixian",
                abb: "myhzzzx"
              },
              {
                id: 3341,
                value: "祁连县",
                label: "祁连县",
                spell: "qilianxian",
                abb: "qlx"
              },
              {
                id: 3342,
                value: "海晏县",
                label: "海晏县",
                spell: "haiyanxian",
                abb: "hyx"
              },
              {
                id: 3343,
                value: "刚察县",
                label: "刚察县",
                spell: "gangchaxian",
                abb: "gcx"
              }
            ]
          },
          {
            id: 3344,
            value: "黄南藏族自治州",
            label: "黄南藏族自治州",
            spell: "huangnanzangzuzizhizhou",
            abb: "hnzzzzz",
            children: [
              {
                id: 3345,
                value: "同仁县",
                label: "同仁县",
                spell: "tongrenxian",
                abb: "trx"
              },
              {
                id: 3346,
                value: "尖扎县",
                label: "尖扎县",
                spell: "jianzhaxian",
                abb: "jzx"
              },
              {
                id: 3347,
                value: "泽库县",
                label: "泽库县",
                spell: "zekuxian",
                abb: "zkx"
              },
              {
                id: 3348,
                value: "河南蒙古族自治县",
                label: "河南蒙古族自治县",
                spell: "henanmengguzuzizhixian",
                abb: "hnmgzzzx"
              }
            ]
          },
          {
            id: 3349,
            value: "海南藏族自治州",
            label: "海南藏族自治州",
            spell: "hainanzangzuzizhizhou",
            abb: "hnzzzzz",
            children: [
              {
                id: 3350,
                value: "共和县",
                label: "共和县",
                spell: "gonghexian",
                abb: "ghx"
              },
              {
                id: 3351,
                value: "同德县",
                label: "同德县",
                spell: "tongdexian",
                abb: "tdx"
              },
              {
                id: 3352,
                value: "贵德县",
                label: "贵德县",
                spell: "guidexian",
                abb: "gdx"
              },
              {
                id: 3353,
                value: "兴海县",
                label: "兴海县",
                spell: "xinghaixian",
                abb: "xhx"
              },
              {
                id: 3354,
                value: "贵南县",
                label: "贵南县",
                spell: "guinanxian",
                abb: "gnx"
              }
            ]
          },
          {
            id: 3355,
            value: "果洛藏族自治州",
            label: "果洛藏族自治州",
            spell: "guoluozangzuzizhizhou",
            abb: "glzzzzz",
            children: [
              {
                id: 3356,
                value: "玛沁县",
                label: "玛沁县",
                spell: "maqinxian",
                abb: "mqx"
              },
              {
                id: 3357,
                value: "班玛县",
                label: "班玛县",
                spell: "banmaxian",
                abb: "bmx"
              },
              {
                id: 3358,
                value: "甘德县",
                label: "甘德县",
                spell: "gandexian",
                abb: "gdx"
              },
              {
                id: 3359,
                value: "达日县",
                label: "达日县",
                spell: "darixian",
                abb: "drx"
              },
              {
                id: 3360,
                value: "久治县",
                label: "久治县",
                spell: "jiuzhixian",
                abb: "jzx"
              },
              {
                id: 3361,
                value: "玛多县",
                label: "玛多县",
                spell: "maduoxian",
                abb: "mdx"
              }
            ]
          },
          {
            id: 3362,
            value: "玉树藏族自治州",
            label: "玉树藏族自治州",
            spell: "yushuzangzuzizhizhou",
            abb: "yszzzzz",
            children: [
              {
                id: 3363,
                value: "玉树县",
                label: "玉树县",
                spell: "yushuxian",
                abb: "ysx"
              },
              {
                id: 3364,
                value: "杂多县",
                label: "杂多县",
                spell: "zaduoxian",
                abb: "zdx"
              },
              {
                id: 3365,
                value: "称多县",
                label: "称多县",
                spell: "chengduoxian",
                abb: "cdx"
              },
              {
                id: 3366,
                value: "治多县",
                label: "治多县",
                spell: "zhiduoxian",
                abb: "zdx"
              },
              {
                id: 3367,
                value: "囊谦县",
                label: "囊谦县",
                spell: "nangqianxian",
                abb: "nqx"
              },
              {
                id: 3368,
                value: "曲麻莱县",
                label: "曲麻莱县",
                spell: "qumalaixian",
                abb: "qmlx"
              }
            ]
          },
          {
            id: 3369,
            value: "海西蒙古族藏族自治州",
            label: "海西蒙古族藏族自治州",
            spell: "haiximengguzuzangzuzizhizhou",
            abb: "hxmgzzzzzz",
            children: [
              {
                id: 3370,
                value: "格尔木市",
                label: "格尔木市",
                spell: "geermushi",
                abb: "gems"
              },
              {
                id: 3371,
                value: "德令哈市",
                label: "德令哈市",
                spell: "delinghashi",
                abb: "dlhs"
              },
              {
                id: 3372,
                value: "乌兰县",
                label: "乌兰县",
                spell: "wulanxian",
                abb: "wlx"
              },
              {
                id: 3373,
                value: "都兰县",
                label: "都兰县",
                spell: "doulanxian",
                abb: "dlx"
              },
              {
                id: 3374,
                value: "天峻县",
                label: "天峻县",
                spell: "tianjunxian",
                abb: "tjx"
              }
            ]
          }
        ]
      },
      {
        id: 3375,
        value: "宁夏回族自治区",
        label: "宁夏回族自治区",
        spell: "ningxiahuizuzizhiqu",
        abb: "nxhzzzq",
        children: [
          {
            id: 3376,
            value: "银川市",
            label: "银川市",
            spell: "yinchuanshi",
            abb: "ycs",
            children: [
              {
                id: 3378,
                value: "兴庆区",
                label: "兴庆区",
                spell: "xingqingqu",
                abb: "xqq"
              },
              {
                id: 3379,
                value: "西夏区",
                label: "西夏区",
                spell: "xixiaqu",
                abb: "xxq"
              },
              {
                id: 3380,
                value: "金凤区",
                label: "金凤区",
                spell: "jinfengqu",
                abb: "jfq"
              },
              {
                id: 3381,
                value: "永宁县",
                label: "永宁县",
                spell: "yongningxian",
                abb: "ynx"
              },
              {
                id: 3382,
                value: "贺兰县",
                label: "贺兰县",
                spell: "helanxian",
                abb: "hlx"
              },
              {
                id: 3383,
                value: "灵武市",
                label: "灵武市",
                spell: "lingwushi",
                abb: "lws"
              }
            ]
          },
          {
            id: 3384,
            value: "石嘴山市",
            label: "石嘴山市",
            spell: "shizuishanshi",
            abb: "szss",
            children: [
              {
                id: 3386,
                value: "大武口区",
                label: "大武口区",
                spell: "dawukouqu",
                abb: "dwkq"
              },
              {
                id: 3387,
                value: "惠农区",
                label: "惠农区",
                spell: "huinongqu",
                abb: "hnq"
              },
              {
                id: 3388,
                value: "平罗县",
                label: "平罗县",
                spell: "pingluoxian",
                abb: "plx"
              }
            ]
          },
          {
            id: 3389,
            value: "吴忠市",
            label: "吴忠市",
            spell: "wuzhongshi",
            abb: "wzs",
            children: [
              {
                id: 3391,
                value: "利通区",
                label: "利通区",
                spell: "litongqu",
                abb: "ltq"
              },
              {
                id: 3392,
                value: "盐池县",
                label: "盐池县",
                spell: "yanchixian",
                abb: "ycx"
              },
              {
                id: 3393,
                value: "同心县",
                label: "同心县",
                spell: "tongxinxian",
                abb: "txx"
              },
              {
                id: 3394,
                value: "青铜峡市",
                label: "青铜峡市",
                spell: "qingtongxiashi",
                abb: "qtxs"
              }
            ]
          },
          {
            id: 3395,
            value: "固原市",
            label: "固原市",
            spell: "guyuanshi",
            abb: "gys",
            children: [
              {
                id: 3397,
                value: "原州区",
                label: "原州区",
                spell: "yuanzhouqu",
                abb: "yzq"
              },
              {
                id: 3398,
                value: "西吉县",
                label: "西吉县",
                spell: "xijixian",
                abb: "xjx"
              },
              {
                id: 3399,
                value: "隆德县",
                label: "隆德县",
                spell: "longdexian",
                abb: "ldx"
              },
              {
                id: 3400,
                value: "泾源县",
                label: "泾源县",
                spell: "jingyuanxian",
                abb: "jyx"
              },
              {
                id: 3401,
                value: "彭阳县",
                label: "彭阳县",
                spell: "pengyangxian",
                abb: "pyx"
              }
            ]
          },
          {
            id: 3402,
            value: "中卫市",
            label: "中卫市",
            spell: "zhongweishi",
            abb: "zws",
            children: [
              {
                id: 3404,
                value: "沙坡头区",
                label: "沙坡头区",
                spell: "shapotouqu",
                abb: "sptq"
              },
              {
                id: 3405,
                value: "中宁县",
                label: "中宁县",
                spell: "zhongningxian",
                abb: "znx"
              },
              {
                id: 3406,
                value: "海原县",
                label: "海原县",
                spell: "haiyuanxian",
                abb: "hyx"
              }
            ]
          }
        ]
      },
      {
        id: 3407,
        value: "新疆维吾尔自治区",
        label: "新疆维吾尔自治区",
        spell: "xinjiangweiwuerzizhiqu",
        abb: "xjwwezzq",
        children: [
          {
            id: 3408,
            value: "乌鲁木齐市",
            label: "乌鲁木齐市",
            spell: "wulumuqishi",
            abb: "wlmqs",
            children: [
              {
                id: 3410,
                value: "天山区",
                label: "天山区",
                spell: "tianshanqu",
                abb: "tsq"
              },
              {
                id: 3411,
                value: "沙依巴克区",
                label: "沙依巴克区",
                spell: "shayibakequ",
                abb: "sybkq"
              },
              {
                id: 3412,
                value: "新市区",
                label: "新市区",
                spell: "xinshiqu",
                abb: "xsq"
              },
              {
                id: 3413,
                value: "水磨沟区",
                label: "水磨沟区",
                spell: "shuimogouqu",
                abb: "smgq"
              },
              {
                id: 3414,
                value: "头屯河区",
                label: "头屯河区",
                spell: "toutunhequ",
                abb: "tthq"
              },
              {
                id: 3415,
                value: "达坂城区",
                label: "达坂城区",
                spell: "dabanchengqu",
                abb: "dbcq"
              },
              {
                id: 3416,
                value: "米东区",
                label: "米东区",
                spell: "midongqu",
                abb: "mdq"
              },
              {
                id: 3417,
                value: "乌鲁木齐县",
                label: "乌鲁木齐县",
                spell: "wulumuqixian",
                abb: "wlmqx"
              }
            ]
          },
          {
            id: 3418,
            value: "克拉玛依市",
            label: "克拉玛依市",
            spell: "kelamayishi",
            abb: "klmys",
            children: [
              {
                id: 3420,
                value: "独山子区",
                label: "独山子区",
                spell: "dushanziqu",
                abb: "dszq"
              },
              {
                id: 3421,
                value: "克拉玛依区",
                label: "克拉玛依区",
                spell: "kelamayiqu",
                abb: "klmyq"
              },
              {
                id: 3422,
                value: "白碱滩区",
                label: "白碱滩区",
                spell: "baijiantanqu",
                abb: "bjtq"
              },
              {
                id: 3423,
                value: "乌尔禾区",
                label: "乌尔禾区",
                spell: "wuerhequ",
                abb: "wehq"
              }
            ]
          },
          {
            id: 3424,
            value: "吐鲁番地区",
            label: "吐鲁番地区",
            spell: "tulufandiqu",
            abb: "tlfdq",
            children: [
              {
                id: 3425,
                value: "吐鲁番市",
                label: "吐鲁番市",
                spell: "tulufanshi",
                abb: "tlfs"
              },
              {
                id: 3426,
                value: "鄯善县",
                label: "鄯善县",
                spell: "shanshanxian",
                abb: "ssx"
              },
              {
                id: 3427,
                value: "托克逊县",
                label: "托克逊县",
                spell: "tuokexunxian",
                abb: "tkxx"
              }
            ]
          },
          {
            id: 3428,
            value: "哈密地区",
            label: "哈密地区",
            spell: "hamidiqu",
            abb: "hmdq",
            children: [
              {
                id: 3429,
                value: "哈密市",
                label: "哈密市",
                spell: "hamishi",
                abb: "hms"
              },
              {
                id: 3430,
                value: "巴里坤哈萨克自治县",
                label: "巴里坤哈萨克自治县",
                spell: "balikunhasakezizhixian",
                abb: "blkhskzzx"
              },
              {
                id: 3431,
                value: "伊吾县",
                label: "伊吾县",
                spell: "yiwuxian",
                abb: "ywx"
              }
            ]
          },
          {
            id: 3432,
            value: "昌吉回族自治州",
            label: "昌吉回族自治州",
            spell: "changjihuizuzizhizhou",
            abb: "cjhzzzz",
            children: [
              {
                id: 3433,
                value: "昌吉市",
                label: "昌吉市",
                spell: "changjishi",
                abb: "cjs"
              },
              {
                id: 3434,
                value: "阜康市",
                label: "阜康市",
                spell: "fukangshi",
                abb: "fks"
              },
              {
                id: 3435,
                value: "呼图壁县",
                label: "呼图壁县",
                spell: "hutubixian",
                abb: "htbx"
              },
              {
                id: 3436,
                value: "玛纳斯县",
                label: "玛纳斯县",
                spell: "manasixian",
                abb: "mnsx"
              },
              {
                id: 3437,
                value: "奇台县",
                label: "奇台县",
                spell: "qitaixian",
                abb: "qtx"
              },
              {
                id: 3438,
                value: "吉木萨尔县",
                label: "吉木萨尔县",
                spell: "jimusaerxian",
                abb: "jmsex"
              },
              {
                id: 3439,
                value: "木垒哈萨克自治县",
                label: "木垒哈萨克自治县",
                spell: "muleihasakezizhixian",
                abb: "mlhskzzx"
              }
            ]
          },
          {
            id: 3440,
            value: "博尔塔拉蒙古自治州",
            label: "博尔塔拉蒙古自治州",
            spell: "boertalamengguzizhizhou",
            abb: "betlmgzzz",
            children: [
              {
                id: 3441,
                value: "博乐市",
                label: "博乐市",
                spell: "boleshi",
                abb: "bls"
              },
              {
                id: 3442,
                value: "精河县",
                label: "精河县",
                spell: "jinghexian",
                abb: "jhx"
              },
              {
                id: 3443,
                value: "温泉县",
                label: "温泉县",
                spell: "wenquanxian",
                abb: "wqx"
              }
            ]
          },
          {
            id: 3444,
            value: "巴音郭楞蒙古自治州",
            label: "巴音郭楞蒙古自治州",
            spell: "bayinguolengmengguzizhizhou",
            abb: "byglmgzzz",
            children: [
              {
                id: 3445,
                value: "库尔勒市",
                label: "库尔勒市",
                spell: "kuerleshi",
                abb: "kels"
              },
              {
                id: 3446,
                value: "轮台县",
                label: "轮台县",
                spell: "luntaixian",
                abb: "ltx"
              },
              {
                id: 3447,
                value: "尉犁县",
                label: "尉犁县",
                spell: "weilixian",
                abb: "wlx"
              },
              {
                id: 3448,
                value: "若羌县",
                label: "若羌县",
                spell: "ruoqiangxian",
                abb: "rqx"
              },
              {
                id: 3449,
                value: "且末县",
                label: "且末县",
                spell: "qiemoxian",
                abb: "qmx"
              },
              {
                id: 3450,
                value: "焉耆回族自治县",
                label: "焉耆回族自治县",
                spell: "yanqihuizuzizhixian",
                abb: "yqhzzzx"
              },
              {
                id: 3451,
                value: "和静县",
                label: "和静县",
                spell: "hejingxian",
                abb: "hjx"
              },
              {
                id: 3452,
                value: "和硕县",
                label: "和硕县",
                spell: "heshuoxian",
                abb: "hsx"
              },
              {
                id: 3453,
                value: "博湖县",
                label: "博湖县",
                spell: "bohuxian",
                abb: "bhx"
              }
            ]
          },
          {
            id: 3454,
            value: "阿克苏地区",
            label: "阿克苏地区",
            spell: "akesudiqu",
            abb: "aksdq",
            children: [
              {
                id: 3455,
                value: "阿克苏市",
                label: "阿克苏市",
                spell: "akesushi",
                abb: "akss"
              },
              {
                id: 3456,
                value: "温宿县",
                label: "温宿县",
                spell: "wensuxian",
                abb: "wsx"
              },
              {
                id: 3457,
                value: "库车县",
                label: "库车县",
                spell: "kuchexian",
                abb: "kcx"
              },
              {
                id: 3458,
                value: "沙雅县",
                label: "沙雅县",
                spell: "shayaxian",
                abb: "syx"
              },
              {
                id: 3459,
                value: "新和县",
                label: "新和县",
                spell: "xinhexian",
                abb: "xhx"
              },
              {
                id: 3460,
                value: "拜城县",
                label: "拜城县",
                spell: "baichengxian",
                abb: "bcx"
              },
              {
                id: 3461,
                value: "乌什县",
                label: "乌什县",
                spell: "wushenxian",
                abb: "wsx"
              },
              {
                id: 3462,
                value: "阿瓦提县",
                label: "阿瓦提县",
                spell: "awatixian",
                abb: "awtx"
              },
              {
                id: 3463,
                value: "柯坪县",
                label: "柯坪县",
                spell: "kepingxian",
                abb: "kpx"
              }
            ]
          },
          {
            id: 3464,
            value: "克孜勒苏柯尔克孜自治州",
            label: "克孜勒苏柯尔克孜自治州",
            spell: "kezilesukeerkezizizhizhou",
            abb: "kzlskekzzzz",
            children: [
              {
                id: 3465,
                value: "阿图什市",
                label: "阿图什市",
                spell: "atushenshi",
                abb: "atss"
              },
              {
                id: 3466,
                value: "阿克陶县",
                label: "阿克陶县",
                spell: "aketaoxian",
                abb: "aktx"
              },
              {
                id: 3467,
                value: "阿合奇县",
                label: "阿合奇县",
                spell: "aheqixian",
                abb: "ahqx"
              },
              {
                id: 3468,
                value: "乌恰县",
                label: "乌恰县",
                spell: "wuqiaxian",
                abb: "wqx"
              }
            ]
          },
          {
            id: 3469,
            value: "喀什地区",
            label: "喀什地区",
            spell: "kashendiqu",
            abb: "ksdq",
            children: [
              {
                id: 3470,
                value: "喀什市",
                label: "喀什市",
                spell: "kashenshi",
                abb: "kss"
              },
              {
                id: 3471,
                value: "疏附县",
                label: "疏附县",
                spell: "shufuxian",
                abb: "sfx"
              },
              {
                id: 3472,
                value: "疏勒县",
                label: "疏勒县",
                spell: "shulexian",
                abb: "slx"
              },
              {
                id: 3473,
                value: "英吉沙县",
                label: "英吉沙县",
                spell: "yingjishaxian",
                abb: "yjsx"
              },
              {
                id: 3474,
                value: "泽普县",
                label: "泽普县",
                spell: "zepuxian",
                abb: "zpx"
              },
              {
                id: 3475,
                value: "莎车县",
                label: "莎车县",
                spell: "shachexian",
                abb: "scx"
              },
              {
                id: 3476,
                value: "叶城县",
                label: "叶城县",
                spell: "yechengxian",
                abb: "ycx"
              },
              {
                id: 3477,
                value: "麦盖提县",
                label: "麦盖提县",
                spell: "maigaitixian",
                abb: "mgtx"
              },
              {
                id: 3478,
                value: "岳普湖县",
                label: "岳普湖县",
                spell: "yuepuhuxian",
                abb: "yphx"
              },
              {
                id: 3479,
                value: "伽师县",
                label: "伽师县",
                spell: "jiashixian",
                abb: "jsx"
              },
              {
                id: 3480,
                value: "巴楚县",
                label: "巴楚县",
                spell: "bachuxian",
                abb: "bcx"
              },
              {
                id: 3481,
                value: "塔什库尔干塔吉克自治县",
                label: "塔什库尔干塔吉克自治县",
                spell: "tashenkuergantajikezizhixian",
                abb: "tskegtjkzzx"
              }
            ]
          },
          {
            id: 3482,
            value: "和田地区",
            label: "和田地区",
            spell: "hetiandiqu",
            abb: "htdq",
            children: [
              {
                id: 3483,
                value: "和田市",
                label: "和田市",
                spell: "hetianshi",
                abb: "hts"
              },
              {
                id: 3484,
                value: "和田县",
                label: "和田县",
                spell: "hetianxian",
                abb: "htx"
              },
              {
                id: 3485,
                value: "墨玉县",
                label: "墨玉县",
                spell: "moyuxian",
                abb: "myx"
              },
              {
                id: 3486,
                value: "皮山县",
                label: "皮山县",
                spell: "pishanxian",
                abb: "psx"
              },
              {
                id: 3487,
                value: "洛浦县",
                label: "洛浦县",
                spell: "luopuxian",
                abb: "lpx"
              },
              {
                id: 3488,
                value: "策勒县",
                label: "策勒县",
                spell: "celexian",
                abb: "clx"
              },
              {
                id: 3489,
                value: "于田县",
                label: "于田县",
                spell: "yutianxian",
                abb: "ytx"
              },
              {
                id: 3490,
                value: "民丰县",
                label: "民丰县",
                spell: "minfengxian",
                abb: "mfx"
              }
            ]
          },
          {
            id: 3491,
            value: "伊犁哈萨克自治州",
            label: "伊犁哈萨克自治州",
            spell: "yilihasakezizhizhou",
            abb: "ylhskzzz",
            children: [
              {
                id: 3492,
                value: "伊宁市",
                label: "伊宁市",
                spell: "yiningshi",
                abb: "yns"
              },
              {
                id: 3493,
                value: "奎屯市",
                label: "奎屯市",
                spell: "kuitunshi",
                abb: "kts"
              },
              {
                id: 3494,
                value: "伊宁县",
                label: "伊宁县",
                spell: "yiningxian",
                abb: "ynx"
              },
              {
                id: 3495,
                value: "察布查尔锡伯自治县",
                label: "察布查尔锡伯自治县",
                spell: "chabuchaerxibozizhixian",
                abb: "cbcexbzzx"
              },
              {
                id: 3496,
                value: "霍城县",
                label: "霍城县",
                spell: "huochengxian",
                abb: "hcx"
              },
              {
                id: 3497,
                value: "巩留县",
                label: "巩留县",
                spell: "gongliuxian",
                abb: "glx"
              },
              {
                id: 3498,
                value: "新源县",
                label: "新源县",
                spell: "xinyuanxian",
                abb: "xyx"
              },
              {
                id: 3499,
                value: "昭苏县",
                label: "昭苏县",
                spell: "zhaosuxian",
                abb: "zsx"
              },
              {
                id: 3500,
                value: "特克斯县",
                label: "特克斯县",
                spell: "tekesixian",
                abb: "tksx"
              },
              {
                id: 3501,
                value: "尼勒克县",
                label: "尼勒克县",
                spell: "nilekexian",
                abb: "nlkx"
              }
            ]
          },
          {
            id: 3502,
            value: "塔城地区",
            label: "塔城地区",
            spell: "tachengdiqu",
            abb: "tcdq",
            children: [
              {
                id: 3503,
                value: "塔城市",
                label: "塔城市",
                spell: "tachengshi",
                abb: "tcs"
              },
              {
                id: 3504,
                value: "乌苏市",
                label: "乌苏市",
                spell: "wusushi",
                abb: "wss"
              },
              {
                id: 3505,
                value: "额敏县",
                label: "额敏县",
                spell: "eminxian",
                abb: "emx"
              },
              {
                id: 3506,
                value: "沙湾县",
                label: "沙湾县",
                spell: "shawanxian",
                abb: "swx"
              },
              {
                id: 3507,
                value: "托里县",
                label: "托里县",
                spell: "tuolixian",
                abb: "tlx"
              },
              {
                id: 3508,
                value: "裕民县",
                label: "裕民县",
                spell: "yuminxian",
                abb: "ymx"
              },
              {
                id: 3509,
                value: "和布克赛尔蒙古自治县",
                label: "和布克赛尔蒙古自治县",
                spell: "hebukesaiermengguzizhixian",
                abb: "hbksemgzzx"
              }
            ]
          },
          {
            id: 3510,
            value: "阿勒泰地区",
            label: "阿勒泰地区",
            spell: "aletaidiqu",
            abb: "altdq",
            children: [
              {
                id: 3511,
                value: "阿勒泰市",
                label: "阿勒泰市",
                spell: "aletaishi",
                abb: "alts"
              },
              {
                id: 3512,
                value: "布尔津县",
                label: "布尔津县",
                spell: "buerjinxian",
                abb: "bejx"
              },
              {
                id: 3513,
                value: "富蕴县",
                label: "富蕴县",
                spell: "fuyunxian",
                abb: "fyx"
              },
              {
                id: 3514,
                value: "福海县",
                label: "福海县",
                spell: "fuhaixian",
                abb: "fhx"
              },
              {
                id: 3515,
                value: "哈巴河县",
                label: "哈巴河县",
                spell: "habahexian",
                abb: "hbhx"
              },
              {
                id: 3516,
                value: "青河县",
                label: "青河县",
                spell: "qinghexian",
                abb: "qhx"
              },
              {
                id: 3517,
                value: "吉木乃县",
                label: "吉木乃县",
                spell: "jimunaixian",
                abb: "jmnx"
              }
            ]
          }
        ]
      },
      {
        id: 3523,
        value: "台湾省",
        label: "台湾省",
        spell: "taiwansheng",
        abb: "tws",
        children: [
          {
            id: 3524,
            value: "台北市",
            label: "台北市",
            spell: "taibeishi",
            abb: "tbs",
            children: [
              {
                id: 3525,
                value: "松山区",
                label: "松山区",
                spell: "songshanqu",
                abb: "ssq"
              },
              {
                id: 3526,
                value: "信义区",
                label: "信义区",
                spell: "xinyiqu",
                abb: "xyq"
              },
              {
                id: 3527,
                value: "大安区",
                label: "大安区",
                spell: "daanqu",
                abb: "daq"
              },
              {
                id: 3528,
                value: "中山区",
                label: "中山区",
                spell: "zhongshanqu",
                abb: "zsq"
              },
              {
                id: 3529,
                value: "中正区",
                label: "中正区",
                spell: "zhongzhengqu",
                abb: "zzq"
              },
              {
                id: 3530,
                value: "大同区",
                label: "大同区",
                spell: "datongqu",
                abb: "dtq"
              },
              {
                id: 3531,
                value: "万华区",
                label: "万华区",
                spell: "wanhuaqu",
                abb: "whq"
              },
              {
                id: 3532,
                value: "文山区",
                label: "文山区",
                spell: "wenshangqu",
                abb: "wsq"
              },
              {
                id: 3533,
                value: "南港区",
                label: "南港区",
                spell: "nangangqu",
                abb: "nqg"
              },
              {
                id: 3534,
                value: "内湖区",
                label: "内湖区",
                spell: "neihuqu",
                abb: "nhq"
              },
              {
                id: 3535,
                value: "士林区",
                label: "士林区",
                spell: "shilinqu",
                abb: "slq"
              },
              {
                id: 3536,
                value: "北投区",
                label: "北投区",
                spell: "beitouqu",
                abb: "btq"
              }
            ]
          },
          {
            id: 3537,
            value: "高雄市",
            label: "高雄市",
            spell: "gaoxiongshi",
            abb: "gxs",
            children: [
              {
                id: 3538,
                value: "盐埕区",
                label: "盐埕区",
                spell: "yanchengqu",
                abb: "ycq"
              },
              {
                id: 3539,
                value: "鼓山区",
                label: "鼓山区",
                spell: "gushanqu",
                abb: "gsq"
              },
              {
                id: 3540,
                value: "左营区",
                label: "左营区",
                spell: "zuoyingqu",
                abb: "zyq"
              },
              {
                id: 3541,
                value: "楠梓区",
                label: "楠梓区",
                spell: "nanziqu",
                abb: "nzq"
              },
              {
                id: 3542,
                value: "三民区",
                label: "三民区",
                spell: "sanminqu",
                abb: "smq"
              },
              {
                id: 3543,
                value: "新兴区",
                label: "新兴区",
                spell: "xinxingqu",
                abb: "xxq"
              },
              {
                id: 3544,
                value: "前金区",
                label: "前金区",
                spell: "qianjinqu",
                abb: "qjq"
              },
              {
                id: 3545,
                value: "苓雅区",
                label: "苓雅区",
                spell: "lingyaqu",
                abb: "lyq"
              },
              {
                id: 3546,
                value: "前镇区",
                label: "前镇区",
                spell: "qianzhenqu",
                abb: "qzq"
              },
              {
                id: 3547,
                value: "旗津区",
                label: "旗津区",
                spell: "qijinqu",
                abb: "qjq"
              },
              {
                id: 3548,
                value: "小港区",
                label: "小港区",
                spell: "xiaogangqu",
                abb: "xgq"
              },
              {
                id: 3549,
                value: "凤山区",
                label: "凤山区",
                spell: "fengshanqu",
                abb: "fsq"
              },
              {
                id: 3550,
                value: "林园区",
                label: "林园区",
                spell: "linyuanqu",
                abb: "lyq"
              },
              {
                id: 3551,
                value: "大寮区",
                label: "大寮区",
                spell: "daliaoqu",
                abb: "dlq"
              },
              {
                id: 3552,
                value: "大树区",
                label: "大树区",
                spell: "dashuqu",
                abb: "dsq"
              },
              {
                id: 3553,
                value: "大社区",
                label: "大社区",
                spell: "dashequ",
                abb: "dsq"
              },
              {
                id: 3554,
                value: "仁武区",
                label: "仁武区",
                spell: "renwuqu",
                abb: "rwq"
              },
              {
                id: 3555,
                value: "鸟松区",
                label: "鸟松区",
                spell: "niaosongqu",
                abb: "nsq"
              },
              {
                id: 3556,
                value: "冈山区",
                label: "冈山区",
                spell: "gangshanqu",
                abb: "gsq"
              },
              {
                id: 3557,
                value: "桥头区",
                label: "桥头区",
                spell: "qiaotouqu",
                abb: "qtq"
              },
              {
                id: 3558,
                value: "燕巢区",
                label: "燕巢区",
                spell: "yanchaoqu",
                abb: "ycq"
              },
              {
                id: 3559,
                value: "田寮区",
                label: "田寮区",
                spell: "tianliaoqu",
                abb: "tlq"
              },
              {
                id: 3560,
                value: "阿莲区",
                label: "阿莲区",
                spell: "alianqu",
                abb: "alq"
              },
              {
                id: 3561,
                value: "路竹区",
                label: "路竹区",
                spell: "luzhuqu",
                abb: "lzq"
              },
              {
                id: 3562,
                value: "湖内区",
                label: "湖内区",
                spell: "hunaqu",
                abb: "hnq"
              },
              {
                id: 3563,
                value: "茄萣区",
                label: "茄萣区",
                spell: "qiequ",
                abb: "qq"
              },
              {
                id: 3564,
                value: "永安区",
                label: "永安区",
                spell: "yonganqu",
                abb: "yaq"
              },
              {
                id: 3565,
                value: "弥陀区",
                label: "弥陀区",
                spell: "mituoqu",
                abb: "mtq"
              },
              {
                id: 3566,
                value: "梓官区",
                label: "梓官区",
                spell: "ziguanqu",
                abb: "zgq"
              },
              {
                id: 3567,
                value: "旗山区",
                label: "旗山区",
                spell: "qishanqu",
                abb: "qsq"
              },
              {
                id: 3568,
                value: "美浓区",
                label: "美浓区",
                spell: "meinongqu",
                abb: "mnq"
              },
              {
                id: 3569,
                value: "六龟区",
                label: "六龟区",
                spell: "liuguiqu",
                abb: "lgq"
              },
              {
                id: 3570,
                value: "甲仙区",
                label: "甲仙区",
                spell: "jiaxianqu",
                abb: "jxq"
              },
              {
                id: 3571,
                value: "杉林区",
                label: "杉林区",
                spell: "shanlinqu",
                abb: "slq"
              },
              {
                id: 3572,
                value: "内门区",
                label: "内门区",
                spell: "labelnqu",
                abb: "nmq"
              },
              {
                id: 3573,
                value: "茂林区",
                label: "茂林区",
                spell: "maolinqu",
                abb: "mlq"
              },
              {
                id: 3574,
                value: "桃源区",
                label: "桃源区",
                spell: "taoyuanqu",
                abb: "tyq"
              },
              {
                id: 3575,
                value: "那玛夏区",
                label: "那玛夏区",
                spell: "namaxiaqu",
                abb: "nmxq"
              }
            ]
          },
          {
            id: 3576,
            value: "基隆市",
            label: "基隆市",
            spell: "jilongshi",
            abb: "jls",
            children: [
              {
                id: 3577,
                value: "中正区",
                label: "中正区",
                spell: "zhongzhengqu",
                abb: "zzq"
              },
              {
                id: 3578,
                value: "七堵区",
                label: "七堵区",
                spell: "qiduqu",
                abb: "qdq"
              },
              {
                id: 3579,
                value: "暖暖区",
                label: "暖暖区",
                spell: "nuannuanqu",
                abb: "nnq"
              },
              {
                id: 3580,
                value: "仁爱区",
                label: "仁爱区",
                spell: "renaiqu",
                abb: "raq"
              },
              {
                id: 3581,
                value: "中山区",
                label: "中山区",
                spell: "zhongshanqu",
                abb: "zsq"
              },
              {
                id: 3582,
                value: "安乐区",
                label: "安乐区",
                spell: "anlequ",
                abb: "alq"
              },
              {
                id: 3583,
                value: "信义区",
                label: "信义区",
                spell: "xinyiqu",
                abb: "xyq"
              }
            ]
          },
          {
            id: 3584,
            value: "台中市",
            label: "台中市",
            spell: "taizhongshi",
            abb: "tzs",
            children: [
              {
                id: 3585,
                value: "中区",
                label: "中区",
                spell: "zhongqu",
                abb: "zq"
              },
              {
                id: 3586,
                value: "东区",
                label: "东区",
                spell: "dongqu",
                abb: "dq"
              },
              {
                id: 3587,
                value: "南区",
                label: "南区",
                spell: "nanqu",
                abb: "nq"
              },
              {
                id: 3588,
                value: "西区",
                label: "西区",
                spell: "xiqu",
                abb: "xq"
              },
              {
                id: 3589,
                value: "北区",
                label: "北区",
                spell: "beiqu",
                abb: "bq"
              },
              {
                id: 3590,
                value: "西屯区",
                label: "西屯区",
                spell: "xitunqu",
                abb: "xtq"
              },
              {
                id: 3591,
                value: "南屯区",
                label: "南屯区",
                spell: "nantunqu",
                abb: "ntq"
              },
              {
                id: 3592,
                value: "北屯区",
                label: "北屯区",
                spell: "beitunqu",
                abb: "btq"
              },
              {
                id: 3593,
                value: "丰原区",
                label: "丰原区",
                spell: "fengyuanqu",
                abb: "fyq"
              },
              {
                id: 3594,
                value: "东势区",
                label: "东势区",
                spell: "dongshiqu",
                abb: "dsq"
              },
              {
                id: 3595,
                value: "大甲区",
                label: "大甲区",
                spell: "dajiaqu",
                abb: "djq"
              },
              {
                id: 3596,
                value: "清水区",
                label: "清水区",
                spell: "qingshuiqu",
                abb: "qsq"
              },
              {
                id: 3597,
                value: "沙鹿区",
                label: "沙鹿区",
                spell: "shaluqu",
                abb: "slq"
              },
              {
                id: 3598,
                value: "梧栖区",
                label: "梧栖区",
                spell: "wuqiqu",
                abb: "wqq"
              },
              {
                id: 3599,
                value: "后里区",
                label: "后里区",
                spell: "houliqu",
                abb: "hlq"
              },
              {
                id: 3600,
                value: "神冈区",
                label: "神冈区",
                spell: "shengangqu",
                abb: "sgq"
              },
              {
                id: 3601,
                value: "潭子区",
                label: "潭子区",
                spell: "tanziqu",
                abb: "tzq"
              },
              {
                id: 3602,
                value: "大雅区",
                label: "大雅区",
                spell: "dayaqu",
                abb: "dyq"
              },
              {
                id: 3603,
                value: "新社区",
                label: "新社区",
                spell: "xinshequ",
                abb: "xsq"
              },
              {
                id: 3604,
                value: "石冈区",
                label: "石冈区",
                spell: "shigangqu",
                abb: "sgq"
              },
              {
                id: 3605,
                value: "外埔区",
                label: "外埔区",
                spell: "waipuqu",
                abb: "wpq"
              },
              {
                id: 3606,
                value: "大安区",
                label: "大安区",
                spell: "daanqu",
                abb: "daq"
              },
              {
                id: 3607,
                value: "乌日区",
                label: "乌日区",
                spell: "wuriqu",
                abb: "wrq"
              },
              {
                id: 3608,
                value: "大肚区",
                label: "大肚区",
                spell: "daduqu",
                abb: "ddq"
              },
              {
                id: 3609,
                value: "龙井区",
                label: "龙井区",
                spell: "longjingqu",
                abb: "ljq"
              },
              {
                id: 3610,
                value: "雾峰区",
                label: "雾峰区",
                spell: "wufengqu",
                abb: "wfq"
              },
              {
                id: 3611,
                value: "太平区",
                label: "太平区",
                spell: "taipingqu",
                abb: "tpq"
              },
              {
                id: 3612,
                value: "大里区",
                label: "大里区",
                spell: "daliqu",
                abb: "dlq"
              },
              {
                id: 3613,
                value: "和平区",
                label: "和平区",
                spell: "hepingqu",
                abb: "hpq"
              }
            ]
          },
          {
            id: 3614,
            value: "台南市",
            label: "台南市",
            spell: "tainanshi",
            abb: "tns",
            children: [
              {
                id: 3615,
                value: "东区",
                label: "东区",
                spell: "dongqu",
                abb: "dq"
              },
              {
                id: 3616,
                value: "南区",
                label: "南区",
                spell: "nanqu",
                abb: "nq"
              },
              {
                id: 3617,
                value: "北区",
                label: "北区",
                spell: "beiqu",
                abb: "bq"
              },
              {
                id: 3618,
                value: "安南区",
                label: "安南区",
                spell: "annanqu",
                abb: "anq"
              },
              {
                id: 3619,
                value: "安平区",
                label: "安平区",
                spell: "anpingqu",
                abb: "apq"
              },
              {
                id: 3620,
                value: "中西区",
                label: "中西区",
                spell: "zhongxiqu",
                abb: "zxq"
              },
              {
                id: 3621,
                value: "新营区",
                label: "新营区",
                spell: "xinyingqu",
                abb: "xyq"
              },
              {
                id: 3622,
                value: "盐水区",
                label: "盐水区",
                spell: "yanshuiqu",
                abb: "ysq"
              },
              {
                id: 3623,
                value: "白河区",
                label: "白河区",
                spell: "baihequ",
                abb: "bhq"
              },
              {
                id: 3624,
                value: "柳营区",
                label: "柳营区",
                spell: "liuyingqu",
                abb: "lyq"
              },
              {
                id: 3625,
                value: "后壁区",
                label: "后壁区",
                spell: "houbiqu",
                abb: "hbq"
              },
              {
                id: 3626,
                value: "东山区",
                label: "东山区",
                spell: "dongshanqu",
                abb: "dsq"
              },
              {
                id: 3627,
                value: "麻豆区",
                label: "麻豆区",
                spell: "madouqu",
                abb: "mdq"
              },
              {
                id: 3628,
                value: "下营区",
                label: "下营区",
                spell: "xiayingqu",
                abb: "xyq"
              },
              {
                id: 3629,
                value: "六甲区",
                label: "六甲区",
                spell: "liujiaqu",
                abb: "ljq"
              },
              {
                id: 3630,
                value: "官田区",
                label: "官田区",
                spell: "guantianqu",
                abb: "gtq"
              },
              {
                id: 3631,
                value: "大内区",
                label: "大内区",
                spell: "danaqu",
                abb: "dnq"
              },
              {
                id: 3632,
                value: "佳里区",
                label: "佳里区",
                spell: "jialiqu",
                abb: "jlq"
              },
              {
                id: 3633,
                value: "学甲区",
                label: "学甲区",
                spell: "xuejiaqu",
                abb: "xjq"
              },
              {
                id: 3634,
                value: "西港区",
                label: "西港区",
                spell: "xigangqu",
                abb: "xgq"
              },
              {
                id: 3635,
                value: "七股区",
                label: "七股区",
                spell: "qiguqu",
                abb: "qgq"
              },
              {
                id: 3636,
                value: "将军区",
                label: "将军区",
                spell: "jiangjunqu",
                abb: "jjq"
              },
              {
                id: 3637,
                value: "北门区",
                label: "北门区",
                spell: "beimenqu",
                abb: "bmq"
              },
              {
                id: 3638,
                value: "新化区",
                label: "新化区",
                spell: "xinhuaqu",
                abb: "xhq"
              },
              {
                id: 3639,
                value: "善化区",
                label: "善化区",
                spell: "shanhuaqu",
                abb: "shq"
              },
              {
                id: 3640,
                value: "新市区",
                label: "新市区",
                spell: "xinshiqu",
                abb: "xsq"
              },
              {
                id: 3641,
                value: "安定区",
                label: "安定区",
                spell: "andingqu",
                abb: "adq"
              },
              {
                id: 3642,
                value: "山上区",
                label: "山上区",
                spell: "shanshangqu",
                abb: "ssq"
              },
              {
                id: 3643,
                value: "玉井区",
                label: "玉井区",
                spell: "yujingqu",
                abb: "yjq"
              },
              {
                id: 3644,
                value: "楠西区",
                label: "楠西区",
                spell: "nanxiqu",
                abb: "nxq"
              },
              {
                id: 3645,
                value: "南化区",
                label: "南化区",
                spell: "nanhuaqu",
                abb: "nhq"
              },
              {
                id: 3646,
                value: "左镇区",
                label: "左镇区",
                spell: "zuozhenqu",
                abb: "zzq"
              },
              {
                id: 3647,
                value: "仁德区",
                label: "仁德区",
                spell: "rendequ",
                abb: "rdq"
              },
              {
                id: 3648,
                value: "归仁区",
                label: "归仁区",
                spell: "guirenqu",
                abb: "grq"
              },
              {
                id: 3649,
                value: "关庙区",
                label: "关庙区",
                spell: "guanmiaoqu",
                abb: "gmq"
              },
              {
                id: 3650,
                value: "龙崎区",
                label: "龙崎区",
                spell: "longqiqu",
                abb: "lqq"
              },
              {
                id: 3651,
                value: "永康区",
                label: "永康区",
                spell: "yongkangqu",
                abb: "ykq"
              }
            ]
          },
          {
            id: 3652,
            value: "新竹市",
            label: "新竹市",
            spell: "xinzhushi",
            abb: "xzs",
            children: [
              {
                id: 3653,
                value: "东区",
                label: "东区",
                spell: "dongqu",
                abb: "dq"
              },
              {
                id: 3654,
                value: "北区",
                label: "北区",
                spell: "beiqu",
                abb: "bq"
              },
              {
                id: 3655,
                value: "香山区",
                label: "香山区",
                spell: "xiangshanqu",
                abb: "xsq"
              }
            ]
          },
          {
            id: 3656,
            value: "嘉义市",
            label: "嘉义市",
            spell: "jiayishi",
            abb: "jys",
            children: [
              {
                id: 3657,
                value: "东区",
                label: "东区",
                spell: "dongqu",
                abb: "dq"
              },
              {
                id: 3658,
                value: "西区",
                label: "西区",
                spell: "xiqu",
                abb: "xq"
              }
            ]
          },
          {
            id: 3659,
            value: "新北市",
            label: "新北市",
            spell: "xinbeishi",
            abb: "xbs",
            children: [
              {
                id: 3660,
                value: "板桥区",
                label: "板桥区",
                spell: "banqiaoqu",
                abb: "bqq"
              },
              {
                id: 3661,
                value: "三重区",
                label: "三重区",
                spell: "sanchongqu",
                abb: "scq"
              },
              {
                id: 3662,
                value: "中和区",
                label: "中和区",
                spell: "zhonghequ",
                abb: "zhq"
              },
              {
                id: 3663,
                value: "永和区",
                label: "永和区",
                spell: "yonghequ",
                abb: "yhq"
              },
              {
                id: 3664,
                value: "新庄区",
                label: "新庄区",
                spell: "xinzhuangqu",
                abb: "xzq"
              },
              {
                id: 3665,
                value: "新店区",
                label: "新店区",
                spell: "xindianqu",
                abb: "xdq"
              },
              {
                id: 3666,
                value: "树林区",
                label: "树林区",
                spell: "shulinqu",
                abb: "slq"
              },
              {
                id: 3667,
                value: "莺歌区",
                label: "莺歌区",
                spell: "yinggequ",
                abb: "ygq"
              },
              {
                id: 3668,
                value: "三峡区",
                label: "三峡区",
                spell: "sanxiaqu",
                abb: "sxq"
              },
              {
                id: 3669,
                value: "淡水区",
                label: "淡水区",
                spell: "danshuiqu",
                abb: "dsq"
              },
              {
                id: 3670,
                value: "汐止区",
                label: "汐止区",
                spell: "xizhiqu",
                abb: "xzq"
              },
              {
                id: 3671,
                value: "瑞芳区",
                label: "瑞芳区",
                spell: "ruifangqu",
                abb: "rfq"
              },
              {
                id: 3672,
                value: "土城区",
                label: "土城区",
                spell: "tuchengqu",
                abb: "tcq"
              },
              {
                id: 3673,
                value: "芦洲区",
                label: "芦洲区",
                spell: "luzhouqu",
                abb: "lzq"
              },
              {
                id: 3674,
                value: "五股区",
                label: "五股区",
                spell: "wuguqu",
                abb: "wgq"
              },
              {
                id: 3675,
                value: "泰山区",
                label: "泰山区",
                spell: "taishanqu",
                abb: "tsq"
              },
              {
                id: 3676,
                value: "林口区",
                label: "林口区",
                spell: "linkouqu",
                abb: "lkq"
              },
              {
                id: 3677,
                value: "深坑区",
                label: "深坑区",
                spell: "shenkangqu",
                abb: "skq"
              },
              {
                id: 3678,
                value: "石碇区",
                label: "石碇区",
                spell: "shidingqu",
                abb: "sdq"
              },
              {
                id: 3679,
                value: "坪林区",
                label: "坪林区",
                spell: "pinglinqu",
                abb: "plq"
              },
              {
                id: 3680,
                value: "三芝区",
                label: "三芝区",
                spell: "sanzhiqu",
                abb: "szq"
              },
              {
                id: 3681,
                value: "石门区",
                label: "石门区",
                spell: "shimenqu",
                abb: "smq"
              },
              {
                id: 3682,
                value: "八里区",
                label: "八里区",
                spell: "baliqu",
                abb: "blq"
              },
              {
                id: 3683,
                value: "平溪区",
                label: "平溪区",
                spell: "pingxiqu",
                abb: "pxq"
              },
              {
                id: 3684,
                value: "双溪区",
                label: "双溪区",
                spell: "shuangxiqu",
                abb: "sxq"
              },
              {
                id: 3685,
                value: "贡寮区",
                label: "贡寮区",
                spell: "gongliaoqu",
                abb: "glq"
              },
              {
                id: 3686,
                value: "金山区",
                label: "金山区",
                spell: "jinshanqu",
                abb: "jsq"
              },
              {
                id: 3687,
                value: "万里区",
                label: "万里区",
                spell: "wanliqu",
                abb: "wlq"
              },
              {
                id: 3688,
                value: "乌来区",
                label: "乌来区",
                spell: "wulaiqu",
                abb: "wlq"
              }
            ]
          },
          {
            id: 3689,
            value: "宜兰县",
            label: "宜兰县",
            spell: "yilanxian",
            abb: "ylx",
            children: [
              {
                id: 3690,
                value: "宜兰市",
                label: "宜兰市",
                spell: "yilanshi",
                abb: "yls"
              },
              {
                id: 3691,
                value: "罗东镇",
                label: "罗东镇",
                spell: "luodongzhen",
                abb: "ldz"
              },
              {
                id: 3692,
                value: "苏澳镇",
                label: "苏澳镇",
                spell: "suaozhen",
                abb: "saz"
              },
              {
                id: 3693,
                value: "头城镇",
                label: "头城镇",
                spell: "touchengzhen",
                abb: "tcz"
              },
              {
                id: 3694,
                value: "礁溪乡",
                label: "礁溪乡",
                spell: "jiaoxixiang",
                abb: "jxx"
              },
              {
                id: 3695,
                value: "壮围乡",
                label: "壮围乡",
                spell: "zhuangweixiang",
                abb: "zwx"
              },
              {
                id: 3696,
                value: "员山乡",
                label: "员山乡",
                spell: "yuanshanxiang",
                abb: "ysx"
              },
              {
                id: 3697,
                value: "冬山乡",
                label: "冬山乡",
                spell: "dongshanxiang",
                abb: "dsx"
              },
              {
                id: 3698,
                value: "五结乡",
                label: "五结乡",
                spell: "wujiexiang",
                abb: "wjx"
              },
              {
                id: 3699,
                value: "三星乡",
                label: "三星乡",
                spell: "sanxingxiang",
                abb: "sxx"
              },
              {
                id: 3700,
                value: "大同乡",
                label: "大同乡",
                spell: "datongxiang",
                abb: "dtx"
              },
              {
                id: 3701,
                value: "南澳乡",
                label: "南澳乡",
                spell: "nanaoxiang",
                abb: "nax"
              }
            ]
          },
          {
            id: 3702,
            value: "桃园市",
            label: "桃园市",
            spell: "taoyuanshi",
            abb: "tys",
            children: [
              {
                id: 3703,
                value: "桃园区",
                label: "桃园区",
                spell: "taoyuanqu",
                abb: "tyq"
              },
              {
                id: 3704,
                value: "中坜区",
                label: "中坜区",
                spell: "zhongliqu",
                abb: "zlq"
              },
              {
                id: 3705,
                value: "平镇区",
                label: "平镇区",
                spell: "pingzhenqu",
                abb: "pzq"
              },
              {
                id: 3706,
                value: "八德区",
                label: "八德区",
                spell: "badequ",
                abb: "bdq"
              },
              {
                id: 3707,
                value: "杨梅区",
                label: "杨梅区",
                spell: "yangmeiqu",
                abb: "ymq"
              },
              {
                id: 3708,
                value: "芦竹区",
                label: "芦竹区",
                spell: "luzhuqu",
                abb: "lzq"
              },
              {
                id: 3709,
                value: "大溪区",
                label: "大溪区",
                spell: "daxiqu",
                abb: "dxq"
              },
              {
                id: 3710,
                value: "大园区",
                label: "大园区",
                spell: "dayuanqu",
                abb: "dyq"
              },
              {
                id: 3711,
                value: "龟山区",
                label: "龟山区",
                spell: "guishanqu",
                abb: "gsq"
              },
              {
                id: 3712,
                value: "龙潭区",
                label: "龙潭区",
                spell: "longtanqu",
                abb: "ltq"
              },
              {
                id: 3713,
                value: "新屋区",
                label: "新屋区",
                spell: "xinwuqu",
                abb: "xwq"
              },
              {
                id: 3714,
                value: "观音区",
                label: "观音区",
                spell: "guanyinqu",
                abb: "gyq"
              },
              {
                id: 3715,
                value: "复兴区",
                label: "复兴区",
                spell: "fuxingqu",
                abb: "fxq"
              }
            ]
          },
          {
            id: 3716,
            value: "新竹县 ",
            label: "新竹县 ",
            spell: "xinizhuxian",
            abb: "xzx",
            children: [
              {
                id: 3717,
                value: "竹北市",
                label: "竹北市",
                spell: "zhubeishi",
                abb: "zbs"
              },
              {
                id: 3718,
                value: "竹东镇",
                label: "竹东镇",
                spell: "zhudongzhen",
                abb: "zdz"
              },
              {
                id: 3719,
                value: "新埔镇",
                label: "新埔镇",
                spell: "xinpuzhen",
                abb: "xpz"
              },
              {
                id: 3720,
                value: "关西镇",
                label: "关西镇",
                spell: "guanxizhen",
                abb: "gxz"
              },
              {
                id: 3721,
                value: "湖口乡",
                label: "湖口乡",
                spell: "hukouxiang",
                abb: "hkx"
              },
              {
                id: 3722,
                value: "新丰乡",
                label: "新丰乡",
                spell: "xinfengxiang",
                abb: "xfx"
              },
              {
                id: 3723,
                value: "芎林乡",
                label: "芎林乡",
                spell: "xionglinxiang",
                abb: "xlx"
              },
              {
                id: 3724,
                value: "横山乡",
                label: "横山乡",
                spell: "hengshanxiang",
                abb: "hsx"
              },
              {
                id: 3725,
                value: "北埔乡",
                label: "北埔乡",
                spell: "beipuxiang",
                abb: "bpx"
              },
              {
                id: 3726,
                value: "宝山乡",
                label: "宝山乡",
                spell: "baoshanxiang",
                abb: "bsx"
              },
              {
                id: 3727,
                value: "峨眉乡",
                label: "峨眉乡",
                spell: "emeixiang",
                abb: "emx"
              },
              {
                id: 3728,
                value: "尖石乡",
                label: "尖石乡",
                spell: "jianshixiang",
                abb: "jsx"
              },
              {
                id: 3729,
                value: "五峰乡",
                label: "五峰乡",
                spell: "wufengxiang",
                abb: "wfx"
              }
            ]
          },
          {
            id: 3730,
            value: "苗栗县",
            label: "苗栗县",
            spell: "miaolixian",
            abb: "mlx",
            children: [
              {
                id: 3731,
                value: "苗栗市",
                label: "苗栗市",
                spell: "miaolishi",
                abb: "mls"
              },
              {
                id: 3732,
                value: "苑里镇",
                label: "苑里镇",
                spell: "yuanlizhen",
                abb: "ylz"
              },
              {
                id: 3733,
                value: "通霄镇",
                label: "通霄镇",
                spell: "tongxiaozhen",
                abb: "txz"
              },
              {
                id: 3734,
                value: "竹南镇",
                label: "竹南镇",
                spell: "zhunanzhen",
                abb: "znz"
              },
              {
                id: 3735,
                value: "头份市",
                label: "头份市",
                spell: "toufenshi",
                abb: "tfs"
              },
              {
                id: 3736,
                value: "后龙镇",
                label: "后龙镇",
                spell: "houlongzhen",
                abb: "hlz"
              },
              {
                id: 3737,
                value: "卓兰镇",
                label: "卓兰镇",
                spell: "zhuolanzhen",
                abb: "zlz"
              },
              {
                id: 3738,
                value: "大湖乡",
                label: "大湖乡",
                spell: "dahuxiang",
                abb: "dhx"
              },
              {
                id: 3739,
                value: "公馆乡",
                label: "公馆乡",
                spell: "gongguanxiang",
                abb: "ggx"
              },
              {
                id: 3740,
                value: "铜锣乡",
                label: "铜锣乡",
                spell: "tongluoxiang",
                abb: "tlx"
              },
              {
                id: 3741,
                value: "南庄乡",
                label: "南庄乡",
                spell: "nanzhuangxiang",
                abb: "nzx"
              },
              {
                id: 3742,
                value: "头屋乡",
                label: "头屋乡",
                spell: "touwuxiang",
                abb: "twx"
              },
              {
                id: 3743,
                value: "三义乡",
                label: "三义乡",
                spell: "sanyixiang",
                abb: "syx"
              },
              {
                id: 3744,
                value: "西湖乡",
                label: "西湖乡",
                spell: "xihuxiang",
                abb: "xhx"
              },
              {
                id: 3745,
                value: "造桥乡",
                label: "造桥乡",
                spell: "zaoqiaoxiang",
                abb: "zqx"
              },
              {
                id: 3746,
                value: "三湾乡",
                label: "三湾乡",
                spell: "sanwanxiang",
                abb: "swx"
              },
              {
                id: 3747,
                value: "狮潭乡",
                label: "狮潭乡",
                spell: "shitanxiang",
                abb: "stx"
              },
              {
                id: 3748,
                value: "泰安乡",
                label: "泰安乡",
                spell: "taianxiang",
                abb: "tax"
              }
            ]
          },
          {
            id: 3749,
            value: "彰化县 ",
            label: "彰化县 ",
            spell: "zhanghuaxian",
            abb: "zhx",
            children: [
              {
                id: 3750,
                value: "彰化市",
                label: "彰化市",
                spell: "zhanghuashi",
                abb: "zhs"
              },
              {
                id: 3751,
                value: "鹿港镇",
                label: "鹿港镇",
                spell: "lugangzhen",
                abb: "lgz"
              },
              {
                id: 3752,
                value: "和美镇",
                label: "和美镇",
                spell: "hemeizhen",
                abb: "hmz"
              },
              {
                id: 3753,
                value: "线西乡",
                label: "线西乡",
                spell: "xianxixiang",
                abb: "xxx"
              },
              {
                id: 3754,
                value: "伸港乡",
                label: "伸港乡",
                spell: "shengangxiang",
                abb: "sgx"
              },
              {
                id: 3755,
                value: "福兴乡",
                label: "福兴乡",
                spell: "fuxingxiang",
                abb: "fxx"
              },
              {
                id: 3756,
                value: "秀水乡",
                label: "秀水乡",
                spell: "xiushuixiang",
                abb: "xsx"
              },
              {
                id: 3757,
                value: "花坛乡",
                label: "花坛乡",
                spell: "huatanxiang",
                abb: "htx"
              },
              {
                id: 3758,
                value: "芬园乡",
                label: "芬园乡",
                spell: "fenyuanxiang",
                abb: "fyx"
              },
              {
                id: 3759,
                value: "员林市",
                label: "员林市",
                spell: "yuanlinshi",
                abb: "yls"
              },
              {
                id: 3760,
                value: "溪湖镇",
                label: "溪湖镇",
                spell: "xihuzhen",
                abb: "xhz"
              },
              {
                id: 3761,
                value: "田中镇",
                label: "田中镇",
                spell: "tianzhongzhen",
                abb: "tzz"
              },
              {
                id: 3762,
                value: "大村乡",
                label: "大村乡",
                spell: "dacunxiang",
                abb: "dcx"
              },
              {
                id: 3763,
                value: "埔盐乡",
                label: "埔盐乡",
                spell: "puyanxiang",
                abb: "pyx"
              },
              {
                id: 3764,
                value: "埔心乡",
                label: "埔心乡",
                spell: "puxinxiang",
                abb: "pxx"
              },
              {
                id: 3765,
                value: "永靖乡",
                label: "永靖乡",
                spell: "yongjingxiang",
                abb: "yjx"
              },
              {
                id: 3766,
                value: "社头乡",
                label: "社头乡",
                spell: "shetouxiang",
                abb: "stx"
              },
              {
                id: 3767,
                value: "二水乡",
                label: "二水乡",
                spell: "ershuixiang",
                abb: "esx"
              },
              {
                id: 3768,
                value: "北斗镇",
                label: "北斗镇",
                spell: "beidouzhen",
                abb: "bdz"
              },
              {
                id: 3769,
                value: "二林镇",
                label: "二林镇",
                spell: "erlinzhen",
                abb: "elz"
              },
              {
                id: 3770,
                value: "田尾乡",
                label: "田尾乡",
                spell: "tianweixiang",
                abb: "twx"
              },
              {
                id: 3771,
                value: "埤头乡",
                label: "埤头乡",
                spell: "beitouxiang",
                abb: "btx"
              },
              {
                id: 3772,
                value: "芳苑乡",
                label: "芳苑乡",
                spell: "fangyuanxiang",
                abb: "fyx"
              },
              {
                id: 3773,
                value: "大城乡",
                label: "大城乡",
                spell: "dachengxiang",
                abb: "dcx"
              },
              {
                id: 3774,
                value: "竹塘乡",
                label: "竹塘乡",
                spell: "zhutangxiang",
                abb: "ztx"
              },
              {
                id: 3775,
                value: "溪州乡",
                label: "溪州乡",
                spell: "xizhouxiang",
                abb: "xzx"
              }
            ]
          },
          {
            id: 3776,
            value: "南投县",
            label: "南投县",
            spell: "nantouxian",
            abb: "ntx",
            children: [
              {
                id: 3777,
                value: "南投市",
                label: "南投市",
                spell: "nantoushi",
                abb: "nts"
              },
              {
                id: 3778,
                value: "埔里镇",
                label: "埔里镇",
                spell: "pulizhen",
                abb: "plz"
              },
              {
                id: 3779,
                value: "草屯镇",
                label: "草屯镇",
                spell: "caotunzhen",
                abb: "ctz"
              },
              {
                id: 3780,
                value: "竹山镇",
                label: "竹山镇",
                spell: "zhushanzhen",
                abb: "zsz"
              },
              {
                id: 3781,
                value: "集集镇",
                label: "集集镇",
                spell: "jijizhen",
                abb: "jjz"
              },
              {
                id: 3782,
                value: "名间乡",
                label: "名间乡",
                spell: "mingjianxiang",
                abb: "mjx"
              },
              {
                id: 3783,
                value: "鹿谷乡",
                label: "鹿谷乡",
                spell: "luguxiang",
                abb: "lgx"
              },
              {
                id: 3784,
                value: "中寮乡",
                label: "中寮乡",
                spell: "zhongliaoxiang",
                abb: "zlx"
              },
              {
                id: 3785,
                value: "鱼池乡",
                label: "鱼池乡",
                spell: "yuchixiang",
                abb: "ycx"
              },
              {
                id: 3786,
                value: "国姓乡",
                label: "国姓乡",
                spell: "guoxingxiang",
                abb: "gxx"
              },
              {
                id: 3787,
                value: "水里乡",
                label: "水里乡",
                spell: "shuilixiang",
                abb: "slx"
              },
              {
                id: 3788,
                value: "信义乡",
                label: "信义乡",
                spell: "xinyixiang",
                abb: "xyx"
              },
              {
                id: 3789,
                value: "仁爱乡",
                label: "仁爱乡",
                spell: "renaixiang",
                abb: "rax"
              }
            ]
          },
          {
            id: 3790,
            value: "云林县",
            label: "云林县",
            spell: "yunlinxian",
            abb: "ylx",
            children: [
              {
                id: 3791,
                value: "斗六市",
                label: "斗六市",
                spell: "douliushi",
                abb: "dls"
              },
              {
                id: 3792,
                value: "斗南镇",
                label: "斗南镇",
                spell: "dounanzhen",
                abb: "dnz"
              },
              {
                id: 3793,
                value: "虎尾镇",
                label: "虎尾镇",
                spell: "huweizhen",
                abb: "hwz"
              },
              {
                id: 3794,
                value: "西螺镇",
                label: "西螺镇",
                spell: "xiluozhen",
                abb: "xlz"
              },
              {
                id: 3795,
                value: "土库镇",
                label: "土库镇",
                spell: "tukuzhen",
                abb: "tkz"
              },
              {
                id: 3796,
                value: "北港镇",
                label: "北港镇",
                spell: "beigangzhen",
                abb: "bgz"
              },
              {
                id: 3797,
                value: "古坑乡",
                label: "古坑乡",
                spell: "gukangxiang",
                abb: "gkx"
              },
              {
                id: 3798,
                value: "大埤乡",
                label: "大埤乡",
                spell: "dabeixiang",
                abb: "dbx"
              },
              {
                id: 3799,
                value: "莿桐乡",
                label: "莿桐乡",
                spell: "tongxiang",
                abb: "tx"
              },
              {
                id: 3800,
                value: "林内乡",
                label: "林内乡",
                spell: "linnaxiang",
                abb: "lnx"
              },
              {
                id: 3801,
                value: "二仑乡",
                label: "二仑乡",
                spell: "erlunxiang",
                abb: "elx"
              },
              {
                id: 3802,
                value: "仑背乡",
                label: "仑背乡",
                spell: "lunbeixiang",
                abb: "lbx"
              },
              {
                id: 3803,
                value: "麦寮乡",
                label: "麦寮乡",
                spell: "mailiaoxiang",
                abb: "mlx"
              },
              {
                id: 3804,
                value: "东势乡",
                label: "东势乡",
                spell: "dongshixiang",
                abb: "dsx"
              },
              {
                id: 3805,
                value: "褒忠乡",
                label: "褒忠乡",
                spell: "baozhongxiang",
                abb: "bzx"
              },
              {
                id: 3806,
                value: "台西乡",
                label: "台西乡",
                spell: "taixixiang",
                abb: "txx"
              },
              {
                id: 3807,
                value: "元长乡",
                label: "元长乡",
                spell: "yuanchangxiang",
                abb: "ycx"
              },
              {
                id: 3808,
                value: "四湖乡",
                label: "四湖乡",
                spell: "sihuxiang",
                abb: "shx"
              },
              {
                id: 3809,
                value: "口湖乡",
                label: "口湖乡",
                spell: "kouhuxiang",
                abb: "khx"
              },
              {
                id: 3810,
                value: "水林乡",
                label: "水林乡",
                spell: "shuilinxiang",
                abb: "slx"
              }
            ]
          },
          {
            id: 3811,
            value: "嘉义县",
            label: "嘉义县",
            spell: "jiayixian",
            abb: "jyx",
            children: [
              {
                id: 3812,
                value: "太保市",
                label: "太保市",
                spell: "taibaoshi",
                abb: "tbs"
              },
              {
                id: 3813,
                value: "朴子市",
                label: "朴子市",
                spell: "puzishi",
                abb: "pzs"
              },
              {
                id: 3814,
                value: "布袋镇",
                label: "布袋镇",
                spell: "budaizhen",
                abb: "bdz"
              },
              {
                id: 3815,
                value: "大林镇",
                label: "大林镇",
                spell: "dalinzhen",
                abb: "dlz"
              },
              {
                id: 3816,
                value: "民雄乡",
                label: "民雄乡",
                spell: "minxiongxiang",
                abb: "mxx"
              },
              {
                id: 3817,
                value: "溪口乡",
                label: "溪口乡",
                spell: "xikouxiang",
                abb: "xkx"
              },
              {
                id: 3818,
                value: "新港乡",
                label: "新港乡",
                spell: "xingangxiang",
                abb: "xgx"
              },
              {
                id: 3819,
                value: "六脚乡",
                label: "六脚乡",
                spell: "liujiaoxiang",
                abb: "ljx"
              },
              {
                id: 3820,
                value: "东石乡",
                label: "东石乡",
                spell: "dongshixiang",
                abb: "dsx"
              },
              {
                id: 3821,
                value: "义竹乡",
                label: "义竹乡",
                spell: "yizhuxiang",
                abb: "yzx"
              },
              {
                id: 3822,
                value: "鹿草乡",
                label: "鹿草乡",
                spell: "lucaoxiang",
                abb: "lcx"
              },
              {
                id: 3823,
                value: "水上乡",
                label: "水上乡",
                spell: "shuishangxiang",
                abb: "ssx"
              },
              {
                id: 3824,
                value: "中埔乡",
                label: "中埔乡",
                spell: "zhongpuxiang",
                abb: "zpx"
              },
              {
                id: 3825,
                value: "竹崎乡",
                label: "竹崎乡",
                spell: "zhuqixiang",
                abb: "zqx"
              },
              {
                id: 3826,
                value: "梅山乡",
                label: "梅山乡",
                spell: "meishanxiang",
                abb: "msx"
              },
              {
                id: 3827,
                value: "番路乡",
                label: "番路乡",
                spell: "fanluxiang",
                abb: "flx"
              },
              {
                id: 3828,
                value: "大埔乡",
                label: "大埔乡",
                spell: "dapuxiang",
                abb: "dpx"
              },
              {
                id: 3829,
                value: "阿里山乡",
                label: "阿里山乡",
                spell: "alishanxiang",
                abb: "alsx"
              }
            ]
          },
          {
            id: 3830,
            value: "屏东县",
            label: "屏东县",
            spell: "pingdongxian",
            abb: "pdx",
            children: [
              {
                id: 3831,
                value: "屏东市",
                label: "屏东市",
                spell: "pingdongshi",
                abb: "pds"
              },
              {
                id: 3832,
                value: "潮州镇",
                label: "潮州镇",
                spell: "chaozhouzhen",
                abb: "czz"
              },
              {
                id: 3833,
                value: "东港镇",
                label: "东港镇",
                spell: "donggangzhen",
                abb: "dgz"
              },
              {
                id: 3834,
                value: "恒春镇",
                label: "恒春镇",
                spell: "hengchunzhen",
                abb: "hcz"
              },
              {
                id: 3835,
                value: "万丹乡",
                label: "万丹乡",
                spell: "wandanxiang",
                abb: "wdx"
              },
              {
                id: 3836,
                value: "长治乡",
                label: "长治乡",
                spell: "changzhixiang",
                abb: "czx"
              },
              {
                id: 3837,
                value: "麟洛乡",
                label: "麟洛乡",
                spell: "linluoxiang",
                abb: "llx"
              },
              {
                id: 3838,
                value: "九如乡",
                label: "九如乡",
                spell: "jiuruxiang",
                abb: "jrx"
              },
              {
                id: 3839,
                value: "里港乡",
                label: "里港乡",
                spell: "ligangxiang",
                abb: "lgx"
              },
              {
                id: 3840,
                value: "盐埔乡",
                label: "盐埔乡",
                spell: "yanpuxiang",
                abb: "ypx"
              },
              {
                id: 3841,
                value: "高树乡",
                label: "高树乡",
                spell: "gaoshuxiang",
                abb: "gsx"
              },
              {
                id: 3842,
                value: "万峦乡",
                label: "万峦乡",
                spell: "wanluanxiang",
                abb: "wlx"
              },
              {
                id: 3843,
                value: "内埔乡",
                label: "内埔乡",
                spell: "napuxiang",
                abb: "npx"
              },
              {
                id: 3844,
                value: "竹田乡",
                label: "竹田乡",
                spell: "zhutianxiang",
                abb: "ztx"
              },
              {
                id: 3845,
                value: "新埤乡",
                label: "新埤乡",
                spell: "xinbeixiang",
                abb: "xbx"
              },
              {
                id: 3846,
                value: "枋寮乡",
                label: "枋寮乡",
                spell: "bingliaoxiang",
                abb: "blx"
              },
              {
                id: 3847,
                value: "新园乡",
                label: "新园乡",
                spell: "xinyuanxiang",
                abb: "xyx"
              },
              {
                id: 3848,
                value: "崁顶乡",
                label: "崁顶乡",
                spell: "dingxiang",
                abb: "dx"
              },
              {
                id: 3849,
                value: "林边乡",
                label: "林边乡",
                spell: "linbianxiang",
                abb: "lbx"
              },
              {
                id: 3850,
                value: "南州乡",
                label: "南州乡",
                spell: "nanzhouxiang",
                abb: "nzx"
              },
              {
                id: 3851,
                value: "佳冬乡",
                label: "佳冬乡",
                spell: "jiadongxiang",
                abb: "jdx"
              },
              {
                id: 3852,
                value: "琉球乡",
                label: "琉球乡",
                spell: "liuqiuxiang",
                abb: "lqx"
              },
              {
                id: 3853,
                value: "车城乡",
                label: "车城乡",
                spell: "chechengxiang",
                abb: "ccx"
              },
              {
                id: 3854,
                value: "满州乡",
                label: "满州乡",
                spell: "manzhouxiang",
                abb: "mzx"
              },
              {
                id: 3855,
                value: "枋山乡",
                label: "枋山乡",
                spell: "bingshanxiang",
                abb: "bsx"
              },
              {
                id: 3856,
                value: "三地门乡",
                label: "三地门乡",
                spell: "sandimenxiang",
                abb: "sdmx"
              },
              {
                id: 3857,
                value: "雾台乡",
                label: "雾台乡",
                spell: "wutaixiang",
                abb: "wtx"
              },
              {
                id: 3858,
                value: "玛家乡",
                label: "玛家乡",
                spell: "majiaxiang",
                abb: "mjx"
              },
              {
                id: 3859,
                value: "泰武乡",
                label: "泰武乡",
                spell: "taiwuxiang",
                abb: "twx"
              },
              {
                id: 3860,
                value: "来义乡",
                label: "来义乡",
                spell: "laiyixiang",
                abb: "lyx"
              },
              {
                id: 3861,
                value: "春日乡",
                label: "春日乡",
                spell: "chunrixiang",
                abb: "crx"
              },
              {
                id: 3862,
                value: "狮子乡",
                label: "狮子乡",
                spell: "shizixiang",
                abb: "szx"
              },
              {
                id: 3863,
                value: "牡丹乡",
                label: "牡丹乡",
                spell: "mudanxiang",
                abb: "mdx"
              }
            ]
          },
          {
            id: 3864,
            value: "台东县",
            label: "台东县",
            spell: "taidongxian",
            abb: "tdx",
            children: [
              {
                id: 3865,
                value: "台东市",
                label: "台东市",
                spell: "taidongshi",
                abb: "tds"
              },
              {
                id: 3866,
                value: "成功镇",
                label: "成功镇",
                spell: "chenggongzhen",
                abb: "cgz"
              },
              {
                id: 3867,
                value: "关山镇",
                label: "关山镇",
                spell: "guanshanzhen",
                abb: "gsz"
              },
              {
                id: 3868,
                value: "卑南乡",
                label: "卑南乡",
                spell: "beinanxiang",
                abb: "bnx"
              },
              {
                id: 3869,
                value: "鹿野乡",
                label: "鹿野乡",
                spell: "luyexiang",
                abb: "lyx"
              },
              {
                id: 3870,
                value: "池上乡",
                label: "池上乡",
                spell: "chishangxiang",
                abb: "csx"
              },
              {
                id: 3871,
                value: "东河乡",
                label: "东河乡",
                spell: "donghexiang",
                abb: "dhx"
              },
              {
                id: 3872,
                value: "长滨乡",
                label: "长滨乡",
                spell: "changbinxiang",
                abb: "cbx"
              },
              {
                id: 3873,
                value: "太麻里乡",
                label: "太麻里乡",
                spell: "taimalixiang",
                abb: "tmlx"
              },
              {
                id: 3874,
                value: "大武乡",
                label: "大武乡",
                spell: "dawuxiang",
                abb: "dwx"
              },
              {
                id: 3875,
                value: "绿岛乡",
                label: "绿岛乡",
                spell: "lvdaoxiang",
                abb: "ldx"
              },
              {
                id: 3876,
                value: "海端乡",
                label: "海端乡",
                spell: "haiduanxiang",
                abb: "hdx"
              },
              {
                id: 3877,
                value: "延平乡",
                label: "延平乡",
                spell: "yanpingxiang",
                abb: "ypx"
              },
              {
                id: 3878,
                value: "金峰乡",
                label: "金峰乡",
                spell: "jinfengxiang",
                abb: "jfx"
              },
              {
                id: 3879,
                value: "达仁乡",
                label: "达仁乡",
                spell: "darenxiang",
                abb: "drx"
              },
              {
                id: 3880,
                value: "兰屿乡",
                label: "兰屿乡",
                spell: "lanyuxiang",
                abb: "lyx"
              }
            ]
          },
          {
            id: 3881,
            value: "花莲县",
            label: "花莲县",
            spell: "hualianxian",
            abb: "hlx",
            children: [
              {
                id: 3882,
                value: "花莲市",
                label: "花莲市",
                spell: "hualianshi",
                abb: "hls"
              },
              {
                id: 3883,
                value: "凤林镇",
                label: "凤林镇",
                spell: "fenglinzhen",
                abb: "flz"
              },
              {
                id: 3884,
                value: "玉里镇",
                label: "玉里镇",
                spell: "yulizhen",
                abb: "ylz"
              },
              {
                id: 3885,
                value: "新城乡",
                label: "新城乡",
                spell: "xinchengxiang",
                abb: "xcx"
              },
              {
                id: 3886,
                value: "吉安乡",
                label: "吉安乡",
                spell: "jianxiang",
                abb: "jax"
              },
              {
                id: 3887,
                value: "寿丰乡",
                label: "寿丰乡",
                spell: "shoufengxiang",
                abb: "sfx"
              },
              {
                id: 3888,
                value: "光复乡",
                label: "光复乡",
                spell: "guangfuxiang",
                abb: "gfx"
              },
              {
                id: 3889,
                value: "丰滨乡",
                label: "丰滨乡",
                spell: "fengbinxiang",
                abb: "fbx"
              },
              {
                id: 3890,
                value: "瑞穗乡",
                label: "瑞穗乡",
                spell: "ruisuixiang",
                abb: "rsx"
              },
              {
                id: 3891,
                value: "富里乡",
                label: "富里乡",
                spell: "fulixiang",
                abb: "flx"
              },
              {
                id: 3892,
                value: "秀林乡",
                label: "秀林乡",
                spell: "xiulinxiang",
                abb: "xlx"
              },
              {
                id: 3893,
                value: "万荣乡",
                label: "万荣乡",
                spell: "wanrongxiang",
                abb: "wrx"
              },
              {
                id: 3894,
                value: "卓溪乡",
                label: "卓溪乡",
                spell: "zhuoxixiang",
                abb: "zxx"
              }
            ]
          },
          {
            id: 3895,
            value: "澎湖县",
            label: "澎湖县",
            spell: "pengpaixian",
            abb: "ppx",
            children: [
              {
                id: 3896,
                value: "马公市",
                label: "马公市",
                spell: "magongshi",
                abb: "mgs"
              },
              {
                id: 3897,
                value: "湖西乡",
                label: "湖西乡",
                spell: "huxixiang",
                abb: "hxx"
              },
              {
                id: 3898,
                value: "白沙乡",
                label: "白沙乡",
                spell: "baishaxiang",
                abb: "bsx"
              },
              {
                id: 3899,
                value: "西屿乡",
                label: "西屿乡",
                spell: "xiyuxiang",
                abb: "xyx"
              },
              {
                id: 3900,
                value: "望安乡",
                label: "望安乡",
                spell: "wanganxiang",
                abb: "wax"
              },
              {
                id: 3901,
                value: "七美乡",
                label: "七美乡",
                spell: "qimeixiang",
                abb: "qmx"
              }
            ]
          },
          {
            id: 3902,
            value: "金门县",
            label: "金门县",
            spell: "jinmenxian",
            abb: "jmx",
            children: [
              {
                id: 3903,
                value: "金城镇",
                label: "金城镇",
                spell: "jinchengzhen",
                abb: "jcz"
              },
              {
                id: 3904,
                value: "金湖镇",
                label: "金湖镇",
                spell: "jinhuzhen",
                abb: "jhz"
              },
              {
                id: 3905,
                value: "金沙镇",
                label: "金沙镇",
                spell: "jinshazhen",
                abb: "jsz"
              },
              {
                id: 3906,
                value: "金宁乡",
                label: "金宁乡",
                spell: "jinningxiang",
                abb: "jnx"
              },
              {
                id: 3907,
                value: "烈屿乡",
                label: "烈屿乡",
                spell: "lieyuxiang",
                abb: "lyx"
              },
              {
                id: 3908,
                value: "乌丘乡",
                label: "乌丘乡",
                spell: "wuqiuxiang",
                abb: "wqx"
              }
            ]
          },
          {
            id: 3909,
            value: "连江县",
            label: "连江县",
            spell: "lianjiangxian",
            abb: "ljx",
            children: [
              {
                id: 3910,
                value: "南竿乡",
                label: "南竿乡",
                spell: "nanganxiang",
                abb: "ngx"
              },
              {
                id: 3911,
                value: "北竿乡",
                label: "北竿乡",
                spell: "beiganxiang",
                abb: "bgx"
              },
              {
                id: 3912,
                value: "莒光乡",
                label: "莒光乡",
                spell: "juguangxiang",
                abb: "jgx"
              },
              {
                id: 3913,
                value: "东引乡",
                label: "东引乡",
                spell: "dongyinxiang",
                abb: "dyx"
              }
            ]
          }
        ]
      },
      {
        id: 3914,
        value: "香港特别行政区",
        label: "香港特别行政区",
        spell: "xianggangtebiexingzhengqu",
        abb: "xgtbxzq",
        children: [
          {
            id: 3915,
            value: "香港岛",
            label: "香港岛",
            spell: "xianggangdao",
            abb: "xgd",
            children: [
              {
                id: 3916,
                value: "中西区",
                label: "中西区",
                spell: "zhongxiqu",
                abb: "zxq"
              },
              {
                id: 3917,
                value: "湾仔区",
                label: "湾仔区",
                spell: "wanziqu",
                abb: "wzq"
              },
              {
                id: 3918,
                value: "东区",
                label: "东区",
                spell: "dongqu",
                abb: "dq"
              },
              {
                id: 3919,
                value: "南区",
                label: "南区",
                spell: "nanqu",
                abb: "nq"
              }
            ]
          },
          {
            id: 3920,
            value: "九龙",
            label: "九龙",
            spell: "jiulong",
            abb: "jl",
            children: [
              {
                id: 3921,
                value: "油尖旺区",
                label: "油尖旺区",
                spell: "youjianwangqu",
                abb: "yjwq"
              },
              {
                id: 3922,
                value: "深水埗区",
                label: "深水埗区",
                spell: "shenshuiqu",
                abb: "ssq"
              },
              {
                id: 3923,
                value: "九龙城区",
                label: "九龙城区",
                spell: "jiulongchengqu",
                abb: "jlcq"
              },
              {
                id: 3924,
                value: "黄大仙区",
                label: "黄大仙区",
                spell: "huangdaxianqu",
                abb: "hdxq"
              },
              {
                id: 3925,
                value: "观塘区",
                label: "观塘区",
                spell: "guantangqu",
                abb: "gtq"
              }
            ]
          },
          {
            id: 3926,
            value: "新界",
            label: "新界",
            spell: "xinjie",
            abb: "xj",
            children: [
              {
                id: 3927,
                value: "荃湾区",
                label: "荃湾区",
                spell: "quanwanqu",
                abb: "qwq"
              },
              {
                id: 3928,
                value: "屯门区",
                label: "屯门区",
                spell: "tunmenqu",
                abb: "tmq"
              },
              {
                id: 3929,
                value: "元朗区",
                label: "元朗区",
                spell: "yuanlangqu",
                abb: "ylq"
              },
              {
                id: 3930,
                value: "北区",
                label: "北区",
                spell: "beiqu",
                abb: "bq"
              },
              {
                id: 3931,
                value: "大埔区",
                label: "大埔区",
                spell: "dapuqu",
                abb: "dpq"
              },
              {
                id: 3932,
                value: "西贡区",
                label: "西贡区",
                spell: "xigongqu",
                abb: "xgq"
              },
              {
                id: 3933,
                value: "沙田区",
                label: "沙田区",
                spell: "shatianqu",
                abb: "stq"
              },
              {
                id: 3934,
                value: "葵青区",
                label: "葵青区",
                spell: "kuiqingqu",
                abb: "kqq"
              },
              {
                id: 3935,
                value: "离岛区",
                label: "离岛区",
                spell: "lidaoqu",
                abb: "ldq"
              }
            ]
          }
        ]
      },
      {
        id: 3936,
        value: "澳门特别行政区",
        label: "澳门特别行政区",
        spell: "aomentebiexingzhengqu",
        abb: "amtbxzq",
        children: [
          {
            id: 3937,
            value: "澳门半岛",
            label: "澳门半岛",
            spell: "aomenbandao",
            abb: "ambd",
            children: [
              {
                id: 3938,
                value: "花地玛堂区",
                label: "花地玛堂区",
                spell: "huadimatangqu",
                abb: "hdmtq"
              },
              {
                id: 3939,
                value: "圣安多尼堂区",
                label: "圣安多尼堂区",
                spell: "shenganduonitangqu",
                abb: "sadntq"
              },
              {
                id: 3940,
                value: "大堂区",
                label: "大堂区",
                spell: "datangqu",
                abb: "dtq"
              },
              {
                id: 3941,
                value: "望德堂区",
                label: "望德堂区",
                spell: "wangdetangqu",
                abb: "wdtq"
              },
              {
                id: 3942,
                value: "风顺堂区",
                label: "风顺堂区",
                spell: "fengshuntangqu",
                abb: "fstq"
              }
            ]
          },
          {
            id: 3943,
            value: "氹仔岛",
            label: "氹仔岛",
            spell: "dangzaidao",
            abb: "dzd",
            children: [
              {
                id: 3944,
                value: "嘉模堂区",
                label: "嘉模堂区",
                spell: "jiamotangqu",
                abb: "jmtq"
              }
            ]
          },
          {
            id: 3945,
            value: "路环岛",
            label: "路环岛",
            spell: "luhuandao",
            abb: "lhd",
            children: [
              {
                id: 3946,
                value: "圣方济各堂区",
                label: "圣方济各堂区",
                spell: "shengfangjigetangqu",
                abb: "sfjgtq"
              }
            ]
          }
        ]
      }
    ]
  },
  mutations: {
    /*  addClassesAndTeachers(state,data){
      state.classes = data.classes;
      state.teachers = data.teachers;
    }*/
  }
});
export default store;
