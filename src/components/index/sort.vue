<template>
  <div class="sort">
    <dl>
      <dt>
        <span>全部分类</span>
      </dt>
      <dd v-for="(item, index) in sortList" :key="index" @mouseenter="handleMouseenter(item)" @mouseleave="handleMouseleave()">
        <i class="iconfont" :class="item.icon" :style="{color: item.color}"></i>
        <router-link to="/">{{item.name}}</router-link>
        <div class="arrow"></div>
        <div class="hot" v-if="item.hot">HOT</div>
      </dd>
    </dl>
    <div class="detail" @mouseenter="handleEnterdetail" @mouseleave="handleLeavedetail" v-show="showDetail"> 
      <dl v-for="(item, index) in details" :key="index" class="clearfix">
        <dt>
          {{item.title}}
          <div class="more">
            <router-link to="/">更多</router-link>
            <div class="arrow"></div>
          </div>
        </dt>
        <dd v-for="(item, index) in item.children" :key="index">
          <a href="/">{{item}}</a>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDetail: false,
      details: [],
      timer: null,
      sortList: [
        {
          name: "美食",
          icon: "icon-meishi1",
          color: "#ff8200",
          children: [
            {
              title: "美食",
              children: [
                "代金券",
                "甜点",
                "饮品",
                "火锅",
                "自助餐",
                "小吃快餐",
                "日韩料理",
                "西餐",
                "聚餐宴请",
                "烧烤烤肉",
                "东北菜",
                "川湘菜",
                "江浙菜",
                "香锅烤鱼",
                "粤港菜",
                "中式烧烤/烤串",
                "西北菜",
                "咖啡酒吧茶馆",
                "云贵菜",
                "东南亚菜",
                "海鲜",
                "素食",
                "台湾/客家菜",
                "创意菜",
                "汤/粥/炖菜",
                "蒙餐",
                "新疆菜",
                "其他美食",
                "京菜鲁菜",
              ],
            },
          ],
        },
        {
          name: "外卖",
          icon: "icon-O2OMeituanmeituan",
          color: "#FFB500",
          children: [
            {
              title: "外卖",
              children: ["美团外卖"],
            },
          ],
        },
        {
          name: "酒店",
          icon: "icon-jiudian",
          color: "#9B5E3E",
          children: [
            {
              title: "酒店星级",
              children: ["经济型", "舒适/三星", "高档/四星", "豪华/五星"],
            },
          ],
          hot: true,
        },
        {
          name: "民宿",
          icon: "icon-minsu",
          color: "#FFB500",
          children: [
            {
              title: "热门城市",
              children: [
                "上海",
                "成都",
                "北京",
                "重庆",
                "南京",
                "杭州",
                "广州",
                "西安",
                "武汉",
                "厦门",
                "长沙",
                "青岛",
                "深圳",
                "天津",
                "苏州",
              ],
            },
            {
              title: "热门房源",
              children: ["复式Lof", "别墅"],
            },
          ],
        },
        {
          name: "猫眼电影",
          icon: "icon-Artboard",
          color: "#FF3D00",
          children: [
            {
              title: "热映电影",
              children: [
                "八佰",
                "花木兰",
                "夺冠",
                "信条",
                "死无对证",
                "麦路人",
                "我在时间尽头等你",
                "1/2的魔法",
                "萌宠流浪记",
                "一点就到家",
              ],
            },
          ],
        },
        {
          name: "机票 / 火车票",
          icon: "icon-chuhang",
          color: "#03A9F4",
          children: [
            {
              title: "机票",
              children: ["国内机票", "国际/港澳台机票"],
            },
            {
              title: "火车票",
              children: ["火车票"],
            },
          ],
        },
        {
          name: "休闲娱乐 / KTV",
          icon: "icon-ktv1",
          color: "#00BF96",
          children: [
            {
              title: "休闲娱乐",
              children: [
                "足疗按摩",
                "洗浴/汗蒸",
                "酒吧",
                "密室逃脱",
                "轰趴馆",
                "茶馆",
                "私人影院",
                "DIY手工坊",
                "采摘/农家乐",
                "网吧",
                "网咖",
                "游乐游艺",
                "VR",
                "桌面游戏",
                "真人CS",
                "棋牌室",
                "其他玩乐",
              ],
            },
            {
              title: "KTV",
              children: ["KTV"],
            },
          ],
        },
        {
          name: "生活服务",
          icon: "icon-shenghuofuwu",
          color: "#00BF96",
          children: [
            {
              title: "生活服务",
              children: [
                "衣物/皮具洗护",
                "家政",
                "搬家运输",
                "送水",
                "充值缴费",
                "服饰/鞋包养护",
                "开锁换锁",
                "居家维修",
                "管道疏通",
                "家电维修清洗",
                "电脑维修",
                "手机维修",
                "证件照/肖像摄影",
                "照片冲印/图文文印",
                "商务服务/法律服务",
                "文化传媒机构",
                "成人用品/情趣用品",
              ],
            },
          ],
        },
        {
          name: "丽人 / 美发 / 医学美容",
          icon: "icon-liren",
          color: "#FF4081",
          children: [
            {
              title: "丽人",
              children: [
                "美发",
                "美甲",
                "美睫",
                "美容",
                "美体",
                "医学美容",
                "瑜伽舞蹈",
                "瘦身纤体",
                "韩式定妆",
                "祛痘",
                "纹身",
                "化妆品",
                "养发",
              ],
            },
          ],
        },
        {
          name: "结婚 / 婚纱摄影 / 婚宴",
          icon: "icon-jiehun",
          color: "#FF4081",
          children: [
            {
              title: "结婚",
              children: [
                "婚纱摄影",
                "旅拍",
                "个性写真",
                "婚宴",
                "婚庆公司",
                "婚纱礼服",
                "西服定制",
                "婚戒首饰",
                "婚车租赁",
                "司仪主持",
                "彩妆造型",
                "婚礼跟拍",
                "婚礼小礼品",
                "更多婚礼服务",
              ],
            },
          ],
        },
        {
          name: "亲子 / 儿童乐园 / 幼教",
          icon: "icon-qinzi",
          color: "#FF4081",
          children: [
            {
              title: "儿童乐园",
              children: ["婴儿游泳", "其它亲子游乐"],
            },
            {
              title: "幼儿教育",
              children: [
                "早教中心",
                "少儿英语",
                "智力开发",
                "托班/幼儿园",
                "幼儿教育",
                "其他幼儿教育",
              ],
            },
            {
              title: "亲子摄影",
              children: ["儿童摄影", "孕妇写真", "上门拍", "其他亲子摄影"],
            },
            {
              title: "孕产护理",
              children: [
                "月子会所",
                "产后恢复",
                "妇幼医院",
                "孕产用品",
                "开奶催乳",
                "月嫂",
                "亲子购物",
                "宝宝派对",
                "亲子服务",
              ],
            },
          ],
        },
        {
          name: "运动健身 / 健身中心",
          icon: "icon-yundongjianshen",
          color: "#03A9F4",
          children: [
            {
              title: "运动健身",
              children: [
                "健身中心",
                "武术场馆",
                "游泳馆",
                "羽毛球馆",
                "溜冰场",
                "射箭馆",
                "篮球场",
                "网球馆",
                "台球馆",
                "乒乓球",
                "足球场",
                "高尔夫场",
                "保龄球馆",
                "体育场馆",
                "马术场",
                "壁球馆",
                "更多运动",
              ],
            },
          ],
        },
        {
          name: "家装 / 建材 / 家居",
          icon: "icon-jiazhuang",
          color: "#00BF96",
          children: [
            {
              title: "家装设计",
              children: ["半包装修", "全包装修", "清包装修"],
            },
            {
              title: "装修建材",
              children: [
                "地板瓷砖",
                "石材",
                "橱柜",
                "灯饰照明",
                "厨卫洁具",
                "油漆涂料",
                "集成吊顶",
                "墙纸墙艺",
                "门窗",
                "木材板材",
                "家用五金",
                "电工电料",
                "楼梯",
                "管材管件",
              ],
            },
            {
              title: "家具家居",
              children: [
                "家具",
                "床上用品/家纺",
                "家居饰品",
                "厨具餐具",
                "智能家居",
              ],
            },
            {
              title: "家装卖场",
              children: ["建材卖场", "家居卖场", "灯饰卖场"],
            },
          ],
        },
        {
          name: "学习培训 / 音乐培训",
          icon: "icon-shijuan-logo",
          color: "#00BF96",
          children: [
            {
              title: "音乐培训",
              children: [
                "钢琴",
                "吉他",
                "小提琴",
                "古筝",
                "架子鼓",
                "声乐",
                "其他音乐培训",
              ],
            },
            {
              title: "职业技术",
              children: [
                "美容化妆",
                "会计",
                "IT",
                "厨艺",
                "管理培训",
                "摄影培训",
                "司法考试",
                "公务员培训",
                "其他职业培训",
              ],
            },
            {
              title: "外语培训",
              children: [
                "英语",
                "日语",
                "韩语",
                "法语",
                "德语",
                "汉语",
                "俄语",
                "西班牙语",
                "其他外语",
              ],
            },
            {
              title: "美术培训",
              children: ["绘画", "书法", "其他美术"],
            },
          ],
        },
        {
          name: "医疗健康 / 宠物 / 爱车",
          icon: "icon-yiliaojiankang",
          color: "#03A9F4",
          children: [
            {
              title: "医疗健康",
              children: [
                "医院",
                "齿科口腔",
                "体检中心",
                "药店中医",
                "其他健康服务",
              ],
            },
            {
              title: "爱车",
              children: [
                "洗车",
                "租车",
                "加油站",
                "维修保养",
                "驾校",
                "汽车美容",
                "陪练",
                "汽车用品",
                "停车场",
                "汽车保险",
                "4S店/汽车销售",
                "更多汽车服务",
                "机油保养",
                "汽车报价",
                "二手车",
                "广告驾校",
                "交警队",
                "汽车改装",
                "汽车配件",
              ],
            },
            {
              title: "宠物",
              children: ["宠物店", "宠物医院"],
            },
          ],
        },
        {
          name: "酒吧 / 密室逃脱",
          icon: "icon-jiuba",
          color: "#00BF96",
          children: [
            {
              title: "玩乐",
              children: [
                "KTV",
                "酒吧",
                "密室逃脱",
                "游乐游艺",
                "网吧网咖",
                "私人影院",
                "DIY手工坊",
                "桌面游戏",
                "采摘/农家乐",
                "棋牌室",
                "轰趴馆",
                "真人CS",
                "VR",
                "其他玩乐",
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleMouseenter(item) {
        clearTimeout(this.timer);
      this.showDetail = true;
      this.details = item.children;
    },
    handleMouseleave() {
        this.timer = setTimeout(() => {
            this.showDetail = false;
        }, 250);
    },
    handleEnterdetail() {
        clearTimeout(this.timer);
    },
    handleLeavedetail() {
        this.showDetail = false;
    }
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/css/public/var.scss";

.sort {
  position: relative;
  width: 230px;
  height: 425px;
  display: inline-block;
  position: relative;
  vertical-align: text-bottom;
  z-index: 20;
  dl {
    margin-top: -50px;
    height: 475px;
    background: #fff;
    box-sizing: border-box;
    border: 1px solid #e5e5e5;
    width: 100%;
    a {
      color: #646464;
      font-size: 13px;
    }
    dt {
      color: #222;
      font-weight: 700;
      height: 50px;
      padding-top: 15px;
      span {
        margin-left: 15px;
      }
    }
    dd {
      font-size: 13px;
      padding: 2px 12px;
      .hot {
        display: inline-block;
        margin-left: 5px;
        background: #fff3cc;
        color: #222;
        padding: 0 7px;
        border-radius: 10px;
      }
      a {
        color: #646464;
      }
      &:hover {
        background: rgba(255, 150, 0, 0.08);
        a {
          color: #222;
          font-weight: 700;
        }
        .hot {
          background: linear-gradient(to bottom right, #ffd000, #ffbd00);
        }
        .arrow {
          border-color: #222;
        }
      }
      i{
          margin-right: 11px;
      }
      i::before {
        width: 16px;
        height: 16px;
        vertical-align: middle;
      }
    }
    .arrow {
      float: right;
      width: 4px;
      height: 4px;
      margin-top: 8px;
      border: {
        top: 1px solid #bfbfbf;
        right: 1px solid #bfbfbf;
      }
      transform: rotate(45deg);
    }
  }
  .detail {
    position: absolute;
    width: 400px;
    height: 416px;
    left: 230px;
    top: 5px;
    background: #fff;
    dl {
      width: 100%;
      box-sizing: border-box;
      padding: 0 30px;
      height: auto;
      margin-top: 0;
      border: none;
      dt {
        height: 22px;
        padding-bottom: 10px;
        font-weight: normal;
        padding-top: 0;
        border-bottom: 1px solid #e5e5e5;
        margin-top: 24px;
        .more {
          font-weight: normal;
          float: right;
          a {
            color: #999;
            font-size: 12px;
            margin-right: 5px;
          }
        }
        .arrow {
          margin-top: 10px;
        }
      }
      dd {
        float: left;
        margin: 10px 16px 0 0;
        padding: 0;
        a {
          color: #999;
          &:hover {
            color: $hoverColor;
          }
        }
        &:hover {
          background: none;
          a {
            font-weight: normal;
          }
        }
      }
    }
  }
}
</style>