<template>
  <div class="mainCon">
    <div class="guider">
      <router-link to="/" v-for="(item, index) in guiderData" :key="index">{{
        item.title
      }}</router-link>
    </div>
    <el-row class="up" style="height: 240px" type="flex">
      <el-col :span="14">
        <div class="banner">
          <el-carousel height="240px">
            <el-carousel-item
              style="transition: all 0.8s ease; opacity: 0"
              v-for="(img, index) in imgData"
              :key="index"
            >
              <router-link to="/">
                <img :src="img" />
              </router-link>
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
      <el-col class="mid" :span="4">
        <a href="/">
          <img
            src="http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg"
          />
        </a>
      </el-col>
      <el-col :span="5" style="height: 240px" class="right">
        <div class="content">
          <img src="../../img/avatar.jpg" />
          <p>Hi! 你好</p>
          <router-link :to="{ name: 'regist' }">注册</router-link>
          <router-link :to="{ name: 'login' }">立即登录</router-link>
        </div>
      </el-col>
    </el-row>
    <el-row class="down" style="height: 165px" type="flex">
      <el-col :span="14" class="left">
        <a href="/">
          <img
            src="http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png"
          />
        </a>
        <a href="/">
          <img
            src="http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg"
          />
        </a>
      </el-col>
      <el-col :span="4" class="middle">
        <a href="/">
          <img
            src="http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg"
          />
        </a>
      </el-col>
      <el-col :span="5" class="download">
        <div class="wrap">
          <div class="ma">
            <img src="../../img/download-qr.png" width="95" height="95" />
          </div>
          <p>美团APP手机版</p>
          <p><span class="red">1元起</span>吃喝玩乐</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgData: [
        "http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg",
        "http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg",
        "http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg",
        "http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg",
        "https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png",
      ],
      guiderData: [
        {
          title: "美团外卖",
          color: "#fbc700",
        },
        {
          title: "猫眼电影",
          color: "#ede124",
        },
        {
          title: "美团酒店",
          color: "#f04d4e",
        },
        {
          title: "民宿 / 公寓",
          color: "#fdc411",
        },
        {
          title: "商家入驻",
          color: "#fe8c00",
        },
        {
          title: "美团公益",
          color: "#f04d4e",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.mainCon {
  margin: 10px 0 0 10px;
  flex-grow: 1;
  position: relative;
  .guider {
    position: absolute;
    z-index: 10;
    top: -45px;
    left: 20px;
    a {
      font-size: 16px;
      font-weight: bold;
      color: #222;
      margin: 0 20px;
      &:nth-child(1) {
        &:hover {
          color: #fbc700;
        }
      }
      &:nth-child(2) {
        &:hover {
          color: #ed1e24;
        }
      }
      &:nth-child(3) {
        &:hover {
          color: #f04d4e;
        }
      }
      &:nth-child(4) {
        &:hover {
          color: #fdc411;
        }
      }
      &:nth-child(5) {
        &:hover {
          color: #fe8c00;
        }
      }
      &:nth-child(6) {
        &:hover {
          color: #f04d4e;
        }
      }
    }
  }
  .up {
    margin-bottom: 10px;
    .banner {
      a {
        display: block;
        height: 100%;
      }
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
      .is-active {
        opacity: 1 !important;
      }
      .el-carousel__item {
        transform: none !important;
      }
    }
    .mid {
      margin: 0 10px;
      a {
        display: inline-block;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .right {
      flex-grow: 1;
      background: #fff;
      border: 1px solid #e5e5e5;
      .content {
        height: 100%;
        box-sizing: border-box;
        padding-top: 28px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        img {
          width: 47px;
          height: 47px;
          border: 4px solid #e5e5e5;
          border-radius: 50%;
        }
        p {
          margin: 0%;
          color: #333;
        }
        a {
          width: 120px;
          height: 36px;
          line-height: 36px;
          border-radius: 18px;
          display: inline-block;
          text-align: center;
          color: #333;
          font-size: 14px;
          border: 1px solid #e5e5e5;
          &:hover {
            background: #f6f6f6;
            transition: background-color 0.5s ease;
          }
        }
      }
    }
  }
  .down {
    .left {
      font-size: 0;
      display: flex;
      justify-content: space-between;
      a {
        height: 100%;
        img {
          height: 100%;
          width: 270px;
        }
      }
    }
    .middle {
      height: 100%;
      margin: 0 10px;
      a {
        display: inline-block;
        width: 100%;
        height: 100%;
        img {
          height: 100%;
          width: 100%;
        }
      }
    }
    .download {
      height: 100%;
      flex-grow: 1;
      .wrap {
        width: 100%;
        height: 100%;
        background: #fff;
        border: 1px solid #e5e5e5;
        text-align: center;
        .ma{
          padding-top: 10px;
        }
        p {
          margin: 0;
          &:nth-child(2) {
            color: #222;
          }
          &:nth-child(3) {
            font-size: 12px;
            margin-top: 2px;
            color: #3f3f3f;
            .red{
              color: #EC5330;
              margin-right: 5px;
            }
          }
        }
      }
    }
  }
}
</style>