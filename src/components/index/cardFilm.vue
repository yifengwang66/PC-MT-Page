<template>
  <div class="cardContent">
    <div
      class="wrapper"
      :style="{
        transform: `translateX(${transLeft}px)`,
        transition: isTransition ? 'transform .5s ease' : 'none',
      }"
    >
      <div class="perfilm" v-for="(item, index) in cardData.data" :key="index">
        <a href="/">
          <img class="post" :src="item.img" />
          <img
            v-if="item.is3D != 'none'"
            :src="
              item.is3D
                ? 'https://s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax3d.png'
                : 'https://s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax.png'
            "
            :width="item.is3D ? 78 : 55"
            class="typeLogo"
          />
          <div class="info">
            <p class="com" v-if="item.wish">
              <span class="color">{{ item.wish }}</span>
              人想看
            </p>
            <p class="com" v-if="item.score">
              观众评
              <span class="color">{{ item.score }}</span>
            </p>
            <p class="filmName">{{ item.name }}</p>
            <span class="btn" v-if="item.btn">{{
              item.onPlay ? "购票" : "预售"
            }}</span>
          </div>
        </a>
      </div>
    </div>
    <div class="leftBtn" @click="handleLeftClick">
      <i class="el-icon-arrow-left"></i>
    </div>
    <div class="rightBtn" @click="handleRightClick">
      <i class="el-icon-arrow-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transLeft: 0, // 电影栏偏移量
      curSlide: 5, // 当前显示的最大索引
      maxSlide: 5, // 每页最多显示几个电影
      isTransition: true,
    };
  },
  props: {
    cardData: {
      type: Object,
      require: true,
    },
  },
  watch: {
    cardData() {
      this.isTransition = false;
      this.transLeft = 0;
      this.curSlide = 5;
    },
  },
  updated() {
    this.isTransition = true;
  },
  methods: {
    /**
     * 处理电影栏目右键按钮事件
     */
    handleRightClick() {
      let curSlide = this.curSlide;
      let maxSlide = this.maxSlide;
      let length = this.cardData.data.length; //总数据量
      let shiftIndex; //移动了几项
      // 当前为最后一页则右键无效
      if (this.curSlide >= length) {
        return;
      }
      shiftIndex = length - curSlide >= maxSlide ? maxSlide : length - curSlide;
      this.transLeft -= shiftIndex * 239;
      this.curSlide += shiftIndex;
    },
    /**
     * 处理电影栏目左键按键事件
     */
    handleLeftClick() {
      let maxSlide = this.maxSlide;
      let curSlide = this.curSlide;
      let shiftIndex; //移动了几项
      // 当前为第一页则左键不可用
      if (this.curSlide == maxSlide * 1) {
        return;
      }
      shiftIndex =
        curSlide - maxSlide >= maxSlide ? maxSlide : curSlide - maxSlide;
      this.transLeft += shiftIndex * 239;
      this.curSlide -= shiftIndex;
    },
  },
};
</script>

<style scoped lang="scss">
.cardContent {
  position: relative;
  margin-top: 2px;
  overflow: hidden;
  height: 297px;

  &:hover {
    .leftBtn,
    .rightBtn {
      opacity: 0.8;
    }
  }

  .wrapper {
    position: absolute;
    margin: 0 12px;
    left: 0;
    top: 0;
    transition: left 0.5s ease;
    height: 100%;
    width: 1000000px;
    transform: translateX(0);
    .perfilm {
      float: left;
      height: 100%;
      margin-right: 24px;
      a {
        display: block;
        height: 100%;
        width: 214px;
        position: relative;
        .post {
          width: 100%;
          height: 100%;
          border-radius: 5px 5px 3px 3px;
        }
        .typeLogo {
          position: absolute;
          top: 0;
          box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
          height: 20px;
          left: -5px;
          top: 10px;
        }
        .info {
          height: 100px;
          position: absolute;
          bottom: 0;
          width: 100%;
          background-image: linear-gradient(
            -180deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(29, 45, 55, 0.8) 99%
          );
          border-radius: 0 0 3px 3px;
          p {
            margin: 0;
          }
          .com {
            margin-top: 48px;
            font-weight: bold;
            font-size: 12px;
            color: #fff;
            padding-left: 5px;
            .color {
              color: #fd9827;
              font-weight: normal;
              margin: 0 2px;
              font-size: 16px;
            }
          }
          .filmName {
            color: #fff;
            padding-left: 7px;
            width: 106px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .btn {
            position: absolute;
            width: 52px;
            height: 25px;
            text-align: center;
            color: #fff;
            font-size: 14px;
            background-color: #ff4949;
            border-radius: 15px;
            right: 10px;
            bottom: 10px;
            line-height: 25px;
          }
        }
      }
    }
  }
  .leftBtn,
  .rightBtn {
    position: absolute;
    color: #fff;
    text-align: center;
    line-height: 38px;
    font-size: 20px;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: #333;
    top: 43%;
    opacity: 0;
    transition: opacity 0.5s;
    cursor: pointer;
  }
  .leftBtn {
    left: 0;
  }
  .rightBtn {
    right: 0;
  }
}
</style>