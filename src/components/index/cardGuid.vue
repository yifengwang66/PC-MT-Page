<template>
  <div class="cardGuid clearfix" :style="{ background: guidInfo.backColor }">
    <dl>
      <dt>{{ guidInfo.title }}</dt>
      <dd
        v-for="(item, index) in guidInfo.children"
        :key="index"
        @mouseenter="handleCardHover(item, index)"
        @mouseleave="handleCardLeave"
        :class="{ active: curIndex == index }"
        :data-type="item.kind"
      >
        {{ item.title }}
      </dd>
    </dl>

    <div class="more">
      <span>全部</span>
      <i class="el-icon-arrow-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      curIndex: 0,
      timer: null,
    };
  },
  props: {
    guidInfo: {
      require: true,
      type: Object,
    },
  },
  methods: {
    handleCardHover(item, index) {
      this.timer = setTimeout(() => {
        if (index == this.curIndex) return;
        this.curIndex = index;
        this.$axios
          .get("/api/meituan/index/resultsByKeywords.json", {
            params: {
              kind: item.kind,
            },
          })
          .then((resp) => {
            this.$emit("changeKind", resp);
          });
      }, 100);
    },
    handleCardLeave(){
      clearTimeout(this.timer);
    }
  },
  mounted() {
    this.$axios
      .get("/api/meituan/index/resultsByKeywords.json", {
        params: {
          kind: this.guidInfo.children[0].kind,
        },
      })
      .then((resp) => {
        this.$emit("changeKind", resp);
      });
  },
};
</script>

<style scoped lang="scss">
.cardGuid {
  background: linear-gradient(
      to right,
      rgb(250, 60, 104) 2%,
      rgb(254, 70, 77) 97%
    )
    rgb(250, 60, 104);
  color: #fff;
  border-radius: 5px 5px 0 0;
  dl {
    float: left;
    dt,
    dd {
      float: left;
      height: 44px;
      line-height: 44px;
      cursor: pointer;
    }
    dt {
      font-size: 18px;
      margin: 0 10px 0 13px;
    }
    dd {
      font-size: 14px;
      padding: 0 5px;
      position: relative;
      &.active::after {
        content: " ";
        position: absolute;
        display: block;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 7px solid #fff;
        top: 37px;
        width: 2px;
        height: 0;
        margin: auto;
        left: 0;
        right: 0;
      }
    }
  }
  .more {
    float: right;
    cursor: pointer;
    height: 44px;
    line-height: 44px;
    font-size: 14px;
    margin: 0 12px 0 0;
  }
}
</style>