<template>
  <div class="proIndex">
    <el-row class="nav">
      <p>
        <span>{{ $store.state.city }}美团</span>
        >
        <span>{{ $store.state.city }}{{ $route.params.name }}</span>
      </p>
    </el-row>
    <el-row>
      <el-col :span="18" class="main">
        <el-row class="recom">
          <div class="perPart">
            <dl>
              <dt class="title">分类</dt>
              <dt class="all">全部</dt>
              <div>
                <dd v-for="(item, index) in optionsData.sort" :key="index">
                  <tab :data="item"></tab>
                </dd>
              </div>
            </dl>
          </div>

          <div class="perPart">
            <dl>
              <dt class="title">区域</dt>
              <dt class="all">全部</dt>
              <div>
                <dd v-for="(item, index) in optionsData.area" :key="index">
                  <tab :data="item"></tab>
                </dd>
              </div>
            </dl>
          </div>
        </el-row>

        <el-row class="store">
          <div class="methods">
            <ul class="clearfix">
              <li
                :class="{ active: curMethod == 'zn' }"
                @click="changeMethod('zn')"
              >
                智能排序
              </li>
              <li
                :class="{ active: curMethod == 'jg' }"
                @click="
                  changeMethod('jg', !up && !down ? 'up' : !up ? 'up' : 'down')
                "
              >
                价格排序
                <div class="arrow">
                  <div class="el-icon-caret-top" :class="{ active: up }"></div>
                  <div
                    class="el-icon-caret-bottom"
                    :class="{ active: down }"
                  ></div>
                </div>
              </li>
              <li
                :class="{ active: curMethod == 'rq' }"
                @click="changeMethod('rq')"
              >
                人气最高
              </li>
              <li
                :class="{ active: curMethod == 'pj' }"
                @click="changeMethod('pj')"
              >
                评价最高
              </li>
            </ul>
          </div>
          <div class="perStore">
            <store
              v-for="(item, index) in storeList"
              :key="index"
              :storeData="item"
            ></store>
          </div>
        </el-row>
      </el-col>

      <el-col :span="5" class="rightContent">
        <div class="map">
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602424932681&di=8d1c7f9aaa4d9dada27bdda52fe45695&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F2cf5e0fe9925bc31e920d5545adf8db1ca1370f9.jpg"
          />
        </div>

        <el-row class="like">
          <p class="title">猜你喜欢</p>

          <div class="perLike" v-for="(item, index) in likeList" :key="index">
            <div class="img">
              <a href="/">
                <img :src="item.img" />
              </a>
            </div>

            <div class="info">
              <p class="name">{{ item.name }}</p>

              <div class="score">
                <el-rate
                  v-model="item.score"
                  disabled
                  text-color="#ff9900"
                  score-template="{value}"
                  :colors="['#ff9900', '#f90', '#f90']"
                  disabled-void-color="#c3c3c3"
                  style="float: left"
                >
                </el-rate>
                <span>{{ item.comentNum }}个评论</span>
              </div>

              <div class="address">{{ item.address }}</div>

              <div class="price">
                ￥<span class="number">{{ item.price }}</span
                ><span class="qi">起</span>
              </div>
            </div>
          </div>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import tab from "./tab";
import store from "./store";
export default {
  data() {
    return {
      curMethod: "zn",
      up: false,
      down: false,
      value: 4.4,
      likeList: [
        {
          img:
            "https://p0.meituan.net/msmerchant/9036e931509f303c184fe5243ac05eb987341.jpg@237w_132h_1e_1c",
          name: "红荔村肠粉（1店云景店）",
          score: 4.4,
          comentNum: 1831,
          address: "宝安中心区",
          price: "19.0",
        },
        {
          img:
            "https://p0.meituan.net/msmerchant/9036e931509f303c184fe5243ac05eb987341.jpg@237w_132h_1e_1c",
          name: "红荔村肠粉（1店云景店）",
          score: 4.4,
          comentNum: 1831,
          address: "宝安中心区",
          price: "19.0",
        },
        {
          img:
            "https://p0.meituan.net/msmerchant/9036e931509f303c184fe5243ac05eb987341.jpg@237w_132h_1e_1c",
          name: "红荔村肠粉（1店云景店）",
          score: 4.4,
          comentNum: 1831,
          address: "宝安中心区",
          price: "19.0",
        },
      ],
      storeList: [
        {
          img:
            "https://p1.meituan.net/msmerchant/4ec6ebab4963c4ec9067cd9b581789ab418760.png@275w_156h_1e_1c",
          rank: 1,
          name: "贤合庄卤味火锅（梅林店）",
          score: 4.8,
          comentNum: 501,
          type: "四川火锅",
          county: "梅林",
          address:
            "福田区北环大道梅林生活中心商场2楼（手扶电梯上2楼，粤笙记隔壁）",
          ave: 97,
          discount: [
            {
              title: "50元开业超值代金券（4月29日开始接待）1张",
              price: 44.5,
              markprice: 50,
              solded: 8061,
            },
            {
              title: "50元开业超值代金券（4月29日开始接待）1张",
              price: 44.5,
              markprice: 50,
              solded: 8061,
            },
            {
              title: "50元开业超值代金券（4月29日开始接待）1张",
              price: 44.5,
              markprice: 50,
              solded: 8061,
            },
            {
              title: "50元开业超值代金券（4月29日开始接待）1张",
              price: 44.5,
              markprice: 50,
              solded: 8061,
            },
          ],
        },
      ],
      optionsData: {
          sort: [],
          area: []
      }, // 分类和区域的数据，期中每一项的结构跟data相同
    }
  },
  components: {
    tab,
    store,
  },
  mounted() {
      this.$axios.get('/areaAndsort').then(resp => {
          this.optionsData.sort = resp.sort;
          this.optionsData.area = resp.area;
      })
  },
  // 处理动态路由改变重新获取数据
  beforeRouteUpdate(){
      this.$axios.get('/areaAndsort').then(resp => {
          this.optionsData.sort = resp.sort;
          this.optionsData.area = resp.area;
      })
  },
  methods: {
    changeMethod(type, arrow) {
      if (!arrow) {
        this.up = false;
        this.down = false;
      } else {
        if (arrow == "up") {
          this.up = true;
          this.down = false;
        } else {
          this.up = false;
          this.down = true;
        }
      }
      this.curMethod = type;
    },
  },
};
</script>

<style scoped lang="scss">
.proIndex {
  margin-top: 20px;
  .nav {
    font-size: 12px;
    color: #222;
    margin: 10px 0;
    & > p {
      & > span {
        cursor: pointer;
        &:hover {
          color: #fe8c00;
        }
      }
    }
  }
  .main {
    margin-top: 10px;
    .recom {
      background: #fff;
      border: 1px solid #e5e5e5;
      border-radius: 5px;
      padding: 10px;
      .perPart {
        font-size: 14px;
        dl {
          display: flex;
          dt {
            height: 22px;
            line-height: 22px;
            flex-shrink: 0;
          }
          .title {
            color: #333;
            width: 80px;
          }
          .all {
            background: linear-gradient(to bottom right, #ffd000, #ffbd00);
            padding: 0 10px;
            color: #222;
            border-radius: 20px;
          }
          & > div {
            display: flex;
            flex-grow: 1;
            flex-wrap: wrap;
            border-bottom: 1px solid #e5e5e5;
            padding-bottom: 10px;
            margin-left: 40px;
            color: #666;
            dd {
              height: 28px;
              line-height: 28px;
              width: 120px;
            }
          }
        }
      }
    }
    .store {
      padding: 20px;
      border: 1px solid #e5e5e5;
      background: #fff;
      border-radius: 5px;
      font-size: 14px;
      color: #666;
      margin-top: 20px;
      .methods {
        padding-bottom: 10px;
        li {
          float: left;
          margin-right: 40px;
          cursor: pointer;
          &.active {
            color: #222;
          }
          .arrow {
            display: inline-block;
            & > div {
              display: block;
              color: #ccc;
              font-size: 12px;
              height: 5px;
              &.active {
                color: #222;
              }
            }
          }
        }
      }
    }
  }
  .rightContent {
    margin-left: 20px;
    margin-top: 10px;
    background: #fff;
    .map {
      width: 100%;
      position: sticky;
      z-index: 9;
      top: 0;
      box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
      border-radius: 5px;

      img {
        width: 100%;
        height: 230px;
        border-radius: 5px;
        display: block;
      }
    }
    .like {
      margin-top: 15px;
      background-color: #fff;
      border: 1px solid #e5e5e5;
      border-radius: 5px;
      padding: 16px 20px 0;
      .title {
        color: #333;
        margin-bottom: 10px;
      }
      .perLike {
        margin-bottom: 10px;
        .img {
          img {
            width: 190px;
            border-radius: 5px;
          }
        }
        .info {
          color: #999;
          font-size: 12px;
          margin-top: 10px;
          .name {
            margin-bottom: 6px;
            font-size: 14px;
            color: #222;
          }
          .score,
          .address {
            height: 20px;
            line-height: 20px;
          }
          .price {
            color: #f60;
            font-size: 14px;
            .number {
              font-size: 22px;
              font-weight: bold;
            }
            .qi {
              font-size: 12px;
            }
          }
        }
      }
    }
  }
}
</style>