<template>
  <div class="login">
    <el-row class="header">
      <el-col>
        <div class="logo" @click="$router.push({name: 'index'})">
          <img
            src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/logo.6a89007.png"
          />
        </div>
      </el-col>
    </el-row>
    <el-row class="mainCon">
      <el-col :span="12">
        <img
          src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
        />
      </el-col>
      <el-col :span="7" :offset="2" class="form">
        <form action="#">
          <div
            class="wrong"
            :style="{ visibility: wrongMsg ? 'visible' : 'hidden' }"
          >
            <i class="el-icon-remove"></i>
            <span class="wrongMsg">{{ wrongMsg }}</span>
          </div>

          <div class="title">
            <span>账号登录</span>
            <span class="change" @click="changePath"
              >{{ dtm ? "普通方式登录" : "手机动态码登录"
              }}<i
                class="iconfont"
                :class="{ 'icon-shouji': !dtm, 'icon-yonghu': dtm }"
              ></i
            ></span>
          </div>

          <div class="input">
            <div class="phoneNum" :class="{ focus: focusPN }">
              <span>+86 <i class="el-icon-arrow-right"></i></span>
              <input
                type="text"
                placeholder="手机号"
                v-model="userName"
                @focus="handleFocus('PN')"
                @blur="focusPN = false"
              />
            </div>
            <div class="password" :class="{ focus: focusPW }">
              <i class="el-icon-lock"></i>
              <input
                type="password"
                :placeholder="dtm ? '动态码' : '密码'"
                v-model="password"
                @focus="handleFocus('PW')"
                @blur="focusPW = false"
              />
              <span class="getdtm" v-if="dtm">获取手机动态码</span>
            </div>
          </div>

          <p class="forget"><span>忘记密码?</span></p>

          <button class="btn" @click="submit">登录</button>

          <p class="noaccount" v-if="!dtm">
            还没有账号？<span
              class="toRegist"
              @click="$router.push({ name: 'regist' })"
              >免费注册</span
            >
          </p>
          <p class="tk" v-if="dtm">
            提示：未注册美团账号的手机号，登录时将自动注册美团账号，且代表您已同意
            <span>《美团点评用户服务协议》</span
            ><span>《美团点评隐私政策》</span>
          </p>
        </form>

        <div class="otherPath">
          <span>用合作网站账号登录</span>
          <div class="gap"></div>
          <div class="icon">
            <span class="qq"></span>
            <span class="wb"></span>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row class="footer">
      <div class="list">
        <ul class="clearfix">
          <li>关于美团</li>
          <li>加入我们</li>
          <li>商家入驻</li>
          <li>帮助中心</li>
          <li>美团手机版</li>
        </ul>
      </div>
      <p>
        ©2020 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号
      </p>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dtm: false,
      focusPN: false,
      focusPW: false,
      userName: null,
      password: null,
      wrongMsg: null,
    };
  },
  methods: {
    handleFocus(type) {
      type == "PN" ? (this.focusPN = true) : (this.focusPW = true);
    },
    changePath() {
      this.dtm = !this.dtm;
    },
    submit() {
      if (!this.dtm) {
        if (!this.userName) {
          this.wrongMsg = "请输入手机号";
          return;
        } else if (!this.password) {
          this.wrongMsg = "请输入密码";
          return;
        }
        this.$axios
          .get("/api/meituan/login", {
            params: {
              userName: this.userName,
              password: this.password,
            },
          })
          .then((resp) => {
            if (resp.status == "fail") {
              this.wrongMsg = resp.msg;
            } else {
              this.$router.push({ name: "index" });
            }
          });
      } else {
        return;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.login {
  .header {
    margin: 40px 20% 30px;
    img {
      height: 47px;
      width: 130px;
    }
  }
  .mainCon {
    margin: 0 20%;
    img {
      width: 480px;
      height: 370px;
    }
    .form {
      height: 300px;
      color: #666;
      font-size: 14px;
      .wrong {
        box-sizing: border-box;
        //   height: 40px;
        width: 265px;
        padding: 10px;
        border: 1px solid #f5d8a7;
        background: #fff6db;
        margin-bottom: 8px;
        border-radius: 3px;
        i {
          font-size: 17px;
          margin-right: 5px;
          color: #f60;
        }
        .wrongMsg {
          font-size: 12px;
        }
      }
      input {
        border: none;
        outline: none;
      }
      .title {
        height: 20px;
        position: relative;
        .change {
          position: absolute;
          right: 0;
          top: -2px;
          font-size: 12px;
          vertical-align: text-top;
          cursor: pointer;
        }
      }
      .input {
        & > div {
          border: 1px solid #aaa;
          margin: 8px 0;
          height: 36px;
          line-height: 36px;
          &.focus {
            border: 1px solid #ffc300;
          }
          input {
            height: 34px;
            box-sizing: border-box;
            padding: 5px;
            &::placeholder {
              font-size: 16px;
            }
          }
          &.password {
            margin-top: 16px;
            position: relative;
            i {
              font-size: 20px;
              color: #e5e5e5;
              padding-left: 5px;
            }
            .getdtm {
              font-size: 12px;
              position: absolute;
              cursor: pointer;
              white-space: nowrap;
              right: 5px;
            }
          }
        }
      }
      .forget {
        font-size: 12px;
        color: #fe8c00;
        text-align: right;
        margin-bottom: 20px;
        span {
          cursor: pointer;
        }
      }

      .btn {
        width: 100%;
        border: none;
        padding: 7px 20px 6px;
        color: #222;
        font-weight: bold;
        border-radius: 3px;
        line-height: 1.5;
        background-image: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
        box-shadow: 0 2px 1px rgba(191, 105, 0, 0.15);
        margin-bottom: 8px;
        outline: none;
        cursor: pointer;
      }

      .noaccount {
        .toRegist {
          color: #fe8c00;
          cursor: pointer;
        }
        margin-bottom: 20px;
      }
      .tk {
        font-size: 12px;
        color: #999;
        margin-bottom: 20px;
        & > span {
          color: #fe8c00;
          cursor: pointer;
        }
      }

      .otherPath {
        border-top: 1px solid #ccc;
        position: relative;
        & > span {
          width: 150px;
          text-align: center;
          background-color: #fff;
          position: absolute;
          top: -10px;
          left: calc(50% - 75px);
        }
        .gap {
          margin: 15px;
          height: 1px;
        }
        .icon {
          text-align: center;
          span {
            display: inline-block;
            width: 18px;
            height: 18px;
            cursor: pointer;
            opacity: 0.8;
            &:hover {
              opacity: 1;
            }
          }
          .qq {
            background-image: url("https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png");
            background-position: -1250px -509px;
            margin-right: 20px;
          }
          .wb {
            background-image: url("https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png");
            background-position: -1250px -545px;
          }
        }
      }
    }
  }

  .footer {
    margin: 40px 20% 0;
    color: #999;
    font-size: 12px;
    .list {
      padding: 12px 0;
      margin-bottom: 20px;
      border: {
        top: 1px solid #eee;
        bottom: 1px solid #eee;
      }
      li {
        float: left;
        margin: 5px 0;
        border-right: 1px solid #eee;
        cursor: pointer;
        &:nth-child(1) {
          padding-right: 16px;
        }
        &:not(:nth-child(1)) {
          padding: 0 16px;
        }
      }
    }
    p {
      margin-bottom: 20px;
    }
  }
}
</style>