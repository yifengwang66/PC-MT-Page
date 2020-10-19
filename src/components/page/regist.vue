<template>
  <div class="regist">
    <el-row class="header">
      <div class="wrapper">
        <div class="logo" @click="$router.push({ name: 'index' })">
          <img
            src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/logo.6a89007.png"
          />
        </div>

        <div class="toLogin">
          <span>已有美团账号？</span>
          <span class="btn" @click="$router.push({ name: 'login' })">登录</span>
        </div>
      </div>
    </el-row>
    <el-row class="main">
      <div class="formfiled">
        <label>手机号</label>
        <input
          type="text"
          :class="{ fault: pnWrongMsg }"
          @blur="judgePhNum"
          v-model="userName"
          @focus="focus('ph')"
        />
        <span class="tip" v-show="!userName && !pnWrongMsg"
          >注册成功后，全美团通用</span
        >
        <span class="correct" v-show="pncor"
          ><i class="iconfont icon-gou2"></i
        ></span>
        <div
          class="wrong"
          :style="{ visibility: pnWrongMsg ? 'visible' : 'hidden' }"
        >
          <i class="el-icon-remove"></i>
          <span class="wrongMsg">{{ pnWrongMsg }}</span>
        </div>
      </div>

      <div class="getdtm">
        <input type="button" value="免费获取短信动态码" />
      </div>

      <div class="formfiled">
        <label>短信动态码</label>
        <input
          type="text"
          :class="{ fault: dtmWrongMsg }"
          @blur="judgeDtm"
          v-model="dtm"
          @focus="focus('dtm')"
        />
        <span class="correct" v-show="dtmcor"
          ><i class="iconfont icon-gou2"></i
        ></span>
        <div
          class="wrong"
          :style="{ visibility: dtmWrongMsg ? 'visible' : 'hidden' }"
        >
          <i class="el-icon-remove"></i>
          <span class="wrongMsg">{{ dtmWrongMsg }}</span>
        </div>
      </div>

      <div class="formfiled">
        <label>创建密码</label>
        <input
          type="password"
          :class="{ fault: pwWrongMsg }"
          @blur="judgePw"
          v-model="password"
          @focus="focus('pw')"
          @input="judgeLevel"
        />
        <span class="correct" v-show="pwcor"
          ><i class="iconfont icon-gou2"></i
        ></span>
        <div
          class="wrong"
          :style="{ visibility: pwWrongMsg ? 'visible' : 'hidden' }"
        >
          <i class="el-icon-remove"></i>
          <span class="wrongMsg">{{ pwWrongMsg }}</span>
        </div>
      </div>

      <div class="stength">
        <div
          class="colorfill"
          :class="{
            level1: pwlevel == 1,
            level2: pwlevel == 2,
            level3: pwlevel == 3,
          }"
        ></div>
        <div class="levelwrap">
          <span class="level">弱</span>
          <span class="level">中</span>
          <span class="level">强</span>
        </div>
      </div>

      <div class="formfiled">
        <label>确认密码</label>
        <input
          type="password"
          :class="{ fault: rpwWrongMsg }"
          @blur="judgeRpw"
          v-model="rePassword"
          @focus="focus('rpw')"
        />
        <span class="correct" v-show="rpwcor"
          ><i class="iconfont icon-gou2"></i
        ></span>
        <div
          class="wrong"
          :style="{ visibility: rpwWrongMsg ? 'visible' : 'hidden' }"
        >
          <i class="el-icon-remove"></i>
          <span class="wrongMsg">{{ rpwWrongMsg }}</span>
        </div>
      </div>

      <div class="btn">
        <button @click="submit">同意以下协议并注册</button>
      </div>

      <div class="tk">
        <a href="/">《美团点评用户服务协议》</a>
        <a href="/">《美团点评隐私政策》</a>
      </div>
    </el-row>

    <el-row class="footer">
      <p>©meituan.com 京ICP证070791号 京公网安备11010502025545号</p>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: null,
      pnWrongMsg: null,
      pncor: false,
      dtm: null,
      dtmWrongMsg: null,
      dtmcor: false,
      password: null,
      pwWrongMsg: null,
      pwcor: false,
      rePassword: null,
      rpwWrongMsg: null,
      rpwcor: false,
      pwlevel: null,
    };
  },
  methods: {
    judgePhNum() {
      let reg = /^\d{11}$/;
      if (!this.userName) {
        this.pnWrongMsg = "请输入您的手机号";
        return false;
      }
      if (!reg.test(this.userName)) {
        this.pnWrongMsg = "请输入正确的11位手机号";
        return false;
      }
      this.pncor = true;
      return true;
    },
    judgeDtm() {
      if (!this.dtm) {
        this.dtmWrongMsg = "请输入短信动态码";
        return false;
      }
      this.dtmcor = true;
      return true;
    },
    judgePw() {
      if (!this.password) {
        this.pwWrongMsg = "请输入密码";
        return false;
      }
      if (this.password.length < 6 || this.password.length > 16) {
        this.pwWrongMsg = "密码必须为6-16位的字母数字或下划线组成";
        return false;
      }
      this.pwcor = true;
      return true;
    },
    judgeLevel() {
      let regArr = [/[\W]/, /[A-Z]/, /[a-z]/, /\d/];
      let typeNum = 0;
      if (!this.password) {
        this.pwlevel = 0;
        return;
      }
      if (/\s/.test(this.password)) {
        this.pwWrongMsg = "密码中不能包含空格、回车、制表符，请重新输入";
        this.password = "";
        this.pwlevel = 0;
        return;
      }
      //匹配小写字母，大写字母，数字和符号中出现了哪几个种类
      regArr.forEach((item) => {
        if (item.test(this.password)) {
          typeNum++;
        }
      });
      //等级规则
      if (typeNum == 4) {
        //四种都有，长度大于9则为强，大于四则为中
        if (this.password.length >= 9) {
          this.pwlevel = 3;
        } else if (this.password.length >= 4) {
          this.pwlevel = 2;
        }
      } else if (typeNum == 3) {
        //有三种，长度大于13则为强，大于6则为中，否则为弱
        if (this.password.length >= 13) {
          this.pwlevel = 3;
        } else if (this.password.length >= 6) {
          this.pwlevel = 2;
        } else {
          this.pwlevel = 1;
        }
      } else if (typeNum == 2) {
        //有两种，长度大于11为中，否则为弱
        if (this.password.length >= 11) {
          this.pwlevel = 2;
        } else {
          this.pwlevel = 1;
        }
      } else {
        // 只有一种，为弱
        this.pwlevel = 1;
      }
    },
    judgeRpw() {
      if (!this.rePassword) {
        this.rpwWrongMsg = "请确认密码";
        return false;
      }
      if (this.rePassword != this.password) {
        this.rpwWrongMsg = "确认密码与密码不一致";
        return false;
      }
      this.rpwcor = true;
      return true;
    },
    submit() {
      if (
        this.pnWrongMsg ||
        this.pwWrongMsg ||
        this.rpwWrongMsg ||
        this.dtmWrongMsg
      ) {
        return;
      }
      this.$axios
        .get("/api/meituan/register", {
          params: {
            userName: this.userName,
            password: this.password,
            rePassword: this.rePassword,
          },
        })
        .then((resp) => {
          console.log(resp);
          if (resp.status == "success") {
            if(confirm(resp.msg + ',是否跳转到登录页面')){
              this.$router.push({name: 'login'});
            }
          }else {
            alert(resp.msg);
          }
        });
    },
    focus(type) {
      switch (type) {
        case "ph":
          this.pnWrongMsg = null;
          this.pncor = false;
          break;
        case "dtm":
          this.dtmWrongMsg = null;
          this.dtmcor = false;
          break;
        case "pw":
          this.pwWrongMsg = null;
          this.pwcor = false;
          break;
        case "rpw":
          this.rpwWrongMsg = null;
          this.rpwcor = false;
          break;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.regist {
  font-size: 14px;
  color: #666;
  .header {
    border-bottom: 2px solid #d8d8d8;
    .wrapper {
      margin: 0 20%;
      padding: 10px 0;
      .logo {
        display: inline-block;
        img {
          width: 128px;
        }
      }
      .toLogin {
        float: right;
        line-height: 40px;
        .btn {
          font-size: 12px;
          padding: 4px 10px;
          margin-left: 10px;
          border-radius: 3px;
          cursor: pointer;
          color: #222;
          background-image: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
          box-shadow: 0 2px 1px rgba(191, 105, 0, 0.15);
        }
      }
    }
  }
  .main {
    margin: 0 20%;
    padding-top: 30px;
    .formfiled {
      position: relative;
      padding: 8px 0 8px 110px;
      label {
        width: 100px;
        text-align: right;
        position: absolute;
        left: 0;
        padding-top: 6px;
        color: #333;
      }
      input {
        height: 24px;
        padding: 5px;
        width: 248px;
        border: 1px solid #aaa;
        outline: none;
        &:focus {
          border: 1px solid #ffc300 !important;
        }
        &.fault {
          border: 1px solid #f76120;
        }
      }
      .correct {
        i {
          font-size: 20px;
          color: rgb(142, 210, 0);
        }
      }
      .wrong {
        display: inline-block;
        box-sizing: border-box;
        //   height: 40px;
        padding: 7px;
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
      .tip {
        color: #999;
        font-size: 12px;
        margin-left: 10px;
      }
    }

    .getdtm {
      padding-left: 110px;
      input {
        border: 1px solid #e3e3e3;
        background-color: #dedede;
        border-radius: 3px;
        border-bottom: 1px solid #aaa;
        background-image: linear-gradient(to bottom, #f7f7f7, #dedede);
        font-size: 12px;
        padding: 1px 8px 0;
        color: #333;
        outline: none;
        cursor: pointer;
        letter-spacing: 0.1em;
        line-height: 1.5;
        &:hover {
          background-image: linear-gradient(to bottom, #fff, #e9e9e9);
        }
        &:active {
          background-image: linear-gradient(to bottom, #ddd, #eee);
        }
      }
    }

    .stength {
      margin-left: 110px;
      background: #eee;
      width: 260px;
      display: inline-block;
      position: relative;
      .colorfill {
        height: 20px;
        width: 0;
        transition: all 0.5s ease;
        &.level1 {
          width: 85px;
          background: #f76120;
        }
        &.level2 {
          width: 172px;
          background: #ff8900;
        }
        &.level3 {
          width: 259px;
          background: #5bab3c;
        }
      }
      .levelwrap {
        position: absolute;
        top: 0;
        left: 0;
        .level {
          display: block;
          float: left;
          height: 20px;
          line-height: 20px;
          width: 85px;
          text-align: center;
          color: #fff;
          font-size: 12px;
          &:not(:nth-child(3)) {
            border-right: 2px solid #fff;
          }
        }
      }
    }

    .btn {
      padding: 8px 0 8px 110px;
      button {
        padding: 7px 20px 6px;
        font-size: 14px;
        color: #222222;
        background-image: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
        box-shadow: 0 2px 1px rgba(191, 105, 0, 0.15);
        font-weight: bold;
        border: none;
        letter-spacing: 0.1em;
        line-height: 1.5;
        border-radius: 3px;
        outline: none;
        cursor: pointer;
      }
    }

    .tk {
      padding: 8px 0 8px 110px;
      a {
        color: #fe8c00;
        font-size: 13px;
      }
    }
  }

  .footer {
    border-top: 1px solid #e5e5e5;
    margin-top: 20px;
    p {
      text-align: center;
      color: #999;
      font-size: 12px;
      padding: 20px 0;
    }
  }
}
</style>