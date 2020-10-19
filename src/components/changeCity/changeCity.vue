<template>
  <div class="changeCity">
    <div class="selectArea clearfix">
      <div class="byprovince">
        <span>按省份选择:</span>
        <div class="province">
          <div class="select" @click.stop="proClick">
            <span>{{ selectedPro || "省份" }}</span>
            <i class="el-icon-caret-bottom"></i>
          </div>

          <div class="proDt" v-show="proShow">
            <p class="title">省份</p>
            <div class="wrap">
              <div
                class="per"
                v-for="index1 in Math.ceil(province.length / 12)"
                :key="index1"
              >
                <span
                  v-for="item in province.slice((index1 - 1) * 12, index1 * 12)"
                  :key="item"
                  :class="{ active: selectedPro == item }"
                  @click.stop="selectPro(item)"
                >
                  {{ item }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="city">
          <div
            class="select"
            @click.stop="cityClick"
            :style="{ cursor: selectedPro ? 'pointer' : 'no-drop' }"
          >
            <span>{{ selectedCity || "城市" }}</span>
            <i class="el-icon-caret-bottom"></i>
          </div>

          <div class="cityDt" v-show="cityShow">
            <p class="title">城市</p>
            <div class="wrap">
              <div
                class="per"
                v-for="index1 in Math.ceil(cityData.citys.length / 12)"
                :key="index1"
              >
                <span
                  v-for="item in cityData.citys.slice(
                    (index1 - 1) * 12,
                    index1 * 12
                  )"
                  :key="item"
                  :class="{ active: selectedPro == item }"
                  @click.stop="selectCity(item)"
                >
                  {{ item }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="search">
        <span>直接搜索: </span>
        <div class="input">
          <input
            type="text"
            placeholder="请输入城市中文或拼音"
            @focus="isfocus = true"
            @blur="handleBlur"
            @input="handleInput"
            v-model="searchCity"
          />
          <div class="searchList" v-show="isfocus">
            <ul>
              <li v-if="searchCityList.citys.length == 0">未找到匹配的城市</li>
              <li v-for="item in searchCityList.citys" :key="item" @click="changeCity(item)">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="pad hot">
      <span>热门城市: </span>
      <p>
        <span @click="changeCity(item)" v-for="(item, index) in reAhot.hot" :key="index">{{item}}</span>
      </p>
    </div>
    <div class="pad recent">
      <span>最近访问: </span>
      <p>
        <span @click="changeCity(item)" v-for="(item, index) in reAhot.recent" :key="index">{{item}}</span>
      </p>
    </div>
    <div class="pad letters">
      <span>按拼音首字母选择： </span>
      <p>
        <span v-for="letter in letters" :key="letter">
          <a :href="'#city-' + letter">{{ letter }}</a>
        </span>
      </p>
    </div>

    <div
      class="letter clearfix"
      v-for="(citys, letter) in cityByLetter"
      :key="letter"
      :id="'city-' + letter"
    >
      <span class="log">{{ letter }}</span>
      <div class="citys">
        <span v-for="(city, index) in citys" :key="index" @click="changeCity(city)">{{city}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      letters: "ABCDEFGHJKLMNPQRSTWXYZ",
      selectedPro: null,
      selectedCity: null,
      proShow: false,
      cityShow: false,
      isfocus: false,
      searchCity: null,
      reAhot: {
        hot: [],
        recent: []
      },
      searchCityList: {
        citys: [],
      },
      cityData: {
        citys: [],
      },
      cityByLetter: {},
      province: [
        "山东",
        "甘肃",
        "江苏",
        "北京",
        "云南",
        "海南",
        "浙江",
        "上海",
        "天津",
        "陕西",
        "新疆",
        "贵州",
        "安徽",
        "澳门",
        "湖南",
        "河北",
        "香港",
        "辽宁",
        "四川",
        "宁夏",
        "吉林",
        "福建",
        "湖北",
        "广东",
        "重庆",
        "山西",
        "江西",
        "黑龙江",
        "青海",
        "河南",
        "台湾",
        "内蒙古",
        "西藏",
        "广西",
      ],
    };
  },
  mounted() {
    document.addEventListener(
      "click",
      () => {
        if (!this.proShow && !this.cityShow) return;
        this.proShow = false;
        this.cityShow = false;
      },
      false
    );

    this.$axios
      .get("http://open.duyiedu.com/api/meituan/city/cityByLetter.json")
      .then((resp) => {
        this.cityByLetter = resp;
      });
    
    this.$axios.get("/api/meituan/city/hotAre.json").then((resp) => {
      this.reAhot = resp;
    })
  },
  methods: {
    /**
     * 省份选择框点击事件
     */
    proClick() {
      if (this.proShow) return;
      this.proShow = true;
      if (this.cityShow) this.cityShow = false;
    },
    /**
     * 选择具体省份
     */
    selectPro(pro) {
      if (this.selectedPro == pro) return;
      this.selectedPro = pro;
      this.$axios.get("/api/meituan/city/cityList.json").then((resp) => {
        this.cityData = resp;
      });
    },
    /**
     * 城市选择框点击事件
     */
    cityClick() {
      if (this.cityShow == true || !this.selectedPro) return;
      this.proShow = false;
      this.cityShow = true;
    },
    /**
     * 选择具体城市
     */
    selectCity(city) {
      if (this.selectedCity == city) return;
      this.selectedCity = city;
      this.$store.commit('changeCity', city);
      this.$router.push({ name: 'index' })
    },
    /**
     * 输入搜索词
     */
    handleInput() {
      this.$axios.get("/api/meituan/city/citySearch.json").then((resp) => {
        this.searchCityList = resp;
      });
    },
    /**
     * 搜索框失焦
     */
    handleBlur() {
      setTimeout(() => {
        this.isfocus = false;
      }, 250);
    },
    /**
     * 除了选项框选择城市之外的选择城市
     */
    changeCity(city) {
      console.log('changeCity')
      this.$store.commit('changeCity', city);
      this.$router.push({ name: 'index' });
    }
  },
};
</script>

<style scoped lang="scss">
.changeCity {
  width: 1148px;
  padding: 20px;
  margin: 20px auto 0;
  border: 1px solid #e5e5e5;
  background: #fff;
  border-radius: 5px;
  .pad {
    padding: 30px 0;
    color: #333;
  }
  .selectArea {
    padding-bottom: 30px;
    color: #333;
    border-bottom: 1px solid #e5e5e5;
    .byprovince {
      float: left;
      .province,
      .city {
        padding: 10px 15px;
        border: 1px solid #e5e5e5;
        display: inline-block;
        border-radius: 5px;
        color: #666;
        width: 138px;
        font-size: 14px;
        margin-left: 20px;
        position: relative;
        .select {
          cursor: pointer;
        }
        i {
          float: right;
          width: 12px;
          height: 12px;
          font-size: 12px;
          vertical-align: middle;
          margin-top: 3px;
        }
        .proDt,
        .cityDt {
          padding: 20px 0 0 10px;
          position: absolute;
          border: 1px solid #e5e5e5;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
          border-radius: 5px;
          left: 0;
          top: 46px;
          background: #fff;
          width: auto;
          white-space: nowrap;
          &::after {
            content: "";
            position: absolute;
            top: -4px;
            left: 26px;
            border: {
              bottom: 6px solid #fff;
              left: 6px solid transparent;
              right: 6px solid transparent;
            }
          }
          &::before {
            content: "";
            top: -6px;
            left: 26px;
            position: absolute;
            border: {
              bottom: 6px solid #e5e5e5;
              left: 6px solid transparent;
              right: 6px solid transparent;
            }
          }
          .title {
            font-size: 16px;
            color: #ccc;
            margin: 0;
            margin-bottom: 15px;
          }
          .wrap {
            font-size: 12px;
            color: #222;
            height: 325px;
            white-space: nowrap;
            .per {
              display: inline-block;
              vertical-align: top;
              span {
                display: block;
                border-radius: 10px;
                padding: 1px 8px;
                height: 18px;
                line-height: 18px;
                margin: 6px 38px 6px 0;
                cursor: pointer;
                &.active {
                  background: linear-gradient(
                    to bottom right,
                    #ffd000,
                    #ffbd00
                  );
                  &:hover {
                    background: linear-gradient(
                      to bottom right,
                      #ffd000,
                      #ffbd00
                    );
                  }
                }
                &:hover {
                  background: #f8f8f8;
                }
              }
            }
          }
        }
      }
    }
    .search {
      float: left;
      margin-left: 30px;

      input {
        margin-left: 20px;
        padding: 10px 15px;
        border-radius: 5px;
        outline: none;
        border: 1px solid #e5e5e5;
        font-size: 14px;
        height: 18px;
        line-height: 18px;
      }
      .input {
        display: inline-block;
        position: relative;
        .searchList {
          position: absolute;
          top: 45px;
          left: 20px;
          color: #666;
          font-size: 12px;
          background: #fff;
          border: 1px solid #e5e5e5;
          border-radius: 5px;
          padding: 10px 15px;
          min-width: 150px;
          &::after {
            content: "";
            position: absolute;
            top: -4px;
            left: 26px;
            border: {
              bottom: 6px solid #fff;
              left: 6px solid transparent;
              right: 6px solid transparent;
            }
          }
          &::before {
            content: "";
            top: -6px;
            left: 26px;
            position: absolute;
            border: {
              bottom: 6px solid #e5e5e5;
              left: 6px solid transparent;
              right: 6px solid transparent;
            }
          }
          ul {
            overflow-y: auto;
            max-height: 375px;
            li {
              padding: 1px 8px;
              margin: 6px 38px 6px 0;
              cursor: pointer;
              &:hover {
                color: #222;
              }
            }
          }
        }
      }
    }
  }
  .hot,
  .recent {
    border-bottom: 1px solid #e5e5e5;
    p {
      color: #666;
      font-size: 14px;
      margin-top: 2px;
      display: inline-block;
      span {
        cursor: pointer;
        margin: 0 20px;
        &:hover {
          color: #222;
        }
      }
    }
  }

  .letters {
    color: #333;
    p {
      display: inline-block;
      span {
        display: inline-block;
        line-height: 25px;
        width: 25px;
        height: 25px;
        margin: 0 10px;
        border-radius: 50%;
        text-align: center;
        font-size: 15px;
        &:hover {
          background: #f8f8f8;
          a {
            color: #222;
          }
        }
        a {
          color: #666;
        }
      }
    }
  }

  .letter {
    margin-bottom: 15px;
    padding: 13px 30px 13px 10px;
    transition: background-color 0.5s ease;
    border-radius: 10px;
    &:hover {
      background: #f8f8f8;
    }
    .log {
      color: #222;
      //   display: inline-block;
      float: left;
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-radius: 50%;
      background: #ffd000;
    }
    .citys {
      color: #666;
      font-size: 14px;
      float: left;
      //   display: inline-block;
      max-width: 1020px;
      span {
        margin: 10px 20px;
        display: inline-block;
        cursor: pointer;
        &:hover {
          color: #222;
        }
      }
    }
  }
}
</style>