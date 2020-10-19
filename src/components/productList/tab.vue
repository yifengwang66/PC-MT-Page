<template>
  <div class="tab">
    <div class="text" @mouseover="handlemouseover" @mouseout="handlemouseout">
      <span>{{ data.title }}</span>
      <i class="el-icon-caret-bottom"></i>
    </div>

    <div
      class="subList"
      @mouseover="handlemouseover"
      @mouseout="handlemouseout"
      v-show="listShow"
    >
      <dl>
        <dt>{{ data.title }}</dt>
        <div class="wrap" :style="{ width: data.subList.length * 125 + 'px' }">
          <dd v-for="(item, index) in data.subList" :key="index">
            <span>{{ item }}</span>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listShow: false,
      timer: null,
    };
  },
  props: {
    data: {
      type: Object,
      require: true,
    },
  },
  methods: {
    handlemouseover() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.listShow = true;
      }, 200);
    },
    handlemouseout() {
        clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.listShow = false;
      }, 100);
    },
  },
};
</script>

<style scoped lang="scss">
.tab {
  padding: 0 10px;
  position: relative;
  .text {
    display: inline-block;
    cursor: pointer;
  }
  i {
    font-size: 12px;
  }
  .subList {
    z-index: 10;
    position: absolute;
    top: 28px;
    left: 0;
    background: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    padding: 20px 15px 15px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
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
    dt {
      font-size: 16px;
      color: #ccc;
      margin-bottom: 10px;
    }
    .wrap {
      max-width: 510px;
      dd {
        width: 120px;
        display: inline-block;
        font-size: 12px;
        height: 22px;
        line-height: 22px;
        color: #666;
        span:hover {
          cursor: pointer;
        }
      }
    }
  }
}
</style>